// ================================================================
// BILA Bible Engine
// 和合本圣经 JSON 动态读取引擎
// ================================================================

const BIBLE_CONFIG = {
  version: "CUV",
  name: "和合本",
  
  // GitHub Raw 地址
  baseUrl:
    "https://raw.githubusercontent.com/zemeiyu2-lgtm/BILA-deepseek/main/"
};

// ================================================================
// 1. 书卷名称映射
// ================================================================

const BOOK_MAP = {
  "创世记": "gn",
  "出埃及记": "ex",
  "利未记": "lv",
  "民数记": "nm",
  "申命记": "dt",

  "约书亚记": "js",
  "士师记": "jud",
  "路得记": "rt",

  "撒母耳记上": "1sm",
  "撒母耳记下": "2sm",
  "列王纪上": "1ki",
  "列王纪下": "2ki",
  "历代志上": "1ch",
  "历代志下": "2ch",

  "以斯拉记": "ez",
  "尼希米记": "ne",
  "以斯帖记": "es",
  "约伯记": "job",
  "诗篇": "ps",
  "箴言": "pr",
  "传道书": "ec",
  "雅歌": "so",

  "以赛亚书": "isa",
  "耶利米书": "jr",
  "耶利米哀歌": "lm",
  "以西结书": "ezk",
  "但以理书": "dn",
  "何西阿书": "ho",
  "约珥书": "jl",
  "阿摩司书": "am",
  "俄巴底亚书": "ob",
  "约拿书": "jn",
  "弥迦书": "mi",
  "那鸿书": "na",
  "哈巴谷书": "hk",
  "西番雅书": "zp",
  "哈该书": "hg",
  "撒迦利亚书": "zc",
  "玛拉基书": "ml",

  "马太福音": "mt",
  "马可福音": "mk",
  "路加福音": "lk",
  "约翰福音": "jn",
  "使徒行传": "ac",

  "罗马书": "rm",
  "哥林多前书": "1co",
  "哥林多后书": "2co",
  "加拉太书": "ga",
  "以弗所书": "ep",
  "腓立比书": "ph",
  "歌罗西书": "cl",

  "帖撒罗尼迦前书": "1th",
  "帖撒罗尼迦后书": "2th",

  "提摩太前书": "1ti",
  "提摩太后书": "2ti",
  "提多书": "tt",
  "腓利门书": "phm",

  "希伯来书": "hb",
  "雅各书": "jm",
  "彼得前书": "1pe",
  "彼得后书": "2pe",
  "约翰一书": "1jn",
  "约翰二书": "2jn",
  "约翰三书": "3jn",
  "犹大书": "jd",
  "启示录": "rv"
};


// ================================================================
// 2. 缓存
// ================================================================

const BibleCache = {};


// ================================================================
// 3. 清理经文文字
// ================================================================

function cleanBibleText(text) {

  if (!text) return "";

  return text
    // 去掉中文字符之间被错误加入的空格
    .replace(/\s+/g, "")
    
    // 保留必要标点后的正常阅读效果
    .replace(/([，。！？；：、])/g, "$1")
    
    .trim();
}


// ================================================================
// 4. 加载一本圣经书卷
// ================================================================

async function loadBibleBook(abbrev) {

  if (BibleCache[abbrev]) {
    return BibleCache[abbrev];
  }

  const url = BIBLE_CONFIG.baseUrl + "zh_cuv.json";

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        "圣经数据加载失败：" + response.status
      );
    }

    const data = await response.json();

    BibleCache[abbrev] = data;

    return data;

  } catch (error) {

    console.error("Bible Engine Error:", error);

    throw error;
  }
}


// ================================================================
// 5. 根据书卷 + 章 + 节读取经文
// ================================================================

async function getBibleVerse(book, chapter, verse) {

  const abbrev = BOOK_MAP[book];

  if (!abbrev) {
    throw new Error("找不到书卷：" + book);
  }

  const data = await loadBibleBook(abbrev);

  const bookData = data.find(
    item => item.abbrev === abbrev
  );

  if (!bookData) {
    throw new Error(
      "圣经数据库中没有找到：" + book
    );
  }

  const chapterData =
    bookData.chapters[chapter - 1];

  if (!chapterData) {
    throw new Error(
      `${book} 第 ${chapter} 章不存在`
    );
  }

  const text = chapterData[verse - 1];

  if (!text) {
    throw new Error(
      `${book} ${chapter}:${verse} 不存在`
    );
  }

  return cleanBibleText(text);
}


// ================================================================
// 6. 读取整章
// ================================================================

async function getBibleChapter(book, chapter) {

  const abbrev = BOOK_MAP[book];

  if (!abbrev) {
    throw new Error("找不到书卷：" + book);
  }

  const data = await loadBibleBook(abbrev);

  const bookData =
    data.find(item => item.abbrev === abbrev);

  if (!bookData) {
    throw new Error("找不到圣经书卷：" + book);
  }

  const chapterData =
    bookData.chapters[chapter - 1];

  if (!chapterData) {
    throw new Error(
      `${book} 第 ${chapter} 章不存在`
    );
  }

  return chapterData.map(
    (verse, index) => ({
      verse: index + 1,
      text: cleanBibleText(verse)
    })
  );
}


// ================================================================
// 7. 读取经文范围
// 例如：约翰福音 1:1-18
// ================================================================

async function getBiblePassage(
  book,
  chapter,
  startVerse,
  endVerse
) {

  const verses =
    await getBibleChapter(book, chapter);

  return verses
    .filter(
      v =>
        v.verse >= startVerse &&
        v.verse <= endVerse
    )
    .map(
      v =>
        `${v.verse} ${v.text}`
    )
    .join("\n");
}


// ================================================================
// 8. 解析 MOS / BILA 经文引用
// ================================================================

function parseBibleReference(reference) {

  const match = reference.match(
    /^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/
  );

  if (!match) {
    return null;
  }

  return {
    book: match[1],
    chapter: Number(match[2]),
    startVerse: Number(match[3]),
    endVerse:
      match[4]
        ? Number(match[4])
        : Number(match[3])
  };
}


// ================================================================
// 9. 一行调用
// ================================================================

async function getBibleText(reference) {

  const parsed =
    parseBibleReference(reference);

  if (!parsed) {
    throw new Error(
      "无法解析经文引用：" + reference
    );
  }

  return getBiblePassage(
    parsed.book,
    parsed.chapter,
    parsed.startVerse,
    parsed.endVerse
  );
}


// ================================================================
// 10. 测试
// ================================================================

async function testBibleEngine() {

  try {

    const text =
      await getBibleText(
        "约翰福音 1:1-18"
      );

    console.log(
      "📖 和合本测试成功："
    );

    console.log(text);

  } catch (error) {

    console.error(
      "❌ Bible Engine 测试失败：",
      error
    );
  }
}
