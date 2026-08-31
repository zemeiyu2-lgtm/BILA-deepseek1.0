// ================================================================
// BILA Bible Engine
// Bible data: zh_cuv.json
// ================================================================

const BIBLE_CONFIG = {
  version: "zh_cuv",
  source: "./zh_cuv.json"
};

let BIBLE_DATA = null;
let BIBLE_LOADING = null;

// ------------------------------------------------
// 1. 加载圣经数据库
// ------------------------------------------------

async function loadBible() {
  if (BIBLE_DATA) return BIBLE_DATA;

  if (BIBLE_LOADING) return BIBLE_LOADING;

  BIBLE_LOADING = fetch(BIBLE_CONFIG.source)
    .then(response => {
      if (!response.ok) {
        throw new Error("无法读取 zh_cuv.json");
      }
      return response.json();
    })
    .then(data => {
      BIBLE_DATA = data;
      console.log(
        "📖 Bible loaded:",
        BIBLE_DATA.length,
        "books"
      );
      return BIBLE_DATA;
    })
    .catch(error => {
      console.error("Bible loading error:", error);
      BIBLE_LOADING = null;
      throw error;
    });

  return BIBLE_LOADING;
}

// ------------------------------------------------
// 2. 书卷名称映射
// ------------------------------------------------

const BOOK_MAP = {

  // 五经
  "创世记": "gn",
  "創世記": "gn",
  "创": "gn",

  "出埃及记": "ex",
  "出埃及記": "ex",
  "出": "ex",

  "利未记": "lv",
  "利未記": "lv",
  "利": "lv",

  "民数记": "nm",
  "民數記": "nm",
  "民": "nm",

  "申命记": "dt",
  "申命記": "dt",
  "申": "dt",

  // 历史书
  "约书亚记": "js",
  "約書亞記": "js",
  "书": "js",

  "士师记": "jud",
  "士師記": "jud",
  "士": "jud",

  "路得记": "rt",
  "路得記": "rt",
  "得": "rt",

  "撒母耳记上": "1sm",
  "撒母耳記上": "1sm",
  "撒上": "1sm",

  "撒母耳记下": "2sm",
  "撒母耳記下": "2sm",
  "撒下": "2sm",

  "列王纪上": "1ki",
  "列王紀上": "1ki",
  "王上": "1ki",

  "列王纪下": "2ki",
  "列王紀下": "2ki",
  "王下": "2ki",

  "历代志上": "1ch",
  "歷代志上": "1ch",
  "代上": "1ch",

  "历代志下": "2ch",
  "歷代志下": "2ch",
  "代下": "2ch",

  "以斯拉记": "ez",
  "以斯拉記": "ez",
  "拉": "ez",

  "尼希米记": "ne",
  "尼希米記": "ne",
  "尼": "ne",

  "以斯帖记": "et",
  "以斯帖記": "et",
  "斯": "et",

  // 诗歌智慧书
  "约伯记": "job",
  "約伯記": "job",
  "伯": "job",

  "诗篇": "ps",
  "詩篇": "ps",
  "诗": "ps",
  "詩": "ps",

  "箴言": "prv",
  "箴": "prv",

  "传道书": "ec",
  "傳道書": "ec",
  "传": "ec",

  "雅歌": "so",
  "歌": "so",

  // 先知书
  "以赛亚书": "is",
  "以賽亞書": "is",
  "赛": "is",

  "耶利米书": "jr",
  "耶利米書": "jr",
  "耶": "jr",

  "耶利米哀歌": "lm",
  "耶利米哀歌": "lm",
  "哀": "lm",

  "以西结书": "ek",
  "以西結書": "ek",
  "结": "ek",

  "但以理书": "dn",
  "但以理書": "dn",
  "但": "dn",

  "何西阿书": "ho",
  "何西阿書": "ho",
  "何": "ho",

  "约珥书": "jl",
  "約珥書": "jl",
  "珥": "jl",

  "阿摩司书": "am",
  "阿摩司書": "am",
  "摩": "am",

  "俄巴底亚书": "ob",
  "俄巴底亞書": "ob",
  "俄": "ob",

  "约拿书": "jn",
  "約拿書": "jn",
  "拿": "jn",

  "弥迦书": "mi",
  "彌迦書": "mi",
  "弥": "mi",

  "那鸿书": "na",
  "那鴻書": "na",
  "鸿": "na",

  "哈巴谷书": "hk",
  "哈巴谷書": "hk",
  "哈": "hk",

  "西番雅书": "zp",
  "西番雅書": "zp",
  "番": "zp",

  "哈该书": "hg",
  "哈該書": "hg",
  "该": "hg",

  "撒迦利亚书": "zc",
  "撒迦利亞書": "zc",
  "亚": "zc",

  "玛拉基书": "ml",
  "瑪拉基書": "ml",
  "玛": "ml",

  // 新约
  "马太福音": "mt",
  "馬太福音": "mt",
  "太": "mt",

  "马可福音": "mk",
  "馬可福音": "mk",
  "可": "mk",

  "路加福音": "lk",
  "路加福音": "lk",
  "路": "lk",

  "约翰福音": "jo",
  "約翰福音": "jo",
  "约": "jo",
  "約": "jo",

  "使徒行传": "ac",
  "使徒行傳": "ac",
  "徒": "ac",

  "罗马书": "rm",
  "羅馬書": "rm",
  "罗": "rm",

  "哥林多前书": "1co",
  "哥林多前書": "1co",
  "林前": "1co",

  "哥林多后书": "2co",
  "哥林多後書": "2co",
  "林后": "2co",

  "加拉太书": "gl",
  "加拉太書": "gl",
  "加": "gl",

  "以弗所书": "ep",
  "以弗所書": "ep",
  "弗": "ep",

  "腓立比书": "ph",
  "腓立比書": "ph",
  "腓": "ph",

  "歌罗西书": "cl",
  "歌羅西書": "cl",
  "西": "cl",

  "帖撒罗尼迦前书": "1th",
  "帖撒羅尼迦前書": "1th",
  "帖前": "1th",

  "帖撒罗尼迦后书": "2th",
  "帖撒羅尼迦後書": "2th",
  "帖后": "2th",

  "提摩太前书": "1ti",
  "提摩太前書": "1ti",
  "提前": "1ti",

  "提摩太后书": "2ti",
  "提摩太後書": "2ti",
  "提后": "2ti",

  "提多书": "tt",
  "提多書": "tt",
  "多": "tt",

  "腓利门书": "phm",
  "腓利門書": "phm",
  "门": "phm",

  "希伯来书": "he",
  "希伯來書": "he",
  "来": "he",

  "雅各书": "jm",
  "雅各書": "jm",
  "雅": "jm",

  "彼得前书": "1pe",
  "彼得前書": "1pe",
  "彼前": "1pe",

  "彼得后书": "2pe",
  "彼得後書": "2pe",
  "彼后": "2pe",

  "约翰一书": "1jo",
  "約翰一書": "1jo",
  "约一": "1jo",

  "约翰二书": "2jo",
  "約翰二書": "2jo",
  "约二": "2jo",

  "约翰三书": "3jo",
  "約翰三書": "3jo",
  "约三": "3jo",

  "犹大书": "jd",
  "猶大書": "jd",
  "犹": "jd",

  "启示录": "re",
  "啟示錄": "re",
  "启": "re"
};

// ------------------------------------------------
// 3. 繁体 → 简体
// ------------------------------------------------

const TRAD_TO_SIMP = {
  "創":"创","說":"说","神":"神","造":"造","天":"天","地":"地",
  "空":"空","虛":"虚","混":"混","沌":"沌","淵":"渊","面":"面",
  "黑":"黑","暗":"暗","靈":"灵","運":"运","行":"行","水":"水",
  "這":"这","稱":"称","為":"为","晝":"昼","與":"与","眾":"众",
  "聖":"圣","徒":"徒","阿":"阿","們":"们","約":"约","翰":"翰",
  "馬":"马","太":"太","羅":"罗","書":"书","後":"后","來":"来",
  "該":"该","亞":"亚","賽":"赛","耶":"耶","稣":"稣","穌":"稣",
  "為":"为","與":"与","從":"从","國":"国","門":"门","學":"学",
  "習":"习","愛":"爱","實":"实","踐":"践","關":"关","係":"系",
  "聽":"听","見":"见","說":"说","話":"话","義":"义","恩":"恩",
  "憑":"凭","信":"信","體":"体","現":"现","應":"应","當":"当",
  "這":"这","個":"个","會":"会","發":"发","現":"现","問":"问",
  "題":"题","與":"与","帶":"带","領":"领","導":"导","從":"从",
  "進":"进","邊":"边","際":"际","為":"为","讓":"让","關":"关",
  "係":"系","開":"开","始":"始","終":"终","來":"来","說":"说"
};

function toSimplified(text) {
  if (!text) return "";

  // 去除圣经 JSON 中每个汉字之间的异常空格
  let result = text.replace(/\s+/g, "");

  // 繁体转简体
  result = result
    .split("")
    .map(ch => TRAD_TO_SIMP[ch] || ch)
    .join("");

  return result;
}

// ------------------------------------------------
// 4. 查找书卷
// ------------------------------------------------

function findBook(bookName) {

  const key = bookName.trim();

  const abbrev = BOOK_MAP[key];

  if (!abbrev) {
    console.warn("⚠️ 未找到书卷:", bookName);
    return null;
  }

  const book = BIBLE_DATA.find(
    b => b.abbrev === abbrev
  );

  if (!book) {
    console.warn("⚠️ JSON中未找到书卷:", abbrev);
    return null;
  }

  return book;
}

// ------------------------------------------------
// 5. 获取单节
// ------------------------------------------------

function getVerse(bookName, chapter, verse) {

  const book = findBook(bookName);

  if (!book) return "";

  const ch = book.chapters[chapter - 1];

  if (!ch) return "";

  const text = ch[verse - 1];

  if (!text) return "";

  return toSimplified(text);
}

// ------------------------------------------------
// 6. 获取整章
// ------------------------------------------------

function getChapter(bookName, chapter) {

  const book = findBook(bookName);

  if (!book) return [];

  const ch = book.chapters[chapter - 1];

  if (!ch) return [];

  return ch.map(v => toSimplified(v));
}

// ------------------------------------------------
// 7. 获取经文范围
// ------------------------------------------------

function getPassage(bookName, chapter, startVerse, endVerse) {

  const verses = [];

  for (
    let v = startVerse;
    v <= endVerse;
    v++
  ) {

    const text = getVerse(
      bookName,
      chapter,
      v
    );

    if (text) {
      verses.push({
        verse: v,
        text
      });
    }
  }

  return verses;
}

// ------------------------------------------------
// 8. 测试
// ------------------------------------------------

async function testBibleEngine() {

  await loadBible();

  console.log(
    "📖 创世记 1:1"
  );

  console.log(
    getVerse("创世记", 1, 1)
  );

  console.log(
    "📖 约翰福音 1:1"
  );

  console.log(
    getVerse("约翰福音", 1, 1)
  );

  console.log(
    "📖 罗马书 5:1-11"
  );

  console.log(
    getPassage("罗马书", 5, 1, 11)
  );
}
