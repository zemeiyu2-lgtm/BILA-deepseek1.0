// ================================================================
// BILA Bible Engine V2.0
// 和合本圣经 JSON 动态读取引擎
//
// 数据源：GitHub Raw
// 数据文件：zh_cuv.json
//
// 功能：
// 1. 动态读取和合本圣经
// 2. 自动繁体 → 简体
// 3. 自动清除经文异常空格
// 4. 支持单节 / 经文范围 / 整章
// 5. 支持 MOS / BILA 标准经文引用
// 6. 自动缓存，减少重复请求
// ================================================================


// ================================================================
// 0. 基础配置
// ================================================================

const BIBLE_CONFIG = {

  version: "CUV",

  name: "和合本",

  fileName: "zh_cuv.json",

  baseUrl:
    "https://raw.githubusercontent.com/zemeiyu2-lgtm/BILA-deepseek/main/",

  timeout: 15000

};


// ================================================================
// 1. 66卷圣经标准名称
// ================================================================

const BOOKS = [

  // 旧约
  {
    name: "创世记",
    abbrev: "gn"
  },
  {
    name: "出埃及记",
    abbrev: "ex"
  },
  {
    name: "利未记",
    abbrev: "lv"
  },
  {
    name: "民数记",
    abbrev: "nm"
  },
  {
    name: "申命记",
    abbrev: "dt"
  },

  {
    name: "约书亚记",
    abbrev: "js"
  },
  {
    name: "士师记",
    abbrev: "jud"
  },
  {
    name: "路得记",
    abbrev: "rt"
  },

  {
    name: "撒母耳记上",
    abbrev: "1sm"
  },
  {
    name: "撒母耳记下",
    abbrev: "2sm"
  },

  {
    name: "列王纪上",
    abbrev: "1ki"
  },
  {
    name: "列王纪下",
    abbrev: "2ki"
  },

  {
    name: "历代志上",
    abbrev: "1ch"
  },
  {
    name: "历代志下",
    abbrev: "2ch"
  },

  {
    name: "以斯拉记",
    abbrev: "ezr"
  },
  {
    name: "尼希米记",
    abbrev: "ne"
  },
  {
    name: "以斯帖记",
    abbrev: "es"
  },

  {
    name: "约伯记",
    abbrev: "job"
  },
  {
    name: "诗篇",
    abbrev: "ps"
  },
  {
    name: "箴言",
    abbrev: "pr"
  },
  {
    name: "传道书",
    abbrev: "ec"
  },
  {
    name: "雅歌",
    abbrev: "so"
  },

  {
    name: "以赛亚书",
    abbrev: "isa"
  },
  {
    name: "耶利米书",
    abbrev: "jr"
  },
  {
    name: "耶利米哀歌",
    abbrev: "lm"
  },
  {
    name: "以西结书",
    abbrev: "ezk"
  },
  {
    name: "但以理书",
    abbrev: "dn"
  },

  {
    name: "何西阿书",
    abbrev: "ho"
  },
  {
    name: "约珥书",
    abbrev: "jl"
  },
  {
    name: "阿摩司书",
    abbrev: "am"
  },
  {
    name: "俄巴底亚书",
    abbrev: "ob"
  },
  {
    name: "约拿书",
    abbrev: "jon"
  },
  {
    name: "弥迦书",
    abbrev: "mi"
  },
  {
    name: "那鸿书",
    abbrev: "na"
  },
  {
    name: "哈巴谷书",
    abbrev: "hk"
  },
  {
    name: "西番雅书",
    abbrev: "zp"
  },
  {
    name: "哈该书",
    abbrev: "hg"
  },
  {
    name: "撒迦利亚书",
    abbrev: "zc"
  },
  {
    name: "玛拉基书",
    abbrev: "ml"
  },


  // 新约
  {
    name: "马太福音",
    abbrev: "mt"
  },
  {
    name: "马可福音",
    abbrev: "mk"
  },
  {
    name: "路加福音",
    abbrev: "lk"
  },
  {
    name: "约翰福音",
    abbrev: "jhn"
  },
  {
    name: "使徒行传",
    abbrev: "ac"
  },

  {
    name: "罗马书",
    abbrev: "rm"
  },

  {
    name: "哥林多前书",
    abbrev: "1co"
  },
  {
    name: "哥林多后书",
    abbrev: "2co"
  },

  {
    name: "加拉太书",
    abbrev: "ga"
  },
  {
    name: "以弗所书",
    abbrev: "ep"
  },
  {
    name: "腓立比书",
    abbrev: "ph"
  },
  {
    name: "歌罗西书",
    abbrev: "cl"
  },

  {
    name: "帖撒罗尼迦前书",
    abbrev: "1th"
  },
  {
    name: "帖撒罗尼迦后书",
    abbrev: "2th"
  },

  {
    name: "提摩太前书",
    abbrev: "1ti"
  },
  {
    name: "提摩太后书",
    abbrev: "2ti"
  },

  {
    name: "提多书",
    abbrev: "tt"
  },
  {
    name: "腓利门书",
    abbrev: "phm"
  },

  {
    name: "希伯来书",
    abbrev: "hb"
  },
  {
    name: "雅各书",
    abbrev: "jm"
  },

  {
    name: "彼得前书",
    abbrev: "1pe"
  },
  {
    name: "彼得后书",
    abbrev: "2pe"
  },

  {
    name: "约翰一书",
    abbrev: "1jn"
  },
  {
    name: "约翰二书",
    abbrev: "2jn"
  },
  {
    name: "约翰三书",
    abbrev: "3jn"
  },

  {
    name: "犹大书",
    abbrev: "jd"
  },

  {
    name: "启示录",
    abbrev: "rv"
  }

];


// ================================================================
// 2. 别名系统
// ================================================================

const BOOK_ALIASES = {

  "创": "创世记",
  "出": "出埃及记",
  "利": "利未记",
  "民": "民数记",
  "申": "申命记",

  "书": "约书亚记",
  "书约": "约书亚记",

  "士": "士师记",
  "得": "路得记",

  "撒上": "撒母耳记上",
  "撒下": "撒母耳记下",

  "王上": "列王纪上",
  "王下": "列王纪下",

  "代上": "历代志上",
  "代下": "历代志下",

  "拉": "以斯拉记",
  "尼": "尼希米记",
  "斯": "以斯帖记",

  "伯": "约伯记",
  "诗": "诗篇",
  "诗篇": "诗篇",
  "箴": "箴言",
  "传": "传道书",
  "歌": "雅歌",

  "赛": "以赛亚书",
  "耶": "耶利米书",
  "哀": "耶利米哀歌",
  "结": "以西结书",
  "但": "但以理书",

  "何": "何西阿书",
  "珥": "约珥书",
  "摩": "阿摩司书",
  "俄": "俄巴底亚书",
  "拿": "约拿书",
  "弥": "弥迦书",
  "鸿": "那鸿书",
  "哈": "哈巴谷书",
  "番": "西番雅书",
  "该": "哈该书",
  "亚": "撒迦利亚书",
  "玛": "玛拉基书",

  "太": "马太福音",
  "可": "马可福音",
  "路": "路加福音",
  "约": "约翰福音",
  "徒": "使徒行传",

  "罗": "罗马书",
  "林前": "哥林多前书",
  "林后": "哥林多后书",

  "加": "加拉太书",
  "弗": "以弗所书",
  "腓": "腓立比书",
  "西": "歌罗西书",

  "帖前": "帖撒罗尼迦前书",
  "帖后": "帖撒罗尼迦后书",

  "提前": "提摩太前书",
  "提后": "提摩太后书",

  "多": "提多书",
  "门": "腓利门书",

  "来": "希伯来书",
  "雅": "雅各书",

  "彼前": "彼得前书",
  "彼后": "彼得后书",

  "约一": "约翰一书",
  "约二": "约翰二书",
  "约三": "约翰三书",

  "犹": "犹大书",
  "启": "启示录"

};


// ================================================================
// 3. 中文繁体 → 简体转换表
//
// 不依赖第三方库。
// 这里处理圣经中最常见的繁体字。
// ================================================================

const TRADITIONAL_TO_SIMPLIFIED = {

  "創": "创",
  "造": "造",
  "說": "说",
  "神": "神",
  "與": "与",
  "為": "为",
  "這": "这",
  "是": "是",
  "的": "的",
  "靈": "灵",
  "運": "运",
  "行": "行",
  "在": "在",
  "水": "水",
  "面": "面",
  "上": "上",

  "開": "开",
  "稱": "称",
  "晝": "昼",
  "晚": "晚",
  "氣": "气",
  "將": "将",
  "分": "分",

  "說": "说",
  "諸": "诸",
  "間": "间",
  "聚": "聚",
  "處": "处",
  "讓": "让",

  "聖": "圣",
  "徒": "徒",
  "恩": "恩",
  "惠": "惠",
  "眾": "众",
  "同": "同",
  "阿": "阿",
  "們": "们",

  "耶": "耶",
  "穌": "稣",
  "願": "愿",
  "來": "来",
  "刪": "删",
  "麼": "么",
  "從": "从",
  "書": "书",
  "寫": "写",
  "生": "生",
  "命": "命",
  "樹": "树",
  "城": "城",
  "證": "证",
  "必": "必",
  "快": "快",

  "為": "为",
  "與": "与",
  "無": "无",
  "萬": "万",
  "個": "个",
  "們": "们",
  "後": "后",
  "來": "来",
  "見": "见",
  "聽": "听",
  "從": "从",
  "給": "给",
  "問": "问",
  "說": "说",
  "話": "话",

  "國": "国",
  "天": "天",
  "地": "地",
  "愛": "爱",
  "義": "义",
  "真": "真",
  "實": "实",
  "門": "门",
  "學": "学",
  "習": "习",
  "聖": "圣",
  "經": "经"

};


// ================================================================
// 4. 缓存
// ================================================================

let BibleDataCache = null;

let BibleBookIndex = null;

let BibleLoadingPromise = null;


// ================================================================
// 5. 繁体 → 简体
// ================================================================

function traditionalToSimplified(text) {

  if (!text) {
    return "";
  }

  return text
    .split("")
    .map(char => {

      return (
        TRADITIONAL_TO_SIMPLIFIED[char] ||
        char
      );

    })
    .join("");

}


// ================================================================
// 6. 清理圣经文字
// ================================================================

function cleanBibleText(text) {

  if (!text) {
    return "";
  }

  let result = text;

  // 删除所有空白
  result = result.replace(/\s+/g, "");

  // 繁体转简体
  result = traditionalToSimplified(result);

  // 删除 BOM
  result = result.replace(/\uFEFF/g, "");

  return result.trim();

}


// ================================================================
// 7. 加载整个圣经 JSON
// ================================================================

async function loadBibleData() {

  // 已经加载
  if (BibleDataCache) {

    return BibleDataCache;

  }


  // 已经有一个请求正在执行
  if (BibleLoadingPromise) {

    return BibleLoadingPromise;

  }


  const url =
    BIBLE_CONFIG.baseUrl +
    BIBLE_CONFIG.fileName;


  BibleLoadingPromise =
    fetch(
      url,
      {
        cache: "force-cache"
      }
    )
      .then(response => {

        if (!response.ok) {

          throw new Error(
            "圣经数据加载失败：HTTP " +
            response.status
          );

        }

        return response.json();

      })
      .then(data => {

        if (!Array.isArray(data)) {

          throw new Error(
            "圣经 JSON 数据格式错误"
          );

        }

        BibleDataCache = data;

        buildBibleBookIndex(data);

        return data;

      })
      .catch(error => {

        BibleLoadingPromise = null;

        console.error(
          "BILA Bible Engine:",
          error
        );

        throw error;

      });


  return BibleLoadingPromise;

}


// ================================================================
// 8. 建立书卷索引
// ================================================================

function buildBibleBookIndex(data) {

  BibleBookIndex = {};


  data.forEach((book, index) => {

    if (!book) {
      return;
    }

    const abbrev =
      book.abbrev;


    if (abbrev) {

      BibleBookIndex[
        abbrev.toLowerCase()
      ] = book;

    }

    if (book.name) {

      BibleBookIndex[
        book.name
      ] = book;

    }

  });

}


// ================================================================
// 9. 查找书卷
// ================================================================

function findBibleBook(bookName) {

  if (!BibleDataCache) {

    throw new Error(
      "圣经数据库尚未加载"
    );

  }


  let name =
    String(bookName || "")
      .trim();


  // 标准名称
  if (
    BOOKS.some(
      book =>
        book.name === name
    )
  ) {

    const standard =
      BOOKS.find(
        book =>
          book.name === name
      );

    // 优先按照数据库实际名称寻找
    const found =
      BibleDataCache.find(
        item =>
          item.name === standard.name
      );

    if (found) {
      return found;
    }

    // 再尝试 abbrev
    const byAbbrev =
      BibleDataCache.find(
        item =>
          item.abbrev === standard.abbrev
      );

    if (byAbbrev) {
      return byAbbrev;
    }

  }


  // 别名
  if (BOOK_ALIASES[name]) {

    return findBibleBook(
      BOOK_ALIASES[name]
    );

  }


  // 直接根据 abbrev
  const byAbbrev =
    BibleDataCache.find(
      item =>
        item.abbrev === name
    );


  if (byAbbrev) {

    return byAbbrev;

  }


  throw new Error(
    "找不到圣经书卷：" +
    bookName
  );

}


// ================================================================
// 10. 获取单节
// ================================================================

async function getBibleVerse(
  book,
  chapter,
  verse
) {

  await loadBibleData();


  const bookData =
    findBibleBook(book);


  const chapterNumber =
    Number(chapter);

  const verseNumber =
    Number(verse);


  if (
    !Number.isInteger(chapterNumber) ||
    chapterNumber < 1
  ) {

    throw new Error(
      "章节编号错误：" +
      chapter
    );

  }


  if (
    !Number.isInteger(verseNumber) ||
    verseNumber < 1
  ) {

    throw new Error(
      "节编号错误：" +
      verse
    );

  }


  const chapterData =
    bookData.chapters[
      chapterNumber - 1
    ];


  if (!chapterData) {

    throw new Error(
      `${book} 第 ${chapterNumber} 章不存在`
    );

  }


  const text =
    chapterData[
      verseNumber - 1
    ];


  if (!text) {

    throw new Error(
      `${book} ${chapterNumber}:${verseNumber} 不存在`
    );

  }


  return cleanBibleText(text);

}


// ================================================================
// 11. 获取整章
// ================================================================

async function getBibleChapter(
  book,
  chapter
) {

  await loadBibleData();


  const bookData =
    findBibleBook(book);


  const chapterNumber =
    Number(chapter);


  const chapterData =
    bookData.chapters[
      chapterNumber - 1
    ];


  if (!chapterData) {

    throw new Error(
      `${book} 第 ${chapterNumber} 章不存在`
    );

  }


  return chapterData.map(
    (verse, index) => {

      return {

        verse:
          index + 1,

        text:
          cleanBibleText(
            verse
          )

      };

    }
  );

}


// ================================================================
// 12. 获取经文范围
//
// 例如：
// 约翰福音 1:1-18
//
// 返回：
// 1 太初有道，道与神同在，道就是神。
// 2 这道太初与神同在。
// ================================================================

async function getBiblePassage(
  book,
  chapter,
  startVerse,
  endVerse
) {

  const verses =
    await getBibleChapter(
      book,
      chapter
    );


  const start =
    Number(startVerse);

  const end =
    Number(endVerse);


  if (
    start < 1 ||
    end < start
  ) {

    throw new Error(
      "经文范围错误"
    );

  }


  return verses

    .filter(
      verse =>
        verse.verse >= start &&
        verse.verse <= end
    )

    .map(
      verse =>
        `${verse.verse} ${verse.text}`
    )

    .join("\n");

}


// ================================================================
// 13. 解析经文引用
//
// 支持：
// 约翰福音 1:1
// 约翰福音 1:1-18
// 太 5:3
// 罗 12:1-2
// ================================================================

function parseBibleReference(
  reference
) {

  if (!reference) {

    return null;

  }


  const value =
    String(reference)
      .trim();


  const match =
    value.match(
      /^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/
    );


  if (!match) {

    return null;

  }


  return {

    book:
      match[1].trim(),

    chapter:
      Number(match[2]),

    startVerse:
      Number(match[3]),

    endVerse:
      match[4]
        ? Number(match[4])
        : Number(match[3])

  };

}


// ================================================================
// 14. 一行读取经文
//
// 使用：
//
// await getBibleText(
//   "约翰福音 1:1-18"
// );
//
// ================================================================

async function getBibleText(
  reference
) {

  const parsed =
    parseBibleReference(
      reference
    );


  if (!parsed) {

    throw new Error(
      "无法解析经文引用：" +
      reference
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
// 15. 返回结构化经文
//
// 以后 MOS 使用会更方便
// ================================================================

async function getBiblePassageData(
  reference
) {

  const parsed =
    parseBibleReference(
      reference
    );


  if (!parsed) {

    throw new Error(
      "无法解析经文引用：" +
      reference
    );

  }


  const verses =
    await getBibleChapter(
      parsed.book,
      parsed.chapter
    );


  return {

    version:
      BIBLE_CONFIG.version,

    name:
      BIBLE_CONFIG.name,

    book:
      parsed.book,

    chapter:
      parsed.chapter,

    startVerse:
      parsed.startVerse,

    endVerse:
      parsed.endVerse,

    reference:
      reference,

    verses:
      verses.filter(
        verse =>
          verse.verse >=
            parsed.startVerse &&
          verse.verse <=
            parsed.endVerse
      )

  };

}


// ================================================================
// 16. 检查圣经数据库
// ================================================================

async function checkBibleEngine() {

  try {

    const data =
      await loadBibleData();


    console.log(
      "================================"
    );

    console.log(
      "📖 BILA Bible Engine"
    );

    console.log(
      "版本：",
      BIBLE_CONFIG.name
    );

    console.log(
      "数据文件：",
      BIBLE_CONFIG.fileName
    );

    console.log(
      "书卷数量：",
      data.length
    );

    console.log(
      "================================"
    );


    return {

      success: true,

      version:
        BIBLE_CONFIG.version,

      name:
        BIBLE_CONFIG.name,

      bookCount:
        data.length

    };

  } catch (error) {

    console.error(
      "❌ 圣经引擎检查失败：",
      error
    );


    return {

      success: false,

      error:
        error.message

    };

  }

}


// ================================================================
// 17. 测试
// ================================================================

async function testBibleEngine() {

  console.log(
    "📖 开始测试 BILA Bible Engine..."
  );


  try {

    // 测试 1：约翰福音
    const john =
      await getBibleText(
        "约翰福音 1:1-18"
      );


    console.log(
      "✅ 约翰福音 1:1-18"
    );

    console.log(
      john
    );


    // 测试 2：罗马书
    const romans =
      await getBibleText(
        "罗马书 12:1-2"
      );


    console.log(
      "✅ 罗马书 12:1-2"
    );

    console.log(
      romans
    );


    // 测试 3：创世记
    const genesis =
      await getBibleText(
        "创世记 1:1-5"
      );


    console.log(
      "✅ 创世记 1:1-5"
    );

    console.log(
      genesis
    );


    return {

      success: true,

      message:
        "BILA Bible Engine 测试成功"

    };


  } catch (error) {

    console.error(
      "❌ 测试失败：",
      error
    );


    return {

      success: false,

      error:
        error.message

    };

  }

}


// ================================================================
// 18. 全局接口
//
// 方便 index.html 调用
// ================================================================

window.BilaBible = {

  config:
    BIBLE_CONFIG,

  load:
    loadBibleData,

  verse:
    getBibleVerse,

  chapter:
    getBibleChapter,

  passage:
    getBiblePassage,

  text:
    getBibleText,

  data:
    getBiblePassageData,

  parse:
    parseBibleReference,

  check:
    checkBibleEngine,

  test:
    testBibleEngine

};


// ================================================================
// END
// ================================================================
