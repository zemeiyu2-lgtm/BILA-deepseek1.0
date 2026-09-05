/* =========================================================
   GBRM V0.1
   Greek Bible Reading Model

   Lesson 03
   Greek Alphabet + Sound

   Purpose:
   Build the foundation for New Testament Greek
   reading and later exegetical study.
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {

  LANGUAGE:
    "en-US",

  NORMAL_RATE:
    0.9,

  SLOW_RATE:
    0.65,

  STATE_KEY:
    "GBRM_V01_STATE"

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
   VOWELS
========================================================= */

const VOWELS = [

  ["α","a"],

  ["ε","e"],

  ["η","ē"],

  ["ι","i"],

  ["ο","o"],

  ["υ","u"],

  ["ω","ō"]

];


/* =========================================================
   DIPHTHONGS
========================================================= */

const DIPHTHONGS = [

  ["αι","ai"],

  ["ει","ei"],

  ["οι","oi"],

  ["αυ","au"],

  ["ου","ou"],

  ["υι","ui"],

  ["ευ","eu"],

  ["ηυ","ēu"]

];


/* =========================================================
   STATE
========================================================= */

let speechRate =
  CONFIG.NORMAL_RATE;


let recognizeIndex =
  0;


let recognizeScore =
  0;


let selectedRecognition =
  null;


const state =
  loadState();


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
      "GBRM state error",
      error
    );

  }


  return {

    lesson03:
      {

        completed:
          false,

        score:
          0,

        completedAt:
          null

      }

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

  bindEvents();

  renderAlphabet();

  renderVowels();

  renderDiphthongs();

  updateHome();

}


/* =========================================================
   EVENT BINDING
========================================================= */

function bindEvents() {


  bind(
    "startBtn",
    function() {

      go("alphabet");

    }
  );


  bind(
    "alphabetBack",
    function() {

      go("home");

    }
  );


  bind(
    "soundBtn",
    function() {

      go("sound");

    }
  );


  bind(
    "soundBack",
    function() {

      go("alphabet");

    }
  );


  bind(
    "recognizeBtn",
    function() {

      startRecognition();

      go("recognize");

    }
  );


  bind(
    "recognizeBack",
    function() {

      go("sound");

    }
  );


  bind(
    "recognizeNextBtn",
    function() {

      nextRecognition();

    }
  );


  bind(
    "readBack",
    function() {

      go("recognize");

    }
  );


  bind(
    "logosBtn",
    function() {

      speakText(
        "logos"
      );

    }
  );


  bind(
    "apostolosBtn",
    function() {

      speakText(
        "apostolos"
      );

    }
  );


  bind(
    "testBtn",
    function() {

      renderTest();

      go("test");

    }
  );


  bind(
    "testBack",
    function() {

      go("read");

    }
  );


  bind(
    "submitTest",
    submitTest
  );


  bind(
    "homeBtn",
    function() {

      go("home");

      updateHome();

    }
  );


  bind(
    "breathingPlayBtn",
    function() {

      speakText(
        "apostolos"
      );

    }
  );


}


function bind(
  id,
  handler
) {

  const element =
    $(id);


  if (
    !element
  ) {

    return;

  }


  element.addEventListener(
    "click",
    handler
  );

}


/* =========================================================
   HOME
========================================================= */

function updateHome() {

  const start =
    $("startBtn");


  if (
    state.lesson03.completed
  ) {

    start.textContent =
      "再次训练 →";

  }

}


/* =========================================================
   ALPHABET
========================================================= */

function renderAlphabet() {

  const container =
    $("alphabetGrid");


  if (
    !container
  ) {

    return;

  }


  container.innerHTML =
    "";


  ALPHABET.forEach(
    function(item) {

      const card =
        document.createElement(
          "button"
        );


      card.type =
        "button";


      card.className =
        "letter-card";


      card.innerHTML =

        "<div class='letter-small'>" +

        item[1] +

        "</div>" +

        "<div class='letter-large'>" +

        item[0] +

        " · " +

        item[2] +

        "</div>" +

        "<div class='letter-large'>" +

        item[3] +

        "</div>";


      card.addEventListener(
        "click",
        function() {

          speakText(
            item[2]
          );

        }
      );


      container.appendChild(
        card
      );

    }
  );

}


/* =========================================================
   VOWELS
========================================================= */

function renderVowels() {

  const container =
    $("vowelGrid");


  if (
    !container
  ) {

    return;

  }


  container.innerHTML =
    "";


  VOWELS.forEach(
    function(item) {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "vowel";


      button.textContent =
        item[0];


      button.addEventListener(
        "click",
        function() {

          speakText(
            item[1]
          );

        }
      );


      container.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   DIPHTHONGS
========================================================= */

function renderDiphthongs() {

  const container =
    $("diphthongList");


  if (
    !container
  ) {

    return;

  }


  container.innerHTML =
    "";


  DIPHTHONGS.forEach(
    function(item) {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "diphthong-row";


      const greek =
        document.createElement(
          "span"
        );


      greek.className =
        "diphthong";


      greek.textContent =
        item[0];


      const sound =
        document.createElement(
          "span"
        );


      sound.textContent =
        item[1];


      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.textContent =
        "🔊";


      button.addEventListener(
        "click",
        function() {

          speakText(
            item[1]
          );

        }
      );


      row.appendChild(
        greek
      );


      row.appendChild(
        sound
      );


      row.appendChild(
        button
      );


      container.appendChild(
        row
      );

    }
  );

}


/* =========================================================
   RECOGNITION
========================================================= */

function startRecognition() {

  recognizeIndex =
    0;


  recognizeScore =
    0;


  selectedRecognition =
    null;


  renderRecognition();

}


function renderRecognition() {

  const area =
    $("recognizeGame");


  const score =
    $("recognizeScore");


  if (
    !area ||
    !score
  ) {

    return;

  }


  if (
    recognizeIndex >=
    10
  ) {

    area.innerHTML =

      "<div class='success'>" +

      "识别训练完成。"

      + "</div>";


    score.textContent =

      recognizeScore +
      " / 10";


    return;

  }


  const item =
    ALPHABET[
      recognizeIndex
      %
      ALPHABET.length
    ];


  const answers =
    buildRecognitionAnswers(
      item
    );


  area.innerHTML =
    "";


  const letter =
    document.createElement(
      "div"
    );


  letter.innerHTML =

    "<div class='game-letter'>" +

    item[1] +

    "</div>" +

    "<div class='muted'>" +

    "请选择对应的大写字母"

    + "</div>";


  area.appendChild(
    letter
  );


  const grid =
    document.createElement(
      "div"
    );


  grid.className =
    "choice-grid";


  answers.forEach(
    function(answer) {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.textContent =
        answer[0];


      button.addEventListener(
        "click",
        function() {

          grid
            .querySelectorAll(
              "button"
            )
            .forEach(
              function(itemButton) {

                itemButton.disabled =
                  true;

              }
            );


          if (
            answer[0] ===
            item[0]
          ) {

            button.classList.add(
              "primary"
            );


            recognizeScore++;

          }


          setTimeout(
            function() {

              recognizeIndex++;

              renderRecognition();

            },
            400
          );

        }
      );


      grid.appendChild(
        button
      );

    }
  );


  area.appendChild(
    grid
  );


  score.textContent =

    recognizeScore +
    " / " +
    recognizeIndex;

}


function buildRecognitionAnswers(
  correct
) {

  const result =
    [correct];


  for (
    let i = 0;
    i < ALPHABET.length;
    i++
  ) {

    const candidate =
      ALPHABET[
        (
          i +
          correct[0]
            .charCodeAt(0)
        )
        %
        ALPHABET.length
      ];


    if (
      !result.some(
        function(item) {

          return (
            item[0] ===
            candidate[0]
          );

        }
      )
    ) {

      result.push(
        candidate
      );

    }


    if (
      result.length >=
      4
    ) {

      break;

    }

  }


  return result;

}


function nextRecognition() {

  if (
    recognizeIndex ===
    0
  ) {

    startRecognition();

  }

}


/* =========================================================
   TEST
========================================================= */

function renderTest() {

  const area =
    $("testArea");


  if (
    !area
  ) {

    return;

  }


  area.innerHTML =
    "";


  const questions = [

    {

      question:
        "How many letters are in the Greek alphabet?",

      options:
        [
          "24",
          "26",
          "20"
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
          "ψ"
        ],

      answer:
        0

    },

    {

      question:
        "What is the Greek word for 'a common sound made by two vowels'?",

      options:
        [
          "Diphthong",
          "Consonant",
          "Accent"
        ],

      answer:
        0

    },

    {

      question:
        "What can a rough breathing add to pronunciation?",

      options:
        [
          "h",
          "s",
          "m"
        ],

      answer:
        0

    }

  ];


  questions.forEach(
    function(item, index) {

      const block =
        document.createElement(
          "div"
        );


      block.className =
        "card";


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
        item.question;


      block.appendChild(
        title
      );


      item.options
        .forEach(
          function(
            option,
            optionIndex
          ) {

            const label =
              document.createElement(
                "label"
              );


            label.style.display =
              "block";


            label.style.marginTop =
              "9px";


            const input =
              document.createElement(
                "input"
              );


            input.type =
              "radio";


            input.name =
              "test" +
              index;


            input.value =
              optionIndex;


            label.appendChild(
              input
            );


            label.appendChild(
              document.createTextNode(
                " " +
                option
              )
            );


            block.appendChild(
              label
            );

          }
        );


      block.dataset.answer =
        item.answer;


      area.appendChild(
        block
      );

    }
  );

}


function submitTest() {

  const blocks =
    document.querySelectorAll(
      "#testArea .card"
    );


  let correct =
    0;


  let answered =
    0;


  blocks.forEach(
    function(block) {

      const selected =
        block.querySelector(
          "input:checked"
        );


      if (
        !selected
      ) {

        return;

      }


      answered++;


      if (
        Number(
          selected.value
        ) ===
        Number(
          block.dataset.answer
        )
      ) {

        correct++;

      }

    }
  );


  if (
    answered <
    blocks.length
  ) {

    alert(
      "请完成全部测试。"
    );

    return;

  }


  const score =
    Math.round(
      correct /
      blocks.length *
      100
    );


  state.lesson03.score =
    score;


  state.lesson03.completed =
    true;


  state.lesson03.completedAt =
    new Date()
      .toISOString();


  saveState();


  const result =
    $("testResult");


  result.classList.remove(
    "hidden"
  );


  result.innerHTML =

    "<div class='success'>" +

    "<strong>" +

    "Lesson 03：" +

    score +

    "%</strong>" +

    "<br><br>" +

    "你已经完成字母与发音基础训练。"

    + "</div>";


  setTimeout(
    function() {

      const message =
        $("finalMessage");


      message.innerHTML =

        "<strong>" +

        "Lesson 03 完成：" +

        score +

        "%</strong>" +

        "<div style='margin-top:8px'>" +

        "下一阶段可以进入标点、音节，再逐步进入名词系统。" +

        "</div>";


      go(
        "complete"
      );

    },
    700
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
   PUBLIC API
========================================================= */

window.go =
  go;

window.speakText =
  speakText;


/* =========================================================
   END
========================================================= */
