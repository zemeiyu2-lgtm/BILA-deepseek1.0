/* =========================================================
   GBRM V1.6
   REAL GREEK TEXT + SYNTAX OBSERVATION ENGINE

   MorphGNT / SBLGNT

   Architecture:

   Corpus
      ↓
   Book
      ↓
   Verse
      ↓
   Token
      ↓
   Lemma
      ↓
   Morphology
      ↓
   Syntax Observation
      ↓
   Exegesis Preparation
========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  LANGUAGE:
    "en-US",

  NORMAL_RATE:
    0.88,

  STATE_KEY:
    "GBRM_V16_STATE"

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

  ["Eph","Ephesians","70-Eph-morphgnt.txt"],

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
STATE
========================================================= */

let state =
  loadState();


let corpus = {

  books:
    {},

  verses:
    {},

  tokens:
    [],

  lemmas:
    {},

  loading:
    {},

  loaded:
    0

};


let currentVerse =
  null;


let currentMorphQueue =
  [];


let currentMorphIndex =
  0;


let currentMorphScore =
  0;


let currentSyntaxQueue =
  [];


let currentSyntaxIndex =
  0;


let speechRate =
  CONFIG.NORMAL_RATE;


/* =========================================================
INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);


function init() {

  bindEvents();

  renderBookGrid();

  renderBookSelect();

  renderStatus();

}


/* =========================================================
EVENTS
========================================================= */

function bindEvents() {

  $("loadAllCorpus").onclick =
    loadAllCorpus;


  $("searchBtn").onclick =
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


  $("startMorphology").onclick =
    startMorphology;


  $("startVerse").onclick =
    startVerseTraining;


  $("startSyntax").onclick =
    startSyntaxTraining;


  $("verseBack").onclick =
    function() {

      go("home");

    };


  $("morphBack").onclick =
    function() {

      go("home");

    };


  $("syntaxBack").onclick =
    function() {

      go("home");

    };


  $("nextVerse").onclick =
    nextVerse;

}


/* =========================================================
BASIC
========================================================= */

function $(
  id
) {

  return document.getElementById(
    id
  );

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

      return JSON.parse(
        raw
      );

    }

  }

  catch (
    error
  ) {

    console.warn(
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

      },

    syntax:
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
      error
    );

  }

}


/* =========================================================
BOOK UI
========================================================= */

function renderBookGrid() {

  const box =
    $("bookGrid");


  box.innerHTML =
    "";


  BOOKS.forEach(
    function(book) {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "book-button";


      if (
        corpus.books[
          book.id
        ]
      ) {

        button.classList.add(
          "loaded"
        );

      }


      button.innerHTML =

        "<div class='book-id'>" +

        escapeHtml(
          book.id
        ) +

        "</div>" +

        "<div class='book-name'>" +

        escapeHtml(
          book.name
        ) +

        "</div>" +

        "<div class='book-status'>" +

        (
          corpus.books[
            book.id
          ]

            ? "✓ 已载入"

            : "点击载入"

        ) +

        "</div>";


      button.onclick =
        async function() {

          await loadBook(
            book.id
          );


          renderBookGrid();

          renderBookSelect();

        };


      box.appendChild(
        button
      );

    }
  );

}


function renderBookSelect() {

  const select =
    $("bookSelect");


  const selected =
    select.value;


  select.innerHTML =

    "<option value=''>" +

    "全部已载入书卷"

    +

    "</option>";


  BOOKS.forEach(
    function(book) {

      if (
        !corpus.books[
          book.id
        ]
      ) {

        return;

      }


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


  if (
    Array.from(
      select.options
    ).some(
      function(option) {

        return (
          option.value ===
          selected
        );

      }
    )
  ) {

    select.value =
      selected;

  }

}


/* =========================================================
CORPUS STATUS
========================================================= */

function renderStatus(
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


  $("corpusPercent")
    .textContent =
    percent +
    "%";


  $("corpusProgress")
    .style.width =
    percent +
    "%";


  if (
    message
  ) {

    $("corpusStatusText")
      .textContent =
      message;

  }

  else {

    $("corpusStatusText")
      .textContent =

      corpus.loaded ===
      0

        ? "尚未载入"

        :

        corpus.loaded ===
        BOOKS.length

          ? "全新约已载入"

          :

          corpus.loaded +
          " / " +
          BOOKS.length +
          " 书卷已载入";

  }

}


/* =========================================================
LOAD ALL
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


  renderBookGrid();

  renderBookSelect();


  renderStatus(
    "整个新约已经载入"
  );

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


  if (
    corpus.loading[
      bookId
    ]
  ) {

    return corpus.loading[
      bookId
    ];

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

    renderStatus(
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
          !corpus.lemmas[
            lemmaKey
          ]
        ) {

          corpus.lemmas[
            lemmaKey
          ] = [];

        }


        corpus.lemmas[
          lemmaKey
        ].push(
          token
        );

      }
    );


    renderStatus();

    return true;

  }

  catch (
    error
  ) {

    console.error(
      book.name,
      error
    );


    renderStatus(
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
        parts
          .slice(6)
          .join(" ");


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

        reference:
          book.name +
          " " +
          chapter +
          ":" +
          verse,

        verseKey:
          book.id +
          "-" +
          chapter +
          "-" +
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


/* =========================================================
PARSING
========================================================= */

function decodeParsing(
  code
) {

  const safe =
    String(
      code ||
      ""
    )
      .padEnd(
        8,
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
      "直说",

    "D":
      "命令",

    "S":
      "虚拟",

    "O":
      "愿望",

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


/* =========================================================
POS
========================================================= */

function decodePOS(
  code
) {

  const c =
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

  }[c] || code;

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


  const list =
    await getSearchPool(
      bookId
    );


  if (
    !list.length
  ) {

    alert(
      "当前没有已载入语料。"
    );

    return;

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

            (
              token.chapter +
              ":" +
              token.verse
            ) ===
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


async function getSearchPool(
  bookId
) {

  if (
    bookId
  ) {

    if (
      !corpus.books[
        bookId
      ]
    ) {

      await loadBook(
        bookId
      );

    }


    return corpus.books[
      bookId
    ]
      ? corpus.books[
          bookId
        ].tokens

      : [];

  }


  return corpus.tokens;

}


function renderSearchResults(
  results
) {

  const box =
    $("searchResults");


  box.innerHTML =
    "";


  if (
    !results.length
  ) {

    box.innerHTML =

      "<div class='muted'>" +

      "没有找到结果。"

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

        "<div class='result-word'>" +

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

        morphologySummary(
          token
        ) +

        "</div>";


      row.onclick =
        function() {

          openTokenVerse(
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
   OPEN TOKEN VERSE
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


  currentVerse =
    {

      tokens:
        verse,

      selected:
        token

    };


  renderVerse(
    verse,
    token
  );


  go(
    "verse"
  );

}


/* =========================================================
   VERSE TRAINING
========================================================= */

async function startVerseTraining() {

  if (
    corpus.loaded ===
    0
  ) {

    alert(
      "请先载入至少一卷书。"
    );

    return;

  }


  const pool =
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


  currentSyntaxQueue =
    pool;


  currentSyntaxIndex =
    0;


  showRandomVerse();

}


function showRandomVerse() {

  if (
    !currentSyntaxQueue.length
  ) {

    return;

  }


  const token =
    currentSyntaxQueue[
      currentSyntaxIndex
    ];


  openTokenVerse(
    token
  );


  $("nextVerse")
    .textContent =
    "下一节 →";

}


function nextVerse() {

  currentSyntaxIndex++;


  if (
    currentSyntaxIndex >=
    currentSyntaxQueue.length
  ) {

    $("verseText")
      .innerHTML =

      "<div class='success'>" +

      "<strong>📖 经文训练完成</strong>" +

      "<br><br>" +

      "下一步可以继续进入句法观察。"

      +

      "</div>";

    $("verseTokenDetail")
      .innerHTML =
      "";

    return;

  }


  showRandomVerse();

}


function renderVerse(
  tokens,
  selectedToken
) {

  $("verseReference")
    .textContent =
    tokens[0]
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


      if (
        selectedToken &&
        token.wordIndex ===
        selectedToken.wordIndex
      ) {

        setTimeout(
          function() {

            span.classList.add(
              "active"
            );


            showTokenDetail(
              token
            );

          },
          50
        );

      }

    }
  );

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
      "Parsing",
      token.parsing
    ) +

    tokenLine(
      "Normalized",
      token.normalizedWord
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


/* =========================================================
   MORPHOLOGY TRAINING
========================================================= */

async function startMorphology() {

  if (
    corpus.loaded ===
    0
  ) {

    alert(
      "请先载入语料。"
    );

    return;

  }


  currentMorphQueue =
    corpus.tokens
      .filter(
        function(token) {

          return (
            token.word &&
            token.lemma &&
            (
              token.pos.startsWith(
                "V-"
              )

              ||

              token.pos.startsWith(
                "N-"
              )

              ||

              token.pos.startsWith(
                "A-"
              )

              ||

              token.pos ===
              "RA"

              ||

              token.pos ===
              "RP"

              ||

              token.pos ===
              "RR"

              ||

              token.pos ===
              "RD"

              ||

              token.pos ===
              "RI"

            )

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
        10
      );


  currentMorphIndex =
    0;


  currentMorphScore =
    0;


  go(
    "morphology"
  );


  renderMorphology();

}


function renderMorphology() {

  const counter =
    $("morphCounter");


  const area =
    $("morphArea");


  if (
    currentMorphIndex >=
    currentMorphQueue.length
  ) {

    counter.textContent =
      "训练完成";


    area.innerHTML =

      "<div class='success'>" +

      "<strong>🔬 真实词形训练完成</strong>" +

      "<br><br>" +

      "成绩：" +

      currentMorphScore +

      " / " +

      currentMorphQueue.length +

      "</div>";


    return;

  }


  const token =
    currentMorphQueue[
      currentMorphIndex
    ];


  counter.textContent =

    "第 " +

    (
      currentMorphIndex +
      1
    ) +

    " / " +

    currentMorphQueue.length;


  area.innerHTML =

    "<div class='morph-reference'>" +

    escapeHtml(
      token.reference
    ) +

    "</div>" +

    "<div class='morph-word'>" +

    escapeHtml(
      token.word
    ) +

    "</div>" +

    "<button id='morphSpeak' type='button'>" +

    "🔊 听词"

    +

    "</button>" +

    "<div id='morphQuestions'></div>";


  $("morphSpeak").onclick =
    function() {

      speakText(
        token.word
      );

    };


  buildMorphQuestions(
    token
  );

}


function buildMorphQuestions(
  token
) {

  const box =
    $("morphQuestions");


  const questions = [

    {
      label:
        "词典形",

      answer:
        token.lemma

    },

    {
      label:
        "词性",

      answer:
        decodePOS(
          token.pos
        )

    },

    {
      label:
        "时态",

      answer:
        token.morph.tense

    },

    {
      label:
        "语态",

      answer:
        token.morph.voice

    },

    {
      label:
        "语气",

      answer:
        token.morph.mood

    },

    {
      label:
        "人称",

      answer:
        token.morph.person

    },

    {
      label:
        "数",

      answer:
        token.morph.number

    },

    {
      label:
        "格",

      answer:
        token.morph.case

    }

  ];


  let answered =
    0;


  questions.forEach(
    function(
      question,
      index
    ) {

      if (
        !question.answer
      ) {

        return;

      }


      const block =
        document.createElement(
          "div"
        );


      block.className =
        "morph-question";


      block.innerHTML =

        "<div class='morph-question-title'>" +

        (
          index +
          1
        ) +

        ". " +

        escapeHtml(
          question.label
        ) +

        "</div>" +

        "<div class='morph-options'></div>";


      const grid =
        block.querySelector(
          ".morph-options"
        );


      getMorphOptions(
        question.answer
      )
        .forEach(
          function(option) {

            const button =
              document.createElement(
                "button"
              );


            button.type =
              "button";


            button.textContent =
              option;


            button.onclick =
              function() {

                grid
                  .querySelectorAll(
                    "button"
                  )
                  .forEach(
                    function(b) {

                      b.disabled =
                        true;

                    }
                  );


                answered++;


                state.morphology =
                  state.morphology ||
                  {

                    attempted:
                      0,

                    correct:
                      0

                  };


                state.morphology.attempted++;


                const correct =
                  normalize(
                    option
                  ) ===
                  normalize(
                    question.answer
                  );


                if (
                  correct
                ) {

                  button.classList.add(
                    "correct"
                  );

                  currentMorphScore++;

                  state.morphology.correct++;

                }

                else {

                  button.classList.add(
                    "wrong"
                  );

                }


                saveState();


                if (
                  answered ===
                  questions.filter(
                    function(q) {

                      return !!q.answer;

                    }
                  ).length
                ) {

                  const next =
                    document.createElement(
                      "button"
                    );


                  next.className =
                    "primary wide";


                  next.textContent =
                    "下一个词形 →";


                  next.onclick =
                    function() {

                      currentMorphIndex++;

                      renderMorphology();

                    };


                  box.appendChild(
                    next
                  );

                }

              };


            grid.appendChild(
              button
            );

          }
        );


      box.appendChild(
        block
      );

    }
  );

}


function getMorphOptions(
  correct
) {

  const base = [

    "主格",
    "所有格",
    "间接受格",
    "受格",

    "现在式",
    "未完成式",
    "未来式",
    "不定过去式",
    "完成式",

    "主动",
    "关身",
    "被动",

    "直说",
    "命令",
    "虚拟",
    "不定词",
    "分词",

    "第一人称",
    "第二人称",
    "第三人称",

    "单数",
    "复数",

    "阳性",
    "阴性",
    "中性"

  ];


  if (
    base.indexOf(
      correct
    ) < 0
  ) {

    base.push(
      correct
    );

  }


  return base
    .slice()
    .sort(
      function() {

        return Math.random() -
          0.5;

      }
    )
    .slice(
      0,
      4
    )
    .includes(
      correct
    )

    ?

    base
      .slice()
      .sort(
        function() {

          return Math.random() -
            0.5;

        }
      )
      .slice(
        0,
        4
      )

    :

    [
      correct,
      base[0],
      base[1],
      base[2]
    ]
      .sort(
        function() {

          return Math.random() -
            0.5;

        }
      );

}


/* =========================================================
   SYNTAX OBSERVATION
========================================================= */

async function startSyntaxTraining() {

  if (
    corpus.loaded ===
    0
  ) {

    alert(
      "请先载入语料。"
    );

    return;

  }


  currentSyntaxQueue =
    corpus.tokens
      .filter(
        function(token) {

          return (
            corpus.verses[
              token.verseKey
            ] &&
            corpus.verses[
              token.verseKey
            ].length >=
            5
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


  currentSyntaxIndex =
    0;


  go(
    "syntax"
  );


  renderSyntax();

}


function renderSyntax() {

  const counter =
    $("syntaxCounter");


  const area =
    $("syntaxArea");


  if (
    currentSyntaxIndex >=
    currentSyntaxQueue.length
  ) {

    counter.textContent =
      "训练完成";


    area.innerHTML =

      "<div class='success'>" +

      "<strong>🧩 Syntax Observation 完成</strong>" +

      "<br><br>" +

      "这里训练的是观察能力，"

      +

      "不是让系统替你完成释经。"

      +

      "</div>";

    return;

  }


  const seed =
    currentSyntaxQueue[
      currentSyntaxIndex
    ];


  const verse =
    corpus.verses[
      seed.verseKey
    ];


  counter.textContent =

    "第 " +

    (
      currentSyntaxIndex +
      1
    ) +

    " / " +

    currentSyntaxQueue.length +

    " · " +

    seed.reference;


  area.innerHTML =
    "";


  const intro =
    document.createElement(
      "div"
    );


  intro.className =
    "syntax-intro";


  intro.innerHTML =

    "<strong>观察这句话</strong>" +

    "<br><br>" +

    "先不要翻译。" +

    "请寻找：" +

    "<br>" +

    "① 动词" +

    "<br>" +

    "② 主语可能在哪里" +

    "<br>" +

    "③ 名词 / 代词之间的关系" +

    "<br>" +

    "④ 介词结构" +

    "<br>" +

    "⑤ 连接词";

  
  area.appendChild(
    intro
  );


  const verseBox =
    document.createElement(
      "div"
    );


  verseBox.className =
    "syntax-verse";


  verse.forEach(
    function(token) {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "syntax-word";


      button.innerHTML =

        escapeHtml(
          token.rawText
        );


      button.onclick =
        function() {

          showSyntaxToken(
            token
          );

        };


      verseBox.appendChild(
        button
      );

    }
  );


  area.appendChild(
    verseBox
  );


  const questions =
    createSyntaxQuestions(
      verse
    );


  questions.forEach(
    function(question) {

      const box =
        document.createElement(
          "div"
        );


      box.className =
        "syntax-question";


      box.innerHTML =

        "<div class='syntax-question-title'>" +

        escapeHtml(
          question.question
        ) +

        "</div>" +

        "<div class='morph-options'></div>";


      const grid =
        box.querySelector(
          ".morph-options"
        );


      question.options.forEach(
        function(option) {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.textContent =
            option;


          button.onclick =
            function() {

              grid
                .querySelectorAll(
                  "button"
                )
                .forEach(
                  function(
                    b
                  ) {

                    b.disabled =
                      true;

                  }
                );


              state.syntax =
                state.syntax ||
                {

                  attempted:
                    0,

                  correct:
                    0

                };


              state.syntax.attempted++;


              if (
                option ===
                question.answer
              ) {

                button.classList.add(
                  "correct"
                );

                state.syntax.correct++;

              }

              else {

                button.classList.add(
                  "wrong"
                );

              }


              saveState();

            };


          grid.appendChild(
            button
          );

        }
      );


      area.appendChild(
        box
      );

    }
  );


  const next =
    document.createElement(
      "button"
    );


  next.className =
    "primary wide";


  next.textContent =
    "下一节 →";


  next.onclick =
    function() {

      currentSyntaxIndex++;

      renderSyntax();

    };


  area.appendChild(
    next
  );

}


function createSyntaxQuestions(
  verse
) {

  const verbs =
    verse.filter(
      function(token) {

        return token.pos.startsWith(
          "V-"
        );

      }
    );


  const nouns =
    verse.filter(
      function(token) {

        return (
          token.pos.startsWith(
            "N-"
          )

          ||

          token.pos ===
          "RP"

          ||

          token.pos ===
          "RR"

        );

      }
    );


  const conjunctions =
    verse.filter(
      function(token) {

        return (
          token.pos.startsWith(
            "C-"
          )
        );

      }
    );


  const questions = [];


  if (
    verbs.length
  ) {

    questions.push({

      question:
        "这句话中是否出现动词？",

      options:
        [
          "有",
          "没有"
        ],

      answer:
        "有"

    });

  }


  if (
    nouns.length
  ) {

    const plural =
      nouns.some(
        function(token) {

          return (
            token.morph.number ===
            "复数"
          );

        }
      );


    questions.push({

      question:
        "这个句子中的名词/代词是否出现复数形式？",

      options:
        [
          "有",
          "没有"
        ],

      answer:
        plural
          ? "有"
          : "没有"

    });

  }


  questions.push({

    question:
      "阅读时应该首先做什么？",

    options:
      [
        "观察形式与关系",
        "立即查中文",
        "直接下神学结论"
      ],

    answer:
      "观察形式与关系"

  });


  if (
    conjunctions.length
  ) {

    questions.push({

      question:
        "句中是否有连接词？",

      options:
        [
          "有",
          "没有"
        ],

      answer:
        "有"

    });

  }


  return questions;

}


function showSyntaxToken(
  token
) {

  const area =
    $("syntaxArea");


  const old =
    area.querySelector(
      ".token-detail"
    );


  if (
    old
  ) {

    old.remove();

  }


  const box =
    document.createElement(
      "div"
    );


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
      "形态",
      morphologySummary(
        token
      )
    );


  area.appendChild(
    box
  );

}


/* =========================================================
   MORPH SUMMARY
========================================================= */

function morphologySummary(
  token
) {

  const parts =
    [];


  [
    token.morph.tense,
    token.morph.voice,
    token.morph.mood,
    token.morph.person,
    token.morph.number,
    token.morph.case,
    token.morph.gender
  ]
    .forEach(
      function(value) {

        if (
          value
        ) {

          parts.push(
            value
          );

        }

      }
    );


  return parts.join(
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

window.speakText =
  speakText;

window.loadBook =
  loadBook;

window.loadAllCorpus =
  loadAllCorpus;

window.startMorphology =
  startMorphology;

window.startVerseTraining =
  startVerseTraining;

window.startSyntaxTraining =
  startSyntaxTraining;


/* =========================================================
   END GBRM V1.6
========================================================= */
