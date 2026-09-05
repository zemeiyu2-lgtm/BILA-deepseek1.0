/* =========================================================
   GBRM V2.3
   教材真实内容学习引擎

   核心：
   教材
     ↓
   学习
     ↓
   练习
     ↓
   词汇
     ↓
   真实新约
     ↓
   Morphology
     ↓
   Lemma
     ↓
   复习

   本版本：
   1. 教材主轴
   2. 真实新约作为训练场
   3. 基础阶段不过度复杂
   4. 学生不需要面对大量后台数据
========================================================= */


const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  STATE_KEY:
    "GBRM_V23_STATE",

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

].map(function(x){

  return {
    id:x[0],
    name:x[1],
    file:x[2]
  };

});



/* =========================================================
TEXTBOOK LESSONS

课程名称 + 页码依据教材目录。

教材完整正文不直接复制到网页，
这里保留课程逻辑、学习目标、主题结构。
========================================================= */

const TEXTBOOK_LESSONS = [

  {
    n:1,
    group:"第一部分 · 引言",
    title:"希腊语",
    page:15,
    kind:"history",
    objective:"认识希腊语的历史，以及它为何成为新约时代的重要语言。",
    content:"从希腊语的历史进入新约语境，先知道自己为什么学习这种语言。",
    topics:[
      "希腊语历史",
      "古典希腊文",
      "通用希腊文",
      "新约语境"
    ]
  },

  {
    n:2,
    group:"第一部分 · 引言",
    title:"学习希腊文",
    page:17,
    kind:"study",
    objective:"建立目标、熟记、时间、毅力、同伴学习与纪律。",
    content:"学习希腊文不是为了锻炼智力，而是为了更明白并更清楚地传扬神的话语。",
    topics:[
      "目标",
      "熟记",
      "作业",
      "时间与毅力",
      "同伴",
      "纪律"
    ]
  },

  {
    n:3,
    group:"第一部分 · 引言",
    title:"字母与发音",
    page:21,
    kind:"alphabet",
    objective:"掌握二十四个字母、母音、双母音和气号。",
    content:"先掌握字母，再进入发音、母音、双母音与气号。",
    topics:[
      "24个字母",
      "母音",
      "双母音",
      "气号",
      "发音"
    ]
  },

  {
    n:4,
    group:"第一部分 · 引言",
    title:"标点符号与音节",
    page:28,
    kind:"syllable",
    objective:"认识希腊文标点、重音符与分音节。",
    content:"认识标点与音节划分，并开始注意标点对解释的影响。",
    topics:[
      "四个标点符号",
      "三个重音符",
      "分音节",
      "罗马书9:5"
    ]
  },

  {
    n:5,
    group:"第二部分 · 名词系统",
    title:"英文的名词简介",
    page:39,
    kind:"noun",
    objective:"建立格、数、性与格变式的基本概念。",
    content:"先用英文文法理解格、数、性，再进入希腊文名词系统。",
    topics:[
      "格",
      "数",
      "性",
      "格变式",
      "屈折变化"
    ]
  },

  {
    n:6,
    group:"第二部分 · 名词系统",
    title:"主格与直接受格；定冠词",
    page:44,
    kind:"case",
    objective:"掌握主格、直接受格、定冠词与一致。",
    content:"开始利用词尾辨认格，并认识定冠词。",
    topics:[
      "主格",
      "直接受格",
      "定冠词",
      "一致",
      "名词规则1–2"
    ]
  },

  {
    n:7,
    group:"第二部分 · 名词系统",
    title:"所有格与间接受格",
    page:59,
    kind:"case2",
    objective:"掌握所有格、间接受格与相关名词规则。",
    content:"继续处理名词系统的基本格，并观察词与词之间的关系。",
    topics:[
      "所有格",
      "间接受格",
      "关键词",
      "名词规则4–6"
    ]
  },

  {
    n:8,
    group:"第二部分 · 名词系统",
    title:"介词与 εἰμί",
    page:74,
    kind:"preposition",
    objective:"掌握介词、介词受词、附属子句、εἰμί与述词主格。",
    content:"进入句子关系，并继续认识 εἰμί 与述词主格。",
    topics:[
      "介词",
      "介词受词",
      "介词短语",
      "附属子句",
      "εἰμί",
      "述词主格"
    ]
  },

  {
    n:9,
    group:"第二部分 · 名词系统",
    title:"形容词",
    page:85,
    kind:"adjective",
    objective:"认识形容用法、叙述用法和名词用法。",
    content:"根据冠词、位置与一致关系判断形容词的用法。",
    topics:[
      "三种用法",
      "一致",
      "三种性",
      "冠词位置"
    ]
  },

  {
    n:10,
    group:"第二部分 · 名词系统",
    title:"第三格变式名词",
    page:97,
    kind:"third",
    objective:"掌握第三格变式及相关词干、词尾和规则。",
    content:"开始处理第三格变式，并减少不必要的死背。",
    topics:[
      "第三格变式",
      "词干",
      "词尾",
      "塞音方块",
      "名词规则7–8"
    ]
  },

  {
    n:11,
    group:"第二部分 · 名词系统",
    title:"第一与第二人称代名词",
    page:112,
    kind:"pronoun",
    objective:"掌握第一、第二人称代名词，并观察格、数、人称。",
    content:"认识代名词形式与其句中功能。",
    topics:[
      "第一人称",
      "第二人称",
      "格",
      "数",
      "人称"
    ]
  },

  {
    n:12,
    group:"第二部分 · 名词系统",
    title:"αὐτός",
    page:123,
    kind:"autos",
    objective:"认识 αὐτός 的基本用法。",
    content:"在已经学习的名词系统基础上理解 αὐτός。",
    topics:[
      "αὐτός",
      "第三人称代词",
      "强化用法",
      "自己",
      "同一"
    ]
  },

  {
    n:13,
    group:"第二部分 · 名词系统",
    title:"指示代名词／形容词",
    page:131,
    kind:"demonstrative",
    objective:"学习指示词并认识呼格。",
    content:"观察指示词的指涉关系，并开始认识第五个格。",
    topics:[
      "οὗτος",
      "ἐκεῖνος",
      "指示代名词",
      "指示形容词",
      "呼格"
    ]
  },

  {
    n:14,
    group:"第二部分 · 名词系统",
    title:"关系代名词",
    page:140,
    kind:"relative",
    objective:"掌握关系代名词与关系子句。",
    content:"根据关系代名词在关系子句中的功能判断其格。",
    topics:[
      "关系代名词",
      "关系子句",
      "先行词",
      "格"
    ]
  },

  {
    n:15,
    group:"第三部分 · 直说语气动词系统",
    title:"动词简介",
    page:148,
    kind:"verb",
    objective:"建立人称、数、时态、时间、语态、语气与观点框架。",
    content:"先用英文理解动词，再进入希腊文。",
    topics:[
      "动词",
      "人称",
      "数",
      "时态",
      "时间",
      "语态",
      "语气",
      "观点",
      "字干",
      "连接母音",
      "人称字尾"
    ]
  },

  {
    n:16,
    group:"第三部分 · 直说语气动词系统",
    title:"现在式主动语态直说语气",
    page:158,
    kind:"present",
    objective:"掌握现在式主动直说语气。",
    content:"学习时态字干、连接母音与人称字尾。",
    topics:[
      "现在式",
      "主动语态",
      "直说语气",
      "连接母音",
      "人称字尾"
    ]
  },

  {
    n:17,
    group:"第三部分 · 直说语气动词系统",
    title:"缩略动词",
    page:168,
    kind:"contract",
    objective:"认识 αω、εω、οω 缩略与相关规则。",
    content:"先认识规则，再用规则理解实际词形。",
    topics:[
      "αω",
      "εω",
      "οω",
      "缩略",
      "五大规则"
    ]
  },

  {
    n:18,
    group:"第三部分 · 直说语气动词系统",
    title:"现在式关身／被动语态直说语气",
    page:178,
    kind:"mp",
    objective:"掌握现在式关身／被动形式。",
    content:"先识别形式，再逐渐学习关身语态的功能。",
    topics:[
      "关身",
      "被动",
      "人称字尾",
      "关身形主动意"
    ]
  },

  {
    n:19,
    group:"第三部分 · 直说语气动词系统",
    title:"未来式主动／关身语态直说语气",
    page:188,
    kind:"future",
    objective:"掌握未来式主动与关身语态。",
    content:"观察未来式和 sigma 的作用。",
    topics:[
      "未来式",
      "σ",
      "主动",
      "关身",
      "直说语气"
    ]
  },

  {
    n:20,
    group:"第三部分 · 直说语气动词系统",
    title:"动词字根；未来式的其他字形",
    page:201,
    kind:"stems",
    objective:"区分字根、现在式字干和时态字干。",
    content:"通过字根与流音动词减少死背。",
    topics:[
      "字根",
      "时态字干",
      "流音动词",
      "未来式",
      "塞音"
    ]
  },

  {
    n:21,
    group:"第三部分 · 直说语气动词系统",
    title:"不完成式",
    page:218,
    kind:"imperfect",
    objective:"认识过去时间中的连续或重复动作。",
    content:"学习未完成式的形式及连续观点。",
    topics:[
      "未完成式",
      "往昔号",
      "连续观点",
      "过去时间",
      "往昔人称字尾"
    ]
  },

  {
    n:22,
    group:"第三部分 · 直说语气动词系统",
    title:"第二不定过去式主动／关身语态直说语气",
    page:222,
    kind:"aorist2",
    objective:"掌握第二不定过去式与第二字干。",
    content:"比较不定过去式与未完成式，建立未界定观点意识。",
    topics:[
      "第二不定过去式",
      "第二字干",
      "往昔号",
      "未界定观点",
      "未完成式比较"
    ]
  },

  {
    n:23,
    group:"第三部分 · 直说语气动词系统",
    title:"第一不定过去式主动／关身语态直说语气",
    page:232,
    kind:"aorist1",
    objective:"掌握第一不定过去式主动／关身基本形式。",
    content:"认识第一不定过去式与第二不定过去式的形式差异。",
    topics:[
      "第一不定过去式",
      "σα",
      "主动",
      "关身"
    ]
  },

  {
    n:24,
    group:"第三部分 · 直说语气动词系统",
    title:"不定过去式与未来式被动语态直说语气",
    page:243,
    kind:"passive",
    objective:"掌握未来式被动与不定过去式被动。",
    content:"识别被动形式，并认识主词接受动作。",
    topics:[
      "未来式被动",
      "不定过去式被动",
      "θη",
      "θησ",
      "被动意义"
    ]
  },

  {
    n:25,
    group:"第三部分 · 直说语气动词系统",
    title:"现在完成式直说语气",
    page:256,
    kind:"perfect",
    objective:"认识现在完成式的构成与结果持续性。",
    content:"观察重复号、字干、κα 和人称字尾，并理解完成式的基本意义。",
    topics:[
      "现在完成式",
      "重复号",
      "κα",
      "主动",
      "关身／被动",
      "结果持续"
    ]
  }

];



/* =========================================================
VOCABULARY

来自本项目整理的教材词库。
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

].map(function(x){

  return {
    lesson:x[0],
    word:x[1],
    gloss:x[2],
    frequency:x[3]
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

  books:{},

  tokens:[],

  verses:{},

  lemmas:{},

  loading:{},

  loaded:0

};


/* =========================================================
HELPERS
========================================================= */

function $(id){

  return document.getElementById(
    id
  );

}


function escapeHtml(value){

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


function normalize(value){

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


function go(screenId){

  document
    .querySelectorAll(
      ".screen"
    )
    .forEach(function(
      screen
    ){

      screen.classList.remove(
        "active"
      );

    });


  const target =
    $(screenId);


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
STATE
========================================================= */

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
      "GBRM state load error:",
      error
    );

  }


  return {

    currentLesson:0,

    lessons:{},

    vocab:{}

  };

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
      "GBRM save error:",
      error
    );

  }

}


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


/* =========================================================
BIND
========================================================= */

function bindEvents(){

  if(
    $("lessonBack")
  ){
    $("lessonBack").onclick =
      goHome;
  }


  if(
    $("lessonPrevious")
  ){
    $("lessonPrevious").onclick =
      previousStep;
  }


  if(
    $("lessonNext")
  ){
    $("lessonNext").onclick =
      nextStep;
  }


  if(
    $("vocabReviewBack")
  ){
    $("vocabReviewBack").onclick =
      goHome;
  }


  if(
    $("startVocabularyReview")
  ){
    $("startVocabularyReview").onclick =
      startVocabularyReview;
  }


  if(
    $("corpusBack")
  ){
    $("corpusBack").onclick =
      returnFromCorpus;
  }


  if(
    $("lemmaBack")
  ){
    $("lemmaBack").onclick =
      returnFromLemma;
  }


  if(
    $("verseBack")
  ){
    $("verseBack").onclick =
      returnFromVerse;
  }


  if(
    $("verseLemmaButton")
  ){
    $("verseLemmaButton").onclick =
      returnFromVerse;
  }


  if(
    $("loadCorpusButton")
  ){
    $("loadCorpusButton").onclick =
      loadAllCorpus;
  }

}


/* =========================================================
HOME
========================================================= */

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


  $("completedCount")
    .textContent =
      completed;


  $("currentLessonDisplay")
    .textContent =
      "L" +
      String(
        currentLessonIndex + 1
      )
        .padStart(
          2,
          "0"
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


function renderContinue(){

  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  $("continueArea")
    .innerHTML =

    "<div class='continue-card'>" +

      "<div class='eyebrow'>" +

        (
          st.completed
            ? "REVIEW LESSON"
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

      "<button id='continueLesson' class='primary wide' type='button'>" +

        (
          st.completed
            ? "重新进入本课"
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


function renderLessonList(){

  const box =
    $("lessonList");


  box.innerHTML =
    "";


  let groupName =
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
        groupName !==
        lesson.group
      ){

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

            "p." +
            lesson.page +
            " · " +

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
LESSON
========================================================= */

function openLesson(
  index
){

  if(
    !TEXTBOOK_LESSONS[
      index
    ]
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

      "<div class='lesson-page'>" +

        "教材第 " +
        lesson.page +
        " 页" +

      "</div>" +

      "<div class='lesson-objective'>" +

        escapeHtml(
          lesson.objective
        ) +

      "</div>";


  renderLessonStep();

}


function renderLessonStep(){

  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  const area =
    $("lessonArea");


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

      "当前步骤 " +
      (
        currentStep + 1
      ) +
      " / 5";


  $("lessonStepProgress")
    .style.width =
      (
        currentStep === 4
          ? 100
          : percent
      ) +
      "%";


  $("lessonNext")
    .textContent =

      currentStep === 0
        ? "进入教材练习 →"
        : currentStep === 1
          ? "进入本课词汇 →"
          : currentStep === 2
            ? "进入真实新约 →"
            : currentStep === 3
              ? "进入本课回顾 →"
              : "完成本课 →";


  if(
    currentStep === 0
  ){

    renderTextbookStep(
      area,
      lesson,
      st
    );

  }

  else if(
    currentStep === 1
  ){

    renderPracticeStep(
      area,
      lesson,
      st
    );

  }

  else if(
    currentStep === 2
  ){

    renderVocabularyStep(
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

    renderReviewStep(
      area,
      lesson,
      st
    );

  }

}


/* =========================================================
TEXTBOOK
========================================================= */

function renderTextbookStep(
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

    "<h3>教材内容</h3>" +

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


    "<div class='source-structure'>" +

      [
        "解经亮光",
        "概要",
        "英文文法",
        "希腊文文法",
        "总结",
        "单字",
        "进阶资讯"

      ]
      .map(
        function(
          title
        ){

          return (

            "<div class='source-row'>" +

              "<strong>" +
                title +
              "</strong>" +

              "<small>" +

                "教材本课栏目 · 第 " +
                lesson.page +
                " 页起" +

              "</small>" +

            "</div>"

          );

        }
      )
      .join("")

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

    3:[
      "希腊文有多少个字母？",
      [
        "24",
        "26",
        "20"
      ],
      0
    ],

    4:[
      "希腊文问号使用什么符号？",
      [
        ";",
        "?",
        ":"
      ],
      0
    ],

    5:[
      "学习名词特别要观察什么？",
      [
        "性、数、格",
        "时态、语态",
        "只有中文"
      ],
      0
    ],

    6:[
      "τὸν θεόν 是什么格？",
      [
        "受格",
        "主格",
        "所有格"
      ],
      0
    ],

    7:[
      "τοῦ θεοῦ 是什么格？",
      [
        "所有格",
        "主格",
        "受格"
      ],
      0
    ],

    8:[
      "εἰμί 的核心意义是什么？",
      [
        "是 / 存在",
        "看见",
        "听见"
      ],
      0
    ],

    9:[
      "形容词通常与名词在哪些方面一致？",
      [
        "性、数、格",
        "时态、语态",
        "只有性"
      ],
      0
    ],

    10:[
      "第三格变式首先要注意什么？",
      [
        "词干和词尾",
        "中文长度",
        "章节编号"
      ],
      0
    ],

    11:[
      "ἐγώ 的基本意义是什么？",
      [
        "我",
        "你",
        "我们"
      ],
      0
    ],

    12:[
      "为什么 αὐτός 的功能要结合上下文？",
      [
        "因为功能可能变化",
        "因为没有意义",
        "因为不是希腊文"
      ],
      0
    ],

    13:[
      "指示词首先应该观察什么？",
      [
        "它具体指向什么",
        "中文有几个字",
        "词频高不高"
      ],
      0
    ],

    14:[
      "关系代名词的格主要由什么决定？",
      [
        "它在关系子句中的功能",
        "中文翻译",
        "章节编号"
      ],
      0
    ],

    15:[
      "分析希腊文动词应该观察什么？",
      [
        "人称、数、时态、语态、语气",
        "只有时态",
        "只有中文"
      ],
      0
    ],

    16:[
      "λύομεν 是什么人称和数？",
      [
        "第一人称复数",
        "第二人称单数",
        "第三人称复数"
      ],
      0
    ],

    17:[
      "ἀγαπῶ 与 ἀγαπάω 的关系是什么？",
      [
        "缩略形式与词典形式",
        "两个不同动词",
        "名词与形容词"
      ],
      0
    ],

    18:[
      "关身/被动形式最终要结合什么判断？",
      [
        "上下文",
        "中文长度",
        "章节编号"
      ],
      0
    ],

    19:[
      "未来式常见的时态特有记号是什么？",
      [
        "σ",
        "θη",
        "μαι"
      ],
      0
    ],

    20:[
      "为什么需要学习动词字根？",
      [
        "帮助识别不同字干并减少死背",
        "因为动词没有变化",
        "只用于名词"
      ],
      0
    ],

    21:[
      "未完成式主要帮助看到什么？",
      [
        "过去中的连续或重复动作",
        "只有未来",
        "只有身份"
      ],
      0
    ],

    22:[
      "第二不定过去式的重要观察点是什么？",
      [
        "第二字干与未界定观点",
        "未来式 σ",
        "冠词"
      ],
      0
    ],

    23:[
      "第一不定过去式常见标记是什么？",
      [
        "σα",
        "θη",
        "ουσι"
      ],
      0
    ],

    24:[
      "被动语态中主词怎样？",
      [
        "接受动作",
        "发起动作",
        "没有动作"
      ],
      0
    ],

    25:[
      "现在完成式主要强调什么？",
      [
        "过去动作产生持续到现在的结果",
        "只有未来",
        "只有过去"
      ],
      0
    ]

  };


  return data[
    lesson.n
  ] || [

    "本课学习是否完成？",
    [
      "是",
      "还没有"
    ],
    0

  ];

}


function renderPracticeStep(
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
          data[0]
        ) +

      "</div>" +

      "<div id='practiceOptions' class='practice-options'></div>" +

      "<div id='practiceFeedback'></div>" +

    "</div>";


  area.appendChild(
    section
  );


  data[1].forEach(
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
            data[2]
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

                "✓ 很好，继续。" +

                "</div>";


            saveState();

          }

          else{

            if(
              !st.weak.includes(
                data[0]
              )
            ){

              st.weak.push(
                data[0]
              );

            }


            button.classList.add(
              "wrong"
            );


            $("practiceFeedback")
              .innerHTML =

                "<div class='notice-box'>" +

                  "再看一次教材，然后再试。" +

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


function renderVocabularyStep(
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

      "第一次不要求全部记住。先认识，然后复习。" +

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

        "本课暂无词汇数据。" +

      "</div>";

  }


  list.forEach(
    function(
      vocab
    ){

      grid.appendChild(
        createVocabularyCard(
          vocab
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

    "<div class='vocab-frequency'>" +

      "教材频次：" +

      (
        item.frequency ||
        "—"
      ) +

    "</div>" +

    "<div class='vocab-actions'>" +

      "<button class='vocab-lemma' type='button'>" +

        "看原文中的词" +

      "</button>" +

      "<button class='vocab-memory' type='button'>" +

        "我记住了" +

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

  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>进入真实新约</h3>" +

      "<p>" +

        "把今天的教材知识带入真实经文。" +

        "<br>" +

        "先找出来，再分析。" +

      "</p>" +

      "<div class='lesson-target'>" +

        "<strong>本课重点</strong>" +

        "<br><br>" +

        escapeHtml(
          lesson.objective
        ) +

      "</div>" +

      "<button id='launchCorpus' class='primary wide' type='button'>" +

        "开始原文训练 →" +

      "</button>" +

    "</div>";


  $("launchCorpus")
    .onclick =
      startLessonCorpusTraining;

}


/* =========================================================
CORPUS SELECTION
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


  const keys =
    getLessonVocabulary(
      lesson.n
    )
    .map(
      function(item){

        return normalize(
          item.word
        );

      }
    );


  let candidates =
    corpus.tokens.filter(
      function(token){

        return keys.includes(
          normalize(
            token.lemma
          )
        );

      }
    );


  if(
    candidates.length <
    6
  ){

    candidates =
      candidates.concat(

        corpus.tokens.filter(
          function(token){

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
    function(token){

      if(
        !unique.has(
          token.verseKey
        )
      ){

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
      function(
        a,
        b
      ){

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
      6
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
    "aorist1" ||
    kind ===
    "aorist2"
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
    "noun"
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


  $("corpusLessonObjective")
    .textContent =
      lesson.objective;


  area.innerHTML =
    "";


  if(
    !currentCorpusTokens.length
  ){

    finishCorpusTraining();

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

    "<strong>观察顺序</strong>" +

    "<br><br>" +

    "找词形 → 看 Lemma → 看 Morphology → 回到上下文。" +

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

    currentCorpusIndex +
    1 <
    currentCorpusTokens.length

      ? "下一处 →"

      : "完成原文训练";


  button.onclick =
    function(){

      getLessonState(
        currentLessonIndex
      )
      .corpusReviewed++;


      currentCorpusIndex++;


      saveState();


      renderCorpusTraining();

    };


  area.appendChild(
    button
  );

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


  if(
    button
  ){

    button.disabled =
      true;

  }


  for(
    const book of
    BOOKS
  ){

    await loadBook(
      book.id
    );

  }


  if(
    button
  ){

    button.disabled =
      false;

  }


  renderCorpusStatus(
    "整个新约已经加载"
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
      function(item){

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

    $("corpusStatus")
      .textContent =

        "正在载入 " +
        book.name +
        "……";


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
      book.name +
      " 载入失败"
    );


    return false;

  }

}


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
  ]
  .push(
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
  ]
  .push(
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
CORPUS STATUS
========================================================= */

function renderCorpusStatus(
  message
){

  if(
    $("booksLoaded")
  ){

    $("booksLoaded")
      .textContent =
      corpus.loaded;

  }


  if(
    $("tokensLoaded")
  ){

    $("tokensLoaded")
      .textContent =
      corpus.tokens.length
        .toLocaleString();

  }


  if(
    $("lemmasLoaded")
  ){

    $("lemmasLoaded")
      .textContent =
      Object.keys(
        corpus.lemmas
      ).length
      .toLocaleString();

  }


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

            ? "进入课程后按需要加载"

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
TOKEN UI
========================================================= */

function renderCorpusTokens(
  tokens,
  containerId,
  detailId,
  selected
){

  const box =
    $(
      containerId
    );


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

          box
            .querySelectorAll(
              ".corpus-token"
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


  if(
    selected
  ){

    renderTokenDetail(
      selected,
      detailId
    );

  }

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

    tokenLine(
      "Parsing",
      token.parsing
    ) +

    "<button id='openTokenLemma' class='secondary wide' type='button'>" +

      "进入 Lemma →" +

    "</button>";


  $("openTokenLemma").onclick =
    function(){

      currentReturn =
        "corpus";


      openLemma(
        token.lemma
      );

    };

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
      "当前已载入的语料中没有找到这个 Lemma。请加载更多书卷。"
    );

    return;

  }


  currentLemma =
    occurrences[0]
      .lemma;


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

  const books =
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
          ] || 0
        ) + 1;


      books[
        token.bookName
      ] =
        (
          books[
            token.bookName
          ] || 0
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

        return b[1] - a[1];

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

      "<div class='lemma-stat-grid'>" +

        "<div class='lemma-stat'>" +

          "<strong>" +
            occurrences.length +
          "</strong>" +

          "<span>新约出现</span>" +

        "</div>" +

        "<div class='lemma-stat'>" +

          "<strong>" +
            entries.length +
          "</strong>" +

          "<span>词形变体</span>" +

        "</div>" +

        "<div class='lemma-stat'>" +

          "<strong>" +
            Object.keys(
              books
            ).length +
          "</strong>" +

          "<span>书卷</span>" +

        "</div>" +

      "</div>" +

    "</div>" +


    "<div class='card'>" +

      "<h3>学习提示</h3>" +

      "<p class='muted'>" +

        "这个 Lemma 是从教材学习对象进入原文网络的延伸，" +

        "不是另一套课程。" +

      "</p>" +

    "</div>" +


    "<div class='card'>" +

      "<h3>常见词形</h3>" +

      "<div id='lemmaForms'></div>" +

    "</div>";


  entries.forEach(
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

          "出现 " +
          entry[1] +
          " 次 · 查看真实经文" +

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
        selected.wordIndex ===
        token.wordIndex
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
REVIEW
========================================================= */

function renderReviewStep(
  area,
  lesson,
  st
){

  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>本课回顾</h3>" +

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

        "<strong>最后一步</strong>" +

        "<br><br>" +

        "回到教材，确认今天真正学会了什么。" +

        "<br>" +

        "不追求复杂评分。" +

      "</div>" +

      "<button id='finishLessonButton' class='primary wide' type='button'>" +

        "我完成了今天的学习" +

      "</button>" +

    "</div>";


  $("finishLessonButton").onclick =
    completeLesson;


  st.review =
    true;


  saveState();

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
      "先完成教材、练习、词汇、原文训练和回顾。"
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

          "不要急着赶下一课，可以以后回来复习。" +

        "</div>" +

        "<button id='nextLessonButton' class='primary wide' type='button'>" +

          (
            currentLessonIndex <
            TEXTBOOK_LESSONS.length -
            1

              ? "下一课 →"

              : "返回首页"
          ) +

        "</button>" +

        "<button id='homeAfterLesson' class='secondary wide' type='button'>" +

          "返回首页" +

        "</button>" +

      "</div>";


  $("nextLessonButton")
    .onclick =
      function(){

        if(
          currentLessonIndex <
          TEXTBOOK_LESSONS.length -
          1
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
NAVIGATION
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

        "不用追求全对，重复见到本身就是学习。" +

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

      "<div class='eyebrow'>" +

        "RECALL" +

      "</div>" +

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


          $("reviewOptions")
            .querySelectorAll(
              "button"
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


function goHome(){

  renderHome();

  go(
    "home"
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
INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function(){

    bindEvents();

    renderHome();

  }
);
