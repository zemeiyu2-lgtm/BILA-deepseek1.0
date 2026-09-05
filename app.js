/* =========================================================
   GBRM V2.3.3
   教材真实内容引擎

   冻结基础架构保留：
   教材 → 学习 → 练习 → 词汇 → 原文 → 复习

   本版只做必要修复：
   1. 第一界面直接显示课程选择
   2. currentLesson 做安全范围处理
   3. MorphGNT 位置码按 BBCCVV 解析
   4. MorphGNT POS 使用完整代码识别
   5. 原文显示保持短而集中
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

  PRIORITY_BOOKS:[
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

].map(
  function(item){

    return {

      id:item[0],

      name:item[1],

      file:item[2]

    };

  }
);


/* =========================================================
   教材课程
========================================================= */

const TEXTBOOK_LESSONS = [

  {
    n:1,
    group:"第一部分 · 引言",
    title:"希腊语",
    page:15,
    kind:"history",
    objective:"认识希腊语的历史，以及它为何成为新约时代的重要语言。",
    content:"本课从希腊语的历史进入新约语境，帮助学生先知道自己为什么要学习这种语言。",
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
    objective:"建立学习目标、熟记、时间、毅力与同伴学习的基本习惯。",
    content:"教材特别强调：学习希腊文不是为了锻炼智力，而是为了更明白并更清楚地传扬神的话语；同时要建立记忆与纪律。",
    topics:[
      "目标",
      "熟记",
      "作业",
      "时间",
      "毅力",
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
    objective:"掌握希腊文字母、母音、双母音和气号的基本识别与发音。",
    content:"教材要求先掌握二十四个字母，再进入发音、母音、双母音与气号。",
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
    objective:"认识希腊文标点、重音符以及分音节的方法。",
    content:"本课让学生认识希腊文标点与音节划分，并提醒标点可能影响经文解释。",
    topics:[
      "四个标点符号",
      "三个重音符",
      "分音节",
      "罗马书9:5的标点问题"
    ]
  },

  {
    n:5,
    group:"第二部分 · 名词系统",
    title:"英文的名词简介",
    page:39,
    kind:"noun",
    objective:"先用英文文法建立格、数、性与格变式的概念。",
    content:"教材先用英文解释格、数、性与格变式，再进入希腊文名词系统。",
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
    objective:"辨认第一、第二格变式，掌握主格、直接受格和定冠词。",
    content:"本课进入名词系统的核心训练：看词尾辨认格，并学习定冠词与名词的一致。教材同时用约翰福音1:1说明字序与身份判断。",
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
    objective:"掌握所有格、间接受格，以及名词规则4、5、6。",
    content:"教材继续处理两个主要的格，并介绍关键词的概念。",
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
    content:"本课从介词进入句子关系，并继续处理 εἰμί 与述词主格。",
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
    objective:"认识形容词的形容用法、叙述用法和名词用法，以及一致与性。",
    content:"教材指出形容词在神学与释经上都很重要，并训练学生根据冠词、位置与一致关系判断用法。",
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
    objective:"掌握第三格变式及相关词干、词尾和塞音方块规则。",
    content:"本课进入第三格变式，并训练学生利用规则而不是死背大量变化表。",
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
    objective:"掌握第一、第二人称代名词，并继续观察格、数、人称。",
    content:"教材说明代名词的格由句中功能决定，人称与数由先行词决定。",
    topics:[
      "第一人称",
      "第二人称",
      "格",
      "数",
      "人称",
      "第三格变式模式"
    ]
  },

  {
    n:12,
    group:"第二部分 · 名词系统",
    title:"αὐτός",
    page:123,
    kind:"autos",
    objective:"认识 αὐτός 的三种基本用法。",
    content:"教材把 αὐτός 当作已经学过的2-1-2形容词来处理，并在此基础上训练其三种用法。",
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
    objective:"学习“这个/那个”等指示词，并认识呼格。",
    content:"教材强调指示词既可作代名词，也可作形容词；本课同时介绍第五个格——呼格。",
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
    objective:"掌握关系代名词及其与先行词、关系子句的关系。",
    content:"本课完成名词系统的重要代词部分，并进一步训练根据句中功能判断关系代名词的格。",
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
    objective:"建立人称、数、时态、时间、语态、语气和观点的框架。",
    content:"教材先用英文解释动词，再进入希腊文。学生暂时不必背复杂词形，而是先理解动词分析的方法。",
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
    objective:"掌握现在式主动直说语气以及今将主动人称字尾。",
    content:"教材把现在式拆成时态字干、连接母音和人称字尾，并让学生学习真正的人称字尾。",
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
    objective:"认识 α、ε、ο 结尾字干的缩略及五大规则。",
    content:"教材强调先认识基本规则，再用这些规则理解缩略后的实际词形。",
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
    objective:"掌握现在式关身／被动语态的基本形式，并认识关身形主动意。",
    content:"教材暂时将所见到的关身形理解为主动意义，并把真正的关身语态留到后续深入处理。",
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
    objective:"掌握未来式主动与关身语态的基本形式。",
    content:"教材说明未来式通常表达未来动作，并介绍 sigma 的时态特有记号及相应的人称字尾。",
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
    objective:"区分字根、现在式字干和时态字干，并掌握流音动词未来式。",
    content:"教材强调学习字根可以减少死背例外的需要，并用流音动词说明未来式变化。",
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
    objective:"认识过去时间中的连续或重复动作，以及未完成式的构成。",
    content:"教材把未完成式和连续观点联系起来，并介绍往昔号、现在式字干、连接母音和往昔人称字尾。",
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
    objective:"掌握第二不定过去式的第二字干、构成与未界定观点。",
    content:"教材比较不定过去式与未完成式，特别强调不定过去式的未界定观点，并提醒不要过度解释时态。",
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
    objective:"掌握第一不定过去式主动／关身语态的基本词形。",
    content:"教材展示 ἔλυσα 与 ἐλυσάμην 等形式，并说明两类不定过去式意义相同但词形不同。",
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
    objective:"掌握未来式被动与不定过去式被动的构成及主动接受动作的意义。",
    content:"教材把被动语态形式与时态特有记号结合起来，并强调主词接受动作。",
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
    objective:"认识现在完成式的构成，以及过去动作产生持续到现在的结果。",
    content:"教材用重复号、字干、κα 与人称字尾说明现在完成式，并强调完成式所表达的结果持续性。",
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
   教材词汇
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
  [8,"λέγω","我说/告诉",2354],
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
  [13,"τηρέω","我保守/护卫/遵守",70],

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
  [14,"οὕτως","而/如此",215],
  [14,"χείρ","手/臂",177],
  [14,"ψυχή","魂/生命/自己",103],

  [16,"ἀκούω","我听见/学习",428],
  [16,"βλέπω","我看见/注视",133],
  [16,"ἔχω","我有/拿着",708],
  [16,"λύω","我解开/毁坏",42],
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

].map(
  function(item){

    return {

      lesson:item[0],

      word:item[1],

      gloss:item[2],

      frequency:item[3]

    };

  }
);


/* =========================================================
   STATE
========================================================= */

const state =
  loadState();


let currentLessonIndex =
  normalizeLessonIndex(
    state.currentLesson
  );


let currentStep =
  0;


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
   HELPERS
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


function normalizeLessonIndex(
  value
){

  const n =
    Number(
      value
    );


  if(
    !Number.isFinite(
      n
    )
  ){

    return 0;

  }


  if(
    n < 0
  ){

    return 0;

  }


  if(
    n >=
    TEXTBOOK_LESSONS.length
  ){

    return (
      TEXTBOOK_LESSONS.length - 1
    );

  }


  return Math.floor(
    n
  );

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
      function(screen){

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
    !target
  ){

    console.warn(
      "GBRM screen missing:",
      screenId
    );


    return false;

  }


  target.classList.add(
    "active"
  );


  window.scrollTo(
    0,
    0
  );


  return true;

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
      !raw
    ){

      return {

        currentLesson:0,

        lessons:{},

        vocab:{}

      };

    }


    const parsed =
      JSON.parse(
        raw
      );


    if(
      !parsed ||
      typeof parsed !==
      "object"
    ){

      return {

        currentLesson:0,

        lessons:{},

        vocab:{}

      };

    }


    return {

      currentLesson:
        normalizeLessonIndex(
          parsed.currentLesson
        ),

      lessons:
        (
          parsed.lessons &&
          typeof parsed.lessons ===
          "object"
        )
          ? parsed.lessons
          : {},

      vocab:
        (
          parsed.vocab &&
          typeof parsed.vocab ===
          "object"
        )
          ? parsed.vocab
          : {}

    };

  }
  catch(
    error
  ){

    console.warn(
      "GBRM state load error",
      error
    );


    return {

      currentLesson:0,

      lessons:{},

      vocab:{}

    };

  }

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
      "GBRM state save error",
      error
    );

  }

}


function lessonKey(
  index
){

  const safeIndex =
    normalizeLessonIndex(
      index
    );


  return (
    "L" +
    TEXTBOOK_LESSONS[
      safeIndex
    ].n
  );

}


function getLessonState(
  index
){

  const safeIndex =
    normalizeLessonIndex(
      index
    );


  const key =
    lessonKey(
      safeIndex
    );


  if(
    !state.lessons ||
    typeof state.lessons !==
    "object"
  ){

    state.lessons = {};

  }


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
    !state.vocab ||
    typeof state.vocab !==
    "object"
  ){

    state.vocab = {};

  }


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
   HOME
========================================================= */

function renderHome(){

  renderCourseProgress();

  renderContinue();

  renderLessonList();

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


  if(
    $("completedCount")
  ){

    $("completedCount")
      .textContent =
      completed;

  }


  if(
    $("currentLessonDisplay")
  ){

    $("currentLessonDisplay")
      .textContent =

      "L" +
      String(
        currentLessonIndex + 1
      ).padStart(
        2,
        "0"
      );

  }


  if(
    $("coursePercent")
  ){

    $("coursePercent")
      .textContent =
      percent +
      "%";

  }


  if(
    $("courseProgress")
  ){

    $("courseProgress")
      .style.width =
      percent +
      "%";

  }

}


function renderContinue(){

  const area =
    $("continueArea");


  if(
    !area
  ){

    return;

  }


  area.innerHTML =
    "";

}


/* =========================================================
   第一界面直接课程选择
========================================================= */

function renderLessonList(){

  const box =
    $("lessonList");


  if(
    !box
  ){

    return;

  }


  box.innerHTML =
    "";


  let groupName =
    "";


  TEXTBOOK_LESSONS.forEach(
    function(
      lesson,
      index
    ){

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
          lesson.group;


        box.appendChild(
          group
        );


        groupName =
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
                : "进入学习"
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
   OPEN LESSON
========================================================= */

function openLesson(
  index
){

  currentLessonIndex =
    normalizeLessonIndex(
      index
    );


  currentStep =
    0;


  currentPracticeIndex =
    0;


  currentCorpusTokens =
    [];


  currentCorpusIndex =
    0;


  currentReturn =
    "lesson";


  state.currentLesson =
    currentLessonIndex;


  saveState();


  renderLesson();


  go(
    "lesson"
  );

}


/* =========================================================
   RENDER LESSON
========================================================= */

function renderLesson(){

  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


  if(
    !lesson
  ){

    return;

  }


  if(
    $("lessonLabel")
  ){

    $("lessonLabel")
      .textContent =

      "LESSON " +
      String(
        lesson.n
      ).padStart(
        2,
        "0"
      );

  }


  if(
    $("lessonTitle")
  ){

    $("lessonTitle")
      .textContent =
      lesson.title;

  }


  if(
    $("lessonHeader")
  ){

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

  }


  renderLessonStep();

}


/* =========================================================
   STEP
========================================================= */

function renderLessonStep(){

  const area =
    $("lessonArea");


  if(
    !area
  ){

    return;

  }


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


  try{

    if(
      currentStep ===
      0
    ){

      renderTextbookStep(
        area,
        lesson,
        st
      );

    }
    else if(
      currentStep ===
      1
    ){

      renderPracticeStep(
        area,
        lesson,
        st
      );

    }
    else if(
      currentStep ===
      2
    ){

      renderVocabularyStep(
        area,
        lesson,
        st
      );

    }
    else if(
      currentStep ===
      3
    ){

      renderCorpusGateway(
        area,
        lesson,
        st
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
  catch(
    error
  ){

    console.error(
      "GBRM lesson step error:",
      error
    );


    area.innerHTML =

      "<div class='notice-box'>" +

        "<strong>这一部分暂时无法显示。</strong>" +

        "<button id='reloadLessonStep' class='secondary wide' type='button'>" +

          "重新加载"

        +

        "</button>" +

      "</div>";


    if(
      $("reloadLessonStep")
    ){

      $("reloadLessonStep")
        .onclick =
        renderLessonStep;

    }

  }


  if(
    $("lessonStepText")
  ){

    $("lessonStepText")
      .textContent =

      "当前步骤 " +
      (
        currentStep + 1
      ) +
      " / 5";

  }


  if(
    $("lessonStepProgress")
  ){

    $("lessonStepProgress")
      .style.width =

      (
        currentStep /
        4 *
        100
      ) +

      "%";

  }


  if(
    $("lessonPrevious")
  ){

    $("lessonPrevious")
      .disabled =
      currentStep ===
      0;

  }


  if(
    $("lessonNext")
  ){

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

}


/* =========================================================
   教材：一句话 + 内容
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

    "<h3>教材</h3>" +

    "<div class='lesson-content'>" +

      escapeHtml(
        lesson.content
      ) +

    "</div>" +

    "<div class='training-line'>" +

      "<strong>今天：</strong> " +

      escapeHtml(
        lesson.objective
      ) +

    "</div>";


  area.appendChild(
    section
  );


  st.content =
    true;


  saveState();

}


/* =========================================================
   练习
========================================================= */

function getPractice(
  lesson
){

  const bank = {

    history:[
      "新约希腊文学习首先需要什么？",
      [
        "知道它与新约原文阅读的关系",
        "马上学习复杂动词",
        "马上学习所有分词"
      ],
      0
    ],

    study:[
      "学习希腊文最需要什么？",
      [
        "持续、重复和练习",
        "只看教材",
        "一次全部记住"
      ],
      0
    ],

    alphabet:[
      "希腊文有多少个字母？",
      [
        "24",
        "26",
        "22"
      ],
      0
    ],

    syllable:[
      "希腊文问号使用哪个符号？",
      [
        ";",
        "?",
        ":"
      ],
      0
    ],

    noun:[
      "名词首先观察什么？",
      [
        "格、数、性",
        "时态、语态",
        "只有中文"
      ],
      0
    ],

    case:[
      "τὸν θεόν 中 θεόν 是什么格？",
      [
        "受格",
        "主格",
        "所有格"
      ],
      0
    ],

    case2:[
      "θεοῦ 最基本是哪一个格？",
      [
        "所有格",
        "主格",
        "受格"
      ],
      0
    ],

    preposition:[
      "介词首先应该和什么一起看？",
      [
        "它的受词",
        "下一课",
        "词频"
      ],
      0
    ],

    adjective:[
      "形容词要和名词观察什么？",
      [
        "性、数、格",
        "只有词义",
        "只有词尾长度"
      ],
      0
    ],

    third:[
      "第三格变式先看什么？",
      [
        "词干和词尾",
        "中文翻译",
        "词频"
      ],
      0
    ],

    pronoun:[
      "ἐγώ 的基本意义是什么？",
      [
        "我",
        "你",
        "我们"
      ],
      0
    ],

    autos:[
      "αὐτός 为什么需要结合上下文？",
      [
        "功能可能不同",
        "它没有意义",
        "它不是词"
      ],
      0
    ],

    demonstrative:[
      "指示词首先找什么？",
      [
        "它指向什么",
        "它的词频",
        "它的页码"
      ],
      0
    ],

    relative:[
      "关系代名词首先观察什么？",
      [
        "它连接什么信息",
        "中文长度",
        "词频"
      ],
      0
    ],

    verb:[
      "遇到动词先做什么？",
      [
        "观察形式",
        "立刻神学解释",
        "只翻译中文"
      ],
      0
    ],

    present:[
      "现在式主动直说要观察什么？",
      [
        "时态、语态、语气、人称、数",
        "只有时态",
        "只有中文"
      ],
      0
    ],

    contract:[
      "缩略动词最重要的学习动作是什么？",
      [
        "联系词典形与实际词形",
        "死背所有变化",
        "只记中文"
      ],
      0
    ],

    mp:[
      "关身／被动形式最终要结合什么？",
      [
        "上下文",
        "词频",
        "章节编号"
      ],
      0
    ],

    future:[
      "未来式先观察什么？",
      [
        "形式特征",
        "中文长度",
        "词频"
      ],
      0
    ],

    stems:[
      "为什么学习字根？",
      [
        "帮助识别不同词形",
        "因为所有词不变化",
        "只用于名词"
      ],
      0
    ],

    imperfect:[
      "未完成式帮助观察什么？",
      [
        "过去中的持续或重复",
        "只有未来",
        "只有身份"
      ],
      0
    ],

    aorist2:[
      "第二不定过去式要注意什么？",
      [
        "第二字干",
        "定冠词",
        "中文翻译"
      ],
      0
    ],

    aorist1:[
      "第一不定过去式首先要观察什么？",
      [
        "形式特征",
        "词频",
        "中文长度"
      ],
      0
    ],

    passive:[
      "被动语态重点看什么？",
      [
        "谁接受动作",
        "谁总是发出动作",
        "只有时间"
      ],
      0
    ],

    perfect:[
      "完成式重点观察什么？",
      [
        "过去动作与现在结果的联系",
        "只有未来",
        "只有过去"
      ],
      0
    ]

  };


  const item =
    bank[
      lesson.kind
    ] ||
    bank.study;


  return {

    question:item[0],

    options:item[1],

    answer:item[2]

  };

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


  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>练习</h3>" +

      "<div class='practice-card'>" +

        "<div class='practice-question'>" +

          escapeHtml(
            data.question
          ) +

        "</div>" +

        "<div id='practiceOptions' class='practice-options'></div>" +

        "<div id='practiceFeedback'></div>" +

      "</div>" +

    "</div>";


  data.options.forEach(
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
            data.answer
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
                  item
                ){

                  item.disabled =
                    true;

                }
              );


            $("practiceFeedback")
              .innerHTML =

              "<div class='success'>" +

                "✓ 正确。"

              +

              "</div>";


            saveState();


            setTimeout(
              function(){

                currentStep =
                  2;


                renderLessonStep();

              },
              250
            );

          }
          else{

            button.classList.add(
              "wrong"
            );


            if(
              !Array.isArray(
                st.weak
              )
            ){

              st.weak =
                [];

            }


            if(
              !st.weak.includes(
                data.question
              )
            ){

              st.weak.push(
                data.question
              );

            }


            $("practiceFeedback")
              .innerHTML =

              "<div class='notice-box'>" +

                "再看一次教材，然后重新尝试。"

              +

              "</div>";


            setTimeout(
              function(){

                button.classList.remove(
                  "wrong"
                );

              },
              500
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
   词汇
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


function vocabStatus(
  memory
){

  if(
    memory.remembered >=
    4
  ){

    return "比较稳定";

  }


  if(
    memory.remembered >
    0
  ){

    return "学习中";

  }


  return "第一次见";

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


  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>本课词汇</h3>" +

      "<p class='muted'>" +

        "先认识，再用闪卡主动回忆。"

      +

      "</p>" +

      "<div id='lessonVocabGrid' class='vocab-grid'></div>" +

    "</div>";


  const grid =
    $("lessonVocabGrid");


  if(
    !list.length
  ){

    grid.innerHTML =

      "<div class='notice-box'>" +

        "本课暂未接入独立词库。"

      +

      "</div>";

  }
  else{

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

  }


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

        "🔊"

      +

      "</button>" +

    "</div>" +

    "<div class='vocab-gloss'>" +

      escapeHtml(
        item.gloss
      ) +

    "</div>" +

    "<div class='vocab-actions'>" +

      "<button class='vocab-memory' type='button'>" +

        "记住了"

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

      memory.seen++;

      memory.remembered++;

      memory.lastReviewed =
        new Date()
          .toISOString();


      saveState();


      card
        .querySelector(
          ".vocab-status"
        )
        .textContent =
        vocabStatus(
          memory
        );

    };


  return card;

}


/* =========================================================
   闪卡复习
========================================================= */

function startVocabularyReview(){

  const learned =
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


  const currentLessonNumber =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ].n;


  const source =
    learned.length

      ? VOCABULARY.filter(
          function(
            item
          ){

            return learned.includes(
              item.lesson
            );

          }
        )

      : VOCABULARY.filter(
          function(
            item
          ){

            return (
              item.lesson ===
              currentLessonNumber
            );

          }
        );


  vocabularyReview =
    source
      .slice()
      .sort(
        function(
          a,
          b
        ){

          const aa =
            getVocabState(
              a.word
            );


          const bb =
            getVocabState(
              b.word
            );


          return (

            (
              aa.remembered -
              aa.wrong
            )

            -

            (
              bb.remembered -
              bb.wrong
            )

          );

        }
      )
      .slice(
        0,
        12
      );


  if(
    !vocabularyReview.length
  ){

    alert(
      "当前还没有可复习词汇。"
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
    !counter ||
    !area
  ){

    return;

  }


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

        "不熟的词会在以后再次出现。"

      +

      "</div>";


    return;

  }


  const item =
    vocabularyReview[
      vocabularyReviewIndex
    ];


  counter.textContent =

    "第 " +
    (
      vocabularyReviewIndex + 1
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
    "flashcard";


  card.innerHTML =

    "<div class='flashcard-word'>" +

      escapeHtml(
        item.word
      ) +

    "</div>" +

    "<div class='flashcard-hint'>" +

      "先自己想一想，再翻卡。"

    +

    "</div>" +

    "<button id='flashReveal' class='primary wide' type='button'>" +

      "显示答案"

    +

    "</button>";


  area.appendChild(
    card
  );


  $("flashReveal")
    .onclick =
    function(){

      showFlashcardAnswer(
        item
      );

    };

}


function showFlashcardAnswer(
  item
){

  const area =
    $("vocabReviewArea");


  if(
    !area
  ){

    return;

  }


  area.innerHTML =

    "<div class='flashcard flashcard-revealed'>" +

      "<div class='flashcard-word'>" +

        escapeHtml(
          item.word
        ) +

      "</div>" +

      "<div class='flashcard-answer'>" +

        escapeHtml(
          item.gloss
        ) +

      "</div>" +

      "<button id='flashSpeak' class='secondary wide' type='button'>" +

        "🔊 再听一次"

      +

      "</button>" +

      "<div class='flashcard-actions'>" +

        "<button id='flashNotSure' class='secondary' type='button'>" +

          "还不熟"

        +

        "</button>" +

        "<button id='flashKnow' class='primary' type='button'>" +

          "记住了"

        +

        "</button>" +

      "</div>" +

    "</div>";


  $("flashSpeak")
    .onclick =
    function(){

      speakText(
        item.word
      );

    };


  $("flashNotSure")
    .onclick =
    function(){

      rateFlashcard(
        item,
        false
      );

    };


  $("flashKnow")
    .onclick =
    function(){

      rateFlashcard(
        item,
        true
      );

    };

}


function rateFlashcard(
  item,
  remembered
){

  const memory =
    getVocabState(
      item.word
    );


  memory.seen++;


  if(
    remembered
  ){

    memory.remembered++;

  }
  else{

    memory.wrong++;

  }


  memory.lastReviewed =
    new Date()
      .toISOString();


  saveState();


  vocabularyReviewIndex++;


  renderVocabularyReview();

}


/* =========================================================
   原文入口
========================================================= */

function renderCorpusGateway(
  area,
  lesson,
  st
){

  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>真实新约</h3>" +

      "<p class='muted'>" +

        "把今天学的内容放进一小段真实经文。"

      +

      "</p>" +

      "<button id='launchCorpus' class='primary wide' type='button'>" +

        "进入原文 →"

      +

      "</button>" +

    "</div>";


  $("launchCorpus")
    .onclick =
    startLessonCorpusTraining;

}


/* =========================================================
   原文实例
========================================================= */

const CURATED_EXAMPLES = {

  6:{
    book:"Jn",
    chapter:1,
    verse:1,
    targetForm:"θεόν",
    targetLemma:"θεός",
    task:"找到 τὸν θεόν，观察词尾。",
    hint:"先看词尾，再判断功能。",
    explanation:"θεόν 是 θεός 的受格单数形式。"
  },

  7:{
    book:"Jn",
    chapter:1,
    verse:6,
    targetForm:"θεοῦ",
    targetLemma:"θεός",
    task:"找到 θεοῦ，然后和 θεός 比较。",
    hint:"只比较词尾。",
    explanation:"θεοῦ 来自 θεός，是所有格单数形式。"
  },

  8:{
    book:"Jn",
    chapter:1,
    verse:6,
    targetForm:"παρὰ",
    targetLemma:"παρά",
    task:"把 παρὰ 和它后面的词一起看。",
    hint:"先找到介词。",
    explanation:"παρὰ 与后面的词形成介词短语。"
  },

  9:{
    book:"Mt",
    chapter:12,
    verse:35,
    targetForm:"ἀγαθός",
    targetLemma:"ἀγαθός",
    task:"找到形容词，再找它所修饰的名词。",
    hint:"先找到描述性的词。",
    explanation:"形容词要和它所修饰的名词观察性、数、格的一致。"
  },

  10:{
    book:"Jn",
    chapter:1,
    verse:14,
    targetForm:"σάρξ",
    targetLemma:"σάρξ",
    task:"找到 σάρξ，注意它的形式。",
    hint:"先看词尾。",
    explanation:"σάρξ 是第三格变式名词；当前重点是认出形式。"
  },

  11:{
    book:"Jn",
    chapter:1,
    verse:23,
    targetForm:"ἐγώ",
    targetLemma:"ἐγώ",
    task:"找到 ἐγώ，问：谁在说话？",
    hint:"先想到说话的人自己。",
    explanation:"ἐγώ 是第一人称单数主格代名词。"
  },

  12:{
    book:"Mt",
    chapter:1,
    verse:23,
    targetForm:"αὐτοῦ",
    targetLemma:"αὐτός",
    task:"找到 αὐτοῦ，先判断它指向谁。",
    hint:"先找它所指的人。",
    explanation:"αὐτοῦ 来自 αὐτός；具体功能要结合上下文。"
  },

  13:{
    book:"Jn",
    chapter:1,
    verse:7,
    targetForm:"οὗτος",
    targetLemma:"οὗτος",
    task:"找到 οὗτος，问它指向谁。",
    hint:"先不要急着翻译。",
    explanation:"οὗτος 是指示代词。"
  },

  14:{
    book:"Jn",
    chapter:1,
    verse:30,
    targetForm:"ὃς",
    targetLemma:"ὅς",
    task:"找到关系词，看看它连接什么。",
    hint:"先找它前面的对象。",
    explanation:"ὃς 是关系代名词。"
  },

  15:{
    book:"Jn",
    chapter:1,
    verse:5,
    targetForm:"φαίνει",
    targetLemma:"φαίνω",
    task:"找出句中的动词。",
    hint:"找表达动作或状态的词。",
    explanation:"φαίνει 是动词；本课先建立动词分析顺序。"
  },

  16:{
    book:"Jn",
    chapter:1,
    verse:5,
    targetForm:"φαίνει",
    targetLemma:"φαίνω",
    task:"尝试判断 φαίνει 的形式。",
    hint:"现在式？主动？直说？",
    explanation:"φαίνει 是现在式、主动、直说、第三人称单数。"
  },

  17:{
    book:"1Th",
    chapter:1,
    verse:2,
    targetForm:"Εὐχαριστοῦμεν",
    targetLemma:"εὐχαριστέω",
    task:"观察实际词形和词典形的关系。",
    hint:"先找词典形。",
    explanation:"Εὐχαριστοῦμεν 来自 εὐχαριστέω，是缩略后的现在式主动直说。"
  },

  18:{
    book:"Jn",
    chapter:12,
    verse:23,
    targetForm:"ἀποκρίνεται",
    targetLemma:"ἀποκρίνομαι",
    task:"观察实际词形与词典形的差异。",
    hint:"先看词尾。",
    explanation:"ἀποκρίνεται 来自 ἀποκρίνομαι，是现在式关身／被动形式。"
  },

  19:{
    book:"Lk",
    chapter:15,
    verse:18,
    targetForm:"πορεύσομαι",
    targetLemma:"πορεύομαι",
    task:"找到未来式形式。",
    hint:"注意未来式的形式特征。",
    explanation:"πορεύσομαι 来自 πορεύομαι，是未来式关身第一人称单数。"
  },

  20:{
    book:"Jn",
    chapter:1,
    verse:15,
    targetForm:"γέγονεν",
    targetLemma:"γίνομαι",
    task:"把 γέγονεν 和词典形联系起来。",
    hint:"不要马上认为它是另一个词。",
    explanation:"不同词形可以使用不同字干；先学会建立联系。"
  },

  21:{
    book:"Jn",
    chapter:1,
    verse:1,
    targetForm:"ἦν",
    targetLemma:"εἰμί",
    task:"找到 ἦν，观察过去中的持续。",
    hint:"先认出过去。",
    explanation:"ἦν 来自 εἰμί，是未完成式主动直说第三人称单数。"
  },

  22:{
    book:"Jn",
    chapter:1,
    verse:14,
    targetForm:"ἐγένετο",
    targetLemma:"γίνομαι",
    task:"找到 ἐγένετο，观察它和词典形的差异。",
    hint:"先看字干。",
    explanation:"ἐγένετο 来自 γίνομαι，是第二不定过去式关身第三人称单数。"
  },

  23:{
    book:"Mt",
    chapter:3,
    verse:15,
    targetForm:"ἐποίησεν",
    targetLemma:"ποιέω",
    task:"找到过去形式并联系词典形。",
    hint:"先看形式。",
    explanation:"ἐποίησεν 来自 ποιέω，是第一不定过去式主动直说第三人称单数。"
  },

  24:{
    book:"Ro",
    chapter:6,
    verse:3,
    targetForm:"ἐβαπτίσθημεν",
    targetLemma:"βαπτίζω",
    task:"观察谁接受了动作。",
    hint:"问：谁接受动作？",
    explanation:"ἐβαπτίσθημεν 来自 βαπτίζω，是不定过去式被动第一人称复数。"
  },

  25:{
    book:"Jn",
    chapter:3,
    verse:18,
    targetForm:"κέκριται",
    targetLemma:"κρίνω",
    task:"观察过去动作和现在结果的联系。",
    hint:"想想结果现在还在不在。",
    explanation:"κέκριται 来自 κρίνω，是完成式被动直说第三人称单数。"
  }

};


/* =========================================================
   START CORPUS
========================================================= */

async function startLessonCorpusTraining(){

  currentCorpusTokens =
    [];


  currentCorpusIndex =
    0;


  go(
    "corpus"
  );


  const area =
    $("corpusArea");


  if(
    area
  ){

    area.innerHTML =

      "<div class='card'>" +

        "<h3>正在读取真实新约</h3>" +

        "<p class='muted'>请稍候……</p>" +

      "</div>";

  }


  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


  const example =
    CURATED_EXAMPLES[
      lesson.n
    ];


  if(
    !example
  ){

    finishCorpusTraining();


    return;

  }


  const ok =
    await loadBook(
      example.book
    );


  if(
    !ok
  ){

    if(
      area
    ){

      area.innerHTML =

        "<div class='notice-box'>" +

          "<strong>原文暂时无法读取。</strong>" +

          "<br><br>" +

          "课程本身没有问题，请检查网络后再试。" +

          "<button id='retryCorpus' class='secondary wide'>" +

            "重新读取"

          +

          "</button>" +

          "<button id='backCorpus' class='secondary wide'>" +

            "返回本课"

          +

          "</button>" +

        "</div>";

    }


    if(
      $("retryCorpus")
    ){

      $("retryCorpus")
        .onclick =
        startLessonCorpusTraining;

    }


    if(
      $("backCorpus")
    ){

      $("backCorpus")
        .onclick =
        returnFromCorpus;

    }


    return;

  }


  currentCorpusTokens =
    [example];


  renderCorpusTraining();

}


/* =========================================================
   CORPUS TRAINING
========================================================= */

function renderCorpusTraining(){

  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


  const example =
    currentCorpusTokens[
      currentCorpusIndex
    ];


  if(
    !example
  ){

    finishCorpusTraining();


    return;

  }


  const key =
    makeVerseKey(
      example.book,
      example.chapter,
      example.verse
    );


  const verse =
    corpus.verses[
      key
    ] || [];


  const area =
    $("corpusArea");


  if(
    !area
  ){

    return;

  }


  if(
    $("corpusLabel")
  ){

    $("corpusLabel")
      .textContent =

      "LESSON " +
      String(
        lesson.n
      ).padStart(
        2,
        "0"
      );

  }


  if(
    $("corpusLessonObjective")
  ){

    $("corpusLessonObjective")
      .textContent =
      "今天只观察教材刚刚学过的这一点。";

  }


  if(
    !verse.length
  ){

    area.innerHTML =

      "<div class='notice-box'>" +

        "这一条例文暂时没有成功载入。"

      +

        "<button id='retryVerse' class='secondary wide' type='button'>" +

          "重新读取"

        +

        "</button>" +

      "</div>";


    if(
      $("retryVerse")
    ){

      $("retryVerse")
        .onclick =
        startLessonCorpusTraining;

    }


    return;

  }


  area.innerHTML =

    "<div class='corpus-card'>" +

      "<div class='corpus-reference'>" +

        escapeHtml(
          verse[0].reference
        ) +

      "</div>" +

      "<div id='corpusGreek' class='corpus-greek'></div>" +

      "<div class='corpus-context-note'>" +

        "目标词附近的短语"

      +

      "</div>" +

      "<div id='corpusTokenDetail'></div>" +

    "</div>";


  renderShortCorpus(
    verse,
    example
  );


  const note =
    document.createElement(
      "div"
    );


  note.className =
    "notice-box";


  note.innerHTML =

    "<strong>现在做：</strong> " +

    escapeHtml(
      currentCorpusTask(
        lesson
      )
    ) +

    "<button id='showCorpusHint' class='secondary wide'>" +

      "需要提示"

    +

    "</button>" +

    "<div id='corpusHint' class='training-line' style='display:none'>" +

      escapeHtml(
        example.hint
      ) +

      "<button id='showCorpusExplanation' class='secondary wide'>" +

        "还是不明白？"

      +

      "</button>" +

    "</div>" +

    "<div id='corpusExplanation' class='training-line' style='display:none'>" +

      escapeHtml(
        example.explanation
      ) +

    "</div>";


  area.appendChild(
    note
  );


  $("showCorpusHint")
    .onclick =
    function(){

      $("corpusHint")
        .style
        .display =
        "block";

    };


  $("showCorpusExplanation")
    .onclick =
    function(){

      $("corpusExplanation")
        .style
        .display =
        "block";

    };


  const button =
    document.createElement(
      "button"
    );


  button.className =
    "primary wide";


  button.type =
    "button";


  button.textContent =
    "完成原文训练";


  button.onclick =
    finishCorpusTraining;


  area.appendChild(
    button
  );

}


function currentCorpusTask(
  lesson
){

  if(
    [
      "noun",
      "case",
      "case2",
      "third",
      "adjective",
      "pronoun",
      "autos",
      "demonstrative",
      "relative"
    ].includes(
      lesson.kind
    )
  ){

    return "先看词形，再想它在句中的功能。";

  }


  if(
    [
      "present",
      "future",
      "imperfect",
      "aorist1",
      "aorist2",
      "perfect",
      "passive",
      "contract",
      "stems",
      "mp"
    ].includes(
      lesson.kind
    )
  ){

    return "先看词形，再按今天学过的顺序分析。";

  }


  return "先读一遍，再找出今天学习的词。";

}


function renderShortCorpus(
  tokens,
  example
){

  const box =
    $("corpusGreek");


  if(
    !box
  ){

    return;

  }


  let target =
    tokens.find(
      function(
        token
      ){

        return (

          normalize(
            token.rawText
          ) ===
          normalize(
            example.targetForm
          )

        );

      }
    );


  if(
    !target
  ){

    target =
      tokens.find(
        function(
          token
        ){

          return (

            normalize(
              token.lemma
            ) ===
            normalize(
              example.targetLemma
            )

          );

        }
      );

  }


  const center =
    target
      ? tokens.indexOf(
          target
        )
      : 0;


  const start =
    Math.max(
      0,
      center - 3
    );


  const shortTokens =
    tokens.slice(
      start,
      Math.min(
        tokens.length,
        start + 7
      )
    );


  renderCorpusTokens(
    shortTokens,
    "corpusGreek",
    "corpusTokenDetail",
    target
  );

}


/* =========================================================
   MorphGNT
========================================================= */

function makeVerseKey(
  book,
  chapter,
  verse
){

  return (

    book +
    "-" +
    Number(
      chapter
    ) +
    "-" +
    Number(
      verse
    )

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

    if(
      $("corpusStatus")
    ){

      $("corpusStatus")
        .textContent =
        "正在读取 " +
        book.name +
        "……";

    }


    const response =
      await fetch(
        CONFIG.RAW_BASE +
        book.file,
        {
          cache:"force-cache"
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


    if(
      !tokens.length
    ){

      throw new Error(
        "没有解析出任何词"
      );

    }


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
  catch(
    error
  ){

    console.error(
      "GBRM MorphGNT load failed:",
      book.name,
      error
    );


    renderCorpusStatus(
      book.name +
      " 暂时无法读取"
    );


    return false;

  }

}


/* =========================================================
   正确解析 MorphGNT

   BBCCVV
   BB = Book
   CC = Chapter
   VV = Verse
========================================================= */

function parseMorphGNT(
  text,
  book
){

  const result =
    [];


  const counters =
    {};


  String(
    text ||
    ""
  )
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


      const loc =
        parts[0];


      if(
        !/^\d{6}$/.test(
          loc
        )
      ){

        return;

      }


      const sourceBook =
        loc.slice(
          0,
          2
        );


      const chapter =
        parseInt(
          loc.slice(
            2,
            4
          ),
          10
        );


      const verse =
        parseInt(
          loc.slice(
            4,
            6
          ),
          10
        );


      if(
        Number.isNaN(
          chapter
        ) ||
        Number.isNaN(
          verse
        )
      ){

        return;

      }


      const verseKey =
        makeVerseKey(
          book.id,
          chapter,
          verse
        );


      counters[
        verseKey
      ] =
      (
        counters[
          verseKey
        ] ||
        0
      ) + 1;


      result.push({

        bookId:
          book.id,

        sourceBook,

        bookName:
          book.name,

        chapter,

        verse,

        wordIndex:
          counters[
            verseKey
          ],

        verseKey,

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


  corpus
    .verses[
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


  corpus
    .lemmas[
      key
    ]
    .push(
      token
    );

}


/* =========================================================
   Morphology
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
        A:"受格",
        V:"呼格"
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


/* =========================================================
   POS
========================================================= */

function decodePOS(
  code
){

  const value =
    String(
      code ||
      ""
    );


  return {

    "A-":"形容词",
    "C-":"连接词",
    "D-":"副词",
    "I-":"感叹词",
    "N-":"名词",
    "P-":"介词",
    "RA":"定冠词",
    "RD":"指示代词",
    "RI":"疑问／不定代词",
    "RP":"人称代词",
    "RR":"关系代词",
    "V-":"动词",
    "X-":"语助词"

  }[
    value
  ] || value;

}


/* =========================================================
   Corpus Tokens
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


  if(
    !box
  ){

    return;

  }


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


/* =========================================================
   Token Detail
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
        token.rawText
      ) +

    "</div>" +

    tokenLine(
      "词典形",
      token.lemma
    ) +

    tokenLine(
      "词性",
      decodePOS(
        token.pos
      )
    ) +

    tokenLine(
      "形态",
      [
        token.morph.tense,
        token.morph.voice,
        token.morph.mood,
        token.morph.person,
        token.morph.number,
        token.morph.case,
        token.morph.gender
      ]
      .filter(
        Boolean
      )
      .join(
        " · "
      )
    ) +

    "<button id='openTokenLemma' class='secondary wide' type='button'>" +

      "查看这个词"

    +

    "</button>";


  if(
    $("openTokenLemma")
  ){

    $("openTokenLemma")
      .onclick =
      function(){

        currentReturn =
          "corpus";


        ensureLemmaLoaded(
          token.lemma
        );

      };

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


/* =========================================================
   Lemma
========================================================= */

function ensureLemmaLoaded(
  lemma
){

  (async function(){

    for(
      const bookId of
      CONFIG.PRIORITY_BOOKS
    ){

      await loadBook(
        bookId
      );

    }


    openLemma(
      lemma
    );

  })();

}


function openLemma(
  lemma
){

  const entries =
    corpus.lemmas[
      normalize(
        lemma
      )
    ] || [];


  if(
    !entries.length
  ){

    alert(
      "当前已载入语料中没有找到这个词。"
    );


    return;

  }


  currentLemma =
    entries[0].lemma;


  renderLemma();


  go(
    "lemma"
  );

}


function renderLemma(){

  const area =
    $("lemmaArea");


  if(
    !area
  ){

    return;

  }


  const entries =
    corpus.lemmas[
      normalize(
        currentLemma
      )
    ] || [];


  if(
    !entries.length
  ){

    return;

  }


  const forms =
    {};


  const books =
    {};


  entries.forEach(
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


      books[
        token.bookName
      ] =
      true;

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
            : ""
        ) +

      "</div>" +

    "</div>" +

    "<div class='card'>" +

      "<div id='lemmaForms'></div>" +

    "</div>";


  Object.entries(
    forms
  )
  .slice(
    0,
    20
  )
  .forEach(
    function(
      pair
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
            pair[0]
          ) +

        "</div>" +

        "<div class='form-meta'>" +

          "出现 " +
          pair[1] +
          " 次 · 查看真实经文"

        +

        "</div>";


      row.onclick =
        function(){

          const token =
            entries.find(
              function(
                item
              ){

                return (
                  item.word ===
                  pair[0]
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
   Verse
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

  if(
    $("verseReference")
  ){

    $("verseReference")
      .textContent =

      tokens[0]
        ? tokens[0].reference
        : "";

  }


  renderCorpusTokens(
    tokens,
    "verseText",
    "verseDetail",
    selected
  );

}


/* =========================================================
   Corpus Complete
========================================================= */

function finishCorpusTraining(){

  const st =
    getLessonState(
      currentLessonIndex
    );


  st.corpus =
    true;


  st.corpusReviewed++;


  saveState();


  const area =
    $("corpusArea");


  if(
    !area
  ){

    return;

  }


  area.innerHTML =

    "<div class='success'>" +

      "<strong>✓ 原文训练完成</strong>" +

      "<br><br>" +

      "回到本课，做最后回顾。" +

      "<button id='returnLessonFromCorpus' class='primary wide'>" +

        "返回本课 →"

      +

      "</button>" +

    "</div>";


  $("returnLessonFromCorpus")
    .onclick =
    function(){

      currentStep =
        4;


      renderLesson();


      go(
        "lesson"
      );

    };

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

      "<h3>最后回顾</h3>" +

      "<div class='training-line'>" +

        "<strong>问自己：</strong>" +

        "我能不能用一句话说出本课最重要的内容？"

      +

      "</div>" +

      "<button id='finishLessonButton' class='primary wide' type='button'>" +

        "完成本课"

      +

      "</button>" +

    "</div>";


  st.review =
    true;


  saveState();


  $("finishLessonButton")
    .onclick =
    completeLesson;

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
      "先完成本课全部步骤。"
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


  const area =
    $("lessonArea");


  if(
    !area
  ){

    return;

  }


  area.innerHTML =

    "<div class='success'>" +

      "<strong>✓ 本课完成</strong>" +

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

      "<button id='nextLessonButton' class='primary wide'>" +

        (
          currentLessonIndex <
          TEXTBOOK_LESSONS.length - 1

            ? "下一课 →"

            : "返回首页"

        ) +

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
          currentLessonIndex + 1
        );

      }
      else{

        goHome();

      }

    };

}


/* =========================================================
   STEP NAVIGATION
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

    alert(
      "请先完成练习。"
    );


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


    renderLessonStep();


    return;

  }


  completeLesson();

}


function previousStep(){

  if(
    currentStep >
    0
  ){

    currentStep--;


    renderLessonStep();


    return;

  }


  goHome();

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
   EVENTS
========================================================= */

function bindEvents(){

  if(
    $("lessonBack")
  ){

    $("lessonBack")
      .onclick =
      goHome;

  }


  if(
    $("lessonPrevious")
  ){

    $("lessonPrevious")
      .onclick =
      previousStep;

  }


  if(
    $("lessonNext")
  ){

    $("lessonNext")
      .onclick =
      nextStep;

  }


  if(
    $("vocabReviewBack")
  ){

    $("vocabReviewBack")
      .onclick =
      goHome;

  }


  if(
    $("startVocabularyReview")
  ){

    $("startVocabularyReview")
      .onclick =
      startVocabularyReview;

  }


  if(
    $("corpusBack")
  ){

    $("corpusBack")
      .onclick =
      returnFromCorpus;

  }


  if(
    $("lemmaBack")
  ){

    $("lemmaBack")
      .onclick =
      returnFromLemma;

  }


  if(
    $("verseBack")
  ){

    $("verseBack")
      .onclick =
      returnFromVerse;

  }

}


/* =========================================================
   INIT
========================================================= */

function init(){

  try{

    bindEvents();


    renderHome();

  }
  catch(
    error
  ){

    console.error(
      "GBRM initialization error:",
      error
    );


    const home =
      $("home");


    if(
      home
    ){

      home.innerHTML =

        "<div class='card'>" +

          "<h3>页面初始化遇到问题</h3>" +

          "<p class='muted'>" +

            "请刷新页面后再试。"

          +

          "</p>" +

          "<button class='primary wide' onclick='location.reload()'>" +

            "刷新页面"

          +

          "</button>" +

        "</div>";

    }

  }

}


/* =========================================================
   PUBLIC API
========================================================= */

window.go =
  go;

window.openLesson =
  openLesson;

window.renderLessonStep =
  renderLessonStep;

window.openLemma =
  openLemma;

window.openVerse =
  openVerse;

window.speakText =
  speakText;

window.startVocabularyReview =
  startVocabularyReview;

window.startLessonCorpusTraining =
  startLessonCorpusTraining;


/* =========================================================
   START
========================================================= */

if(
  document.readyState ===
  "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    init,
    {
      once:true
    }
  );

}
else{

  init();

}


/* =========================================================
   END
========================================================= */
