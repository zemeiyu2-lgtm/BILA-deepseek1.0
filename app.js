/* =========================================================
   GBRM V1.7
   LEMMA + WORD FAMILY ENGINE

   Architecture:

   TEXTBOOK LESSON
        ↓
   VOCABULARY
        ↓
   LEMMA
        ↓
   ALL NT OCCURRENCES
        ↓
   FORMS
        ↓
   MORPHOLOGY
        ↓
   CONTEXT
        ↓
   WORD FAMILY OBSERVATION
========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  STATE_KEY:
    "GBRM_V17_STATE",

  LANGUAGE:
    "en-US",

  NORMAL_RATE:
    0.88

};


/* =========================================================
BOOKS
========================================================= */

const BOOKS = [

  ["Mt","Matthew","61-Mt-morphgnt.txt"],
  ["Mk","Mark","62-Mk-morphgnt.txt"],
  ["Lk","Luke","63-Lk-morphgnt.txt"],
  ["Jn","John","64-Jn-morphgnt.txt"],
  ["Ac","Acts","65-Ac-morphgnt.txt"],
  ["Ro","Romans","66-Ro-morphgnt.txt"],
  ["1Co","1 Corinthians","67-1Co-morphgnt.txt"],
  ["2Co","2 Corinthians","68-2Co-morphgnt.txt"],
  ["Ga","Galatians","69-Ga-morphgnt.txt"],
  ["Eph","Ephesians","70-Ephesians"],
  ["Php","Philippians","71-Php-morphgnt.txt"],
  ["Col","Colossians","72-Col-morphgnt.txt"],
  ["1Th","1 Thessalonians","73-1Th-morphgnt.txt"],
  ["2Th","2 Thessalonians","74-2Th-morphgnt.txt"],
  ["1Ti","1 Timothy","75-1Ti-morphgnt.txt"],
  ["2Ti","2 Timothy","76-2Ti-morphgnt.txt"],
  ["Tit","Titus","77-Tit-morphgnt.txt"],
  ["Phm","Philemon","78-Phm-morphgnt.txt"],
  ["Heb","Hebrews","79-Heb-morphgnt.txt"],
  ["Jas","James","80-Jas-morphgnt.txt"],
  ["1Pe","1 Peter","81-1Pe-morphgnt.txt"],
  ["2Pe","2 Peter","82-2Pe-morphgnt.txt"],
  ["1Jn","1 John","83-1Jn-morphgnt.txt"],
  ["2Jn","2 John","84-2Jn-morphgnt.txt"],
  ["3Jn","3 John","85-3Jn-morphgnt.txt"],
  ["Jud","Jude","86-Jud-morphgnt.txt"],
  ["Re","Revelation","87-Re-morphgnt.txt"]

].map(function(item) {

  return {

    id:
      item[0],

    name:
      item[1],

    file:
      item[2]

  };

});


/* =========================================================
IMPORTANT CORRECTION FOR EPHESIANS
========================================================= */

BOOKS.forEach(
  function(book) {

    if (
      book.id ===
      "Eph"
    ) {

      book.file =
        "70-Eph-morphgnt.txt";

    }

  }
);


/* =========================================================
TEXTBOOK VOCABULARY
========================================================= */

const VOCAB = [

  {
    lesson: 4,
    word: "λόγος",
    gloss: "言语/道",
    frequency: 330
  },

  {
    lesson: 4,
    word: "θεός",
    gloss: "神/神明",
    frequency: 1317
  },

  {
    lesson: 4,
    word: "ζωή",
    gloss: "生命",
    frequency: 135
  },

  {
    lesson: 4,
    word: "δόξα",
    gloss: "荣耀/威严",
    frequency: 166
  },

  {
    lesson: 4,
    word: "πνεῦμα",
    gloss: "灵/圣灵",
    frequency: 379
  },

  {
    lesson: 4,
    word: "Χριστός",
    gloss: "基督/弥赛亚",
    frequency: 529
  },

  {
    lesson: 4,
    word: "ἄνθρωπος",
    gloss: "人/人类",
    frequency: 550
  },

  {
    lesson: 4,
    word: "ἀγγελος",
    gloss: "使者/天使",
    frequency: 175
  },

  {
    lesson: 6,
    word: "ἀγάπη",
    gloss: "爱",
    frequency: 116
  },

  {
    lesson: 6,
    word: "αὐτός",
    gloss: "他/她/它/自己",
    frequency: 5597
  },

  {
    lesson: 6,
    word: "βασιλεία",
    gloss: "国度",
    frequency: 162
  },

  {
    lesson: 6,
    word: "ἐν",
    gloss: "在……里面",
    frequency: 2752
  },

  {
    lesson: 6,
    word: "ὁ",
    gloss: "这/该",
    frequency: 19870
  },

  {
    lesson: 7,
    word: "οὐρανός",
    gloss: "天/天空",
    frequency: 273
  },

  {
    lesson: 7,
    word: "οὗτος",
    gloss: "这个/这些",
    frequency: 1388
  },

  {
    lesson: 7,
    word: "σύ",
    gloss: "你",
    frequency: 1067
  },

  {
    lesson: 7,
    word: "υἱός",
    gloss: "儿子/子孙",
    frequency: 377
  },

  {
    lesson: 8,
    word: "ἀλλά",
    gloss: "但是/然而",
    frequency: 638
  },

  {
    lesson: 8,
    word: "διά",
    gloss: "藉着/因为",
    frequency: 667
  },

  {
    lesson: 8,
    word: "εἰμί",
    gloss: "是/存在",
    frequency: 2460
  },

  {
    lesson: 8,
    word: "ἡμέρα",
    gloss: "日/白天",
    frequency: 389
  },

  {
    lesson: 8,
    word: "Ἰωάννης",
    gloss: "约翰",
    frequency: 135
  },

  {
    lesson: 8,
    word: "λέγω",
    gloss: "说/告诉",
    frequency: 2354
  },

  {
    lesson: 9,
    word: "ἀγαθός",
    gloss: "好的/有用的",
    frequency: 102
  },

  {
    lesson: 9,
    word: "αἰώνιος",
    gloss: "永远的",
    frequency: 71
  },

  {
    lesson: 9,
    word: "δοῦλος",
    gloss: "奴隶/仆人",
    frequency: 124
  },

  {
    lesson: 9,
    word: "ἐντολή",
    gloss: "诫命/命令",
    frequency: 67
  },

  {
    lesson: 9,
    word: "νεκρός",
    gloss: "死的/尸体",
    frequency: 128
  },

  {
    lesson: 9,
    word: "πιστός",
    gloss: "忠心的/有信心的",
    frequency: 67
  },

  {
    lesson: 10,
    word: "ἅγιος",
    gloss: "圣洁的/圣徒",
    frequency: 233
  },

  {
    lesson: 10,
    word: "ὄνομα",
    gloss: "名字/名声",
    frequency: 231
  },

  {
    lesson: 10,
    word: "πᾶς",
    gloss: "每一个/所有的",
    frequency: 1244
  },

  {
    lesson: 10,
    word: "σάρξ",
    gloss: "肉体/身体",
    frequency: 147
  },

  {
    lesson: 10,
    word: "σῶμα",
    gloss: "身体",
    frequency: 142
  },

  {
    lesson: 10,
    word: "τέκνον",
    gloss: "儿女/子孙",
    frequency: 99
  },

  {
    lesson: 11,
    word: "ἀδελφός",
    gloss: "弟兄",
    frequency: 343
  },

  {
    lesson: 11,
    word: "ἐκκλησία",
    gloss: "教会/聚会",
    frequency: 114
  },

  {
    lesson: 11,
    word: "ἐλπίς",
    gloss: "盼望/期盼",
    frequency: 53
  },

  {
    lesson: 11,
    word: "ἡμεῖς",
    gloss: "我们",
    frequency: 864
  },

  {
    lesson: 11,
    word: "θέλημα",
    gloss: "旨意/欲望",
    frequency: 62
  },

  {
    lesson: 11,
    word: "πατήρ",
    gloss: "父亲",
    frequency: 413
  },

  {
    lesson: 11,
    word: "πίστις",
    gloss: "信心/信仰",
    frequency: 243
  },

  {
    lesson: 11,
    word: "ὕδωρ",
    gloss: "水",
    frequency: 76
  },

  {
    lesson: 11,
    word: "ὑμεῖς",
    gloss: "你们",
    frequency: 1840
  },

  {
    lesson: 11,
    word: "φῶς",
    gloss: "光",
    frequency: 73
  },

  {
    lesson: 11,
    word: "χάρις",
    gloss: "恩典/宠爱",
    frequency: 155
  },

  {
    lesson: 12,
    word: "αἰών",
    gloss: "世代/永恒",
    frequency: 122
  },

  {
    lesson: 12,
    word: "διδάσκαλος",
    gloss: "老师",
    frequency: 59
  },

  {
    lesson: 12,
    word: "μαθητής",
    gloss: "门徒",
    frequency: 261
  },

  {
    lesson: 13,
    word: "γυνή",
    gloss: "女人/妻子",
    frequency: 215
  },

  {
    lesson: 13,
    word: "δικαιοσύνη",
    gloss: "公义",
    frequency: 92
  },

  {
    lesson: 13,
    word: "δώδεκα",
    gloss: "十二",
    frequency: 75
  },

  {
    lesson: 13,
    word: "μέγας",
    gloss: "大的/伟大的",
    frequency: 243
  },

  {
    lesson: 13,
    word: "πολύς",
    gloss: "许多的/多的",
    frequency: 365
  },

  {
    lesson: 13,
    word: "τηρέω",
    gloss: "保守/护卫/遵守",
    frequency: 70
  },

  {
    lesson: 14,
    word: "ἀλήθεια",
    gloss: "真理",
    frequency: 109
  },

  {
    lesson: 14,
    word: "εἰρήνη",
    gloss: "平安",
    frequency: 92
  },

  {
    lesson: 14,
    word: "ἐπαγγελία",
    gloss: "应许",
    frequency: 52
  },

  {
    lesson: 14,
    word: "θρόνος",
    gloss: "宝座",
    frequency: 62
  },

  {
    lesson: 14,
    word: "Ἰερουσαλήμ",
    gloss: "耶路撒冷",
    frequency: 77
  },

  {
    lesson: 14,
    word: "ὁδός",
    gloss: "道路/行为",
    frequency: 101
  },

  {
    lesson: 16,
    word: "ἀκούω",
    gloss: "听见/学习",
    frequency: 428
  },

  {
    lesson: 16,
    word: "βλέπω",
    gloss: "看见/注视",
    frequency: 133
  },

  {
    lesson: 16,
    word: "ἔχω",
    gloss: "有/拿着",
    frequency: 708
  },

  {
    lesson: 16,
    word: "λύω",
    gloss: "解开/毁坏",
    frequency: 42
  },

  {
    lesson: 16,
    word: "νόμος",
    gloss: "律法/原则",
    frequency: 194
  },

  {
    lesson: 16,
    word: "πιστεύω",
    gloss: "相信/信任",
    frequency: 241
  },

  {
    lesson: 16,
    word: "χαρά",
    gloss: "喜乐/愉快",
    frequency: 59
  },

  {
    lesson: 17,
    word: "ἀγαπάω",
    gloss: "爱/珍爱",
    frequency: 143
  },

  {
    lesson: 17,
    word: "ζητέω",
    gloss: "寻求/渴望",
    frequency: 117
  },

  {
    lesson: 17,
    word: "καλέω",
    gloss: "召/命名/邀请",
    frequency: 148
  },

  {
    lesson: 17,
    word: "λαλέω",
    gloss: "说/讲",
    frequency: 296
  },

  {
    lesson: 17,
    word: "οἶδα",
    gloss: "知道/明白",
    frequency: 318
  },

  {
    lesson: 17,
    word: "πληρόω",
    gloss: "充满/完成/应验",
    frequency: 86
  },

  {
    lesson: 17,
    word: "ποιέω",
    gloss: "做/使",
    frequency: 568
  },

  {
    lesson: 18,
    word: "ἀποκρίνομαι",
    gloss: "回答",
    frequency: 231
  },

  {
    lesson: 18,
    word: "δεῖ",
    gloss: "必须",
    frequency: 101
  },

  {
    lesson: 18,
    word: "δύναμαι",
    gloss: "能/有能力",
    frequency: 210
  },

  {
    lesson: 18,
    word: "ἔρχομαι",
    gloss: "来/去",
    frequency: 634
  },

  {
    lesson: 18,
    word: "τόπος",
    gloss: "地方/地点",
    frequency: 94
  },

  {
    lesson: 19,
    word: "βασιλεύς",
    gloss: "王",
    frequency: 115
  },

  {
    lesson: 19,
    word: "γεννάω",
    gloss: "生/产生",
    frequency: 97
  },

  {
    lesson: 19,
    word: "ζάω",
    gloss: "活",
    frequency: 140
  },

  {
    lesson: 19,
    word: "Ἰουδαία",
    gloss: "犹太",
    frequency: 43
  },

  {
    lesson: 19,
    word: "Ἰουδαῖος",
    gloss: "犹太的/犹太人",
    frequency: 195
  },

  {
    lesson: 19,
    word: "Ἰσραήλ",
    gloss: "以色列",
    frequency: 68
  },

  {
    lesson: 19,
    word: "καρπός",
    gloss: "果子/庄稼/结果",
    frequency: 66
  },

  {
    lesson: 19,
    word: "προσκυνέω",
    gloss: "敬拜",
    frequency: 60
  },

  {
    lesson: 20,
    word: "ἀποθνῄσκω",
    gloss: "死",
    frequency: 111
  },

  {
    lesson: 20,
    word: "γινώσκω",
    gloss: "知道/认识",
    frequency: 222
  },

  {
    lesson: 20,
    word: "ἐγείρω",
    gloss: "唤醒/举起/使复活",
    frequency: 144
  },

  {
    lesson: 20,
    word: "εὐαγγέλιον",
    gloss: "福音/好消息",
    frequency: 76
  },

  {
    lesson: 20,
    word: "εὐαγγελίζω",
    gloss: "传福音",
    frequency: 55
  },

  {
    lesson: 20,
    word: "εὑρίσκω",
    gloss: "找到",
    frequency: 176
  },

  {
    lesson: 20,
    word: "λαμβάνω",
    gloss: "拿/接受",
    frequency: 258
  },

  {
    lesson: 20,
    word: "μένω",
    gloss: "留下/居住",
    frequency: 118
  },

  {
    lesson: 20,
    word: "ὁράω",
    gloss: "看见",
    frequency: 454
  },

  {
    lesson: 20,
    word: "πίνω",
    gloss: "喝",
    frequency: 73
  },

  {
    lesson: 20,
    word: "φέρω",
    gloss: "带/背负/结出",
    frequency: 67
  },

  {
    lesson: 22,
    word: "ἀποστέλλω",
    gloss: "差遣",
    frequency: 132
  },

  {
    lesson: 22,
    word: "βαίνω",
    gloss: "去",
    frequency: 60
  },

  {
    lesson: 22,
    word: "γίνομαι",
    gloss: "成为/发生",
    frequency: 678
  },

  {
    lesson: 22,
    word: "δίδωμι",
    gloss: "给",
    frequency: 416
  },

  {
    lesson: 22,
    word: "φεύγω",
    gloss: "逃跑",
    frequency: 29
  }

];


/* =========================================================
STATE
========================================================= */

const state =
  loadState();


const corpus = {

  books:
    {},

  tokens:
    [],

  verses:
    {},

  lemmas:
    {},

  loading:
    {},

  loaded:
    0

};


let currentLemma =
  null;


let currentLemmaOccurrences =
  [];


let currentFamily =
  null;


let familyIndex =
  0;


let speechRate =
  CONFIG.NORMAL_RATE;


/* =========================================================
LOAD STATE
========================================================= */

function loadState() {

  try {

    const raw =
      localStorage.getItem(
        CONFIG.STATE_KEY
      );


    if (
      raw
    ) {

      return JSON.parse(
        raw
      );

    }

  }

  catch (
    error
  ) {

    console.warn(
      "GBRM state error:",
      error
    );

  }


  return {

    lemmaViews:
      {},

    familyViews:
      {},

    corpus:
      {}

  };

}


function saveState() {

  try {

    localStorage.setItem(

      CONFIG.STATE_KEY,

      JSON.stringify(
        state
      )

    );

  }

  catch (
    error
  ) {

    console.warn(
      "GBRM save error:",
      error
    );

  }

}


/* =========================================================
HELPERS
========================================================= */

function $(
  id
) {

  return document.getElementById(
    id
  );

}


function escapeHtml(
  value
) {

  return String(
    value ?? ""
  )
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}


function normalize(
  value
) {

  return String(
    value ?? ""
  )
    .trim()
    .normalize(
      "NFD"
    )
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .replace(
      /ς/g,
      "σ"
    )
    .toLowerCase();

}


function go(
  id
) {

  document
    .querySelectorAll(
      ".screen"
    )
    .forEach(
      function(screen) {

        screen.classList.remove(
          "active"
        );

      }
    );


  const target =
    $(id);


  if (
    target
  ) {

    target.classList.add(
      "active"
    );

  }


  window.scrollTo({

    top:
      0,

    behavior:
      "smooth"

  });

}


/* =========================================================
INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);


function init() {

  bindEvents();

  renderLessonWords();

  renderCorpusStatus();

}


/* =========================================================
EVENTS
========================================================= */

function bindEvents() {

  $("loadAllCorpus").onclick =
    loadAllCorpus;


  $("searchLemmaBtn").onclick =
    searchLemma;


  $("lemmaSearch").addEventListener(
    "keydown",
    function(event) {

      if (
        event.key ===
        "Enter"
      ) {

        searchLemma();

      }

    }
  );


  $("startLemmaTraining").onclick =
    startLemmaTraining;


  $("startFamilyTraining").onclick =
    startFamilyTraining;


  $("lemmaBack").onclick =
    function() {

      go("home");

    };


  $("familyBack").onclick =
    function() {

      go("home");

    };


  $("verseBack").onclick =
    function() {

      go(
        "lemma"
      );

    };


  $("verseBackToLemma").onclick =
    function() {

      go(
        "lemma"
      );

    };

}


/* =========================================================
BOOK LOADER
========================================================= */

async function loadAllCorpus() {

  const button =
    $("loadAllCorpus");


  button.disabled =
    true;


  for (
    const book of BOOKS
  ) {

    if (
      !corpus.books[
        book.id
      ]
    ) {

      await loadBook(
        book.id
      );

    }

  }


  button.disabled =
    false;


  renderCorpusStatus();


  renderLessonWords();

}


async function loadBook(
  bookId
) {

  if (
    corpus.books[
      bookId
    ]
  ) {

    return true;

  }


  const book =
    BOOKS.find(
      function(item) {

        return (
          item.id ===
          bookId
        );

      }
    );


  if (
    !book
  ) {

    return false;

  }


  if (
    corpus.loading[
      bookId
    ]
  ) {

    return corpus.loading[
      bookId
    ];

  }


  const promise =
    fetchBook(
      book
    );


  corpus.loading[
    bookId
    ] =
    promise;


  const success =
    await promise;


  delete corpus.loading[
    bookId
  ];


  return success;

}


async function fetchBook(
  book
) {

  try {

    renderCorpusStatus(
      "正在载入 " +
      book.name +
      "……"
    );


    const response =
      await fetch(

        CONFIG.RAW_BASE +
        book.file,

        {
          cache:
            "force-cache"
        }

      );


    if (
      !response.ok
    ) {

      throw new Error(
        "HTTP " +
        response.status
      );

    }


    const text =
      await response.text();


    const tokens =
      parseMorphGNT(
        text,
        book
      );


    corpus.books[
      book.id
    ] = {

      book,
      tokens

    };


    corpus.loaded++;


    tokens.forEach(
      addToken
    );


    renderCorpusStatus();


    return true;

  }

  catch (
    error
  ) {

    console.error(
      book.name,
      error
    );


    renderCorpusStatus(
      book.name +
      " 载入失败"
    );


    return false;

  }

}


/* =========================================================
MORPHGNT PARSER
========================================================= */

function parseMorphGNT(
  text,
  book
) {

  const tokens =
    [];


  text
    .split(/\r?\n/)
    .forEach(
      function(line) {

        const trimmed =
          line.trim();


        if (
          !trimmed ||
          trimmed.startsWith("#")
        ) {

          return;

        }


        const parts =
          trimmed.split(
            /\s+/
          );


        if (
          parts.length <
          7
        ) {

          return;

        }


        const location =
          parts[0];


        const pos =
          parts[1];


        const parsing =
          parts[2];


        const rawText =
          parts[3];


        const word =
          parts[4];


        const normalizedWord =
          parts[5];


        const lemma =
          parts
            .slice(
              6
            )
            .join(
              " "
            );


        const chapter =
          parseInt(
            location.slice(
              0,
              2
            ),
            10
          );


        const verse =
          parseInt(
            location.slice(
              2,
              4
            ),
            10
          );


        const wordIndex =
          parseInt(
            location.slice(
              4,
              6
            ),
            10
          );


        tokens.push({

          bookId:
            book.id,

          bookName:
            book.name,

          chapter,

          verse,

          wordIndex,

          verseKey:
            book.id +
            "-" +
            chapter +
            "-" +
            verse,

          reference:
            book.name +
            " " +
            chapter +
            ":" +
            verse,

          pos,

          parsing,

          rawText,

          word,

          normalizedWord,

          lemma,

          morph:
            decodeParsing(
              parsing
            )

        });

      }
    );


  return tokens;

}


function addToken(
  token
) {

  corpus.tokens.push(
    token
  );


  if (
    !corpus.verses[
      token.verseKey
    ]
  ) {

    corpus.verses[
      token.verseKey
    ] = [];

  }


  corpus.verses[
    token.verseKey
  ].push(
    token
  );


  const key =
    normalize(
      token.lemma
    );


  if (
    !corpus.lemmas[
      key
    ]
  ) {

    corpus.lemmas[
      key
    ] = [];

  }


  corpus.lemmas[
    key
  ].push(
    token
  );

}


/* =========================================================
PARSING DECODER
========================================================= */

function decodeParsing(
  code
) {

  const c =
    String(
      code ||
      ""
    ).padEnd(
      8,
      "-"
    );


  return {

    person:
      decodePerson(
        c[0]
      ),

    tense:
      decodeTense(
        c[1]
      ),

    voice:
      decodeVoice(
        c[2]
      ),

    mood:
      decodeMood(
        c[3]
      ),

    case:
      decodeCase(
        c[4]
      ),

    number:
      decodeNumber(
        c[5]
      ),

    gender:
      decodeGender(
        c[6]
      ),

    degree:
      decodeDegree(
        c[7]
      )

  };

}


function decodePerson(
  c
) {

  return {

    "1":
      "第一人称",

    "2":
      "第二人称",

    "3":
      "第三人称"

  }[c] || "";

}


function decodeTense(
  c
) {

  return {

    "P":
      "现在式",

    "I":
      "未完成式",

    "F":
      "未来式",

    "A":
      "不定过去式",

    "X":
      "完成式",

    "Y":
      "过去完成式"

  }[c] || "";

}


function decodeVoice(
  c
) {

  return {

    "A":
      "主动",

    "M":
      "关身",

    "P":
      "被动"

  }[c] || "";

}


function decodeMood(
  c
) {

  return {

    "I":
      "直说语气",

    "D":
      "命令语气",

    "S":
      "虚拟语气",

    "O":
      "愿望语气",

    "N":
      "不定词",

    "P":
      "分词"

  }[c] || "";

}


function decodeCase(
  c
) {

  return {

    "N":
      "主格",

    "G":
      "所有格",

    "D":
      "间接受格",

    "A":
      "受格"

  }[c] || "";

}


function decodeNumber(
  c
) {

  return {

    "S":
      "单数",

    "P":
      "复数"

  }[c] || "";

}


function decodeGender(
  c
) {

  return {

    "M":
      "阳性",

    "F":
      "阴性",

    "N":
      "中性"

  }[c] || "";

}


function decodeDegree(
  c
) {

  return {

    "C":
      "比较级",

    "S":
      "最高级"

  }[c] || "";

}


function decodePOS(
  code
) {

  const c =
    String(
      code ||
      ""
    )[0];


  return {

    A:
      "形容词",

    C:
      "连接词",

    D:
      "副词",

    I:
      "感叹词",

    N:
      "名词",

    P:
      "介词",

    R:
      "代词",

    V:
      "动词",

    X:
      "语助词"

  }[c] || code;

}


/* =========================================================
CORPUS STATUS
========================================================= */

function renderCorpusStatus(
  message
) {

  const percent =
    Math.round(
      corpus.loaded /
      BOOKS.length *
      100
    );


  $("booksLoaded")
    .textContent =
    corpus.loaded;


  $("tokensLoaded")
    .textContent =
    corpus.tokens.length
      .toLocaleString();


  $("lemmasLoaded")
    .textContent =
    Object.keys(
      corpus.lemmas
    ).length
      .toLocaleString();


  $("corpusProgress")
    .style.width =
    percent +
    "%";


  $("corpusStatus")
    .textContent =

    message ||

    (
      corpus.loaded ===
      0

        ? "尚未载入"

        :

        corpus.loaded ===
        BOOKS.length

          ? "整个新约已载入"

          :

          corpus.loaded +
          " / " +
          BOOKS.length +
          " 书卷已载入"

    );

}


/* =========================================================
LESSON → LEMMA
========================================================= */

function renderLessonWords() {

  const box =
    $("lessonWordList");


  box.innerHTML =
    "";


  const lessons = [

    4,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    16,
    17,
    18,
    19,
    20,
    22

  ];


  lessons.forEach(
    function(lesson) {

      const items =
        VOCAB.filter(
          function(item) {

            return (
              item.lesson ===
              lesson
            );

          }
        );


      if (
        !items.length
      ) {

        return;

      }


      const title =
        document.createElement(
          "div"
        );


      title.className =
        "eyebrow";


      title.style.marginTop =
        "15px";


      title.textContent =
        "LESSON " +
        lesson;


      box.appendChild(
        title
      );


      items.forEach(
        function(item) {

          const card =
            document.createElement(
              "div"
            );


          card.className =
            "lesson-word-card";


          card.innerHTML =

            "<div>" +

            "<div class='lesson-word-greek'>" +

            escapeHtml(
              item.word
            ) +

            "</div>" +

            "<div class='lesson-word-meta'>" +

            escapeHtml(
              item.gloss
            ) +

            "</div>" +

            "<div class='lesson-word-frequency'>" +

            "教材词频：" +

            item.frequency +

            "</div>" +

            "</div>" +

            "<button type='button'>" +

            "进入"

            +

            "</button>";


          card
            .querySelector(
              "button"
            )
            .onclick =
            function() {

              openLemma(
                item.word
              );

            };


          box.appendChild(
            card
          );

        }
      );

    }
  );

}


/* =========================================================
LEMMA SEARCH
========================================================= */

function searchLemma() {

  const input =
    $("lemmaSearch");


  const query =
    input.value.trim();


  if (
    !query
  ) {

    alert(
      "请输入希腊文词典形。"
    );

    return;

  }


  if (
    corpus.loaded ===
    0
  ) {

    alert(
      "请先载入 Corpus。"
    );

    return;

  }


  const key =
    normalize(
      query
    );


  const occurrences =
    corpus.lemmas[
      key
    ] || [];


  const box =
    $("lemmaSearchResults");


  box.innerHTML =
    "";


  if (
    !occurrences.length
  ) {

    box.innerHTML =

      "<div class='muted'>" +

      "没有找到这个 Lemma。"

      +

      "</div>";

    return;

  }


  const lemma =
    occurrences[0].lemma;


  const row =
    document.createElement(
      "div"
    );


  row.className =
    "search-result-row";


  row.innerHTML =

    "<div class='search-result-lemma'>" +

    escapeHtml(
      lemma
    ) +

    "</div>" +

    "<div class='search-result-meta'>" +

    "新约出现 " +

    occurrences.length +

    " 次"

    +

    "</div>";


  row.onclick =
    function() {

      openLemma(
        lemma
      );

    };


  box.appendChild(
    row
  );

}


/* =========================================================
OPEN LEMMA
========================================================= */

async function openLemma(
  lemma
) {

  if (
    corpus.loaded ===
    0
  ) {

    alert(
      "请先加载至少一卷书。"
    );

    return;

  }


  const key =
    normalize(
      lemma
    );


  const occurrences =
    corpus.lemmas[
      key
    ] || [];


  if (
    !occurrences.length
  ) {

    alert(
      "当前已载入 Corpus 中没有这个 Lemma。"
    );

    return;

  }


  currentLemma =
    occurrences[0].lemma;


  currentLemmaOccurrences =
    occurrences;


  renderLemma();


  go(
    "lemma"
  );


  state.lemmaViews[
    currentLemma
  ] =
    new Date()
      .toISOString();


  saveState();

}


/* =========================================================
LEMMA SCREEN
========================================================= */

function renderLemma() {

  const box =
    $("lemmaArea");


  const counter =
    $("lemmaCounter");


  const occurrences =
    currentLemmaOccurrences;


  const uniqueForms =
    {};


  const bookCounts =
    {};


  occurrences.forEach(
    function(token) {

      uniqueForms[
        token.word
      ] =
        (
          uniqueForms[
            token.word
          ] || 0
        ) + 1;


      bookCounts[
        token.bookName
      ] =
        (
          bookCounts[
            token.bookName
          ] || 0
        ) + 1;

    }
  );


  const forms =
    Object.entries(
      uniqueForms
    )
      .sort(
        function(a,b) {

          return b[1] - a[1];

        }
      );


  const books =
    Object.entries(
      bookCounts
    )
      .sort(
        function(a,b) {

          return b[1] - a[1];

        }
      );


  counter.textContent =

    "真实新约资料 · " +

    occurrences.length +

    " 个出现位置";


  box.innerHTML =
    "";


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "card";


  card.innerHTML =

    "<div class='lemma-main'>" +

    "<div class='lemma-greek'>" +

    escapeHtml(
      currentLemma
    ) +

    "</div>" +

    "<div class='lemma-gloss'>" +

    getVocabGloss(
      currentLemma
    ) +

    "</div>" +

    "</div>" +


    "<div class='lemma-stat-grid'>" +

    lemmaStat(
      occurrences.length,
      "新约出现"
    ) +

    lemmaStat(
      forms.length,
      "词形变体"
    ) +

    lemmaStat(
      books.length,
      "书卷"
    ) +

    "</div>";


  box.appendChild(
    card
  );


  const formsCard =
    document.createElement(
      "div"
    );


  formsCard.className =
    "card";


  formsCard.innerHTML =

    "<h3>词形网络</h3>" +

    "<p class='muted'>" +

    "同一个 Lemma 在真实新约中会以不同形式出现。"

    +

    "</p>" +

    "<div class='form-list' id='formList'></div>";


  box.appendChild(
    formsCard
  );


  const formList =
    formsCard.querySelector(
      "#formList"
    );


  forms.forEach(
    function(item) {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "form-row";


      row.innerHTML =

        "<div>" +

        "<div class='form-word'>" +

        escapeHtml(
          item[0]
        ) +

        "</div>" +

        "<div class='form-meta'>" +

        morphologyForForm(
          occurrences,
          item[0]
        ) +

        "</div>" +

        "</div>" +

        "<strong>" +

        item[1] +

        "</strong>";


      row.onclick =
        function() {

          openFormOccurrences(
            item[0]
          );

        };


      formList.appendChild(
        row
      );

    }
  );


  const booksCard =
    document.createElement(
      "div"
    );


  booksCard.className =
    "card";


  booksCard.innerHTML =

    "<h3>书卷分布</h3>" +

    "<div class='family-map' id='bookMap'></div>";


  box.appendChild(
    booksCard
  );


  const bookMap =
    booksCard.querySelector(
      "#bookMap"
    );


  books.forEach(
    function(item) {

      const node =
        document.createElement(
          "div"
        );


      node.className =
        "family-node";


      node.innerHTML =

        "<div class='family-node-main'>" +

        "<div class='family-node-word'>" +

        escapeHtml(
          item[0]
        ) +

        "</div>" +

        "<div class='family-node-frequency'>" +

        item[1] +

        "</div>" +

        "</div>";


      node.onclick =
        function() {

          const sample =
            occurrences.find(
              function(token) {

                return (
                  token.bookName ===
                  item[0]
                );

              }
            );


          if (
            sample
          ) {

            openTokenVerse(
              sample
            );

          }

        };


      bookMap.appendChild(
        node
      );

    }
  );


  const training =
    document.createElement(
      "button"
    );


  training.className =
    "primary wide";


  training.textContent =
    "进入 Word Family →";


  training.onclick =
    function() {

      openFamily(
        currentLemma
      );

    };


  box.appendChild(
    training
  );

}


function lemmaStat(
  number,
  label
) {

  return (

    "<div class='lemma-stat'>" +

    "<strong>" +

    number +

    "</strong>" +

    "<span>" +

    label +

    "</span>" +

    "</div>"

  );

}


function getVocabGloss(
  lemma
) {

  const item =
    VOCAB.find(
      function(vocab) {

        return (
          normalize(
            vocab.word
          ) ===
          normalize(
            lemma
          )
        );

      }
    );


  return item
    ? escapeHtml(
        item.gloss
      )

    : "暂未连接教材词汇";

}


function morphologyForForm(
  occurrences,
  word
) {

  const token =
    occurrences.find(
      function(item) {

        return (
          item.word ===
          word
        );

      }
    );


  if (
    !token
  ) {

    return "";

  }


  return [

    token.morph.tense,

    token.morph.voice,

    token.morph.mood,

    token.morph.case,

    token.morph.number

  ]
    .filter(Boolean)
    .join(
      " · "
    );

}


/* =========================================================
   FORM OCCURRENCES
========================================================= */

function openFormOccurrences(
  form
) {

  const matches =
    currentLemmaOccurrences.filter(
      function(token) {

        return (
          token.word ===
          form
        );

      }
    );


  if (
    !matches.length
  ) {

    return;

  }


  const token =
    matches[0];


  openTokenVerse(
    token
  );

}


/* =========================================================
WORD FAMILY
========================================================= */

function openFamily(
  lemma
) {

  const occurrences =
    corpus.lemmas[
      normalize(
        lemma
      )
    ] || [];


  if (
    !occurrences.length
  ) {

    return;

  }


  currentFamily = {

    lemma,
    occurrences

  };


  familyIndex =
    0;


  renderFamily();


  go(
    "family"
  );

}


function startFamilyTraining() {

  if (
    corpus.loaded ===
    0
  ) {

    alert(
      "请先加载 Corpus。"
    );

    return;

  }


  const lemmas =
    Object.keys(
      corpus.lemmas
    );


  if (
    !lemmas.length
  ) {

    return;

  }


  const randomKey =
    lemmas[
      Math.floor(
        Math.random() *
        lemmas.length
      )
    ];


  const lemma =
    corpus.lemmas[
      randomKey
    ][0].lemma;


  openFamily(
    lemma
  );

}


function renderFamily() {

  const area =
    $("familyArea");


  const counter =
    $("familyCounter");


  if (
    !currentFamily
  ) {

    return;

  }


  const occurrences =
    currentFamily.occurrences;


  counter.textContent =

    "Lemma：" +

    currentFamily.lemma;


  area.innerHTML =
    "";


  const summary =
    document.createElement(
      "div"
    );


  summary.className =
    "card";


  summary.innerHTML =

    "<div class='lemma-main'>" +

    "<div class='lemma-greek'>" +

    escapeHtml(
      currentFamily.lemma
    ) +

    "</div>" +

    "<div class='lemma-gloss'>" +

    getVocabGloss(
      currentFamily.lemma
    ) +

    "</div>" +

    "</div>" +

    "<div class='notice-box'>" +

    "现在不要只背一个中文意思。"

    +

    "<br><br>" +

    "观察它在不同经文中出现的实际形式和上下文。"

    +

    "</div>";


  area.appendChild(
    summary
  );


  const formMap =
    {};


  occurrences.forEach(
    function(token) {

      if (
        !formMap[
          token.word
        ]
      ) {

        formMap[
          token.word
        ] = {

          word:
            token.word,

          count:
            0,

          samples:
            []

        };

      }


      formMap[
        token.word
      ].count++;


      if (
        formMap[
          token.word
        ].samples.length <
        3
      ) {

        formMap[
          token.word
        ].samples.push(
          token
        );

      }

    }
  );


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "card";


  card.innerHTML =

    "<h3>Word Family</h3>" +

    "<div class='family-map' id='familyMap'></div>";


  area.appendChild(
    card
  );


  const map =
    card.querySelector(
      "#familyMap"
    );


  Object.values(
    formMap
  )
    .sort(
      function(a,b) {

        return b.count -
          a.count;

      }
    )
    .forEach(
      function(item) {

        const node =
          document.createElement(
            "div"
          );


        node.className =
          "family-node";


        node.innerHTML =

          "<div class='family-node-main'>" +

          "<div class='family-node-word'>" +

          escapeHtml(
            item.word
          ) +

          "</div>" +

          "<div class='family-node-frequency'>" +

          item.count +

          "</div>" +

          "</div>" +


          "<div class='family-books'>" +

          item.samples
            .map(
              function(token) {

                return (
                  escapeHtml(
                    token.reference
                  )
                );

              }
            )
            .join(
              " · "
            ) +

          "</div>" +


          (
            item.samples.length

              ?

              "<div class='family-sample'>" +

              escapeHtml(
                item.samples[0].rawText
              ) +

              "</div>"

              :

              ""

          );


        node.onclick =
          function() {

            openTokenVerse(
              item.samples[0]
            );

          };


        map.appendChild(
          node
        );

      }
    );


  const trainingButton =
    document.createElement(
      "button"
    );


  trainingButton.className =
    "primary wide";


  trainingButton.textContent =
    "进入下一步观察 →";


  trainingButton.onclick =
    function() {

      startFamilyObservation();

    };


  area.appendChild(
    trainingButton
  );


  state.familyViews[
    currentFamily.lemma
  ] =
    new Date()
      .toISOString();


  saveState();

}


/* =========================================================
WORD FAMILY OBSERVATION
========================================================= */

function startLemmaTraining() {

  if (
    corpus.loaded ===
    0
  ) {

    alert(
      "请先加载 Corpus。"
    );

    return;

  }


  const keys =
    Object.keys(
      corpus.lemmas
    );


  if (
    !keys.length
  ) {

    return;

  }


  const key =
    keys[
      Math.floor(
        Math.random() *
        keys.length
      )
    ];


  openLemma(
    corpus.lemmas[
      key
    ][0].lemma
  );

}


function startFamilyObservation() {

  if (
    !currentFamily
  ) {

    return;

  }


  const occurrences =
    currentFamily.occurrences;


  const shuffled =
    occurrences
      .slice()
      .sort(
        function() {

          return Math.random() -
            0.5;

        }
      )
      .slice(
        0,
        5
      );


  currentFamily.samples =
    shuffled;


  const area =
    $("familyArea");


  area.innerHTML =
    "";


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "card";


  card.innerHTML =

    "<h3>真实用法观察</h3>" +

    "<p class='muted'>" +

    "下面全部来自同一个 Lemma。"

    +

    "<br>" +

    "比较不同经文中的形式、位置和上下文。"

    +

    "</p>";


  shuffled.forEach(
    function(token) {

      const sample =
        document.createElement(
          "div"
        );


      sample.className =
        "family-sample";


      sample.innerHTML =

        "<strong>" +

        escapeHtml(
          token.reference
        ) +

        "</strong>" +

        "<br><br>" +

        "<span class='family-node-word'>" +

        escapeHtml(
          token.word
        ) +

        "</span>" +

        "<br>" +

        "<span class='muted'>" +

        morphologySummary(
          token
        ) +

        "</span>";


      sample.onclick =
        function() {

          openTokenVerse(
            token
          );

        };


      card.appendChild(
        sample
      );

    }
  );


  area.appendChild(
    card
  );


  const notice =
    document.createElement(
      "div"
    );


  notice.className =
    "card";


  notice.innerHTML =

    "<h3>观察问题</h3>" +

    "<p>" +

    "① 这个 Lemma 出现了哪些不同形式？"

    +

    "</p>" +

    "<p>" +

    "② 这些形式是否在不同句法位置出现？"

    +

    "</p>" +

    "<p>" +

    "③ 它的具体意义是否完全相同？"

    +

    "</p>" +

    "<p>" +

    "④ 哪些问题必须回到上下文才能回答？"

    +

    "</p>";


  area.appendChild(
    notice
  );


  const back =
    document.createElement(
      "button"
    );


  back.className =
    "secondary wide";


  back.textContent =
    "返回 Lemma →";


  back.onclick =
    function() {

      renderLemma();

      go(
        "lemma"
      );

    };


  area.appendChild(
    back
  );

}


/* =========================================================
VERSES
========================================================= */

function openTokenVerse(
  token
) {

  const verse =
    corpus.verses[
      token.verseKey
    ];


  if (
    !verse
  ) {

    return;

  }


  renderVerse(
    verse,
    token
  );


  go(
    "verse"
  );

}


function renderVerse(
  tokens,
  selectedToken
) {

  $("verseReference")
    .textContent =
    tokens.length
      ? tokens[0].reference
      : "";


  const box =
    $("verseText");


  box.innerHTML =
    "";


  tokens.forEach(
    function(token) {

      const span =
        document.createElement(
          "span"
        );


      span.className =
        "token";


      if (
        selectedToken &&
        token.wordIndex ===
        selectedToken.wordIndex
      ) {

        span.classList.add(
          "active"
        );

      }


      span.innerHTML =

        "<span class='token-number'>" +

        token.wordIndex +

        "</span>" +

        escapeHtml(
          token.rawText
        );


      span.onclick =
        function() {

          document
            .querySelectorAll(
              ".token.active"
            )
            .forEach(
              function(item) {

                item.classList.remove(
                  "active"
                );

              }
            );


          span.classList.add(
            "active"
          );


          showTokenDetail(
            token
          );

        };


      box.appendChild(
        span
      );


      box.appendChild(
        document.createTextNode(
          " "
        )
      );

    }
  );


  if (
    selectedToken
  ) {

    showTokenDetail(
      selectedToken
    );

  }

}


function showTokenDetail(
  token
) {

  const box =
    $("verseTokenDetail");


  box.className =
    "token-detail";


  box.innerHTML =

    "<div class='token-detail-word'>" +

    escapeHtml(
      token.word
    ) +

    "</div>" +

    tokenLine(
      "Lemma",
      token.lemma
    ) +

    tokenLine(
      "词性",
      decodePOS(
        token.pos
      )
    ) +

    tokenLine(
      "时态",
      token.morph.tense
    ) +

    tokenLine(
      "语态",
      token.morph.voice
    ) +

    tokenLine(
      "语气",
      token.morph.mood
    ) +

    tokenLine(
      "人称",
      token.morph.person
    ) +

    tokenLine(
      "数",
      token.morph.number
    ) +

    tokenLine(
      "格",
      token.morph.case
    ) +

    tokenLine(
      "性",
      token.morph.gender
    ) +

    tokenLine(
      "书卷",
      token.bookName
    ) +

    tokenLine(
      "Parsing",
      token.parsing
    ) +

    "<button id='speakToken' class='primary wide' type='button'>" +

    "🔊 听这个词"

    +

    "</button>";


  $("speakToken").onclick =
    function() {

      speakText(
        token.word
      );

    };

}


function tokenLine(
  label,
  value
) {

  if (
    !value
  ) {

    return "";

  }


  return (

    "<div class='token-line'>" +

    "<span class='token-label'>" +

    escapeHtml(
      label
    ) +

    "</span>" +

    "<span class='token-value'>" +

    escapeHtml(
      value
    ) +

    "</span>" +

    "</div>"

  );

}


function morphologySummary(
  token
) {

  return [

    token.morph.tense,

    token.morph.voice,

    token.morph.mood,

    token.morph.person,

    token.morph.number,

    token.morph.case

  ]
    .filter(Boolean)
    .join(
      " · "
    );

}


/* =========================================================
SPEECH
========================================================= */

function speakText(
  text
) {

  if (
    !window.speechSynthesis
  ) {

    alert(
      "当前浏览器不支持语音。"
    );

    return;

  }


  window.speechSynthesis.cancel();


  const utterance =
    new SpeechSynthesisUtterance(
      text
    );


  utterance.lang =
    CONFIG.LANGUAGE;


  utterance.rate =
    speechRate;


  utterance.pitch =
    0.95;


  utterance.volume =
    1;


  window.speechSynthesis.speak(
    utterance
  );

}


/* =========================================================
PUBLIC
========================================================= */

window.go =
  go;

window.loadBook =
  loadBook;

window.loadAllCorpus =
  loadAllCorpus;

window.openLemma =
  openLemma;

window.openFamily =
  openFamily;

window.startLemmaTraining =
  startLemmaTraining;

window.startFamilyTraining =
  startFamilyTraining;

window.openTokenVerse =
  openTokenVerse;

window.speakText =
  speakText;


/* =========================================================
END
========================================================= */
