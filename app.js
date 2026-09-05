/* =========================================================
   GBRM V1.5
   NT CORPUS ENGINE

   Source:
   MorphGNT / SBLGNT

   Engine:

   Remote Corpus
        ↓
   Book Loader
        ↓
   Token Parser
        ↓
   Verse Index
        ↓
   Lemma Index
        ↓
   Morphology
        ↓
   Real Text Training
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {

  STATE_KEY:
    "GBRM_V15_STATE",

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  LANGUAGE:
    "en-US",

  NORMAL_RATE:
    0.88,

  SLOW_RATE:
    0.65

};


/* =========================================================
   BOOK MAP
========================================================= */

const BOOKS = [

  {
    id:
      "Mt",

    name:
      "Matthew",

    file:
      "61-Mt-morphgnt.txt"
  },

  {
    id:
      "Mk",

    name:
      "Mark",

    file:
      "62-Mk-morphgnt.txt"
  },

  {
    id:
      "Lk",

    name:
      "Luke",

    file:
      "63-Lk-morphgnt.txt"
  },

  {
    id:
      "Jn",

    name:
      "John",

    file:
      "64-Jn-morphgnt.txt"
  },

  {
    id:
      "Ac",

    name:
      "Acts",

    file:
      "65-Ac-morphgnt.txt"
  },

  {
    id:
      "Ro",

    name:
      "Romans",

    file:
      "66-Ro-morphgnt.txt"
  },

  {
    id:
      "1Co",

    name:
      "1 Corinthians",

    file:
      "67-1Co-morphgnt.txt"
  },

  {
    id:
      "2Co",

    name:
      "2 Corinthians",

    file:
      "68-2Co-morphgnt.txt"
  },

  {
    id:
      "Ga",

    name:
      "Galatians",

    file:
      "69-Ga-morphgnt.txt"
  },

  {
    id:
      "Eph",

    name:
      "Ephesians",

    file:
      "70-Eph-morphgnt.txt"
  },

  {
    id:
      "Php",

    name:
      "Philippians",

    file:
      "71-Php-morphgnt.txt"
  },

  {
    id:
      "Col",

    name:
      "Colossians",

    file:
      "72-Col-morphgnt.txt"
  },

  {
    id:
      "1Th",

    name:
      "1 Thessalonians",

    file:
      "73-1Th-morphgnt.txt"
  },

  {
    id:
      "2Th",

    name:
      "2 Thessalonians",

    file:
      "74-2Th-morphgnt.txt"
  },

  {
    id:
      "1Ti",

    name:
      "1 Timothy",

    file:
      "75-1Ti-morphgnt.txt"
  },

  {
    id:
      "2Ti",

    name:
      "2 Timothy",

    file:
      "76-2Ti-morphgnt.txt"
  },

  {
    id:
      "Tit",

    name:
      "Titus",

    file:
      "77-Tit-morphgnt.txt"
  },

  {
    id:
      "Phm",

    name:
      "Philemon",

    file:
      "78-Phm-morphgnt.txt"
  },

  {
    id:
      "Heb",

    name:
      "Hebrews",

    file:
      "79-Heb-morphgnt.txt"
  },

  {
    id:
      "Jas",

    name:
      "James",

    file:
      "80-Jas-morphgnt.txt"
  },

  {
    id:
      "1Pe",

    name:
      "1 Peter",

    file:
      "81-1Pe-morphgnt.txt"
  },

  {
    id:
      "2Pe",

    name:
      "2 Peter",

    file:
      "82-2Pe-morphgnt.txt"
  },

  {
    id:
      "1Jn",

    name:
      "1 John",

    file:
      "83-1Jn-morphgnt.txt"
  },

  {
    id:
      "2Jn",

    name:
      "2 John",

    file:
      "84-2Jn-morphgnt.txt"
  },

  {
    id:
      "3Jn",

    name:
      "3 John",

    file:
      "85-3Jn-morphgnt.txt"
  },

  {
    id:
      "Jud",

    name:
      "Jude",

    file:
      "86-Jud-morphgnt.txt"
  },

  {
    id:
      "Re",

    name:
      "Revelation",

    file:
      "87-Re-morphgnt.txt"
  }

];


/* =========================================================
   STATE
========================================================= */

let state =
  loadState();


let corpus = {

  books:
    {},

  tokens:
    [],

  verses:
    {},

  lemmaIndex:
    {},

  loadedBooks:
    0

};


let currentMorphIndex =
  0;


let morphologyQueue =
  [];


let morphologyScore =
  0;


let currentVerseTokens =
  [];


let speechRate =
  CONFIG.NORMAL_RATE;


/* =========================================================
   STORAGE
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

      const parsed =
        JSON.parse(
          raw
        );


      return parsed;

    }

  }

  catch (
    error
  ) {

    console.warn(
      "GBRM state error",
      error
    );

  }


  return {

    morphology:
      {

        attempted:
          0,

        correct:
          0

      }

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
      "GBRM save error",
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


async function init() {

  bindEvents();

  renderBookSelect();

  renderCorpusStatus();

  await loadInitialCorpus();

}


/* =========================================================
   EVENTS
========================================================= */

function bindEvents() {

  $("morphBack").onclick =
    function() {

      go("home");

    };


  $("verseBack").onclick =
    function() {

      go("home");

    };


  $("searchBack").onclick =
    function() {

      go("home");

    };


  $("startMorphology").onclick =
    startMorphology;


  $("startVerseTraining").onclick =
    startVerseTraining;


  $("searchCorpusBtn").onclick =
    performSearch;


  $("corpusSearch").addEventListener(
    "keydown",
    function(event) {

      if (
        event.key ===
        "Enter"
      ) {

        performSearch();

      }

    }
  );

}


/* =========================================================
   BOOK SELECT
========================================================= */

function renderBookSelect() {

  const select =
    $("bookSelect");


  BOOKS.forEach(
    function(book) {

      const option =
        document.createElement(
          "option"
        );


      option.value =
        book.id;


      option.textContent =
        book.name;


      select.appendChild(
        option
      );

    }
  );

}


/* =========================================================
   CORPUS LOADER
========================================================= */

async function loadInitialCorpus() {

  /*
   * 第一阶段为了保证 GitHub Pages
   * 体验稳定，不一次下载整个新约。
   *
   * 初始加载：
   * John
   * Romans
   * Luke
   * Matthew
   *
   * 使用时可以继续加载其余书卷。
   */

  const priority = [

    "Jn",
    "Ro",
    "Lk",
    "Mt"

  ];


  for (
    const id of priority
  ) {

    await loadBook(
      id
    );

  }


  renderCorpusStatus();

}


/* =========================================================
   LOAD BOOK
========================================================= */

async function loadBook(
  bookId
) {

  if (
    corpus.books[bookId]
  ) {

    return;

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

    return;

  }


  try {

    updateStatusText(
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


    corpus.loadedBooks++;


    tokens.forEach(
      function(token) {

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


        const lemmaKey =
          normalize(
            token.lemma
          );


        if (
          !corpus.lemmaIndex[
            lemmaKey
          ]
        ) {

          corpus.lemmaIndex[
            lemmaKey
          ] = [];

        }


        corpus.lemmaIndex[
          lemmaKey
        ].push(
          token
        );

      }
    );


    renderCorpusStatus();

  }

  catch (
    error
  ) {

    console.error(
      error
    );


    updateStatusText(
      book.name +
      " 载入失败"
    );

  }

}


/* =========================================================
   PARSE MORPHGNT
========================================================= */

function parseMorphGNT(
  text,
  book
) {

  const lines =
    text
      .split(/\r?\n/)
      .filter(
        function(line) {

          return (
            line.trim() &&
            !line
              .trim()
              .startsWith("#")
          );

        }
      );


  const tokens = [];


  lines.forEach(
    function(line) {

      const parts =
        line
          .trim()
          .split(/\s+/);


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
        parts.slice(
          6
        ).join(" ");


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


      const token = {

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
            pos,
            parsing
          )

      };


      tokens.push(
        token
      );

    }
  );


  return tokens;

}


/* =========================================================
   PARSING DECODER
========================================================= */

function decodeParsing(
  pos,
  code
) {

  const safe =
    String(
      code ||
      ""
    )
      .padEnd(
        9,
        "-"
      );


  return {

    person:
      decodePerson(
        safe[0]
      ),

    tense:
      decodeTense(
        safe[1]
      ),

    voice:
      decodeVoice(
        safe[2]
      ),

    mood:
      decodeMood(
        safe[3]
      ),

    case:
      decodeCase(
        safe[4]
      ),

    number:
      decodeNumber(
        safe[5]
      ),

    gender:
      decodeGender(
        safe[6]
      ),

    degree:
      decodeDegree(
        safe[7]
      ),

    raw:
      safe

  };

}


function decodePerson(
  value
) {

  return {

    "1":
      "第一人称",

    "2":
      "第二人称",

    "3":
      "第三人称"

  }[value] || "";

}


function decodeTense(
  value
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

  }[value] || "";

}


function decodeVoice(
  value
) {

  return {

    "A":
      "主动",

    "M":
      "关身",

    "P":
      "被动"

  }[value] || "";

}


function decodeMood(
  value
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

  }[value] || "";

}


function decodeCase(
  value
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

  }[value] || "";

}


function decodeNumber(
  value
) {

  return {

    "S":
      "单数",

    "P":
      "复数"

  }[value] || "";

}


function decodeGender(
  value
) {

  return {

    "M":
      "阳性",

    "F":
      "阴性",

    "N":
      "中性"

  }[value] || "";

}


function decodeDegree(
  value
) {

  return {

    "C":
      "比较级",

    "S":
      "最高级"

  }[value] || "";

}


/* =========================================================
   STATUS
========================================================= */

function renderCorpusStatus() {

  const loaded =
    corpus.loadedBooks;


  const total =
    BOOKS.length;


  const percent =
    Math.round(
      loaded /
      total *
      100
    );


  $("booksLoaded")
    .textContent =
    loaded;


  $("tokensLoaded")
    .textContent =
    corpus.tokens.length
      .toLocaleString();


  $("corpusStatus")
    .textContent =
    percent +
    "%";


  $("corpusProgress")
    .style.width =
    percent +
    "%";


  updateStatusText(
    loaded +
    " / " +
    total +
    " 书卷已载入"
  );

}


function updateStatusText(
  text
) {

  /*
   * 不改变主要状态显示，
   * 仅用于控制台调试。
   */

  console.log(
    "GBRM:",
    text
  );

}


/* =========================================================
   SEARCH
========================================================= */

async function performSearch() {

  const query =
    $("corpusSearch")
      .value
      .trim();


  const bookId =
    $("bookSelect")
      .value;


  if (
    !query
  ) {

    alert(
      "请输入搜索内容。"
    );

    return;

  }


  /*
   * 如果指定书卷但尚未载入，
   * 先自动加载。
   */

  if (
    bookId &&
    !corpus.books[
      bookId
    ]
  ) {

    await loadBook(
      bookId
    );

  }


  /*
   * 如果没有指定书卷，
   * 优先搜索已经载入的书卷。
   */

  let list =
    corpus.tokens;


  if (
    bookId
  ) {

    list =
      corpus.books[
        bookId
      ]
        ? corpus.books[
            bookId
          ].tokens

        : [];

  }


  const q =
    normalize(
      query
    );


  const results =
    list
      .filter(
        function(token) {

          return (

            normalize(
              token.word
            ).includes(q)

            ||

            normalize(
              token.lemma
            ).includes(q)

            ||

            normalize(
              token.reference
            ).includes(q)

            ||

            token.chapter +
              ":" +
              token.verse ===
              query

          );

        }
      )
      .slice(
        0,
        100
      );


  renderSearchResults(
    results
  );

}


function renderSearchResults(
  results
) {

  const box =
    $("searchResult");


  box.innerHTML =
    "";


  if (
    !results.length
  ) {

    box.innerHTML =

      "<div class='muted'>" +

      "当前已载入语料中没有找到结果。"

      +

      "<br><br>" +

      "可以选择另一卷书，系统会自动载入。"

      +

      "</div>";

    return;

  }


  results.forEach(
    function(token) {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "result-row";


      row.innerHTML =

        "<div class='result-greek'>" +

        escapeHtml(
          token.word
        ) +

        "</div>" +

        "<div>" +

        "Lemma: " +

        escapeHtml(
          token.lemma
        ) +

        "</div>" +

        "<div class='result-reference'>" +

        escapeHtml(
          token.reference
        ) +

        "</div>" +

        "<div class='result-meta'>" +

        escapeHtml(
          morphologySummary(
            token
          )
        ) +

        "</div>";


      row.onclick =
        function() {

          openVerse(
            token
          );

        };


      box.appendChild(
        row
      );

    }
  );

}


/* =========================================================
   MORPHOLOGY TRAINING
========================================================= */

async function startMorphology() {

  if (
    !corpus.tokens.length
  ) {

    alert(
      "语料尚未载入完成。"
    );

    return;

  }


  morphologyQueue =
    selectMorphologyTokens();


  currentMorphIndex =
    0;


  morphologyScore =
    0;


  go(
    "morphology"
  );


  renderMorphology();

}


function selectMorphologyTokens() {

  const interesting =
    corpus.tokens.filter(
      function(token) {

        return (
          token.word &&
          token.lemma &&
          (
            token.pos ===
            "V-"

            ||

            token.pos ===
            "N-"

            ||

            token.pos ===
            "A-"

            ||

            token.pos ===
            "RP"

            ||

            token.pos ===
            "RR"

            ||

            token.pos ===
            "RA"

            ||

            token.pos ===
            "RD"

          )

        );

      }
    );


  return interesting
    .slice()
    .sort(
      function() {

        return Math.random() -
          0.5;

      }
    )
    .slice(
      0,
      10
    );

}


function renderMorphology() {

  const area =
    $("morphologyArea");


  const counter =
    $("morphologyCounter");


  if (
    currentMorphIndex >=
    morphologyQueue.length
  ) {

    counter.textContent =
      "训练完成";


    area.innerHTML =

      "<div class='success'>" +

      "<strong>" +

      "🔬 真实词形训练完成"

      +

      "</strong>" +

      "<br><br>" +

      "得分：" +

      morphologyScore +

      " / " +

      morphologyQueue.length +

      "<br><br>" +

      "这些词形全部来自真实新约文本。"

      +

      "</div>";


    saveMorphologyStats();

    return;

  }


  const token =
    morphologyQueue[
      currentMorphIndex
    ];


  counter.textContent =

    "第 " +

    (
      currentMorphIndex +
      1
    ) +

    " / " +

    morphologyQueue.length;


  area.innerHTML =
    "";


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "morphology-card";


  card.innerHTML =

    "<div class='morphology-reference'>" +

    escapeHtml(
      token.reference
    ) +

    "</div>" +

    "<div class='morphology-word'>" +

    escapeHtml(
      token.word
    ) +

    "</div>" +

    "<button id='morphSpeak' type='button'>" +

    "🔊 听发音"

    +

    "</button>" +

    "<div class='morph-actions'>" +

    "<button id='showMorph' type='button'>" +

    "显示完整分析"

    +

    "</button>" +

    "<button id='openVerseFromMorph' type='button'>" +

    "回到经文"

    +

    "</button>" +

    "</div>" +

    "<div id='morphDetail'></div>";


  area.appendChild(
    card
  );


  $("morphSpeak").onclick =
    function() {

      speakText(
        token.word
      );

    };


  $("showMorph").onclick =
    function() {

      renderMorphDetail(
        token
      );

    };


  $("openVerseFromMorph").onclick =
    function() {

      openVerse(
        token
      );

    };

}


function renderMorphDetail(
  token
) {

  const box =
    $("morphDetail");


  box.className =
    "token-detail";


  box.innerHTML =

    "<div class='token-detail-word'>" +

    escapeHtml(
      token.word
    ) +

    "</div>" +

    createMorphLine(
      "词典形",
      token.lemma
    ) +

    createMorphLine(
      "词性",
      decodePOS(
        token.pos
      )
    ) +

    createMorphLine(
      "时态",
      token.morph.tense
    ) +

    createMorphLine(
      "语态",
      token.morph.voice
    ) +

    createMorphLine(
      "语气",
      token.morph.mood
    ) +

    createMorphLine(
      "人称",
      token.morph.person
    ) +

    createMorphLine(
      "数",
      token.morph.number
    ) +

    createMorphLine(
      "格",
      token.morph.case
    ) +

    createMorphLine(
      "性",
      token.morph.gender
    ) +

    "<button id='morphNext' class='primary wide' type='button'>" +

    "下一个词形 →"

    +

    "</button>";


  $("morphNext").onclick =
    function() {

      currentMorphIndex++;

      renderMorphology();

    };


  state.morphology.attempted++;


  saveState();

}


function createMorphLine(
  label,
  value
) {

  if (
    !value
  ) {

    return "";

  }


  return (

    "<div class='token-detail-line'>" +

    "<span class='token-detail-label'>" +

    escapeHtml(
      label
    ) +

    "</span>" +

    "<span class='token-detail-value'>" +

    escapeHtml(
      value
    ) +

    "</span>" +

    "</div>"

  );

}


function saveMorphologyStats() {

  saveState();

}


/* =========================================================
   PART OF SPEECH
========================================================= */

function decodePOS(
  code
) {

  const first =
    String(
      code ||
      ""
    )[0];


  return {

    "A":
      "形容词",

    "C":
      "连接词",

    "D":
      "副词",

    "I":
      "感叹词",

    "N":
      "名词",

    "P":
      "介词",

    "R":
      "代词",

    "V":
      "动词",

    "X":
      "语助词",

    "T":
      "小品词"

  }[first] || code || "";

}


/* =========================================================
   MORPH SUMMARY
========================================================= */

function morphologySummary(
  token
) {

  const bits =
    [];


  const morph =
    token.morph;


  if (
    morph.tense
  ) {

    bits.push(
      morph.tense
    );

  }


  if (
    morph.voice
  ) {

    bits.push(
      morph.voice
    );

  }


  if (
    morph.mood
  ) {

    bits.push(
      morph.mood
    );

  }


  if (
    morph.person
  ) {

    bits.push(
      morph.person
    );

  }


  if (
    morph.number
  ) {

    bits.push(
      morph.number
    );

  }


  if (
    morph.case
  ) {

    bits.push(
      morph.case
    );

  }


  return bits.join(
    " · "
  );

}


/* =========================================================
   VERSE TRAINING
========================================================= */

async function startVerseTraining() {

  if (
    !corpus.tokens.length
  ) {

    alert(
      "语料尚未载入。"
    );

    return;

  }


  const candidates =
    corpus.tokens
      .filter(
        function(token) {

          return (
            token.word &&
            token.lemma
          );

        }
      )
      .slice()
      .sort(
        function() {

          return Math.random() -
            0.5;

        }
      )
      .slice(
        0,
        8
      );


  currentVerseTokens =
    candidates;


  go(
    "verseTraining"
  );


  renderVerseTraining();

}


function renderVerseTraining() {

  const box =
    $("verseArea");


  const counter =
    $("verseCounter");


  box.innerHTML =
    "";


  if (
    !currentVerseTokens.length
  ) {

    box.innerHTML =

      "<div class='muted'>" +

      "没有可用经文。"

      +

      "</div>";

    return;

  }


  const token =
    currentVerseTokens[0];


  const verse =
    corpus.verses[
      token.verseKey
    ];


  counter.textContent =
    token.reference;


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "verse-card";


  card.innerHTML =

    "<div class='verse-reference'>" +

    escapeHtml(
      token.reference
    ) +

    "</div>" +

    "<div id='verseText' class='verse-text'></div>" +

    "<div id='tokenDetail'></div>" +

    "<div class='notice-box'>" +

    "点击任何希腊文词形，查看真实 Morphology 数据。"

    +

    "</div>";


  box.appendChild(
    card
  );


  renderVerseTokens(
    verse
  );


  const next =
    document.createElement(
      "button"
    );


  next.className =
    "primary wide";


  next.textContent =
    "下一节训练 →";


  next.onclick =
    function() {

      currentVerseTokens.shift();


      if (
        currentVerseTokens.length
      ) {

        renderVerseTraining();

      }

      else {

        box.innerHTML =

          "<div class='success'>" +

          "<strong>📖 经文训练完成</strong>" +

          "<br><br>" +

          "下一阶段可以继续加入："

          +

          "<br><br>" +

          "句法关系、词汇意义、上下文观察。"

          +

          "</div>";

      }

    };


  box.appendChild(
    next
  );

}


function renderVerseTokens(
  tokens
) {

  const box =
    $("verseText");


  if (
    !box
  ) {

    return;

  }


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

}


/* =========================================================
   TOKEN DETAIL
========================================================= */

function showTokenDetail(
  token
) {

  const box =
    $("tokenDetail");


  if (
    !box
  ) {

    return;

  }


  box.className =
    "token-detail";


  box.innerHTML =

    "<div class='token-detail-word'>" +

    escapeHtml(
      token.word
    ) +

    "</div>" +

    createMorphLine(
      "Reference",
      token.reference
    ) +

    createMorphLine(
      "Lemma",
      token.lemma
    ) +

    createMorphLine(
      "词性",
      decodePOS(
        token.pos
      )
    ) +

    createMorphLine(
      "时态",
      token.morph.tense
    ) +

    createMorphLine(
      "语态",
      token.morph.voice
    ) +

    createMorphLine(
      "语气",
      token.morph.mood
    ) +

    createMorphLine(
      "人称",
      token.morph.person
    ) +

    createMorphLine(
      "数",
      token.morph.number
    ) +

    createMorphLine(
      "格",
      token.morph.case
    ) +

    createMorphLine(
      "性",
      token.morph.gender
    ) +

    createMorphLine(
      "原始Parsing",
      token.parsing
    ) +

    "<button id='tokenSpeak' class='token-speak' type='button'>" +

    "🔊 听这个词"

    +

    "</button>";


  $("tokenSpeak").onclick =
    function() {

      speakText(
        token.word
      );

    };

}


/* =========================================================
   OPEN VERSE
========================================================= */

function openVerse(
  token
) {

  const verse =
    corpus.verses[
      token.verseKey
    ];


  if (
    !verse
  ) {

    alert(
      "当前词形没有找到对应经文。"
    );

    return;

  }


  currentVerseTokens = [

    token

  ];


  go(
    "verseTraining"
  );


  renderSpecificVerse(
    verse,
    token
  );

}


function renderSpecificVerse(
  tokens,
  selectedToken
) {

  const box =
    $("verseArea");


  const counter =
    $("verseCounter");


  counter.textContent =
    selectedToken.reference;


  box.innerHTML =

    "<div class='verse-card'>" +

    "<div class='verse-reference'>" +

    escapeHtml(
      selectedToken.reference
    ) +

    "</div>" +

    "<div id='verseText' class='verse-text'></div>" +

    "<div id='tokenDetail'></div>" +

    "</div>";


  renderVerseTokens(
    tokens
  );


  /*
   * 自动展开所点击词形
   */

  setTimeout(
    function() {

      const spans =
        document.querySelectorAll(
          ".token"
        );


      const target =
        tokens.findIndex(
          function(item) {

            return (
              item.wordIndex ===
              selectedToken.wordIndex
            );

          }
        );


      if (
        spans[target]
      ) {

        spans[target].click();

      }

    },
    50
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

window.speakText =
  speakText;

window.openVerse =
  openVerse;

window.startMorphology =
  startMorphology;

window.startVerseTraining =
  startVerseTraining;


/* =========================================================
   END
========================================================= */
