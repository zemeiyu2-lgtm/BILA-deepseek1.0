/* =========================================================
   GBRM V0.2
   Greek Bible Reading Model

   Course Engine
   ---------------------------------------------------------
   Lesson 03 : Alphabet & Pronunciation
   Lesson 04 : Punctuation & Syllables
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {

  STATE_KEY:
    "GBRM_V02_STATE",

  LANGUAGE:
    "en-US",

  NORMAL_RATE:
    0.88,

  SLOW_RATE:
    0.65

};


/* =========================================================
   ALPHABET
========================================================= */

const ALPHABET = [

  ["Α","α","Alpha","a"],

  ["Β","β","Beta","b"],

  ["Γ","γ","Gamma","g"],

  ["Δ","δ","Delta","d"],

  ["Ε","ε","Epsilon","e"],

  ["Ζ","ζ","Zeta","z"],

  ["Η","η","Eta","ē"],

  ["Θ","θ","Theta","th"],

  ["Ι","ι","Iota","i"],

  ["Κ","κ","Kappa","k"],

  ["Λ","λ","Lambda","l"],

  ["Μ","μ","Mu","m"],

  ["Ν","ν","Nu","n"],

  ["Ξ","ξ","Xi","x"],

  ["Ο","ο","Omicron","o"],

  ["Π","π","Pi","p"],

  ["Ρ","ρ","Rho","r"],

  ["Σ","σ","Sigma","s"],

  ["Τ","τ","Tau","t"],

  ["Υ","υ","Upsilon","u"],

  ["Φ","φ","Phi","ph"],

  ["Χ","χ","Chi","ch"],

  ["Ψ","ψ","Psi","ps"],

  ["Ω","ω","Omega","ō"]

];


/* =========================================================
   LESSON DATA
========================================================= */

const LESSONS = [

  /* =======================================================
     LESSON 03
  ======================================================= */

  {

    id:
      "L03",

    number:
      3,

    title:
      "Alphabet & Pronunciation",

    reference:
      "Lesson 03",

    objective:
      "掌握 24 个希腊字母、基本名称与发音，并能够开始辨认希腊文。",

    type:
      "alphabet",

    sections: [

      {

        title:
          "24 个希腊字母",

        intro:
          "先认识字母形状、名称和基本声音。点击字母听发音。"

      },

      {

        title:
          "元音",

        intro:
          "希腊文有七个基本元音。"

      },

      {

        title:
          "双母音",

        intro:
          "两个元音组合在一起形成一个声音单位。"

      },

      {

        title:
          "气号",

        intro:
          "以元音或双母音开头的词需要观察气号。"

      },

      {

        title:
          "真实阅读",

        intro:
          "开始把字母组合成真实希腊文。"

      }

    ],

    test: [

      {

        question:
          "How many letters are in the Greek alphabet?",

        options:
          [
            "24",
            "26",
            "20",
            "22"
          ],

        answer:
          0

      },

      {

        question:
          "Which one is a Greek vowel?",

        options:
          [
            "η",
            "θ",
            "ψ",
            "χ"
          ],

        answer:
          0

      },

      {

        question:
          "Which letter is Omega?",

        options:
          [
            "ω",
            "ο",
            "η",
            "ε"
          ],

        answer:
          0

      },

      {

        question:
          "Which one begins the word λόγος?",

        options:
          [
            "λ",
            "δ",
            "γ",
            "μ"
          ],

        answer:
          0

      }

    ]

  },


  /* =======================================================
     LESSON 04
  ======================================================= */

  {

    id:
      "L04",

    number:
      4,

    title:
      "Punctuation & Syllables",

    reference:
      "Lesson 04",

    objective:
      "认识希腊文标点、基本音节结构，并开始按照词的组成阅读。",

    type:
      "syllables",

    sections: [

      {

        title:
          "希腊文标点",

        intro:
          "先认识最常见的句子标记。"

      },

      {

        title:
          "音节",

        intro:
          "把较长的词分成可读的音节。"

      },

      {

        title:
          "阅读练习",

        intro:
          "观察一个词是怎样组合起来的。"

      }

    ],

    punctuation: [

      [";", "Greek question mark", "希腊文问号"],

      [".", "Period", "句号"],

      [",", "Comma", "逗号"],

      [":", "Colon", "冒号/上点"] 

    ],

    syllables: [

      ["λόγος", "λό-γος"],

      ["θεός", "θε-ός"],

      ["ζωή", "ζω-ή"],

      ["φῶς", "φῶς"],

      ["ἄνθρωπος", "ἄν-θρω-πος"]

    ],

    test: [

      {

        question:
          "What symbol is used as a Greek question mark?",

        options:
          [
            ";",
            "?",
            ":",
            ","
          ],

        answer:
          0

      },

      {

        question:
          "How many syllables does λόγος have?",

        options:
          [
            "2",
            "3",
            "1",
            "4"
          ],

        answer:
          0

      },

      {

        question:
          "Which is a correct division of ἄνθρωπος?",

        options:
          [
            "ἄν-θρω-πος",
            "ἄ-νθρωπος",
            "ἄνθρω-πος",
            "ἄν-θρ-ω-πος"
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
   LOAD / SAVE
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
      "GBRM state error",
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
   HELPER
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

  bindStaticEvents();

}


/* =========================================================
   STATIC EVENTS
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
    "lessonNextBtn",
    nextLessonStep
  );


  bind(
    "reviewHomeBtn",
    function() {

      go("review");

    }
  );

}


/* =========================================================
   BIND
========================================================= */

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


      const row =
        document.createElement(
          "button"
        );


      row.type =
        "button";


      row.className =
        "lesson-item";


      if (
        lessonState.completed
      ) {

        row.classList.add(
          "done"
        );

      }


      row.innerHTML =

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


      row.addEventListener(
        "click",
        function() {

          openLesson(
            index
          );

        }
      );


      list.appendChild(
        row
      );

    }
  );


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
   LESSON STEP
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
    "alphabet"
  ) {

    renderAlphabetLesson(
      container,
      lesson
    );

  }


  if (
    lesson.type ===
    "syllables"
  ) {

    renderSyllableLesson(
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

  }

  else {

    button.textContent =
      "进入课程测试 →";

  }

}


/* =========================================================
   ALPHABET LESSON
========================================================= */

function renderAlphabetLesson(
  container,
  lesson
) {

  if (
    currentStep ===
    0
  ) {

    const section =
      createSection(
        lesson.sections[0].title,
        lesson.sections[0].intro
      );


    const grid =
      document.createElement(
        "div"
      );


    grid.className =
      "alphabet-grid";


    ALPHABET.forEach(
      function(item) {

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "letter-card";


        button.innerHTML =

          "<div class='letter'>" +

          item[1] +

          "</div>" +

          "<div class='letter-name'>" +

          item[0] +

          " · " +

          item[2] +

          "</div>";


        button.addEventListener(
          "click",
          function() {

            speakText(
              item[2]
            );

          }
        );


        grid.appendChild(
          button
        );

      }
    );


    section.appendChild(
      grid
    );


    container.appendChild(
      section
    );


    return;

  }


  if (
    currentStep ===
    1
  ) {

    const section =
      createSection(
        lesson.sections[1].title,
        lesson.sections[1].intro
      );


    const grid =
      document.createElement(
        "div"
      );


    grid.className =
      "alphabet-grid";


    [

      ["α","a"],

      ["ε","e"],

      ["η","ē"],

      ["ι","i"],

      ["ο","o"],

      ["υ","u"],

      ["ω","ō"]

    ]
      .forEach(
        function(item) {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.className =
            "letter-card";


          button.innerHTML =

            "<div class='letter'>" +

            item[0] +

            "</div>" +

            "<div class='letter-name'>" +

            item[1] +

            "</div>";


          button.addEventListener(
            "click",
            function() {

              speakText(
                item[1]
              );

            }
          );


          grid.appendChild(
            button
          );

        }
      );


    section.appendChild(
      grid
    );


    container.appendChild(
      section
    );


    return;

  }


  if (
    currentStep ===
    2
  ) {

    const section =
      createSection(
        lesson.sections[2].title,
        lesson.sections[2].intro
      );


    const examples = [

      ["αι","ai"],

      ["ει","ei"],

      ["οι","oi"],

      ["ου","ou"],

      ["αυ","au"],

      ["ευ","eu"]

    ];


    examples.forEach(
      function(item) {

        const row =
          document.createElement(
            "div"
          );


        row.className =
          "word-example";


        row.innerHTML =

          "<div class='greek'>" +

          item[0] +

          "</div>" +

          "<div class='muted'>" +

          item[1] +

          "</div>";


        row.addEventListener(
          "click",
          function() {

            speakText(
              item[1]
            );

          }
        );


        section.appendChild(
          row
        );

      }
    );


    container.appendChild(
      section
    );


    return;

  }


  if (
    currentStep ===
    3
  ) {

    const section =
      createSection(
        lesson.sections[3].title,
        lesson.sections[3].intro
      );


    section.innerHTML +=

      "<div class='word-example'>" +

      "<div class='greek'>ἀπόστολος</div>" +

      "<div class='muted'>" +

      "Observe the opening breathing mark."

      +

      "</div>" +

      "</div>";


    const button =
      document.createElement(
        "button"
      );


    button.type =
      "button";


    button.textContent =
      "🔊 听示例";


    button.style.marginTop =
      "10px";


    button.addEventListener(
      "click",
      function() {

        speakText(
          "apostolos"
        );

      }
    );


    section.appendChild(
      button
    );


    container.appendChild(
      section
    );


    return;

  }


  renderRealReading(
    container
  );

}


/* =========================================================
   REAL READING
========================================================= */

function renderRealReading(
  container
) {

  const section =
    createSection(
      "真实希腊文阅读",
      "开始把字母组合成真实的新约词汇。"
    );


  [

    ["λόγος","logos","道 / Word"],

    ["θεός","theos","神 / God"],

    ["ζωή","zōē","生命 / life"],

    ["φῶς","phōs","光 / light"]

  ]
    .forEach(
      function(item) {

        const row =
          document.createElement(
            "div"
          );


        row.className =
          "word-example";


        row.innerHTML =

          "<div class='greek'>" +

          item[0] +

          "</div>" +

          "<div class='muted'>" +

          item[1] +

          " · " +

          item[2] +

          "</div>";


        row.addEventListener(
          "click",
          function() {

            speakText(
              item[1]
            );

          }
        );


        section.appendChild(
          row
        );

      }
    );


  container.appendChild(
    section
  );

}


/* =========================================================
   SYLLABLE LESSON
========================================================= */

function renderSyllableLesson(
  container,
  lesson
) {

  if (
    currentStep ===
    0
  ) {

    const section =
      createSection(
        lesson.sections[0].title,
        lesson.sections[0].intro
      );


    lesson.punctuation
      .forEach(
        function(item) {

          const row =
            document.createElement(
              "div"
            );


          row.className =
            "review-row";


          row.innerHTML =

            "<div>" +

            "<strong>" +

            item[0] +

            "</strong>" +

            "<div class='muted'>" +

            item[1] +

            "</div>" +

            "</div>" +

            "<small>" +

            item[2] +

            "</small>";


          section.appendChild(
            row
          );

        }
      );


    container.appendChild(
      section
    );


    return;

  }


  if (
    currentStep ===
    1
  ) {

    const section =
      createSection(
        lesson.sections[1].title,
        lesson.sections[1].intro
      );


    lesson.syllables
      .forEach(
        function(item) {

          const row =
            document.createElement(
              "div"
            );


          row.className =
            "word-example";


          row.innerHTML =

            "<div class='greek'>" +

            item[0] +

            "</div>" +

            "<div class='muted'>" +

            item[1] +

            "</div>";


          row.addEventListener(
            "click",
            function() {

              speakText(
                item[0]
              );

            }
          );


          section.appendChild(
            row
          );

        }
      );


    container.appendChild(
      section
    );


    return;

  }


  renderReadingExercise(
    container
  );

}


/* =========================================================
   READING EXERCISE
========================================================= */

function renderReadingExercise(
  container
) {

  const section =
    createSection(
      "阅读练习",
      "点击词语听示范，并观察它是怎样组成的。"
    );


  [

    "λόγος",

    "θεός",

    "ζωή",

    "φῶς",

    "ἄνθρωπος"

  ]
    .forEach(
      function(word) {

        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "word-example";


        button.style.width =
          "100%";


        button.style.marginTop =
          "8px";


        button.innerHTML =

          "<div class='greek'>" +

          word +

          "</div>" +

          "<div class='muted'>" +

          "点击听读"

          +

          "</div>";


        button.addEventListener(
          "click",
          function() {

            speakText(
              word
            );

          }
        );


        section.appendChild(
          button
        );

      }
    );


  container.appendChild(
    section
  );

}


/* =========================================================
   CREATE SECTION
========================================================= */

function createSection(
  title,
  intro
) {

  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  const heading =
    document.createElement(
      "h3"
    );


  heading.textContent =
    title;


  section.appendChild(
    heading
  );


  const text =
    document.createElement(
      "p"
    );


  text.className =
    "muted";


  text.textContent =
    intro;


  section.appendChild(
    text
  );


  return section;

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


  renderLessonTest();

}


/* =========================================================
   TEST
========================================================= */

function renderLessonTest() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const container =
    $("lessonContent");


  container.innerHTML =
    "";


  const section =
    createSection(
      "课程测试",
      "根据刚才的训练回答问题。"
    );


  let score =
    0;


  let answered =
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
        "15px";


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
                  function(item) {

                    item.disabled =
                      true;

                  }
                );


              answered++;


              if (
                optionIndex ===
                question.answer
              ) {

                score++;

                button.classList.add(
                  "choice-correct"
                );

              } else {

                button.classList.add(
                  "choice-wrong"
                );

              }


              scoreBox.textContent =

                score +
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
    "完成课程";


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
        score,
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
    function() {

      renderLessonTest();

    };

}


/* =========================================================
   COMPLETE LESSON
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


  const finalScore =
    Math.round(
      score /
      total *
      100
    );


  lessonState.completed =
    true;


  lessonState.score =
    finalScore;


  lessonState.completedAt =
    new Date()
      .toISOString();


  saveState();


  renderHome();

  renderReview();


  $("lessonContent")
    .innerHTML =

    "<div class='lesson-section'>" +

    "<div class='success'>" +

    "<strong>" +

    lesson.reference +

    "</strong>" +

    "<br><br>" +

    "课程完成：" +

    finalScore +

    "%" +

    "<br><br>" +

    (
      finalScore >= 80

        ? "基础掌握良好。"

        : "建议再次复习后重新测试。"

    ) +

    "</div>" +

    "</div>";


  $("lessonNextBtn")
    .textContent =
    "返回课程目录";


  $("lessonNextBtn")
    .onclick =
    function() {

      go("home");

      renderHome();

    };

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

        lesson.title +

        "</div>" +

        "</div>" +

        "<small>" +

        lessonState.score +

        "% · 已完成"

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

      "完成课程后，这里会出现复习记录。"

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
   END
========================================================= */
