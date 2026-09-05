/* =========================================================
   GBRM V1.9
   TEXTBOOK CORE ENGINE

   核心：

   TEXTBOOK
      ↓
   LESSON
      ↓
   OBJECTIVE
      ↓
   PRACTICE
      ↓
   VOCABULARY
      ↓
   REAL NT CORPUS
      ↓
   MORPHOLOGY
      ↓
   LEMMA
      ↓
   CONTEXT
      ↓
   LESSON REVIEW
      ↓
   COMPLETION
========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  STATE_KEY:
    "GBRM_V19_STATE",

  SPEECH_LANG:
    "en-US",

  SPEECH_RATE:
    0.88,

  REQUIRED_CORPUS_BOOKS:
    ["Jn", "Lk", "Ro", "Mt"]

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
TEXTBOOK LESSON DATA
========================================================= */

const LESSONS = [

  {
    n: 1,
    group: "引言",
    title: "希腊语",
    objective:
      "认识新约希腊文学习的目的，建立原文阅读方向。",
    kind:
      "intro",
    lessonContent:
      "本课建立整个学习系统的方向：不是只记住规则，而是逐渐能够直接阅读新约原文。",
    examples:
      [],
    practice:
      [
        {
          question:
            "学习新约希腊文最直接的目标是什么？",
          options:
            [
              "进入新约原文",
              "只为考试",
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
      "建立长期学习、阅读、发音与复习习惯。",
    kind:
      "intro",
    lessonContent:
      "建立规律学习路径，并开始把词形识别与真实阅读联系起来。",
    examples:
      [],
    practice:
      [
        {
          question:
            "语言学习最合理的路径是什么？",
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
      "掌握希腊字母和基础发音。",
    kind:
      "alphabet",
    vocabulary:
      ["λόγος","θεός"],
    lessonContent:
      "认识希腊字母系统，并开始建立希腊文与声音之间的连接。",
    practice:
      [
        {
          question:
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
    kind:
      "syllable",
    lessonContent:
      "继续训练文字识别，并开始关注经文阅读中的结构边界。",
    practice:
      [
        {
          question:
            "希腊文问号使用哪个符号？",
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
    kind:
      "noun",
    vocabulary:
      [
        "λόγος",
        "θεός",
        "κόσμος"
      ],
    lessonContent:
      "开始从英文语法过渡到希腊文名词系统。",
    practice:
      [
        {
          question:
            "分析希腊文名词时特别需要注意什么？",
          options:
            [
              "性、数、格",
              "时态、语态、语气",
              "只有中文意思"
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
    kind:
      "case",
    vocabulary:
      [
        "ἀγάπη",
        "αὐτός",
        "βασιλεία",
        "ἐν",
        "ὁ"
      ],
    lessonContent:
      "开始通过格和定冠词观察名词在句中的功能。",
    practice:
      [
        {
          question:
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
      "认识所有格与间接受格。",
    kind:
      "case",
    vocabulary:
      [
        "οὐρανός",
        "οὗτος",
        "σύ",
        "υἱός"
      ],
    lessonContent:
      "进一步观察格如何表达名词之间的关系。",
    practice:
      [
        {
          question:
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
      "学习基本介词并认识 εἰμί。",
    kind:
      "verb",
    vocabulary:
      [
        "ἀλλά",
        "διά",
        "εἰμί",
        "ἡμέρα",
        "Ἰωάννης",
        "λέγω"
      ],
    lessonContent:
      "开始把介词结构与基本系动词带入真实句子。",
    practice:
      [
        {
          question:
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
      "认识形容词和名词之间的性、数、格一致。",
    kind:
      "adjective",
    vocabulary:
      [
        "ἀγαθός",
        "ἀγαπητός",
        "αἰώνιος",
        "δοῦλος",
        "ἐντολή",
        "πιστός"
      ],
    lessonContent:
      "训练学生从形式一致性进入句法观察。",
    practice:
      [
        {
          question:
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
    kind:
      "third",
    vocabulary:
      [
        "ἅγιος",
        "ὄνομα",
        "πᾶς",
        "σάρξ",
        "σῶμα",
        "τέκνον"
      ],
    lessonContent:
      "开始建立词干和词尾变化意识。",
    practice:
      [
        {
          question:
            "第三格变式名词首先应注意什么？",
          options:
            [
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
    kind:
      "pronoun",
    vocabulary:
      [
        "ἀδελφός",
        "ἐκκλησία",
        "ἐλπίς",
        "ἡμεῖς",
        "πατήρ",
        "πίστις",
        "ὕδωρ",
        "ὑμεῖς",
        "φῶς",
        "χάρις"
      ],
    lessonContent:
      "认识人称代词的不同形式，并观察它们如何参与句法关系。",
    practice:
      [
        {
          question:
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
      "认识 αὐτός 的形式和基本功能。",
    kind:
      "autos",
    vocabulary:
      [
        "αἰών",
        "διδάσκαλος",
        "μαθητής"
      ],
    lessonContent:
      "不能只背一个固定中文翻译，而要开始根据句法观察功能。",
    practice:
      [
        {
          question:
            "αὐτός 为什么不能只固定翻译成一个中文词？",
          options:
            [
              "因为功能随句法和上下文变化",
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
    kind:
      "demonstrative",
    vocabulary:
      [
        "γυνή",
        "δικαιοσύνη",
        "δώδεκα",
        "ἐκεῖνος",
        "μακάριος",
        "μέγας",
        "πολύς",
        "τηρέω"
      ],
    lessonContent:
      "训练学生观察一个指示词具体指向什么。",
    practice:
      [
        {
          question:
            "指示词学习时首先要观察什么？",
          options:
            [
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
      "认识关系代名词与关系子句。",
    kind:
      "relative",
    vocabulary:
      [
        "ἀλήθεια",
        "εἰρήνη",
        "ἐπαγγελία",
        "θρόνος",
        "Ἰερουσαλήμ",
        "ὁδός",
        "ὅς"
      ],
    lessonContent:
      "开始观察关系词如何连接句子和信息。",
    practice:
      [
        {
          question:
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
      "建立时态、语态、语气、人称、数的框架。",
    kind:
      "verb",
    vocabulary:
      [
        "ἀκούω",
        "βλέπω",
        "ἔχω",
        "λύω",
        "νόμος",
        "πιστεύω",
        "χαρά"
      ],
    lessonContent:
      "进入动词系统，学习如何从一个词形判断基本语法信息。",
    practice:
      [
        {
          question:
            "分析希腊文动词时应该观察哪些方面？",
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
    kind:
      "present",
    vocabulary:
      [
        "ἀκούω",
        "βλέπω",
        "ἔχω",
        "λύω",
        "νόμος",
        "πιστεύω",
        "χαρά"
      ],
    lessonContent:
      "从教材形式进入真实新约动词词形。",
    practice:
      [
        {
          question:
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
    kind:
      "contract",
    vocabulary:
      [
        "ἀγαπάω",
        "ζητέω",
        "καλέω",
        "λαλέω",
        "οἶδα",
        "πληρόω",
        "ποιέω"
      ],
    lessonContent:
      "开始识别词典形与真实文本形式之间的变化。",
    practice:
      [
        {
          question:
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
    kind:
      "mp",
    vocabulary:
      [
        "ἀποκρίνομαι",
        "δεῖ",
        "δύναμαι",
        "ἔρχομαι",
        "τόπος"
      ],
    lessonContent:
      "观察动词形式与上下文之间的关系。",
    practice:
      [
        {
          question:
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
    kind:
      "future",
    vocabulary:
      [
        "βασιλεύς",
        "γεννάω",
        "ζάω",
        "Ἰουδαία",
        "Ἰουδαῖος",
        "Ἰσραήλ",
        "καρπός",
        "προσκυνέω"
      ],
    lessonContent:
      "认识未来式，并开始从真实文本识别未来形式。",
    practice:
      [
        {
          question:
            "未来式常见的形式标记是什么？",
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
      "建立动词字干变化意识。",
    kind:
      "stems",
    vocabulary:
      [
        "ἀποθνῄσκω",
        "ἄρτος",
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
    lessonContent:
      "把教材中的字干变化与真实新约中的词形变化连接起来。",
    practice:
      [
        {
          question:
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
      "认识未完成式。",
    kind:
      "imperfect",
    vocabulary:
      [
        "ἦν"
      ],
    lessonContent:
      "开始从真实新约文本认识过去中的持续／进行观点。",
    practice:
      [
        {
          question:
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
    kind:
      "aorist2",
    vocabulary:
      [
        "ἀποστέλλω",
        "βαίνω",
        "γίνομαι",
        "δίδωμι",
        "φεύγω"
      ],
    lessonContent:
      "训练学生识别不规则或第二词干形式。",
    practice:
      [
        {
          question:
            "第二不定过去式最重要的观察点是什么？",
          options:
            [
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
      "学习第一不定过去式。",
    kind:
      "aorist1",
    vocabulary:
      [
        "λύω",
        "ποιέω"
      ],
    lessonContent:
      "从教材规则进入真实新约文本。",
    practice:
      [
        {
          question:
            "第一不定过去式常见标记是什么？",
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
      "认识被动语态特殊形式。",
    kind:
      "passive",
    vocabulary:
      [
        "λαμβάνω",
        "λύω"
      ],
    lessonContent:
      "训练学生先完成形态识别，再观察上下文中的功能。",
    practice:
      [
        {
          question:
            "遇到被动形式时首先要做什么？",
          options:
            [
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
    kind:
      "perfect",
    vocabulary:
      [
        "γινώσκω",
        "ποιέω",
        "πιστεύω"
      ],
    lessonContent:
      "把完成式形式与真实经文中的实际词形连接起来。",
    practice:
      [
        {
          question:
            "完成式首先需要观察什么？",
          options:
            [
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
TEXTBOOK VOCABULARY
来源：用户提供的教材词库
========================================================= */

const VOCAB_CSV = `
4,ἀγγελος,使者/天使,175
4,ἀμήν,实实在在地/阿们,129
4,ἄνθρωπος,人/人类,550
4,ἀπόστολος,使徒/报信者,80
4,Γαλιλαία,加利利,61
4,γραφή,著作/圣经,50
4,δόξα,荣耀/威严,166
4,ἐγώ,我,1802
4,ἔσχατος,最后的,52
4,ζωή,生命,135
4,θεός,神/神明,1317
4,καί,和/也,9161
4,καρδία,心/内在自己,156
4,κόσμος,世界/世人,186
4,λόγος,言语/道,330
4,πνεῦμα,灵/圣灵,379
4,προφήτης,先知,144
4,σάββατον,安息日/一周,68
4,φωνή,声音/声响,139
4,Χριστός,基督/弥赛亚,529
4,Ἀβραάμ,亚伯拉罕,73
4,Δαυίδ,大卫,59
4,Παῦλος,保罗,158
4,Πέτρος,彼得,156
4,Πιλᾶτος,彼拉多,55
4,Σίμων,西门,75
6,ἀγάπη,爱,116
6,ἄλλος,别的/另一个,155
6,αὐτός,他/她/它/自己,5597
6,βασιλεία,国度,162
6,δέ,但是/而,2792
6,ἐν,在……里面,2752
6,ἔργον,工作/行为,169
6,καιρός,时间/季节,85
6,νῦν,现在,147
6,ὁ,这,19870
6,ὅτι,因为/那,1296
6,οὐ,不,1606
6,ὥρα,小时/时候,106
7,οὐρανός,天/天空,273
7,οὗτος,这个/这些,1388
7,σύ,你,1067
7,υἱός,儿子/子孙,377
7,ὥστε,所以/以致,83
8,ἀλλά,但是/然而,638
8,ἀπό,从/离开,646
8,διά,藉着/因为,667
8,εἰμί,我是/存在,2460
8,ἐκ,从/出自,914
8,ἡμέρα,日/白天,389
8,ἦν,他/她/它是(过去),0
8,θάλασσα,海/湖,91
8,θάνατος,死亡,120
8,ἵνα,为了/要,663
8,Ἰωάννης,约翰,135
8,λέγω,我说/告诉,2354
8,μετά,与……一起/在……之后,469
8,οἰκία,屋子/家庭,93
8,οἶκος,屋子/家庭,114
8,ὄχλος,人群/大众,175
8,παρά,从/在……旁边/沿着,194
8,παραβολή,比喻,50
8,πρός,向/朝着/与……一起,700
8,ὑπό,被/在……底下,220
9,ἀγαθός,好的/有用的,102
9,ἀγαπητός,亲爱的,61
9,αἰώνιος,永远的,71
9,ἀλλήλων,彼此,100
9,ἀπεκρίθη,他/她/它回答,0
9,δοῦλος,奴隶/仆人,124
9,ἐάν,如果/当,351
9,ἐμός,我的,76
9,ἐντολή,诫命/命令,67
9,καθώς,如/正如,182
9,κακός,坏的/恶的,50
9,μου,我的,0
9,νεκρός,死的/尸体,128
9,πιστός,忠心的/有信心的,67
9,πονηρός,邪恶的/坏的,78
9,πρῶτος,第一的/前面的,155
9,τρίτος,第三的,56
10,ἅγιος,圣洁的/圣徒,233
10,εἰ,如果,502
10,εἰ μή,除非/如果不,0
10,εἷς,一,344
10,ἤδη,现在/已经,61
10,ὄνομα,名字/名声,231
10,οὐδείς,没有一个/没有任何,234
10,πᾶς,每一个/所有的,1244
10,περί,关于/围绕,333
10,σάρξ,肉体/身体,147
10,σύν,与……一起,128
10,σῶμα,身体,142
10,τέκνον,儿女/子孙,99
10,τίς,谁?/什么?,556
10,τις,某人/任何人,525
11,ἀδελφός,弟兄,343
11,ἄν,语助词,166
11,ἀνήρ,男人/丈夫,216
11,ἐκκλησία,教会/聚会,114
11,ἐλπίς,盼望/期盼,53
11,ἔξω,没有/在外面,63
11,ἐπί,在……上/基于/向着,890
11,ἡμεῖς,我们,864
11,θέλημα,旨意/欲望,62
11,ἴδε,看哪,29
11,ἰδού,看哪,200
11,καλός,美丽的/好的,100
11,μήτηρ,母亲,83
11,οὐδέ,而不/甚至不,143
11,πατήρ,父亲,413
11,πίστις,信心/信仰,243
11,ὕδωρ,水,76
11,ὑμεῖς,你们,1840
11,φῶς,光,73
11,χάρις,恩典/宠爱,155
11,ὧδε,在这里,61
12,αἰών,世代/永恒,122
12,διδάσκαλος,老师,59
12,εὐθύς,立刻,51
12,ἕως,直到,146
12,μαθητής,门徒,261
12,μέν,一方面/确实,179
12,μηδείς,没有一个人/一件事物,90
12,μόνος,唯独/只有,114
12,ὅπως,如何/以致/为要,53
13,γυνή,女人/妻子,215
13,δικαιοσύνη,公义,92
13,δώδεκα,十二,75
13,ἑαυτοῦ,他自己/她自己/它自己,319
13,ἐκεῖνος,那个/那些,265
13,ἤ,或/比,343
13,κἀγώ,而我/但我,84
13,μακάριος,有福的/快乐的,50
13,μέγας,大的/伟大的,243
13,πολύς,许多的/多的,365
13,σήμερον,今天,41
13,τηρέω,保守/护卫/遵守,70
14,ἀλήθεια,真理,109
14,εἰρήνη,平安,92
14,ἐνώπιον,在……前,94
14,ἐπαγγελία,应许,52
14,ἑπτά,七,88
14,θρόνος,宝座,62
14,Ἰερουσαλήμ,耶路撒冷,77
14,κατά,向下/根据,473
14,κεφαλή,头,75
14,ὁδός,道路/行为,101
14,ὅς,谁/哪一个,1411
14,ὅτε,当……时,103
14,πλοῖον,船/小船,68
14,ῥῆμα,话/言论,68
14,οὕτως,如此,215
14,χείρ,手/臂,177
14,ψυχή,魂/生命/自己,103
16,ἀκούω,我听见/学习,428
16,βλέπω,我看见/注视,133
16,ἔχω,我有/拿着,708
16,λύω,我解开/毁坏,42
16,νόμος,律法/原则,194
16,ὅπου,在……地方,82
16,πιστεύω,我相信/信任,241
16,πρόσωπον,脸/外貌,76
16,τότε,那时/然后,160
16,τυφλός,瞎眼的,50
16,χαρά,喜乐/愉快,59
17,ἀγαπάω,我爱/珍爱,143
17,δαιμόνιον,鬼,63
17,ζητέω,我寻求/渴望,117
17,καλέω,我召/命名/邀请,148
17,λαλέω,我说/讲,296
17,οἶδα,我知道/明白,318
17,ὅταν,每当/当……时,123
17,μείζων,更大的/更多的,55
17,πληρόω,我充满/完成/应验,86
17,ποιέω,我做/使,568
18,ἀποκρίνομαι,我回答,231
18,δεῖ,是必须的,101
18,δύναμαι,我能/有能力,210
18,ἔρχομαι,我来/去,634
18,νύξ,夜晚,61
18,ὅστις,凡……的,144
18,πορεύομαι,我去/着手/生活,153
18,συνάγω,我聚集/邀请,59
18,τόπος,地方/地点,94
18,ὡς,如/像/当/约,504
19,βασιλεύς,王,115
19,γεννάω,我生/产生,97
19,ζάω,我活,140
19,Ἰουδαία,犹太,43
19,Ἰουδαῖος,犹太的/犹太人,195
19,Ἰσραήλ,以色列,68
19,καρπός,果子/庄稼/结果,66
19,ὅλος,整个/完整的,109
19,προσκυνέω,我敬拜,60
20,ἀποθνῄσκω,我死,111
20,ἄρτος,面包/食物,97
20,βάλλω,我扔/投,122
20,γινώσκω,我知道/认识,222
20,ἐγείρω,我唤醒/举起/使复活,144
20,ἐσθίω,我吃,158
20,εὐαγγέλιον,福音/好消息,76
20,εὐαγγελίζω,我传福音,55
20,εὑρίσκω,我找到,176
20,λαμβάνω,我拿/接受/娶,258
20,μένω,我留下/居住,118
20,ὁράω,我看见,454
20,παραλαμβάνω,我接受/带走,49
20,πίνω,我喝,73
20,φέρω,我带/背负/结出,67
22,ἀποστέλλω,我差遣,132
22,βαίνω,我去,60
22,γίνομαι,我成为/发生,678
22,δίδωμι,我给,416
22,φεύγω,我逃跑,29
`;


/* =========================================================
PARSE VOCABULARY
========================================================= */

function parseVocabularyCSV(csv) {

  return csv
    .trim()
    .split(/\r?\n/)
    .map(function(line) {

      const parts =
        line.split(",");

      return {

        lesson:
          Number(
            parts[0]
          ),

        word:
          parts[1],

        gloss:
          parts[2],

        frequency:
          Number(
            parts[3] ||
            0
          )

      };

    });

}


const VOCABULARY =
  parseVocabularyCSV(
    VOCAB_CSV
  );


/* =========================================================
STATE
========================================================= */

const state =
  loadState();


let currentLessonIndex =
  Number(
    state.currentLesson ||
    0
  );


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


let currentReturnTarget =
  "lesson";


let vocabReview =
  [];


let vocabReviewIndex =
  0;


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
STATE STORAGE
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
      "GBRM state load error",
      error
    );

  }


  return {

    currentLesson:
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
      "GBRM state save error",
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
LESSON STATE
========================================================= */

function lessonKey(
  index
) {

  return (
    "L" +
    LESSONS[index].n
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
    !state.lessons
  ) {

    state.lessons =
      {};

  }


  if (
    !state.lessons[key]
  ) {

    state.lessons[key] = {

      completed:
        false,

      practice:
        false,

      vocabulary:
        false,

      corpus:
        false,

      review:
        false,

      score:
        0,

      updatedAt:
        null

    };

  }


  return state.lessons[key];

}


/* =========================================================
HOME
========================================================= */

function init() {

  bindEvents();

  renderHome();

}


document.addEventListener(
  "DOMContentLoaded",
  init
);


function renderHome() {

  renderCourseProgress();

  renderContinueCard();

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


  const percent =
    Math.round(
      completed /
      LESSONS.length *
      100
    );


  $("completedCount")
    .textContent =
    completed;


  $("progressPercent")
    .textContent =
    percent +
    "%";


  $("courseProgress")
    .style.width =
    percent +
    "%";

}


function renderContinueCard() {

  const box =
    $("continueArea");


  const lesson =
    LESSONS[
      currentLessonIndex
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
      currentLessonIndex
    );


  box.innerHTML =

    "<div class='continue-card'>" +

    "<div class='eyebrow'>" +

    (
      st.completed
        ? "COURSE COMPLETE"
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

    "<small>" +

    escapeHtml(
      lesson.objective
    ) +

    "</small>" +

    "<button id='continueLessonBtn' class='primary wide' type='button'>" +

    (
      st.completed
        ? "重新进入本课"
        : "继续学习"
    ) +

    " →" +

    "</button>" +

    "</div>";


  $("continueLessonBtn")
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
          lesson.group.toUpperCase();


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
        currentLessonIndex
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

            ? "✓ 已完成"

            :

            escapeHtml(
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
EVENTS
========================================================= */

function bindEvents() {

  $("lessonBackBtn")
    .onclick =
    goHome;


  $("lessonPrevBtn")
    .onclick =
    previousLesson;


  $("lessonNextBtn")
    .onclick =
    nextLessonStep;


  $("vocabBackBtn")
    .onclick =
    goHome;


  $("vocabReviewBtn")
    .onclick =
    startVocabularyReview;


  $("corpusBackBtn")
    .onclick =
    returnFromCorpus;


  $("lemmaBackBtn")
    .onclick =
    returnFromLemma;


  $("verseBackBtn")
    .onclick =
    returnFromVerse;


  $("verseBackToLemma")
    .onclick =
    returnFromVerse;


  $("recordBackBtn")
    .onclick =
    goHome;


  $("loadCorpusBtn")
    .onclick =
    loadAllCorpus;

}


function goHome() {

  renderHome();

  go(
    "home"
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


  $("lessonLabel")
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


  switch (
    currentLessonStep
  ) {

    case 0:

      renderLessonContent(
        area
      );

      $("lessonNextBtn")
        .textContent =
        "开始教材练习 →";

      break;


    case 1:

      renderPractice(
        area
      );

      break;


    case 2:

      renderLessonVocabulary(
        area
      );

      $("lessonNextBtn")
        .textContent =
        "进入本课原文训练 →";

      break;


    case 3:

      renderCorpusGateway(
        area
      );

      break;


    case 4:

      renderLessonReview(
        area
      );

      break;


    default:

      completeLesson();

  }

}


/* =========================================================
LESSON CONTENT
========================================================= */

function renderLessonContent(
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

    "<h3>本课教材内容</h3>" +

    "<p>" +

    escapeHtml(
      lesson.lessonContent
    ) +

    "</p>" +


    "<div class='lesson-note'>" +

    "<strong>学习目标</strong>" +

    "<br><br>" +

    escapeHtml(
      lesson.objective
    ) +

    "</div>";


  if (
    lesson.examples &&
    lesson.examples.length
  ) {

    const title =
      document.createElement(
        "h3"
      );


    title.textContent =
      "教材例句";


    section.appendChild(
      title
    );


    lesson.examples.forEach(
      function(
        example
      ) {

        const div =
          document.createElement(
            "div"
          );


        div.className =
          "lesson-example";


        div.innerHTML =

          "<div class='greek'>" +

          escapeHtml(
            example.greek
          ) +

          "</div>" +

          "<div class='muted'>" +

          escapeHtml(
            example.note
          ) +

          "</div>";


        section.appendChild(
          div
        );

      }
    );

  }


  area.appendChild(
    section
  );

}


/* =========================================================
PRACTICE
========================================================= */

function renderPractice(
  area
) {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const practice =
    lesson.practice ||
    [];


  if (
    currentPracticeIndex >=
    practice.length
  ) {

    getLessonState(
      currentLessonIndex
    ).practice =
      true;


    saveState();


    area.innerHTML =

      "<div class='lesson-section'>" +

      "<div class='success'>" +

      "✓ 教材练习完成。"

      +

      "</div>" +

      "</div>";


    $("lessonNextBtn")
      .textContent =
      "继续：教材词汇 →";


    return;

  }


  const item =
    practice[
      currentPracticeIndex
    ];


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>教材练习</h3>" +

    "<div class='training-card'>" +

    "<div class='training-question'>" +

    escapeHtml(
      item.question
    ) +

    "</div>" +

    "<div id='practiceOptions' class='training-options'></div>" +

    "<div id='practiceFeedback'></div>" +

    "</div>";


  area.appendChild(
    section
  );


  const box =
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

          box
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

              "✓ 正确"

              +

              "</div>";


            currentPracticeIndex++;


            if (
              currentPracticeIndex >=
              practice.length
            ) {

              getLessonState(
                currentLessonIndex
              ).practice =
                true;


              saveState();

            }


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

              "再根据教材思考一次。"

              +

              "</div>";


            setTimeout(
              function() {

                renderLessonStep();

              },
              650
            );

          }

        };


      box.appendChild(
        button
      );

    }
  );


  $("lessonNextBtn")
    .textContent =
    "完成练习后继续";

}


/* =========================================================
LESSON VOCABULARY
========================================================= */

function getLessonVocabulary(
  lessonNumber
) {

  const result =
    VOCABULARY.filter(
      function(item) {

        return (
          item.lesson ===
          lessonNumber
        );

      }
    );


  return result;

}


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

    "这些词来自教材词库。"

    +

    "<br>" +

    "下一步才会把它们带入真实新约。"

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

      "当前课号暂未接入词库数据。"

      +

      "</div>";

  }

  else {

    list.forEach(
      function(item) {

        grid.appendChild(
          createVocabCard(
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


  getLessonState(
    currentLessonIndex
  ).vocabulary =
    true;


  saveState();

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

      lastReviewed:
        null,

      nextReview:
        null

    };

  }


  return state.vocab[word];

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

    "<button class='speakVocabulary' type='button'>" +

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

    "教材词频：" +

    item.frequency +

    "</div>" +

    "<div class='vocab-actions'>" +

    "<button class='openLemmaButton' type='button'>" +

    "进入 Lemma"

    +

    "</button>" +

    "<button class='markVocabButton' type='button'>" +

    "记住了"

    +

    "</button>" +

    "</div>" +

    "<span class='vocab-status'>" +

    getVocabularyStatus(
      memory
    ) +

    "</span>";


  card.querySelector(
    ".speakVocabulary"
  ).onclick =
    function() {

      speakText(
        item.word
      );

    };


  card.querySelector(
    ".openLemmaButton"
  ).onclick =
    function() {

      currentReturnTarget =
        "lesson";

      currentLemma =
        item.word;

      openLemma(
        item.word
      );

    };


  card.querySelector(
    ".markVocabButton"
  ).onclick =
    function() {

      memory.correct++;

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


  return card;

}


function getVocabularyStatus(
  memory
) {

  if (
    memory.correct >=
    5
  ) {

    return "已掌握";

  }


  if (
    memory.correct >
    0
  ) {

    return "学习中";

  }


  return "待学习";

}


/* =========================================================
CORPUS GATEWAY
========================================================= */

function renderCorpusGateway(
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

    "<p>" +

    "教材内容已经完成。"

    +

    "<br><br>" +

    "现在，GBRM 将按照本课教材目标，"

    +

    "从真实新约语料中选择训练材料。"

    +

    "</p>" +

    "<div class='lesson-note'>" +

    "<strong>本课教学目标</strong>" +

    "<br><br>" +

    escapeHtml(
      lesson.objective
    ) +

    "</div>" +

    "<button id='startLessonCorpus' class='primary wide' type='button'>" +

    "开始本课原文训练 →"

    +

    "</button>";


  area.appendChild(
    section
  );


  $("startLessonCorpus")
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


  let candidates =
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
   * 第一优先：
   * 当前教材词汇。
   */


  if (
    candidates.length <
    6
  ) {

    const morphCandidates =
      corpus.tokens.filter(
        function(token) {

          return matchesLessonMorphology(
            token,
            lesson.kind
          );

        }
      );


    candidates =
      candidates.concat(
        morphCandidates
      );

  }


  /*
   * 去重
   */

  const map =
    new Map();


  candidates.forEach(
    function(token) {

      const key =
        token.bookId +
        "-" +
        token.chapter +
        "-" +
        token.verse;


      if (
        !map.has(key)
      ) {

        map.set(
          key,
          token
        );

      }

    }
  );


  return Array.from(
    map.values()
  )
    .sort(
      function() {

        return (
          Math.random() -
          0.5
        );

      }
    )
    .slice(
      0,
      8
    );

}


/* =========================================================
MORPHOLOGY TARGET
========================================================= */

function matchesLessonMorphology(
  token,
  kind
) {

  if (
    !kind
  ) {

    return false;

  }


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

      return (
        token.morph.tense ===
        "不定过去式"
      );


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
        decodePOS(
          token.pos
        ) ===
        "名词"
      );


    case "adjective":

      return (
        decodePOS(
          token.pos
        ) ===
        "形容词"
      );


    case "pronoun":
    case "autos":
    case "demonstrative":
    case "relative":

      return (
        decodePOS(
          token.pos
        ) ===
        "代词"
      );


    default:

      return false;

  }

}


/* =========================================================
CORPUS TRAINING SCREEN
========================================================= */

function renderCorpusTraining() {

  const area =
    $("corpusTrainingArea");


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  $("corpusLabel")
    .textContent =

    "LESSON " +
    String(
      lesson.n
    ).padStart(
      2,
      "0"
    ) +
    " · REAL NT";


  $("corpusTitle")
    .textContent =
    lesson.title;


  $("corpusObjective")
    .textContent =
    lesson.objective;


  area.innerHTML =
    "";


  if (
    currentCorpusIndex >=
    currentCorpusTokens.length
  ) {

    completeCorpusTraining(
      area
    );

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

    "<div id='lessonCorpusText' class='corpus-greek'></div>" +

    "<div id='lessonCorpusDetail'></div>";


  area.appendChild(
    card
  );


  renderCorpusTokens(
    verse,
    "lessonCorpusText",
    "lessonCorpusDetail",
    token
  );


  const guide =
    document.createElement(
      "div"
    );


  guide.className =
    "notice-box";


  guide.innerHTML =

    "<strong>本课观察任务</strong>" +

    "<br><br>" +

    "先找出本课正在学习的形式，"

    +

    "<br>" +

    "再观察它在真实经文中的作用。";


  area.appendChild(
    guide
  );


  const next =
    document.createElement(
      "button"
    );


  next.className =
    "primary wide";


  next.textContent =
    "下一处真实例句 →";


  next.onclick =
    function() {

      currentCorpusIndex++;

      renderCorpusTraining();

    };


  area.appendChild(
    next
  );

}


function completeCorpusTraining(
  area
) {

  const st =
    getLessonState(
      currentLessonIndex
    );


  st.corpus =
    true;


  saveState();


  area.innerHTML =

    "<div class='success'>" +

    "<strong>✓ 本课真实原文训练完成</strong>"

    +

    "<br><br>" +

    "你刚才看到的材料来自真实新约语料。"

    +

    "<br><br>" +

    "现在返回教材课程进行回顾。"

    +

    "<button id='returnLessonAfterCorpus' class='primary wide' type='button'>" +

    "返回本课 →"

    +

    "</button>" +

    "</div>";


  $("returnLessonAfterCorpus")
    .onclick =
    function() {

      currentLessonStep =
        4;


      renderLessonStep();

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
    const id of CONFIG.REQUIRED_CORPUS_BOOKS
  ) {

    await loadBook(
      id
    );

  }

}


async function loadAllCorpus() {

  const button =
    $("loadCorpusBtn");


  button.disabled =
    true;


  for (
    const book of BOOKS
  ) {

    await loadBook(
      book.id
    );

  }


  button.disabled =
    false;


  renderCorpusStatus(
    "整个新约已加载"
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
      addTokenToCorpus
    );


    renderCorpusStatus();


    return true;

  }

  catch (
    error
  ) {

    console.error(
      "GBRM corpus error:",
      book.name,
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


        /*
         * MorphGNT:
         *
         * location
         * pos
         * parsing
         * text
         * word
         * normalized
         * lemma
         */

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


        if (
          Number.isNaN(
            chapter
          ) ||
          Number.isNaN(
            verse
          )
        ) {

          return;

        }


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


function addTokenToCorpus(
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

  const c =
    String(
      code ||
      ""
    ).padEnd(
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
      ),

    degree:
      decodeDegree(
        c[7]
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


function decodeDegree(
  c
) {

  return {

    C:
      "比较级",

    S:
      "最高级"

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

        ? "按当前课程需要自动加载"

        :

        corpus.loaded ===
        BOOKS.length

          ? "整个新约已加载"

          :

          corpus.loaded +
          " / " +
          BOOKS.length +
          " 书卷已加载"

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
      "当前已载入语料中没有找到这个词典形。"
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

        : "教材暂未提供释义"

    ) +

    "</div>" +

    "<div class='lemma-stats'>" +

    lemmaStat(
      occurrences.length,
      "真实出现"
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

    "<h3>与教材的关系</h3>" +

    "<p class='muted'>" +

    "Lemma 不是新的课程起点。"

    +

    "<br><br>" +

    "你已经在教材中学习这个词；"

    +

    "<br>" +

    "现在只是把它放回真实新约中观察。"

    +

    "</p>";


  area.appendChild(
    note
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


  formEntries.forEach(
    function(entry) {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "family-item";


      row.innerHTML =

        "<div class='family-form'>" +

        escapeHtml(
          entry[0]
        ) +

        "</div>" +

        "<div class='family-meta'>" +

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

            currentReturnTarget =
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


  const button =
    document.createElement(
      "button"
    );


  button.className =
    "primary wide";


  button.textContent =
    "查看一个真实经文位置 →";


  button.onclick =
    function() {

      if (
        occurrences.length
      ) {

        currentReturnTarget =
          "lemma";

        openVerse(
          occurrences[0]
        );

      }

    };


  area.appendChild(
    button
  );

}


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
        "corpus-token";


      if (
        selectedToken &&
        token.wordIndex ===
        selectedToken.wordIndex
      ) {

        span.classList.add(
          "active"
        );

      }


      span.textContent =
        token.rawText;


      span.onclick =
        function() {

          document
            .querySelectorAll(
              ".corpus-token.active"
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


          showVerseTokenDetail(
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


  if (
    selectedToken
  ) {

    showVerseTokenDetail(
      selectedToken
    );

  }

}


function showVerseTokenDetail(
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

    "<button id='verseLemmaOpen' class='secondary wide' type='button'>" +

    "进入这个 Lemma →"

    +

    "</button>" +

    "<button id='verseSpeak' class='primary wide' type='button'>" +

    "🔊 听这个词"

    +

    "</button>";


  $("verseLemmaOpen")
    .onclick =
    function() {

      currentReturnTarget =
        "verse";

      openLemma(
        token.lemma
      );

    };


  $("verseSpeak")
    .onclick =
    function() {

      speakText(
        token.word
      );

    };

}


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
        token.wordIndex ===
        selectedToken.wordIndex
      ) {

        span.classList.add(
          "active"
        );

      }


      span.textContent =
        token.rawText;


      span.onclick =
        function() {

          document
            .querySelectorAll(
              ".corpus-token.active"
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


          showGenericTokenDetail(
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

    showGenericTokenDetail(
      selectedToken,
      detailId
    );

  }

}


function showGenericTokenDetail(
  token,
  detailId
) {

  const box =
    $(detailId);


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
      "格",
      token.morph.case
    ) +

    tokenLine(
      "数",
      token.morph.number
    ) +

    "<button id='genericLemmaButton' class='secondary wide' type='button'>" +

    "进入 Lemma →"

    +

    "</button>";


  $("genericLemmaButton")
    .onclick =
    function() {

      currentReturnTarget =
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
VOCAB REVIEW
========================================================= */

function startVocabularyReview() {

  const learnedLessonNumbers =
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


  vocabReview =
    VOCABULARY.filter(
      function(item) {

        return learnedLessonNumbers.includes(
          item.lesson
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
      12
    );


  if (
    !vocabReview.length
  ) {

    alert(
      "请先完成至少一课教材课程。"
    );

    return;

  }


  vocabReviewIndex =
    0;


  go(
    "vocabReview"
  );


  renderVocabularyReview();

}


function renderVocabularyReview() {

  const counter =
    $("vocabCounter");


  const area =
    $("vocabArea");


  if (
    vocabReviewIndex >=
    vocabReview.length
  ) {

    counter.textContent =
      "复习完成";


    area.innerHTML =

      "<div class='success'>" +

      "<strong>✓ 今日教材词汇复习完成</strong>"

      +

      "</div>";


    return;

  }


  const item =
    vocabReview[
      vocabReviewIndex
    ];


  counter.textContent =

    "第 " +

    (
      vocabReviewIndex +
      1
    ) +

    " / " +

    vocabReview.length;


  area.innerHTML =
    "";


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "vocab-card";


  card.innerHTML =

    "<div class='eyebrow'>VOCABULARY RECALL</div>" +

    "<div class='vocab-word' style='text-align:center;margin:20px 0'>" +

    escapeHtml(
      item.word
    ) +

    "</div>" +

    "<button id='reviewSpeak' class='secondary wide' type='button'>" +

    "🔊 听发音"

    +

    "</button>" +

    "<div id='reviewOptions' class='training-options'></div>" +

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


  const options =
    buildVocabReviewOptions(
      item
    );


  options.forEach(
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


          $("reviewOptions")
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


          const correct =
            option ===
            item.gloss;


          if (
            correct
          ) {

            button.classList.add(
              "correct"
            );


            memory.correct++;


            $("reviewFeedback")
              .innerHTML =

              "<div class='success'>" +

              "✓ 正确"

              +

              "<button id='nextReviewWord' class='primary wide' type='button'>" +

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

              "<button id='nextReviewWord' class='primary wide' type='button'>" +

              "下一词 →"

              +

              "</button>" +

              "</div>";

          }


          memory.lastReviewed =
            new Date()
              .toISOString();


          saveState();


          $("nextReviewWord")
            .onclick =
            function() {

              vocabReviewIndex++;

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


function buildVocabReviewOptions(
  item
) {

  const wrong =
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
    )
    .map(
      function(other) {

        return other.gloss;

      }
    );


  return [

    item.gloss,

    ...wrong

  ]
    .sort(
      function() {

        return Math.random() -
          0.5;

      }
    );

}


/* =========================================================
LESSON REVIEW
========================================================= */

function renderLessonReview(
  area
) {

  const st =
    getLessonState(
      currentLessonIndex
    );


  area.innerHTML =

    "<div class='lesson-section'>" +

    "<h3>本课学习记录</h3>" +

    "<div class='record-summary'>" +

    recordLine(
      "教材学习",
      true
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
      "真实新约训练",
      st.corpus
    ) +

    "</div>" +

    "<div class='lesson-note' style='margin-top:13px'>" +

    "现在回到教材，整理本课最重要的知识。"

    +

    "</div>" +

    "</div>";


  $("lessonNextBtn")
    .textContent =
    "完成本课 →";


  $("lessonNextBtn")
    .onclick =
    function() {

      completeLesson();

    };


  st.review =
    true;


  saveState();

}


function recordLine(
  label,
  checked
) {

  return (

    "<div class='record-row'>" +

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


  /*
   * Completion Gate
   */

  const complete =
    st.practice &&
    st.vocabulary &&
    st.corpus &&
    st.review;


  if (
    !complete
  ) {

    alert(
      "本课仍未完成全部训练环节。"
    );

    currentLessonStep =
      0;

    renderLessonStep();

    return;

  }


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
    LESSONS.length -
    1
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

    showCourseComplete();

  }

}


function calculateLessonScore(
  st
) {

  let score =
    0;


  if (
    st.practice
  ) {

    score +=
      25;

  }


  if (
    st.vocabulary
  ) {

    score +=
      25;

  }


  if (
    st.corpus
  ) {

    score +=
      25;

  }


  if (
    st.review
  ) {

    score +=
      25;

  }


  return score;

}


function showCourseComplete() {

  $("lessonArea")
    .innerHTML =

    "<div class='lesson-section'>" +

    "<div class='success'>" +

    "<strong>🎉 初阶课程主线完成</strong>"

    +

    "<br><br>" +

    "Lesson 01–25 已完成。"

    +

    "<br><br>" +

    "下一阶段可以继续在同一教材架构下增加："

    +

    "<br><br>" +

    "Syntax → Clause → Discourse → Exegesis"

    +

    "</div>" +

    "</div>";


  $("lessonNextBtn")
    .textContent =
    "返回首页";


  $("lessonNextBtn")
    .onclick =
    goHome;

}


/* =========================================================
NAVIGATION
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
    4
  ) {

    currentLessonStep++;


    renderLessonStep();


    return;

  }


  completeLesson();

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
CORPUS RETURN
========================================================= */

function returnFromCorpus() {

  renderLessonHeader();

  renderLessonStep();

  go(
    "lesson"
  );

}


/* =========================================================
LEMMA RETURN
========================================================= */

function returnFromLemma() {

  if (
    currentReturnTarget ===
    "lesson"
  ) {

    renderLessonHeader();

    renderLessonVocabulary(
      $("lessonArea")
    );

    go(
      "lesson"
    );

    return;

  }


  if (
    currentReturnTarget ===
    "verse"
  ) {

    go(
      "verse"
    );

    return;

  }


  if (
    currentReturnTarget ===
    "corpus"
  ) {

    go(
      "corpus"
    );

    return;

  }


  goHome();

}


function returnFromVerse() {

  if (
    currentReturnTarget ===
    "lemma"
  ) {

    renderLemma();

    go(
      "lemma"
    );

    return;

  }


  if (
    currentReturnTarget ===
    "lesson"
  ) {

    renderLessonHeader();

    renderLessonStep();

    go(
      "lesson"
    );

    return;

  }


  go(
    "lemma"
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

window.loadAllCorpus =
  loadAllCorpus;


/* =========================================================
END
========================================================= */
