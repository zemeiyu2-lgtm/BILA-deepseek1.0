/* =========================================================
   GBRM V0.4
   Greek Bible Reading Model

   Lesson 09–14
   ---------------------------------------------------------
   L09  Adjectives
   L10  Third Declension Nouns
   L11  First / Second Person Pronouns
   L12  αὐτός
   L13  Demonstrative Pronouns / Adjectives
   L14  Relative Pronouns

   Training:
   FORM → FUNCTION → TEXT → MEANING
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {

  STATE_KEY:
    "GBRM_V04_STATE",

  LANGUAGE:
    "en-US",

  NORMAL_RATE:
    0.88,

  SLOW_RATE:
    0.65

};


/* =========================================================
   LESSON DATA
========================================================= */

const LESSONS = [

  /* =======================================================
     L09
  ======================================================= */

  {

    id:
      "L09",

    number:
      9,

    title:
      "Adjectives · 形容词",

    reference:
      "Lesson 09",

    objective:
      "认识形容词与名词之间的性、数、格一致，并观察形容词在新约句子中的功能。",

    type:
      "adjective",

    sections: [

      {
        title:
          "形容词做什么？",

        intro:
          "形容词可以描述名词，也可以在句子中承担名词性的功能。"
      },

      {
        title:
          "一致关系",

        intro:
          "形容词通常要在性、数、格上与所修饰的名词相一致。"
      },

      {
        title:
          "词形观察",

        intro:
          "观察基本形如何随着性、数、格变化。"
      },

      {
        title:
          "新约阅读",

        intro:
          "现在把形容词放回真实经文。"
      }

    ],

    forms: [

      [
        "ἀγαθός",
        "阳性 · 主格单数",
        "good"
      ],

      [
        "ἀγαθή",
        "阴性 · 主格单数",
        "good"
      ],

      [
        "ἀγαθόν",
        "中性 · 主格/受格单数",
        "good"
      ],

      [
        "καλός",
        "阳性 · 主格单数",
        "good / beautiful"
      ]

    ],

    bible: {

      reference:
        "John 1:46",

      greek:
        "καὶ εἶπεν αὐτῷ Ναθαναήλ· Ἐκ Ναζαρὲτ δύναταί τι ἀγαθὸν εἶναι;",

      chinese:
        "拿但业对他说：拿撒勒还能出什么好的吗？"

    },

    test: [

      {

        question:
          "What normally agrees with the noun in gender, number, and case?",

        options:
          [
            "Adjective",
            "Only the verb",
            "Only the preposition",
            "The accent"
          ],

        answer:
          0

      },

      {

        question:
          "Which form is neuter singular?",

        options:
          [
            "ἀγαθόν",
            "ἀγαθός",
            "ἀγαθή",
            "καλοί"
          ],

        answer:
          0

      },

      {

        question:
          "What does ἀγαθός commonly mean?",

        options:
          [
            "good",
            "greatly",
            "from",
            "there"
          ],

        answer:
          0

      },

      {

        question:
          "In the John 1:46 example, ἀγαθὸν is connected with which idea?",

        options:
          [
            "something good",
            "someone speaking",
            "the city",
            "the disciples"
          ],

        answer:
          0

      }

    ]

  },


  /* =======================================================
     L10
  ======================================================= */

  {

    id:
      "L10",

    number:
      10,

    title:
      "Third Declension Nouns · 第三格变式名词",

    reference:
      "Lesson 10",

    objective:
      "开始认识第三格变式名词，并学习通过词干与字尾判断词形和句法角色。",

    type:
      "third",

    sections: [

      {
        title:
          "为什么需要第三格变式？",

        intro:
          "第三格变式与前面学过的名词形式不同，需要注意词干变化。"
      },

      {
        title:
          "词干观察",

        intro:
          "第三格变式的词干往往不能直接从主格外形看出来。"
      },

      {
        title:
          "重要词汇",

        intro:
          "开始接触新约中重要的第三格变式名词。"
      },

      {
        title:
          "原文观察",

        intro:
          "把第三格变式带回新约阅读。"
      }

    ],

    forms: [

      [
        "σῶμα",
        "中性 · 主格/受格单数",
        "body"
      ],

      [
        "σώματος",
        "中性 · 所有格单数",
        "of the body"
      ],

      [
        "φῶς",
        "中性 · 主格/受格单数",
        "light"
      ],

      [
        "φωτός",
        "中性 · 所有格单数",
        "of light"
      ]

    ],

    bible: {

      reference:
        "John 1:4–5",

      greek:
        "Ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων.",

      chinese:
        "生命在他里面，这生命就是人的光。"

    },

    test: [

      {

        question:
          "Which phrase represents the genitive of φῶς?",

        options:
          [
            "φωτός",
            "φῶς",
            "φωτί",
            "φῶτος"
          ],

        answer:
          0

      },

      {

        question:
          "Why can third declension nouns require special attention?",

        options:
          [
            "The stem may not be obvious from the nominative",
            "They have no cases",
            "They cannot be plural",
            "They never have articles"
          ],

        answer:
          0

      },

      {

        question:
          "What does φῶς mean?",

        options:
          [
            "light",
            "life",
            "body",
            "word"
          ],

        answer:
          0

      }

    ]

  },


  /* =======================================================
     L11
  ======================================================= */

  {

    id:
      "L11",

    number:
      11,

    title:
      "First & Second Person Pronouns",

    reference:
      "Lesson 11",

    objective:
      "掌握第一、第二人称代名词的基本形式，并学习通过上下文理解代名词所指。",

    type:
      "pronoun",

    sections: [

      {
        title:
          "第一人称",

        intro:
          "学习 'I / we' 的基本希腊文形式。"
      },

      {
        title:
          "第二人称",

        intro:
          "学习 'you' 的单复数以及基本格变化。"
      },

      {
        title:
          "词形观察",

        intro:
          "代名词的形式本身携带格与数等信息。"
      },

      {
        title:
          "新约阅读",

        intro:
          "观察代名词在真实文本中的指涉。"
      }

    ],

    forms: [

      [
        "ἐγώ",
        "第一人称 · 主格单数",
        "I"
      ],

      [
        "μοι",
        "第一人称 · 间接受格单数",
        "to/for me"
      ],

      [
        "ἡμεῖς",
        "第一人称 · 主格复数",
        "we"
      ],

      [
        "σύ",
        "第二人称 · 主格单数",
        "you"
      ],

      [
        "ὑμεῖς",
        "第二人称 · 主格复数",
        "you"
      ]

    ],

    bible: {

      reference:
        "John 1:23",

      greek:
        "Ἐγὼ φωνὴ βοῶντος ἐν τῇ ἐρήμῳ·",

      chinese:
        "我就是那在旷野有人声喊着说……"

    },

    test: [

      {

        question:
          "What does ἐγώ mean?",

        options:
          [
            "I",
            "you",
            "we",
            "they"
          ],

        answer:
          0

      },

      {

        question:
          "Which form means 'we'?",

        options:
          [
            "ἡμεῖς",
            "ἐγώ",
            "σύ",
            "ὑμεῖς"
          ],

        answer:
          0

      },

      {

        question:
          "Which form means 'you' singular?",

        options:
          [
            "σύ",
            "ὑμεῖς",
            "ἡμεῖς",
            "ἐγώ"
          ],

        answer:
          0

      }

    ]

  },


  /* =======================================================
     L12
  ======================================================= */

  {

    id:
      "L12",

    number:
      12,

    title:
      "αὐτός",

    reference:
      "Lesson 12",

    objective:
      "学习 αὐτός 的三种主要功能：代名词、强调用法、以及与名词组合的相关用法。",

    type:
      "autos",

    sections: [

      {
        title:
          "αὐτός 的核心",

        intro:
          "αὐτός 是新约中极常见的词，需要根据句法和上下文判断功能。"
      },

      {
        title:
          "代名词功能",

        intro:
          "在代名词功能中，αὐτός 可以承担 'he / him / they / them' 等角色。"
      },

      {
        title:
          "形式观察",

        intro:
          "观察 αὐτός 的性、数、格变化。"
      },

      {
        title:
          "新约阅读",

        intro:
          "把 αὐτός 带回约翰福音文本。"
      }

    ],

    forms: [

      [
        "αὐτός",
        "阳性 · 主格单数",
        "he / himself"
      ],

      [
        "αὐτόν",
        "阳性 · 受格单数",
        "him"
      ],

      [
        "αὐτοῦ",
        "阳性 · 所有格单数",
        "his / of him"
      ],

      [
        "αὐτοί",
        "阳性 · 主格复数",
        "they"
      ]

    ],

    bible: {

      reference:
        "John 1:10",

      greek:
        "ἐν τῷ κόσμῳ ἦν, καὶ ὁ κόσμος δι’ αὐτοῦ ἐγένετο.",

      chinese:
        "他在世界上，世界也是借着他造的。"

    },

    test: [

      {

        question:
          "What can αὐτός function as?",

        options:
          [
            "A pronoun",
            "Only a preposition",
            "Only an article",
            "Only a conjunction"
          ],

        answer:
          0

      },

      {

        question:
          "What does αὐτόν represent here?",

        options:
          [
            "him",
            "his",
            "they",
            "I"
          ],

        answer:
          0

      },

      {

        question:
          "What does αὐτοῦ commonly indicate?",

        options:
          [
            "his / of him",
            "him",
            "they",
            "we"
          ],

        answer:
          0

      }

    ]

  },


  /* =======================================================
     L13
  ======================================================= */

  {

    id:
      "L13",

    number:
      13,

    title:
      "Demonstratives · 指示代词",

    reference:
      "Lesson 13",

    objective:
      "认识 οὗτος 等指示代词，并学习它们如何指向特定人物、事物或概念。",

    type:
      "demonstrative",

    sections: [

      {
        title:
          "指示代词",

        intro:
          "指示代词用于指向某一个确定的人、事物或概念。"
      },

      {
        title:
          "οὗτος",

        intro:
          "οὗτος、αὕτη、τοῦτο 是最重要的一组指示形式。"
      },

      {
        title:
          "形式变化",

        intro:
          "观察性、数、格如何影响指示代词。"
      },

      {
        title:
          "新约阅读",

        intro:
          "观察指示代词在上下文中到底指向谁。"
      }

    ],

    forms: [

      [
        "οὗτος",
        "阳性 · 主格单数",
        "this man / this"
      ],

      [
        "αὕτη",
        "阴性 · 主格单数",
        "this woman / this"
      ],

      [
        "τοῦτο",
        "中性 · 主格/受格单数",
        "this thing"
      ],

      [
        "οὗτοι",
        "阳性 · 主格复数",
        "these men"
      ]

    ],

    bible: {

      reference:
        "John 1:30",

      greek:
        "οὗτός ἐστιν ὑπὲρ οὗ ἐγὼ εἶπον·",

      chinese:
        "这就是我曾说……的那一位。"

    },

    test: [

      {

        question:
          "What does οὗτος usually indicate?",

        options:
          [
            "this",
            "who",
            "because",
            "through"
          ],

        answer:
          0

      },

      {

        question:
          "Which form is feminine nominative singular?",

        options:
          [
            "αὕτη",
            "οὗτος",
            "τοῦτο",
            "οὗτοι"
          ],

        answer:
          0

      },

      {

        question:
          "Which form is neuter singular?",

        options:
          [
            "τοῦτο",
            "αὕτη",
            "οὗτος",
            "οὗτοι"
          ],

        answer:
          0

      }

    ]

  },


  /* =======================================================
     L14
  ======================================================= */

  {

    id:
      "L14",

    number:
      14,

    title:
      "Relative Pronouns · 关系代名词",

    reference:
      "Lesson 14",

    objective:
      "理解关系代名词如何连接主句与关系子句，并开始用关系代名词进行句法观察。",

    type:
      "relative",

    sections: [

      {
        title:
          "什么是关系代名词？",

        intro:
          "关系代名词连接一个名词与描述这个名词的关系子句。"
      },

      {
        title:
          "ὅς · ἥ · ὅ",

        intro:
          "关系代名词在性和数上通常与先行词一致，但格由它在关系子句中的功能决定。"
      },

      {
        title:
          "句法观察",

        intro:
          "这是从单纯词形学习进入句法学习的重要一步。"
      },

      {
        title:
          "新约阅读",

        intro:
          "现在观察关系代名词如何连接完整的新约句子。"
      }

    ],

    forms: [

      [
        "ὅς",
        "阳性 · 主格单数",
        "who / which"
      ],

      [
        "ἥ",
        "阴性 · 主格单数",
        "who / which"
      ],

      [
        "ὅ",
        "中性 · 主格/受格单数",
        "which / what"
      ],

      [
        "οὗ",
        "所有格",
        "of whom / of which"
      ],

      [
        "ὅν",
        "阳性 · 受格单数",
        "whom / which"
      ]

    ],

    bible: {

      reference:
        "John 1:30",

      greek:
        "οὗτός ἐστιν ὑπὲρ οὗ ἐγὼ εἶπον·",

      chinese:
        "这就是我曾说过的那一位。"

    },

    test: [

      {

        question:
          "What does a relative pronoun usually do?",

        options:
          [
            "Connect a noun with a relative clause",
            "Mark only a question",
            "Replace every verb",
            "Mark every preposition"
          ],

        answer:
          0

      },

      {

        question:
          "Which is a nominative masculine singular relative pronoun?",

        options:
          [
            "ὅς",
            "ἥ",
            "ὅ",
            "ὅν"
          ],

        answer:
          0

      },

      {

        question:
          "What usually determines the case of the relative pronoun?",

        options:
          [
            "Its function inside the relative clause",
            "The preceding article only",
            "Its translation",
            "The chapter number"
          ],

        answer:
          0

      },

      {

        question:
          "In οὗ ἐγὼ εἶπον, οὗ is connected to which idea?",

        options:
          [
            "the person spoken about",
            "the city",
            "the time",
            "the speaker's name"
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


let testScore =
  0;


let testAnswered =
  0;


/* =========================================================
   STATE
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


      if (
        parsed &&
        typeof parsed ===
        "object"
      ) {

        return parsed;

      }

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

  try {

    localStorage.setItem(

      CONFIG.STATE_KEY,

      JSON.stringify(
        state
      )

    );

  } catch (
    error
  ) {

    console.warn(
      "GBRM save error:",
      error
    );

  }

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

  bindEvents();

}


/* =========================================================
   EVENTS
========================================================= */

function bindEvents() {

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


  const next =
    $("lessonNextBtn");


  if (
    next
  ) {

    next.onclick =
      nextLessonStep;

  }

}


function bind(
  id,
  fn
) {

  const element =
    $(id);


  if (
    element
  ) {

    element.addEventListener(
      "click",
      fn
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

        escapeHtml(
          lesson.title
        ) +

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


  testScore =
    0;


  testAnswered =
    0;


  speechRate =
    CONFIG.NORMAL_RATE;


  renderLessonHeader();

  renderLessonStep();

  go("lesson");

}


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
    currentStep <
    lesson.sections.length
  ) {

    renderSection(
      lesson,
      currentStep,
      container
    );


    $("lessonNextBtn")
      .textContent =
      currentStep ===
      lesson.sections.length - 1

        ? "进入课程测试 →"

        : "下一步 →";


    return;

  }


  renderTest();

}


function renderSection(
  lesson,
  step,
  container
) {

  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  const title =
    document.createElement(
      "h3"
    );


  title.textContent =
    lesson.sections[
      step
    ].title;


  section.appendChild(
    title
  );


  const intro =
    document.createElement(
      "p"
    );


  intro.className =
    "muted";


  intro.textContent =
    lesson.sections[
      step
    ].intro;


  section.appendChild(
    intro
  );


  if (
    lesson.type ===
    "adjective"
  ) {

    renderAdjectiveSection(
      lesson,
      step,
      section
    );

  }


  if (
    lesson.type ===
    "third"
  ) {

    renderThirdSection(
      lesson,
      step,
      section
    );

  }


  if (
    lesson.type ===
    "pronoun"
  ) {

    renderPronounSection(
      lesson,
      step,
      section
    );

  }


  if (
    lesson.type ===
    "autos"
  ) {

    renderAutosSection(
      lesson,
      step,
      section
    );

  }


  if (
    lesson.type ===
    "demonstrative"
  ) {

    renderDemonstrativeSection(
      lesson,
      step,
      section
    );

  }


  if (
    lesson.type ===
    "relative"
  ) {

    renderRelativeSection(
      lesson,
      step,
      section
    );

  }


  container.appendChild(
    section
  );

}


/* =========================================================
   L09
========================================================= */

function renderAdjectiveSection(
  lesson,
  step,
  section
) {

  if (
    step ===
    0
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<strong>形容词的两个主要问题</strong>" +

      "<p>它描述什么？它与哪个名词一致？</p>" +

      "<p class='muted'>Gender · Number · Case</p>" +

      "</div>";

  }


  if (
    step ===
    1
  ) {

    section.innerHTML +=

      "<table class='form-table'>" +

      "<tr><th>项目</th><th>观察</th></tr>" +

      "<tr><td>Gender</td><td>与名词性相应</td></tr>" +

      "<tr><td>Number</td><td>单数 / 复数</td></tr>" +

      "<tr><td>Case</td><td>根据句中功能变化</td></tr>" +

      "</table>";

  }


  if (
    step ===
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
    step ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    addNotice(
      section,

      "ἀγαθὸν 与中性单数形式有关。观察它在句中不是简单地背一个中文词，而是结合上下文理解。"

    );

  }

}


/* =========================================================
   L10
========================================================= */

function renderThirdSection(
  lesson,
  step,
  section
) {

  if (
    step ===
    0
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<strong>第三格变式</strong>" +

      "<p>不要只看主格外形。</p>" +

      "<p class='muted'>先识别词干，再观察字尾。</p>" +

      "</div>";

  }


  if (
    step ===
    1
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<div class='greek-large'>φῶς → φωτός</div>" +

      "<p>主格与所有格的外形不同，词干识别非常重要。</p>" +

      "</div>";

  }


  if (
    step ===
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
    step ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    addNotice(
      section,

      "τῶν ἀνθρώπων 中，ἀνθρώπων 的形式显示其与前面学习的格系统有关。"

    );

  }

}


/* =========================================================
   L11
========================================================= */

function renderPronounSection(
  lesson,
  step,
  section
) {

  if (
    step ===
    0
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<div class='greek-large'>ἐγώ</div>" +

      "<p>I · 第一人称单数</p>" +

      "</div>";

  }


  if (
    step ===
    1
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<div class='greek-large'>σύ / ὑμεῖς</div>" +

      "<p>you singular / you plural</p>" +

      "</div>";

  }


  if (
    step ===
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
    step ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    addNotice(
      section,

      "这里的 ἐγώ 明确指出说话者。希腊文代名词形式直接参与身份与句法观察。"

    );

  }

}


/* =========================================================
   L12
========================================================= */

function renderAutosSection(
  lesson,
  step,
  section
) {

  if (
    step ===
    0
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<div class='greek-large'>αὐτός</div>" +

      "<p>这是新约极高频词，需要根据句法与上下文判断具体功能。</p>" +

      "</div>";

  }


  if (
    step ===
    1
  ) {

    section.innerHTML +=

      "<table class='form-table'>" +

      "<tr><th>形式</th><th>基本功能</th></tr>" +

      "<tr><td>αὐτός</td><td>he / himself</td></tr>" +

      "<tr><td>αὐτόν</td><td>him</td></tr>" +

      "<tr><td>αὐτοῦ</td><td>his / of him</td></tr>" +

      "<tr><td>αὐτοί</td><td>they</td></tr>" +

      "</table>";

  }


  if (
    step ===
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
    step ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    addNotice(
      section,

      "δι’ αὐτοῦ 中的 αὐτοῦ 是一个代名词形式。不要单独背 'his'，先问：它在句中承担什么功能？"

    );

  }

}


/* =========================================================
   L13
========================================================= */

function renderDemonstrativeSection(
  lesson,
  step,
  section
) {

  if (
    step ===
    0
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<div class='greek-large'>οὗτος</div>" +

      "<p>this · 指向特定的人、事物或概念</p>" +

      "</div>";

  }


  if (
    step ===
    1
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<div class='greek-large'>οὗτος · αὕτη · τοῦτο</div>" +

      "<p>阳性 · 阴性 · 中性</p>" +

      "</div>";

  }


  if (
    step ===
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
    step ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    addNotice(
      section,

      "οὗτός ἐστιν 表达明确的指认：'这就是……'。观察指示代词如何把读者的注意力集中到一个特定对象。"

    );

  }

}


/* =========================================================
   L14
========================================================= */

function renderRelativeSection(
  lesson,
  step,
  section
) {

  if (
    step ===
    0
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<div class='greek-large'>ὅς · ἥ · ὅ</div>" +

      "<p>who / which</p>" +

      "</div>";

  }


  if (
    step ===
    1
  ) {

    section.innerHTML +=

      "<div class='grammar-box'>" +

      "<p><strong>重要原则：</strong></p>" +

      "<p>关系代名词通常在性、数上与先行词一致；但格由它在关系子句中的句法功能决定。</p>" +

      "</div>";

  }


  if (
    step ===
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
    step ===
    3
  ) {

    addBibleBox(
      section,
      lesson.bible
    );


    addNotice(
      section,

      "οὗ ἐγὼ εἶπον 中，οὗ 把前面的对象与后面的关系子句连接起来。这就是从词形观察进入句法阅读的关键一步。"

    );

  }

}


/* =========================================================
   COMPONENTS
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

    "<div class='word-greek greek'>" +

    escapeHtml(
      greek
    ) +

    "</div>" +

    "<div class='word-gloss'>" +

    escapeHtml(
      gloss
    ) +

    "</div>" +

    "</div>" +

    "<button class='speak-btn' type='button'>🔊</button>" +

    "</div>" +

    "<div class='word-detail'>" +

    escapeHtml(
      detail
    ) +

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

    escapeHtml(
      bible.reference
    ) +

    "</div>" +

    "<div class='bible-text greek'>" +

    escapeHtml(
      bible.greek
    ) +

    "</div>" +

    "<div class='muted'>" +

    escapeHtml(
      bible.chinese
    ) +

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


function addNotice(
  parent,
  text
) {

  const box =
    document.createElement(
      "div"
    );


  box.className =
    "notice-box";


  box.textContent =
    text;


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


  testScore =
    0;


  testAnswered =
    0;


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  const title =
    document.createElement(
      "h3"
    );


  title.textContent =
    "课程测试";


  section.appendChild(
    title
  );


  const intro =
    document.createElement(
      "p"
    );


  intro.className =
    "muted";


  intro.textContent =
    "根据刚才的训练回答问题。";


  section.appendChild(
    intro
  );


  const scoreBox =
    document.createElement(
      "div"
    );


  scoreBox.className =
    "exercise-score";


  scoreBox.id =
    "testLiveScore";


  scoreBox.textContent =
    "0 / " +
    lesson.test.length;


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
        "17px";


      const heading =
        document.createElement(
          "strong"
        );


      heading.textContent =

        (
          index +
          1
        ) +

        ". " +

        question.question;


      block.appendChild(
        heading
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
                  function(
                    other
                  ) {

                    other.disabled =
                      true;

                  }
                );


              testAnswered++;


              if (
                optionIndex ===
                question.answer
              ) {

                testScore++;


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

                testScore +

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


  section.appendChild(
    scoreBox
  );


  const complete =
    document.createElement(
      "button"
    );


  complete.type =
    "button";


  complete.className =
    "primary wide";


  complete.textContent =
    "完成本课";


  complete.addEventListener(
    "click",
    function() {

      if (
        testAnswered <
        lesson.test.length
      ) {

        alert(
          "请完成全部测试题。"
        );

        return;

      }


      completeLesson(
        testScore,
        lesson.test.length
      );

    }
  );


  section.appendChild(
    complete
  );


  container.appendChild(
    section
  );


  const next =
    $("lessonNextBtn");


  next.textContent =
    "重新测试";


  next.onclick =
    renderTest;

}


/* =========================================================
   COMPLETE
========================================================= */

function completeLesson(
  score,
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


  const percent =
    Math.round(
      score /
      total *
      100
    );


  lessonState.completed =
    true;


  lessonState.score =
    percent;


  lessonState.completedAt =
    new Date()
      .toISOString();


  saveState();


  renderHome();

  renderReview();


  const container =
    $("lessonContent");


  container.innerHTML =

    "<div class='lesson-section'>" +

    "<div class='success'>" +

    "<strong>" +

    lesson.reference +

    "</strong>" +

    "<br><br>" +

    "课程成绩：" +

    percent +

    "%" +

    "<br><br>" +

    (
      percent >= 80

        ? "掌握良好，可以继续进入下一课。"

        : "建议重新训练后再测试。"

    ) +

    "</div>" +

    "</div>";


  const next =
    $("lessonNextBtn");


  if (
    currentLessonIndex <
    LESSONS.length - 1
  ) {

    next.textContent =
      "下一课 →";


    next.onclick =
      function() {

        openLesson(
          currentLessonIndex +
          1
        );

      };

  }

  else {

    next.textContent =
      "返回课程目录";


    next.onclick =
      function() {

        go("home");

        renderHome();

      };

  }

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


  let has =
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


      has =
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

        escapeHtml(
          lesson.title
        ) +

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
    !has
  ) {

    container.innerHTML =

      "<div class='muted'>" +

      "完成课程后，这里会显示学习记录。"

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
      "当前浏览器不支持语音朗读。"
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
   HTML ESCAPE
========================================================= */

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


/* =========================================================
   END
========================================================= */
