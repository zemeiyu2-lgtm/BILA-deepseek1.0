/* =========================================================
   GBRM V1.8
   TEXTBOOK-DRIVEN LEARNING ENGINE

   核心原则：

   Textbook
      ↓
   Lesson
      ↓
   Lesson Objective
      ↓
   Lesson Vocabulary
      ↓
   Lesson Practice
      ↓
   Lesson-based NT Corpus
      ↓
   Morphology
      ↓
   Lemma
      ↓
   Word Family
      ↓
   Return to Lesson
========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  STATE_KEY:
    "GBRM_V18_STATE",

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
TEXTBOOK COURSE
========================================================= */

const LESSONS = [

  {
    n: 1,
    group: "引言",
    title: "希腊语",
    objective:
      "认识学习新约希腊文的目标，并建立原文阅读方向。",
    kind: "intro",
    practice: [
      {
        q:
          "学习新约希腊文最直接的目的是什么？",
        options:
          [
            "更准确地进入新约原文",
            "只为了考试",
            "只为了背中文"
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
      "建立长期学习、发音、书写和复习习惯。",
    kind: "intro",
    practice: [
      {
        q:
          "有效的语言训练应该怎样进行？",
        options:
          [
            "看、读、听、写、复习",
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
      "掌握希腊字母与基础发音。",
    kind: "alphabet",
    vocabulary: [
      "λόγος",
      "θεός"
    ],
    practice: [
      {
        q:
          "希腊文共有多少个字母？",
        options:
          [
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
      "认识希腊文标点与基本音节。",
    kind: "syllable",
    practice: [
      {
        q:
          "希腊文问号使用什么符号？",
        options:
          [
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
      "建立名词、性、数、格的基本概念。",
    kind: "noun",
    vocabulary: [
      "λόγος",
      "θεός",
      "κόσμος"
    ],
    practice: [
      {
        q:
          "希腊文名词需要特别观察什么？",
        options:
          [
            "性、数、格",
            "时态、语态、语气",
            "人称、时态"
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
      "认识主格、直接受格和定冠词。",
    kind: "case",
    vocabulary: [
      "λόγος",
      "θεός",
      "ὁ"
    ],
    practice: [
      {
        q:
          "τὸν θεόν 属于哪一个格？",
        options:
          [
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
      "认识所有格和间接受格。",
    kind: "case",
    vocabulary: [
      "θεός",
      "οὐρανός"
    ],
    practice: [
      {
        q:
          "τοῦ θεοῦ 属于哪一个格？",
        options:
          [
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
      "学习基本介词与 εἰμί。",
    kind: "verb",
    vocabulary: [
      "εἰμί",
      "ἐν",
      "διά"
    ],
    practice: [
      {
        q:
          "εἰμί 的核心意义是什么？",
        options:
          [
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
      "学习形容词与名词之间的性、数、格一致。",
    kind: "adjective",
    vocabulary: [
      "ἀγαθός",
      "καλός"
    ],
    practice: [
      {
        q:
          "形容词通常与名词在哪些方面一致？",
        options:
          [
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
    kind: "third",
    vocabulary: [
      "σῶμα",
      "φῶς"
    ],
    practice: [
      {
        q:
          "第三格变式名词特别需要观察什么？",
        options:
          [
            "词干与字尾",
            "中文翻译",
            "章节号码"
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
    kind: "pronoun",
    vocabulary: [
      "ἐγώ",
      "ἡμεῖς",
      "σύ",
      "ὑμεῖς"
    ],
    practice: [
      {
        q:
          "ἐγώ 的基本意义是什么？",
        options:
          [
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
      "认识 αὐτός 的形式与基本功能。",
    kind: "autos",
    vocabulary: [
      "αὐτός"
    ],
    practice: [
      {
        q:
          "αὐτός 为什么不能只固定翻译成一个中文词？",
        options:
          [
            "因为它的功能随句法和上下文变化",
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
      "学习指示词与指涉关系。",
    kind: "demonstrative",
    vocabulary: [
      "οὗτος",
      "ἐκεῖνος"
    ],
    practice: [
      {
        q:
          "指示词学习时首先应该观察什么？",
        options:
          [
            "它具体指向什么",
            "中文有几个字",
            "词频最高不高"
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
      "认识关系代名词与关系子句。",
    kind: "relative",
    vocabulary: [
      "ὅς",
      "ὅτι"
    ],
    practice: [
      {
        q:
          "关系代名词的格主要由什么决定？",
        options:
          [
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
      "建立时态、语态、语气、人称和数的框架。",
    kind: "verb",
    vocabulary: [
      "λέγω",
      "ποιέω"
    ],
    practice: [
      {
        q:
          "分析希腊文动词时需要观察什么？",
        options:
          [
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
    kind: "present",
    vocabulary: [
      "ἀκούω",
      "βλέπω",
      "ἔχω",
      "λύω",
      "πιστεύω"
    ],
    practice: [
      {
        q:
          "λύομεν 是什么人称和数？",
        options:
          [
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
      "认识缩略动词和元音缩合。",
    kind: "contract",
    vocabulary: [
      "ἀγαπάω",
      "ζητέω",
      "λαλέω"
    ],
    practice: [
      {
        q:
          "ἀγαπῶ 与 ἀγαπάω 的关系是什么？",
        options:
          [
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
      "学习现在式关身／被动形式。",
    kind: "mp",
    vocabulary: [
      "ἀποκρίνομαι",
      "δύναμαι",
      "ἔρχομαι"
    ],
    practice: [
      {
        q:
          "关身／被动形式最终需要结合什么判断意义？",
        options:
          [
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
      "认识未来式的基本形式。",
    kind: "future",
    vocabulary: [
      "βασιλεύς",
      "γεννάω",
      "ζάω"
    ],
    practice: [
      {
        q:
          "未来式常出现什么形式标记？",
        options:
          [
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
      "建立动词字干和时态字形的意识。",
    kind: "stems",
    vocabulary: [
      "γινώσκω",
      "εὑρίσκω",
      "λαμβάνω",
      "μένω",
      "φέρω"
    ],
    practice: [
      {
        q:
          "为什么需要学习动词字干？",
        options:
          [
            "不同形式可能使用不同字干",
            "动词没有变化",
            "字干只用于名词"
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
      "认识未完成式与过去中的持续观点。",
    kind: "imperfect",
    vocabulary: [
      "ἦν",
      "ἔλεγον",
      "ἔμενον"
    ],
    practice: [
      {
        q:
          "未完成式主要帮助我们看到什么？",
        options:
          [
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
    kind: "aorist2",
    vocabulary: [
      "ἀποστέλλω",
      "γίνομαι",
      "δίδωμι",
      "λαμβάνω"
    ],
    practice: [
      {
        q:
          "第二不定过去式的主要识别重点是什么？",
        options:
          [
            "第二词干",
            "未来 σ",
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
      "学习第一不定过去式和 σα。",
    kind: "aorist1",
    vocabulary: [
      "λύω",
      "ποιέω"
    ],
    practice: [
      {
        q:
          "第一不定过去式常见的标记是什么？",
        options:
          [
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
      "认识被动语态的特殊形式。",
    kind: "passive",
    vocabulary: [
      "λύω",
      "λαμβάνω"
    ],
    practice: [
      {
        q:
          "被动形式首先需要完成什么工作？",
        options:
          [
            "形态分析",
            "立即解释神学",
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
      "认识完成式的基本构成。",
    kind: "perfect",
    vocabulary: [
      "γινώσκω",
      "ποιέω",
      "πιστεύω"
    ],
    practice: [
      {
        q:
          "完成式首先需要观察什么？",
        options:
          [
            "形式和重复号",
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
   VOCABULARY DATABASE
========================================================= */

const VOCABULARY = [

  [4,"λόγος","言语/道",330],
  [4,"θεός","神/神明",1317],
  [4,"ζωή","生命",135],
  [4,"δόξα","荣耀/威严",166],
  [4,"πνεῦμα","灵/圣灵",379],
  [4,"κόσμος","世界/世人",186],
  [4,"Χριστός","基督/弥赛亚",529],
  [4,"ἄνθρωπος","人/人类",550],
  [4,"ἀγγελος","使者/天使",175],

  [6,"ἀγάπη","爱",116],
  [6,"αὐτός","他/她/它/自己",5597],
  [6,"βασιλεία","国度",162],
  [6,"ἐν","在……里面",2752],
  [6,"ὁ","这",19870],

  [7,"οὐρανός","天/天空",273],
  [7,"οὗτος","这个/这些",1388],
  [7,"σύ","你",1067],
  [7,"υἱός","儿子/子孙",377],

  [8,"διά","藉着/因为",667],
  [8,"εἰμί","是/存在",2460],
  [8,"Ἰωάννης","约翰",135],
  [8,"λέγω","说/告诉",2354],

  [9,"ἀγαθός","好的/有用的",102],
  [9,"ἀλλήλων","彼此",100],
  [9,"δοῦλος","奴隶/仆人",124],
  [9,"ἐντολή","诫命/命令",67],
  [9,"πιστός","忠心的/有信心的",67],

  [10,"ἅγιος","圣洁的/圣徒",233],
  [10,"ὄνομα","名字/名声",231],
  [10,"πᾶς","每一个/所有的",1244],
  [10,"σάρξ","肉体/身体",147],
  [10,"σῶμα","身体",142],
  [10,"τέκνον","儿女/子孙",99],

  [11,"ἀδελφός","弟兄",343],
  [11,"ἐκκλησία","教会/聚会",114],
  [11,"ἐλπίς","盼望/期盼",53],
  [11,"ἡμεῖς","我们",864],
  [11,"πατήρ","父亲",413],
  [11,"πίστις","信心/信仰",243],
  [11,"ὕδωρ","水",76],
  [11,"ὑμεῖς","你们",1840],
  [11,"φῶς","光",73],
  [11,"χάρις","恩典/宠爱",155],

  [12,"αἰών","世代/永恒",122],
  [12,"διδάσκαλος","老师",59],
  [12,"μαθητής","门徒",261],

  [13,"γυνή","女人/妻子",215],
  [13,"δικαιοσύνη","公义",92],
  [13,"δώδεκα","十二",75],
  [13,"ἑαυτοῦ","他自己/她自己/它自己",319],
  [13,"ἐκεῖνος","那个/那些",265],
  [13,"μακάριος","有福的/快乐的",50],
  [13,"μέγας","大的/伟大的",243],
  [13,"πολύς","许多的/多的",365],
  [13,"τηρέω","保守/护卫/遵守",70],

  [14,"ἀλήθεια","真理",109],
  [14,"εἰρήνη","平安",92],
  [14,"ἐπαγγελία","应许",52],
  [14,"θρόνος","宝座",62],
  [14,"Ἰερουσαλήμ","耶路撒冷",77],
  [14,"ὁδός","道路/行为",101],
  [14,"ὅς","谁/哪一个",1411],

  [16,"ἀκούω","听见/学习",428],
  [16,"βλέπω","看见/注视",133],
  [16,"ἔχω","有/拿着",708],
  [16,"λύω","解开/毁坏",42],
  [16,"νόμος","律法/原则",194],
  [16,"πιστεύω","相信/信任",241],
  [16,"χαρά","喜乐/愉快",59],

  [17,"ἀγαπάω","爱/珍爱",143],
  [17,"ζητέω","寻求/渴望",117],
  [17,"καλέω","召/命名/邀请",148],
  [17,"λαλέω","说/讲",296],
  [17,"οἶδα","知道/明白",318],
  [17,"πληρόω","充满/完成/应验",86],
  [17,"ποιέω","做/使",568],

  [18,"ἀποκρίνομαι","回答",231],
  [18,"δεῖ","必须",101],
  [18,"δύναμαι","能/有能力",210],
  [18,"ἔρχομαι","来/去",634],
  [18,"τόπος","地方/地点",94],

  [19,"βασιλεύς","王",115],
  [19,"γεννάω","生/产生",97],
  [19,"ζάω","活",140],
  [19,"Ἰουδαία","犹太",43],
  [19,"Ἰουδαῖος","犹太的/犹太人",195],
  [19,"Ἰσραήλ","以色列",68],
  [19,"καρπός","果子/庄稼/结果",66],
  [19,"προσκυνέω","敬拜",60],

  [20,"ἀποθνῄσκω","死",111],
  [20,"γινώσκω","知道/认识",222],
  [20,"ἐγείρω","唤醒/举起/使复活",144],
  [20,"εὐαγγέλιον","福音/好消息",76],
  [20,"εὐαγγελίζω","传福音",55],
  [20,"εὑρίσκω","找到",176],
  [20,"λαμβάνω","拿/接受",258],
  [20,"μένω","留下/居住",118],
  [20,"ὁράω","看见",454],
  [20,"πίνω","喝",73],
  [20,"φέρω","带/背负/结出",67],

  [22,"ἀποστέλλω","差遣",132],
  [22,"βαίνω","去",60],
  [22,"γίνομαι","成为/发生",678],
  [22,"δίδωμι","给",416],
  [22,"φεύγω","逃跑",29]

].map(function(row) {

  return {

    lesson:
      row[0],

    word:
      row[1],

    gloss:
      row[2],

    frequency:
      row[3]

  };

});


/* =========================================================
STATE
========================================================= */

const state =
  loadState();


let currentLessonIndex =
  0;


let currentLessonStep =
  0;


let currentPracticeIndex =
  0;


let currentCorpusTokens =
  [];


let currentCorpusIndex =
  0;


let currentLemma =
  "";


let currentVerseTokens =
  [];


let speechRate =
  CONFIG.NORMAL_RATE;


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
      "GBRM state:",
      error
    );

  }


  return {

    lessons:
      {},

    vocab:
      {},

    currentLesson:
      0

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
BASIC
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

  renderHome();

  renderRecords();

}


/* =========================================================
EVENTS
========================================================= */

function bindEvents() {

  $("lessonBackBtn").onclick =
    goHome;


  $("lessonPrevBtn").onclick =
    previousLesson;


  $("lessonNextBtn").onclick =
    nextLessonStep;


  $("vocabBackBtn").onclick =
    goHome;


  $("vocabReviewBtn").onclick =
    startVocabularyReview;


  $("corpusBackBtn").onclick =
    goHome;


  $("lemmaBackBtn").onclick =
    returnFromLemma;


  $("verseBackBtn").onclick =
    returnFromVerse;


  $("verseLemmaBtn").onclick =
    returnFromVerse;


  $("recordBackBtn").onclick =
    goHome;


  $("loadCorpusBtn").onclick =
    loadAllCorpus;

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

  renderProgress();

  renderContinue();

  renderLessonList();

  renderCorpusStatus();

}


function renderProgress() {

  let completed =
    0;


  LESSONS.forEach(
    function(
      lesson,
      index
    ) {

      const item =
        state.lessons[
          lessonKey(
            index
          )
        ];


      if (
        item &&
        item.completed
      ) {

        completed++;

      }

    }
  );


  const percent =
    Math.round(
      completed /
      LESSONS.length *
      100
    );


  $("completedCount")
    .textContent =
    completed;


  $("lessonCount")
    .textContent =
    LESSONS.length;


  $("progressPercent")
    .textContent =
    percent +
    "%";


  $("courseProgress")
    .style.width =
    percent +
    "%";

}


function renderContinue() {

  const box =
    $("continueCard");


  const index =
    Number(
      state.currentLesson ||
      0
    );


  const lesson =
    LESSONS[
      index
    ];


  if (
    !lesson
  ) {

    box.innerHTML =
      "";

    return;

  }


  const st =
    getLessonState(
      index
    );


  box.innerHTML =

    "<div class='continue-card'>" +

    "<div class='eyebrow'>" +

    (
      st.completed
        ? "CONTINUE REVIEW"
        : "CONTINUE LESSON"
    ) +

    "</div>" +

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

    "<br>" +

    "<small>" +

    escapeHtml(
      lesson.objective
    ) +

    "</small>" +

    "<button id='continueBtn' class='primary wide' type='button'>" +

    (
      st.completed
        ? "重新进入本课"
        : "继续学习"
    ) +

    " →</button>" +

    "</div>";


  $("continueBtn").onclick =
    function() {

      openLesson(
        index
      );

    };

}


/* =========================================================
LESSON STATE
========================================================= */

function lessonKey(
  index
) {

  return (
    "L" +
    LESSONS[
      index
    ].n
  );

}


function getLessonState(
  index
) {

  const key =
    lessonKey(
      index
    );


  if (
    !state.lessons[key]
  ) {

    state.lessons[key] = {

      completed:
        false,

      score:
        0,

      vocabulary:
        false,

      corpus:
        false,

      updatedAt:
        null

    };

  }


  return state.lessons[key];

}


/* =========================================================
COURSE LIST
========================================================= */

function renderLessonList() {

  const box =
    $("lessonList");


  box.innerHTML =
    "";


  let currentGroup =
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
        lesson.group !==
        currentGroup
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


        currentGroup =
          lesson.group;

      }


      const item =
        document.createElement(
          "button"
        );


      item.type =
        "button";


      item.className =
        "lesson-item";


      if (
        index ===
        Number(
          state.currentLesson ||
          0
        )
      ) {

        item.classList.add(
          "current"
        );

      }


      if (
        st.completed
      ) {

        item.classList.add(
          "completed"
        );

      }


      item.innerHTML =

        "<div class='lesson-index'>" +

        "L" +

        String(
          lesson.n
        ).padStart(
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

            ? "✓ 已完成 · " +
              st.score +
              "%"

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


      item.onclick =
        function() {

          openLesson(
            index
          );

        };


      box.appendChild(
        item
      );

    }
  );

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


  currentLessonStep =
    0;


  currentPracticeIndex =
    0;


  state.currentLesson =
    index;


  saveState();


  renderLessonHeader();

  renderLessonStep();

  go(
    "lesson"
  );

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


  $("lessonNumber")
    .textContent =
    "L" +
    String(
      lesson.n
    ).padStart(
      2,
      "0"
    );


  $("lessonGroup")
    .textContent =
    lesson.group;


  $("lessonObjective")
    .textContent =
    lesson.objective;

}


/* =========================================================
LESSON STEP ENGINE
========================================================= */

function renderLessonStep() {

  const area =
    $("lessonArea");


  area.innerHTML =
    "";


  if (
    currentLessonStep ===
    0
  ) {

    renderLessonIntroduction(
      area
    );

    $("lessonNextBtn")
      .textContent =
      "开始教材练习 →";

    return;

  }


  if (
    currentLessonStep ===
    1
  ) {

    renderLessonPractice(
      area
    );

    return;

  }


  if (
    currentLessonStep ===
    2
  ) {

    renderLessonVocabulary(
      area
    );

    return;

  }


  if (
    currentLessonStep ===
    3
  ) {

    renderLessonCorpusGateway(
      area
    );

    return;

  }


  if (
    currentLessonStep ===
    4
  ) {

    renderLessonReview(
      area
    );

    return;

  }


  finishLesson(
    area
  );

}


function renderLessonIntroduction(
  area
) {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>本课学习目标</h3>" +

    "<p class='lesson-text'>" +

    escapeHtml(
      lesson.objective
    ) +

    "</p>" +


    "<div class='grammar-example'>" +

    "<strong>学习顺序</strong>" +

    "<br><br>" +

    "1. 先理解教材"

    +

    "<br>" +

    "2. 再做教材练习"

    +

    "<br>" +

    "3. 再进入本课词汇"

    +

    "<br>" +

    "4. 最后用真实新约经文训练"

    +

    "</div>";


  area.appendChild(
    section
  );


  const lessonNote =
    document.createElement(
      "div"
    );


  lessonNote.className =
    "lesson-section";


  lessonNote.innerHTML =

    "<h3>数字化引擎</h3>" +

    "<p class='lesson-text'>" +

    "这一课完成以后，GBRM 会把本课知识自动连接到真实新约语料。"

    +

    "</p>";


  area.appendChild(
    lessonNote
  );

}


/* =========================================================
PRACTICE
========================================================= */

function renderLessonPractice(
  area
) {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const practice =
    lesson.practice || [];


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  if (
    currentPracticeIndex >=
    practice.length
  ) {

    section.innerHTML =

      "<div class='success'>" +

      "✓ 本课教材练习完成。"

      +

      "</div>";


    area.appendChild(
      section
    );


    $("lessonNextBtn")
      .textContent =
      "继续：本课词汇 →";


    return;

  }


  const item =
    practice[
      currentPracticeIndex
    ];


  section.innerHTML =

    "<h3>教材练习</h3>" +

    "<div class='training-card'>" +

    "<div class='training-question'>" +

    escapeHtml(
      item.q
    ) +

    "</div>" +

    "<div id='lessonChoices' class='training-options'></div>" +

    "</div>" +

    "<div id='practiceFeedback'></div>";


  area.appendChild(
    section
  );


  const grid =
    section.querySelector(
      "#lessonChoices"
    );


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


          const feedback =
            $("practiceFeedback");


          if (
            index ===
            item.answer
          ) {

            button.classList.add(
              "correct"
            );


            feedback.innerHTML =

              "<div class='success'>" +

              "✓ 正确。"

              +

              "</div>";


            currentPracticeIndex++;


            setTimeout(
              function() {

                renderLessonStep();

              },
              450
            );

          }

          else {

            button.classList.add(
              "wrong"
            );


            feedback.innerHTML =

              "<div class='notice-box'>" +

              "再观察一次教材，然后再试。"

              +

              "</div>";


            setTimeout(
              function() {

                renderLessonStep();

              },
              700
            );

          }

        };


      grid.appendChild(
        button
      );

    }
  );


  $("lessonNextBtn")
    .textContent =
    "等待练习完成";

}


/* =========================================================
VOCABULARY
========================================================= */

function renderLessonVocabulary(
  area
) {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


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

    "<h3>📚 本课教材词汇</h3>" +

    "<p class='muted'>" +

    "这些词来自教材词库，并将在下一步连接真实新约。"

    +

    "</p>";


  const grid =
    document.createElement(
      "div"
    );


  grid.className =
    "vocab-grid";


  list.forEach(
    function(item) {

      grid.appendChild(
        createVocabCard(
          item
        )
      );

    }
  );


  if (
    !list.length
  ) {

    section.innerHTML +=

      "<div class='notice-box'>" +

      "当前课号暂时没有导入词汇。"

      +

      "</div>";

  }

  else {

    section.appendChild(
      grid
    );

  }


  area.appendChild(
    section
  );


  $("lessonNextBtn")
    .textContent =
    "进入本课原文训练 →";

}


function getLessonVocabulary(
  lessonNumber
) {

  let list =
    VOCABULARY.filter(
      function(item) {

        return (
          item.lesson ===
          lessonNumber
        );

      }
    );


  /*
   * 如果教材本课数据暂时没有，
   * 使用 LESSONS 的轻量映射。
   */

  if (
    !list.length
  ) {

    const lesson =
      LESSONS.find(
        function(item) {

          return (
            item.n ===
            lessonNumber
          );

        }
      );


    if (
      lesson &&
      lesson.vocabulary
    ) {

      list =
        lesson.vocabulary
          .map(
            function(word) {

              return {

                lesson:
                  lessonNumber,

                word,

                gloss:
                  "教材词汇",

                frequency:
                  null

              };

            }
          );

    }

  }


  return list;

}


function createVocabCard(
  item
) {

  const card =
    document.createElement(
      "div"
    );


  card.className =
    "vocab-card";


  const memory =
    getVocabState(
      item.word
    );


  card.innerHTML =

    "<div class='vocab-top'>" +

    "<div class='vocab-word'>" +

    escapeHtml(
      item.word
    ) +

    "</div>" +

    "<button type='button' class='speakBtn'>🔊</button>" +

    "</div>" +

    "<div class='vocab-gloss'>" +

    escapeHtml(
      item.gloss
    ) +

    "</div>" +

    (
      item.frequency !==
      null

        ? "<div class='vocab-frequency'>" +
          "NT frequency: " +
          item.frequency +
          "</div>"

        : ""

    ) +

    "<div class='vocab-actions'>" +

    "<button type='button' class='lemmaBtn'>" +

    "查看词典形"

    +

    "</button>" +

    "</div>" +

    "<span class='vocab-status'>" +

    vocabStatus(
      memory
    ) +

    "</span>";


  card
    .querySelector(
      ".speakBtn"
    )
    .onclick =
    function() {

      speakText(
        item.word
      );

    };


  card
    .querySelector(
      ".lemmaBtn"
    )
    .onclick =
    function() {

      openLemma(
        item.word
      );

    };


  return card;

}


function getVocabState(
  word
) {

  if (
    !state.vocab
  ) {

    state.vocab =
      {};

  }


  if (
    !state.vocab[word]
  ) {

    state.vocab[word] = {

      correct:
        0,

      wrong:
        0,

      nextReview:
        null

    };

  }


  return state.vocab[word];

}


function vocabStatus(
  memory
) {

  const score =
    memory.correct || 0;


  if (
    score >=
    5
  ) {

    return "已掌握";

  }


  if (
    score >
    0
  ) {

    return "学习中";

  }


  return "新词";

}


/* =========================================================
LESSON CORPUS GATEWAY
========================================================= */

function renderLessonCorpusGateway(
  area
) {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>📖 进入真实新约</h3>" +

    "<p class='lesson-text'>" +

    "教材已经完成基础教学。"

    +

    "<br><br>" +

    "现在进入真实新约训练，但训练目标仍然由本课教材决定。"

    +

    "</p>" +


    "<div class='grammar-example'>" +

    "<strong>本课训练目标</strong>" +

    "<br><br>" +

    escapeHtml(
      lesson.objective
    ) +

    "</div>" +


    "<button id='openLessonCorpus' class='primary wide' type='button'>" +

    "进入本课真实新约训练 →"

    +

    "</button>";


  area.appendChild(
    section
  );


  $("openLessonCorpus")
    .onclick =
    function() {

      startLessonCorpusTraining();

    };


  $("lessonNextBtn")
    .textContent =
    "完成原文训练后继续";

}


async function startLessonCorpusTraining() {

  if (
    corpus.loaded ===
    0
  ) {

    await loadPriorityCorpus();

  }


  currentCorpusTokens =
    selectLessonCorpusTokens();


  currentCorpusIndex =
    0;


  go(
    "corpus"
  );


  renderLessonCorpus();

}


async function loadPriorityCorpus() {

  const priority = [

    "Jn",
    "Lk",
    "Ro",
    "Mt"

  ];


  for (
    const id of priority
  ) {

    await loadBook(
      id
    );

  }

}


/* =========================================================
CORPUS SELECTION
========================================================= */

function selectLessonCorpusTokens() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const vocab =
    getLessonVocabulary(
      lesson.n
    );


  const vocabKeys =
    vocab.map(
      function(item) {

        return normalize(
          item.word
        );

      }
    );


  /*
   * 当前教材词汇
   */

  let exact =
    corpus.tokens.filter(
      function(token) {

        return vocabKeys.includes(
          normalize(
            token.lemma
          )
        );

      }
    );


  /*
   * 如果没有本课词汇匹配，
   * 根据课程类型选择相关形态。
   */

  if (
    exact.length <
    5
  ) {

    exact =
      corpus.tokens.filter(
        function(token) {

          return lessonMorphMatch(
            token,
            lesson.kind
          );

        }
      );

  }


  /*
   * 去重后随机选取
   */

  return exact
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

}


function lessonMorphMatch(
  token,
  kind
) {

  const tense =
    token.morph.tense;


  if (
    kind ===
    "present"
  ) {

    return (
      tense ===
      "现在式" &&
      token.morph.voice ===
      "主动" &&
      token.morph.mood ===
      "直说"
    );

  }


  if (
    kind ===
    "future"
  ) {

    return (
      tense ===
      "未来式"
    );

  }


  if (
    kind ===
    "imperfect"
  ) {

    return (
      tense ===
      "未完成式"
    );

  }


  if (
    kind ===
    "aorist1"
  ) {

    return (
      tense ===
      "不定过去式"
    );

  }


  if (
    kind ===
    "perfect"
  ) {

    return (
      tense ===
      "完成式"
    );

  }


  if (
    kind ===
    "noun"
  ) {

    return (
      decodePOS(
        token.pos
      ) ===
      "名词"
    );

  }


  if (
    kind ===
    "adjective"
  ) {

    return (
      decodePOS(
        token.pos
      ) ===
      "形容词"
    );

  }


  if (
    kind ===
    "pronoun" ||
    kind ===
    "autos" ||
    kind ===
    "demonstrative" ||
    kind ===
    "relative"
  ) {

    return (
      decodePOS(
        token.pos
      ) ===
      "代词"
    );

  }


  return (
    token.word &&
    token.lemma
  );

}


/* =========================================================
LESSON CORPUS DISPLAY
========================================================= */

function renderLessonCorpus() {

  const area =
    $("corpusTrainingArea");


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  $("corpusLessonLabel")
    .textContent =

    "LESSON " +
    String(
      lesson.n
    ).padStart(
      2,
      "0"
    );


  $("corpusLessonTitle")
    .textContent =
    lesson.title;


  area.innerHTML =
    "";


  if (
    currentCorpusIndex >=
    currentCorpusTokens.length
  ) {

    area.innerHTML =

      "<div class='success'>" +

      "<strong>✓ 本课真实原文训练完成</strong>" +

      "<br><br>" +

      "你刚才练习的词形来自真实新约语料。"

      +

      "<br><br>" +

      "现在回到本课，整理你刚才观察到的形式。"

      +

      "<button id='returnLesson' class='primary wide' type='button'>" +

      "返回本课 →"

      +

      "</button>" +

      "</div>";


    $("returnLesson").onclick =
      function() {

        getLessonState(
          currentLessonIndex
        ).corpus =
          true;


        saveState();


        currentLessonStep =
          4;


        renderLessonStep();

        go(
          "lesson"
        );

      };


    return;

  }


  const token =
    currentCorpusTokens[
      currentCorpusIndex
    ];


  const verse =
    corpus.verses[
      token.verseKey
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
      token.reference
    ) +

    "</div>" +

    "<div id='lessonCorpusGreek' class='corpus-greek'></div>" +

    "<div id='lessonTokenDetail'></div>";


  area.appendChild(
    card
  );


  renderCorpusTokens(
    verse,
    "lessonCorpusGreek",
    "lessonTokenDetail",
    token
  );


  const guide =
    document.createElement(
      "div"
    );


  guide.className =
    "notice-box";


  guide.innerHTML =

    "<strong>本课观察：</strong>" +

    "<br><br>" +

    "先找出与你本课教材有关的词形，"

    +

    "再观察它在真实句子中的作用。";


  area.appendChild(
    guide
  );


  const next =
    document.createElement(
      "button"
    );


  next.className =
    "primary wide";


  next.type =
    "button";


  next.textContent =
    "下一处真实例句 →";


  next.onclick =
    function() {

      currentCorpusIndex++;

      renderLessonCorpus();

    };


  area.appendChild(
    next
  );

}


/* =========================================================
   CORPUS TOKENS
========================================================= */

function renderCorpusTokens(
  tokens,
  containerId,
  detailId,
  selectedToken
) {

  const box =
    $(containerId);


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
        selectedToken &&
        selectedToken.wordIndex ===
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

          showCorpusTokenDetail(
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
    selectedToken
  ) {

    showCorpusTokenDetail(
      selectedToken,
      detailId
    );

  }

}


function showCorpusTokenDetail(
  token,
  detailId
) {

  const box =
    $(detailId);


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

    "<button id='tokenLemmaBtn' class='secondary wide' type='button'>" +

    "进入这个词的 Lemma →"

    +

    "</button>";


  $("tokenLemmaBtn")
    .onclick =
    function() {

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
   CORPUS LOAD
========================================================= */

async function loadAllCorpus() {

  const button =
    $("loadCorpusBtn");


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


  renderCorpusStatus(
    "整个新约已经载入。"
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
      "GBRM Corpus:",
      error
    );


    renderCorpusStatus(
      book.name +
      " 载入失败"
    );


    return false;

  }

}


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

        const value =
          line.trim();


        if (
          !value ||
          value.startsWith("#")
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


function decodeParsing(
  code
) {

  const c =
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

          ? "全新约已载入"

          :

          corpus.loaded +
          " / " +
          BOOKS.length +
          " 书卷已载入"

    );

}


/* =========================================================
   LESSON REVIEW
========================================================= */

function renderLessonReview(
  area
) {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>本课回顾</h3>" +

    "<div class='notice-box'>" +

    "<strong>" +

    "你刚刚完成了：</strong>" +

    "<br><br>" +

    "✓ 教材学习"

    +

    "<br>" +

    "✓ 教材练习"

    +

    "<br>" +

    (
      st.corpus
        ? "✓ 真实新约训练"
        : "○ 真实新约训练"
    )

    +

    "</div>" +


    "<div class='grammar-example'>" +

    "<strong>下一步</strong>" +

    "<br><br>" +

    "返回课程主线，继续下一课。"

    +

    "</div>";


  area.appendChild(
    section
  );


  $("lessonNextBtn")
    .textContent =
    "完成本课 →";


  $("lessonNextBtn")
    .onclick =
    function() {

      finishLesson(
        area
      );

    };

}


function finishLesson(
  area
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
    calculateLessonScore(
      st
    );


  st.updatedAt =
    new Date()
      .toISOString();


  saveState();


  if (
    currentLessonIndex <
    LESSONS.length - 1
  ) {

    currentLessonIndex++;


    state.currentLesson =
      currentLessonIndex;


    saveState();


    openLesson(
      currentLessonIndex
    );

  }

  else {

    renderCompletion(
      area
    );

  }

}


function calculateLessonScore(
  st
) {

  let score =
    70;


  if (
    st.corpus
  ) {

    score +=
      30;

  }


  return Math.min(
    100,
    score
  );

}


function renderCompletion(
  area
) {

  area.innerHTML =

    "<div class='lesson-section'>" +

    "<div class='success'>" +

    "<strong>🎉 初阶课程主线完成</strong>"

    +

    "<br><br>" +

    "你已经完成 Lesson 01–25。"

    +

    "<br><br>" +

    "下一阶段可以在同一教材主线之下继续增加："

    +

    "<br><br>" +

    "Syntax"

    +

    "<br>" +

    "Clause Analysis"

    +

    "<br>" +

    "Discourse"

    +

    "<br>" +

    "Exegesis"

    +

    "</div>" +

    "</div>";


  $("lessonNextBtn")
    .textContent =
    "返回课程";

  $("lessonNextBtn")
    .onclick =
    goHome;

}


/* =========================================================
STEP CONTROL
========================================================= */

function nextLessonStep() {

  if (
    currentLessonStep ===
    1
  ) {

    const practice =
      LESSONS[
        currentLessonIndex
      ].practice ||
      [];


    if (
      currentPracticeIndex <
      practice.length
    ) {

      return;

    }

  }


  if (
    currentLessonStep <
    5
  ) {

    currentLessonStep++;

    renderLessonStep();

    return;

  }


  finishLesson(
    $("lessonArea")
  );

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

    goHome();

  }

}


/* =========================================================
VOCAB REVIEW
========================================================= */

function startVocabularyReview() {

  const learnedLessons =
    LESSONS.filter(
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


  const list =
    VOCABULARY.filter(
      function(item) {

        return learnedLessons.includes(
          item.lesson
        );

      }
    );


  if (
    !list.length
  ) {

    alert(
      "请先完成至少一课教材。"
    );

    return;

  }


  currentVocabReview =
    list
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


  currentVocabReviewIndex =
    0;


  go(
    "vocabReview"
  );


  renderVocabularyReview();

}


let currentVocabReview =
  [];

let currentVocabReviewIndex =
  0;


function renderVocabularyReview() {

  const box =
    $("vocabArea");


  if (
    currentVocabReviewIndex >=
    currentVocabReview.length
  ) {

    $("vocabCounter")
      .textContent =
      "复习完成";


    box.innerHTML =

      "<div class='success'>" +

      "<strong>✓ 今日教材词汇复习完成</strong>"

      +

      "<br><br>" +

      "回到当前课程继续学习。"

      +

      "</div>";


    return;

  }


  const item =
    currentVocabReview[
      currentVocabReviewIndex
    ];


  $("vocabCounter")
    .textContent =

    "第 " +

    (
      currentVocabReviewIndex +
      1
    ) +

    " / " +

    currentVocabReview.length;


  const boxContent =
    document.createElement(
      "div"
    );


  boxContent.className =
    "vocab-card";


  boxContent.innerHTML =

    "<div class='eyebrow'>MEANING RECALL</div>" +

    "<div class='vocab-word' style='text-align:center;margin:18px 0'>" +

    escapeHtml(
      item.word
    ) +

    "</div>" +

    "<button id='hearVocab' class='secondary wide' type='button'>" +

    "🔊 听发音"

    +

    "</button>" +

    "<div id='vocabOptions' class='training-options'></div>" +

    "<div id='vocabFeedback'></div>";


  box.innerHTML =
    "";


  box.appendChild(
    boxContent
  );


  $("hearVocab")
    .onclick =
    function() {

      speakText(
        item.word
      );

    };


  getVocabReviewOptions(
    item
  )
    .forEach(
      function(option) {

        const button =
          document.createElement(
            "button"
          );


        button.textContent =
          option;


        button.onclick =
          function() {

            const container =
              $("vocabOptions");


            container
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


            const memory =
              getVocabState(
                item.word
              );


            const correct =
              normalize(
                option
              ) ===
              normalize(
                item.gloss
              );


            if (
              correct
            ) {

              button.classList.add(
                "correct"
              );

              memory.correct++;

            }

            else {

              button.classList.add(
                "wrong"
              );

              memory.wrong++;

            }


            saveState();


            $("vocabFeedback")
              .innerHTML =

              "<div class='success'>" +

              (
                correct
                  ? "✓ 正确"
                  : "正确答案：" +
                    escapeHtml(
                      item.gloss
                    )
              ) +

              "<button id='nextVocab' class='primary wide' type='button'>" +

              "下一词 →"

              +

              "</button>" +

              "</div>";


            $("nextVocab")
              .onclick =
              function() {

                currentVocabReviewIndex++;

                renderVocabularyReview();

              };

          };


        $("vocabOptions")
          .appendChild(
            button
          );

      }
    );

}


function getVocabReviewOptions(
  item
) {

  const others =
    VOCABULARY.filter(
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


  const result = [

    item.gloss

  ];


  others.forEach(
    function(other) {

      result.push(
        other.gloss
      );

    }
  );


  return result
    .sort(
      function() {

        return Math.random() -
          0.5;

      }
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


  const matches =
    corpus.lemmas[
      key
    ] || [];


  if (
    !matches.length
  ) {

    alert(
      "当前已载入 Corpus 中没有找到这个 Lemma。"
    );

    return;

  }


  currentLemma =
    matches[0].lemma;


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


  occurrences.forEach(
    function(token) {

      if (
        !forms[
          token.word
        ]
      ) {

        forms[
          token.word
        ] = 0;

      }


      forms[
        token.word
      ]++;

    }
  );


  const uniqueForms =
    Object.entries(
      forms
    )
      .sort(
        function(a,b) {

          return b[1] -
            a[1];

        }
      );


  const books =
    {};


  occurrences.forEach(
    function(token) {

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


  const bookCount =
    Object.keys(
      books
    ).length;


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

        : "教材暂未提供中文释义"

    ) +

    "</div>" +


    "<div class='lemma-stats'>" +

    "<div class='lemma-stat'>" +

    "<strong>" +

    occurrences.length +

    "</strong>" +

    "<span>真实出现</span>" +

    "</div>" +

    "<div class='lemma-stat'>" +

    "<strong>" +

    uniqueForms.length +

    "</strong>" +

    "<span>词形变体</span>" +

    "</div>" +

    "<div class='lemma-stat'>" +

    "<strong>" +

    bookCount +

    "</strong>" +

    "<span>书卷</span>" +

    "</div>" +

    "</div>";


  area.appendChild(
    hero
  );


  const flow =
    document.createElement(
      "div"
    );


  flow.className =
    "card";


  flow.innerHTML =

    "<h3>为什么现在看 Lemma？</h3>" +

    "<p class='muted'>" +

    "你已经在教材里学习过这个词。"

    +

    "<br><br>" +

    "现在不是再学一个新课程，而是观察："

    +

    "<br><br>" +

    "这个词在真实新约中怎样变化、怎样出现、怎样进入不同上下文。"

    +

    "</p>";


  area.appendChild(
    flow
  );


  const formCard =
    document.createElement(
      "div"
    );


  formCard.className =
    "card";


  formCard.innerHTML =

    "<h3>词形网络</h3>" +

    "<div id='lemmaForms'></div>";


  area.appendChild(
    formCard
  );


  const formsBox =
    $("lemmaForms");


  uniqueForms.forEach(
    function(entry) {

      const div =
        document.createElement(
          "div"
        );


      div.className =
        "family-item";


      div.innerHTML =

        "<div class='family-form'>" +

        escapeHtml(
          entry[0]
        ) +

        "</div>" +

        "<div class='family-meta'>" +

        "真实出现 " +

        entry[1] +

        " 次"

        +

        "</div>";


      div.onclick =
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

            openVerse(
              token
            );

          }

        };


      formsBox.appendChild(
        div
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
    "进入真实经文观察 →";


  training.onclick =
    function() {

      if (
        occurrences.length
      ) {

        openVerse(
          occurrences[0]
        );

      }

    };


  area.appendChild(
    training
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

    return;

  }


  currentVerseTokens =
    verse;


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
        token.wordIndex ===
        selected.wordIndex
      ) {

        span.classList.add(
          "active"
        );

      }


      span.textContent =
        token.rawText;


      span.onclick =
        function() {

          showCorpusTokenDetail(
            token,
            "verseTokenDetail"
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

    showCorpusTokenDetail(
      selected,
      "verseTokenDetail"
    );

  }

}


function returnFromVerse() {

  if (
    currentLemma
  ) {

    renderLemma();

    go(
      "lemma"
    );

  }

  else {

    goHome();

  }

}


function returnFromLemma() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  if (
    lesson
  ) {

    renderLessonHeader();

  }


  go(
    "lesson"
  );

}


/* =========================================================
COURSE RECORD
========================================================= */

function renderRecords() {

  /*
   * V1.8 暂时不在首页增加额外入口。
   * 保留函数以便后续扩展学习记录。
   */

}


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


/* =========================================================
END GBRM V1.8
========================================================= */
