// ================================================================
// BILA Bible Engine V3.0
// 和合本圣经动态读取
// 自动识别 JSON 书卷
// 自动繁体 → 简体
// 自动清除异常空格
// 支持单节 / 范围 / 整章
// ================================================================

const BILA_BIBLE_CONFIG = {
  url: "https://raw.githubusercontent.com/zemeiyu2-lgtm/BILA-deepseek/main/zh_cuv.json",
  version: "CUV",
  name: "和合本"
};


// ================================================================
// 缓存
// ================================================================

let BILA_BIBLE_DATA = null;
let BILA_BIBLE_LOADING = null;


// ================================================================
// 中文繁体 → 简体
// ================================================================

const BILA_T2S = {

  "創":"创","說":"说","靈":"灵","運":"运","開":"开",
  "稱":"称","晝":"昼","氣":"气","將":"将","諸":"诸",
  "間":"间","處":"处","為":"为","與":"与","這":"这",
  "聖":"圣","眾":"众","們":"们","恩":"恩","惠":"惠",
  "穌":"稣","願":"愿","來":"来","刪":"删","麼":"么",
  "從":"从","書":"书","寫":"写","樹":"树","證":"证",
  "國":"国","愛":"爱","義":"义","實":"实","門":"门",
  "學":"学","習":"习","經":"经","見":"见","聽":"听",
  "給":"给","問":"问","話":"话","後":"后","無":"无",
  "萬":"万","個":"个","風":"风","華":"华","東":"东",
  "西":"西","南":"南","北":"北","長":"长","頭":"头",
  "體":"体","從":"从","這":"这","還":"还","進":"进",
  "過":"过","發":"发","應":"应","讓":"让","認":"认",
  "論":"论","講":"讲","教":"教","義":"义","真":"真",
  "實":"实","寶":"宝","貴":"贵","賜":"赐","賴":"赖",
  "憐":"怜","憫":"悯","憂":"忧","患":"患","為":"为",
  "聖":"圣","潔":"洁","禱":"祷","告":"告","讚":"赞",
  "頌":"颂","榮":"荣","耀":"耀","國":"国","王":"王",
  "寶":"宝","貝":"贝","財":"财","錢":"钱","銀":"银",
  "金":"金","豐":"丰","滿":"满","餅":"饼","飯":"饭",
  "飲":"饮","食":"食","飢":"饥","渴":"渴","飽":"饱",
  "醫":"医","藥":"药","病":"病","傷":"伤","死":"死",
  "復":"复","活":"活","獨":"独","親":"亲","兒":"儿",
  "婦":"妇","媽":"妈","爺":"爷","師":"师","弟":"弟",
  "兄":"兄","姊":"姐","妹":"妹","兒":"儿","孫":"孙",
  "國":"国","軍":"军","爭":"争","戰":"战","勝":"胜",
  "敗":"败","殺":"杀","敵":"敌","仇":"仇","愛":"爱",
  "恨":"恨","罪":"罪","赦":"赦","審":"审","判":"判",
  "義":"义","惡":"恶","善":"善","信":"信","望":"望",
  "聖":"圣","靈":"灵","魂":"魂","肉":"肉","心":"心",
  "腦":"脑","眼":"眼","耳":"耳","口":"口","舌":"舌",
  "手":"手","腳":"脚","身":"身","骨":"骨","血":"血",
  "氣":"气","聲":"声","夢":"梦","異":"异","蹟":"迹",
  "奇":"奇","蹟":"迹","約":"约","盟":"盟","律":"律",
  "法":"法","誡":"诫","命":"命","典":"典","祭":"祭",
  "獻":"献","壇":"坛","殿":"殿","會":"会","堂":"堂",
  "會":"会","眾":"众","門":"门","戶":"户","窗":"窗",
  "牆":"墙","樓":"楼","臺":"台","廳":"厅","處":"处",
  "鄉":"乡","村":"村","城":"城","國":"国","地":"地",
  "天":"天","海":"海","河":"河","江":"江","湖":"湖",
  "山":"山","谷":"谷","島":"岛","曠":"旷","野":"野",
  "園":"园","樹":"树","果":"果","葉":"叶","花":"花",
  "鳥":"鸟","魚":"鱼","獸":"兽","羊":"羊","牛":"牛",
  "馬":"马","驢":"驴","蟲":"虫","蛇":"蛇","龍":"龙"

};


// ================================================================
// 繁体 → 简体
// ================================================================

function bilaTraditionalToSimplified(text) {

  return String(text || "")
    .split("")
    .map(c => BILA_T2S[c] || c)
    .join("");

}


// ================================================================
// 清理经文
// ================================================================

function bilaCleanText(text) {

  if (!text) return "";

  let result = String(text);

  // 去除换行
  result = result.replace(/[\r\n\t]/g, "");

  // 删除所有空格
  result = result.replace(/\s+/g, "");

  // 繁体转简体
  result = bilaTraditionalToSimplified(result);

  // 删除 BOM
  result = result.replace(/\uFEFF/g, "");

  return result.trim();

}


// ================================================================
// 加载圣经
// ================================================================

async function bilaLoadBible() {

  if (BILA_BIBLE_DATA) {
    return BILA_BIBLE_DATA;
  }

  if (BILA_BIBLE_LOADING) {
    return BILA_BIBLE_LOADING;
  }

  BILA_BIBLE_LOADING = fetch(
    BILA_BIBLE_CONFIG.url,
    {
      cache: "force-cache"
    }
  )
    .then(response => {

      if (!response.ok) {

        throw new Error(
          "圣经文件加载失败：" +
          response.status
        );

      }

      return response.json();

    })
    .then(data => {

      if (!Array.isArray(data)) {

        throw new Error(
          "zh_cuv.json 格式不是数组"
        );

      }

      BILA_BIBLE_DATA = data;

      console.log(
        "📖 BILA 圣经数据库加载成功，共 " +
        data.length +
        " 卷"
      );

      return data;

    })
    .catch(error => {

      BILA_BIBLE_LOADING = null;

      console.error(
        "BILA Bible Error:",
        error
      );

      throw error;

    });

  return BILA_BIBLE_LOADING;

}


// ================================================================
// 书卷名称映射
//
// 注意：
// 不再依赖 abbrev。
// 自动读取 JSON 中的 name。
// ================================================================

const BILA_BOOK_NAMES = {

  "创世记": ["Genesis", "创世记"],
  "出埃及记": ["Exodus", "出埃及记"],
  "利未记": ["Leviticus", "利未记"],
  "民数记": ["Numbers", "民数记"],
  "申命记": ["Deuteronomy", "申命记"],

  "约书亚记": ["Joshua", "约书亚记"],
  "士师记": ["Judges", "士师记"],
  "路得记": ["Ruth", "路得记"],

  "撒母耳记上": ["1 Samuel", "1Samuel", "撒母耳记上"],
  "撒母耳记下": ["2 Samuel", "2Samuel", "撒母耳记下"],

  "列王纪上": ["1 Kings", "1Kings", "列王纪上"],
  "列王纪下": ["2 Kings", "2Kings", "列王纪下"],

  "历代志上": ["1 Chronicles", "1Chronicles", "历代志上"],
  "历代志下": ["2 Chronicles", "2Chronicles", "历代志下"],

  "以斯拉记": ["Ezra", "以斯拉记"],
  "尼希米记": ["Nehemiah", "尼希米记"],
  "以斯帖记": ["Esther", "以斯帖记"],

  "约伯记": ["Job", "约伯记"],
  "诗篇": ["Psalms", "Psalm", "诗篇"],
  "箴言": ["Proverbs", "箴言"],
  "传道书": ["Ecclesiastes", "传道书"],
  "雅歌": ["Song of Solomon", "Song", "雅歌"],

  "以赛亚书": ["Isaiah", "以赛亚书"],
  "耶利米书": ["Jeremiah", "耶利米书"],
  "耶利米哀歌": ["Lamentations", "耶利米哀歌"],
  "以西结书": ["Ezekiel", "以西结书"],
  "但以理书": ["Daniel", "但以理书"],

  "何西阿书": ["Hosea", "何西阿书"],
  "约珥书": ["Joel", "约珥书"],
  "阿摩司书": ["Amos", "阿摩司书"],
  "俄巴底亚书": ["Obadiah", "俄巴底亚书"],
  "约拿书": ["Jonah", "约拿书"],
  "弥迦书": ["Micah", "弥迦书"],
  "那鸿书": ["Nahum", "那鸿书"],
  "哈巴谷书": ["Habakkuk", "哈巴谷书"],
  "西番雅书": ["Zephaniah", "西番雅书"],
  "哈该书": ["Haggai", "哈该书"],
  "撒迦利亚书": ["Zechariah", "撒迦利亚书"],
  "玛拉基书": ["Malachi", "玛拉基书"],

  "马太福音": ["Matthew", "马太福音"],
  "马可福音": ["Mark", "马可福音"],
  "路加福音": ["Luke", "路加福音"],
  "约翰福音": ["John", "约翰福音"],
  "使徒行传": ["Acts", "使徒行传"],

  "罗马书": ["Romans", "罗马书"],
  "哥林多前书": ["1 Corinthians", "1Corinthians", "哥林多前书"],
  "哥林多后书": ["2 Corinthians", "2Corinthians", "哥林多后书"],

  "加拉太书": ["Galatians", "加拉太书"],
  "以弗所书": ["Ephesians", "以弗所书"],
  "腓立比书": ["Philippians", "腓立比书"],
  "歌罗西书": ["Colossians", "歌罗西书"],

  "帖撒罗尼迦前书": ["1 Thessalonians", "1Thessalonians", "帖撒罗尼迦前书"],
  "帖撒罗尼迦后书": ["2 Thessalonians", "2Thessalonians", "帖撒罗尼迦后书"],

  "提摩太前书": ["1 Timothy", "1Timothy", "提摩太前书"],
  "提摩太后书": ["2 Timothy", "2Timothy", "提摩太后书"],

  "提多书": ["Titus", "提多书"],
  "腓利门书": ["Philemon", "腓利门书"],

  "希伯来书": ["Hebrews", "希伯来书"],
  "雅各书": ["James", "雅各书"],

  "彼得前书": ["1 Peter", "1Peter", "彼得前书"],
  "彼得后书": ["2 Peter", "2Peter", "彼得后书"],

  "约翰一书": ["1 John", "1John", "约翰一书"],
  "约翰二书": ["2 John", "2John", "约翰二书"],
  "约翰三书": ["3 John", "3John", "约翰三书"],

  "犹大书": ["Jude", "犹大书"],
  "启示录": ["Revelation", "启示录"]

};


// ================================================================
// 查找书卷
// ================================================================

function bilaFindBook(bookName, data) {

  const requested =
    String(bookName || "").trim();

  const candidates =
    BILA_BOOK_NAMES[requested] || [requested];

  for (const item of data) {

    const name =
      String(item.name || "").trim();

    const abbrev =
      String(item.abbrev || "").trim();

    for (const candidate of candidates) {

      if (
        name.toLowerCase() ===
        candidate.toLowerCase()
      ) {

        return item;

      }

    }

    if (
      abbrev.toLowerCase() ===
      requested.toLowerCase()
    ) {

      return item;

    }

  }

  throw new Error(
    "找不到书卷：" + requested
  );

}


// ================================================================
// 读取单节
// ================================================================

async function bilaGetVerse(
  book,
  chapter,
  verse
) {

  const data =
    await bilaLoadBible();

  const bookData =
    bilaFindBook(book, data);

  const chapterNumber =
    Number(chapter);

  const verseNumber =
    Number(verse);

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

  return bilaCleanText(text);

}


// ================================================================
// 读取整章
// ================================================================

async function bilaGetChapter(
  book,
  chapter
) {

  const data =
    await bilaLoadBible();

  const bookData =
    bilaFindBook(book, data);

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
    (text, index) => ({

      verse: index + 1,

      text:
        bilaCleanText(text)

    })
  );

}


// ================================================================
// 读取经文范围
// ================================================================

async function bilaGetPassage(
  book,
  chapter,
  startVerse,
  endVerse
) {

  const verses =
    await bilaGetChapter(
      book,
      chapter
    );

  const start =
    Number(startVerse);

  const end =
    Number(endVerse);

  return verses
    .filter(
      item =>
        item.verse >= start &&
        item.verse <= end
    )
    .map(
      item =>
        `${item.verse} ${item.text}`
    )
    .join("\n");

}


// ================================================================
// 解析引用
// ================================================================

function bilaParseReference(
  reference
) {

  const match =
    String(reference || "")
      .trim()
      .match(
        /^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/
      );

  if (!match) {

    throw new Error(
      "无法识别经文：" +
      reference
    );

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
// 最简单的调用方式
// ================================================================

async function bilaGetBibleText(
  reference
) {

  const parsed =
    bilaParseReference(
      reference
    );

  return bilaGetPassage(

    parsed.book,

    parsed.chapter,

    parsed.startVerse,

    parsed.endVerse

  );

}


// ================================================================
// 数据库检查
// ================================================================

async function bilaCheckBible() {

  try {

    const data =
      await bilaLoadBible();

    console.log(
      "================================"
    );

    console.log(
      "📖 BILA 和合本 Bible Engine"
    );

    console.log(
      "圣经书卷数量：",
      data.length
    );

    console.log(
      "================================"
    );

    data.forEach(
      (book, index) => {

        console.log(
          index + 1,
          book.name,
          book.abbrev
        );

      }
    );

    return data;

  } catch (error) {

    console.error(
      "❌ 圣经数据库检查失败",
      error
    );

    throw error;

  }

}


// ================================================================
// 测试
// ================================================================

async function bilaTestBible() {

  console.log(
    "📖 BILA Bible Engine 开始测试..."
  );

  try {

    const text =
      await bilaGetBibleText(
        "约翰福音 1:1-18"
      );

    console.log(
      "✅ 约翰福音 1:1-18 获取成功"
    );

    console.log(text);

    return true;

  } catch (error) {

    console.error(
      "❌ 测试失败：",
      error
    );

    return false;

  }

}


// ================================================================
// 给 index.html 使用
// ================================================================

window.BilaBible = {

  load:
    bilaLoadBible,

  verse:
    bilaGetVerse,

  chapter:
    bilaGetChapter,

  passage:
    bilaGetPassage,

  text:
    bilaGetBibleText,

  parse:
    bilaParseReference,

  check:
    bilaCheckBible,

  test:
    bilaTestBible

};


// ================================================================
// 完成
// ================================================================

console.log(
  "📖 BILA Bible Engine V3.0 已加载"
);
