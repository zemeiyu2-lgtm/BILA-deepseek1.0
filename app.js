/* =========================================================
   GBRM V0.3
   Greek Bible Reading Model

   Course Engine
   ---------------------------------------------------------
   L05  Nouns
   L06  Nominative / Accusative / Article
   L07  Genitive / Dative
   L08  Prepositions / εἰμί

   Purpose:
   从基础希腊文进入真实新约原文观察。
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {

  STATE_KEY:
    "GBRM_V03_STATE",

  LANGUAGE:
    "en-US",

  NORMAL_RATE:
    0.88,

  SLOW_RATE:
    0.65

};


/* =========================================================
   COURSE DATA
========================================================= */

const LESSONS = [


  /* =======================================================
     LESSON 05
  ======================================================= */

  {

    id:
      "L05",

    number:
      5,

    title:
      "Nouns · 名词",

    reference:
      "Lesson 05",

    objective:
      "理解希腊文名词的基本概念，并开始观察性、数、格如何影响词形与句中功能。",

    type:
      "noun",

    sections: [

      {

        title:
          "什么是名词",

        intro:
          "名词可以表示人、事物、地点或概念。希腊文中名词的词尾会携带重要语法信息。"

      },

      {

        title:
          "三个基本观察维度",

        intro:
          "先建立三个概念：性、数、格。"

      },

      {

        title:
          "真实新约词汇",

        intro:
          "观察 λόγος、θεός、ζωή、φῶς。"

      },

      {

        title:
          "原文观察",

        intro:
          "比较不同形式如何改变句中功能。"

      }

    ],

    forms: [

      [
        "ὁ λόγος",
        "阳性 · 单数 · 主格",
        "the Word"
      ],

      [
        "τοῦ λόγου",
        "阳性 · 单数 · 所有格",
        "of the Word"
      ],

      [
        "τὸν λόγον",
        "阳性 · 单数 · 受格",
        "the Word"
      ],

      [
        "τῷ λόγῳ",
        "阳性 · 单数 · 间接受格",
        "to/for the Word"
      ]

    ],

    bible: {

      reference:
        "John 1:1",

      greek:
        "Ἐν ἀρχῇ ἦν ὁ λόγος.",

      chinese:
        "太初有道。"

    },

    test: [

      {

        question:
          "Which form is nominative singular?",

        options:
          [
            "ὁ λόγος",
            "τοῦ λόγου",
            "τὸν λόγον",
            "τῷ λόγῳ"
          ],

        answer:
          0

      },

      {

        question:
          "What does τοῦ λόγου normally express?",

        options:
          [
            "Possession / relation",
            "Direct object",
            "Subject",
            "Command"
          ],

        answer:
          0

      },

      {

        question:
          "Which dimension tells us singular or plural?",

        options:
          [
            "Number",
            "Gender",
            "Case",
            "Accent"
          ],

        answer:
          0

      },

      {

        question:
          "What does λόγος mean in John 1:1?",

        options:
          [
            "Word",
            "Light",
            "Life",
            "Law"
          ],

        answer:
          0

      }

    ]

  },


  /* =======================================================
     LESSON 06
  ======================================================= */

  {

    id:
      "L06",

    number:
      6,

    title:
      "Nominative · Accusative · Article",

    reference:
      "Lesson 06",

    objective:
      "认识主格、直接受格与定冠词，并开始通过词尾判断句中角色。",

    type:
      "cases",

    sections: [

      {

        title:
          "主格",

        intro:
          "主格通常与句子的主语有关。"

      },

      {

        title:
          "直接受格",

        intro:
          "直接受格常用于表示动词直接作用的对象。"

      },

      {

        title:
          "定冠词",

        intro:
          "ὁ、ἡ、τό 等定冠词必须和名词的性、数、格相配。"

      },

      {

        title:
          "John 1 原文",

        intro:
          "现在把主格、受格和冠词带回约翰福音。"

      }

    ],

    forms: [

      [
        "ὁ λόγος",
        "主格 · 阳性 · 单数",
        "the Word"
      ],

      [
        "τὸν λόγον",
        "受格 · 阳性 · 单数",
        "the Word"
      ],

      [
        "ὁ θεός",
        "主格 · 阳性 · 单数",
        "God"
      ],

      [
        "τὸν θεόν",
        "受格 · 阳性 · 单数",
        "God"
      ]

    ],

    bible: {

      reference:
        "John 1:1–3",

      greek:
        "καὶ ὁ λόγος ἦν πρὸς τὸν θεόν. πάντα δι’ αὐτοῦ ἐγένετο.",

      chinese:
        "道与神同在。万物都是借着他造的。"

    },

    test: [

      {

        question:
          "Which form is direct object?",

        options:
          [
            "τὸν θεόν",
            "ὁ θεός",
            "ὁ λόγος",
            "τοῦ θεοῦ"
          ],

        answer:
          0

      },

      {

        question:
          "Which article matches masculine nominative singular?",

        options:
          [
            "ὁ",
            "ἡ",
            "τό",
            "τῷ"
          ],

        answer:
          0

      },

      {

        question:
          "Which form is nominative singular masculine?",

        options:
          [
            "ὁ θεός",
            "τὸν θεόν",
            "τοῦ θεοῦ",
            "τῷ θεῷ"
          ],

        answer:
          0

      },

      {

        question:
          "In ὁ λόγος ἦν πρὸς τὸν θεόν, which phrase is the direct object of πρὸς?",

        options:
          [
            "τὸν θεόν",
            "ὁ λόγος",
            "ἦν",
            "πρὸς"
          ],

        answer:
          0

      }

    ]

  },


  /* =======================================================
     LESSON 07
  ======================================================= */

  {

    id:
      "L07",

    number:
      7,

    title:
      "Genitive · Dative",

    reference:
      "Lesson 07",

    objective:
      "开始理解所有格与间接受格的基本功能，并在新约原文中辨认这些形式。",

    type:
      "genitive",

    sections: [

      {

        title:
          "所有格",

        intro:
          "所有格常用于所属、关系、来源等表达。具体意义由上下文决定。"

      },

      {

        title:
          "间接受格",

        intro:
          "间接受格常表达对象、接受者、利益对象等功能。"

      },

      {

        title:
          "形态观察",

        intro:
          "比较 λόγος 的几个形式。"

      },

      {

        title:
          "新约观察",

        intro:
          "将词形分析带回 John 1。"

      }

    ],

    forms: [

      [
        "ὁ λόγος",
        "主格",
        "the Word"
      ],

      [
        "τοῦ λόγου",
        "所有格",
        "of the Word"
      ],

      [
        "τῷ λόγῳ",
        "间接受格",
        "to/for the Word"
      ],

      [
        "τοῦ θεοῦ",
        "所有格",
        "of God"
      ],

      [
        "τῷ θεῷ",
        "间接受格",
        "to/for God"
      ]

    ],

    bible: {

      reference:
        "John 1:6",

      greek:
        "Ἐγένετο ἄνθρωπος, ἀπεσταλμένος παρὰ θεοῦ, ὄνομα αὐτῷ Ἰωάννης.",

      chinese:
        "有一个人，是从神那里差来的，名叫约翰。"

    },

    test: [

      {

        question:
          "Which form means 'of God'?",

        options:
          [
            "τοῦ θεοῦ",
            "τῷ θεῷ",
            "ὁ θεός",
            "τὸν θεόν"
          ],

        answer:
          0

      },

      {

        question:
          "Which form is dative singular?",

        options:
          [
            "τῷ θεῷ",
            "τοῦ θεοῦ",
            "ὁ θεός",
            "τὸν θεόν"
          ],

        answer:
          0

      },

      {

        question:
          "The genitive often expresses what idea?",

        options:
          [
            "Possession or relationship",
            "Only subject",
            "Only command",
            "Only question"
          ],

        answer:
          0

      }

    ]

  },


  /* =======================================================
     LESSON 08
  ======================================================= */

  {

    id:
      "L08",

    number:
      8,

    title:
      "Prepositions · εἰμί",

    reference:
      "Lesson 08",

    objective:
      "学习常见介词，并认识 εἰμί 的基本现在时形式，然后进入 John 1 的真实句子。",

    type:
      "prepositions",

    sections: [

      {

        title:
          "介词",

        intro:
          "介词与格结合，形成有关系意义的短语。"

      },

      {

        title:
          "εἰμί",

        intro:
          "εἰμί 是希腊文最重要的系动词之一，基本意义为 'to be'。"

      },

      {

        title:
          "基本形式",

        intro:
          "注意 εἰμί 的现在时基本形式。"

      },

      {

        title:
          "John 1 原文阅读",

        intro:
          "现在把前面几课的内容组合起来。"

      }

    ],

    forms: [

      [
        "εἰμί",
        "第一人称单数",
        "I am"
      ],

      [
        "εἶ",
        "第二人称单数",
        "you are"
      ],

      [
        "ἐστίν",
        "第三人称单数",
        "he/she/it is"
      ],

      [
        "ἐσμέν",
        "第一人称复数",
        "we are"
      ]

    ],

    bible: {

      reference:
        "John 1:1–4",

      greek:
        "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν.",

      chinese:
        "太初有道，道与神同在。"

    },

    test: [

      {

        question:
          "What does εἰμί mean?",

        options:
          [
            "to be",
            "to see",
            "to make",
            "to hear"
          ],

        answer:
          0

      },

      {

        question:
          "Which form means 'I am'?",

        options:
          [
            "εἰμί",
            "εἶ",
            "ἐστίν",
            "ἐσμέν"
          ],

        answer:
          0

      },

      {

        question:
          "What does ἐστίν mean?",

        options:
          [
            "he/she/it is",
            "I am",
            "you are",
            "we are"
          ],

        answer:
          0

      },

      {

        question:
          "What does ἐν normally mean?",

        options:
          [
            "in",
            "from",
            "through",
            "against"
          ],

        answer:
          0

      }

    ]

  }

];


/* =========================================================
   STATE
========================================================= */

let state =
  loadState();


let currentLessonIndex =
  0;


let currentStep =
  0;


let speechRate =
  CONFIG.NORMAL_RATE;


/* =========================================================
   STATE FUNCTIONS
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

  } catch (
    error
  ) {

    console.warn(
      "GBRM state error:",
      error
    );

  }


  return {

    lessons:
      {}

  };

}


function saveState() {

  localStorage.setItem(

    CONFIG.STATE_KEY,

    JSON.stringify(
      state
    )

  );

}


function getLessonState(
  index
) {

  const lesson =
    LESSONS[index];


  if (
    !state.lessons
  ) {

    state.lessons =
      {};

  }


  if (
    !state.lessons[
      lesson.id
    ]
  ) {

    state.lessons[
      lesson.id
    ] = {

      completed:
        false,

      score:
        0,

      completedAt:
        null

    };

  }


  return state.lessons[
    lesson.id
  ];

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


/* =========================================================
   NAVIGATION
========================================================= */

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

  renderHome();

  renderReview();

  bindStaticEvents();

}


/* =========================================================
   EVENTS
========================================================= */

function bindStaticEvents() {

  bind(
    "lessonBackBtn",
    function() {

      go("home");

    }
  );


  bind(
    "reviewBackBtn",
    function() {

      go("home");

    }
  );


  bind(
    "reviewHomeBtn",
    function() {

      go("review");

    }
  );


  bind(
    "lessonNextBtn",
    nextLessonStep
  );

}


function bind(
  id,
  handler
) {

  const element =
    $(id);


  if (
    element
  ) {

    element.addEventListener(
      "click",
      handler
    );

  }

}


/* =========================================================
   HOME
========================================================= */

function renderHome() {

  const list =
    $("lessonList");


  if (
    !list
  ) {

    return;

  }


  list.innerHTML =
    "";


  LESSONS.forEach(
    function(
      lesson,
      index
    ) {

      const lessonState =
        getLessonState(
          index
        );


      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "lesson-item";


      if (
        lessonState.completed
      ) {

        button.classList.add(
          "done"
        );

      }


      button.innerHTML =

        "<div class='lesson-number'>" +

        "L" +
        String(
          lesson.number
        ).padStart(
          2,
          "0"
        ) +

        "</div>" +

        "<div>" +

        "<div class='lesson-name'>" +

        lesson.title +

        "</div>" +

        "<small class='lesson-meta'>" +

        lesson.reference +

        "</small>" +

        "</div>" +

        "<div class='lesson-status'>" +

        (
          lessonState.completed
            ? "✓"
            : "→"
        ) +

        "</div>";


      button.addEventListener(
        "click",
        function() {

          openLesson(
            index
          );

        }
      );


      list.appendChild(
        button
      );

    }
  );


  updateProgress();

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

  const completed =
    LESSONS.filter(
      function(
        lesson,
        index
      ) {

        return getLessonState(
          index
        ).completed;

      }
    ).length;


  const percent =
    Math.round(
      completed /
      LESSONS.length *
      100
    );


  if (
    $("completedLessons")
  ) {

    $("completedLessons")
      .textContent =
      completed;

  }


  if (
    $("totalLessons")
  ) {

    $("totalLessons")
      .textContent =
      LESSONS.length;

  }


  if (
    $("courseProgress")
  ) {

    $("courseProgress")
      .textContent =
      percent +
      "%";

  }


  if (
    $("homeProgressBar")
  ) {

    $("homeProgressBar")
      .style.width =
      percent +
      "%";

  }

}


/* =========================================================
   OPEN LESSON
========================================================= */

function openLesson(
  index
) {

  if (
    !LESSONS[index]
  ) {

    return;

  }


  currentLessonIndex =
    index;


  currentStep =
    0;


  speechRate =
    CONFIG.NORMAL_RATE;


  renderLessonHeader();

  renderLessonStep();

  go("lesson");

}


/* =========================================================
   LESSON HEADER
========================================================= */

function renderLessonHeader() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  $("lessonEyebrow")
    .textContent =
    "LESSON " +
    String(
      lesson.number
    ).padStart(
      2,
      "0"
    );


  $("lessonTitle")
    .textContent =
    lesson.title;


  $("lessonReference")
    .textContent =
    lesson.reference;


  $("lessonObjective")
    .textContent =
    lesson.objective;

}


/* =========================================================
   STEP ENGINE
========================================================= */

function renderLessonStep() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const container =
    $("lessonContent");


  container.innerHTML =
    "";


  if (
    lesson.type ===
    "noun"
  ) {

    renderNounLesson(
      container,
      lesson
    );

  }


  if (
    lesson.type ===
    "cases"
  ) {

    renderCasesLesson(
      container,
      lesson
    );

  }


  if (
    lesson.type ===
    "genitive"
  ) {

    renderGenitiveLesson(
      container,
      lesson
    );

  }


  if (
    lesson.type ===
    "prepositions"
  ) {

    renderPrepositionLesson(
      container,
      lesson
    );

  }


  const button =
    $("lessonNextBtn");


  if (
    currentStep <
    lesson.sections.length -
    1
  ) {

    button.textContent =
      "下一步 →";

  } else {

    button.textContent =
      "进入测试 →";

  }

}


/* =========================================================
   LESSON 05
========================================================= */

function renderNounLesson(
  container,
  lesson
) {

  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>" +

    lesson.sections[
      currentStep
    ].title +

    "</h3>" +

    "<p class='muted'>" +

    lesson.sections[
      currentStep
    ].intro +

    "</p>";


  if (
    currentStep ===
    0
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<strong>名词的三个核心观察</strong>" +

      "<p>Gender · Number · Case</p>" +

      "<div class='muted'>" +

      "性 · 数 · 格"

      +

      "</div>" +

      "</div>";

  }


  if (
    currentStep ===
    1
  ) {

    section.innerHTML +=

      "<table class='form-table'>" +

      "<tr><th>项目</th><th>问题</th></tr>" +

      "<tr><td>Gender</td><td>它属于哪一种性？</td></tr>" +

      "<tr><td>Number</td><td>单数还是复数？</td></tr>" +

      "<tr><td>Case</td><td>它在句中扮演什么角色？</td></tr>" +

      "</table>";

  }


  if (
    currentStep ===
    2
  ) {

    lesson.forms.forEach(
      function(item) {

        addWordCard(
          section,
          item[0],
          item[1],
          item[2]
        );

      }
    );

  }


  if (
    currentStep ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    const notice =
      document.createElement(
        "div"
      );


    notice.className =
      "notice-box";


    notice.textContent =

      "观察：ὁ λόγος 是主格单数阳性形式，承担句子的重要名词角色。";


    section.appendChild(
      notice
    );

  }


  container.appendChild(
    section
  );

}


/* =========================================================
   LESSON 06
========================================================= */

function renderCasesLesson(
  container,
  lesson
) {

  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>" +

    lesson.sections[
      currentStep
    ].title +

    "</h3>" +

    "<p class='muted'>" +

    lesson.sections[
      currentStep
    ].intro +

    "</p>";


  if (
    currentStep ===
    0
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<strong>主格</strong>" +

      "<p>通常与主语有关。</p>" +

      "<div class='greek-large'>ὁ λόγος</div>" +

      "</div>";

  }


  if (
    currentStep ===
    1
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<strong>直接受格</strong>" +

      "<p>通常表示动词直接作用的对象。</p>" +

      "<div class='greek-large'>τὸν λόγον</div>" +

      "</div>";

  }


  if (
    currentStep ===
    2
  ) {

    lesson.forms.forEach(
      function(item) {

        addWordCard(
          section,
          item[0],
          item[1],
          item[2]
        );

      }
    );

  }


  if (
    currentStep ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    const notice =
      document.createElement(
        "div"
      );


    notice.className =
      "notice-box";


    notice.innerHTML =

      "观察：" +

      "<strong>ὁ λόγος</strong>" +

      " 与 " +

      "<strong>τὸν θεόν</strong>" +

      " 的形式不同。";

    
    section.appendChild(
      notice
    );

  }


  container.appendChild(
    section
  );

}


/* =========================================================
   LESSON 07
========================================================= */

function renderGenitiveLesson(
  container,
  lesson
) {

  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>" +

    lesson.sections[
      currentStep
    ].title +

    "</h3>" +

    "<p class='muted'>" +

    lesson.sections[
      currentStep
    ].intro +

    "</p>";


  if (
    currentStep ===
    0
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<strong>Genitive</strong>" +

      "<p>常见功能：所属、关系、来源等。</p>" +

      "<div class='greek-large'>τοῦ λόγου</div>" +

      "</div>";

  }


  if (
    currentStep ===
    1
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<strong>Dative</strong>" +

      "<p>常见功能：对象、接受者、利益对象等。</p>" +

      "<div class='greek-large'>τῷ λόγῳ</div>" +

      "</div>";

  }


  if (
    currentStep ===
    2
  ) {

    lesson.forms.forEach(
      function(item) {

        addWordCard(
          section,
          item[0],
          item[1],
          item[2]
        );

      }
    );

  }


  if (
    currentStep ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    const notice =
      document.createElement(
        "div"
      );


    notice.className =
      "notice-box";


    notice.textContent =

      "观察 παρὰ θεοῦ：θεοῦ 使用所有格，表达来源关系。";


    section.appendChild(
      notice
    );

  }


  container.appendChild(
    section
  );

}


/* =========================================================
   LESSON 08
========================================================= */

function renderPrepositionLesson(
  container,
  lesson
) {

  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>" +

    lesson.sections[
      currentStep
    ].title +

    "</h3>" +

    "<p class='muted'>" +

    lesson.sections[
      currentStep
    ].intro +

    "</p>";


  if (
    currentStep ===
    0
  ) {

    const rows = [

      [
        "ἐν",
        "in",
        "通常与间接受格结合"
      ],

      [
        "πρός",
        "to / toward",
        "常与受格结合"
      ],

      [
        "παρά",
        "from / beside",
        "格不同会影响意义"
      ],

      [
        "διά",
        "through",
        "搭配格可产生不同意义"
      ]

    ];


    rows.forEach(
      function(item) {

        const row =
          document.createElement(
            "div"
          );


        row.className =
          "word-card";


        row.innerHTML =

          "<div class='word-card-main'>" +

          "<div>" +

          "<div class='word-greek'>" +

          item[0] +

          "</div>" +

          "<div class='word-gloss'>" +

          item[1] +

          "</div>" +

          "</div>" +

          "</div>" +

          "<div class='word-detail'>" +

          item[2] +

          "</div>";


        section.appendChild(
          row
        );

      }
    );

  }


  if (
    currentStep ===
    1
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<div class='greek-large'>εἰμί</div>" +

      "<p>to be · 是、存在</p>" +

      "</div>";

  }


  if (
    currentStep ===
    2
  ) {

    lesson.forms.forEach(
      function(item) {

        addWordCard(
          section,
          item[0],
          item[1],
          item[2]
        );

      }
    );

  }


  if (
    currentStep ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    const notice =
      document.createElement(
        "div"
      );


    notice.className =
      "notice-box";


    notice.innerHTML =

      "<strong>Ἐν ἀρχῇ</strong>" +

      " = in the beginning" +

      "<br><br>" +

      "这一短语把介词、格与句子的时间背景连接起来。";


    section.appendChild(
      notice
    );

  }


  container.appendChild(
    section
  );

}


/* =========================================================
   WORD CARD
========================================================= */

function addWordCard(
  parent,
  greek,
  detail,
  gloss
) {

  const card =
    document.createElement(
      "div"
    );


  card.className =
    "word-card";


  card.innerHTML =

    "<div class='word-card-main'>" +

    "<div>" +

    "<div class='word-greek'>" +

    greek +

    "</div>" +

    "<div class='word-gloss'>" +

    gloss +

    "</div>" +

    "</div>" +

    "<button class='speak-btn' type='button'>" +

    "🔊"

    +

    "</button>" +

    "</div>" +

    "<div class='word-detail'>" +

    detail +

    "</div>";


  card
    .querySelector(
      ".speak-btn"
    )
    .addEventListener(
      "click",
      function() {

        speakText(
          greek
        );

      }
    );


  parent.appendChild(
    card
  );

}


/* =========================================================
   BIBLE BOX
========================================================= */

function addBibleBox(
  parent,
  bible
) {

  const box =
    document.createElement(
      "div"
    );


  box.className =
    "bible-box";


  box.innerHTML =

    "<div class='bible-reference'>" +

    bible.reference +

    "</div>" +

    "<div class='bible-text greek'>" +

    bible.greek +

    "</div>" +

    "<div class='muted'>" +

    bible.chinese +

    "</div>";


  box.addEventListener(
    "click",
    function() {

      speakText(
        bible.greek
      );

    }
  );


  parent.appendChild(
    box
  );

}


/* =========================================================
   TEST
========================================================= */

function renderTest() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const container =
    $("lessonContent");


  container.innerHTML =
    "";


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>课程测试</h3>" +

    "<p class='muted'>" +

    "根据刚才的训练回答。"

    +

    "</p>";


  let answered =
    0;


  let correct =
    0;


  lesson.test.forEach(
    function(
      question,
      index
    ) {

      const block =
        document.createElement(
          "div"
        );


      block.style.marginTop =
        "16px";


      const title =
        document.createElement(
          "strong"
        );


      title.textContent =

        (
          index +
          1
        ) +

        ". " +

        question.question;


      block.appendChild(
        title
      );


      const grid =
        document.createElement(
          "div"
        );


      grid.className =
        "choice-grid";


      question.options.forEach(
        function(
          option,
          optionIndex
        ) {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.textContent =
            option;


          button.addEventListener(
            "click",
            function() {

              grid
                .querySelectorAll(
                  "button"
                )
                .forEach(
                  function(other) {

                    other.disabled =
                      true;

                  }
                );


              answered++;


              if (
                optionIndex ===
                question.answer
              ) {

                correct++;


                button.classList.add(
                  "choice-correct"
                );

              }

              else {

                button.classList.add(
                  "choice-wrong"
                );

              }


              scoreBox.textContent =

                correct +
                " / " +
                lesson.test.length;

            }
          );


          grid.appendChild(
            button
          );

        }
      );


      block.appendChild(
        grid
      );


      section.appendChild(
        block
      );

    }
  );


  const scoreBox =
    document.createElement(
      "div"
    );


  scoreBox.className =
    "exercise-score";


  scoreBox.textContent =
    "0 / " +
    lesson.test.length;


  section.appendChild(
    scoreBox
  );


  const finish =
    document.createElement(
      "button"
    );


  finish.type =
    "button";


  finish.className =
    "primary wide";


  finish.textContent =
    "完成本课";


  finish.addEventListener(
    "click",
    function() {

      if (
        answered <
        lesson.test.length
      ) {

        alert(
          "请完成全部测试题。"
        );

        return;

      }


      completeLesson(
        correct,
        lesson.test.length
      );

    }
  );


  section.appendChild(
    finish
  );


  container.appendChild(
    section
  );


  $("lessonNextBtn")
    .textContent =
    "重新测试";


  $("lessonNextBtn")
    .onclick =
    renderTest;

}


/* =========================================================
   COMPLETE LESSON
========================================================= */

function completeLesson(
  correct,
  total
) {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const lessonState =
    getLessonState(
      currentLessonIndex
    );


  const score =
    Math.round(
      correct /
      total *
      100
    );


  lessonState.completed =
    true;


  lessonState.score =
    score;


  lessonState.completedAt =
    new Date()
      .toISOString();


  saveState();


  renderHome();

  renderReview();


  const content =
    $("lessonContent");


  content.innerHTML =

    "<div class='lesson-section'>" +

    "<div class='success'>" +

    "<strong>" +

    lesson.reference +

    "</strong>" +

    "<br><br>" +

    "课程成绩：" +

    score +

    "%" +

    "<br><br>" +

    (
      score >= 80

        ? "基础掌握良好，可以继续。"

        : "建议再次复习后重新测试。"

    ) +

    "</div>" +

    "</div>";


  $("lessonNextBtn")
    .textContent =
    "返回课程";


  $("lessonNextBtn")
    .onclick =
    function() {

      go("home");

      renderHome();

    };

}


/* =========================================================
   NEXT STEP
========================================================= */

function nextLessonStep() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  if (
    currentStep <
    lesson.sections.length -
    1
  ) {

    currentStep++;

    renderLessonStep();

    return;

  }


  renderTest();

}


/* =========================================================
   REVIEW
========================================================= */

function renderReview() {

  const container =
    $("reviewList");


  if (
    !container
  ) {

    return;

  }


  container.innerHTML =
    "";


  let completed =
    false;


  LESSONS.forEach(
    function(
      lesson,
      index
    ) {

      const lessonState =
        getLessonState(
          index
        );


      if (
        !lessonState.completed
      ) {

        return;

      }


      completed =
        true;


      const row =
        document.createElement(
          "div"
        );


      row.className =
        "review-row";


      row.innerHTML =

        "<div>" +

        "<strong>" +

        lesson.reference +

        "</strong>" +

        "<div>" +

        lesson.title +

        "</div>" +

        "</div>" +

        "<small>" +

        lessonState.score +

        "%"

        +

        "</small>";


      row.style.cursor =
        "pointer";


      row.addEventListener(
        "click",
        function() {

          openLesson(
            index
          );

        }
      );


      container.appendChild(
        row
      );

    }
  );


  if (
    !completed
  ) {

    container.innerHTML =

      "<div class='muted'>" +

      "还没有完成课程。"

      +

      "</div>";

  }

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


  speechSynthesis.cancel();


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


  speechSynthesis.speak(
    utterance
  );

}


/* =========================================================
   GLOBAL
========================================================= */

window.go =
  go;

window.speakText =
  speakText;

window.openLesson =
  openLesson;

window.renderTest =
  renderTest;


/* =========================================================
   END GBRM V0.3
========================================================= */
