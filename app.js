/* =========================================================
   GBRM FOUNDATION COURSE ENGINE
   L03–L25

   Greek Bible Reading Model

   COURSE STRUCTURE

   L03 Alphabet & Pronunciation
   L04 Punctuation & Syllables

   L05 Nouns
   L06 Nominative / Accusative / Article
   L07 Genitive / Dative
   L08 Prepositions / εἰμί
   L09 Adjectives
   L10 Third Declension
   L11 Personal Pronouns
   L12 αὐτός
   L13 Demonstratives
   L14 Relative Pronouns

   L15 Verb Introduction
   L16 Present Active Indicative
   L17 Contract Verbs
   L18 Present Middle / Passive
   L19 Future Active / Middle
   L20 Verb Stems / Future Forms
   L21 Imperfect
   L22 Second Aorist
   L23 First Aorist
   L24 Aorist / Future Passive
   L25 Perfect Indicative

   PURPOSE

   Greek Form
      ↓
   Grammar
      ↓
   Function
      ↓
   New Testament Text
      ↓
   Reading
      ↓
   Review
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {

  STATE_KEY:
    "GBRM_FOUNDATION_V050_STATE",

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


/* =========================================================
   L03
========================================================= */

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
    "掌握希腊字母、基本名称与发音，建立阅读原文的最初基础。",

  type:
    "alphabet",

  sections: [

    {
      title:
        "24 个字母",

      intro:
        "点击字母听发音，并观察大小写对应关系。"
    },

    {
      title:
        "元音",

      intro:
        "认识七个基本元音。"
    },

    {
      title:
        "双母音",

      intro:
        "观察常见双母音组合。"
    },

    {
      title:
        "气号",

      intro:
        "观察以元音或双母音开头的词。"
    }

  ],

  test: [

    [
      "How many letters are in the Greek alphabet?",
      ["24","26","20","22"],
      0
    ],

    [
      "Which is a Greek vowel?",
      ["η","θ","ψ","χ"],
      0
    ],

    [
      "Which letter is Omega?",
      ["ω","ο","ε","η"],
      0
    ],

    [
      "Which letter begins λόγος?",
      ["λ","γ","μ","δ"],
      0
    ]

  ]

},


/* =========================================================
   L04
========================================================= */

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
    "认识希腊文标点与基本音节结构，开始按照词的组成阅读。",

  type:
    "syllable",

  sections: [

    {
      title:
        "希腊文标点",

      intro:
        "认识常见的希腊文标点。"
    },

    {
      title:
        "音节",

      intro:
        "观察词如何被划分成音节。"
    },

    {
      title:
        "阅读练习",

      intro:
        "点击词语听读。"
    }

  ],

  examples: [

    ["λόγος","λό-γος"],

    ["θεός","θε-ός"],

    ["ζωή","ζω-ή"],

    ["ἄνθρωπος","ἄν-θρω-πος"]

  ],

  test: [

    [
      "Which symbol is used for a Greek question mark?",
      [";","?",":",","],
      0
    ],

    [
      "How many syllables are in λόγος?",
      ["2","1","3","4"],
      0
    ],

    [
      "Which division is correct?",
      ["ἄν-θρω-πος","ἄ-νθρωπος","ἄνθρω-πος","ἄν-θρ-ω-πος"],
      0
    ]

  ]

},


/* =========================================================
   L05
========================================================= */

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
    "理解名词的性、数、格，并开始通过词尾观察句法信息。",

  type:
    "grammar",

  sections: [

    {
      title:
        "名词",

      intro:
        "名词可以表示人、事物、地点或概念。"
    },

    {
      title:
        "三个核心维度",

      intro:
        "Gender · Number · Case。"
    },

    {
      title:
        "词形观察",

      intro:
        "观察 λόγος 的不同形式。"
    },

    {
      title:
        "新约阅读",

      intro:
        "把词形观察放回 John 1。"
    }

  ],

  forms: [

    ["ὁ λόγος","阳性 · 单数 · 主格","the Word"],

    ["τοῦ λόγου","阳性 · 单数 · 所有格","of the Word"],

    ["τὸν λόγον","阳性 · 单数 · 受格","the Word"],

    ["τῷ λόγῳ","阳性 · 单数 · 间接受格","to/for the Word"]

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

    [
      "Which is nominative singular?",
      ["ὁ λόγος","τοῦ λόγου","τὸν λόγον","τῷ λόγῳ"],
      0
    ],

    [
      "Which feature tells singular or plural?",
      ["Number","Gender","Case","Accent"],
      0
    ],

    [
      "Which dimension helps identify a noun's sentence role?",
      ["Case","Color","Accent","Paragraph"],
      0
    ]

  ]

},


/* =========================================================
   L06
========================================================= */

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
    "掌握主格、受格与定冠词的基本功能。",

  type:
    "grammar",

  sections: [

    {
      title:
        "主格",

      intro:
        "主格通常与主语有关。"
    },

    {
      title:
        "受格",

      intro:
        "受格常表示动词直接作用的对象。"
    },

    {
      title:
        "定冠词",

      intro:
        "冠词与名词在性、数、格上配合。"
    },

    {
      title:
        "新约观察",

      intro:
        "比较 ὁ θεός 与 τὸν θεόν。"
    }

  ],

  forms: [

    ["ὁ λόγος","主格 · 阳性 · 单数","the Word"],

    ["τὸν λόγον","受格 · 阳性 · 单数","the Word"],

    ["ὁ θεός","主格 · 阳性 · 单数","God"],

    ["τὸν θεόν","受格 · 阳性 · 单数","God"]

  ],

  bible: {

    reference:
      "John 1:1–3",

    greek:
      "καὶ ὁ λόγος ἦν πρὸς τὸν θεόν.",

    chinese:
      "道与神同在。"

  },

  test: [

    [
      "Which form is accusative?",
      ["τὸν θεόν","ὁ θεός","ὁ λόγος","τοῦ θεοῦ"],
      0
    ],

    [
      "Which is masculine nominative singular article?",
      ["ὁ","ἡ","τό","τῷ"],
      0
    ],

    [
      "What usually helps identify the direct object?",
      ["Accusative","Nominative","Genitive","Accent"],
      0
    ]

  ]

},


/* =========================================================
   L07
========================================================= */

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
    "理解所有格与间接受格，并开始从形式进入关系意义。",

  type:
    "grammar",

  sections: [

    {
      title:
        "所有格",

      intro:
        "常见功能包括所属、关系、来源。"
    },

    {
      title:
        "间接受格",

      intro:
        "常见功能包括对象、接受者、利益对象。"
    },

    {
      title:
        "形式比较",

      intro:
        "比较 λόγος 的不同格。"
    },

    {
      title:
        "新约观察",

      intro:
        "观察 παρὰ θεοῦ。"
    }

  ],

  forms: [

    ["τοῦ λόγου","所有格","of the Word"],

    ["τῷ λόγῳ","间接受格","to/for the Word"],

    ["τοῦ θεοῦ","所有格","of God"],

    ["τῷ θεῷ","间接受格","to/for God"]

  ],

  bible: {

    reference:
      "John 1:6",

    greek:
      "ἀπεσταλμένος παρὰ θεοῦ",

    chinese:
      "从神那里差来的。"

  },

  test: [

    [
      "Which means 'of God'?",
      ["τοῦ θεοῦ","τῷ θεῷ","ὁ θεός","τὸν θεόν"],
      0
    ],

    [
      "Which is dative?",
      ["τῷ θεῷ","τοῦ θεοῦ","ὁ θεός","τὸν θεόν"],
      0
    ],

    [
      "What can genitive express?",
      ["Possession or relationship","Only subject","Only command","Only question"],
      0
    ]

  ]

},


/* =========================================================
   L08
========================================================= */

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
    "掌握基本介词与 εἰμί，并开始理解介词与格的关系。",

  type:
    "grammar",

  sections: [

    {
      title:
        "介词",

      intro:
        "介词与名词格结合形成关系短语。"
    },

    {
      title:
        "εἰμί",

      intro:
        "εἰμί 是基本的 'to be' 动词。"
    },

    {
      title:
        "常见形式",

      intro:
        "认识基本的现在时形式。"
    },

    {
      title:
        "John 1",

      intro:
        "把介词带回经文。"
    }

  ],

  forms: [

    ["ἐν","with dative","in"],

    ["πρός","commonly with accusative","to/toward"],

    ["εἰμί","1st singular","I am"],

    ["ἐστίν","3rd singular","he/she/it is"]

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

    [
      "What does εἰμί mean?",
      ["to be","to see","to hear","to make"],
      0
    ],

    [
      "What does ἐστίν mean?",
      ["he/she/it is","I am","you are","we are"],
      0
    ],

    [
      "What does ἐν commonly mean?",
      ["in","from","through","against"],
      0
    ]

  ]

},


/* =========================================================
   L09
========================================================= */

{

  id:
    "L09",

  number:
    9,

  title:
    "Adjectives",

  reference:
    "Lesson 09",

  objective:
    "理解形容词与名词之间的性、数、格一致。",

  type:
    "adjective",

  sections: [

    {
      title:
        "形容词功能",

      intro:
        "形容词可以描述名词，也可以具有名词性功能。"
    },

    {
      title:
        "一致",

      intro:
        "通常在性、数、格上与相关名词一致。"
    },

    {
      title:
        "基本形式",

      intro:
        "观察 ἀγαθός、ἀγαθή、ἀγαθόν。"
    },

    {
      title:
        "新约观察",

      intro:
        "观察 John 1:46。"
    }

  ],

  forms: [

    ["ἀγαθός","阳性","good"],

    ["ἀγαθή","阴性","good"],

    ["ἀγαθόν","中性","good"],

    ["καλός","阳性","good / beautiful"]

  ],

  bible: {

    reference:
      "John 1:46",

    greek:
      "δύναταί τι ἀγαθὸν εἶναι;",

    chinese:
      "还能出什么好的吗？"

  },

  test: [

    [
      "What usually agrees with a noun?",
      ["Adjective","Only the preposition","Only the accent","Only the article"],
      0
    ],

    [
      "Which is neuter singular?",
      ["ἀγαθόν","ἀγαθός","ἀγαθή","καλοί"],
      0
    ],

    [
      "What does ἀγαθός mean?",
      ["good","from","through","there"],
      0
    ]

  ]

},


/* =========================================================
   L10
========================================================= */

{

  id:
    "L10",

  number:
    10,

  title:
    "Third Declension Nouns",

  reference:
    "Lesson 10",

  objective:
    "认识第三格变式，并学习通过词干与字尾辨认形式。",

  type:
    "third",

  sections: [

    {
      title:
        "第三格变式",

      intro:
        "第三格变式的词干有时不能直接从主格外形看出来。"
    },

    {
      title:
        "φῶς",

      intro:
        "观察 φῶς 与 φωτός。"
    },

    {
      title:
        "词干观察",

      intro:
        "词形变化与词干之间需要建立联系。"
    },

    {
      title:
        "新约阅读",

      intro:
        "观察 φῶς 在 John 1 中的使用。"
    }

  ],

  forms: [

    ["φῶς","主格 / 受格","light"],

    ["φωτός","所有格","of light"],

    ["σῶμα","主格 / 受格","body"],

    ["σώματος","所有格","of body"]

  ],

  bible: {

    reference:
      "John 1:5",

    greek:
      "τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει",

    chinese:
      "光照在黑暗里。"

  },

  test: [

    [
      "Which is genitive of φῶς?",
      ["φωτός","φῶς","φωτί","φῶτος"],
      0
    ],

    [
      "Why is third declension important?",
      ["The stem may be less obvious","It has no cases","It cannot be plural","It has no articles"],
      0
    ],

    [
      "What does φῶς mean?",
      ["light","life","body","word"],
      0
    ]

  ]

},


/* =========================================================
   L11
========================================================= */

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
    "掌握第一、第二人称代名词的基本形式与功能。",

  type:
    "pronoun",

  sections: [

    {
      title:
        "第一人称",

      intro:
        "认识 ἐγώ、μοι、ἡμεῖς。"
    },

    {
      title:
        "第二人称",

      intro:
        "认识 σύ、ὑμεῖς。"
    },

    {
      title:
        "格与功能",

      intro:
        "代名词形式携带句法信息。"
    },

    {
      title:
        "新约阅读",

      intro:
        "观察 ἐγώ 在约翰的见证中如何表达身份。"
    }

  ],

  forms: [

    ["ἐγώ","主格单数","I"],

    ["μοι","间接受格单数","to/for me"],

    ["ἡμεῖς","主格复数","we"],

    ["σύ","主格单数","you"],

    ["ὑμεῖς","主格复数","you"]

  ],

  bible: {

    reference:
      "John 1:23",

    greek:
      "Ἐγὼ φωνὴ βοῶντος ἐν τῇ ἐρήμῳ",

    chinese:
      "我就是那在旷野有人声喊着说的。"

  },

  test: [

    [
      "What does ἐγώ mean?",
      ["I","you","we","they"],
      0
    ],

    [
      "Which means 'we'?",
      ["ἡμεῖς","ἐγώ","σύ","ὑμεῖς"],
      0
    ],

    [
      "Which means 'you' singular?",
      ["σύ","ὑμεῖς","ἡμεῖς","ἐγώ"],
      0
    ]

  ]

},


/* =========================================================
   L12
========================================================= */

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
    "认识 αὐτός 的常见功能，并通过形式判断其句中角色。",

  type:
    "autos",

  sections: [

    {
      title:
        "αὐτός",

      intro:
        "这是新约非常高频的代词。"
    },

    {
      title:
        "基本形式",

      intro:
        "观察阳性单数的几个形式。"
    },

    {
      title:
        "功能",

      intro:
        "根据上下文判断 he、him、his 等关系。"
    },

    {
      title:
        "新约阅读",

      intro:
        "观察 δι’ αὐτοῦ。"
    }

  ],

  forms: [

    ["αὐτός","主格","he / himself"],

    ["αὐτόν","受格","him"],

    ["αὐτοῦ","所有格","his / of him"],

    ["αὐτοί","主格复数","they"]

  ],

  bible: {

    reference:
      "John 1:10",

    greek:
      "ὁ κόσμος δι’ αὐτοῦ ἐγένετο.",

    chinese:
      "世界也是借着他造的。"

  },

  test: [

    [
      "What can αὐτός function as?",
      ["A pronoun","Only a preposition","Only an article","Only a conjunction"],
      0
    ],

    [
      "What does αὐτόν mean?",
      ["him","his","they","I"],
      0
    ],

    [
      "What can αὐτοῦ indicate?",
      ["his / of him","him","they","we"],
      0
    ]

  ]

},


/* =========================================================
   L13
========================================================= */

{

  id:
    "L13",

  number:
    13,

  title:
    "Demonstratives",

  reference:
    "Lesson 13",

  objective:
    "认识指示代词，并学习它们如何指向特定对象。",

  type:
    "demonstrative",

  sections: [

    {
      title:
        "指示代词",

      intro:
        "指示词把读者的注意力集中到特定的人、事物或概念。"
    },

    {
      title:
        "οὗτος",

      intro:
        "认识 οὗτος、αὕτη、τοῦτο。"
    },

    {
      title:
        "形式",

      intro:
        "观察性、数、格的变化。"
    },

    {
      title:
        "新约阅读",

      intro:
        "观察 οὗτός ἐστιν。"
    }

  ],

  forms: [

    ["οὗτος","阳性主格单数","this man / this"],

    ["αὕτη","阴性主格单数","this woman / this"],

    ["τοῦτο","中性主格/受格单数","this thing"],

    ["οὗτοι","阳性主格复数","these"]

  ],

  bible: {

    reference:
      "John 1:30",

    greek:
      "οὗτός ἐστιν ὑπὲρ οὗ ἐγὼ εἶπον",

    chinese:
      "这就是我曾说过的那一位。"

  },

  test: [

    [
      "What does οὗτος usually indicate?",
      ["this","who","because","through"],
      0
    ],

    [
      "Which is feminine nominative singular?",
      ["αὕτη","οὗτος","τοῦτο","οὗτοι"],
      0
    ],

    [
      "Which is neuter singular?",
      ["τοῦτο","αὕτη","οὗτος","οὗτοι"],
      0
    ]

  ]

},


/* =========================================================
   L14
========================================================= */

{

  id:
    "L14",

  number:
    14,

  title:
    "Relative Pronouns",

  reference:
    "Lesson 14",

  objective:
    "理解关系代名词如何连接先行词与关系子句。",

  type:
    "relative",

  sections: [

    {
      title:
        "关系代名词",

      intro:
        "关系代名词把一个名词与描述它的关系子句连接起来。"
    },

    {
      title:
        "ὅς · ἥ · ὅ",

      intro:
        "开始掌握性、数与格的配合。"
    },

    {
      title:
        "关键原则",

      intro:
        "性、数通常跟先行词；格由关系子句内部功能决定。"
    },

    {
      title:
        "新约阅读",

      intro:
        "观察 οὗ ἐγὼ εἶπον。"
    }

  ],

  forms: [

    ["ὅς","阳性主格","who / which"],

    ["ἥ","阴性主格","who / which"],

    ["ὅ","中性","which"],

    ["οὗ","所有格","of whom / of which"],

    ["ὅν","阳性受格","whom"]

  ],

  bible: {

    reference:
      "John 1:30",

    greek:
      "οὗ ἐγὼ εἶπον",

    chinese:
      "我曾说过的那一位。"

  },

  test: [

    [
      "What does a relative pronoun do?",
      ["Connects a noun to a relative clause","Marks only questions","Replaces verbs","Marks prepositions"],
      0
    ],

    [
      "Which is masculine nominative singular?",
      ["ὅς","ἥ","ὅ","ὅν"],
      0
    ],

    [
      "What determines the relative pronoun's case?",
      ["Its function in the relative clause","Its translation","The chapter number","The article only"],
      0
    ]

  ]

},


/* =========================================================
   L15
========================================================= */

{

  id:
    "L15",

  number:
    15,

  title:
    "Verb Introduction",

  reference:
    "Lesson 15",

  objective:
    "理解希腊文动词的人称、数、时态、语态、语气等基本概念。",

  type:
    "verb",

  sections: [

    {
      title:
        "动词是什么？",

      intro:
        "动词描述行动、事件或状态。"
    },

    {
      title:
        "人称与数",

      intro:
        "动词通过人称字尾表达主语的信息。"
    },

    {
      title:
        "观点与时间",

      intro:
        "时态形式与时间不是同一个概念。"
    },

    {
      title:
        "字典形",

      intro:
        "动词通常以第一人称单数现在主动直说语气的形式作为字典形。"
    }

  ],

  forms: [

    ["λύω","1st singular","I loose / release"],

    ["λύεις","2nd singular","you loose / release"],

    ["λύει","3rd singular","he/she/it looses / releases"],

    ["λύομεν","1st plural","we loose / release"]

  ],

  bible: {

    reference:
      "John 1:29",

    greek:
      "ὁ αἴρων τὴν ἁμαρτίαν τοῦ κόσμου",

    chinese:
      "除去世人罪孽的。"

  },

  test: [

    [
      "What changes to indicate person and number?",
      ["Verb ending","Article only","Preposition only","Accent only"],
      0
    ],

    [
      "What is the dictionary form of λύω?",
      ["λύω","λύεις","λύει","λύομεν"],
      0
    ],

    [
      "What does 1st person singular mean?",
      ["I","you","he","we"],
      0
    ]

  ]

},


/* =========================================================
   L16
========================================================= */

{

  id:
    "L16",

  number:
    16,

  title:
    "Present Active Indicative",

  reference:
    "Lesson 16",

  objective:
    "掌握现在式主动语态直说语气的基本变化。",

  type:
    "verb",

  sections: [

    {
      title:
        "现在式主动",

      intro:
        "以 λύω 为模型观察基本人称变化。"
    },

    {
      title:
        "六个基本形式",

      intro:
        "观察单数与复数。"
    },

    {
      title:
        "词尾",

      intro:
        "词尾是识别动词的重要线索。"
    },

    {
      title:
        "新约阅读",

      intro:
        "观察 πιστεύει 等现在式动词。"
    }

  ],

  forms: [

    ["λύω","1sg","I loose"],

    ["λύεις","2sg","you loose"],

    ["λύει","3sg","he/she/it looses"],

    ["λύομεν","1pl","we loose"],

    ["λύετε","2pl","you loose"],

    ["λύουσι(ν)","3pl","they loose"]

  ],

  bible: {

    reference:
      "John 1:7",

    greek:
      "πάντες πιστεύσωσιν δι’ αὐτοῦ",

    chinese:
      "叫众人因他可以信。"

  },

  test: [

    [
      "Which means 'you loose' singular?",
      ["λύεις","λύω","λύει","λύετε"],
      0
    ],

    [
      "Which is third person plural?",
      ["λύουσι(ν)","λύει","λύομεν","λύεις"],
      0
    ],

    [
      "Which is first person plural?",
      ["λύομεν","λύω","λύετε","λύουσι"],
      0
    ]

  ]

},


/* =========================================================
   L17
========================================================= */

{

  id:
    "L17",

  number:
    17,

  title:
    "Contract Verbs",

  reference:
    "Lesson 17",

  objective:
    "认识缩略动词并观察词干元音与词尾结合后的变化。",

  type:
    "verb",

  sections: [

    {
      title:
        "缩略动词",

      intro:
        "动词词干与词尾接合时，元音会发生缩合。"
    },

    {
      title:
        "ἀγαπάω",

      intro:
        "这是新约非常重要的缩略动词。"
    },

    {
      title:
        "ζητέω",

      intro:
        "观察 ε 与词尾结合后的形式。"
    },

    {
      title:
        "新约观察",

      intro:
        "把缩略动词带回真实文本。"
    }

  ],

  forms: [

    ["ἀγαπάω","dictionary form","I love"],

    ["ἀγαπῶ","contracted 1sg","I love"],

    ["ζητέω","dictionary form","I seek"],

    ["ζητῶ","contracted 1sg","I seek"]

  ],

  bible: {

    reference:
      "John 1:38",

    greek:
      "τί ζητεῖτε;",

    chinese:
      "你们要什么？ / 你们寻找什么？"

  },

  test: [

    [
      "What kind of verb is ἀγαπάω?",
      ["Contract verb","Irregular noun","Preposition","Article"],
      0
    ],

    [
      "What is the contracted first person singular of ἀγαπάω?",
      ["ἀγαπῶ","ἀγαπάεις","ἀγαπάει","ἀγαπάο"],
      0
    ],

    [
      "What does ζητέω mean?",
      ["I seek","I write","I hear","I remain"],
      0
    ]

  ]

},


/* =========================================================
   L18
========================================================= */

{

  id:
    "L18",

  number:
    18,

  title:
    "Present Middle / Passive",

  reference:
    "Lesson 18",

  objective:
    "认识现在式关身／被动语态的基本形式，并注意字形与意义之间的关系。",

  type:
    "verb",

  sections: [

    {
      title:
        "现在式关身",

      intro:
        "基本形式与主动语态不同。"
    },

    {
      title:
        "字尾",

      intro:
        "观察 -ομαι、-ῃ、-εται 等形式。"
    },

    {
      title:
        "关身与被动",

      intro:
        "在这一阶段先掌握基本形式与核心概念。"
    },

    {
      title:
        "新约阅读",

      intro:
        "注意上下文如何帮助判断意义。"
    }

  ],

  forms: [

    ["λύομαι","1sg","I am being loosed / I loose for myself"],

    ["λύῃ / λύει","2sg","you are being loosed"],

    ["λύεται","3sg","he/she/it is being loosed"],

    ["λυόμεθα","1pl","we are being loosed"]

  ],

  test: [

    [
      "Which form is present middle/passive 3rd singular?",
      ["λύεται","λύω","λύεις","λύουσι"],
      0
    ],

    [
      "Which ending is characteristic of the 1st singular?",
      ["-ομαι","-ω","-εις","-ουσι"],
      0
    ],

    [
      "What helps determine whether a form is middle or passive?",
      ["Context","Accent only","Chapter number","English spelling"],
      0
    ]

  ]

},


/* =========================================================
   L19
========================================================= */

{

  id:
    "L19",

  number:
    19,

  title:
    "Future Active / Middle",

  reference:
    "Lesson 19",

  objective:
    "认识未来式主动与关身语态的基本构成。",

  type:
    "verb",

  sections: [

    {
      title:
        "未来式",

      intro:
        "未来式常用于未来时间，也可能有其他语用功能。"
    },

    {
      title:
        "σ 记号",

      intro:
        "规则动词的未来式常出现 σ。"
    },

    {
      title:
        "主动与关身",

      intro:
        "比较 λύσω 与 λύσομαι。"
    },

    {
      title:
        "新约观察",

      intro:
        "开始辨认未来式动词。"
    }

  ],

  forms: [

    ["λύσω","future active 1sg","I will loose"],

    ["λύσεις","future active 2sg","you will loose"],

    ["λύσει","future active 3sg","he/she/it will loose"],

    ["λύσομαι","future middle 1sg","I will loose for myself"]

  ],

  test: [

    [
      "What marker commonly appears in the regular future?",
      ["σ","μ","λ","ρ"],
      0
    ],

    [
      "Which is future active 1st singular?",
      ["λύσω","λύω","ἔλυσα","ἔλυον"],
      0
    ],

    [
      "Which is future middle 1st singular?",
      ["λύσομαι","λύσω","λύεται","ἐλύθην"],
      0
    ]

  ]

},


/* =========================================================
   L20
========================================================= */

{

  id:
    "L20",

  number:
    20,

  title:
    "Verb Stems & Other Future Forms",

  reference:
    "Lesson 20",

  objective:
    "学习动词词干与未来式其他形式，开始面对不规则形式。",

  type:
    "verb",

  sections: [

    {
      title:
        "词干",

      intro:
        "动词的不同形式可能使用不同的词干。"
    },

    {
      title:
        "字干变化",

      intro:
        "未来式不一定只是机械地在现在式后加一个 σ。"
    },

    {
      title:
        "高频动词",

      intro:
        "开始建立动词现在式与未来式之间的对应。"
    },

    {
      title:
        "研究习惯",

      intro:
        "遇到陌生形式时，应回到词典形与词干。"
    }

  ],

  forms: [

    ["ἀκούω","ἀκούσω","hear"],

    ["λύω","λύσω","loose"],

    ["πιστεύω","πιστεύσω","believe"],

    ["πορεύομαι","πορεύσομαι","go"],

    ["βλέπω","βλέψω","see"]

  ],

  test: [

    [
      "Why are verb stems important?",
      ["Different forms can use different stems","They replace nouns","They mark only gender","They mark punctuation"],
      0
    ],

    [
      "What is the future of ἀκούω?",
      ["ἀκούσω","ἀκούω","ἤκουσα","ἀκούομαι"],
      0
    ],

    [
      "What is the future of πιστεύω?",
      ["πιστεύσω","πιστεύω","ἐπίστευσα","πιστεύομαι"],
      0
    ]

  ]

},


/* =========================================================
   L21
========================================================= */

{

  id:
    "L21",

  number:
    21,

  title:
    "Imperfect Indicative",

  reference:
    "Lesson 21",

  objective:
    "掌握未完成式直说语气，并开始区分现在式与过去叙事中的连续观点。",

  type:
    "verb",

  sections: [

    {
      title:
        "未完成式",

      intro:
        "未完成式常用于过去时间中的持续或进行过程。"
    },

    {
      title:
        "往昔号",

      intro:
        "过去时间的直说语气形式通常会出现往昔号。"
    },

    {
      title:
        "λύω",

      intro:
        "观察 ἔλυον 的构成。"
    },

    {
      title:
        "原文阅读",

      intro:
        "在叙事文本中寻找连续动作。"
    }

  ],

  forms: [

    ["ἔλυον","1sg / 3pl context dependent","I was loosing / they were loosing"],

    ["ἔλυες","2sg","you were loosing"],

    ["ἔλυε(ν)","3sg","he/she/it was loosing"],

    ["ἐλύομεν","1pl","we were loosing"]

  ],

  test: [

    [
      "What is a common feature of the imperfect indicative?",
      ["Augment / past-time marker","Future sigma","Article","Dative ending"],
      0
    ],

    [
      "Which is imperfect 3rd singular?",
      ["ἔλυε(ν)","λύει","λύσει","ἔλυσε"],
      0
    ],

    [
      "What kind of aspect does the imperfect commonly express?",
      ["Ongoing / progressive in past time","Completed future","Command","Identity"],
      0
    ]

  ]

},


/* =========================================================
   L22
========================================================= */

{

  id:
    "L22",

  number:
    22,

  title:
    "Second Aorist Active / Middle",

  reference:
    "Lesson 22",

  objective:
    "认识第二不定过去式，并学会从第二词干辨认常见形式。",

  type:
    "verb",

  sections: [

    {
      title:
        "不定过去式",

      intro:
        "这一形式通常以未界定观点表达过去动作。"
    },

    {
      title:
        "第二不定过去式",

      intro:
        "第二不定过去式使用特殊的第二词干。"
    },

    {
      title:
        "例子",

      intro:
        "观察 ἔλαβον 等常见形式。"
    },

    {
      title:
        "原文研究",

      intro:
        "不要只把它看成简单过去时，而要观察观点与上下文。"
    }

  ],

  forms: [

    ["λαμβάνω","present","take / receive"],

    ["ἔλαβον","2nd aorist","I took / received"],

    ["ἔρχομαι","present","come / go"],

    ["ἦλθον","2nd aorist","I came / went"]

  ],

  test: [

    [
      "What distinguishes many second aorists?",
      ["A different stem","A future sigma","A noun ending","An article"],
      0
    ],

    [
      "What is the second aorist of λαμβάνω?",
      ["ἔλαβον","ἐλάμβανον","λήμψομαι","λαμβάνω"],
      0
    ],

    [
      "What does ἦλθον mean?",
      ["I came / went","I see","I remain","I write"],
      0
    ]

  ]

},


/* =========================================================
   L23
========================================================= */

{

  id:
    "L23",

  number:
    23,

  title:
    "First Aorist Active / Middle",

  reference:
    "Lesson 23",

  objective:
    "掌握第一不定过去式主动与关身语态的基本构成。",

  type:
    "verb",

  sections: [

    {
      title:
        "第一不定过去式",

      intro:
        "第一不定过去式常使用 σα 作为明显特征。"
    },

    {
      title:
        "主动语态",

      intro:
        "观察 ἔλυσα。"
    },

    {
      title:
        "关身语态",

      intro:
        "观察 ἐλυσάμην。"
    },

    {
      title:
        "释经观察",

      intro:
        "不要自动把所有不定过去式解释成单纯的过去时间，应观察语境。"
    }

  ],

  forms: [

    ["ἔλυσα","1sg active","I loosed"],

    ["ἔλυσας","2sg active","you loosed"],

    ["ἔλυσε(ν)","3sg active","he/she/it loosed"],

    ["ἐλυσάμην","1sg middle","I loosed for myself"]

  ],

  test: [

    [
      "What is a common marker of first aorist?",
      ["σα","σθ","ω","ει"],
      0
    ],

    [
      "Which is first aorist active 1st singular?",
      ["ἔλυσα","λύω","ἔλυον","λύσω"],
      0
    ],

    [
      "Which is first aorist middle 1st singular?",
      ["ἐλυσάμην","ἔλυσα","λύομαι","λύσομαι"],
      0
    ]

  ]

},


/* =========================================================
   L24
========================================================= */

{

  id:
    "L24",

  number:
    24,

  title:
    "Aorist & Future Passive",

  reference:
    "Lesson 24",

  objective:
    "掌握被动语态的特别时态记号，并开始观察被动语态的释经价值。",

  type:
    "verb",

  sections: [

    {
      title:
        "未来被动",

      intro:
        "未来被动语态有自己的时态特征。"
    },

    {
      title:
        "不定过去式被动",

      intro:
        "不定过去式被动通常出现 θη 的特征。"
    },

    {
      title:
        "救恩经文观察",

      intro:
        "被动语态可以把注意力集中到动作接受者与行动来源。"
    },

    {
      title:
        "研究方法",

      intro:
        "看到被动形式时，不要立即加上神学结论；先完成形态、句法与上下文分析。"
    }

  ],

  forms: [

    ["ἐβαπτίσθημεν","aorist passive","we were baptized"],

    ["ἐλύθην","aorist passive","I was loosed"],

    ["λυθήσομαι","future passive","I will be loosed"],

    ["σεσῳσμένοι","perfect passive participle","having been saved"]

  ],

  test: [

    [
      "What marker commonly appears in aorist passive?",
      ["θη","σ","σα","ομαι"],
      0
    ],

    [
      "Which is aorist passive 1st singular?",
      ["ἐλύθην","ἔλυσα","λύομαι","λύσω"],
      0
    ],

    [
      "What is important when interpreting a passive form?",
      ["The subject receives the action","The subject always performs the action","It always means future","It has no context"],
      0
    ]

  ]

},


/* =========================================================
   L25
========================================================= */

{

  id:
    "L25",

  number:
    25,

  title:
    "Perfect Indicative",

  reference:
    "Lesson 25",

  objective:
    "认识完成式直说语气，并开始注意完成式对状态与结果的表达。",

  type:
    "verb",

  sections: [

    {
      title:
        "完成式",

      intro:
        "完成式常强调已经发生的动作及其持续到现在的结果或状态。"
    },

    {
      title:
        "形式",

      intro:
        "观察完成式主动与关身／被动的基本构成。"
    },

    {
      title:
        "重复字母",

      intro:
        "完成式经常出现重复字母等形态特征。"
    },

    {
      title:
        "新约研究",

      intro:
        "完成式尤其值得在神学关键经文中仔细观察。"
    }

  ],

  forms: [

    ["λέλυκα","perfect active 1sg","I have loosed"],

    ["λέλυκας","perfect active 2sg","you have loosed"],

    ["λέλυκε(ν)","perfect active 3sg","he/she/it has loosed"],

    ["λέλυμαι","perfect middle/passive 1sg","I have been loosed"]

  ],

  test: [

    [
      "Which form is perfect active 1st singular?",
      ["λέλυκα","ἔλυσα","λύω","λύσω"],
      0
    ],

    [
      "What is a common feature of many perfect forms?",
      ["Reduplication","Future sigma","Only an article","Only a preposition"],
      0
    ],

    [
      "What can perfect aspect emphasize?",
      ["A completed action with continuing result/state","Only a future command","Only identity","Only location"],
      0
    ]

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


let testScore =
  0;


let testAnswered =
  0;


let speechRate =
  CONFIG.NORMAL_RATE;


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

      renderReview();

    }
  );


  bind(
    "lessonNextBtn",
    nextStep
  );


  bind(
    "lessonPrevBtn",
    previousLesson
  );

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

  renderStep();

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
   STEP
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
      buildSection(
        lesson,
        currentStep
      );


    container.appendChild(
      section
    );


    $("lessonNextBtn")
      .textContent =

      currentStep ===
      lesson.sections.length -
      1

        ? "进入测试 →"

        : "下一步 →";


    return;

  }


  renderTest();

}


/* =========================================================
   BUILD SECTION
========================================================= */

function buildSection(
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
    "alphabet"
  ) {

    renderAlphabetSection(
      section,
      lesson,
      step
    );

  }

  else if (
    lesson.type ===
    "syllable"
  ) {

    renderSyllableSection(
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
   ALPHABET
========================================================= */

function renderAlphabetSection(
  section,
  lesson,
  step
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


    const letters = [

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


    letters.forEach(
      function(item) {

        const button =
          document.createElement(
            "button"
          );


        button.className =
          "word-card";


        button.innerHTML =

          "<div class='word-greek greek'>" +

          item[1] +

          "</div>" +

          "<div class='word-gloss'>" +

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

  }


  else if (
    step ===
    1
  ) {

    const vowels = [

      ["α","a"],

      ["ε","e"],

      ["η","ē"],

      ["ι","i"],

      ["ο","o"],

      ["υ","u"],

      ["ω","ō"]

    ];


    vowels.forEach(
      function(item) {

        addSimpleWord(
          section,
          item[0],
          item[1]
        );

      }
    );

  }


  else if (
    step ===
    2
  ) {

    const diphthongs = [

      ["αι","ai"],

      ["ει","ei"],

      ["οι","oi"],

      ["ου","ou"],

      ["αυ","au"],

      ["ευ","eu"],

      ["υι","ui"]

    ];


    diphthongs.forEach(
      function(item) {

        addSimpleWord(
          section,
          item[0],
          item[1]
        );

      }
    );

  }


  else {

    addSimpleWord(
      section,
      "ἀπόστολος",
      "apostolos"
    );


    addNotice(
      section,
      "观察词首气号，并把声音与词形一起记忆。"
    );

  }

}


/* =========================================================
   SYLLABLE
========================================================= */

function renderSyllableSection(
  section,
  lesson,
  step
) {

  if (
    step ===
    0
  ) {

    const data = [

      [";","Greek question mark"],

      [".","Period"],

      [",","Comma"],

      [":","Colon / raised dot"]

    ];


    data.forEach(
      function(item) {

        addSimpleWord(
          section,
          item[0],
          item[1]
        );

      }
    );

  }

  else {

    lesson.examples.forEach(
      function(item) {

        addSimpleWord(
          section,
          item[0],
          item[1]
        );

      }
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

  if (
    step ===
    0
  ) {

    const box =
      document.createElement(
        "div"
      );


    box.className =
      "grammar-box";


    box.innerHTML =

      "<strong>" +

      lesson.title +

      "</strong>" +

      "<p class='muted'>" +

      lesson.objective +

      "</p>";


    section.appendChild(
      box
    );

  }


  if (
    step ===
    1
  ) {

    if (
      lesson.forms
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

    else {

      addNotice(
        section,
        "观察本课核心形式，然后进入下一步。"
      );

    }

  }


  if (
    step ===
    2
  ) {

    if (
      lesson.bible
    ) {

      addBibleBox(
        section,
        lesson.bible
      );

    }

    else {

      addNotice(
        section,
        "把本课形式重新放回新约阅读。"
      );

    }

  }


  if (
    step ===
    3
  ) {

    addNotice(

      section,

      buildResearchNotice(
        lesson
      )

    );

  }

}


/* =========================================================
   RESEARCH NOTICE
========================================================= */

function buildResearchNotice(
  lesson
) {

  const number =
    lesson.number;


  if (
    number <=
    14
  ) {

    return (

      "原文研究顺序：" +

      "先看形式 → 再判断功能 → 最后结合上下文确定意义。"

    );

  }


  if (
    number <=
    20
  ) {

    return (

      "动词研究顺序：" +

      "词干 → 人称/数 → 时态形式 → 语态 → 语气 → 上下文。"

    );

  }


  return (

    "原文研究顺序：" +

    "不要只把时态翻译成一个中文时间词；先观察形式、观点与上下文。"

  );

}


/* =========================================================
   SIMPLE WORD
========================================================= */

function addSimpleWord(
  parent,
  greek,
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

    "</div>";


  card.addEventListener(
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
      function(event) {

        event.stopPropagation();


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


/* =========================================================
   NOTICE
========================================================= */

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
    "完成全部问题后才能结束本课。";


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
    "liveScore";


  scoreBox.textContent =

    "0 / " +
    lesson.test.length;


  lesson.test.forEach(
    function(
      item,
      questionIndex
    ) {

      const block =
        document.createElement(
          "div"
        );


      block.style.marginTop =
        "16px";


      const question =
        document.createElement(
          "strong"
        );


      question.textContent =

        (
          questionIndex +
          1
        ) +

        ". " +

        item[0];


      block.appendChild(
        question
      );


      const grid =
        document.createElement(
          "div"
        );


      grid.className =
        "choice-grid";


      item[1].forEach(
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
                item[2]
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
   COMPLETE
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


  const percent =
    Math.round(
      correct /
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


  $("lessonContent")
    .innerHTML =

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

        ? "基础掌握良好，可以继续。"

        : "建议复习后再次测试。"

    ) +

    "</div>" +

    "</div>";


  const next =
    $("lessonNextBtn");


  if (
    currentLessonIndex <
    LESSONS.length -
    1
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
   NEXT / PREVIOUS
========================================================= */

function nextStep() {

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

      "尚未完成任何课程。"

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
   GLOBAL
========================================================= */

window.go =
  go;

window.openLesson =
  openLesson;

window.speakText =
  speakText;
