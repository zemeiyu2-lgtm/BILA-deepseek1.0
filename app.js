/* =========================================================
   GBRM V2.5.1
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
   TEXTBOOK IDENTITY
========================================================= */

const TEXTBOOK_META = {
  title: "Basics of Biblical Greek: Grammar",
  titleZh: "《圣经希腊文基础语法》",
  author: "William D. Mounce",
  edition: "第4版 · 2019",
  publisher: "Zondervan Academic"
};

const GREEK_ALPHABET = [
  ["Α α","Alpha","A a","a"],["Β β","Beta","B b","b"],["Γ γ","Gamma","G g","g"],["Δ δ","Delta","D d","d"],["Ε ε","Epsilon","E e","e"],["Ζ ζ","Zeta","Z z","z / dz"],
  ["Η η","Eta","E / ē","长 e 的教学标记"],["Θ θ","Theta","Th th","th"],["Ι ι","Iota","I i","i"],["Κ κ","Kappa","K k","k"],["Λ λ","Lambda","L l","l"],["Μ μ","Mu","M m","m"],
  ["Ν ν","Nu","N n","n"],["Ξ ξ","Xi","X x / ks","ks"],["Ο ο","Omicron","O o","o"],["Π π","Pi","P p","p"],["Ρ ρ","Rho","R r","r"],["Σ σ / ς","Sigma","S s","s"],
  ["Τ τ","Tau","T t","t"],["Υ υ","Upsilon","U u / Y y","u / y"],["Φ φ","Phi","Ph ph","ph"],["Χ χ","Chi","Ch ch","ch"],["Ψ ψ","Psi","Ps ps","ps"],["Ω ω","Omega","O / ō","长 o 的教学标记"]
];

const GREEK_ALPHABET_NOTES = [
  "很多希腊字母与英语字母在形状、名称或转写上有明显联系，可以用来帮助记忆。",
  "θ、φ、χ、ψ 常用两个英语字母转写；记住的是对应关系，不是把希腊文读成英语。",
  "特别留意 η 与英语 n、ν 与英语 v、ρ 与英语 p、χ 与英语 x、ω 与英语 w 的形状混淆。",
  "σ 出现在词中，ς 只写在词尾。",
  "教材同时提供不同发音方案；本系统只把发音作为记忆和课堂朗读辅助，不把它当作口语考核。"
];


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
    objective:"掌握希腊文字母、母音、双母音和气号的基本识别与发音。",
    content:"先掌握二十四个字母的名称、小写形式与基本读法，再学习转写、母音、双母音与气号；英语字母对比可帮助记忆。",
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

  [9,"ἅγιος","圣洁的/圣徒",233],
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
  renderLessonList();
  const meta=$('textbookMeta');
  if(meta){
    meta.innerHTML=
      '<div class="textbook-title">'+escapeHtml(TEXTBOOK_META.titleZh)+'</div>'+
      '<div class="textbook-en">'+escapeHtml(TEXTBOOK_META.title)+'</div>'+
      '<div class="textbook-byline">作者：'+escapeHtml(TEXTBOOK_META.author)+' · '+escapeHtml(TEXTBOOK_META.edition)+' · '+escapeHtml(TEXTBOOK_META.publisher)+'</div>';
  }
}

function renderCourseProgress(){
  let completed=0;
  TEXTBOOK_LESSONS.forEach(function(lesson,index){
    if(getLessonState(index).completed) completed++;
  });

  const current=Math.min(currentLessonIndex+1,TEXTBOOK_LESSONS.length);
  const percent=Math.round(completed/TEXTBOOK_LESSONS.length*100);

  if($('completedCount')) $('completedCount').textContent=completed;
  if($('currentLessonDisplay')) $('currentLessonDisplay').textContent='L'+String(current).padStart(2,'0');
  if($('coursePercent')) $('coursePercent').textContent=percent+'%';
  if($('courseProgress')) $('courseProgress').style.width=percent+'%';

  if($('homeStudyText')){
    $('homeStudyText').textContent=completed
      ? '已完成 '+completed+' / '+TEXTBOOK_LESSONS.length+' 课 · 正在学习 L'+String(current).padStart(2,'0')
      : '从 L01 开始，按教材一步一步学习';
  }
  if($('homeProgressLabel')) $('homeProgressLabel').textContent=completed+' / '+TEXTBOOK_LESSONS.length+' 课';
}

function renderContinue(){
  const area=$('continueArea');
  if(area) area.innerHTML='';
}

/* =========================================================
   COURSE LIST
   第一界面直接显示
========================================================= */

function renderLessonList(){
  const box=$('lessonList');
  if(!box) return;
  box.innerHTML='';
  let groupName='';

  TEXTBOOK_LESSONS.forEach(function(lesson,index){
    const st=getLessonState(index);

    if(groupName!==lesson.group){
      const group=document.createElement('div');
      group.className='lesson-group';
      group.textContent=lesson.group;
      box.appendChild(group);
      groupName=lesson.group;
    }

    const button=document.createElement('button');
    button.type='button';
    button.className='lesson-item'+(index===currentLessonIndex?' current':'')+(st.completed?' completed':'');

    const status=st.completed?'已完成':index===currentLessonIndex?'正在学习':'开始学习';

    button.innerHTML=
      '<div class="lesson-index">L'+String(lesson.n).padStart(2,'0')+'</div>'+
      '<div class="lesson-card-main">'+
        '<div class="lesson-title">'+escapeHtml(lesson.title)+'</div>'+
        '<div class="lesson-meta">'+status+'</div>'+
      '</div>'+
      '<div class="lesson-mark">'+(st.completed?'✓':'→')+'</div>';

    button.onclick=function(){openLesson(index);};
    box.appendChild(button);
  });
}

/* =========================================================
   OPEN LESSON
========================================================= */

function openLesson(
  index
){

  const safeIndex =
    normalizeLessonIndex(
      index
    );


  if(
    !TEXTBOOK_LESSONS[
      safeIndex
    ]
  ){

    return;

  }


  currentLessonIndex =
    safeIndex;


  currentStep =
    0;


  currentPracticeIndex =
    0;


  currentCorpusTokens =
    [];


  currentCorpusIndex =
    0;


  state.currentLesson =
    safeIndex;


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

      "<div class='lesson-page'>" +

        "教材第 " +
        lesson.page +
        " 页"

      +

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
   LESSON STEP
========================================================= */

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


  if(
    !area
  ){

    return;

  }


  area.innerHTML =
    "";


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

    const percentage =
      (
        currentStep /
        4
      ) *
      100;


    $("lessonStepProgress")
      .style.width =
      percentage +
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

    if(
      currentStep ===
      0
    ){

      $("lessonNext")
        .textContent =
        "进入教材练习 →";

    }
    else if(
      currentStep ===
      1
    ){

      $("lessonNext")
        .textContent =
        "进入教材词汇 →";

    }
    else if(
      currentStep ===
      2
    ){

      $("lessonNext")
        .textContent =
        "进入真实新约 →";

    }
    else if(
      currentStep ===
      3
    ){

      $("lessonNext")
        .textContent =
        "开始原文训练";

    }
    else{

      $("lessonNext")
        .textContent =
        "完成本课 →";

    }

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
  const section=document.createElement('div');
  section.className='lesson-section';
  section.innerHTML=
    '<h3>教材</h3>'+
    '<div class="lesson-content">'+escapeHtml(lesson.content)+'</div>'+
    '<div class="training-line"><strong>今天：</strong>'+escapeHtml(lesson.objective)+'</div>';
  area.appendChild(section);

  if(lesson.n===3){
    const alpha=document.createElement('div');
    alpha.className='lesson-section alphabet-panel';
    alpha.innerHTML=
      '<div class="section-topline"><div><div class="eyebrow">L03 · ALPHABET</div><h3>用英语帮助记住希腊字母</h3></div><span class="section-count">24 个字母</span></div>'+
      '<p class="muted">这里使用英语字母作形状、名称与转写的记忆桥梁；发音只作辅助。</p>'+
      '<div class="alphabet-grid">'+
      GREEK_ALPHABET.map(function(row){return '<div class="alphabet-row"><div class="alphabet-greek">'+escapeHtml(row[0])+'</div><div class="alphabet-name">'+escapeHtml(row[1])+'</div><div class="alphabet-english">'+escapeHtml(row[2])+'</div><div class="alphabet-sound">'+escapeHtml(row[3])+'</div></div>';}).join('')+
      '</div>'+
      '<div class="training-line"><strong>记忆提醒</strong><ul class="mini-notes">'+GREEK_ALPHABET_NOTES.map(function(x){return '<li>'+escapeHtml(x)+'</li>';}).join('')+'</ul></div>';
    area.appendChild(alpha);
  }

  st.content=true;
  saveState();
}


/* =========================================================
   PRACTICE
========================================================= */

function getLessonPractice(
  lesson
){

  const byKind = {

    history:{
      q:"这一课首先要帮助你建立什么？",
      o:[
        "希腊语与新约的基本背景",
        "复杂动词变化",
        "分词系统"
      ],
      a:0
    },

    study:{
      q:"教材把学习希腊文的目的放在哪里？",
      o:[
        "更明白并更清楚地传扬神的话语",
        "只为考试",
        "只为记忆规则"
      ],
      a:0
    },

    alphabet:{
      q:"希腊文有多少个字母？",
      o:[
        "24",
        "26",
        "22"
      ],
      a:0
    },

    syllable:{
      q:"希腊文问号使用哪个符号？",
      o:[
        ";",
        "?",
        ":"
      ],
      a:0
    },

    noun:{
      q:"希腊文名词最基本要观察哪些项目？",
      o:[
        "格、数、性",
        "时态、语态、语气",
        "只有词义"
      ],
      a:0
    },

    case:{
      q:"τὸν θεόν 属于哪一个格？",
      o:[
        "直接受格",
        "主格",
        "所有格"
      ],
      a:0
    },

    case2:{
      q:"所有格主要表达什么？",
      o:[
        "所属或关系",
        "过去时间",
        "动作观点"
      ],
      a:0
    },

    preposition:{
      q:"介词后面的名词叫什么？",
      o:[
        "介词的受词",
        "述词主格",
        "先行词"
      ],
      a:0
    },

    adjective:{
      q:"形容词可以有几种基本用法？",
      o:[
        "三种",
        "一种",
        "两种"
      ],
      a:0
    },

    third:{
      q:"第三格变式学习时重要的是什么？",
      o:[
        "词干与词尾的关系",
        "只记中文",
        "只记词频"
      ],
      a:0
    },

    pronoun:{
      q:"代名词的格由什么决定？",
      o:[
        "它在句中的功能",
        "它的中文长度",
        "它的词频"
      ],
      a:0
    },

    autos:{
      q:"αὐτός 学习时为什么不能只固定一个中文译法？",
      o:[
        "因为功能依上下文变化",
        "因为没有意义",
        "因为不是代词"
      ],
      a:0
    },

    demonstrative:{
      q:"指示词学习时首先应观察什么？",
      o:[
        "它具体指向什么",
        "它有几个中文意思",
        "词频"
      ],
      a:0
    },

    relative:{
      q:"关系代名词的格主要由什么决定？",
      o:[
        "它在关系子句中的功能",
        "中文翻译",
        "章节编号"
      ],
      a:0
    },

    verb:{
      q:"教材建议初学者先掌握什么？",
      o:[
        "动词分析框架",
        "所有不规则动词",
        "所有分词"
      ],
      a:0
    },

    present:{
      q:"λύομεν 是什么人称和数？",
      o:[
        "第一人称复数",
        "第二人称单数",
        "第三人称复数"
      ],
      a:0
    },

    contract:{
      q:"ἀγαπῶ 与 ἀγαπάω 的关系是什么？",
      o:[
        "缩略形式与词典形式",
        "两个不同动词",
        "名词与形容词"
      ],
      a:0
    },

    mp:{
      q:"本课所见关身形目前先如何理解？",
      o:[
        "关身形主动意",
        "完全等于被动",
        "没有意义"
      ],
      a:0
    },

    future:{
      q:"未来式最明显的时态特有记号是什么？",
      o:[
        "σ",
        "θη",
        "μαι"
      ],
      a:0
    },

    stems:{
      q:"为什么教材强调学习动词字根？",
      o:[
        "减少死记例外，理解不同词形",
        "让所有动词不变",
        "只为了翻译中文"
      ],
      a:0
    },

    imperfect:{
      q:"未完成式主要表达什么？",
      o:[
        "过去中的连续或重复动作",
        "只表达未来",
        "只表达身份"
      ],
      a:0
    },

    aorist2:{
      q:"第二不定过去式重点是什么？",
      o:[
        "第二字干与未界定观点",
        "重复号",
        "分词词尾"
      ],
      a:0
    },

    aorist1:{
      q:"第一不定过去式常见的时态标记是什么？",
      o:[
        "σα",
        "θη",
        "κα"
      ],
      a:0
    },

    passive:{
      q:"被动语态的基本意义是什么？",
      o:[
        "主词接受动作",
        "主词总是发出动作",
        "只表达过去"
      ],
      a:0
    },

    perfect:{
      q:"现在完成式强调什么？",
      o:[
        "过去动作的结果持续到现在",
        "只有未来时间",
        "只有连续动作"
      ],
      a:0
    }

  };


  const item =
    byKind[
      lesson.kind
    ] ||
    byKind.study;


  return {

    question:item.q,

    options:item.o,

    answer:item.a

  };

}


function renderPracticeStep(
  area,
  lesson,
  st
){

  const item =
    getLessonPractice(
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
          item.question
        ) +

      "</div>" +

      "<div id='practiceOptions' class='practice-options'></div>" +

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
          item.answer
        ){

          st.correct++;


          button.classList.add(
            "correct"
          );


          box
            .querySelectorAll(
              "button"
            )
            .forEach(
              function(
                b
              ){

                b.disabled =
                  true;

              }
            );


          $("practiceFeedback")
            .innerHTML =

            "<div class='success'>" +

              "✓ 正确，继续下一步。"

            +

            "</div>";


          st.practice =
            true;


          saveState();


          setTimeout(
            function(){

              currentStep =
                2;


              state.lessonStep =
                2;


              saveState();


              renderLessonStep();

            },
            350
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
              item.question
            )
          ){

            st.weak.push(
              item.question
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


      box.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   VOCABULARY
========================================================= */

function getLessonVocabulary(lessonNumber){
  return VOCABULARY.filter(function(item){
    return item.lesson===lessonNumber;
  });
}

function renderVocabularyStep(area,lesson,st){
  const list=getLessonVocabulary(lesson.n);
  const cumulative=VOCABULARY.filter(function(item){return item.lesson<=lesson.n;});
  const section=document.createElement('div');
  section.className='lesson-section';
  section.innerHTML=
    '<div class="section-topline"><div><div class="eyebrow">LESSON VOCABULARY</div><h3>本课词汇</h3></div><span class="section-count">'+list.length+' 个新词</span></div>'+
    '<p class="muted">本课新词加入累计记忆池；复习时会和前面课程一起出现。</p>';
  const grid=document.createElement('div');
  grid.className='vocab-grid';
  if(!list.length)grid.innerHTML='<div class="notice-box">本课暂未接入词库。</div>';
  else list.forEach(function(item){grid.appendChild(createVocabularyCard(item));});
  section.appendChild(grid);
  const button=document.createElement('button');
  button.type='button';button.className='primary wide vocab-launch';
  button.textContent=list.length?'开始累计词汇闪卡（L01–L'+String(lesson.n).padStart(2,'0')+'）':'本课暂无词汇';
  button.disabled=!list.length;button.onclick=function(){startLessonVocabularyReview(lesson.n);};
  section.appendChild(button);
  const note=document.createElement('div');
  note.className='notice-box vocab-growth-note';
  note.innerHTML='<strong>记忆范围：</strong> 目前累计 '+cumulative.length+' 个教材词汇；不熟的词会优先回来。';
  section.appendChild(note);
  area.appendChild(section);
  st.vocabulary=true;saveState();
}

function createVocabularyCard(item){
  const memory=getVocabState(item.word);
  const info=getVocabularyInfo(item);
  const card=document.createElement('div');
  card.className='vocab-card';
  card.innerHTML=
    '<div class="vocab-header"><div class="vocab-word">'+escapeHtml(item.word)+'</div><button class="vocab-speak" type="button">🔊</button></div>'+
    '<div class="vocab-gloss">'+escapeHtml(info.gloss)+'</div>'+
    '<div class="vocab-meta">'+escapeHtml(info.pos)+(info.extra?' · '+escapeHtml(info.extra):'')+'</div>'+
    '<div class="vocab-actions"><button class="vocab-memory" type="button">记住了</button></div>'+
    '<span class="vocab-status">'+vocabStatus(memory)+'</span>';
  card.querySelector('.vocab-speak').onclick=function(){speakText(item.word);};
  card.querySelector('.vocab-memory').onclick=function(){memory.seen++;memory.remembered++;memory.lastReviewed=new Date().toISOString();saveState();card.querySelector('.vocab-status').textContent=vocabStatus(memory);};
  return card;
}

function getVocabularyInfo(item){
  const m={
    'λόγος':{gloss:'言语、话语；道',pos:'名词',extra:'阳性 · 第二格变式'},
    'θεός':{gloss:'神、神明',pos:'名词',extra:'阳性 · 第二格变式'},
    'κόσμος':{gloss:'世界、世人',pos:'名词',extra:'阳性 · 第二格变式'},
    'ἀγάπη':{gloss:'爱、爱心',pos:'名词',extra:'阴性 · 第一格变式'},
    'βασιλεία':{gloss:'国度、王权',pos:'名词',extra:'阴性 · 第一格变式'},
    'ἐν':{gloss:'在……里面',pos:'介词'},
    'εἰμί':{gloss:'是、存在',pos:'动词'},
    'λέγω':{gloss:'说、告诉',pos:'动词'},
    'πιστεύω':{gloss:'相信、信任',pos:'动词'},
    'ποιέω':{gloss:'做、使',pos:'动词'},
    'ἀγαπάω':{gloss:'爱、珍爱',pos:'动词'},
    'γίνομαι':{gloss:'成为、发生',pos:'动词'},
    'δίδωμι':{gloss:'给',pos:'动词'},
    'ἔρχομαι':{gloss:'来、去',pos:'动词'},
    'ἐγώ':{gloss:'我',pos:'代词',extra:'第一人称'},
    'σύ':{gloss:'你',pos:'代词',extra:'第二人称'},
    'αὐτός':{gloss:'他、她、它、自己',pos:'代词／形容词'},
    'οὗτος':{gloss:'这个、这些',pos:'指示代词'},
    'ὅς':{gloss:'谁、哪一个',pos:'关系代词'},
    'ὁ':{gloss:'这、该',pos:'定冠词'}
  };
  if(m[item.word])return {gloss:m[item.word].gloss,pos:m[item.word].pos,extra:m[item.word].extra||''};
  return {gloss:item.gloss,pos:'教材词汇',extra:''};
}

function vocabStatus(memory){
  if(memory.remembered>=4) return '比较稳定';
  if(memory.remembered>0) return '学习中';
  return '第一次见';
}

function startLessonVocabularyReview(lessonNumber){
  vocabularyReview=VOCABULARY.filter(function(item){return item.lesson<=lessonNumber;}).slice().sort(function(a,b){
    const aa=getVocabState(a.word),bb=getVocabState(b.word);
    return (aa.remembered-aa.wrong)-(bb.remembered-bb.wrong);
  });
  if(!vocabularyReview.length)return;
  vocabularyReviewIndex=0;state.currentVocabularyLesson=lessonNumber;saveState();go('vocabReview');renderVocabularyReview();
}


/* =========================================================
   原文训练内容（GBRM V2.5 校准版）
========================================================= */
const CORPUS_TRAINING = {
  6:{translation:'太初有道，道与神同在。',task:'先找主词和直接受词，再尝试把整句译成中文。',hint:'先看冠词和词尾：ὁ λόγος 是主格，τὸν θεόν 是受格。',explain:'ὁ λόγος 是主格单数，作主词；τὸν θεόν 是受格单数。这里的字序不能按英文一一对应。',analysis:'ὁ λόγος：主格单数，作主词。ἦν：εἰμί 的未完成式主动直说第三人称单数。πρὸς τὸν θεόν：介词短语，其中 τὸν θεόν 为受格。',mode:'sentence'},
  7:{translation:'神的道。',task:'先找所有格，再把这个短语译成自然中文。',hint:'想到所有格的关键词“的”。',explain:'τοῦ θεοῦ 是 θεός 的所有格单数，修饰 λόγος。',analysis:'ὁ λόγος：中心名词；τοῦ θεοῦ：所有格短语，表示“神的”。本课不展开尚未学习的未来式 σώσει。',mode:'phrase'},
  8:{translation:'在屋子里。',task:'先把介词和受词看成一个整体，再翻译。',hint:'先找介词 ἐν，再看它后面的词。',explain:'ἐν 与它所带的词组成介词短语，中文自然表达为“在……里”。',analysis:'ἐν：介词；τῇ οἰκίᾳ：定冠词加名词的间接受格形式，整体表达位置关系。',mode:'phrase'},
  9:{translation:'这个好人。',task:'先找形容词，再判断它修饰哪个名词。',hint:'注意 ἀγαθός 和 ἄνθρωπος 的性、数、格。',explain:'ἀγαθός 与 ἄνθρωπος 在性、数、格上一致，所以这里是形容词用法。',analysis:'ὁ ἀγαθὸς ἄνθρωπος：ὁ 与 ἄνθρωπος 构成名词短语；ἀγαθός 与其在性、数、格上一致，修饰“人”。',mode:'phrase'},
  10:{translation:'肉身。',task:'先识别 σάρξ 的词性和形式，不急着分析整节。',hint:'今天重点是第三格变式。',explain:'σάρξ 是第三格变式名词；本课重点是辨认词干和词尾。',analysis:'σάρξ：名词，阴性，第三格变式；当前训练只要求先认识其形式，不提前展开 ἐγένετο。',mode:'word'},
  12:{translation:'大卫自己。',task:'先判断 αὐτός 修饰谁，再翻译。',hint:'它和谁发生一致？',explain:'αὐτὸς 在这里位于名词前，表示强调，意思是“自己”。',analysis:'αὐτὸς：主格阳性单数，与 Δαυίδ 对应，作强调用法，中文自然译为“大卫自己”。',mode:'phrase'},
  13:{translation:'这个人。',task:'先确定指示词指向什么，再翻译。',hint:'不要孤立地把 οὗτος 固定译成一个中文词。',explain:'οὗτος 是指示词，具体中文表达要根据它指向的名词和上下文决定。',analysis:'οὗτος：指示代词/形容词体系中的指示词；在这里重点训练“指向关系”，而不是展开完整句的未来式。',mode:'phrase'},
  14:{translation:'我们认识的那个人。',task:'先找先行词，再观察关系代名词的功能。',hint:'关系代名词的性、数跟谁？格又由什么决定？',explain:'ὅν 的性、数与先行词一致，但它在关系子句中的功能决定它用直接受格。',analysis:'ὁ ἄνθρωπος 是先行词；ὅν 是关系代名词，性数与先行词一致，格由其在关系子句中的功能决定。本课不展开尚未学习的全部动词形式。',mode:'phrase'},
  16:{translation:'我爱罗宾。',task:'先找现在式主动直说的真正人称字尾，再翻译。',hint:'动词本身已经包含“我”。',explain:'ἀγαπῶ 的形式已经包含第一人称单数信息；显出的 ἐγώ 有强调作用。',analysis:'ἀγαπῶ：现在式、主动、直说、第一人称单数。Ῥόβιν 为直接受格。中文按上下文可自然译为“我爱罗宾”。',mode:'sentence'},
  18:{translation:'他/她/它正在来。',task:'先观察词尾，再判断人称、数和时态。',hint:'注意 -εται。',explain:'ἔρχεται 是现在式第三人称单数的关身/被动形；按照教材目前的学习范围，这里作“关身/被动形主动意”处理。',analysis:'ἔρχεται：现在式、关身/被动形、直说、第三人称单数，来自 ἔρχομαι；本课阶段按教材作主动意义理解。',mode:'word'},
  19:{translation:'我将去。',task:'先找未来式的形式特征，再翻译。',hint:'注意 σ 和人称字尾。',explain:'πορεύσομαι 是未来式关身形；这里按教材所教的关身形主动意理解。',analysis:'πορεύσομαι：未来式关身形、直说、第一人称单数；教材阶段意义按主动“我将去”处理。',mode:'word'},
  21:{translation:null,task:'今天先练习辨认未完成式在真实经文中的画面感。',hint:'教材用启示录5:9说明“他们唱新歌”的连续画面；先认识这个训练重点。',explain:'未完成式通常把过去的动作呈现为连续或重复的过程。',analysis:'当前表格中的目标词形尚需重新核对，因此基础版暂不显示固定中文答案，避免把错误形式带进训练。',mode:'pending'},
  22:{translation:'我拿了。',task:'先看往昔号，再判断第二字干。',hint:'ἔλαβον 不是现在式 λαμβάνω 的简单拼接。',explain:'ἔλαβον 使用的是第二不定过去式的第二字干 λαβ-。',analysis:'ἔλαβον：第二不定过去式主动直说第一人称单数，来自 λαμβάνω；本课先掌握形态识别，再逐步进入句法。',mode:'word'},
  23:{translation:null,task:'先观察 μετανοήσατε 的第一不定过去式词形。',hint:'注意它虽然是第一不定过去式，但这一个例句本身不是直说语气。',explain:'μετανοήσατε 是第一不定过去式，但在徒2:38中属于命令语气；本课只借它认识词形。',analysis:'本课主目标是第一不定过去式直说语气，因此这里不把命令语气当成本课主训练，只作为真实经文中的形态观察。',mode:'pending'},
  24:{translation:'我们受洗归入基督耶稣。',task:'先判断主词是否接受动作，再翻译。',hint:'看 θη 这个被动语态时态特征。',explain:'ἐβαπτίσθημεν 是不定过去式被动形式，第一人称复数；主词是动作的接受者。',analysis:'ἐβαπτίσθημεν：不定过去式、被动、直说、第一人称复数。翻译时要保留“我们接受这个行动”的关系。',mode:'sentence'},
  25:{translation:'罪已经定了。',task:'先自己翻译，再判断完成式为什么适合这里的中文表达。',hint:'注意重复号和完成式形式。',explain:'κέκριται 表示一个已经发生的判决，其结果状态仍然持续到现在。',analysis:'ἤδη κέκριται：κέκριται 为现在完成式被动直说第三人称单数；ἤδη 强调“已经”。中文“罪已经定了”帮助表达完成及持续结果。',mode:'sentence'}
};

/* =========================================================
   CORPUS GATEWAY
========================================================= */

function renderCorpusGateway(
  area,
  lesson,
  st
){

  area.innerHTML =
    "<div class='lesson-section corpus-gateway-card'>" +
      "<div class='corpus-gateway-kicker'>真实新约</div>" +
      "<h3>把今天学的知识放进真实经文。</h3>" +
      "<div class='corpus-guide-list'>" +
        "<div><b>① 先读</b><span>看一遍希腊文。</span></div>" +
        "<div><b>② 再观察</b><span>找出今天学习的词形。</span></div>" +
        "<div><b>③ 最后翻译</b><span>先自己翻，再按需要查看帮助。</span></div>" +
      "</div>" +
      "<button id='launchCorpus' class='primary wide' type='button'>开始原文训练 →</button>" +
    "</div>";

  $("launchCorpus").onclick =
    startLessonCorpusTraining;

}


/* =========================================================
   START CORPUS
========================================================= */

async function startLessonCorpusTraining(){

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


  await loadPriorityCorpus();


  currentCorpusTokens =
    selectLessonCorpusTokens();


  currentCorpusIndex =
    0;


  if(
    !currentCorpusTokens.length
  ){

    if(
      area
    ){

      area.innerHTML =

        "<div class='notice-box'>" +

          "<strong>这一课暂时没有可用原文例句。</strong>" +

          "<br><br>" +

          "课程内容不受影响，可以返回本课。"

        +

        "</div>" +

        "<button id='backFromCorpusEmpty' class='secondary wide' type='button'>" +

          "返回本课"

        +

        "</button>";

      $("backFromCorpusEmpty")
        .onclick =
        returnFromCorpus;

    }


    return;

  }


  renderCorpusTraining();

}


/* =========================================================
   SELECT CORPUS
========================================================= */

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
      function(item){

        return normalize(
          item.word
        );

      }
    );


  let candidates =
    corpus.tokens.filter(
      function(token){

        return vocabKeys.includes(
          normalize(
            token.lemma
          )
        );

      }
    );


  const morph =
    corpus.tokens.filter(
      function(token){

        return matchLessonKind(
          token,
          lesson.kind
        );

      }
    );


  candidates =
    candidates.concat(
      morph
    );


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
        av !== bv
      ){

        return av
          ? -1
          : 1;

      }


      return (

        a.bookName.localeCompare(
          b.bookName
        )

        ||

        a.chapter -
        b.chapter

        ||

        a.verse -
        b.verse

      );

    }
  )
  .slice(
    0,
    4
  );

}


/* =========================================================
   LESSON KIND MATCH
========================================================= */

function matchLessonKind(
  token,
  kind
){

  const pos =
    decodePOS(
      token.pos
    );


  switch(
    kind
  ){

    case "present":

      return (

        token.morph.tense ===
          "现在式"

        &&

        token.morph.voice ===
          "主动"

        &&

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
    case "third":
    case "case":
    case "case2":

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
    case "demonstrative":
    case "relative":

      return [
        "代词",
        "人称代词",
        "指示代词",
        "疑问／不定代词",
        "关系代词"
      ].includes(
        pos
      );


    default:

      return false;

  }

}


/* =========================================================
   CORPUS TRAINING
========================================================= */

function renderCorpusTraining(){

  const lesson =
    TEXTBOOK_LESSONS[
      currentLessonIndex
    ];


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

      "今天只练一个重点：先自己观察，再翻译；不会时再查看帮助。";

  }


  area.innerHTML =
    "";


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
    ] || [];


  if(
    !tokens.length
  ){

    currentCorpusIndex++;

    renderCorpusTraining();

    return;

  }


  const center =
    tokens.indexOf(
      seed
    );


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


  const shortTokens =
    tokens.slice(
      start,
      end
    );


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
    shortTokens,
    "corpusGreek",
    "corpusTokenDetail",
    seed
  );

  const training = CORPUS_TRAINING[lesson.n] || {};

  const translationBox = document.createElement("div");
  translationBox.className = "corpus-translation-box";
  translationBox.innerHTML =
    "<div class='corpus-label'>先自己翻译</div>" +
    (training.mode === "pending"
      ? "<div class='muted'>这一课的固定参考译文仍在校准，不显示未经确认的答案。</div>"
      : "<div id='translationReveal' class='translation-reveal muted'>先尝试，再查看参考译文。</div>" +
        "<button id='showTranslation' class='secondary wide' type='button'>查看参考译文</button>");
  area.appendChild(translationBox);

  if($("showTranslation")){
    $("showTranslation").onclick=function(){
      const r=$("translationReveal");
      if(r){ r.textContent=training.translation || "暂无固定参考译文"; r.classList.remove("muted"); }
      $("showTranslation").style.display="none";
    };
  }

  const help = document.createElement("div");
  help.className = "corpus-help-box";
  help.innerHTML =
    "<div class='corpus-label'>需要帮助？</div>"+
    "<button id='corpusHintBtn' class='secondary' type='button'>提示</button>"+
    "<button id='corpusExplainBtn' class='secondary' type='button'>解释</button>"+
    "<button id='corpusAnalysisBtn' class='secondary' type='button'>完整分析</button>"+
    "<div id='corpusHelpContent' class='training-line' style='display:none'></div>";
  area.appendChild(help);

  let helpLevel=0;
  function showHelp(level){
    helpLevel=Math.max(helpLevel,level);
    const b=$("corpusHelpContent");
    if(!b)return;
    b.style.display="block";
    const parts=[];
    if(helpLevel>=1 && training.hint)parts.push("<strong>提示：</strong> "+escapeHtml(training.hint));
    if(helpLevel>=2 && training.explain)parts.push("<strong>解释：</strong> "+escapeHtml(training.explain));
    if(helpLevel>=3 && training.analysis)parts.push("<strong>完整分析：</strong> "+escapeHtml(training.analysis));
    b.innerHTML=parts.join("<hr>");
  }
  if($("corpusHintBtn"))$("corpusHintBtn").onclick=function(){showHelp(1)};
  if($("corpusExplainBtn"))$("corpusExplainBtn").onclick=function(){showHelp(2)};
  if($("corpusAnalysisBtn"))$("corpusAnalysisBtn").onclick=function(){showHelp(3)};

  const note =
    document.createElement(
      "div"
    );


  note.className =
    "notice-box";


  note.innerHTML =
    "<strong>现在做</strong><br><br>" +
    escapeHtml(
      training.task || currentCorpusTask(lesson,seed)
    );


  area.appendChild(
    note
  );


  const button =
    document.createElement(
      "button"
    );


  button.className =
    "primary wide";


  button.type =
    "button";


  button.textContent =

    currentCorpusIndex + 1 <
    currentCorpusTokens.length

      ? "下一处 →"

      : "完成原文训练";


  button.onclick =
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


  area.appendChild(
    button
  );

}


/* =========================================================
   CORPUS TASK
========================================================= */

function currentCorpusTask(
  lesson,
  seed
){

  if(
    [
      "noun",
      "case",
      "case2",
      "third"
    ].includes(
      lesson.kind
    )
  ){

    return "先看目标词的形式，再想它在句中的作用。";

  }


  if(
    [
      "present",
      "future",
      "imperfect",
      "aorist1",
      "aorist2",
      "perfect"
    ].includes(
      lesson.kind
    )
  ){

    return "先看词形，再问自己：我能认出今天学过的动词形式吗？";

  }


  return "先读一遍，再找出今天学习的词。";

}


/* =========================================================
   FINISH CORPUS
========================================================= */

function finishCorpusTraining(){

  const st =
    getLessonState(
      currentLessonIndex
    );


  st.corpus =
    true;


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

      "现在回到教材做最后回顾。" +

      "<button id='backLessonFromCorpus' class='primary wide' type='button'>" +

        "返回本课 →"

      +

      "</button>" +

    "</div>";


  $("backLessonFromCorpus")
    .onclick =
    function(){

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
   LOAD PRIORITY CORPUS
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


/* =========================================================
   LOAD ALL
========================================================= */

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


/* =========================================================
   LOAD BOOK
========================================================= */

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


/* =========================================================
   FETCH BOOK
========================================================= */

async function fetchBook(
  book
){

  try{

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
        "没有解析出任何词。"
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


/* =========================================================
   MORPHGNT PARSER

   官方字段：

   book/chapter/verse
   part of speech
   parsing code
   text
   word
   normalized word
   lemma

   位置码：
   BBCCVV
========================================================= */

function parseMorphGNT(
  text,
  book
){

  const out =
    [];


  const counters =
    {};


  String(
    text || ""
  )
  .split(
    /\r?\n/
  )
  .forEach(
    function(line){

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


      /*
        MorphGNT:
        BB CC VV

        前两位 = book
        中两位 = chapter
        后两位 = verse
      */

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
        book.id +
        "-" +
        chapter +
        "-" +
        verse;


      counters[
        verseKey
      ] =
      (
        counters[
          verseKey
        ] || 0
      ) + 1;


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


      out.push({

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


  return out;

}


/* =========================================================
   ADD TOKEN
========================================================= */

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
  code
){

  return {

    "1":
      "第一人称",

    "2":
      "第二人称",

    "3":
      "第三人称"

  }[
    code
  ] || "";

}


function decodeTense(
  code
){

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

  }[
    code
  ] || "";

}


function decodeVoice(
  code
){

  return {

    A:
      "主动",

    M:
      "关身",

    P:
      "被动"

  }[
    code
  ] || "";

}


function decodeMood(
  code
){

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

  }[
    code
  ] || "";

}


function decodeCase(
  code
){

  return {

    N:
      "主格",

    G:
      "所有格",

    D:
      "间接受格",

    A:
      "受格",

    V:
      "呼格"

  }[
    code
  ] || "";

}


function decodeNumber(
  code
){

  return {

    S:
      "单数",

    P:
      "复数"

  }[
    code
  ] || "";

}


function decodeGender(
  code
){

  return {

    M:
      "阳性",

    F:
      "阴性",

    N:
      "中性"

  }[
    code
  ] || "";

}


/* =========================================================
   POS

   使用 MorphGNT 完整 POS code
========================================================= */

function decodePOS(
  code
){

  const c =
    String(
      code ||
      ""
    );


  return {

    "A-":
      "形容词",

    "C-":
      "连接词",

    "D-":
      "副词",

    "I-":
      "感叹词",

    "N-":
      "名词",

    "P-":
      "介词",

    "RA":
      "定冠词",

    "RD":
      "指示代词",

    "RI":
      "疑问／不定代词",

    "RP":
      "人称代词",

    "RR":
      "关系代词",

    "V-":
      "动词",

    "X-":
      "语助词"

  }[
    c
  ] || c;

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
      corpus.tokens
        .length
        .toLocaleString();

  }


  if(
    $("lemmasLoaded")
  ){

    $("lemmasLoaded")
      .textContent =
      Object.keys(
        corpus.lemmas
      )
      .length
      .toLocaleString();

  }


  if(
    $("corpusStatus")
  ){

    $("corpusStatus")
      .textContent =

      message ||

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
   RENDER CORPUS TOKENS
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


      /*
        full verse 显示使用 rawText，
        因为 rawText 保留标点。
      */

      span.textContent =
        token.rawText;


      span.onclick =
        function(){

          box
            .querySelectorAll(
              ".corpus-token"
            )
            .forEach(
              function(item){

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
      buildMorphSummary(
        token
      )
    );

}


function buildMorphSummary(
  token
){

  return [

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
  );

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


  const matches =
    corpus.lemmas[
      normalize(
        lemma
      )
    ] || [];


  if(
    !matches.length
  ){

    alert(
      "当前已载入语料中没有找到这个 Lemma。请先加载更多书卷。"
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


function renderLemma(){

  const area =
    $("lemmaArea");


  const occ =
    corpus.lemmas[
      normalize(
        currentLemma
      )
    ] || [];


  const forms =
    {};


  const books =
    {};


  occ.forEach(
    function(token){

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
      function(item){

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

          : "教材暂未连接释义"
      ) +

    "</div>" +

    "<div class='lemma-stat-grid'>" +

      "<div class='lemma-stat'>" +

        "<strong>" +
        occ.length +
        "</strong>" +

        "<span>已载入出现</span>" +

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

      "这个 Lemma 是从教材学习对象进入原文网络的延伸，不是另一套课程。"

    +

    "</p>";


  area.appendChild(
    note
  );


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "card";


  card.innerHTML =

    "<h3>常见词形</h3>" +

    "<div id='lemmaForms'></div>";


  area.appendChild(
    card
  );


  entries.forEach(
    function(
      pair
    ){

      const form =
        pair[0];


      const count =
        pair[1];


      const row =
        document.createElement(
          "div"
        );


      row.className =
        "form-row";


      row.innerHTML =

        "<div class='form-word'>" +

          escapeHtml(
            form
          ) +

        "</div>" +

        "<div class='form-meta'>" +

          "出现 " +
          count +
          " 次 · 查看真实经文"

        +

        "</div>";


      row.onclick =
        function(){

          const token =
            occ.find(
              function(
                item
              ){

                return (
                  item.word ===
                  form
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


  currentReturn =
    "lemma";


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


  const box =
    $("verseText");


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
        selected.wordIndex ===
        token.wordIndex
      ){

        span.classList.add(
          "active"
        );

      }


      /*
        真实经文显示：
        rawText = 保留标点的文本。
      */

      span.textContent =
        token.rawText;


      span.onclick =
        function(){

          box
            .querySelectorAll(
              ".corpus-token"
            )
            .forEach(
              function(item){

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

        "回到教材，确认今天真正学会了什么，不追求复杂评分。"

      +

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


  const area =
    $("lessonArea");


  if(
    !area
  ){

    return;

  }


  area.innerHTML =

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

        "不要急着赶下一课，可以以后回来复习。"

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
          currentLessonIndex + 1
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


    state.lessonStep =
      currentStep;


    saveState();


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


    state.lessonStep =
      currentStep;


    saveState();


    renderLessonStep();


    return;

  }


  goHome();

}


/* =========================================================
   VOCAB REVIEW
========================================================= */

function startVocabularyReview(){
  const currentLessonNumber=TEXTBOOK_LESSONS[currentLessonIndex].n;
  vocabularyReview=VOCABULARY.filter(function(item){return item.lesson<=currentLessonNumber;}).slice().sort(function(a,b){
    const aa=getVocabState(a.word),bb=getVocabState(b.word);
    return (aa.remembered-aa.wrong)-(bb.remembered-bb.wrong);
  }).slice(0,12);
  if(!vocabularyReview.length){alert('完成至少一课后就可以开始词汇复习。');return;}
  vocabularyReviewIndex=0;state.currentVocabularyLesson=currentLessonNumber;saveState();go('vocabReview');renderVocabularyReview();
}

function renderVocabularyReview(){
  const counter=$('vocabReviewCounter');
  const area=$('vocabReviewArea');
  if(!counter||!area) return;

  if(vocabularyReviewIndex>=vocabularyReview.length){
    counter.textContent='复习完成';
    area.innerHTML=
      '<div class="success"><strong>✓ 今天复习完成</strong><br><br>不熟的词会在以后再次出现。</div>';
    return;
  }

  const item=vocabularyReview[vocabularyReviewIndex];
  const range=state.currentVocabularyLesson||TEXTBOOK_LESSONS[currentLessonIndex].n;
  counter.textContent=
    '目前复习至 L'+String(range).padStart(2,'0')+
    ' · 第 '+(vocabularyReviewIndex+1)+' / '+vocabularyReview.length;

  area.innerHTML=
    '<div class="flashcard">'+
      '<div class="flashcard-word">'+escapeHtml(item.word)+'</div>'+
      '<div class="flashcard-hint">先自己想一想，再翻卡。</div>'+
      '<button id="flashReveal" class="primary wide" type="button">显示答案</button>'+
    '</div>';

  $('flashReveal').onclick=function(){showFlashcardAnswer(item);};
}

function showFlashcardAnswer(item){
  const area=$('vocabReviewArea');
  if(!area)return;
  const info=getVocabularyInfo(item);
  area.innerHTML=
    '<div class="flashcard flashcard-revealed">'+
      '<div class="flashcard-word">'+escapeHtml(item.word)+'</div>'+
      '<div class="flashcard-answer">'+escapeHtml(info.gloss)+'</div>'+
      '<div class="flashcard-detail">'+
        '<div><span>词性</span><strong>'+escapeHtml(info.pos)+'</strong></div>'+
        (info.extra?'<div><span>形态提示</span><strong>'+escapeHtml(info.extra)+'</strong></div>':'')+
        '<div><span>来源</span><strong>教材词汇</strong></div>'+
      '</div>'+
      '<button id="flashSpeak" class="secondary wide" type="button">🔊 再听一次</button>'+
      '<div class="flashcard-actions">'+
        '<button id="flashNotSure" class="secondary" type="button">还不熟</button>'+
        '<button id="flashKnow" class="primary" type="button">记住了</button>'+
      '</div>'+
    '</div>';
  $('flashSpeak').onclick=function(){speakText(item.word);};
  $('flashNotSure').onclick=function(){rateFlashcard(item,false);};
  $('flashKnow').onclick=function(){rateFlashcard(item,true);};
}

function rateFlashcard(item,remembered){
  const memory=getVocabState(item.word);
  memory.seen++;
  if(remembered) memory.remembered++;
  else memory.wrong++;
  memory.lastReviewed=new Date().toISOString();
  saveState();
  vocabularyReviewIndex++;
  renderVocabularyReview();
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


  if(
    $("verseLemmaButton")
  ){

    $("verseLemmaButton")
      .onclick =
      returnFromVerse;

  }


  if(
    $("loadCorpusButton")
  ){

    $("loadCorpusButton")
      .onclick =
      loadAllCorpus;

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
