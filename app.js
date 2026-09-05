/* =========================================================
   GBRM V2.4
   TEXTBOOK DIGITAL LEARNING ENGINE

   核心原则：

   教材
      ↓
   一个知识点
      ↓
   一个短练习
      ↓
   少量教材词汇
      ↓
   1–3 个真实新约短例句
      ↓
   中文简明讲解
      ↓
   Morphology / Lemma
      ↓
   返回教材

   不追求：
   - 数据很多
   - 页面很多
   - 统计很多
   - 工具很多

   只追求：
   学会
========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  STATE_KEY:
    "GBRM_V24_STATE",

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
  ["Mk","马可福音","62-马可福音-morphgnt.txt"],
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

].map(function(item){

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
TEXTBOOK LESSON DATABASE

   课程逻辑根据教材主线建立。
========================================================= */

const LESSONS = [

  {
    n:1,
    group:"第一部分 · 引言",
    title:"希腊语",
    page:15,
    kind:"history",

    objective:
      "认识希腊语的历史，并知道为什么新约使用通用希腊文。",

    content:
      "先认识学习对象本身。新约时代广泛使用通用希腊文，因此学习希腊文能够帮助我们接近新约原文。",

    topics:[
      "希腊语历史",
      "通用希腊文",
      "新约语境"
    ],

    vocabulary:[]
  },


  {
    n:2,
    group:"第一部分 · 引言",
    title:"学习希腊文",
    page:17,
    kind:"study",

    objective:
      "建立学习目标、熟记、作业、时间、毅力与纪律。",

    content:
      "学习希腊文需要持续练习。目标不是一次掌握全部，而是每天学习一点，并不断复习。",

    topics:[
      "目标",
      "熟记",
      "时间",
      "毅力",
      "同伴",
      "纪律"
    ],

    vocabulary:[]
  },


  {
    n:3,
    group:"第一部分 · 引言",
    title:"字母与发音",
    page:21,
    kind:"alphabet",

    objective:
      "掌握二十四个字母、母音、双母音和气号。",

    content:
      "先建立字母与声音之间的稳定联系，再进入真正的单词阅读。",

    topics:[
      "24个字母",
      "母音",
      "双母音",
      "气号",
      "发音"
    ],

    vocabulary:[
      "λόγος",
      "θεός"
    ]
  },


  {
    n:4,
    group:"第一部分 · 引言",
    title:"标点符号与音节",
    page:28,
    kind:"syllable",

    objective:
      "认识标点、重音符，并能够分音节。",

    content:
      "开始注意希腊文的文字组织方式，让阅读不再停留在单个字母。",

    topics:[
      "标点",
      "重音",
      "音节"
    ],

    vocabulary:[]
  },


  {
    n:5,
    group:"第二部分 · 名词系统",
    title:"英文的名词简介",
    page:39,
    kind:"noun",

    objective:
      "建立性、数、格与格变式的基本概念。",

    content:
      "希腊文名词会根据它在句子中的作用发生形式变化。第一步是知道自己正在观察什么。",

    topics:[
      "性",
      "数",
      "格",
      "格变式"
    ],

    vocabulary:[
      "λόγος",
      "θεός",
      "κόσμος"
    ]
  },


  {
    n:6,
    group:"第二部分 · 名词系统",
    title:"主格与直接受格；定冠词",
    page:44,
    kind:"case",

    objective:
      "掌握主格、直接受格、定冠词与一致。",

    content:
      "开始通过词尾判断一个名词在句中的角色。",

    topics:[
      "主格",
      "直接受格",
      "定冠词",
      "一致"
    ],

    vocabulary:[
      "ἀγάπη",
      "αὐτός",
      "βασιλεία",
      "ἐν",
      "ὁ"
    ]
  },


  {
    n:7,
    group:"第二部分 · 名词系统",
    title:"所有格与间接受格",
    page:59,
    kind:"case2",

    objective:
      "掌握所有格和间接受格。",

    content:
      "继续认识名词之间的关系，并开始观察格在真实句子中的功能。",

    topics:[
      "所有格",
      "间接受格"
    ],

    vocabulary:[
      "οὐρανός",
      "οὗτος",
      "σύ",
      "υἱός"
    ]
  },


  {
    n:8,
    group:"第二部分 · 名词系统",
    title:"介词与 εἰμί",
    page:74,
    kind:"preposition",

    objective:
      "掌握常见介词和 εἰμί。",

    content:
      "开始观察介词所建立的空间、关系和方向，并认识 εἰμί 的基本形式。",

    topics:[
      "介词",
      "介词受词",
      "介词短语",
      "εἰμί",
      "述词主格"
    ],

    vocabulary:[
      "ἀλλά",
      "ἀπό",
      "διά",
      "εἰμί",
      "ἐκ",
      "ἡμέρα",
      "Ἰωάννης",
      "λέγω"
    ]
  },


  {
    n:9,
    group:"第二部分 · 名词系统",
    title:"形容词",
    page:85,
    kind:"adjective",

    objective:
      "认识形容词与名词的关系，以及形容用法。",

    content:
      "观察形容词如何通过形式与所修饰的名词保持联系。",

    topics:[
      "一致",
      "形容用法",
      "叙述用法",
      "名词用法"
    ],

    vocabulary:[
      "ἀγαθός",
      "ἀγαπητός",
      "αἰώνιος",
      "δοῦλος",
      "ἐντολή",
      "πιστός"
    ]
  },


  {
    n:10,
    group:"第二部分 · 名词系统",
    title:"第三格变式名词",
    page:97,
    kind:"third",

    objective:
      "开始识别第三格变式名词。",

    content:
      "重点不是死背，而是学习观察词干、词尾和形式变化。",

    topics:[
      "第三格变式",
      "词干",
      "词尾"
    ],

    vocabulary:[
      "ἅγιος",
      "ὄνομα",
      "πᾶς",
      "σάρξ",
      "σῶμα",
      "τέκνον"
    ]
  },


  {
    n:11,
    group:"第二部分 · 名词系统",
    title:"第一与第二人称代名词",
    page:112,
    kind:"pronoun",

    objective:
      "掌握第一、第二人称代名词。",

    content:
      "学习我、你、我们、你们等代名词，并观察格、数、人称。",

    topics:[
      "第一人称",
      "第二人称",
      "格",
      "数",
      "人称"
    ],

    vocabulary:[
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
    ]
  },


  {
    n:12,
    group:"第二部分 · 名词系统",
    title:"αὐτός",
    page:123,
    kind:"autos",

    objective:
      "认识 αὐτός 的不同基本功能。",

    content:
      "不要把 αὐτός 只记成一个中文词，要观察它在句子里的具体作用。",

    topics:[
      "αὐτός",
      "第三人称",
      "强化",
      "自己",
      "同一"
    ],

    vocabulary:[
      "αὐτός",
      "αἰών",
      "διδάσκαλος",
      "μαθητής"
    ]
  },


  {
    n:13,
    group:"第二部分 · 名词系统",
    title:"指示代名词／形容词",
    page:131,
    kind:"demonstrative",

    objective:
      "学习指示词以及呼格。",

    content:
      "看到指示词时，先问：它究竟指向谁、什么或哪一个对象？",

    topics:[
      "οὗτος",
      "ἐκεῖνος",
      "指示词",
      "呼格"
    ],

    vocabulary:[
      "οὗτος",
      "ἐκεῖνος",
      "γυνή",
      "δικαιοσύνη",
      "μέγας",
      "πολύς",
      "τηρέω"
    ]
  },


  {
    n:14,
    group:"第二部分 · 名词系统",
    title:"关系代名词",
    page:140,
    kind:"relative",

    objective:
      "认识关系代名词和关系子句。",

    content:
      "开始观察句子如何连接信息，并学习从关系子句判断代名词的功能。",

    topics:[
      "关系代名词",
      "先行词",
      "关系子句",
      "格"
    ],

    vocabulary:[
      "ἀλήθεια",
      "εἰρήνη",
      "ἐπαγγελία",
      "θρόνος",
      "Ἰερουσαλήμ",
      "ὁδός",
      "ὅς"
    ]
  },


  {
    n:15,
    group:"第三部分 · 动词系统",
    title:"动词简介",
    page:148,
    kind:"verb",

    objective:
      "建立动词分析框架。",

    content:
      "学习从一个完整词形中寻找人称、数、时态、语态和语气。",

    topics:[
      "人称",
      "数",
      "时态",
      "语态",
      "语气",
      "字干"
    ],

    vocabulary:[
      "ἀκούω",
      "βλέπω",
      "ἔχω",
      "λύω",
      "νόμος",
      "πιστεύω",
      "χαρά"
    ]
  },


  {
    n:16,
    group:"第三部分 · 动词系统",
    title:"现在式主动语态直说语气",
    page:158,
    kind:"present",

    objective:
      "掌握现在式主动直说语气。",

    content:
      "现在进入真正的动词形态训练：先找形式，再判断人称和数。",

    topics:[
      "现在式",
      "主动",
      "直说",
      "连接母音",
      "人称字尾"
    ],

    vocabulary:[
      "ἀκούω",
      "βλέπω",
      "ἔχω",
      "λύω",
      "νόμος",
      "πιστεύω",
      "χαρά"
    ]
  },


  {
    n:17,
    group:"第三部分 · 动词系统",
    title:"缩略动词",
    page:168,
    kind:"contract",

    objective:
      "认识缩略动词。",

    content:
      "学习词典形为什么和实际出现的词形不完全一样。",

    topics:[
      "αω",
      "εω",
      "οω",
      "缩略"
    ],

    vocabulary:[
      "ἀγαπάω",
      "ζητέω",
      "καλέω",
      "λαλέω",
      "οἶδα",
      "πληρόω",
      "ποιέω"
    ]
  },


  {
    n:18,
    group:"第三部分 · 动词系统",
    title:"现在式关身／被动语态",
    page:178,
    kind:"mp",

    objective:
      "认识现在式关身／被动形式。",

    content:
      "先识别词形，再通过上下文判断具体功能。",

    topics:[
      "关身",
      "被动",
      "现在式",
      "直说"
    ],

    vocabulary:[
      "ἀποκρίνομαι",
      "δεῖ",
      "δύναμαι",
      "ἔρχομαι",
      "τόπος"
    ]
  },


  {
    n:19,
    group:"第三部分 · 动词系统",
    title:"未来式主动／关身语态",
    page:188,
    kind:"future",

    objective:
      "认识未来式主动与关身形式。",

    content:
      "认识未来式的主要形式特征，并开始在真实经文中辨认。",

    topics:[
      "未来式",
      "σ",
      "主动",
      "关身"
    ],

    vocabulary:[
      "βασιλεύς",
      "γεννάω",
      "ζάω",
      "Ἰουδαία",
      "Ἰουδαῖος",
      "Ἰσραήλ",
      "καρπός",
      "προσκυνέω"
    ]
  },


  {
    n:20,
    group:"第三部分 · 动词系统",
    title:"动词字根；未来式其他字形",
    page:201,
    kind:"stems",

    objective:
      "认识字根、现在式字干与时态字干。",

    content:
      "学习不同形式为什么可能使用不同字干。",

    topics:[
      "字根",
      "字干",
      "时态字干",
      "流音动词"
    ],

    vocabulary:[
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
    ]
  },


  {
    n:21,
    group:"第三部分 · 动词系统",
    title:"不完成式",
    page:218,
    kind:"imperfect",

    objective:
      "认识未完成式以及过去中的持续观点。",

    content:
      "学习过去时间中的连续、重复或进行中的动作。",

    topics:[
      "未完成式",
      "往昔号",
      "连续观点"
    ],

    vocabulary:[
      "ἦν"
    ]
  },


  {
    n:22,
    group:"第三部分 · 动词系统",
    title:"第二不定过去式",
    page:222,
    kind:"aorist",

    objective:
      "认识第二不定过去式和第二字干。",

    content:
      "开始区分第二不定过去式与其他过去形式。",

    topics:[
      "第二不定过去式",
      "第二字干",
      "未界定观点"
    ],

    vocabulary:[
      "ἀποστέλλω",
      "βαίνω",
      "γίνομαι",
      "δίδωμι",
      "φεύγω"
    ]
  },


  {
    n:23,
    group:"第三部分 · 动词系统",
    title:"第一不定过去式",
    page:232,
    kind:"aorist",

    objective:
      "认识第一不定过去式。",

    content:
      "观察第一不定过去式的形式，并和已经学过的形式进行比较。",

    topics:[
      "第一不定过去式",
      "σα",
      "主动",
      "关身"
    ],

    vocabulary:[
      "λύω",
      "ποιέω"
    ]
  },


  {
    n:24,
    group:"第三部分 · 动词系统",
    title:"不定过去式与未来式被动",
    page:243,
    kind:"passive",

    objective:
      "认识被动形式。",

    content:
      "先判断词形，再判断动作关系，不急于解释神学意义。",

    topics:[
      "被动",
      "未来式被动",
      "不定过去式被动",
      "θη"
    ],

    vocabulary:[
      "λαμβάνω",
      "λύω"
    ]
  },


  {
    n:25,
    group:"第三部分 · 动词系统",
    title:"现在完成式",
    page:256,
    kind:"perfect",

    objective:
      "认识完成式的基本构成。",

    content:
      "观察完成式的重复号和词形，并开始理解过去动作与现在结果之间的关系。",

    topics:[
      "完成式",
      "重复号",
      "κα",
      "主动",
      "关身／被动"
    ],

    vocabulary:[
      "γινώσκω",
      "ποιέω",
      "πιστεύω"
    ]
  }

];


/* =========================================================
VOCABULARY DATABASE
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
  [4,"Ἀβραάμ","亚伯拉罕",73],
  [4,"Δαυίδ","大卫",59],
  [4,"Παῦλος","保罗",158],
  [4,"Πέτρος","彼得",156],
  [4,"Πιλᾶτος","彼拉多",55],
  [4,"Σίμων","西门",75],

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
  [11,"ὧδε","在这里",61],

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

].map(function(item){

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
REAL TRAINING EXPLANATIONS

   这里不是展示全部 Corpus。
   而是为教材学习提供短而精的中文解释。
========================================================= */

const TRAINING_GUIDES = {

  noun: {

    title:
      "名词",

    explanation:
      "先不要急着翻译。看到名词时，先观察它的词尾，再判断它的性、数和格。",

    task:
      "找出句中的名词，并观察它在句子中的作用。"

  },


  case: {

    title:
      "主格与受格",

    explanation:
      "主格通常和主语有关；受格通常和直接受词有关。第一步是看形式，第二步才判断句中的功能。",

    task:
      "看看这个名词是动作的参与者，还是动作所指向的对象。"

  },


  case2: {

    title:
      "所有格与间接受格",

    explanation:
      "不要只背一个中文名称。先问：这个名词与另一个词是什么关系？",

    task:
      "观察这个名词是在表达所属，还是表达间接对象。"

  },


  preposition: {

    title:
      "介词",

    explanation:
      "介词会把两个成分连接起来。看介词以后，马上去看它所带的名词。",

    task:
      "找出介词，再找出它带的名词。"

  },


  adjective: {

    title:
      "形容词",

    explanation:
      "形容词通常会在性、数、格上与它所修饰的名词保持一致。",

    task:
      "找出形容词，并观察它与哪个名词保持一致。"

  },


  pronoun: {

    title:
      "代名词",

    explanation:
      "代名词不是独立存在的。先确定它指谁，再观察它的格、数和人称。",

    task:
      "找到代名词，并问：它指向谁？"

  },


  autos: {

    title:
      "αὐτός",

    explanation:
      "αὐτός 在不同句子中可以承担不同功能，因此不要固定成一个中文词。",

    task:
      "先看上下文，再决定 αὐτός 在这里起什么作用。"

  },


  demonstrative: {

    title:
      "指示词",

    explanation:
      "指示词的重点不是翻译，而是指涉。先找到它所指向的对象。",

    task:
      "找到这个、那个等指示词，并找出它指向的对象。"

  },


  relative: {

    title:
      "关系代名词",

    explanation:
      "关系代名词把信息连接起来。它在关系子句中的格，取决于它在这个子句中所承担的功能。",

    task:
      "先找到关系词，再找出它连接的对象。"

  },


  verb: {

    title:
      "动词",

    explanation:
      "面对一个动词，先不要翻译。先问：谁在做？什么时候？以什么语态？是什么语气？",

    task:
      "尝试从一个完整词形中找出基本形态信息。"

  },


  present: {

    title:
      "现在式主动直说",

    explanation:
      "先识别现在式，再确认主动语态和直说语气，最后判断人称和数。",

    task:
      "看到一个动词，尝试说出：现在式？主动？直说？谁在做？"

  },


  contract: {

    title:
      "缩略动词",

    explanation:
      "教材中的词典形和经文中的实际词形可能不同。不要因此认为它是另一个词。",

    task:
      "把实际词形和词典形联系起来。"

  },


  mp: {

    title:
      "关身／被动",

    explanation:
      "先识别形式，再结合上下文判断。不要看到形式就立即决定唯一中文意思。",

    task:
      "先回答：这个动作与主词是什么关系？"

  },


  future: {

    title:
      "未来式",

    explanation:
      "未来式有比较明显的形式特征。先认出形式，再观察其人称和数。",

    task:
      "在经文中找出未来式形式。"

  },


  stems: {

    title:
      "动词字根与字干",

    explanation:
      "一个词可能在不同语法形式中改变字干。认识字干可以减少机械背诵。",

    task:
      "找出词典形与实际形式之间的联系。"

  },


  imperfect: {

    title:
      "未完成式",

    explanation:
      "未完成式帮助读者看到过去时间中的持续、进行或重复动作。",

    task:
      "先确认这是过去时间，再观察动作是否带有持续或进行的特点。"

  },


  aorist: {

    title:
      "不定过去式",

    explanation:
      "先把它看作一种语法形式，不要直接把它等同于某一种中文时态。",

    task:
      "先识别词形，再观察上下文中的动作。"

  },


  passive: {

    title:
      "被动语态",

    explanation:
      "被动语态特别需要注意主词与动作之间的关系：主词通常是接受动作的一方。",

    task:
      "找出谁接受了这个动作。"

  },


  perfect: {

    title:
      "完成式",

    explanation:
      "完成式常把已经发生的动作和现在仍然存在的结果联系起来。先认识形式，再观察上下文。",

    task:
      "看看过去发生的事情是否产生了持续到现在的结果。"

  },


  intro: {

    title:
      "基础学习",

    explanation:
      "不要追求一次学完。先掌握一个小概念，再通过重复建立稳定记忆。",

    task:
      "说出今天最重要的一件事。"

  },

  history: {
    title:
      "希腊语背景",

    explanation:
      "这一课主要建立背景知识，不需要把大量历史资料记下来。先知道为什么新约希腊文值得学习。",

    task:
      "用一句话说明学习新约希腊文的意义。"

  },

  study: {
    title:
      "学习方法",

    explanation:
      "基础阶段最重要的是持续。每天一点点，比一次学习很多更容易建立长期能力。",

    task:
      "确认自己知道今天要完成哪一小步。"

  },

  alphabet: {
    title:
      "字母与发音",

    explanation:
      "先把字母认熟，再逐渐把字母、声音和单词连接起来。",

    task:
      "看到希腊字母时，先尝试读出来。"

  },

  syllable: {
    title:
      "音节",

    explanation:
      "音节帮助你把一个陌生词拆开来读，不必一次记住整个词。",

    task:
      "尝试把一个希腊单词分成音节。"

  }

};


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
  0;


let currentCorpusTokens =
  [];


let currentCorpusIndex =
  0;


let currentLemma =
  "";


let currentReturn =
  "lesson";


let vocabularyReview =
  [];


let vocabularyReviewIndex =
  0;


/* =========================================================
CORPUS MEMORY
========================================================= */

const corpus = {

  books:{},

  tokens:[],

  verses:{},

  lemmas:{},

  loading:{},

  loaded:0

};


/* =========================================================
DOM READY
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function(){

    bindEvents();

    renderHome();

  }
);


/* =========================================================
BASIC HELPERS
========================================================= */

function $(
  id
){

  return document.getElementById(
    id
  );

}


function escapeHtml(
  value
){

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
){

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


function saveState(){

  try{

    localStorage.setItem(

      CONFIG.STATE_KEY,

      JSON.stringify(
        state
      )

    );

  }

  catch(
    error
  ){

    console.warn(
      "GBRM state save:",
      error
    );

  }

}


function loadState(){

  try{

    const raw =
      localStorage.getItem(
        CONFIG.STATE_KEY
      );


    if(
      raw
    ){

      return JSON.parse(
        raw
      );

    }

  }

  catch(
    error
  ){

    console.warn(
      "GBRM state load:",
      error
    );

  }


  return {

    currentLesson:0,

    lessons:{},

    vocab:{}

  };

}


/* =========================================================
NAVIGATION
========================================================= */

function go(
  screenId
){

  document
    .querySelectorAll(
      ".screen"
    )
    .forEach(
      function(
        screen
      ){

        screen.classList.remove(
          "active"
        );

      }
    );


  const target =
    $(
      screenId
    );


  if(
    target
  ){

    target.classList.add(
      "active"
    );

  }


  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

}


/* =========================================================
EVENTS
========================================================= */

function bindEvents(){

  $("lessonBack").onclick =
    goHome;


  $("lessonPrevious").onclick =
    previousStep;


  $("lessonNext").onclick =
    nextStep;


  $("vocabReviewBack").onclick =
    goHome;


  $("startVocabularyReview").onclick =
    startVocabularyReview;


  $("corpusBack").onclick =
    returnFromCorpus;


  $("lemmaBack").onclick =
    returnFromLemma;


  $("verseBack").onclick =
    returnFromVerse;


  $("verseLemmaButton").onclick =
    returnFromVerse;


  $("loadCorpusButton").onclick =
    loadAllCorpus;

}


/* =========================================================
HOME
========================================================= */

function goHome(){

  renderHome();

  go(
    "home"
  );

}


function renderHome(){

  renderCourseProgress();

  renderContinue();

  renderLessonList();

  renderCorpusStatus();

}


function renderCourseProgress(){

  let completed =
    0;


  TEXTBOOK_LESSONS.forEach(
    function(
      lesson,
      index
    ){

      if(
        getLessonState(
          index
        ).completed
      ){

        completed++;

      }

    }
  );


  const percent =
    Math.round(
      completed /
      TEXTBOOK_LESSONS.length *
      100
    );


  $("coursePercent")
    .textContent =
    percent +
    "%";


  $("courseProgress")
    .style.width =
    percent +
    "%";

}


/* =========================================================
CONTINUE
========================================================= */

function renderContinue(){

  const area =
    $("continueArea");


  const lesson =
    TEXTBOOK_LESSONS[
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

      "<button id='continueLesson' class='primary wide continue-button' type='button'>" +

        (
          st.completed
            ? "重新学习"
            : "继续学习"
        ) +

        " →" +

      "</button>" +

    "</div>";


  $("continueLesson").onclick =
    function(){

      openLesson(
        currentLessonIndex
      );

    };

}


/* =========================================================
LESSON LIST
========================================================= */

function renderLessonList(){

  const box =
    $("lessonList");


  box.innerHTML =
    "";


  let currentGroup =
    "";


  TEXTBOOK_LESSONS.forEach(
    function(
      lesson,
      index
    ){

      const st =
        getLessonState(
          index
        );


      if(
        currentGroup !==
        lesson.group
      ){

        const group =
          document.createElement(
            "div"
          );


        group.className =
          "lesson-group";


        group.textContent =
          lesson.group;


        box.appendChild(
          group
        );


        currentGroup =
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


      if(
        index ===
        currentLessonIndex
      ){

        button.classList.add(
          "current"
        );

      }


      if(
        st.completed
      ){

        button.classList.add(
          "completed"
        );

      }


      button.innerHTML =

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
        function(){

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
){

  const key =
    "L" +
    TEXTBOOK_LESSONS[
      index
    ].n;


  if(
    !state.lessons[key]
  ){

    state.lessons[key] = {

      completed:false,

      content:false,

      practice:false,

      vocabulary:false,

      corpus:false,

      review:false,

      attempts:0,

      correct:0,

      corpusReviewed:0,

      weak:[],

      updatedAt:null

    };

  }


  return state.lessons[key];

}


/* =========================================================
OPEN LESSON
========================================================= */

function openLesson(
  index
){

  if(
    !TEXTBOOK_LESSONS[index]
  ){

    return;

  }


  currentLessonIndex =
    index;


  currentStep =
    0;


  currentCorpusTokens =
    [];


  currentCorpusIndex =
    0;


  state.currentLesson =
    index;


  saveState();


  renderLesson();

  go(
    "lesson"
  );

}


/* =========================================================
LESSON RENDER
========================================================= */

function renderLesson(){

  const lesson =
    TEXTBOOK_LESSONS[
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


  $("lessonHeader")
    .innerHTML =

      "<div class='lesson-number'>" +

        "L" +
        String(
          lesson.n
        ).padStart(
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


function renderLessonStep(){

  const area =
    $("lessonArea");


  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  area.innerHTML =
    "";


  const percent =
    Math.round(
      currentStep /
      4 *
      100
    );


  $("lessonStepText")
    .textContent =

      "第 " +
      (
        currentStep + 1
      ) +
      " 步 / 5";


  $("lessonStepProgress")
    .style.width =

      (
        currentStep === 4
          ? 100
          : percent
      ) +
      "%";


  if(
    currentStep === 0
  ){

    renderTextbookContent(
      area,
      lesson,
      st
    );

  }

  else if(
    currentStep === 1
  ){

    renderPractice(
      area,
      lesson,
      st
    );

  }

  else if(
    currentStep === 2
  ){

    renderVocabulary(
      area,
      lesson,
      st
    );

  }

  else if(
    currentStep === 3
  ){

    renderCorpusGateway(
      area,
      lesson
    );

  }

  else{

    renderLessonReview(
      area,
      lesson,
      st
    );

  }


  $("lessonNext")
    .textContent =

      currentStep === 0
        ? "进入练习 →"

        : currentStep === 1
          ? "进入词汇 →"

          : currentStep === 2
            ? "进入原文 →"

            : currentStep === 3
              ? "开始原文训练"

              : "完成本课 →";

}


/* =========================================================
TEXTBOOK CONTENT
========================================================= */

function renderTextbookContent(
  area,
  lesson,
  st
){

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

    "</div>" +

    "<h3>本课重点</h3>";


  lesson.topics.forEach(
    function(
      topic
    ){

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "grammar-card";


      row.innerHTML =

        "<div class='grammar-term'>" +

          escapeHtml(
            topic
          ) +

        "</div>";


      section.appendChild(
        row
      );

    }
  );


  const guide =
    TRAINING_GUIDES[
      lesson.kind
    ]
    ||
    TRAINING_GUIDES.intro;


  section.innerHTML +=

    "<div class='training-explanation'>" +

      "<div class='training-explanation-title'>" +

        "LEARNING METHOD" +

      "</div>" +

      "<div class='training-explanation-text'>" +

        escapeHtml(
          guide.explanation
        ) +

      "</div>" +

    "</div>";


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

function getPractice(
  lesson
){

  const data = {

    3:{
      q:"希腊文共有多少个字母？",
      o:["24","26","20"],
      a:0
    },

    4:{
      q:"希腊文问号使用哪个符号？",
      o:[";","?",":"],
      a:0
    },

    5:{
      q:"希腊文名词需要特别观察什么？",
      o:["性、数、格","时态、语态","只有中文"],
      a:0
    },

    6:{
      q:"τὸν θεόν 是什么格？",
      o:["受格","主格","所有格"],
      a:0
    },

    7:{
      q:"τοῦ θεοῦ 是什么格？",
      o:["所有格","主格","受格"],
      a:0
    },

    8:{
      q:"εἰμί 的基本意义是什么？",
      o:["是 / 存在","看见","听见"],
      a:0
    },

    9:{
      q:"形容词通常与名词在哪些方面一致？",
      o:["性、数、格","时态、语态","只有性"],
      a:0
    },

    10:{
      q:"第三格变式需要首先观察什么？",
      o:["词干和词尾","中文长度","章节编号"],
      a:0
    },

    11:{
      q:"ἐγώ 的基本意义是什么？",
      o:["我","你","我们"],
      a:0
    },

    12:{
      q:"αὐτός 为什么要结合上下文？",
      o:["因为功能可能变化","因为没有意义","因为不是希腊文"],
      a:0
    },

    13:{
      q:"指示词首先应该观察什么？",
      o:["它具体指向什么","中文有几个字","词频高不高"],
      a:0
    },

    14:{
      q:"关系代名词的格主要由什么决定？",
      o:["它在关系子句中的功能","中文翻译","章节编号"],
      a:0
    },

    15:{
      q:"分析动词时应该观察什么？",
      o:["人称、数、时态、语态、语气","只有中文","只有时态"],
      a:0
    },

    16:{
      q:"λύομεν 是什么人称和数？",
      o:["第一人称复数","第二人称单数","第三人称复数"],
      a:0
    },

    17:{
      q:"ἀγαπῶ 与 ἀγαπάω 是什么关系？",
      o:["缩略形式与词典形式","两个不同动词","名词与形容词"],
      a:0
    },

    18:{
      q:"关身／被动需要结合什么判断？",
      o:["上下文","中文长度","章节号"],
      a:0
    },

    19:{
      q:"未来式常见形式标记是什么？",
      o:["σ","θη","μαι"],
      a:0
    },

    20:{
      q:"为什么要学习动词字干？",
      o:["帮助识别不同形式","因为动词没有变化","只用于名词"],
      a:0
    },

    21:{
      q:"未完成式帮助我们看到什么？",
      o:["过去中的持续或重复","只有未来","只有身份"],
      a:0
    },

    22:{
      q:"第二不定过去式的重要观察点是什么？",
      o:["第二字干","未来式 σ","冠词"],
      a:0
    },

    23:{
      q:"第一不定过去式常见的形式标记是什么？",
      o:["σα","θη","ουσι"],
      a:0
    },

    24:{
      q:"被动语态中主词通常怎样？",
      o:["接受动作","发起动作","没有动作"],
      a:0
    },

    25:{
      q:"完成式帮助我们观察什么？",
      o:["过去动作与现在结果的联系","只有未来","只有过去"],
      a:0
    }

  };


  return data[
    lesson.n
  ]
  ||
  {

    q:"今天学到的重点是什么？",

    o:[
      "教材中的核心知识",
      "没有重点",
      "只背中文"
    ],

    a:0

  };

}


function renderPractice(
  area,
  lesson,
  st
){

  const data =
    getPractice(
      lesson
    );


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>教材练习</h3>" +

    "<div class='practice-card'>" +

      "<div class='practice-question'>" +

        escapeHtml(
          data.q
        ) +

      "</div>" +

      "<div id='practiceOptions' class='practice-options'></div>" +

      "<div id='practiceFeedback'></div>" +

    "</div>";


  area.appendChild(
    section
  );


  data.o.forEach(
    function(
      option,
      index
    ){

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.textContent =
        option;


      button.onclick =
        function(){

          st.attempts++;


          if(
            index ===
            data.a
          ){

            st.correct++;

            st.practice =
              true;


            button.classList.add(
              "correct"
            );


            document
              .querySelectorAll(
                "#practiceOptions button"
              )
              .forEach(
                function(
                  btn
                ){

                  btn.disabled =
                    true;

                }
              );


            $("practiceFeedback")
              .innerHTML =

                "<div class='success'>" +

                  "✓ 很好，继续。"

                +

                "</div>";


            saveState();

          }

          else{

            button.classList.add(
              "wrong"
            );


            if(
              !st.weak.includes(
                data.q
              )
            ){

              st.weak.push(
                data.q
              );

            }


            $("practiceFeedback")
              .innerHTML =

                "<div class='notice-box'>" +

                  "再看一次教材，然后再试。"

                +

                "</div>";


            setTimeout(
              function(){

                button.classList.remove(
                  "wrong"
                );

              },
              450
            );


            saveState();

          }

        };


      $("practiceOptions")
        .appendChild(
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
){

  return VOCABULARY.filter(
    function(
      item
    ){

      return (
        item.lesson ===
        lessonNumber
      );

    }
  );

}


function getVocabState(
  word
){

  if(
    !state.vocab[word]
  ){

    state.vocab[word] = {

      seen:0,

      remembered:0,

      wrong:0,

      lastReviewed:null

    };

  }


  return state.vocab[word];

}


function renderVocabulary(
  area,
  lesson,
  st
){

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

      "先认识。"

      +

      "<br>" +

      "不用一次全部记住。"

    +

    "</p>" +

    "<div id='lessonVocabGrid' class='vocab-grid'></div>";


  area.appendChild(
    section
  );


  const grid =
    $("lessonVocabGrid");


  if(
    !list.length
  ){

    grid.innerHTML =

      "<div class='notice-box'>" +

        "本课暂时没有接入词汇。"

      +

      "</div>";

  }


  list.forEach(
    function(
      item
    ){

      grid.appendChild(
        createVocabularyCard(
          item
        )
      );

    }
  );


  st.vocabulary =
    true;


  saveState();

}


function createVocabularyCard(
  item
){

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

        "🔊" +

      "</button>" +

    "</div>" +

    "<div class='vocab-gloss'>" +

      escapeHtml(
        item.gloss
      ) +

    "</div>" +

    "<div class='vocab-actions'>" +

      "<button class='vocab-lemma' type='button'>" +

        "看原文"

      +

      "</button>" +

      "<button class='vocab-memory' type='button'>" +

        "我记住了"

      +

      "</button>" +

    "</div>" +

    "<span class='vocab-status'>" +

      vocabularyStatus(
        memory
      ) +

    "</span>";


  card
    .querySelector(
      ".vocab-speak"
    )
    .onclick =
      function(){

        speakText(
          item.word
        );

      };


  card
    .querySelector(
      ".vocab-memory"
    )
    .onclick =
      function(){

        memory.remembered++;

        memory.seen++;


        memory.lastReviewed =
          new Date()
            .toISOString();


        card
          .querySelector(
            ".vocab-status"
          )
          .textContent =
            vocabularyStatus(
              memory
            );


        saveState();

      };


  card
    .querySelector(
      ".vocab-lemma"
    )
    .onclick =
      function(){

        currentReturn =
          "lesson";


        openLemma(
          item.word
        );

      };


  return card;

}


function vocabularyStatus(
  memory
){

  if(
    memory.remembered >=
    4
  ){

    return "比较稳定";

  }


  if(
    memory.remembered > 0
  ){

    return "学习中";

  }


  return "第一次见";

}


/* =========================================================
CORPUS GATEWAY
========================================================= */

function renderCorpusGateway(
  area,
  lesson
){

  const guide =
    TRAINING_GUIDES[
      lesson.kind
    ]
    ||
    TRAINING_GUIDES.intro;


  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>进入真实新约</h3>" +

      "<p>" +

        "现在把今天学的内容放到真实经文里。"

      +

      "</p>" +

      "<div class='training-task'>" +

        "<strong>" +

          "今天只做一个任务"

        +

        "</strong>" +

        escapeHtml(
          guide.task
        ) +

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

async function startLessonCorpusTraining(){

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


function selectLessonCorpusTokens(){

  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


  const vocabKeys =
    getLessonVocabulary(
      lesson.n
    )
    .map(
      function(
        item
      ){

        return normalize(
          item.word
        );

      }
    );


  /*
   * 第一层：
   * 只找教材词汇
   */

  let candidates =
    corpus.tokens.filter(
      function(
        token
      ){

        return vocabKeys.includes(
          normalize(
            token.lemma
          )
        );

      }
    );


  /*
   * 如果当前教材词汇没有足够实例，
   * 再根据当前课程语法找非常少量例句。
   */

  if(
    candidates.length <
    3
  ){

    candidates =
      candidates.concat(

        corpus.tokens.filter(
          function(
            token
          ){

            return matchLessonKind(
              token,
              lesson.kind
            );

          }
        )

      );

  }


  /*
   * 每节只保留少量真实经文。
   */

  const verses =
    new Map();


  candidates.forEach(
    function(
      token
    ){

      if(
        !verses.has(
          token.verseKey
        )
      ){

        verses.set(
          token.verseKey,
          token
        );

      }

    }
  );


  return Array.from(
    verses.values()
  )
  .sort(
    function(
      a,
      b
    ){

      const av =
        vocabKeys.includes(
          normalize(
            a.lemma
          )
        );


      const bv =
        vocabKeys.includes(
          normalize(
            b.lemma
          )
        );


      if(
        av !==
        bv
      ){

        return av
          ? -1
          : 1;

      }


      return (

        a.bookName +
        String(
          a.chapter
        ).padStart(
          3,
          "0"
        ) +
        String(
          a.verse
        ).padStart(
          3,
          "0"
        )

      )
      .localeCompare(

        b.bookName +
        String(
          b.chapter
        ).padStart(
          3,
          "0"
        ) +
        String(
          b.verse
        ).padStart(
          3,
          "0"
        )

      );

    }
  )
  .slice(
    0,
    3
  );

}


function matchLessonKind(
  token,
  kind
){

  const pos =
    decodePOS(
      token.pos
    );


  if(
    kind ===
    "present"
  ){

    return (

      token.morph.tense ===
      "现在式" &&

      token.morph.voice ===
      "主动" &&

      token.morph.mood ===
      "直说"

    );

  }


  if(
    kind ===
    "future"
  ){

    return (
      token.morph.tense ===
      "未来式"
    );

  }


  if(
    kind ===
    "imperfect"
  ){

    return (
      token.morph.tense ===
      "未完成式"
    );

  }


  if(
    kind ===
    "aorist"
  ){

    return (
      token.morph.tense ===
      "不定过去式"
    );

  }


  if(
    kind ===
    "perfect"
  ){

    return (
      token.morph.tense ===
      "完成式"
    );

  }


  if(
    kind ===
    "passive"
  ){

    return (
      token.morph.voice ===
      "被动"
    );

  }


  if(
    kind ===
    "noun" ||
    kind ===
    "third"
  ){

    return (
      pos ===
      "名词"
    );

  }


  if(
    kind ===
    "adjective"
  ){

    return (
      pos ===
      "形容词"
    );

  }


  if(
    [
      "pronoun",
      "autos",
      "relative",
      "demonstrative"
    ]
    .includes(
      kind
    )
  ){

    return (
      pos ===
      "代词"
    );

  }


  return false;

}


/* =========================================================
CORPUS DISPLAY
========================================================= */

function renderCorpusTraining(){

  const area =
    $("corpusArea");


  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


  const guide =
    TRAINING_GUIDES[
      lesson.kind
    ]
    ||
    TRAINING_GUIDES.intro;


  $("corpusLabel")
    .textContent =

      "LESSON " +
      String(
        lesson.n
      ).padStart(
        2,
        "0"
      ) +
      " · REAL TEXT";


  $("corpusLessonTitle")
    .textContent =
    lesson.title;


  $("corpusLessonObjective")
    .textContent =
    lesson.objective;


  area.innerHTML =
    "";


  if(
    !currentCorpusTokens.length
  ){

    area.innerHTML =

      "<div class='notice-box'>" +

        "<strong>暂时没有找到合适的短例句。</strong>" +

        "<br><br>" +

        "先完成教材学习。原文资料会在后续版本继续扩充。"

      +

      "</div>";


    finishCorpusStateOnly();

    return;

  }


  if(
    currentCorpusIndex >=
    currentCorpusTokens.length
  ){

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
    ]
    || [];


  const targetToken =
    seed;


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

    "<div id='shortCorpusText' class='corpus-greek'></div>" +

    "<div id='corpusTokenDetail'></div>";


  area.appendChild(
    card
  );


  renderShortPassage(
    tokens,
    targetToken
  );


  const explanation =
    document.createElement(
      "div"
    );


  explanation.className =
    "training-explanation";


  explanation.innerHTML =

    "<div class='training-explanation-title'>" +

      escapeHtml(
        guide.title
      ) +

    "</div>" +

    "<div class='training-explanation-text'>" +

      escapeHtml(
        guide.explanation
      ) +

    "</div>";


  area.appendChild(
    explanation
  );


  const task =
    document.createElement(
      "div"
    );


  task.className =
    "training-task";


  task.innerHTML =

    "<strong>" +

      "现在看一句"

    +

    "</strong>" +

    escapeHtml(
      guide.task
    );


  area.appendChild(
    task
  );


  const controls =
    document.createElement(
      "div"
    );


  controls.innerHTML =

    "<button id='showHint' class='secondary wide' type='button'>" +

      "显示中文提示"

    +

    "</button>" +

    "<button id='nextCorpus' class='primary wide' type='button'>" +

      (
        currentCorpusIndex + 1 <
        currentCorpusTokens.length

          ? "下一处 →"

          : "完成原文训练"

      ) +

    "</button>";


  area.appendChild(
    controls
  );


  $("showHint")
    .onclick =
      function(){

        showTrainingHint(
          seed,
          lesson,
          guide
        );

      };


  $("nextCorpus")
    .onclick =
      function(){

        const st =
          getLessonState(
            currentLessonIndex
          );


        st.corpusReviewed++;


        currentCorpusIndex++;


        saveState();


        renderCorpusTraining();

      };

}


function renderShortPassage(
  tokens,
  target
){

  const box =
    $("shortCorpusText");


  box.innerHTML =
    "";


  /*
   * 原文训练不显示整节很长的内容。
   * 只显示目标词附近的短范围。
   */

  let center =
    tokens.indexOf(
      target
    );


  if(
    center <
    0
  ){

    center =
      0;

  }


  const start =
    Math.max(
      0,
      center - 3
    );


  const end =
    Math.min(
      tokens.length,
      center + 4
    );


  tokens
    .slice(
      start,
      end
    )
    .forEach(
      function(
        token
      ){

        const span =
          document.createElement(
            "span"
          );


        span.className =
          "corpus-token";


        if(
          token.wordIndex ===
          target.wordIndex
        ){

          span.classList.add(
            "active"
          );

        }


        span.textContent =
          token.rawText;


        span.onclick =
          function(){

            document
              .querySelectorAll(
                "#shortCorpusText .corpus-token"
              )
              .forEach(
                function(
                  item
                ){

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
              "corpusTokenDetail"
            );

          };


        box.appendChild(
          span
        );


        box.appendChild(
          document.createTextNode(
            " "
          );

        }

      )
    );


  renderTokenDetail(
    target,
    "corpusTokenDetail"
  );

}


function showTrainingHint(
  token,
  lesson,
  guide
){

  const box =
    document.querySelector(
      "#corpusArea .training-task"
    );


  if(
    !box
  ){

    return;

  }


  box.innerHTML =

    "<strong>中文提示</strong>" +

    "<div class='training-answer'>" +

      escapeHtml(
        buildChineseHint(
          token,
          lesson
        )
      ) +

    "</div>";

}


function buildChineseHint(
  token,
  lesson
){

  const vocab =
    VOCABULARY.find(
      function(
        item
      ){

        return (
          normalize(
            item.word
          ) ===
          normalize(
            token.lemma
          )
        );

      }
    );


  const word =
    vocab
      ? vocab.gloss
      : token.lemma;


  if(
    lesson.kind ===
    "present"
  ){

    return (
      "目标词：" +
      word +
      "。重点观察它的现在式、主动语态、直说语气以及人称和数。"
    );

  }


  if(
    lesson.kind ===
    "noun"
  ){

    return (
      "目标词：" +
      word +
      "。重点观察它的性、数和格。"
    );

  }


  if(
    lesson.kind ===
    "adjective"
  ){

    return (
      "目标词：" +
      word +
      "。看看它与哪个名词保持一致。"
    );

  }


  if(
    lesson.kind ===
    "relative"
  ){

    return (
      "目标词：" +
      word +
      "。先找到它连接的信息，再观察它在关系子句中的功能。"
    );

  }


  return (
    "目标词：" +
    word +
    "。先观察词形，再回到上下文。"
  );

}


/* =========================================================
CORPUS FINISH
========================================================= */

function finishCorpusTraining(){

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

        "<strong>✓ 原文训练完成</strong>" +

        "<br><br>" +

        "现在回到本课，做最后回顾。" +

        "<button id='returnLesson' class='primary wide' type='button'>" +

          "回到本课 →" +

        "</button>" +

      "</div>";


  $("returnLesson")
    .onclick =
      function(){

        currentStep =
          4;


        saveState();


        renderLesson();

        go(
          "lesson"
        );

      };

}


function finishCorpusStateOnly(){

  const st =
    getLessonState(
      currentLessonIndex
    );


  st.corpus =
    true;


  saveState();

}


/* =========================================================
CORPUS LOAD
========================================================= */

async function loadPriorityCorpus(){

  for(
    const id of
    CONFIG.PRIORITY_BOOKS
  ){

    await loadBook(
      id
    );

  }

}


async function loadAllCorpus(){

  const button =
    $("loadCorpusButton");


  button.disabled =
    true;


  renderCorpusStatus(
    "正在加载新约原文……"
  );


  for(
    const book of
    BOOKS
  ){

    await loadBook(
      book.id
    );

  }


  button.disabled =
    false;


  renderCorpusStatus(
    "新约原文已准备好"
  );

}


async function loadBook(
  bookId
){

  if(
    corpus.books[
      bookId
    ]
  ){

    return true;

  }


  if(
    corpus.loading[
      bookId
    ]
  ){

    return corpus.loading[
      bookId
    ];

  }


  const book =
    BOOKS.find(
      function(
        item
      ){

        return (
          item.id ===
          bookId
        );

      }
    );


  if(
    !book
  ){

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
){

  try{

    renderCorpusStatus(
      "正在载入原文……"
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


    if(
      !response.ok
    ){

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

  catch(
    error
  ){

    console.warn(
      "GBRM Corpus:",
      error
    );


    renderCorpusStatus(
      "原文读取失败"
    );


    return false;

  }

}


function renderCorpusStatus(
  message
){

  if(
    $("corpusStatus")
  ){

    $("corpusStatus")
      .textContent =

        message

        ||

        (
          corpus.loaded ===
          0

            ? "尚未加载"

            : corpus.loaded ===
              BOOKS.length

              ? "新约原文已准备好"

              : "正在准备原文……"

        );

  }

}


/* =========================================================
MORPHGNT PARSER
========================================================= */

function parseMorphGNT(
  text,
  book
){

  const result =
    [];


  text
    .split(
      /\r?\n/
    )
    .forEach(
      function(
        line
      ){

        const value =
          line.trim();


        if(
          !value ||
          value.startsWith(
            "#"
          )
        ){

          return;

        }


        const parts =
          value.split(
            /\s+/
          );


        if(
          parts.length <
          7
        ){

          return;

        }


        const location =
          parts[0];


        if(
          location.length <
          6
        ){

          return;

        }


        const chapter =
          Number(
            location.slice(
              0,
              2
            )
          );


        const verse =
          Number(
            location.slice(
              2,
              4
            )
          );


        const wordIndex =
          Number(
            location.slice(
              4,
              6
            )
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

          pos:
            parts[1],

          parsing:
            parts[2],

          rawText:
            parts[3],

          word:
            parts[4],

          normalizedWord:
            parts[5],

          lemma:
            parts
              .slice(
                6
              )
              .join(
                " "
              ),

          morph:
            decodeParsing(
              parts[2]
            )

        });

      }
    );


  return result;

}


function addToken(
  token
){

  corpus.tokens.push(
    token
  );


  if(
    !corpus.verses[
      token.verseKey
    ]
  ){

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


  if(
    !corpus.lemmas[
      key
    ]
  ){

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
MORPHOLOGY
========================================================= */

function decodeParsing(
  code
){

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

      ({
        "1":"第一人称",
        "2":"第二人称",
        "3":"第三人称"
      })[
        c[0]
      ] || "",


    tense:

      ({
        P:"现在式",
        I:"未完成式",
        F:"未来式",
        A:"不定过去式",
        X:"完成式",
        Y:"过去完成式"
      })[
        c[1]
      ] || "",


    voice:

      ({
        A:"主动",
        M:"关身",
        P:"被动"
      })[
        c[2]
      ] || "",


    mood:

      ({
        I:"直说",
        D:"命令",
        S:"虚拟",
        O:"愿望",
        N:"不定词",
        P:"分词"
      })[
        c[3]
      ] || "",


    case:

      ({
        N:"主格",
        G:"所有格",
        D:"间接受格",
        A:"受格"
      })[
        c[4]
      ] || "",


    number:

      ({
        S:"单数",
        P:"复数"
      })[
        c[5]
      ] || "",


    gender:

      ({
        M:"阳性",
        F:"阴性",
        N:"中性"
      })[
        c[6]
      ] || ""

  };

}


function decodePOS(
  code
){

  const first =
    String(
      code ||
      ""
    )[0];


  return (

    {
      A:"形容词",
      C:"连接词",
      D:"副词",
      I:"感叹词",
      N:"名词",
      P:"介词",
      R:"代词",
      V:"动词",
      X:"语助词"
    }[
      first
    ]

    ||

    code

  );

}


/* =========================================================
TOKEN DETAIL
========================================================= */

function renderTokenDetail(
  token,
  detailId
){

  const box =
    $(
      detailId
    );


  if(
    !box
  ){

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

    "<button id='openTokenLemma' class='secondary wide' type='button'>" +

      "进一步看这个词 →"

    +

    "</button>";


  $("openTokenLemma")
    .onclick =
      function(){

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
){

  if(
    !value
  ){

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
){

  if(
    corpus.loaded ===
    0
  ){

    loadPriorityCorpus()
      .then(
        function(){

          openLemma(
            lemma
          );

        }
      );

    return;

  }


  const occurrences =
    corpus.lemmas[
      normalize(
        lemma
      )
    ] || [];


  if(
    !occurrences.length
  ){

    alert(
      "目前已经载入的原文中没有找到这个词。"
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


function renderLemma(){

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
    function(
      token
    ){

      forms[
        token.word
      ] =
        (
          forms[
            token.word
          ] ||
          0
        ) + 1;

    }
  );


  const entries =
    Object.entries(
      forms
    )
    .sort(
      function(
        a,
        b
      ){

        return b[1] -
          a[1];

      }
    );


  const vocab =
    VOCABULARY.find(
      function(
        item
      ){

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

    "<div class='lemma-hero'>" +

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

            : "教材暂未连接释义"

        ) +

      "</div>" +

      "<div class='lemma-help'>" +

        "这里可以看到这个词在真实新约中的不同词形。"

      +

      "</div>" +

    "</div>" +


    "<div class='card'>" +

      "<h3>常见词形</h3>" +

      "<div id='lemmaForms'></div>" +

    "</div>";


  entries
    .slice(
      0,
      20
    )
    .forEach(
      function(
        entry
      ){

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

            "点击查看真实经文"

          +

          "</div>";


        row.onclick =
          function(){

            const token =
              occurrences.find(
                function(
                  item
                ){

                  return (
                    item.word ===
                    entry[0]
                  );

                }
              );


            if(
              token
            ){

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
VERSE
========================================================= */

function openVerse(
  token
){

  const verse =
    corpus.verses[
      token.verseKey
    ];


  if(
    !verse
  ){

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
){

  $("verseReference")
    .textContent =
      tokens[0]
        ? tokens[0]
            .reference
        : "";


  const box =
    $("verseText");


  box.innerHTML =
    "";


  tokens.forEach(
    function(
      token
    ){

      const span =
        document.createElement(
          "span"
        );


      span.className =
        "corpus-token";


      if(
        selected &&
        token.wordIndex ===
        selected.wordIndex
      ){

        span.classList.add(
          "active"
        );

      }


      span.textContent =
        token.rawText;


      span.onclick =
        function(){

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


  if(
    selected
  ){

    renderTokenDetail(
      selected,
      "verseDetail"
    );

  }

}


/* =========================================================
LESSON REVIEW
========================================================= */

function renderLessonReview(
  area,
  lesson,
  st
){

  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>本课回顾</h3>" +

      "<p class='muted'>" +

        "不用打很多分，只确认自己已经走过这一课。"

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
        "本课词汇",
        st.vocabulary
      ) +

      recordLine(
        "真实新约",
        st.corpus
      ) +

      "<div class='training-task'>" +

        "<strong>最后问自己一个问题：</strong>" +

        "<br><br>" +

        escapeHtml(
          buildReviewQuestion(
            lesson
          )
        ) +

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


function buildReviewQuestion(
  lesson
){

  if(
    lesson.kind ===
    "noun"
  ){

    return "我能不能说出希腊文名词最基本的三个观察点？";

  }


  if(
    lesson.kind ===
    "present"
  ){

    return "我能不能看到一个动词时，先观察形式，而不是立即翻译？";

  }


  if(
    lesson.kind ===
    "perfect"
  ){

    return "我能不能认出完成式，并理解它与现在结果的联系？";

  }


  return (
    "我能不能用一句话说出本课最重要的知识？"
  );

}


function recordLine(
  label,
  checked
){

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
COMPLETE
========================================================= */

function completeLesson(){

  const st =
    getLessonState(
      currentLessonIndex
    );


  if(
    !st.content ||
    !st.practice ||
    !st.vocabulary ||
    !st.corpus ||
    !st.review
  ){

    alert(
      "请先完成本课全部步骤。"
    );

    return;

  }


  st.completed =
    true;


  st.updatedAt =
    new Date()
      .toISOString();


  saveState();


  showLessonComplete();

}


function showLessonComplete(){

  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


  $("lessonArea")
    .innerHTML =

      "<div class='lesson-section'>" +

        "<div class='success'>" +

          "<strong>✓ 今天的学习完成了</strong>" +

          "<br><br>" +

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

          "<br><br>" +

          "可以停在这里，也可以开始下一课。"

        +

        "</div>" +

        "<button id='nextLessonButton' class='primary wide' type='button'>" +

          (
            currentLessonIndex <
            TEXTBOOK_LESSONS.length - 1

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
      function(){

        if(
          currentLessonIndex <
          TEXTBOOK_LESSONS.length - 1
        ){

          openLesson(
            currentLessonIndex +
            1
          );

        }

        else{

          goHome();

        }

      };


  $("homeAfterLesson")
    .onclick =
      goHome;

}


/* =========================================================
LESSON NAVIGATION
========================================================= */

function nextStep(){

  const st =
    getLessonState(
      currentLessonIndex
    );


  if(
    currentStep ===
    1 &&
    !st.practice
  ){

    return;

  }


  if(
    currentStep ===
    3 &&
    !st.corpus
  ){

    startLessonCorpusTraining();

    return;

  }


  if(
    currentStep <
    4
  ){

    currentStep++;

    saveState();

    renderLessonStep();

  }

  else{

    completeLesson();

  }

}


function previousStep(){

  if(
    currentStep >
    0
  ){

    currentStep--;

    saveState();

    renderLessonStep();

  }

  else{

    goHome();

  }

}


/* =========================================================
VOCABULARY REVIEW
========================================================= */

function startVocabularyReview(){

  const learnedLessons =
    TEXTBOOK_LESSONS
      .filter(
        function(
          lesson,
          index
        ){

          return getLessonState(
            index
          ).completed;

        }
      )
      .map(
        function(
          lesson
        ){

          return lesson.n;

        }
      );


  vocabularyReview =
    VOCABULARY
      .filter(
        function(
          item
        ){

          return learnedLessons.includes(
            item.lesson
          );

        }
      )
      .slice()
      .sort(
        function(
          a,
          b
        ){

          return (
            getVocabState(
              a.word
            ).remembered -

            getVocabState(
              b.word
            ).remembered
          );

        }
      )
      .slice(
        0,
        10
      );


  if(
    !vocabularyReview.length
  ){

    alert(
      "先完成至少一课课程。"
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


function renderVocabularyReview(){

  const counter =
    $("vocabReviewCounter");


  const area =
    $("vocabReviewArea");


  if(
    vocabularyReviewIndex >=
    vocabularyReview.length
  ){

    counter.textContent =
      "复习完成";


    area.innerHTML =

      "<div class='success'>" +

        "<strong>✓ 今天复习完成</strong>" +

        "<br><br>" +

        "不用追求全部正确，重复本身就是学习。"

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

    "<div class='vocab-card'>" +

      "<div class='eyebrow'>RECALL</div>" +

      "<div class='vocab-word' style='text-align:center;margin:20px 0'>" +

        escapeHtml(
          item.word
        ) +

      "</div>" +

      "<button id='reviewSpeak' class='secondary wide' type='button'>" +

        "🔊 听发音" +

      "</button>" +

      "<div id='reviewOptions' class='practice-options'></div>" +

      "<div id='reviewFeedback'></div>" +

    "</div>";


  $("reviewSpeak")
    .onclick =
      function(){

        speakText(
          item.word
        );

      };


  buildReviewOptions(
    item
  ).forEach(
    function(
      option
    ){

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.textContent =
        option;


      button.onclick =
        function(){

          const memory =
            getVocabState(
              item.word
            );


          document
            .querySelectorAll(
              "#reviewOptions button"
            )
            .forEach(
              function(
                btn
              ){

                btn.disabled =
                  true;

              }
            );


          if(
            option ===
            item.gloss
          ){

            button.classList.add(
              "correct"
            );


            memory.remembered++;


            $("reviewFeedback")
              .innerHTML =

                "<div class='success'>" +

                  "✓ 很好" +

                  "<button id='nextVocab' class='primary wide' type='button'>" +

                    "下一词 →" +

                  "</button>" +

                "</div>";

          }

          else{

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

                    "下一词 →" +

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
              function(){

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
){

  const others =
    VOCABULARY
      .filter(
        function(
          other
        ){

          return (
            other.word !==
            item.word
          );

        }
      )
      .slice()
      .sort(
        function(){

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
      function(
        other
      ){

        return other.gloss;

      }
    )

  ]
  .sort(
    function(){

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
){

  if(
    !window.speechSynthesis
  ){

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
RETURN
========================================================= */

function returnFromCorpus(){

  renderLesson();

  go(
    "lesson"
  );

}


function returnFromLemma(){

  if(
    currentReturn ===
    "lesson"
  ){

    renderLesson();

    go(
      "lesson"
    );

    return;

  }


  if(
    currentReturn ===
    "corpus"
  ){

    go(
      "corpus"
    );

    return;

  }


  goHome();

}


function returnFromVerse(){

  if(
    currentReturn ===
    "lemma"
  ){

    renderLemma();

    go(
      "lemma"
    );

    return;

  }


  if(
    currentReturn ===
    "corpus"
  ){

    go(
      "corpus"
    );

    return;

  }


  go(
    "lemma"
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
