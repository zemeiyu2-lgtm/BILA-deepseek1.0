/* =========================================================
   GBRM V2.2
   LEARNING EFFECT ENGINE

   定位：
   面向圣经古希腊文学生的基础学习工具

   原则：
   1. 教材是主轴
   2. 训练是辅助
   3. 原文是应用场
   4. 不增加学生压力
   5. 不追求复杂数据
   6. 目标是学会，而不是做完

   学习闭环：

   教材
    ↓
   学习
    ↓
   练习
    ↓
   词汇
    ↓
   原文
    ↓
   复习
    ↓
   再练
========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  STATE_KEY:
    "GBRM_V22_STATE",

  SPEECH_LANG:
    "el-GR",

  SPEECH_RATE:
    0.82,

  PRIORITY_BOOKS:
    [
      "Jn",
      "Lk",
      "Ro",
      "Mt"
    ]

};


/* =========================================================
BOOKS
========================================================= */

const BOOKS = [

  ["Mt","马太福音","61-Mt-morphgnt.txt"],
  ["Mk","马可福音","62-Mk-morphgnt.txt"],
  ["Lk","路加福音","63-Lk-morphgnt.txt"],
  ["Jn","约翰福音","64-Jn-morphgnt.txt"],
  ["Ac","使徒行传","65-Ac-morphgnt.txt"],
  ["Ro","罗马书","66-Ro-morphgnt.txt"],
  ["1Co","哥林多前书","67-1Co-morphgnt.txt"],
  ["2Co","哥林多后书","68-2Co-morphgnt.txt"],
  ["Ga","加拉太书","69-Ga-morphgnt.txt"],
  ["Eph","以弗所书","70-Eph-morphgnt.txt"],
  ["Php","腓立比书","71-Php-morphgnt.txt"],
  ["Col","歌罗西书","72-Col-morphgnt.txt"],
  ["1Th","帖撒罗尼迦前书","73-1Th-morphgnt.txt"],
  ["2Th","帖撒罗尼迦后书","74-2Th-morphgnt.txt"],
  ["1Ti","提摩太前书","75-1Ti-morphgnt.txt"],
  ["2Ti","提摩太后书","76-2Ti-morphgnt.txt"],
  ["Tit","提多书","77-Tit-morphgnt.txt"],
  ["Phm","腓利门书","78-Phm-morphgnt.txt"],
  ["Heb","希伯来书","79-Heb-morphgnt.txt"],
  ["Jas","雅各书","80-Jas-morphgnt.txt"],
  ["1Pe","彼得前书","81-1Pe-morphgnt.txt"],
  ["2Pe","彼得后书","82-2Pe-morphgnt.txt"],
  ["1Jn","约翰一书","83-1Jn-morphgnt.txt"],
  ["2Jn","约翰二书","84-2Jn-morphgnt.txt"],
  ["3Jn","约翰三书","85-3Jn-morphgnt.txt"],
  ["Jud","犹大书","86-Jud-morphgnt.txt"],
  ["Re","启示录","87-Re-morphgnt.txt"]

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
TEXTBOOK CORE

   这里是教材数字化核心层。

   以后拿到完整教材内容，
   主要继续扩充这里。
========================================================= */

const LESSONS = [

  {
    n: 1,
    group: "引言",
    title: "希腊语",
    objective:
      "认识学习新约希腊文的目的。",
    content:
      "学习希腊文的目标，是逐渐能够进入新约原文，而不是只记住中文翻译。",
    kind:
      "intro",

    grammar: [],

    vocabulary: [],

    practice: [

      {
        question:
          "学习新约希腊文的主要目标是什么？",

        options: [
          "进入新约原文",
          "只为了考试",
          "只背中文"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 2,
    group: "引言",
    title: "学习希腊文",
    objective:
      "建立持续学习和复习的习惯。",
    content:
      "学习语言需要持续接触、识别、练习和复习。",
    kind:
      "intro",

    grammar: [],

    vocabulary: [],

    practice: [

      {
        question:
          "有效学习语言需要什么？",

        options: [
          "阅读、练习和复习",
          "只看中文",
          "只背答案"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 3,
    group: "引言",
    title: "字母与发音",
    objective:
      "掌握希腊字母和基本发音。",
    content:
      "建立希腊文字形与声音之间的联系。",
    kind:
      "alphabet",

    grammar: [

      {
        term:
          "希腊字母",

        description:
          "认识希腊字母系统。",

        example:
          "Α α · Β β · Γ γ"

      }

    ],

    vocabulary: [
      "λόγος",
      "θεός"
    ],

    practice: [

      {
        question:
          "希腊文共有多少个字母？",

        options: [
          "24",
          "26",
          "20"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 4,
    group: "引言",
    title: "标点符号与音节",
    objective:
      "认识基本标点和音节结构。",
    content:
      "开始注意文本边界和希腊文阅读节奏。",
    kind:
      "syllable",

    grammar: [

      {
        term:
          "问号",

        description:
          "希腊文传统文本使用分号形式表示问号。",

        example:
          ";"

      }

    ],

    vocabulary: [],

    practice: [

      {
        question:
          "希腊文问号使用哪个符号？",

        options: [
          ";",
          "?",
          ":"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 5,
    group: "名词系统",
    title: "英文的名词简介",
    objective:
      "建立性、数、格的概念。",
    content:
      "开始认识希腊文名词的基本变化系统。",
    kind:
      "noun",

    grammar: [

      {
        term:
          "性",

        description:
          "阳性、阴性、中性。",

        example:
          ""

      },

      {
        term:
          "数",

        description:
          "单数、复数。",

        example:
          ""

      },

      {
        term:
          "格",

        description:
          "显示名词在句中的语法作用。",

        example:
          ""

      }

    ],

    vocabulary: [
      "λόγος",
      "θεός",
      "κόσμος"
    ],

    practice: [

      {
        question:
          "希腊文名词需要观察什么？",

        options: [
          "性、数、格",
          "时态、语态",
          "只有中文"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 6,
    group: "名词系统",
    title: "主格与直接受格；定冠词",
    objective:
      "认识主格、受格与定冠词。",
    content:
      "观察名词在句中的基本功能。",
    kind:
      "case",

    vocabulary: [
      "ἀγάπη",
      "αὐτός",
      "βασιλεία",
      "ἐν",
      "ὁ"
    ],

    grammar: [

      {
        term:
          "主格",
        description:
          "通常与主语功能相关。",
        example:
          ""
      },

      {
        term:
          "受格",
        description:
          "通常与直接受词功能相关。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "τὸν θεόν 属于哪一个格？",

        options: [
          "受格",
          "主格",
          "所有格"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 7,
    group: "名词系统",
    title: "所有格与间接受格",
    objective:
      "认识所有格与间接受格。",
    content:
      "进一步观察名词之间的关系。",
    kind:
      "case",

    vocabulary: [
      "οὐρανός",
      "οὗτος",
      "σύ",
      "υἱός"
    ],

    grammar: [

      {
        term:
          "所有格",
        description:
          "常表达所属或关系。",
        example:
          ""
      },

      {
        term:
          "间接受格",
        description:
          "常表达间接对象。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "τοῦ θεοῦ 属于哪一个格？",

        options: [
          "所有格",
          "主格",
          "受格"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 8,
    group: "名词系统",
    title: "介词与 εἰμί",
    objective:
      "学习常见介词和 εἰμί。",
    content:
      "把介词结构和系动词带入真实经文。",
    kind:
      "verb",

    vocabulary: [
      "ἀλλά",
      "διά",
      "εἰμί",
      "ἡμέρα",
      "Ἰωάννης",
      "λέγω"
    ],

    grammar: [

      {
        term:
          "εἰμί",
        description:
          "基本意义为“是、存在”。",
        example:
          "εἰμί"
      }

    ],

    practice: [

      {
        question:
          "εἰμί 的核心意义是什么？",

        options: [
          "是 / 存在",
          "看见",
          "听见"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 9,
    group: "名词系统",
    title: "形容词",
    objective:
      "认识形容词与名词的一致。",
    content:
      "开始从形式观察性、数、格一致。",
    kind:
      "adjective",

    vocabulary: [
      "ἀγαθός",
      "ἀγαπητός",
      "αἰώνιος",
      "δοῦλος",
      "ἐντολή",
      "πιστός"
    ],

    grammar: [

      {
        term:
          "一致",
        description:
          "形容词通常与名词在性、数、格上保持一致。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "形容词通常与名词在哪些方面一致？",

        options: [
          "性、数、格",
          "时态、语态",
          "只有性"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 10,
    group: "名词系统",
    title: "第三格变式名词",
    objective:
      "开始识别第三格变式名词。",
    content:
      "训练词干与词尾的观察。",
    kind:
      "third",

    vocabulary: [
      "ἅγιος",
      "ὄνομα",
      "πᾶς",
      "σάρξ",
      "σῶμα",
      "τέκνον"
    ],

    grammar: [

      {
        term:
          "词干和词尾",
        description:
          "观察词形变化时区分词干与词尾。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "第三格变式名词首先要观察什么？",

        options: [
          "词干和词尾",
          "中文长度",
          "章节编号"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 11,
    group: "名词系统",
    title: "第一与第二人称代名词",
    objective:
      "掌握第一、第二人称代名词。",
    content:
      "建立人物与代名词形式之间的联系。",
    kind:
      "pronoun",

    vocabulary: [
      "ἐγώ",
      "ἡμεῖς",
      "σύ",
      "ὑμεῖς",
      "ἀδελφός",
      "ἐκκλησία",
      "πατήρ",
      "πίστις",
      "φῶς",
      "χάρις"
    ],

    grammar: [

      {
        term:
          "第一人称",
        description:
          "我、我们。",
        example:
          "ἐγώ"
      },

      {
        term:
          "第二人称",
        description:
          "你、你们。",
        example:
          "σύ"
      }

    ],

    practice: [

      {
        question:
          "ἐγώ 的基本意义是什么？",

        options: [
          "我",
          "你",
          "我们"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 12,
    group: "名词系统",
    title: "αὐτός",
    objective:
      "认识 αὐτός 的基本功能。",
    content:
      "开始根据上下文观察代词功能。",
    kind:
      "autos",

    vocabulary: [
      "αὐτός",
      "αἰών",
      "διδάσκαλος",
      "μαθητής"
    ],

    grammar: [

      {
        term:
          "αὐτός",
        description:
          "具体功能需要结合句法和上下文。",
        example:
          "αὐτός"
      }

    ],

    practice: [

      {
        question:
          "为什么 αὐτός 不能永远固定翻译成一个中文词？",

        options: [
          "因为功能会随上下文变化",
          "因为它没有意义",
          "因为它不是希腊文"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 13,
    group: "名词系统",
    title: "指示代名词／形容词",
    objective:
      "学习指示词及其指涉关系。",
    content:
      "练习寻找指示词所指向的对象。",
    kind:
      "demonstrative",

    vocabulary: [
      "οὗτος",
      "ἐκεῖνος",
      "γυνή",
      "δικαιοσύνη",
      "μέγας",
      "πολύς",
      "τηρέω"
    ],

    grammar: [

      {
        term:
          "指涉",
        description:
          "观察指示词具体指向什么。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "指示词学习时首先观察什么？",

        options: [
          "它具体指向什么",
          "中文有几个字",
          "词频高不高"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 14,
    group: "名词系统",
    title: "关系代名词",
    objective:
      "认识关系代名词和关系子句。",
    content:
      "开始观察句子之间如何连接。",
    kind:
      "relative",

    vocabulary: [
      "ἀλήθεια",
      "εἰρήνη",
      "ἐπαγγελία",
      "θρόνος",
      "Ἰερουσαλήμ",
      "ὁδός",
      "ὅς"
    ],

    grammar: [

      {
        term:
          "关系代名词",
        description:
          "观察关系词与先行词、关系子句之间的关系。",
        example:
          "ὅς"
      }

    ],

    practice: [

      {
        question:
          "关系代名词的格主要由什么决定？",

        options: [
          "它在关系子句中的功能",
          "中文翻译",
          "章节编号"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 15,
    group: "动词系统",
    title: "动词简介",
    objective:
      "建立动词形态分析框架。",
    content:
      "认识时态、语态、语气、人称和数。",
    kind:
      "verb",

    vocabulary: [
      "ἀκούω",
      "βλέπω",
      "ἔχω",
      "λύω",
      "νόμος",
      "πιστεύω",
      "χαρά"
    ],

    grammar: [

      {
        term:
          "动词形态",
        description:
          "观察时态、语态、语气、人称和数。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "分析希腊文动词应该观察什么？",

        options: [
          "时态、语态、语气、人称、数",
          "只有中文",
          "只有时态"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 16,
    group: "动词系统",
    title: "现在式主动语态直说语气",
    objective:
      "掌握现在式主动直说语气。",
    content:
      "从教材规则进入真实新约词形。",
    kind:
      "present",

    vocabulary: [
      "ἀκούω",
      "βλέπω",
      "ἔχω",
      "λύω",
      "νόμος",
      "πιστεύω",
      "χαρά"
    ],

    grammar: [

      {
        term:
          "现在式",
        description:
          "观察现在式形式。",
        example:
          ""
      },

      {
        term:
          "主动语态",
        description:
          "观察动作主体。",
        example:
          ""
      },

      {
        term:
          "直说语气",
        description:
          "观察陈述性基本形式。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "λύομεν 是什么人称和数？",

        options: [
          "第一人称复数",
          "第二人称单数",
          "第三人称复数"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 17,
    group: "动词系统",
    title: "缩略动词",
    objective:
      "认识缩略动词。",
    content:
      "观察词典形与实际词形之间的关系。",
    kind:
      "contract",

    vocabulary: [
      "ἀγαπάω",
      "ζητέω",
      "καλέω",
      "λαλέω",
      "οἶδα",
      "πληρόω",
      "ποιέω"
    ],

    grammar: [

      {
        term:
          "缩略",
        description:
          "不同元音在实际词形中可能发生缩合。",
        example:
          "ἀγαπάω → ἀγαπῶ"
      }

    ],

    practice: [

      {
        question:
          "ἀγαπῶ 与 ἀγαπάω 的关系是什么？",

        options: [
          "缩略形式与词典形式",
          "两个完全不同的动词",
          "名词与形容词"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 18,
    group: "动词系统",
    title: "现在式关身／被动语态",
    objective:
      "认识现在式关身／被动形式。",
    content:
      "先识别形式，再结合上下文。",
    kind:
      "mp",

    vocabulary: [
      "ἀποκρίνομαι",
      "δεῖ",
      "δύναμαι",
      "ἔρχομαι",
      "τόπος"
    ],

    grammar: [

      {
        term:
          "关身／被动",
        description:
          "具体功能需要结合上下文。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "关身／被动形式最终要结合什么判断？",

        options: [
          "上下文",
          "中文长度",
          "章节号"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 19,
    group: "动词系统",
    title: "未来式主动／关身",
    objective:
      "认识未来式基本形式。",
    content:
      "开始从真实文本识别未来式。",
    kind:
      "future",

    vocabulary: [
      "βασιλεύς",
      "γεννάω",
      "ζάω",
      "Ἰουδαία",
      "Ἰουδαῖος",
      "Ἰσραήλ",
      "καρπός",
      "προσκυνέω"
    ],

    grammar: [

      {
        term:
          "未来式",
        description:
          "观察未来式形式和功能。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "未来式常见的形式标记是什么？",

        options: [
          "σ",
          "θη",
          "μαι"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 20,
    group: "动词系统",
    title: "动词字根与未来式其他字形",
    objective:
      "建立动词字干变化意识。",
    content:
      "认识词典形与实际词形之间的差别。",
    kind:
      "stems",

    vocabulary: [
      "ἀποθνῄσκω",
      "γινώσκω",
      "ἐγείρω",
      "εὐαγγέλιον",
      "εὐαγγελίζω",
      "εὑρίσκω",
      "λαμβάνω",
      "μένω",
      "ὁράω",
      "πίνω",
      "φέρω"
    ],

    grammar: [

      {
        term:
          "动词字干",
        description:
          "不同形式可能使用不同字干。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "为什么需要学习动词字干？",

        options: [
          "不同形式可能使用不同字干",
          "动词没有变化",
          "只用于名词"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 21,
    group: "动词系统",
    title: "不完成式",
    objective:
      "认识未完成式。",
    content:
      "开始观察过去中的持续或进行观点。",
    kind:
      "imperfect",

    vocabulary: [
      "ἦν"
    ],

    grammar: [

      {
        term:
          "未完成式",
        description:
          "观察过去中的持续或进行观点。",
        example:
          "ἦν"
      }

    ],

    practice: [

      {
        question:
          "未完成式主要帮助我们看到什么？",

        options: [
          "过去中的持续/进行观点",
          "只有未来",
          "只有身份"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 22,
    group: "动词系统",
    title: "第二不定过去式",
    objective:
      "认识第二不定过去式和第二词干。",
    content:
      "训练学生识别特殊词干。",
    kind:
      "aorist2",

    vocabulary: [
      "ἀποστέλλω",
      "βαίνω",
      "γίνομαι",
      "δίδωμι",
      "φεύγω"
    ],

    grammar: [

      {
        term:
          "第二不定过去式",
        description:
          "重点观察第二词干和具体词形。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "第二不定过去式的重要观察点是什么？",

        options: [
          "第二词干",
          "未来式 σ",
          "冠词"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 23,
    group: "动词系统",
    title: "第一不定过去式",
    objective:
      "认识第一不定过去式。",
    content:
      "从教材规则进入实际词形。",
    kind:
      "aorist1",

    vocabulary: [
      "λύω",
      "ποιέω"
    ],

    grammar: [

      {
        term:
          "第一不定过去式",
        description:
          "观察第一不定过去式的形式特征。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "第一不定过去式常见标记是什么？",

        options: [
          "σα",
          "θη",
          "ουσι"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 24,
    group: "动词系统",
    title: "不定过去式与未来式被动",
    objective:
      "认识被动形式。",
    content:
      "先进行形态分析，再结合上下文。",
    kind:
      "passive",

    vocabulary: [
      "λαμβάνω",
      "λύω"
    ],

    grammar: [

      {
        term:
          "被动形式",
        description:
          "先识别形式，再解释功能。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "遇到被动形式首先应该做什么？",

        options: [
          "完成形态分析",
          "立即作神学解释",
          "只看中文"
        ],

        answer:
          0
      }

    ]

  },


  {
    n: 25,
    group: "动词系统",
    title: "现在完成式",
    objective:
      "认识完成式基本构成。",
    content:
      "开始观察完成式在真实新约中的词形。",
    kind:
      "perfect",

    vocabulary: [
      "γινώσκω",
      "ποιέω",
      "πιστεύω"
    ],

    grammar: [

      {
        term:
          "完成式",
        description:
          "观察完成式的构成与词形。",
        example:
          ""
      }

    ],

    practice: [

      {
        question:
          "完成式首先需要观察什么？",

        options: [
          "形式与重复号",
          "只有中文",
          "只有词频"
        ],

        answer:
          0
      }

    ]

  }

];


/* =========================================================
VOCABULARY
========================================================= */

const VOCABULARY = [

  [4,"ἀγγελος","使者/天使",175],
  [4,"ἀμήν","实实在在地/阿们",129],
  [4,"ἄνθρωπος","人/人类",550],
  [4,"ἀπόστολος","使徒/报信者",80],
  [4,"Γαλιλαία","加利利",61],
  [4,"γραφή","著作/圣经",50],
  [4,"δόξα","荣耀/威严",166],
  [4,"ἐγώ","我",1802],
  [4,"ἔσχατος","最后的",52],
  [4,"ζωή","生命",135],
  [4,"θεός","神/神明",1317],
  [4,"καί","和/也",9161],
  [4,"καρδία","心/内在自己",156],
  [4,"κόσμος","世界/世人",186],
  [4,"λόγος","言语/道",330],
  [4,"πνεῦμα","灵/圣灵",379],
  [4,"προφήτης","先知",144],
  [4,"σάββατον","安息日/一周",68],
  [4,"φωνή","声音/声响",139],
  [4,"Χριστός","基督/弥赛亚",529],

  [6,"ἀγάπη","爱",116],
  [6,"ἄλλος","别的/另一个",155],
  [6,"αὐτός","他/她/它/自己",5597],
  [6,"βασιλεία","国度",162],
  [6,"δέ","但是/而",2792],
  [6,"ἐν","在……里面",2752],
  [6,"ἔργον","工作/行为",169],
  [6,"καιρός","时间/季节",85],
  [6,"νῦν","现在",147],
  [6,"ὁ","这",19870],
  [6,"ὅτι","因为/那",1296],
  [6,"οὐ","不",1606],
  [6,"ὥρα","小时/时候",106],

  [7,"οὐρανός","天/天空",273],
  [7,"οὗτος","这个/这些",1388],
  [7,"σύ","你",1067],
  [7,"υἱός","儿子/子孙",377],
  [7,"ὥστε","所以/以致",83],

  [8,"ἀλλά","但是/然而",638],
  [8,"ἀπό","从/离开",646],
  [8,"διά","藉着/因为",667],
  [8,"εἰμί","是/存在",2460],
  [8,"ἐκ","从/出自",914],
  [8,"ἡμέρα","日/白天",389],
  [8,"ἦν","他/她/它是(过去)",0],
  [8,"θάλασσα","海/湖",91],
  [8,"θάνατος","死亡",120],
  [8,"ἵνα","为了/要",663],
  [8,"Ἰωάννης","约翰",135],
  [8,"λέγω","说/告诉",2354],
  [8,"μετά","与……一起/在……之后",469],
  [8,"οἰκία","屋子/家庭",93],
  [8,"οἶκος","屋子/家庭",114],
  [8,"ὄχλος","人群/大众",175],
  [8,"παρά","从/在……旁边/沿着",194],
  [8,"παραβολή","比喻",50],
  [8,"πρός","向/朝着/与……一起",700],
  [8,"ὑπό","被/在……底下",220],

  [9,"ἀγαθός","好的/有用的",102],
  [9,"ἀγαπητός","亲爱的",61],
  [9,"αἰώνιος","永远的",71],
  [9,"ἀλλήλων","彼此",100],
  [9,"ἀπεκρίθη","回答",0],
  [9,"δοῦλος","奴隶/仆人",124],
  [9,"ἐάν","如果/当",351],
  [9,"ἐμός","我的",76],
  [9,"ἐντολή","诫命/命令",67],
  [9,"καθώς","如/正如",182],
  [9,"κακός","坏的/恶的",50],
  [9,"μου","我的",0],
  [9,"νεκρός","死的/尸体",128],
  [9,"πιστός","忠心的/有信心的",67],
  [9,"πονηρός","邪恶的/坏的",78],
  [9,"πρῶτος","第一的/前面的",155],
  [9,"τρίτος","第三的",56],

  [10,"ἅγιος","圣洁的/圣徒",233],
  [10,"εἰ","如果",502],
  [10,"εἰ μή","除非/如果不",0],
  [10,"εἷς","一",344],
  [10,"ἤδη","现在/已经",61],
  [10,"ὄνομα","名字/名声",231],
  [10,"οὐδείς","没有一个/没有任何",234],
  [10,"πᾶς","每一个/所有的",1244],
  [10,"περί","关于/围绕",333],
  [10,"σάρξ","肉体/身体",147],
  [10,"σύν","与……一起",128],
  [10,"σῶμα","身体",142],
  [10,"τέκνον","儿女/子孙",99],
  [10,"τίς","谁?/什么?",556],
  [10,"τις","某人/任何人",525],

  [11,"ἀδελφός","弟兄",343],
  [11,"ἄν","语助词",166],
  [11,"ἀνήρ","男人/丈夫",216],
  [11,"ἐκκλησία","教会/聚会",114],
  [11,"ἐλπίς","盼望/期盼",53],
  [11,"ἔξω","没有/在外面",63],
  [11,"ἐπί","在……上/基于/向着",890],
  [11,"ἡμεῖς","我们",864],
  [11,"θέλημα","旨意/欲望",62],
  [11,"ἴδε","看哪",29],
  [11,"ἰδού","看哪",200],
  [11,"καλός","美丽的/好的",100],
  [11,"μήτηρ","母亲",83],
  [11,"οὐδέ","而不/甚至不",143],
  [11,"πατήρ","父亲",413],
  [11,"πίστις","信心/信仰",243],
  [11,"ὕδωρ","水",76],
  [11,"ὑμεῖς","你们",1840],
  [11,"φῶς","光",73],
  [11,"χάρις","恩典/宠爱",155],

  [12,"αἰών","世代/永恒",122],
  [12,"διδάσκαλος","老师",59],
  [12,"εὐθύς","立刻",51],
  [12,"ἕως","直到",146],
  [12,"μαθητής","门徒",261],
  [12,"μέν","一方面/确实",179],
  [12,"μηδείς","没有一个人/一件事物",90],
  [12,"μόνος","唯独/只有",114],
  [12,"ὅπως","如何/以致/为要",53],

  [13,"γυνή","女人/妻子",215],
  [13,"δικαιοσύνη","公义",92],
  [13,"δώδεκα","十二",75],
  [13,"ἑαυτοῦ","他自己/她自己/它自己",319],
  [13,"ἐκεῖνος","那个/那些",265],
  [13,"ἤ","或/比",343],
  [13,"κἀγώ","而我/但我",84],
  [13,"μακάριος","有福的/快乐的",50],
  [13,"μέγας","大的/伟大的",243],
  [13,"πολύς","许多的/多的",365],
  [13,"σήμερον","今天",41],
  [13,"τηρέω","保守/护卫/遵守",70],

  [14,"ἀλήθεια","真理",109],
  [14,"εἰρήνη","平安",92],
  [14,"ἐνώπιον","在……前",94],
  [14,"ἐπαγγελία","应许",52],
  [14,"ἑπτά","七",88],
  [14,"θρόνος","宝座",62],
  [14,"Ἰερουσαλήμ","耶路撒冷",77],
  [14,"κατά","向下/根据",473],
  [14,"κεφαλή","头",75],
  [14,"ὁδός","道路/行为",101],
  [14,"ὅς","谁/哪一个",1411],
  [14,"ὅτε","当……时",103],
  [14,"πλοῖον","船/小船",68],
  [14,"ῥῆμα","话/言论",68],
  [14,"οὕτως","如此",215],
  [14,"χείρ","手/臂",177],
  [14,"ψυχή","魂/生命/自己",103],

  [16,"ἀκούω","听见/学习",428],
  [16,"βλέπω","看见/注视",133],
  [16,"ἔχω","有/拿着",708],
  [16,"λύω","解开/毁坏",42],
  [16,"νόμος","律法/原则",194],
  [16,"ὅπου","在……地方",82],
  [16,"πιστεύω","我相信/信任",241],
  [16,"πρόσωπον","脸/外貌",76],
  [16,"τότε","那时/然后",160],
  [16,"τυφλός","瞎眼的",50],
  [16,"χαρά","喜乐/愉快",59],

  [17,"ἀγαπάω","我爱/珍爱",143],
  [17,"δαιμόνιον","鬼",63],
  [17,"ζητέω","我寻求/渴望",117],
  [17,"καλέω","我召/命名/邀请",148],
  [17,"λαλέω","我说/讲",296],
  [17,"οἶδα","我知道/明白",318],
  [17,"ὅταν","每当/当……时",123],
  [17,"μείζων","更大的/更多的",55],
  [17,"πληρόω","我充满/完成/应验",86],
  [17,"ποιέω","我做/使",568],

  [18,"ἀποκρίνομαι","我回答",231],
  [18,"δεῖ","是必须的",101],
  [18,"δύναμαι","我能/有能力",210],
  [18,"ἔρχομαι","我来/去",634],
  [18,"νύξ","夜晚",61],
  [18,"ὅστις","凡……的",144],
  [18,"πορεύομαι","我去/着手/生活",153],
  [18,"συνάγω","我聚集/邀请",59],
  [18,"τόπος","地方/地点",94],
  [18,"ὡς","如/像/当/约",504],

  [19,"βασιλεύς","王",115],
  [19,"γεννάω","我生/产生",97],
  [19,"ζάω","我活",140],
  [19,"Ἰουδαία","犹太",43],
  [19,"Ἰουδαῖος","犹太的/犹太人",195],
  [19,"Ἰσραήλ","以色列",68],
  [19,"καρπός","果子/庄稼/结果",66],
  [19,"ὅλος","整个/完整的",109],
  [19,"προσκυνέω","我敬拜",60],

  [20,"ἀποθνῄσκω","我死",111],
  [20,"ἄρτος","面包/食物",97],
  [20,"βάλλω","我扔/投",122],
  [20,"γινώσκω","我知道/认识",222],
  [20,"ἐγείρω","我唤醒/举起/使复活",144],
  [20,"ἐσθίω","我吃",158],
  [20,"εὐαγγέλιον","福音/好消息",76],
  [20,"εὐαγγελίζω","我传福音",55],
  [20,"εὑρίσκω","我找到",176],
  [20,"λαμβάνω","我拿/接受/娶",258],
  [20,"μένω","我留下/居住",118],
  [20,"ὁράω","我看见",454],
  [20,"παραλαμβάνω","我接受/带走",49],
  [20,"πίνω","我喝",73],
  [20,"φέρω","我带/背负/结出",67],

  [22,"ἀποστέλλω","我差遣",132],
  [22,"βαίνω","我去",60],
  [22,"γίνομαι","我成为/发生",678],
  [22,"δίδωμι","我给",416],
  [22,"φεύγω","我逃跑",29]

].map(function(item) {

  return {

    lesson:
      item[0],

    word:
      item[1],

    gloss:
      item[2],

    frequency:
      item[3]

  };

});


/* =========================================================
STATE
========================================================= */

const state =
  loadState();


let currentLessonIndex =
  Number(
    state.currentLesson || 0
  );


let currentStep =
  Number(
    state.lessonStep || 0
  );


let currentPracticeIndex =
  0;


let currentCorpusTokens =
  [];


let currentCorpusIndex =
  0;


let currentReturn =
  "lesson";


let currentLemma =
  "";


let vocabularyReview =
  [];


let vocabularyReviewIndex =
  0;


/* =========================================================
CORPUS
========================================================= */

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


/* =========================================================
INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function() {

    bindEvents();

    repairState();

    renderHome();

  }
);


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

      const value =
        JSON.parse(
          raw
        );


      return value;

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

    currentLesson:
      0,

    lessonStep:
      0,

    lessons:
      {},

    vocab:
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
      error
    );

  }

}


function repairState() {

  if (
    !state.lessons
  ) {

    state.lessons =
      {};

  }


  if (
    !state.vocab
  ) {

    state.vocab =
      {};

  }


  if (
    currentLessonIndex <
    0
  ) {

    currentLessonIndex =
      0;

  }


  if (
    currentLessonIndex >=
    LESSONS.length
  ) {

    currentLessonIndex =
      LESSONS.length -
      1;

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
  screenId
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
    $(
      screenId
    );


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
EVENTS
========================================================= */

function bindEvents() {

  if (
    $("lessonBack")
  ) {

    $("lessonBack")
      .onclick =
      goHome;

  }


  if (
    $("lessonPrevious")
  ) {

    $("lessonPrevious")
      .onclick =
      previousStep;

  }


  if (
    $("lessonNext")
  ) {

    $("lessonNext")
      .onclick =
      nextStep;

  }


  if (
    $("vocabReviewBack")
  ) {

    $("vocabReviewBack")
      .onclick =
      goHome;

  }


  if (
    $("startVocabularyReview")
  ) {

    $("startVocabularyReview")
      .onclick =
      startVocabularyReview;

  }


  if (
    $("corpusBack")
  ) {

    $("corpusBack")
      .onclick =
      returnFromCorpus;

  }


  if (
    $("lemmaBack")
  ) {

    $("lemmaBack")
      .onclick =
      returnFromLemma;

  }


  if (
    $("verseBack")
  ) {

    $("verseBack")
      .onclick =
      returnFromVerse;

  }


  if (
    $("verseLemmaButton")
  ) {

    $("verseLemmaButton")
      .onclick =
      returnFromVerse;

  }


  if (
    $("loadCorpusButton")
  ) {

    $("loadCorpusButton")
      .onclick =
      loadAllCorpus;

  }

}


/* =========================================================
HOME
========================================================= */

function goHome() {

  renderHome();

  go(
    "home"
  );

}


function renderHome() {

  renderCourseProgress();

  renderContinue();

  renderLessonList();

  renderCorpusStatus();

}


function renderCourseProgress() {

  let completed =
    0;


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
        st.completed
      ) {

        completed++;

      }

    }
  );


  const total =
    LESSONS.length;


  const percent =
    Math.round(
      completed /
      total *
      100
    );


  if (
    $("completedCount")
  ) {

    $("completedCount")
      .textContent =
      completed;

  }


  if (
    $("currentLessonDisplay")
  ) {

    $("currentLessonDisplay")
      .textContent =

      "L" +
      String(
        currentLessonIndex +
        1
      )
        .padStart(
          2,
          "0"
        );

  }


  if (
    $("coursePercent")
  ) {

    $("coursePercent")
      .textContent =
      percent +
      "%";

  }


  if (
    $("courseProgress")
  ) {

    $("courseProgress")
      .style.width =
      percent +
      "%";

  }

}


/* =========================================================
CONTINUE
========================================================= */

function renderContinue() {

  const area =
    $("continueArea");


  if (
    !area
  ) {

    return;

  }


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  area.innerHTML =

    "<div class='continue-card'>" +

    "<div class='eyebrow'>" +

    (
      st.completed
        ? "REVIEW"
        : "CONTINUE"
    ) +

    "</div>" +

    "<strong>" +

    "L" +

    String(
      lesson.n
    )
      .padStart(
        2,
        "0"
      ) +

    " · " +

    escapeHtml(
      lesson.title
    ) +

    "</strong>" +

    "<small>" +

    escapeHtml(
      lesson.objective
    ) +

    "</small>" +

    "<button id='continueLesson' class='primary wide' type='button'>" +

    (
      st.completed
        ? "重新进入本课"
        : "继续学习"
    ) +

    " →" +

    "</button>" +

    "</div>";


  $("continueLesson")
    .onclick =
    function() {

      openLesson(
        currentLessonIndex
      );

    };

}


/* =========================================================
LESSON LIST
========================================================= */

function renderLessonList() {

  const box =
    $("lessonList");


  if (
    !box
  ) {

    return;

  }


  box.innerHTML =
    "";


  let groupName =
    "";


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
        groupName !==
        lesson.group
      ) {

        const group =
          document.createElement(
            "div"
          );


        group.className =
          "lesson-group";


        group.textContent =
          lesson.group
            .toUpperCase();


        box.appendChild(
          group
        );


        groupName =
          lesson.group;

      }


      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "lesson-item";


      if (
        index ===
        currentLessonIndex
      ) {

        button.classList.add(
          "current"
        );

      }


      if (
        st.completed
      ) {

        button.classList.add(
          "completed"
        );

      }


      button.innerHTML =

        "<div class='lesson-index'>" +

        "L" +
        String(
          lesson.n
        )
          .padStart(
            2,
            "0"
          ) +

        "</div>" +

        "<div>" +

        "<div class='lesson-title'>" +

        escapeHtml(
          lesson.title
        ) +

        "</div>" +

        "<small class='lesson-meta'>" +

        (
          st.completed

            ? "✓ 已完成"

            : escapeHtml(
                lesson.objective
              )

        ) +

        "</small>" +

        "</div>" +

        "<div class='lesson-mark'>" +

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

}


/* =========================================================
LESSON STATE
========================================================= */

function getLessonState(
  index
) {

  const key =
    "L" +
    LESSONS[index].n;


  if (
    !state.lessons[key]
  ) {

    state.lessons[key] = {

      completed:
        false,

      content:
        false,

      practice:
        false,

      vocabulary:
        false,

      corpus:
        false,

      review:
        false,

      attempts:
        0,

      correct:
        0,

      vocabularyReviewed:
        0,

      corpusReviewed:
        0,

      weak:
        [],

      updatedAt:
        null

    };

  }


  return state.lessons[key];

}


/* =========================================================
LESSON OPEN
========================================================= */

function openLesson(
  index
) {

  currentLessonIndex =
    index;


  const st =
    getLessonState(
      index
    );


  /*
   * 基础版不自动跳到复杂页面。
   * 每次从教材开始。
   */

  currentStep =
    0;


  currentPracticeIndex =
    0;


  state.currentLesson =
    index;


  state.lessonStep =
    0;


  st.step =
    0;


  saveState();


  renderLesson();

  go(
    "lesson"
  );

}


/* =========================================================
LESSON HEADER
========================================================= */

function renderLesson() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  $("lessonLabel")
    .textContent =

    "LESSON " +
    String(
      lesson.n
    )
      .padStart(
        2,
        "0"
      );


  $("lessonTitle")
    .textContent =
    lesson.title;


  $("lessonHeader")
    .innerHTML =

    "<div class='lesson-number'>" +

    "L" +
    String(
      lesson.n
    )
      .padStart(
        2,
        "0"
      ) +

    "</div>" +

    "<div class='lesson-name'>" +

    escapeHtml(
      lesson.title
    ) +

    "</div>" +

    "<div class='lesson-objective'>" +

    escapeHtml(
      lesson.objective
    ) +

    "</div>";


  renderLessonStep();

}


/* =========================================================
STEP ENGINE

0 教材
1 练习
2 词汇
3 原文
4 回顾
========================================================= */

function renderLessonStep() {

  const area =
    $("lessonArea");


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  const total =
    5;


  const percent =
    Math.round(
      currentStep /
      total *
      100
    );


  $("lessonStepText")
    .textContent =

    "当前步骤 " +
    (
      currentStep +
      1
    ) +
    " / 6";


  $("lessonStepProgress")
    .style.width =
    percent +
    "%";


  area.innerHTML =
    "";


  if (
    currentStep ===
    0
  ) {

    renderContentStep(
      area,
      lesson,
      st
    );


    $("lessonNext")
      .textContent =
      "开始练习 →";


    return;

  }


  if (
    currentStep ===
    1
  ) {

    renderPracticeStep(
      area,
      lesson,
      st
    );


    return;

  }


  if (
    currentStep ===
    2
  ) {

    renderVocabularyStep(
      area,
      lesson,
      st
    );


    $("lessonNext")
      .textContent =
      "进入原文训练 →";


    return;

  }


  if (
    currentStep ===
    3
  ) {

    renderCorpusStep(
      area,
      lesson,
      st
    );


    $("lessonNext")
      .textContent =
      "开始原文训练";

    return;

  }


  if (
    currentStep ===
    4
  ) {

    renderReviewStep(
      area,
      lesson,
      st
    );


    $("lessonNext")
      .textContent =
      "完成本课";

    return;

  }


  completeLesson();

}


/* =========================================================
CONTENT
========================================================= */

function renderContentStep(
  area,
  lesson,
  st
) {

  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>今天学习什么？</h3>" +

    "<div class='lesson-content'>" +

    escapeHtml(
      lesson.content
    ) +

    "</div>" +

    "<div class='lesson-target'>" +

    "<strong>本课目标</strong>" +

    "<br><br>" +

    escapeHtml(
      lesson.objective
    ) +

    "</div>";


  if (
    lesson.grammar &&
    lesson.grammar.length
  ) {

    const heading =
      document.createElement(
        "h3"
      );


    heading.textContent =
      "教材重点";


    section.appendChild(
      heading
    );


    lesson.grammar.forEach(
      function(item) {

        const card =
          document.createElement(
            "div"
          );


        card.className =
          "grammar-card";


        card.innerHTML =

          "<div class='grammar-term'>" +

          escapeHtml(
            item.term
          ) +

          "</div>" +

          "<div class='grammar-description'>" +

          escapeHtml(
            item.description
          ) +

          "</div>" +

          (
            item.example

              ?

              "<div class='example-greek'>" +

              escapeHtml(
                item.example
              ) +

              "</div>"

              :

              ""

          );


        section.appendChild(
          card
        );

      }
    );

  }


  area.appendChild(
    section
  );


  st.content =
    true;


  saveState();

}


/* =========================================================
PRACTICE
========================================================= */

function renderPracticeStep(
  area,
  lesson,
  st
) {

  const practice =
    lesson.practice ||
    [];


  if (
    !practice.length
  ) {

    st.practice =
      true;


    saveState();


    area.innerHTML =

      "<div class='success'>" +

      "这一课没有额外练习。"

      +

      "</div>";


    return;

  }


  if (
    currentPracticeIndex >=
    practice.length
  ) {

    st.practice =
      true;


    saveState();


    area.innerHTML =

      "<div class='success'>" +

      "✓ 练习完成"

      +

      "</div>";


    return;

  }


  const item =
    practice[
      currentPracticeIndex
    ];


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "lesson-section";


  card.innerHTML =

    "<h3>教材练习</h3>" +

    "<div class='practice-card'>" +

    "<div class='practice-question'>" +

    escapeHtml(
      item.question
    ) +

    "</div>" +

    "<div id='practiceOptions' class='practice-options'></div>" +

    "<div id='practiceFeedback'></div>" +

    "</div>";


  area.appendChild(
    card
  );


  const options =
    $("practiceOptions");


  item.options.forEach(
    function(
      option,
      index
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

          const lessonState =
            getLessonState(
              currentLessonIndex
            );


          lessonState.attempts++;


          if (
            index ===
            item.answer
          ) {

            lessonState.correct++;


            button.classList.add(
              "correct"
            );


            options
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


            $("practiceFeedback")
              .innerHTML =

              "<div class='success'>" +

              "✓ 很好，继续。"

              +

              "</div>";


            currentPracticeIndex++;


            if (
              currentPracticeIndex >=
              practice.length
            ) {

              lessonState.practice =
                true;

            }


            saveState();


            setTimeout(
              function() {

                renderLessonStep();

              },
              400
            );

          }

          else {

            button.classList.add(
              "wrong"
            );


            if (
              lessonState.weak.indexOf(
                item.question
              ) ===
              -1
            ) {

              lessonState.weak
                .push(
                  item.question
                );

            }


            $("practiceFeedback")
              .innerHTML =

              "<div class='notice-box'>" +

              "再看一次教材，然后再试。"

              +

              "</div>";


            setTimeout(
              function() {

                button.classList.remove(
                  "wrong"
                );

              },
              500
            );


            saveState();

          }

        };


      options.appendChild(
        button
      );

    }
  );

}


/* =========================================================
VOCABULARY
========================================================= */

function getLessonVocabulary(
  lessonNumber
) {

  const list =
    VOCABULARY.filter(
      function(item) {

        return (
          item.lesson ===
          lessonNumber
        );

      }
    );


  return list;

}


function renderVocabularyStep(
  area,
  lesson,
  st
) {

  const list =
    getLessonVocabulary(
      lesson.n
    );


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>本课词汇</h3>" +

    "<p class='muted'>" +

    "不用一次记住全部。"

    +

    "<br>" +

    "先认识，再通过复习慢慢稳定。"

    +

    "</p>";


  const grid =
    document.createElement(
      "div"
    );


  grid.className =
    "vocab-grid";


  if (
    !list.length
  ) {

    section.innerHTML +=

      "<div class='notice-box'>" +

      "本课暂时没有接入词汇。"

      +

      "</div>";

  }

  else {

    list.forEach(
      function(item) {

        grid.appendChild(
          createVocabularyCard(
            item
          )
        );

      }
    );


    section.appendChild(
      grid
    );

  }


  area.appendChild(
    section
  );


  st.vocabulary =
    true;


  saveState();

}


function getVocabState(
  word
) {

  if (
    !state.vocab[word]
  ) {

    state.vocab[word] = {

      seen:
        0,

      remembered:
        0,

      wrong:
        0,

      lastReviewed:
        null

    };

  }


  return state.vocab[word];

}


function createVocabularyCard(
  item
) {

  const memory =
    getVocabState(
      item.word
    );


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "vocab-card";


  card.innerHTML =

    "<div class='vocab-header'>" +

    "<div class='vocab-word'>" +

    escapeHtml(
      item.word
    ) +

    "</div>" +

    "<button class='vocab-speak' type='button'>" +

    "🔊"

    +

    "</button>" +

    "</div>" +

    "<div class='vocab-gloss'>" +

    escapeHtml(
      item.gloss
    ) +

    "</div>" +

    "<div class='vocab-frequency'>" +

    "教材频次：" +

    item.frequency +

    "</div>" +

    "<div class='vocab-actions'>" +

    "<button class='vocab-lemma' type='button'>" +

    "看原文中的词"

    +

    "</button>" +

    "<button class='vocab-memory' type='button'>" +

    "我记住了"

    +

    "</button>" +

    "</div>" +

    "<span class='vocab-status'>" +

    getVocabularyStatus(
      memory
    ) +

    "</span>";


  card.querySelector(
    ".vocab-speak"
  ).onclick =
    function() {

      speakText(
        item.word
      );

    };


  card.querySelector(
    ".vocab-memory"
  ).onclick =
    function() {

      memory.remembered++;


      memory.seen++;


      memory.lastReviewed =
        new Date()
          .toISOString();


      saveState();


      card.querySelector(
        ".vocab-status"
      ).textContent =
        getVocabularyStatus(
          memory
        );

    };


  card.querySelector(
    ".vocab-lemma"
  ).onclick =
    function() {

      currentReturn =
        "lesson";

      openLemma(
        item.word
      );

    };


  return card;

}


function getVocabularyStatus(
  memory
) {

  if (
    memory.remembered >=
    4
  ) {

    return "比较稳定";

  }


  if (
    memory.remembered >=
    1
  ) {

    return "学习中";

  }


  return "第一次见";

}


/* =========================================================
CORPUS GATEWAY
========================================================= */

function renderCorpusStep(
  area,
  lesson,
  st
) {

  area.innerHTML =

    "<div class='lesson-section'>" +

    "<h3>进入真实新约</h3>" +

    "<p>" +

    "现在把刚才学的内容放到真实经文里。"

    +

    "</p>" +

    "<div class='lesson-target'>" +

    "<strong>今天只做一件事：</strong>"

    +

    "<br><br>" +

    "找出你刚学过的形式。"

    +

    "</div>" +

    "<button id='launchCorpus' class='primary wide' type='button'>" +

    "开始原文训练 →"

    +

    "</button>" +

    "</div>";


  $("launchCorpus")
    .onclick =
    startLessonCorpusTraining;

}


/* =========================================================
CORPUS TRAINING
========================================================= */

async function startLessonCorpusTraining() {

  await loadPriorityCorpus();


  currentCorpusTokens =
    selectLessonCorpusTokens();


  currentCorpusIndex =
    0;


  go(
    "corpus"
  );


  renderCorpusTraining();

}


function selectLessonCorpusTokens() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const vocabulary =
    getLessonVocabulary(
      lesson.n
    );


  const keys =
    vocabulary.map(
      function(item) {

        return normalize(
          item.word
        );

      }
    );


  let candidates =
    corpus.tokens.filter(
      function(token) {

        return keys.includes(
          normalize(
            token.lemma
          )
        );

      }
    );


  if (
    candidates.length <
    6
  ) {

    candidates =
      candidates.concat(

        corpus.tokens.filter(
          function(token) {

            return matchLessonKind(
              token,
              lesson.kind
            );

          }
        )

      );

  }


  const unique =
    new Map();


  candidates.forEach(
    function(token) {

      if (
        !unique.has(
          token.verseKey
        )
      ) {

        unique.set(
          token.verseKey,
          token
        );

      }

    }
  );


  return Array.from(
    unique.values()
  )
    .sort(
      function(a,b) {

        const av =
          keys.includes(
            normalize(
              a.lemma
            )
          );


        const bv =
          keys.includes(
            normalize(
              b.lemma
            )
          );


        if (
          av !==
          bv
        ) {

          return av
            ? -1
            : 1;

        }


        return (
          a.bookName.localeCompare(
            b.bookName
          ) ||
          a.chapter -
            b.chapter ||
          a.verse -
            b.verse
        );

      }
    )
    .slice(
      0,
      6
    );

}


/* =========================================================
MORPH TARGET
========================================================= */

function matchLessonKind(
  token,
  kind
) {

  const pos =
    decodePOS(
      token.pos
    );


  switch (
    kind
  ) {

    case "present":

      return (

        token.morph.tense ===
        "现在式" &&

        token.morph.voice ===
        "主动" &&

        token.morph.mood ===
        "直说"

      );


    case "future":

      return (
        token.morph.tense ===
        "未来式"
      );


    case "imperfect":

      return (
        token.morph.tense ===
        "未完成式"
      );


    case "aorist1":
    case "aorist2":

      return (
        token.morph.tense ===
        "不定过去式"
      );


    case "perfect":

      return (
        token.morph.tense ===
        "完成式"
      );


    case "passive":

      return (
        token.morph.voice ===
        "被动"
      );


    case "noun":

      return (
        pos ===
        "名词"
      );


    case "adjective":

      return (
        pos ===
        "形容词"
      );


    case "pronoun":
    case "autos":
    case "relative":
    case "demonstrative":

      return (
        pos ===
        "代词"
      );


    default:

      return false;

  }

}


/* =========================================================
CORPUS RENDER
========================================================= */

function renderCorpusTraining() {

  const area =
    $("corpusArea");


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  $("corpusLabel")
    .textContent =

    "LESSON " +
    String(
      lesson.n
    )
      .padStart(
        2,
        "0"
      ) +
    " · REAL NT";


  $("corpusLessonObjective")
    .textContent =
    lesson.objective;


  area.innerHTML =
    "";


  if (
    currentCorpusIndex >=
    currentCorpusTokens.length
  ) {

    finishCorpusTraining();

    return;

  }


  const seed =
    currentCorpusTokens[
      currentCorpusIndex
    ];


  const tokens =
    corpus.verses[
      seed.verseKey
    ];


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "corpus-card";


  card.innerHTML =

    "<div class='corpus-reference'>" +

    escapeHtml(
      seed.reference
    ) +

    "</div>" +

    "<div id='corpusGreek' class='corpus-greek'></div>" +

    "<div id='corpusTokenDetail'></div>";


  area.appendChild(
    card
  );


  renderCorpusTokens(
    tokens,
    "corpusGreek",
    "corpusTokenDetail",
    seed
  );


  const note =
    document.createElement(
      "div"
    );


  note.className =
    "notice-box";


  note.innerHTML =

    "<strong>观察</strong>" +

    "<br><br>" +

    "先找词形。"

    +

    "<br>" +

    "再看 Lemma。"

    +

    "<br>" +

    "再看 Morphology。"

    +

    "<br><br>" +

    "不用急着解释整节经文。";


  area.appendChild(
    note
  );


  const button =
    document.createElement(
      "button"
    );


  button.className =
    "primary wide";


  button.textContent =
    (
      currentCorpusIndex +
      1 <
      currentCorpusTokens.length
    )
      ? "下一处 →"
      : "完成原文训练";


  button.onclick =
    function() {

      getLessonState(
        currentLessonIndex
      ).corpusReviewed++;


      currentCorpusIndex++;


      saveState();


      renderCorpusTraining();

    };


  area.appendChild(
    button
  );

}


function finishCorpusTraining() {

  const st =
    getLessonState(
      currentLessonIndex
    );


  st.corpus =
    true;


  saveState();


  $("corpusArea")
    .innerHTML =

    "<div class='success'>" +

    "<strong>✓ 原文训练完成</strong>"

    +

    "<br><br>" +

    "现在回到教材，做最后回顾。"

    +

    "<button id='returnLesson' class='primary wide' type='button'>" +

    "回到本课 →"

    +

    "</button>" +

    "</div>";


  $("returnLesson")
    .onclick =
    function() {

      currentStep =
        4;


      state.lessonStep =
        4;


      saveState();


      renderLesson();

      go(
        "lesson"
      );

    };

}


/* =========================================================
CORPUS LOAD
========================================================= */

async function loadPriorityCorpus() {

  for (
    const bookId of
    CONFIG.PRIORITY_BOOKS
  ) {

    await loadBook(
      bookId
    );

  }

}


async function loadAllCorpus() {

  const button =
    $("loadCorpusButton");


  if (
    button
  ) {

    button.disabled =
      true;

  }


  for (
    const book of BOOKS
  ) {

    await loadBook(
      book.id
    );

  }


  if (
    button
  ) {

    button.disabled =
      false;

  }


  renderCorpusStatus(
    "整个新约已经加载"
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


  const result =
    await promise;


  delete corpus.loading[
    bookId
  ];


  return result;

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

      book:
        book,

      tokens:
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
MORPHGNT
========================================================= */

function parseMorphGNT(
  text,
  book
) {

  const result =
    [];


  text
    .split(
      /\r?\n/
    )
    .forEach(
      function(line) {

        const value =
          line.trim();


        if (
          !value ||
          value.startsWith(
            "#"
          )
        ) {

          return;

        }


        const parts =
          value.split(
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


        if (
          location.length <
          6
        ) {

          return;

        }


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


        result.push({

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


  return result;

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
PARSING
========================================================= */

function decodeParsing(
  code
) {

  const value =
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
        value[0]
      ),

    tense:
      decodeTense(
        value[1]
      ),

    voice:
      decodeVoice(
        value[2]
      ),

    mood:
      decodeMood(
        value[3]
      ),

    case:
      decodeCase(
        value[4]
      ),

    number:
      decodeNumber(
        value[5]
      ),

    gender:
      decodeGender(
        value[6]
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

    P:
      "现在式",

    I:
      "未完成式",

    F:
      "未来式",

    A:
      "不定过去式",

    X:
      "完成式",

    Y:
      "过去完成式"

  }[c] || "";

}


function decodeVoice(
  c
) {

  return {

    A:
      "主动",

    M:
      "关身",

    P:
      "被动"

  }[c] || "";

}


function decodeMood(
  c
) {

  return {

    I:
      "直说",

    D:
      "命令",

    S:
      "虚拟",

    O:
      "愿望",

    N:
      "不定词",

    P:
      "分词"

  }[c] || "";

}


function decodeCase(
  c
) {

  return {

    N:
      "主格",

    G:
      "所有格",

    D:
      "间接受格",

    A:
      "受格"

  }[c] || "";

}


function decodeNumber(
  c
) {

  return {

    S:
      "单数",

    P:
      "复数"

  }[c] || "";

}


function decodeGender(
  c
) {

  return {

    M:
      "阳性",

    F:
      "阴性",

    N:
      "中性"

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

  if (
    $("booksLoaded")
  ) {

    $("booksLoaded")
      .textContent =
      corpus.loaded;

  }


  if (
    $("tokensLoaded")
  ) {

    $("tokensLoaded")
      .textContent =
      corpus.tokens.length
        .toLocaleString();

  }


  if (
    $("lemmasLoaded")
  ) {

    $("lemmasLoaded")
      .textContent =
      Object.keys(
        corpus.lemmas
      ).length
        .toLocaleString();

  }


  if (
    $("corpusStatus")
  ) {

    $("corpusStatus")
      .textContent =

      message ||

      (
        corpus.loaded ===
        0

          ? "按当前课程自动加载"

          :

          corpus.loaded ===
          BOOKS.length

            ? "整个新约已经加载"

            :

            corpus.loaded +
            " / " +
            BOOKS.length +
            " 书卷已加载"

      );

  }

}


/* =========================================================
CORPUS TOKEN UI
========================================================= */

function renderCorpusTokens(
  tokens,
  containerId,
  detailId,
  selected
) {

  const box =
    $(
      containerId
    );


  box.innerHTML =
    "";


  tokens.forEach(
    function(token) {

      const span =
        document.createElement(
          "span"
        );


      span.className =
        "corpus-token";


      if (
        selected &&
        selected.wordIndex ===
        token.wordIndex
      ) {

        span.classList.add(
          "active"
        );

      }


      span.textContent =
        token.rawText;


      span.onclick =
        function() {

          box
            .querySelectorAll(
              ".corpus-token"
            )
            .forEach(
              function(
                item
              ) {

                item.classList.remove(
                  "active"
                );

              }
            );


          span.classList.add(
            "active"
          );


          renderTokenDetail(
            token,
            detailId
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
    selected
  ) {

    renderTokenDetail(
      selected,
      detailId
    );

  }

}


/* =========================================================
TOKEN DETAIL
========================================================= */

function renderTokenDetail(
  token,
  detailId
) {

  const box =
    $(
      detailId
    );


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

    "<button id='tokenLemmaButton' class='secondary wide' type='button'>" +

    "进入 Lemma →"

    +

    "</button>";


  $("tokenLemmaButton")
    .onclick =
    function() {

      currentReturn =
        "corpus";

      openLemma(
        token.lemma
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
LEMMA
========================================================= */

function openLemma(
  lemma
) {

  if (
    corpus.loaded ===
    0
  ) {

    loadPriorityCorpus()
      .then(
        function() {

          openLemma(
            lemma
          );

        }
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
      "当前已加载的语料中没有找到这个 Lemma。"
    );

    return;

  }


  currentLemma =
    occurrences[0].lemma;


  renderLemma();


  go(
    "lemma"
  );

}


function renderLemma() {

  const area =
    $("lemmaArea");


  const occurrences =
    corpus.lemmas[
      normalize(
        currentLemma
      )
    ] || [];


  const forms =
    {};


  const books =
    {};


  occurrences.forEach(
    function(token) {

      forms[
        token.word
      ] =
        (
          forms[
            token.word
          ] ||
          0
        ) + 1;


      books[
        token.bookName
      ] =
        (
          books[
            token.bookName
          ] ||
          0
        ) + 1;

    }
  );


  const formEntries =
    Object.entries(
      forms
    )
      .sort(
        function(a,b) {

          return b[1] -
            a[1];

        }
      );


  const vocab =
    VOCABULARY.find(
      function(item) {

        return (
          normalize(
            item.word
          ) ===
          normalize(
            currentLemma
          )
        );

      }
    );


  area.innerHTML =
    "";


  const hero =
    document.createElement(
      "div"
    );


  hero.className =
    "lemma-hero";


  hero.innerHTML =

    "<div class='lemma-word'>" +

    escapeHtml(
      currentLemma
    ) +

    "</div>" +

    "<div class='lemma-gloss'>" +

    (
      vocab
        ? escapeHtml(
            vocab.gloss
          )
        : "暂未连接教材释义"

    ) +

    "</div>" +

    "<div class='lemma-stat-grid'>" +

    lemmaStat(
      occurrences.length,
      "新约出现"
    ) +

    lemmaStat(
      formEntries.length,
      "词形变体"
    ) +

    lemmaStat(
      Object.keys(
        books
      ).length,
      "书卷"
    ) +

    "</div>";


  area.appendChild(
    hero
  );


  const note =
    document.createElement(
      "div"
    );


  note.className =
    "card";


  note.innerHTML =

    "<h3>学习提示</h3>" +

    "<p class='muted'>" +

    "不用一次掌握全部。"

    +

    "<br><br>" +

    "先认识这个词在教材中的形式，"

    +

    "<br>" +

    "再观察它在新约中的实际变化。"

    +

    "</p>";


  area.appendChild(
    note
  );


  const formsCard =
    document.createElement(
      "div"
    );


  formsCard.className =
    "card";


  formsCard.innerHTML =

    "<h3>常见词形</h3>" +

    "<div id='lemmaForms'></div>";


  area.appendChild(
    formsCard
  );


  formEntries.forEach(
    function(entry) {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "form-row";


      row.innerHTML =

        "<div class='form-word'>" +

        escapeHtml(
          entry[0]
        ) +

        "</div>" +

        "<div class='form-meta'>" +

        "出现 " +
        entry[1] +
        " 次"

        +

        "</div>";


      row.onclick =
        function() {

          const token =
            occurrences.find(
              function(item) {

                return (
                  item.word ===
                  entry[0]
                );

              }
            );


          if (
            token
          ) {

            currentReturn =
              "lemma";

            openVerse(
              token
            );

          }

        };


      $("lemmaForms")
        .appendChild(
          row
        );

    }
  );


}


/* =========================================================
LEMMA STAT
========================================================= */

function lemmaStat(
  value,
  label
) {

  return (

    "<div class='lemma-stat'>" +

    "<strong>" +
    value +
    "</strong>" +

    "<span>" +
    label +
    "</span>" +

    "</div>"

  );

}


/* =========================================================
VERSE
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
      "没有找到对应经文。"
    );

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
  selected
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
        "corpus-token";


      if (
        selected &&
        selected.wordIndex ===
        token.wordIndex
      ) {

        span.classList.add(
          "active"
        );

      }


      span.textContent =
        token.rawText;


      span.onclick =
        function() {

          renderTokenDetail(
            token,
            "verseDetail"
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
    selected
  ) {

    renderTokenDetail(
      selected,
      "verseDetail"
    );

  }

}


/* =========================================================
REVIEW
========================================================= */

function renderReviewStep(
  area,
  lesson,
  st
) {

  const vocabularyCount =
    getLessonVocabulary(
      lesson.n
    ).length;


  const reviewRate =
    vocabularyCount
      ? Math.round(
          st.vocabularyReviewed /
          vocabularyCount *
          100
        )
      : 0;


  area.innerHTML =

    "<div class='lesson-section'>" +

    "<h3>今天学到了什么？</h3>" +

    "<p class='muted'>" +

    "不用做复杂评价。"

    +

    "<br>" +

    "只看看自己是否已经走过这一课。"

    +

    "</p>" +

    recordLine(
      "教材内容",
      st.content
    ) +

    recordLine(
      "教材练习",
      st.practice
    ) +

    recordLine(
      "教材词汇",
      st.vocabulary
    ) +

    recordLine(
      "真实新约",
      st.corpus
    ) +

    "<div class='notice-box'>" +

    "<strong>本课学习情况</strong>" +

    "<br><br>" +

    "练习完成：" +
    (
      st.practice
        ? "是"
        : "还需要练习"
    ) +

    "<br>" +

    "原文训练次数：" +
    st.corpusReviewed +

    "</div>" +

    "<button id='finishLessonButton' class='primary wide' type='button'>" +

    "我完成了今天的学习"

    +

    "</button>" +

    "</div>";


  $("finishLessonButton")
    .onclick =
    completeLesson;


  st.review =
    true;


  saveState();

}


/* =========================================================
RECORD LINE
========================================================= */

function recordLine(
  label,
  checked
) {

  return (

    "<div style='display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--line)'>" +

    "<span>" +

    escapeHtml(
      label
    ) +

    "</span>" +

    "<strong>" +

    (
      checked
        ? "✓"
        : "○"
    ) +

    "</strong>" +

    "</div>"

  );

}


/* =========================================================
COMPLETE LESSON
========================================================= */

function completeLesson() {

  const st =
    getLessonState(
      currentLessonIndex
    );


  const ready =

    st.content &&
    st.practice &&
    st.vocabulary &&
    st.corpus;


  if (
    !ready
  ) {

    alert(
      "先完成教材、练习、词汇和原文训练。"
    );

    return;

  }


  st.review =
    true;


  st.completed =
    true;


  st.updatedAt =
    new Date()
      .toISOString();


  saveState();


  /*
   * 完成一课以后，
   * 不强迫学生立即跳下一课。
   *
   * 这是 V2.2 很重要的变化。
   */

  showLessonComplete();

}


function showLessonComplete() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  $("lessonArea")
    .innerHTML =

    "<div class='lesson-section'>" +

    "<div class='success'>" +

    "<strong>✓ 今天的学习完成了</strong>"

    +

    "<br><br>" +

    "L" +
    String(
      lesson.n
    )
      .padStart(
        2,
        "0"
      ) +

    " · " +

    escapeHtml(
      lesson.title
    ) +

    "<br><br>" +

    "不要急着赶下一课。"

    +

    "<br>" +

    "以后可以回来复习本课。"

    +

    "</div>" +

    "<button id='nextLessonButton' class='primary wide' type='button'>" +

    (
      currentLessonIndex <
      LESSONS.length - 1

        ? "下一课 →"

        : "返回首页"

    ) +

    "</button>" +

    "<button id='homeAfterLesson' class='secondary wide' type='button'>" +

    "返回首页"

    +

    "</button>" +

    "</div>";


  $("nextLessonButton")
    .onclick =
    function() {

      if (
        currentLessonIndex <
        LESSONS.length - 1
      ) {

        openLesson(
          currentLessonIndex +
          1
        );

      }

      else {

        goHome();

      }

    };


  $("homeAfterLesson")
    .onclick =
    goHome;


  $("lessonNext")
    .textContent =
    "已完成";

}


/* =========================================================
LESSON NAVIGATION
========================================================= */

function nextStep() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  if (
    currentStep ===
    1
  ) {

    const practice =
      lesson.practice ||
      [];


    if (
      currentPracticeIndex <
      practice.length
    ) {

      return;

    }


    st.practice =
      true;


    saveState();

  }


  if (
    currentStep ===
    3 &&
    !st.corpus
  ) {

    startLessonCorpusTraining();

    return;

  }


  if (
    currentStep <
    4
  ) {

    currentStep++;


    state.lessonStep =
      currentStep;


    st.step =
      currentStep;


    saveState();


    renderLessonStep();


    return;

  }


  completeLesson();

}


function previousStep() {

  if (
    currentStep >
    0
  ) {

    currentStep--;


    const st =
      getLessonState(
        currentLessonIndex
      );


    st.step =
      currentStep;


    state.lessonStep =
      currentStep;


    saveState();


    renderLessonStep();

  }

  else {

    goHome();

  }

}


/* =========================================================
VOCABULARY REVIEW
========================================================= */

function startVocabularyReview() {

  const completedLessonNumbers =
    LESSONS
      .filter(
        function(
          lesson,
          index
        ) {

          return getLessonState(
            index
          ).completed;

        }
      )
      .map(
        function(lesson) {

          return lesson.n;

        }
      );


  vocabularyReview =
    VOCABULARY
      .filter(
        function(item) {

          return completedLessonNumbers.includes(
            item.lesson
          );

        }
      )
      .slice()
      .sort(
        function(a,b) {

          const av =
            getVocabState(
              a.word
            );


          const bv =
            getVocabState(
              b.word
            );


          return (
            av.remembered -
            bv.remembered
          );

        }
      )
      .slice(
        0,
        10
      );


  if (
    !vocabularyReview.length
  ) {

    alert(
      "完成至少一课后就可以开始词汇复习。"
    );

    return;

  }


  vocabularyReviewIndex =
    0;


  go(
    "vocabReview"
  );


  renderVocabularyReview();

}


function renderVocabularyReview() {

  const counter =
    $("vocabReviewCounter");


  const area =
    $("vocabReviewArea");


  if (
    vocabularyReviewIndex >=
    vocabularyReview.length
  ) {

    counter.textContent =
      "复习完成";


    area.innerHTML =

      "<div class='success'>" +

      "<strong>✓ 今天复习完成</strong>"

      +

      "<br><br>" +

      "不用追求全对。"

      +

      "<br>" +

      "能再次见到，就是一次学习。"

      +

      "</div>";


    return;

  }


  const item =
    vocabularyReview[
      vocabularyReviewIndex
    ];


  counter.textContent =

    "词汇 " +
    (
      vocabularyReviewIndex +
      1
    ) +
    " / " +
    vocabularyReview.length;


  area.innerHTML =
    "";


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "vocab-card";


  card.innerHTML =

    "<div class='eyebrow'>RECALL</div>" +

    "<div class='vocab-word' style='text-align:center;margin:20px 0'>" +

    escapeHtml(
      item.word
    ) +

    "</div>" +

    "<button id='reviewSpeak' class='secondary wide' type='button'>" +

    "🔊 听发音"

    +

    "</button>" +

    "<div id='reviewOptions' class='practice-options'></div>" +

    "<div id='reviewFeedback'></div>";


  area.appendChild(
    card
  );


  $("reviewSpeak")
    .onclick =
    function() {

      speakText(
        item.word
      );

    };


  buildReviewOptions(
    item
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

            const memory =
              getVocabState(
                item.word
              );


            const options =
              $("reviewOptions")
                .querySelectorAll(
                  "button"
                );


            options.forEach(
              function(b) {

                b.disabled =
                  true;

              }
            );


            if (
              option ===
              item.gloss
            ) {

              button.classList.add(
                "correct"
              );


              memory.remembered++;


              $("reviewFeedback")
                .innerHTML =

                "<div class='success'>" +

                "✓ 很好"

                +

                "<button id='nextVocab' class='primary wide' type='button'>" +

                "下一词 →"

                +

                "</button>" +

                "</div>";

            }

            else {

              button.classList.add(
                "wrong"
              );


              memory.wrong++;


              $("reviewFeedback")
                .innerHTML =

                "<div class='notice-box'>" +

                "正确答案：" +

                escapeHtml(
                  item.gloss
                ) +

                "<button id='nextVocab' class='primary wide' type='button'>" +

                "下一词 →"

                +

                "</button>" +

                "</div>";

            }


            memory.seen++;


            memory.lastReviewed =
              new Date()
                .toISOString();


            saveState();


            $("nextVocab")
              .onclick =
              function() {

                vocabularyReviewIndex++;

                renderVocabularyReview();

              };

          };


        $("reviewOptions")
          .appendChild(
            button
          );

      }
    );

}


function buildReviewOptions(
  item
) {

  const others =
    VOCABULARY
      .filter(
        function(other) {

          return (
            other.word !==
            item.word
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
        3
      );


  return [

    item.gloss,

    ...others.map(
      function(other) {

        return other.gloss;

      }
    )

  ]
    .sort(
      function() {

        return Math.random() -
          0.5;

      }
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
    CONFIG.SPEECH_LANG;


  utterance.rate =
    CONFIG.SPEECH_RATE;


  utterance.pitch =
    1;


  utterance.volume =
    1;


  window.speechSynthesis.speak(
    utterance
  );

}


/* =========================================================
PUBLIC API
========================================================= */

window.go =
  go;

window.openLesson =
  openLesson;

window.openLemma =
  openLemma;

window.openVerse =
  openVerse;

window.speakText =
  speakText;

window.startLessonCorpusTraining =
  startLessonCorpusTraining;

window.startVocabularyReview =
  startVocabularyReview;

window.loadAllCorpus =
  loadAllCorpus;


/* =========================================================
END GBRM V2.2
========================================================= */
