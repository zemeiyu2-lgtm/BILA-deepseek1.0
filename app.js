/* =========================================================
   GBRM V1.1
   FOUNDATION + VOCABULARY MEMORY ENGINE

   L01–L25
========================================================= */


const CONFIG = {

  STATE_KEY:
    "GBRM_V11_STATE",

  LANGUAGE:
    "en-US",

  NORMAL_RATE:
    0.88,

  SLOW_RATE:
    0.65

};


/* =========================================================
   LESSONS
========================================================= */

const LESSONS = [

  {
    n: 1,
    title: "希腊语",
    group: "引言",
    objective:
      "认识学习新约希腊文的目的，并建立原文学习方向。",
    kind: "intro",
    sections: [
      "为什么学习希腊文",
      "学习目标",
      "学习方法"
    ]
  },

  {
    n: 2,
    title: "学习希腊文",
    group: "引言",
    objective:
      "建立持续学习、发音、书写、复习和同伴学习的习惯。",
    kind: "intro",
    sections: [
      "学习纪律",
      "多感官学习",
      "作业与复习"
    ]
  },

  {
    n: 3,
    title: "字母与发音",
    group: "引言",
    objective:
      "掌握24个字母、基本发音、元音、双母音与气号。",
    kind: "alphabet",
    sections: [
      "24个字母",
      "元音",
      "双母音",
      "气号"
    ]
  },

  {
    n: 4,
    title: "标点符号与音节",
    group: "引言",
    objective:
      "认识希腊文标点与音节结构。",
    kind: "syllable",
    sections: [
      "标点符号",
      "音节",
      "阅读练习"
    ]
  },

  {
    n: 5,
    title: "英文的名词简介",
    group: "名词系统",
    objective:
      "建立名词、性、数、格的基本概念。",
    kind: "noun",
    sections: [
      "名词是什么",
      "性与数",
      "格与功能"
    ]
  },

  {
    n: 6,
    title: "主格与直接受格；定冠词",
    group: "名词系统",
    objective:
      "学习主格、受格与定冠词。",
    kind: "case",
    sections: [
      "主格",
      "直接受格",
      "定冠词",
      "原文观察"
    ]
  },

  {
    n: 7,
    title: "所有格与间接受格",
    group: "名词系统",
    objective:
      "理解所有格、间接受格与关系意义。",
    kind: "case",
    sections: [
      "所有格",
      "间接受格",
      "形式比较",
      "原文观察"
    ]
  },

  {
    n: 8,
    title: "介词与 εἰμί",
    group: "名词系统",
    objective:
      "学习基本介词与 εἰμί。",
    kind: "case",
    sections: [
      "介词",
      "εἰμί",
      "基本形式",
      "原文观察"
    ]
  },

  {
    n: 9,
    title: "形容词",
    group: "名词系统",
    objective:
      "认识形容词与名词之间的性、数、格一致。",
    kind: "adjective",
    sections: [
      "形容词功能",
      "一致关系",
      "基本形式",
      "原文阅读"
    ]
  },

  {
    n: 10,
    title: "第三格变式名词",
    group: "名词系统",
    objective:
      "开始识别第三格变式名词。",
    kind: "third",
    sections: [
      "第三格变式",
      "词干",
      "常见形式",
      "原文观察"
    ]
  },

  {
    n: 11,
    title: "第一与第二人称代名词",
    group: "名词系统",
    objective:
      "掌握第一、第二人称代名词。",
    kind: "pronoun",
    sections: [
      "第一人称",
      "第二人称",
      "格与功能",
      "原文观察"
    ]
  },

  {
    n: 12,
    title: "αὐτός",
    group: "名词系统",
    objective:
      "认识 αὐτός 的基本形式与功能。",
    kind: "autos",
    sections: [
      "αὐτός",
      "基本形式",
      "句法功能",
      "原文观察"
    ]
  },

  {
    n: 13,
    title: "指示代名词／形容词",
    group: "名词系统",
    objective:
      "认识指示代名词的形式与指涉。",
    kind: "demonstrative",
    sections: [
      "指示词",
      "οὗτος",
      "一致关系",
      "原文观察"
    ]
  },

  {
    n: 14,
    title: "关系代名词",
    group: "名词系统",
    objective:
      "理解关系代名词与关系子句。",
    kind: "relative",
    sections: [
      "关系代名词",
      "ὅς · ἥ · ὅ",
      "性数格",
      "原文观察"
    ]
  },

  {
    n: 15,
    title: "动词简介",
    group: "动词系统",
    objective:
      "建立时态、语态、语气、人称与数等概念。",
    kind: "verb",
    sections: [
      "动词是什么",
      "人称与数",
      "时态与观点",
      "时态字干"
    ]
  },

  {
    n: 16,
    title: "现在式主动语态直说语气",
    group: "动词系统",
    objective:
      "掌握现在式主动直说语气的基本结构。",
    kind: "present",
    sections: [
      "结构图",
      "六个人称形式",
      "人称字尾",
      "原文观察"
    ]
  },

  {
    n: 17,
    title: "缩略动词",
    group: "动词系统",
    objective:
      "认识缩略动词与元音缩合。",
    kind: "contract",
    sections: [
      "缩略是什么",
      "ἀγαπάω",
      "ζητέω",
      "原文观察"
    ]
  },

  {
    n: 18,
    title: "现在式关身／被动语态",
    group: "动词系统",
    objective:
      "学习现在式关身／被动形式。",
    kind: "mp",
    sections: [
      "关身／被动",
      "基本字尾",
      "形式观察",
      "原文阅读"
    ]
  },

  {
    n: 19,
    title: "未来式主动／关身",
    group: "动词系统",
    objective:
      "学习未来式的基本构成。",
    kind: "future",
    sections: [
      "未来式",
      "σ记号",
      "主动语态",
      "关身语态"
    ]
  },

  {
    n: 20,
    title: "动词字根；未来式其他字形",
    group: "动词系统",
    objective:
      "认识不同动词词干与未来式变化。",
    kind: "stems",
    sections: [
      "词干",
      "塞音结尾",
      "缩略字干",
      "词典时态字形"
    ]
  },

  {
    n: 21,
    title: "不完成式",
    group: "动词系统",
    objective:
      "认识未完成式的基本结构与观点。",
    kind: "imperfect",
    sections: [
      "未完成式",
      "往昔号",
      "ἔλυον",
      "原文观察"
    ]
  },

  {
    n: 22,
    title: "第二不定过去式",
    group: "动词系统",
    objective:
      "学习第二不定过去式及第二词干。",
    kind: "aorist2",
    sections: [
      "第二不定过去式",
      "第二词干",
      "主动与关身",
      "释经观察"
    ]
  },

  {
    n: 23,
    title: "第一不定过去式",
    group: "动词系统",
    objective:
      "认识第一不定过去式及 σα 形式。",
    kind: "aorist1",
    sections: [
      "第一不定过去式",
      "σα",
      "主动与关身",
      "释经观察"
    ]
  },

  {
    n: 24,
    title: "不定过去式与未来式被动",
    group: "动词系统",
    objective:
      "认识被动语态特别标记。",
    kind: "passive",
    sections: [
      "未来被动",
      "不定过去式被动",
      "构成",
      "释经观察"
    ]
  },

  {
    n: 25,
    title: "现在完成式",
    group: "动词系统",
    objective:
      "认识完成式基本构成以及持续结果。",
    kind: "perfect",
    sections: [
      "完成式",
      "重复号",
      "主动形式",
      "原文观察"
    ]
  }

];


/* =========================================================
   VOCABULARY
========================================================= */

const VOCABULARY = {

  L03: [

    {
      word:
        "ἄνθρωπος",
      gloss:
        "人；人类",
      english:
        "man; mankind; person",
      frequency:
        550
    },

    {
      word:
        "ἀπόστολος",
      gloss:
        "使徒；使者",
      english:
        "apostle; messenger",
      frequency:
        80
    },

    {
      word:
        "ἀμήν",
      gloss:
        "实实在在地；阿们",
      english:
        "amen; truly",
      frequency:
        129
    }

  ],

  L04: [

    {
      word:
        "ἄγγελος",
      gloss:
        "使者；天使",
      english:
        "angel; messenger",
      frequency:
        175
    },

    {
      word:
        "γραφή",
      gloss:
        "著作；圣经",
      english:
        "writing; Scripture",
      frequency:
        50
    },

    {
      word:
        "φωνή",
      gloss:
        "声音；声响",
      english:
        "sound; voice",
      frequency:
        139
    }

  ],

  L05: [

    {
      word:
        "κόσμος",
      gloss:
        "世界；宇宙；世人",
      english:
        "world; universe; humankind",
      frequency:
        186
    },

    {
      word:
        "λόγος",
      gloss:
        "言语；道；信息",
      english:
        "word; statement; message",
      frequency:
        330
    },

    {
      word:
        "θεός",
      gloss:
        "神；神明",
      english:
        "God; god",
      frequency:
        1317
    },

    {
      word:
        "ζωή",
      gloss:
        "生命",
      english:
        "life",
      frequency:
        135
    }

  ],

  L06: [

    {
      word:
        "καί",
      gloss:
        "和；而；也",
      english:
        "and; also",
      frequency:
        9161
    },

    {
      word:
        "ἐν",
      gloss:
        "在……里面；在……当中",
      english:
        "in; among",
      frequency:
        2752
    },

    {
      word:
        "ὁ",
      gloss:
        "定冠词",
      english:
        "the",
      frequency:
        19870
    },

    {
      word:
        "οὐ",
      gloss:
        "不",
      english:
        "not",
      frequency:
        1606
    },

    {
      word:
        "ὅτι",
      gloss:
        "因为；就是",
      english:
        "that; because",
      frequency:
        1296
    }

  ],

  L07: [

    {
      word:
        "ἀγάπη",
      gloss:
        "爱",
      english:
        "love",
      frequency:
        116
    },

    {
      word:
        "ἔργον",
      gloss:
        "工作；行为",
      english:
        "work; deed",
      frequency:
        169
    },

    {
      word:
        "καιρός",
      gloss:
        "时间；季节",
      english:
        "time; season",
      frequency:
        85
    }

  ],

  L08: [

    {
      word:
        "εἰμί",
      gloss:
        "是；存在",
      english:
        "to be",
      frequency:
        2462
    },

    {
      word:
        "εἰς",
      gloss:
        "进入；在……里面",
      english:
        "into; in",
      frequency:
        1768
    },

    {
      word:
        "παρά",
      gloss:
        "从；在旁边",
      english:
        "from; beside",
      frequency:
        194
    }

  ],

  L09: [

    {
      word:
        "καλός",
      gloss:
        "美丽的；好的",
      english:
        "beautiful; good",
      frequency:
        100
    },

    {
      word:
        "ἔσχατος",
      gloss:
        "最后的",
      english:
        "last",
      frequency:
        52
    },

    {
      word:
        "μέγας",
      gloss:
        "大的；伟大的",
      english:
        "great; large",
      frequency:
        243
    }

  ],

  L10: [

    {
      word:
        "φῶς",
      gloss:
        "光",
      english:
        "light",
      frequency:
        73
    },

    {
      word:
        "σῶμα",
      gloss:
        "身体",
      english:
        "body",
      frequency:
        142
    },

    {
      word:
        "μήτηρ",
      gloss:
        "母亲",
      english:
        "mother",
      frequency:
        83
    },

    {
      word:
        "πατήρ",
      gloss:
        "父亲",
      english:
        "father",
      frequency:
        413
    }

  ],

  L11: [

    {
      word:
        "ἐγώ",
      gloss:
        "我",
      english:
        "I",
      frequency:
        1802
    },

    {
      word:
        "ἡμεῖς",
      gloss:
        "我们",
      english:
        "we",
      frequency:
        864
    },

    {
      word:
        "ὑμεῖς",
      gloss:
        "你们",
      english:
        "you plural",
      frequency:
        1840
    },

    {
      word:
        "χάρις",
      gloss:
        "恩典；恩慈",
      english:
        "grace; favor; kindness",
      frequency:
        155
    }

  ],

  L12: [

    {
      word:
        "αὐτός",
      gloss:
        "他；她；它",
      english:
        "he; she; it",
      frequency:
        5597
    },

    {
      word:
        "νῦν",
      gloss:
        "现在",
      english:
        "now",
      frequency:
        147
    }

  ],

  L13: [

    {
      word:
        "οὗτος",
      gloss:
        "这个；这一个",
      english:
        "this; this one",
      frequency:
        1388
    },

    {
      word:
        "ἴδε",
      gloss:
        "看哪",
      english:
        "behold",
      frequency:
        29
    }

  ],

  L14: [

    {
      word:
        "ὅς",
      gloss:
        "谁；哪一个",
      english:
        "who; which",
      frequency:
        1365
    },

    {
      word:
        "ὅστις",
      gloss:
        "无论谁；凡……的人",
      english:
        "whoever",
      frequency:
        153
    }

  ],

  L15: [

    {
      word:
        "λύω",
      gloss:
        "解开；释放",
      english:
        "loose; release",
      frequency:
        42
    },

    {
      word:
        "λαμβάνω",
      gloss:
        "拿；领受",
      english:
        "take; receive",
      frequency:
        258
    },

    {
      word:
        "λέγω",
      gloss:
        "说",
      english:
        "say; speak",
      frequency:
        235
    }

  ],

  L16: [

    {
      word:
        "πιστεύω",
      gloss:
        "相信",
      english:
        "believe",
      frequency:
        241
    },

    {
      word:
        "μένω",
      gloss:
        "住；停留",
      english:
        "remain; stay",
      frequency:
        118
    },

    {
      word:
        "ἀκούω",
      gloss:
        "听；听见",
      english:
        "hear",
      frequency:
        428
    }

  ],

  L17: [

    {
      word:
        "ἀγαπάω",
      gloss:
        "爱",
      english:
        "love",
      frequency:
        143
    },

    {
      word:
        "ζητέω",
      gloss:
        "寻找",
      english:
        "seek",
      frequency:
        118
    },

    {
      word:
        "ποιέω",
      gloss:
        "做；制造",
      english:
        "do; make",
      frequency:
        568
    }

  ],

  L18: [

    {
      word:
        "γίνομαι",
      gloss:
        "成为；发生",
      english:
        "become; happen",
      frequency:
        668
    },

    {
      word:
        "γράφω",
      gloss:
        "写",
      english:
        "write",
      frequency:
        191
    }

  ],

  L19: [

    {
      word:
        "καλέω",
      gloss:
        "呼召；称呼",
      english:
        "call",
      frequency:
        148
    },

    {
      word:
        "τηρέω",
      gloss:
        "遵守；保守",
      english:
        "keep; observe",
      frequency:
        70
    }

  ],

  L20: [

    {
      word:
        "ἔχω",
      gloss:
        "有；拥有",
      english:
        "have",
      frequency:
        708
    },

    {
      word:
        "βλέπω",
      gloss:
        "看见",
      english:
        "see",
      frequency:
        133
    },

    {
      word:
        "συνάγω",
      gloss:
        "聚集",
      english:
        "gather",
      frequency:
        59
    }

  ],

  L21: [

    {
      word:
        "μένω",
      gloss:
        "住；常存",
      english:
        "remain",
      frequency:
        118
    },

    {
      word:
        "ποιέω",
      gloss:
        "做；制造",
      english:
        "do; make",
      frequency:
        568
    }

  ],

  L22: [

    {
      word:
        "λαμβάνω",
      gloss:
        "拿；领受",
      english:
        "take; receive",
      frequency:
        258
    },

    {
      word:
        "ἔρχομαι",
      gloss:
        "来；去",
      english:
        "come; go",
      frequency:
        637
    },

    {
      word:
        "εὑρίσκω",
      gloss:
        "找到",
      english:
        "find",
      frequency:
        176
    }

  ],

  L23: [

    {
      word:
        "δικαιόω",
      gloss:
        "称义",
      english:
        "justify; declare righteous",
      frequency:
        39
    },

    {
      word:
        "βαπτίζω",
      gloss:
        "施洗",
      english:
        "baptize",
      frequency:
        77
    }

  ],

  L24: [

    {
      word:
        "σῴζω",
      gloss:
        "拯救",
      english:
        "save",
      frequency:
        106
    }

  ],

  L25: [

    {
      word:
        "κρίνω",
      gloss:
        "判断；审判",
      english:
        "judge",
      frequency:
        114
    },

    {
      word:
        "γινώσκω",
      gloss:
        "知道；认识",
      english:
        "know",
      frequency:
        222
    }

  ]

};


/* =========================================================
   BIBLE EXAMPLES
========================================================= */

const BIBLE = {

  5: [
    "John 1:1",
    "Ἐν ἀρχῇ ἦν ὁ λόγος.",
    "太初有道。"
  ],

  6: [
    "John 1:1",
    "καὶ ὁ λόγος ἦν πρὸς τὸν θεόν.",
    "道与神同在。"
  ],

  7: [
    "John 1:6",
    "ἀπεσταλμένος παρὰ θεοῦ.",
    "从神那里差来的。"
  ],

  8: [
    "John 1:1",
    "Ἐν ἀρχῇ ἦν ὁ λόγος.",
    "太初有道。"
  ],

  9: [
    "John 1:46",
    "δύναταί τι ἀγαθὸν εἶναι;",
    "还能出什么好的吗？"
  ],

  10: [
    "John 1:5",
    "τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει.",
    "光照在黑暗里。"
  ],

  11: [
    "John 1:23",
    "Ἐγὼ φωνὴ βοῶντος ἐν τῇ ἐρήμῳ.",
    "我就是那在旷野有人声喊着的。"
  ],

  12: [
    "John 1:10",
    "ὁ κόσμος δι’ αὐτοῦ ἐγένετο.",
    "世界也是借着他造的。"
  ],

  13: [
    "John 1:30",
    "οὗτός ἐστιν.",
    "这就是那一位。"
  ],

  14: [
    "John 1:30",
    "οὗ ἐγὼ εἶπον.",
    "我曾说过的那一位。"
  ],

  16: [
    "John 1:7",
    "πάντες πιστεύσωσιν δι’ αὐτοῦ.",
    "叫众人因他可以信。"
  ],

  17: [
    "John 1:38",
    "τί ζητεῖτε;",
    "你们寻找什么？"
  ],

  19: [
    "John 1:51",
    "ὄψεσθε τὸν οὐρανὸν ἀνεῳγότα.",
    "你们将要看见天开了。"
  ],

  22: [
    "Luke 15:24",
    "ἦν νεκρὸς καὶ ἔζησεν.",
    "他是死而复活。"
  ],

  23: [
    "Romans 5:1",
    "δικαιωθέντες οὖν ἐκ πίστεως.",
    "我们既因信称义。"
  ],

  24: [
    "Romans 6:3",
    "ἐβαπτίσθημεν εἰς τὸν θάνατον αὐτοῦ.",
    "受洗归入他的死。"
  ],

  25: [
    "John 3:18",
    "ἤδη κέκριται.",
    "已经定了。"
  ]

};


/* =========================================================
   STATE
========================================================= */

let state =
  loadState();


let currentLessonIndex =
  0;


let currentStep =
  0;


let testScore =
  0;


let testAnswered =
  0;


let speechRate =
  CONFIG.NORMAL_RATE;


let reviewQueue =
  [];


let reviewIndex =
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
        parsed.lessons &&
        parsed.vocabulary
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

    lessons: {},

    vocabulary: {}

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

    state.lessons = {};

  }


  if (
    !state.lessons[
      "L" + lesson.n
    ]
  ) {

    state.lessons[
      "L" + lesson.n
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
    "L" + lesson.n
  ];

}


function getWordState(
  word
) {

  if (
    !state.vocabulary
  ) {

    state.vocabulary = {};

  }


  if (
    !state.vocabulary[word]
  ) {

    state.vocabulary[word] = {

      status:
        "new",

      correct:
        0,

      wrong:
        0,

      lastSeen:
        null,

      nextReview:
        null

    };

  }


  return state.vocabulary[word];

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

  renderCourseReview();

  renderVocabularySummary();

  bindEvents();

}


/* =========================================================
   EVENTS
========================================================= */

function bindEvents() {

  if (
    $("lessonBackBtn")
  ) {

    $("lessonBackBtn").onclick =
      function() {

        go("home");

        renderHome();

      };

  }


  if (
    $("lessonNextBtn")
  ) {

    $("lessonNextBtn").onclick =
      nextLessonStep;

  }


  if (
    $("lessonPrevBtn")
  ) {

    $("lessonPrevBtn").onclick =
      previousLesson;

  }


  if (
    $("reviewBackBtn")
  ) {

    $("reviewBackBtn").onclick =
      function() {

        go("home");

      };

  }


  if (
    $("vocabReviewBack")
  ) {

    $("vocabReviewBack").onclick =
      function() {

        go("home");

      };

  }


  if (
    $("openVocabReview")
  ) {

    $("openVocabReview").onclick =
      startVocabularyReview;

  }

}


/* =========================================================
   HOME
========================================================= */

function renderHome() {

  const box =
    $("lessonList");


  if (
    !box
  ) {

    return;

  }


  box.innerHTML =
    "";


  let lastGroup =
    "";


  LESSONS.forEach(
    function(
      lesson,
      index
    ) {

      if (
        lesson.group !==
        lastGroup
      ) {

        const label =
          document.createElement(
            "div"
          );


        label.className =
          "mini-label";


        label.textContent =
          lesson.group
            .toUpperCase();


        box.appendChild(
          label
        );


        lastGroup =
          lesson.group;

      }


      const st =
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
        st.completed
      ) {

        button.classList.add(
          "done"
        );

      }


      button.innerHTML =

        "<div class='lesson-number'>" +

        "L" +

        String(
          lesson.n
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

        (
          st.completed
            ? "✓ 已完成 · " +
              st.score +
              "%"
            : lesson.group
        ) +

        "</small>" +

        "</div>" +

        "<div class='lesson-status'>" +

        (
          st.completed
            ? "✓"
            : "→"
        ) +

        "</div>";


      button.onclick =
        function() {

          openLesson(
            index
          );

        };


      box.appendChild(
        button
      );

    }
  );


  updateCourseProgress();

}


function updateCourseProgress() {

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


  $("completedLessons")
    .textContent =
    completed;


  $("totalLessons")
    .textContent =
    LESSONS.length;


  $("courseProgress")
    .textContent =
    percent +
    "%";


  $("homeProgressBar")
    .style.width =
    percent +
    "%";

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


  renderLessonHeader();

  renderStep();

  renderLessonVocabulary();

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
      lesson.n
    ).padStart(
      2,
      "0"
    );


  $("lessonTitle")
    .textContent =
    lesson.title;


  $("lessonReference")
    .textContent =
    "Lesson " +
    String(
      lesson.n
    ).padStart(
      2,
      "0"
    );


  $("lessonObjective")
    .textContent =
    lesson.objective;

}


/* =========================================================
   STEP ENGINE
========================================================= */

function renderStep() {

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

    const section =
      createLessonSection(
        lesson,
        currentStep
      );


    container.appendChild(
      section
    );


    $("lessonNextBtn")
      .textContent =

      currentStep ===
      lesson.sections.length - 1

        ? "进入测试 →"

        : "下一步 →";


    return;

  }


  renderTest();

}


/* =========================================================
   LESSON SECTION
========================================================= */

function createLessonSection(
  lesson,
  step
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
    ];


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
    "先学习，再观察形式，最后回到原文。";


  section.appendChild(
    intro
  );


  if (
    lesson.n <=
    4
  ) {

    renderFoundationSection(
      section,
      lesson,
      step
    );

  }

  else {

    renderGrammarSection(
      section,
      lesson,
      step
    );

  }


  return section;

}


/* =========================================================
   FOUNDATION
========================================================= */

function renderFoundationSection(
  section,
  lesson,
  step
) {

  if (
    lesson.kind ===
    "alphabet"
  ) {

    if (
      step ===
      0
    ) {

      const grid =
        document.createElement(
          "div"
        );


      grid.className =
        "choice-grid";


      ALPHABET.forEach(
        function(item) {

          const button =
            document.createElement(
              "button"
            );


          button.innerHTML =

            "<div class='word-greek greek'>" +

            item[1] +

            "</div>" +

            "<div class='word-gloss'>" +

            item[0] +

            " · " +

            item[2] +

            "</div>";


          button.onclick =
            function() {

              speakText(
                item[2]
              );

            };


          grid.appendChild(
            button
          );

        }
      );


      section.appendChild(
        grid
      );

      return;

    }


    if (
      step ===
      1
    ) {

      VOWELS.forEach(
        function(item) {

          addWord(
            section,
            item[0],
            "基本元音",
            item[1]
          );

        }
      );

      return;

    }


    if (
      step ===
      2
    ) {

      DIPHTHONGS.forEach(
        function(item) {

          addWord(
            section,
            item[0],
            "双母音",
            item[1]
          );

        }
      );

      return;

    }


    addWord(
      section,
      "ἀπόστολος",
      "词首气号",
      "apostolos"
    );

    addNotice(
      section,
      "观察字母形状、声音与词形，不要只依赖中文。"
    );

    return;

  }


  if (
    lesson.kind ===
    "syllable"
  ) {

    if (
      step ===
      0
    ) {

      [
        [";","Greek question mark"],
        [".","Period"],
        [",","Comma"],
        [":","Colon / raised dot"]
      ]
        .forEach(
          function(item) {

            addWord(
              section,
              item[0],
              item[1],
              item[0]
            );

          }
        );

      return;

    }


    [
      ["λόγος","λό-γος"],
      ["θεός","θε-ός"],
      ["ζωή","ζω-ή"],
      ["ἄνθρωπος","ἄν-θρω-πος"]
    ]
      .forEach(
        function(item) {

          addWord(
            section,
            item[0],
            "音节",
            item[1]
          );

        }
      );

  }


  if (
    lesson.kind ===
    "intro"
  ) {

    addBox(
      section,

      lesson.n === 1

        ? "学习希腊文不是为了炫耀语言，而是为了更准确地进入新约原文。"

        : "语言学习需要时间、纪律、重复和持续复习。"

    );

  }

}


/* =========================================================
   GRAMMAR
========================================================= */

function renderGrammarSection(
  section,
  lesson,
  step
) {

  const forms =
    COMMON_FORMS[
      lesson.kind
    ] || [];


  if (
    step ===
    0
  ) {

    addBox(
      section,
      lesson.objective
    );


    addNotice(
      section,
      researchNotice(
        lesson.kind
      )
    );


    return;

  }


  if (
    step ===
    1
  ) {

    forms.forEach(
      function(item) {

        addWord(
          section,
          item[0],
          item[1],
          item[2]
        );

      }
    );


    return;

  }


  if (
    step ===
    2
  ) {

    if (
      forms.length
    ) {

      const table =
        document.createElement(
          "table"
        );


      table.className =
        "form-table";


      table.innerHTML =

        "<tr>" +

        "<th>形式</th>" +

        "<th>观察</th>" +

        "</tr>" +


        forms.map(
          function(item) {

            return (

              "<tr>" +

              "<td class='greek'>" +

              escapeHtml(
                item[0]
              ) +

              "</td>" +

              "<td>" +

              escapeHtml(
                item[1]
              ) +

              "</td>" +

              "</tr>"

            );

          }
        ).join("");


      section.appendChild(
        table
      );

    }


    return;

  }


  addBible(
    section,
    lesson.n
  );


  addNotice(
    section,
    researchNotice(
      lesson.kind
    )
  );

}


/* =========================================================
   COMMON FORMS
========================================================= */

const COMMON_FORMS = {

  noun: [
    ["ὁ λόγος","阳性·单数·主格","the Word"],
    ["τοῦ λόγου","阳性·单数·所有格","of the Word"],
    ["τὸν λόγον","阳性·单数·受格","the Word"],
    ["τῷ λόγῳ","阳性·单数·间接受格","to/for the Word"]
  ],

  case: [
    ["ὁ θεός","主格·阳性·单数","God"],
    ["τὸν θεόν","受格·阳性·单数","God"],
    ["τοῦ θεοῦ","所有格·阳性·单数","of God"],
    ["τῷ θεῷ","间接受格·阳性·单数","to/for God"]
  ],

  adjective: [
    ["ἀγαθός","阳性·主格单数","good"],
    ["ἀγαθή","阴性·主格单数","good"],
    ["ἀγαθόν","中性·主格/受格单数","good"]
  ],

  third: [
    ["φῶς","主格/受格","light"],
    ["φωτός","所有格","of light"],
    ["σῶμα","主格/受格","body"],
    ["σώματος","所有格","of body"]
  ],

  pronoun: [
    ["ἐγώ","主格·第一人称单数","I"],
    ["μοι","间接受格·第一人称单数","to/for me"],
    ["ἡμεῖς","主格·第一人称复数","we"],
    ["σύ","主格·第二人称单数","you"],
    ["ὑμεῖς","主格·第二人称复数","you"]
  ],

  autos: [
    ["αὐτός","主格·阳性单数","he / himself"],
    ["αὐτόν","受格·阳性单数","him"],
    ["αὐτοῦ","所有格·阳性单数","his / of him"],
    ["αὐτοί","主格·阳性复数","they"]
  ],

  demonstrative: [
    ["οὗτος","阳性·主格单数","this"],
    ["αὕτη","阴性·主格单数","this"],
    ["τοῦτο","中性·主格/受格单数","this"],
    ["οὗτοι","阳性·主格复数","these"]
  ],

  relative: [
    ["ὅς","阳性·主格单数","who"],
    ["ἥ","阴性·主格单数","who"],
    ["ὅ","中性·主格/受格单数","which"],
    ["οὗ","所有格","of whom/of which"],
    ["ὅν","阳性·受格单数","whom"]
  ],

  verb: [
    ["λύω","现在式·主动·1单","I loose"],
    ["λύεις","现在式·主动·2单","you loose"],
    ["λύει","现在式·主动·3单","he/she/it looses"]
  ],

  present: [
    ["λύω","1单","I loose"],
    ["λύεις","2单","you loose"],
    ["λύει","3单","he/she/it looses"],
    ["λύομεν","1复","we loose"],
    ["λύετε","2复","you loose"],
    ["λύουσι(ν)","3复","they loose"]
  ],

  contract: [
    ["ἀγαπάω","dictionary form","I love"],
    ["ἀγαπῶ","缩略1单","I love"],
    ["ζητέω","dictionary form","I seek"],
    ["ζητῶ","缩略1单","I seek"]
  ],

  mp: [
    ["λύομαι","现在式·关身/被动1单","I am being loosed"],
    ["λύεται","现在式·关身/被动3单","he/she/it is being loosed"],
    ["λυόμεθα","现在式·关身/被动1复","we are being loosed"]
  ],

  future: [
    ["λύσω","未来主动1单","I will loose"],
    ["λύσεις","未来主动2单","you will loose"],
    ["λύσει","未来主动3单","he/she/it will loose"],
    ["λύσομαι","未来关身1单","I will loose for myself"]
  ],

  stems: [
    ["ἀκούω","现在式","hear"],
    ["ἀκούσω","未来式","I will hear"],
    ["βλέπω","现在式","see"],
    ["βλέψω","未来式","I will see"]
  ],

  imperfect: [
    ["ἔλυον","未完成式","I was loosing / they were loosing"],
    ["ἔλυες","2单","you were loosing"],
    ["ἔλυε(ν)","3单","he/she/it was loosing"]
  ],

  aorist2: [
    ["ἔλαβον","第二不定过去式","I took / they took"],
    ["ἔλαβες","主动2单","you took"],
    ["ἔλαβε(ν)","主动3单","he/she/it took"]
  ],

  aorist1: [
    ["ἔλυσα","第一不定过去式主动1单","I loosed"],
    ["ἔλυσας","主动2单","you loosed"],
    ["ἔλυσε(ν)","主动3单","he/she/it loosed"],
    ["ἐλυσάμην","关身1单","I loosed for myself"]
  ],

  passive: [
    ["ἐλύθην","不定过去式被动1单","I was loosed"],
    ["ἐλύθησαν","不定过去式被动3复","they were loosed"],
    ["λυθήσομαι","未来被动1单","I will be loosed"]
  ],

  perfect: [
    ["λέλυκα","完成式主动1单","I have loosed"],
    ["λέλυκας","完成式主动2单","you have loosed"],
    ["λέλυκε(ν)","完成式主动3单","he/she/it has loosed"],
    ["λέλυμαι","完成式关身/被动1单","I have been loosed"]
  ]

};


/* =========================================================
   RESEARCH NOTES
========================================================= */

function researchNotice(
  kind
) {

  const notes = {

    noun:
      "先判断性、数、格，再判断名词在句中的功能。",

    case:
      "不要把一个格机械等同于一个中文意思，要结合上下文。",

    adjective:
      "找到形容词所修饰或关联的名词，检查性、数、格一致。",

    third:
      "先寻找词干，再观察格字尾。",

    pronoun:
      "先识别代词形式，再追踪它所指向的对象。",

    autos:
      "αὐτός 的具体意义由形式和上下文共同决定。",

    demonstrative:
      "先问：这个指示词在文本中究竟指向谁或什么？",

    relative:
      "关系代名词的性、数与先行词相关，格由关系子句中的功能决定。",

    verb:
      "分别观察人称、数、时态、语态、语气。",

    present:
      "观察时态字干、连接母音与人称字尾。",

    contract:
      "注意词干元音与词尾结合时的缩合。",

    mp:
      "根据上下文判断关身或被动意义。",

    future:
      "先确认未来式形式，再解释时间和观点。",

    stems:
      "遇到陌生动词形式，应回到词典和时态字形。",

    imperfect:
      "观察往昔号、字干和过去中的连续观点。",

    aorist2:
      "重点是第二词干，不要机械地翻译成一个中文过去时。",

    aorist1:
      "观察往昔号、字干、σα和相关人称字尾。",

    passive:
      "先完成形态分析，再判断动作接受者。",

    perfect:
      "观察重复号以及动作与持续状态之间的关系。"

  };


  return (
    notes[kind] ||
    "先看形式，再看功能，最后回到上下文。"
  );

}


/* =========================================================
   COMPONENTS
========================================================= */

function addWord(
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

    "<button type='button' class='speak-btn'>🔊</button>" +

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
    .onclick =
    function(event) {

      event.stopPropagation();

      speakText(
        greek
      );

    };


  parent.appendChild(
    card
  );

}


function addBox(
  parent,
  text
) {

  const div =
    document.createElement(
      "div"
    );


  div.className =
    "grammar-box";


  div.textContent =
    text;


  parent.appendChild(
    div
  );

}


function addNotice(
  parent,
  text
) {

  const div =
    document.createElement(
      "div"
    );


  div.className =
    "notice-box";


  div.textContent =
    text;


  parent.appendChild(
    div
  );

}


function addBible(
  parent,
  lessonNumber
) {

  const bible =
    BIBLE[
      lessonNumber
    ];


  if (
    !bible
  ) {

    return;

  }


  const box =
    document.createElement(
      "div"
    );


  box.className =
    "bible-box";


  box.innerHTML =

    "<div class='bible-reference'>" +

    escapeHtml(
      bible[0]
    ) +

    "</div>" +

    "<div class='bible-text greek'>" +

    escapeHtml(
      bible[1]
    ) +

    "</div>" +

    "<div class='muted'>" +

    escapeHtml(
      bible[2]
    ) +

    "</div>";


  box.onclick =
    function() {

      speakText(
        bible[1]
      );

    };


  parent.appendChild(
    box
  );

}


/* =========================================================
   TESTS
========================================================= */

function getTest(
  lessonNumber
) {

  const tests = {

    1: [
      [
        "学习新约希腊文的主要目的是什么？",
        [
          "进入新约原文",
          "只为考试",
          "只背中文"
        ],
        0
      ],
      [
        "学习希腊文最需要什么？",
        [
          "持续纪律",
          "临时突击",
          "只听不读"
        ],
        0
      ]
    ],

    2: [
      [
        "多感官学习包括什么？",
        [
          "看、读、听、写",
          "只看中文",
          "只背答案"
        ],
        0
      ]
    ],

    3: [
      [
        "希腊文有多少个字母？",
        [
          "24",
          "26",
          "20"
        ],
        0
      ],
      [
        "哪个是元音？",
        [
          "η",
          "θ",
          "ψ"
        ],
        0
      ]
    ],

    4: [
      [
        "希腊文的问号是什么？",
        [
          ";",
          "?",
          ":"
        ],
        0
      ],
      [
        "λόγος 有几个音节？",
        [
          "2",
          "1",
          "3"
        ],
        0
      ]
    ],

    5: [
      [
        "名词的三个核心维度是什么？",
        [
          "性、数、格",
          "时态、语态、语气",
          "人称、时间、观点"
        ],
        0
      ]
    ],

    6: [
      [
        "τὸν θεόν 是什么格？",
        [
          "受格",
          "主格",
          "所有格"
        ],
        0
      ]
    ],

    7: [
      [
        "τοῦ θεοῦ 是什么格？",
        [
          "所有格",
          "主格",
          "受格"
        ],
        0
      ]
    ],

    8: [
      [
        "εἰμί 的基本意义是什么？",
        [
          "to be",
          "to see",
          "to hear"
        ],
        0
      ]
    ],

    9: [
      [
        "形容词通常与名词在哪些方面一致？",
        [
          "性、数、格",
          "时态、语态、语气",
          "人称、时间、观点"
        ],
        0
      ]
    ],

    10: [
      [
        "第三格变式要特别注意什么？",
        [
          "词干与字尾",
          "中文翻译",
          "章节号"
        ],
        0
      ]
    ],

    11: [
      [
        "ἐγώ 表示什么？",
        [
          "I",
          "you",
          "we"
        ],
        0
      ]
    ],

    12: [
      [
        "αὐτόν 常表示什么？",
        [
          "him",
          "his",
          "they"
        ],
        0
      ]
    ],

    13: [
      [
        "οὗτος 通常指什么？",
        [
          "this",
          "who",
          "because"
        ],
        0
      ]
    ],

    14: [
      [
        "关系代名词的格由什么决定？",
        [
          "它在关系子句中的功能",
          "中文翻译",
          "章节号码"
        ],
        0
      ]
    ],

    15: [
      [
        "动词需要观察哪些项目？",
        [
          "时态、语态、语气、人称、数",
          "只有时间",
          "只有中文"
        ],
        0
      ]
    ],

    16: [
      [
        "λύομεν 是什么？",
        [
          "第一人称复数",
          "第二人称单数",
          "第三人称复数"
        ],
        0
      ]
    ],

    17: [
      [
        "ἀγαπῶ 是什么？",
        [
          "缩略形式",
          "未来被动",
          "不定过去式"
        ],
        0
      ]
    ],

    18: [
      [
        "关身／被动的意义如何判断？",
        [
          "结合上下文",
          "只看中文",
          "只看长度"
        ],
        0
      ]
    ],

    19: [
      [
        "未来式通常出现什么字母？",
        [
          "σ",
          "θ",
          "μ"
        ],
        0
      ]
    ],

    20: [
      [
        "为什么要学习动词字干？",
        [
          "不同形式可能使用不同字干",
          "因为没有人称",
          "因为它代替冠词"
        ],
        0
      ]
    ],

    21: [
      [
        "未完成式通常表达什么？",
        [
          "过去中的持续/进行观点",
          "未来命令",
          "只有身份"
        ],
        0
      ]
    ],

    22: [
      [
        "第二不定过去式的关键是什么？",
        [
          "第二词干",
          "未来σ",
          "冠词"
        ],
        0
      ]
    ],

    23: [
      [
        "第一不定过去式常见什么标记？",
        [
          "σα",
          "θη",
          "μαι"
        ],
        0
      ]
    ],

    24: [
      [
        "不定过去式被动常见什么标记？",
        [
          "θη",
          "σ",
          "ομαι"
        ],
        0
      ]
    ],

    25: [
      [
        "完成式常见什么特征？",
        [
          "重复号",
          "未来σ",
          "冠词"
        ],
        0
      ]
    ]

  };


  return (
    tests[
      lessonNumber
    ] ||
    []
  );

}


/* =========================================================
   TEST RENDER
========================================================= */

function renderTest() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const box =
    $("lessonContent");


  box.innerHTML =
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

    "完成全部题目后结束本课。"

    +

    "</p>";


  const tests =
    getTest(
      lesson.n
    );


  const live =
    document.createElement(
      "div"
    );


  live.className =
    "exercise-score";


  live.id =
    "testLive";


  live.textContent =
    "0 / " +
    tests.length;


  section.appendChild(
    live
  );


  testScore =
    0;


  testAnswered =
    0;


  tests.forEach(
    function(
      q,
      qi
    ) {

      const block =
        document.createElement(
          "div"
        );


      block.style.marginTop =
        "17px";


      const title =
        document.createElement(
          "strong"
        );


      title.textContent =
        (
          qi +
          1
        ) +
        ". " +
        q[0];


      block.appendChild(
        title
      );


      const grid =
        document.createElement(
          "div"
        );


      grid.className =
        "choice-grid";


      q[1].forEach(
        function(
          option,
          oi
        ) {

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
                    other
                  ) {

                    other.disabled =
                      true;

                  }
                );


              testAnswered++;


              if (
                oi ===
                q[2]
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


              live.textContent =

                testScore +

                " / " +

                tests.length;

            };


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


  const done =
    document.createElement(
      "button"
    );


  done.className =
    "primary wide";


  done.textContent =
    "完成本课";


  done.onclick =
    function() {

      if (
        testAnswered <
        tests.length
      ) {

        alert(
          "请完成全部测试题。"
        );

        return;

      }


      completeLesson(
        testScore,
        tests.length
      );

    };


  section.appendChild(
    done
  );


  box.appendChild(
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
  score,
  total
) {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  st.completed =
    true;


  st.score =
    Math.round(
      score /
      total *
      100
    );


  st.completedAt =
    new Date()
      .toISOString();


  saveState();


  renderHome();

  renderCourseReview();

  renderVocabularySummary();


  $("lessonContent")
    .innerHTML =

    "<div class='lesson-section'>" +

    "<div class='success'>" +

    "<strong>" +

    "课程完成"

    +

    "</strong>" +

    "<br><br>" +

    "成绩：" +

    st.score +

    "%" +

    "<br><br>" +

    (
      st.score >= 80

        ? "掌握良好，可以继续下一课。"

        : "建议复习后再次测试。"

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

      };

  }


}


/* =========================================================
   NEXT / PREVIOUS
========================================================= */

function nextLessonStep() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  if (
    currentStep <
    lesson.sections.length
  ) {

    currentStep++;

    renderStep();

    renderLessonVocabulary();

  }

}


function previousLesson() {

  if (
    currentLessonIndex >
    0
  ) {

    openLesson(
      currentLessonIndex -
      1
    );

  }

  else {

    go("home");

  }

}


/* =========================================================
   LESSON VOCABULARY
========================================================= */

function renderLessonVocabulary() {

  const container =
    $("lessonVocabulary");


  if (
    !container
  ) {

    return;

  }


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const list =
    VOCABULARY[
      "L" +
      lesson.n
    ] ||
    [];


  container.innerHTML =
    "";


  if (
    !list.length
  ) {

    return;

  }


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>📚 本课新单字</h3>" +

    "<p class='muted'>" +

    "先听，再看，再回忆。"

    +

    "</p>";


  list.forEach(
    function(item) {

      section.appendChild(
        createVocabularyCard(
          item
        )
      );

    }
  );


  container.appendChild(
    section
  );

}


function createVocabularyCard(
  item
) {

  const stateItem =
    getWordState(
      item.word
    );


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "vocab-card";


  card.innerHTML =

    "<div class='vocab-card-main'>" +

    "<div>" +

    "<div class='vocab-greek'>" +

    escapeHtml(
      item.word
    ) +

    "</div>" +

    "<div class='vocab-gloss'>" +

    escapeHtml(
      item.gloss
    ) +

    "</div>" +

    "<div class='vocab-frequency'>" +

    "NT frequency: " +

    (
      item.frequency ||
      "—"
    ) +

    "</div>" +

    "</div>" +

    "</div>" +


    "<div class='vocab-actions'>" +

    "<button type='button' class='listen'>🔊 听</button>" +

    "<button type='button' class='recall'>🧠 回忆</button>" +

    "</div>" +


    "<span class='vocab-status'>" +

    getStatusText(
      stateItem.status
    ) +

    "</span>";


  card
    .querySelector(
      ".listen"
    )
    .onclick =
    function() {

      speakText(
        item.word
      );

    };


  card
    .querySelector(
      ".recall"
    )
    .onclick =
    function() {

      startSingleVocabularyRecall(
        item
      );

    };


  return card;

}


function getStatusText(
  status
) {

  if (
    status ===
    "mastered"
  ) {

    return "已掌握";

  }


  if (
    status ===
    "learning"
  ) {

    return "学习中";

  }


  return "新单字";

}


/* =========================================================
   VOCAB MEMORY
========================================================= */

function startSingleVocabularyRecall(
  item
) {

  go("vocabReview");


  reviewQueue =
    [item];


  reviewIndex =
    0;


  renderVocabularyReviewCard();

}


function startVocabularyReview() {

  reviewQueue =
    getDueVocabulary();


  if (
    !reviewQueue.length
  ) {

    alert(
      "今天暂时没有到期复习的单字。"
    );

    return;

  }


  reviewIndex =
    0;


  go("vocabReview");

  renderVocabularyReviewCard();

}


function renderVocabularyReviewCard() {

  const container =
    $("vocabReviewArea");


  const counter =
    $("reviewCounter");


  if (
    !container
  ) {

    return;

  }


  if (
    reviewIndex >=
    reviewQueue.length
  ) {

    container.innerHTML =

      "<div class='success'>" +

      "<strong>今日单字复习完成 ✓</strong>" +

      "<br><br>" +

      "继续保持每天复习。"

      +

      "</div>";


    counter.textContent =
      "全部完成";


    renderVocabularySummary();

    return;

  }


  const item =
    reviewQueue[
      reviewIndex
    ];


  counter.textContent =

    "第 " +

    (
      reviewIndex +
      1
    ) +

    " / " +

    reviewQueue.length;


  container.innerHTML =
    "";


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "vocab-memory-test";


  section.innerHTML =

    "<div class='eyebrow'>" +

    "RECALL"

    +

    "</div>" +

    "<div class='vocab-memory-word greek'>" +

    escapeHtml(
      item.word
    ) +

    "</div>" +

    "<p class='muted' style='text-align:center'>" +

    "你记得这个词的基本意义吗？"

    +

    "</p>" +

    "<div class='vocab-memory-options'></div>";


  const grid =
    section.querySelector(
      ".vocab-memory-options"
    );


  buildVocabularyOptions(
    item
  )
    .forEach(
      function(
        option
      ) {

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


            const correct =
              option ===
              item.gloss;


            if (
              correct
            ) {

              button.classList.add(
                "choice-correct"
              );

            }

            else {

              button.classList.add(
                "choice-wrong"
              );

            }


            updateVocabularyMemory(
              item,
              correct
            );


            const result =
              document.createElement(
                "div"
              );


            result.className =
              "vocab-review-result success";


            result.innerHTML =

              correct

                ? "✓ 正确。进入下一阶段复习。"

                : (

                  "✗ 再听一次。" +

                  "<br><br>" +

                  "正确答案：" +

                  escapeHtml(
                    item.gloss
                  )

                );


            const next =
              document.createElement(
                "button"
              );


            next.className =
              "primary wide";


            next.textContent =
              "下一词 →";


            next.onclick =
              function() {

                reviewIndex++;

                renderVocabularyReviewCard();

              };


            result.appendChild(
              next
            );


            section.appendChild(
              result
            );

          };


        grid.appendChild(
          button
        );

      }
    );


  container.appendChild(
    section
  );

}


function buildVocabularyOptions(
  correct
) {

  const pool =
    [];


  Object.keys(
    VOCABULARY
  )
    .forEach(
      function(
        lessonId
      ) {

        VOCABULARY[
          lessonId
        ]
          .forEach(
            function(item) {

              if (
                item.gloss !==
                correct.gloss
              ) {

                pool.push(
                  item.gloss
                );

              }

            }
          );

      }
    );


  pool.sort(
    function() {

      return Math.random() -
        0.5;

    }
  );


  const result =
    [
      correct.gloss,
      pool[0] || "生命",
      pool[1] || "世界",
      pool[2] || "光"
    ];


  return result.sort(
    function() {

      return Math.random() -
        0.5;

    }
  );

}


function updateVocabularyMemory(
  item,
  correct
) {

  const st =
    getWordState(
      item.word
    );


  st.lastSeen =
    new Date()
      .toISOString();


  if (
    correct
  ) {

    st.correct++;


    if (
      st.correct >=
      4
    ) {

      st.status =
        "mastered";


      st.nextReview =
        addDays(
          30
        );

    }

    else if (
      st.correct >=
      2
    ) {

      st.status =
        "learning";


      st.nextReview =
        addDays(
          7
        );

    }

    else {

      st.status =
        "learning";


      st.nextReview =
        addDays(
          1
        );

    }

  }

  else {

    st.wrong++;

    st.status =
      "learning";

    st.nextReview =
      addDays(
        1
      );

  }


  saveState();

}


function addDays(
  days
) {

  const date =
    new Date();


  date.setDate(
    date.getDate() +
    days
  );


  return date
    .toISOString()
    .slice(
      0,
      10
    );

}


function getDueVocabulary() {

  const today =
    new Date()
      .toISOString()
      .slice(
        0,
        10
      );


  const result =
    [];


  Object.keys(
    VOCABULARY
  )
    .forEach(
      function(
        lessonId
      ) {

        VOCABULARY[
          lessonId
        ]
          .forEach(
            function(item) {

              const st =
                getWordState(
                  item.word
                );


              if (
                st.nextReview &&
                st.nextReview <=
                today
              ) {

                result.push(
                  item
                );

              }

            }
          );

      }
    );


  return result;

}


/* =========================================================
   VOCAB SUMMARY
========================================================= */

function renderVocabularySummary() {

  const all = [];


  const seen =
    {};


  Object.keys(
    VOCABULARY
  )
    .forEach(
      function(
        lessonId
      ) {

        VOCABULARY[
          lessonId
        ]
          .forEach(
            function(item) {

              if (
                !seen[item.word]
              ) {

                seen[item.word] =
                  true;

                all.push(
                  item
                );

              }

            }
          );

      }
    );


  let learning =
    0;


  let mastered =
    0;


  all.forEach(
    function(item) {

      const st =
        getWordState(
          item.word
        );


      if (
        st.status ===
        "learning"
      ) {

        learning++;

      }


      if (
        st.status ===
        "mastered"
      ) {

        mastered++;

      }

    }
  );


  const due =
    getDueVocabulary()
      .length;


  if (
    $("vocabTotal")
  ) {

    $("vocabTotal")
      .textContent =
      all.length;

  }


  if (
    $("vocabLearning")
  ) {

    $("vocabLearning")
      .textContent =
      learning;

  }


  if (
    $("vocabMastered")
  ) {

    $("vocabMastered")
      .textContent =
      mastered;

  }


  if (
    $("vocabDue")
  ) {

    $("vocabDue")
      .textContent =
      due;

  }

}


/* =========================================================
   COURSE REVIEW
========================================================= */

function renderCourseReview() {

  const container =
    $("reviewList");


  if (
    !container
  ) {

    return;

  }


  container.innerHTML =
    "";


  let found =
    false;


  LESSONS.forEach(
    function(
      lesson,
      index
    ) {

      const st =
        getLessonState(
          index
        );


      if (
        !st.completed
      ) {

        return;

      }


      found =
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

        "L" +

        String(
          lesson.n
        ).padStart(
          2,
          "0"
        ) +

        " · " +

        escapeHtml(
          lesson.title
        ) +

        "</strong>" +

        "<div class='muted'>" +

        (
          st.completedAt
            ? st.completedAt
                .slice(
                  0,
                  10
                )
            : ""
        ) +

        "</div>" +

        "</div>" +

        "<small>" +

        st.score +

        "%"

        +

        "</small>";


      row.onclick =
        function() {

          openLesson(
            index
          );

        };


      container.appendChild(
        row
      );

    }
  );


  if (
    !found
  ) {

    container.innerHTML =

      "<div class='muted'>" +

      "还没有完成任何课程。"

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


  window.speechSynthesis.cancel();


  const u =
    new SpeechSynthesisUtterance(
      text
    );


  u.lang =
    CONFIG.LANGUAGE;


  u.rate =
    speechRate;


  u.pitch =
    0.95;


  u.volume =
    1;


  window.speechSynthesis.speak(
    u
  );

}


/* =========================================================
   ALPHABET
========================================================= */

const ALPHABET = [

  ["Α","α","Alpha"],
  ["Β","β","Beta"],
  ["Γ","γ","Gamma"],
  ["Δ","δ","Delta"],
  ["Ε","ε","Epsilon"],
  ["Ζ","ζ","Zeta"],
  ["Η","η","Eta"],
  ["Θ","θ","Theta"],
  ["Ι","ι","Iota"],
  ["Κ","κ","Kappa"],
  ["Λ","λ","Lambda"],
  ["Μ","μ","Mu"],
  ["Ν","ν","Nu"],
  ["Ξ","ξ","Xi"],
  ["Ο","ο","Omicron"],
  ["Π","π","Pi"],
  ["Ρ","ρ","Rho"],
  ["Σ","σ","Sigma"],
  ["Τ","τ","Tau"],
  ["Υ","υ","Upsilon"],
  ["Φ","φ","Phi"],
  ["Χ","χ","Chi"],
  ["Ψ","ψ","Psi"],
  ["Ω","ω","Omega"]

];


const VOWELS = [

  ["α","a"],
  ["ε","e"],
  ["η","ē"],
  ["ι","i"],
  ["ο","o"],
  ["υ","u"],
  ["ω","ō"]

];


const DIPHTHONGS = [

  ["αι","ai"],
  ["ει","ei"],
  ["οι","oi"],
  ["ου","ou"],
  ["αυ","au"],
  ["ευ","eu"],
  ["υι","ui"]

];


/* =========================================================
   PUBLIC
========================================================= */

window.go =
  go;

window.openLesson =
  openLesson;

window.speakText =
  speakText;

window.startVocabularyReview =
  startVocabularyReview;

window.startSingleVocabularyRecall =
  startSingleVocabularyRecall;
