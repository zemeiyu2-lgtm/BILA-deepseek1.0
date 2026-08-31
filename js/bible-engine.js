```javascript
// ================================================================
// BILA Bible Engine V2
// ------------------------------------------------
// 功能：
// 1. 使用在线 API 动态读取「和合本简体字」
// 2. 不再加载巨大的 zh_cuv.json
// 3. 按章节读取，速度更快
// 4. 支持 MOS / BILA 经文引用
// 5. 自动缓存已经读取过的章节
// 6. 保留原来的函数接口，尽量不影响现有系统
//
// Bible Version:
// CUS = Union Simplified / 和合本（简体字）
//
// API:
// https://api.getbible.net/v2/cus/{book}/{chapter}.json
// ================================================================


// ================================================================
// 0. 基础配置
// ================================================================

const BIBLE_CONFIG = {

  version: "CUS",

  name: "和合本（简体字）",

  apiBase:
    "https://api.getbible.net/v2/cus",

  // 请求超时时间
  timeout: 15000,

  // 是否启用缓存
  cacheEnabled: true
};


// ================================================================
// 1. 66卷圣经书卷编号
//
// GetBible 使用标准66卷圣经编号：
// 创世记 = 1
// 出埃及记 = 2
// ...
// 马太福音 = 40
// ...
// 启示录 = 66
// ================================================================

const BOOK_MAP = {

  // ------------------------------------------------
  // 旧约
  // ------------------------------------------------

  "创世记": 1,
  "出埃及记": 2,
  "利未记": 3,
  "民数记": 4,
  "申命记": 5,

  "约书亚记": 6,
  "士师记": 7,
  "路得记": 8,

  "撒母耳记上": 9,
  "撒母耳记下": 10,

  "列王纪上": 11,
  "列王纪下": 12,

  "历代志上": 13,
  "历代志下": 14,

  "以斯拉记": 15,
  "尼希米记": 16,
  "以斯帖记": 17,

  "约伯记": 18,
  "诗篇": 19,
  "箴言": 20,
  "传道书": 21,
  "雅歌": 22,

  "以赛亚书": 23,
  "耶利米书": 24,
  "耶利米哀歌": 25,
  "以西结书": 26,
  "但以理书": 27,

  "何西阿书": 28,
  "约珥书": 29,
  "阿摩司书": 30,
  "俄巴底亚书": 31,
  "约拿书": 32,
  "弥迦书": 33,
  "那鸿书": 34,
  "哈巴谷书": 35,
  "西番雅书": 36,
  "哈该书": 37,
  "撒迦利亚书": 38,
  "玛拉基书": 39,


  // ------------------------------------------------
  // 新约
  // ------------------------------------------------

  "马太福音": 40,
  "马可福音": 41,
  "路加福音": 42,
  "约翰福音": 43,
  "使徒行传": 44,

  "罗马书": 45,
  "哥林多前书": 46,
  "哥林多后书": 47,
  "加拉太书": 48,
  "以弗所书": 49,
  "腓立比书": 50,
  "歌罗西书": 51,

  "帖撒罗尼迦前书": 52,
  "帖撒罗尼迦后书": 53,

  "提摩太前书": 54,
  "提摩太后书": 55,
  "提多书": 56,
  "腓利门书": 57,

  "希伯来书": 58,
  "雅各书": 59,

  "彼得前书": 60,
  "彼得后书": 61,

  "约翰一书": 62,
  "约翰二书": 63,
  "约翰三书": 64,

  "犹大书": 65,
  "启示录": 66
};


// ================================================================
// 2. 常用别名
//
// 防止 MOS / BILA 数据中书名略有不同导致读取失败
// ================================================================

const BOOK_ALIASES = {

  "创": "创世记",
  "出": "出埃及记",
  "利": "利未记",
  "民": "民数记",
  "申": "申命记",

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
// 3. 缓存
//
// 格式：
// "43_1" -> 约翰福音第1章
// ================================================================

const BibleCache = {};


// ================================================================
// 4. 当前正在加载的请求
//
// 防止同一章节被同时请求多次
// ================================================================

const BiblePendingRequests = {};


// ================================================================
// 5. 统一处理书卷名称
// ================================================================

function normalizeBookName(book) {

  if (!book) {
    return null;
  }

  book = String(book).trim();

  // 已经是完整书名
  if (BOOK_MAP[book]) {
    return book;
  }

  // 使用别名
  if (BOOK_ALIASES[book]) {
    return BOOK_ALIASES[book];
  }

  return null;
}


// ================================================================
// 6. 清理经文文本
//
// API 正常情况下不会出现：
// 「起 初 ， 神 創 造 天 地」
//
// 如果未来出现中文字符之间的异常空格，自动清理。
// ================================================================

function cleanBibleText(text) {

  if (text === null || text === undefined) {
    return "";
  }

  let result = String(text);

  // Unicode 标准化
  result = result.normalize("NFC");

  // 去掉 HTML 标签
  result = result.replace(/<[^>]*>/g, "");

  // 去掉多余空白
  result = result.replace(/\s+/g, " ");

  // 去掉中文字符之间的空格
  result = result.replace(
    /([\u4e00-\u9fff])\s+([\u4e00-\u9fff])/g,
    "$1$2"
  );

  return result.trim();
}


// ================================================================
// 7. 请求超时控制
// ================================================================

async function fetchWithTimeout(url, timeout = 15000) {

  const controller = new AbortController();

  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
      signal: controller.signal
    });

    return response;

  } finally {

    clearTimeout(timer);
  }
}


// ================================================================
// 8. 从 API 返回的数据中提取经文
//
// GetBible V2 的章节 API 数据结构可能存在少量字段差异。
// 所以这里做兼容处理。
//
// 常见结构：
//
// {
//   "translation": {...},
//   "book": {...},
//   "chapter": {...},
//   "verses": [...]
// }
// ================================================================

function extractVerses(data) {

  if (!data) {
    return [];
  }


  // ------------------------------------------------
  // 情况 A：data.verses
  // ------------------------------------------------

  if (Array.isArray(data.verses)) {

    return data.verses.map((item, index) => {

      const verseNumber =
        Number(
          item.verse ||
          item.verse_number ||
          item.number ||
          index + 1
        );

      const text =
        item.text ||
        item.content ||
        item.verse_text ||
        "";

      return {
        verse: verseNumber,
        text: cleanBibleText(text)
      };
    });
  }


  // ------------------------------------------------
  // 情况 B：data.chapter.verses
  // ------------------------------------------------

  if (
    data.chapter &&
    Array.isArray(data.chapter.verses)
  ) {

    return data.chapter.verses.map((item, index) => {

      const verseNumber =
        Number(
          item.verse ||
          item.verse_number ||
          item.number ||
          index + 1
        );

      const text =
        item.text ||
        item.content ||
        item.verse_text ||
        "";

      return {
        verse: verseNumber,
        text: cleanBibleText(text)
      };
    });
  }


  // ------------------------------------------------
  // 情况 C：返回数组
  // ------------------------------------------------

  if (Array.isArray(data)) {

    return data.map((item, index) => {

      if (typeof item === "string") {

        return {
          verse: index + 1,
          text: cleanBibleText(item)
        };

      }

      return {
        verse:
          Number(
            item.verse ||
            item.verse_number ||
            item.number ||
            index + 1
          ),

        text:
          cleanBibleText(
            item.text ||
            item.content ||
            item.verse_text ||
            ""
          )
      };

    });
  }


  return [];
}


// ================================================================
// 9. 加载指定章节
//
// 例如：
// getBibleChapter("约翰福音", 1)
//
// 实际请求：
// https://api.getbible.net/v2/cus/43/1.json
// ================================================================

async function getBibleChapter(book, chapter) {

  const normalizedBook =
    normalizeBookName(book);

  if (!normalizedBook) {

    throw new Error(
      "找不到圣经书卷：" + book
    );
  }


  chapter = Number(chapter);

  if (!Number.isInteger(chapter) || chapter < 1) {

    throw new Error(
      "无效的章节：" + chapter
    );
  }


  const bookNumber =
    BOOK_MAP[normalizedBook];


  const cacheKey =
    `${bookNumber}_${chapter}`;


  // ------------------------------------------------
  // 读取缓存
  // ------------------------------------------------

  if (
    BIBLE_CONFIG.cacheEnabled &&
    BibleCache[cacheKey]
  ) {

    return BibleCache[cacheKey];
  }


  // ------------------------------------------------
  // 如果已经有人请求同一章
  // 就直接等待同一个 Promise
  // ------------------------------------------------

  if (BiblePendingRequests[cacheKey]) {

    return BiblePendingRequests[cacheKey];
  }


  // ------------------------------------------------
  // 建立请求
  // ------------------------------------------------

  const url =
    `${BIBLE_CONFIG.apiBase}/${bookNumber}/${chapter}.json`;


  console.log(
    `📖 BILA Bible Engine：加载 ${normalizedBook} ${chapter}章`
  );

  console.log(
    "API:",
    url
  );


  const request = (async () => {

    try {

      const response =
        await fetchWithTimeout(
          url,
          BIBLE_CONFIG.timeout
        );


      if (!response.ok) {

        throw new Error(
          `圣经 API 请求失败：HTTP ${response.status}`
        );
      }


      const data =
        await response.json();


      const verses =
        extractVerses(data);


      if (!verses.length) {

        console.error(
          "API 返回数据：",
          data
        );

        throw new Error(
          `${normalizedBook} 第 ${chapter} 章没有找到经文数据`
        );
      }


      // ------------------------------------------------
      // 缓存
      // ------------------------------------------------

      if (BIBLE_CONFIG.cacheEnabled) {

        BibleCache[cacheKey] =
          verses;
      }


      console.log(
        `✅ ${normalizedBook} ${chapter}章加载成功，共 ${verses.length} 节`
      );


      return verses;


    } catch (error) {

      console.error(
        "❌ Bible Engine Error:",
        error
      );


      if (error.name === "AbortError") {

        throw new Error(
          "圣经数据加载超时，请检查网络连接"
        );
      }


      throw error;

    } finally {

      delete BiblePendingRequests[cacheKey];

    }

  })();


  BiblePendingRequests[cacheKey] =
    request;


  return request;
}


// ================================================================
// 10. 读取单节经文
//
// 例如：
// getBibleVerse("约翰福音", 3, 16)
//
// 返回：
// 神爱世人，甚至将他的独生子赐给他们，叫一切信他的，
// 不至灭亡，反得永生。
// ================================================================

async function getBibleVerse(
  book,
  chapter,
  verse
) {

  const verses =
    await getBibleChapter(
      book,
      chapter
    );


  verse = Number(verse);


  const result =
    verses.find(
      item =>
        Number(item.verse) === verse
    );


  if (!result) {

    throw new Error(
      `${book} ${chapter}:${verse} 不存在`
    );
  }


  return result.text;
}


// ================================================================
// 11. 读取经文范围
//
// 例如：
// getBiblePassage(
//   "约翰福音",
//   1,
//   1,
//   18
// )
//
// 返回：
// 1 起初有道，道与神同在，道就是神。
// 2 这道太初与神同在。
// ...
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


  startVerse =
    Number(startVerse);

  endVerse =
    Number(endVerse);


  if (
    !Number.isInteger(startVerse) ||
    !Number.isInteger(endVerse)
  ) {

    throw new Error(
      "无效的经文范围"
    );
  }


  const selected =
    verses.filter(
      verse =>
        verse.verse >= startVerse &&
        verse.verse <= endVerse
    );


  if (!selected.length) {

    throw new Error(
      `${book} ${chapter}:${startVerse}-${endVerse} 没有找到经文`
    );
  }


  return selected
    .map(
      verse =>
        `${verse.verse} ${verse.text}`
    )
    .join("\n");
}


// ================================================================
// 12. 解析经文引用
//
// 支持：
//
// 约翰福音 3:16
// 约翰福音 3:16-18
// 太 5:3
// 罗马书 12:1-2
// ================================================================

function parseBibleReference(reference) {

  if (!reference) {
    return null;
  }


  reference =
    String(reference)
      .trim()
      .replace(/\s+/g, " ");


  const match =
    reference.match(
      /^(.+?)\s+(\d+):(\d+)(?:-(\d+))?$/
    );


  if (!match) {
    return null;
  }


  const book =
    normalizeBookName(
      match[1]
    );


  if (!book) {
    return null;
  }


  return {

    book,

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
// 13. 一行调用
//
// 例如：
//
// getBibleText("约翰福音 3:16")
//
// 或：
//
// getBibleText("约翰福音 1:1-18")
// ================================================================

async function getBibleText(reference) {

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
// 14. 获取整章对象
//
// 比 getBibleChapter 更适合前端显示
// ================================================================

async function getBibleChapterObject(
  book,
  chapter
) {

  const verses =
    await getBibleChapter(
      book,
      chapter
    );


  return {

    version:
      BIBLE_CONFIG.version,

    versionName:
      BIBLE_CONFIG.name,

    book:
      normalizeBookName(book),

    chapter:
      Number(chapter),

    verses

  };
}


// ================================================================
// 15. 测试 API
//
// 浏览器控制台运行：
//
// testBibleEngine()
//
// ================================================================

async function testBibleEngine() {

  console.log(
    "========================================"
  );

  console.log(
    "BILA Bible Engine V2 测试开始"
  );

  console.log(
    "版本：和合本（简体字）"
  );

  console.log(
    "========================================"
  );


  try {

    // ------------------------------------------------
    // 测试 1
    // ------------------------------------------------

    const verse =
      await getBibleVerse(
        "约翰福音",
        3,
        16
      );


    console.log(
      "✅ 测试1：约翰福音 3:16"
    );

    console.log(
      verse
    );


    // ------------------------------------------------
    // 测试 2
    // ------------------------------------------------

    const passage =
      await getBibleText(
        "约翰福音 1:1-5"
      );


    console.log(
      "✅ 测试2：约翰福音 1:1-5"
    );

    console.log(
      passage
    );


    // ------------------------------------------------
    // 测试 3
    // ------------------------------------------------

    const chapter =
      await getBibleChapter(
        "创世记",
        1
      );


    console.log(
      "✅ 测试3：创世记第1章"
    );

    console.log(
      "共读取：",
      chapter.length,
      "节"
    );


    console.log(
      "========================================"
    );

    console.log(
      "🎉 BILA Bible Engine V2 测试成功"
    );

    console.log(
      "========================================"
    );


    return true;


  } catch (error) {

    console.error(
      "========================================"
    );

    console.error(
      "❌ BILA Bible Engine V2 测试失败"
    );

    console.error(
      error
    );

    console.error(
      "========================================"
    );


    return false;
  }
}


// ================================================================
// 16. 获取多个经文
//
// 方便以后 MOS 52周系统使用
//
// 例如：
//
// getBibleReferences([
//   "约翰福音 3:16",
//   "罗马书 12:1-2",
//   "马太福音 28:19-20"
// ])
// ================================================================

async function getBibleReferences(
  references
) {

  if (!Array.isArray(references)) {

    throw new Error(
      "references 必须是数组"
    );
  }


  const results = [];


  for (
    const reference
    of references
  ) {

    try {

      const text =
        await getBibleText(
          reference
        );


      results.push({

        reference,

        success: true,

        text

      });


    } catch (error) {

      results.push({

        reference,

        success: false,

        text: "",

        error:
          error.message

      });

    }

  }


  return results;
}


// ================================================================
// 17. 清除缓存
//
// 如果以后需要重新读取圣经数据：
//
// clearBibleCache()
// ================================================================

function clearBibleCache() {

  Object.keys(
    BibleCache
  ).forEach(
    key =>
      delete BibleCache[key]
  );


  console.log(
    "🗑️ BILA Bible Cache 已清除"
  );
}


// ================================================================
// 18. 查看当前缓存
// ================================================================

function getBibleCacheInfo() {

  const keys =
    Object.keys(
      BibleCache
    );


  return {

    count:
      keys.length,

    chapters:
      keys

  };
}


// ================================================================
// 19. 对外暴露
//
// 如果 BILA 使用 module / script 方式加载，
// 下面这些函数都可以直接使用。
// ================================================================

if (
  typeof window !== "undefined"
) {

  window.BilaBible = {

    config:
      BIBLE_CONFIG,

    books:
      BOOK_MAP,

    aliases:
      BOOK_ALIASES,

    getVerse:
      getBibleVerse,

    getChapter:
      getBibleChapter,

    getPassage:
      getBiblePassage,

    getText:
      getBibleText,

    getReferences:
      getBibleReferences,

    getChapterObject:
      getBibleChapterObject,

    parseReference:
      parseBibleReference,

    test:
      testBibleEngine,

    clearCache:
      clearBibleCache,

    cacheInfo:
      getBibleCacheInfo
  };

}


// ================================================================
// BILA Bible Engine V2
// END
// ================================================================
```
