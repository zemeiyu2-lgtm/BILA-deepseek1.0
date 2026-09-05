/* =========================================================
GBRM V2.5
STUDENT PORTAL + CHINESE GUIDED LEARNING

核心原则：

学生看到：
    今天学什么
    ↓
    教材
    ↓
    练习
    ↓
    词汇
    ↓
    短原文
    ↓
    中文讲解
    ↓
    必要时深入

学生不需要看到：
    大量数据
    统计
    Corpus 结构
    系统理念
    后台信息

========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  STATE_KEY:
    "GBRM_V25_STATE",

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
LESSONS
========================================================= */

const LESSONS = [

  {
    n:1,
    group:"第一部分 · 引言",
    title:"希腊语",
    page:15,
    kind:"history",
    objective:"认识希腊语的历史，并知道为什么新约使用通用希腊文。",
    content:"先认识学习对象本身。新约时代广泛使用通用希腊文，因此学习希腊文能够帮助我们接近新约原文。",
    topics:["希腊语历史","通用希腊文","新约语境"],
    vocabulary:[]
  },

  {
    n:2,
    group:"第一部分 · 引言",
    title:"学习希腊文",
    page:17,
    kind:"study",
    objective:"建立学习目标、熟记、作业、时间、毅力与纪律。",
    content:"学习希腊文需要持续练习。目标不是一次掌握全部，而是每天学习一点，并不断复习。",
    topics:["目标","熟记","时间","毅力","同伴","纪律"],
    vocabulary:[]
  },

  {
    n:3,
    group:"第一部分 · 引言",
    title:"字母与发音",
    page:21,
    kind:"alphabet",
    objective:"掌握二十四个字母、母音、双母音和气号。",
    content:"先建立字母与声音之间的稳定联系，再进入真正的单词阅读。",
    topics:["24个字母","母音","双母音","气号","发音"],
    vocabulary:["λόγος","θεός"]
  },

  {
    n:4,
    group:"第一部分 · 引言",
    title:"标点符号与音节",
    page:28,
    kind:"syllable",
    objective:"认识标点、重音符，并能够分音节。",
    content:"开始注意希腊文的文字组织方式，让阅读不再停留在单个字母。",
    topics:["标点","重音","音节"],
    vocabulary:[]
  },

  {
    n:5,
    group:"第二部分 · 名词系统",
    title:"英文的名词简介",
    page:39,
    kind:"noun",
    objective:"建立性、数、格与格变式的基本概念。",
    content:"希腊文名词会根据它在句子中的作用发生形式变化。第一步是知道自己正在观察什么。",
    topics:["性","数","格","格变式"],
    vocabulary:["λόγος","θεός","κόσμος"]
  },

  {
    n:6,
    group:"第二部分 · 名词系统",
    title:"主格与直接受格；定冠词",
    page:44,
    kind:"case",
    objective:"掌握主格、直接受格、定冠词与一致。",
    content:"开始通过词尾判断一个名词在句中的角色。",
    topics:["主格","直接受格","定冠词","一致"],
    vocabulary:["ἀγάπη","αὐτός","βασιλεία","ἐν","ὁ"]
  },

  {
    n:7,
    group:"第二部分 · 名词系统",
    title:"所有格与间接受格",
    page:59,
    kind:"case2",
    objective:"掌握所有格和间接受格。",
    content:"继续认识名词之间的关系，并观察格在真实句子中的功能。",
    topics:["所有格","间接受格"],
    vocabulary:["οὐρανός","οὗτος","σύ","υἱός"]
  },

  {
    n:8,
    group:"第二部分 · 名词系统",
    title:"介词与 εἰμί",
    page:74,
    kind:"preposition",
    objective:"掌握常见介词和 εἰμί。",
    content:"开始观察介词所建立的空间、关系和方向，并认识 εἰμί 的基本形式。",
    topics:["介词","介词受词","介词短语","εἰμί","述词主格"],
    vocabulary:["ἀλλά","ἀπό","διά","εἰμί","ἐκ","ἡμέρα","Ἰωάννης","λέγω"]
  },

  {
    n:9,
    group:"第二部分 · 名词系统",
    title:"形容词",
    page:85,
    kind:"adjective",
    objective:"认识形容词与名词的关系，以及形容用法。",
    content:"观察形容词如何通过形式与所修饰的名词保持联系。",
    topics:["一致","形容用法","叙述用法","名词用法"],
    vocabulary:["ἀγαθός","ἀγαπητός","αἰώνιος","δοῦλος","ἐντολή","πιστός"]
  },

  {
    n:10,
    group:"第二部分 · 名词系统",
    title:"第三格变式名词",
    page:97,
    kind:"third",
    objective:"开始识别第三格变式名词。",
    content:"重点不是死背，而是学习观察词干、词尾和形式变化。",
    topics:["第三格变式","词干","词尾"],
    vocabulary:["ἅγιος","ὄνομα","πᾶς","σάρξ","σῶμα","τέκνον"]
  },

  {
    n:11,
    group:"第二部分 · 名词系统",
    title:"第一与第二人称代名词",
    page:112,
    kind:"pronoun",
    objective:"掌握第一、第二人称代名词。",
    content:"学习我、你、我们、你们等代名词，并观察格、数、人称。",
    topics:["第一人称","第二人称","格","数","人称"],
    vocabulary:["ἐγώ","ἡμεῖς","σύ","ὑμεῖς","ἀδελφός","ἐκκλησία","πατήρ","πίστις","φῶς","χάρις"]
  },

  {
    n:12,
    group:"第二部分 · 名词系统",
    title:"αὐτός",
    page:123,
    kind:"autos",
    objective:"认识 αὐτός 的不同基本功能。",
    content:"不要把 αὐτός 只记成一个中文词，要观察它在句子里的具体作用。",
    topics:["αὐτός","第三人称","强化","自己","同一"],
    vocabulary:["αὐτός","αἰών","διδάσκαλος","μαθητής"]
  },

  {
    n:13,
    group:"第二部分 · 名词系统",
    title:"指示代名词／形容词",
    page:131,
    kind:"demonstrative",
    objective:"学习指示词以及呼格。",
    content:"看到指示词时，先问：它究竟指向谁、什么或哪一个对象？",
    topics:["οὗτος","ἐκεῖνος","指示词","呼格"],
    vocabulary:["οὗτος","ἐκεῖνος","γυνή","δικαιοσύνη","μέγας","πολύς","τηρέω"]
  },

  {
    n:14,
    group:"第二部分 · 名词系统",
    title:"关系代名词",
    page:140,
    kind:"relative",
    objective:"认识关系代名词和关系子句。",
    content:"开始观察句子如何连接信息，并学习从关系子句判断代名词的功能。",
    topics:["关系代名词","先行词","关系子句","格"],
    vocabulary:["ἀλήθεια","εἰρήνη","ἐπαγγελία","θρόνος","Ἰερουσαλήμ","ὁδός","ὅς"]
  },

  {
    n:15,
    group:"第三部分 · 动词系统",
    title:"动词简介",
    page:148,
    kind:"verb",
    objective:"建立动词分析框架。",
    content:"学习从一个完整词形中寻找人称、数、时态、语态和语气。",
    topics:["人称","数","时态","语态","语气","字干"],
    vocabulary:["ἀκούω","βλέπω","ἔχω","λύω","νόμος","πιστεύω","χαρά"]
  },

  {
    n:16,
    group:"第三部分 · 动词系统",
    title:"现在式主动语态直说语气",
    page:158,
    kind:"present",
    objective:"掌握现在式主动直说语气。",
    content:"现在进入真正的动词形态训练：先找形式，再判断人称和数。",
    topics:["现在式","主动","直说","连接母音","人称字尾"],
    vocabulary:["ἀκούω","βλέπω","ἔχω","λύω","νόμος","πιστεύω","χαρά"]
  },

  {
    n:17,
    group:"第三部分 · 动词系统",
    title:"缩略动词",
    page:168,
    kind:"contract",
    objective:"认识缩略动词。",
    content:"学习词典形为什么和实际出现的词形不完全一样。",
    topics:["αω","εω","οω","缩略"],
    vocabulary:["ἀγαπάω","ζητέω","καλέω","λαλέω","οἶδα","πληρόω","ποιέω"]
  },

  {
    n:18,
    group:"第三部分 · 动词系统",
    title:"现在式关身／被动语态",
    page:178,
    kind:"mp",
    objective:"认识现在式关身／被动形式。",
    content:"先识别词形，再通过上下文判断具体功能。",
    topics:["关身","被动","现在式","直说"],
    vocabulary:["ἀποκρίνομαι","δεῖ","δύναμαι","ἔρχομαι","τόπος"]
  },

  {
    n:19,
    group:"第三部分 · 动词系统",
    title:"未来式主动／关身语态",
    page:188,
    kind:"future",
    objective:"认识未来式主动与关身形式。",
    content:"认识未来式的主要形式特征，并开始在真实经文中辨认。",
    topics:["未来式","σ","主动","关身"],
    vocabulary:["βασιλεύς","γεννάω","ζάω","Ἰουδαία","Ἰουδαῖος","Ἰσραήλ","καρπός","προσκυνέω"]
  },

  {
    n:20,
    group:"第三部分 · 动词系统",
    title:"动词字根；未来式其他字形",
    page:201,
    kind:"stems",
    objective:"认识字根、现在式字干与时态字干。",
    content:"学习不同形式为什么可能使用不同字干。",
    topics:["字根","字干","时态字干","流音动词"],
    vocabulary:["ἀποθνῄσκω","γινώσκω","ἐγείρω","εὐαγγέλιον","εὐαγγελίζω","εὑρίσκω","λαμβάνω","μένω","ὁράω","πίνω","φέρω"]
  },

  {
    n:21,
    group:"第三部分 · 动词系统",
    title:"不完成式",
    page:218,
    kind:"imperfect",
    objective:"认识未完成式以及过去中的持续观点。",
    content:"学习过去时间中的连续、重复或进行中的动作。",
    topics:["未完成式","往昔号","连续观点"],
    vocabulary:["ἦν"]
  },

  {
    n:22,
    group:"第三部分 · 动词系统",
    title:"第二不定过去式",
    page:222,
    kind:"aorist",
    objective:"认识第二不定过去式和第二字干。",
    content:"开始区分第二不定过去式与其他过去形式。",
    topics:["第二不定过去式","第二字干","未界定观点"],
    vocabulary:["ἀποστέλλω","βαίνω","γίνομαι","δίδωμι","φεύγω"]
  },

  {
    n:23,
    group:"第三部分 · 动词系统",
    title:"第一不定过去式",
    page:232,
    kind:"aorist",
    objective:"认识第一不定过去式。",
    content:"观察第一不定过去式的形式，并和已经学过的形式进行比较。",
    topics:["第一不定过去式","σα","主动","关身"],
    vocabulary:["λύω","ποιέω"]
  },

  {
    n:24,
    group:"第三部分 · 动词系统",
    title:"不定过去式与未来式被动",
    page:243,
    kind:"passive",
    objective:"认识被动形式。",
    content:"先判断词形，再判断动作关系，不急于解释神学意义。",
    topics:["被动","未来式被动","不定过去式被动","θη"],
    vocabulary:["λαμβάνω","λύω"]
  },

  {
    n:25,
    group:"第三部分 · 动词系统",
    title:"现在完成式",
    page:256,
    kind:"perfect",
    objective:"认识完成式的基本构成。",
    content:"观察完成式的重复号和词形，并开始理解过去动作与现在结果之间的关系。",
    topics:["完成式","重复号","κα","主动","关身／被动"],
    vocabulary:["γινώσκω","ποιέω","πιστεύω"]
  }

];


/* =========================================================
VOCABULARY
========================================================= */

const VOCABULARY = [

  [4,"ἀγγελος","使者/天使"],
  [4,"ἀμήν","实实在在地/阿们"],
  [4,"ἄνθρωπος","人/人类"],
  [4,"ἀπόστολος","使徒/报信者"],
  [4,"Γαλιλαία","加利利"],
  [4,"γραφή","著作/圣经"],
  [4,"δόξα","荣耀/威严"],
  [4,"ἐγώ","我"],
  [4,"ἔσχατος","最后的"],
  [4,"ζωή","生命"],
  [4,"θεός","神/神明"],
  [4,"καί","和/也"],
  [4,"καρδία","心/内在自己"],
  [4,"κόσμος","世界/世人"],
  [4,"λόγος","言语/道"],
  [4,"πνεῦμα","灵/圣灵"],
  [4,"προφήτης","先知"],
  [4,"σάββατον","安息日/一周"],
  [4,"φωνή","声音/声响"],
  [4,"Χριστός","基督/弥赛亚"],

  [6,"ἀγάπη","爱"],
  [6,"ἄλλος","别的/另一个"],
  [6,"αὐτός","他/她/它/自己"],
  [6,"βασιλεία","国度"],
  [6,"δέ","但是/而"],
  [6,"ἐν","在……里面"],
  [6,"ἔργον","工作/行为"],
  [6,"καιρός","时间/季节"],
  [6,"νῦν","现在"],
  [6,"ὁ","这"],
  [6,"ὅτι","因为/那"],
  [6,"οὐ","不"],
  [6,"ὥρα","小时/时候"],

  [7,"οὐρανός","天/天空"],
  [7,"οὗτος","这个/这些"],
  [7,"σύ","你"],
  [7,"υἱός","儿子/子孙"],
  [7,"ὥστε","所以/以致"],

  [8,"ἀλλά","但是/然而"],
  [8,"ἀπό","从/离开"],
  [8,"διά","藉着/因为"],
  [8,"εἰμί","是/存在"],
  [8,"ἐκ","从/出自"],
  [8,"ἡμέρα","日/白天"],
  [8,"ἦν","他/她/它是(过去)"],
  [8,"θάλασσα","海/湖"],
  [8,"θάνατος","死亡"],
  [8,"ἵνα","为了/要"],
  [8,"Ἰωάννης","约翰"],
  [8,"λέγω","说/告诉"],
  [8,"μετά","与……一起/在……之后"],
  [8,"οἰκία","屋子/家庭"],
  [8,"οἶκος","屋子/家庭"],
  [8,"ὄχλος","人群/大众"],
  [8,"παρά","从/在……旁边/沿着"],
  [8,"παραβολή","比喻"],
  [8,"πρός","向/朝着/与……一起"],
  [8,"ὑπό","被/在……底下"],

  [9,"ἀγαθός","好的/有用的"],
  [9,"ἀγαπητός","亲爱的"],
  [9,"αἰώνιος","永远的"],
  [9,"ἀλλήλων","彼此"],
  [9,"ἀπεκρίθη","回答"],
  [9,"δοῦλος","奴隶/仆人"],
  [9,"ἐάν","如果/当"],
  [9,"ἐμός","我的"],
  [9,"ἐντολή","诫命/命令"],
  [9,"καθώς","如/正如"],
  [9,"κακός","坏的/恶的"],
  [9,"μου","我的"],
  [9,"νεκρός","死的/尸体"],
  [9,"πιστός","忠心的/有信心的"],
  [9,"πονηρός","邪恶的/坏的"],
  [9,"πρῶτος","第一的/前面的"],
  [9,"τρίτος","第三的"],

  [10,"ἅγιος","圣洁的/圣徒"],
  [10,"εἰ","如果"],
  [10,"εἰ μή","除非/如果不"],
  [10,"εἷς","一"],
  [10,"ἤδη","现在/已经"],
  [10,"ὄνομα","名字/名声"],
  [10,"οὐδείς","没有一个/没有任何"],
  [10,"πᾶς","每一个/所有的"],
  [10,"περί","关于/围绕"],
  [10,"σάρξ","肉体/身体"],
  [10,"σύν","与……一起"],
  [10,"σῶμα","身体"],
  [10,"τέκνον","儿女/子孙"],
  [10,"τίς","谁?/什么?"],
  [10,"τις","某人/任何人"],

  [11,"ἀδελφός","弟兄"],
  [11,"ἄν","语助词"],
  [11,"ἀνήρ","男人/丈夫"],
  [11,"ἐκκλησία","教会/聚会"],
  [11,"ἐλπίς","盼望/期盼"],
  [11,"ἔξω","没有/在外面"],
  [11,"ἐπί","在……上/基于/向着"],
  [11,"ἡμεῖς","我们"],
  [11,"θέλημα","旨意/欲望"],
  [11,"ἴδε","看哪"],
  [11,"ἰδού","看哪"],
  [11,"καλός","美丽的/好的"],
  [11,"μήτηρ","母亲"],
  [11,"οὐδέ","而不/甚至不"],
  [11,"πατήρ","父亲"],
  [11,"πίστις","信心/信仰"],
  [11,"ὕδωρ","水"],
  [11,"ὑμεῖς","你们"],
  [11,"φῶς","光"],
  [11,"χάρις","恩典/宠爱"],
  [11,"ὧδε","在这里"],

  [12,"αἰών","世代/永恒"],
  [12,"διδάσκαλος","老师"],
  [12,"εὐθύς","立刻"],
  [12,"ἕως","直到"],
  [12,"μαθητής","门徒"],
  [12,"μέν","一方面/确实"],
  [12,"μηδείς","没有一个人/一件事物"],
  [12,"μόνος","唯独/只有"],
  [12,"ὅπως","如何/以致/为要"],

  [13,"γυνή","女人/妻子"],
  [13,"δικαιοσύνη","公义"],
  [13,"δώδεκα","十二"],
  [13,"ἑαυτοῦ","他自己/她自己/它自己"],
  [13,"ἐκεῖνος","那个/那些"],
  [13,"ἤ","或/比"],
  [13,"κἀγώ","而我/但我"],
  [13,"μακάριος","有福的/快乐的"],
  [13,"μέγας","大的/伟大的"],
  [13,"πολύς","许多的/多的"],
  [13,"σήμερον","今天"],
  [13,"τηρέω","保守/护卫/遵守"],

  [14,"ἀλήθεια","真理"],
  [14,"εἰρήνη","平安"],
  [14,"ἐνώπιον","在……前"],
  [14,"ἐπαγγελία","应许"],
  [14,"ἑπτά","七"],
  [14,"θρόνος","宝座"],
  [14,"Ἰερουσαλήμ","耶路撒冷"],
  [14,"κατά","向下/根据"],
  [14,"κεφαλή","头"],
  [14,"ὁδός","道路/行为"],
  [14,"ὅς","谁/哪一个"],
  [14,"ὅτε","当……时"],
  [14,"πλοῖον","船/小船"],
  [14,"ῥῆμα","话/言论"],
  [14,"οὕτως","如此"],
  [14,"χείρ","手/臂"],
  [14,"ψυχή","魂/生命/自己"],

  [16,"ἀκούω","听见/学习"],
  [16,"βλέπω","看见/注视"],
  [16,"ἔχω","有/拿着"],
  [16,"λύω","解开/毁坏"],
  [16,"νόμος","律法/原则"],
  [16,"ὅπου","在……地方"],
  [16,"πιστεύω","我相信/信任"],
  [16,"πρόσωπον","脸/外貌"],
  [16,"τότε","那时/然后"],
  [16,"τυφλός","瞎眼的"],
  [16,"χαρά","喜乐/愉快"],

  [17,"ἀγαπάω","我爱/珍爱"],
  [17,"δαιμόνιον","鬼"],
  [17,"ζητέω","我寻求/渴望"],
  [17,"καλέω","我召/命名/邀请"],
  [17,"λαλέω","我说/讲"],
  [17,"οἶδα","我知道/明白"],
  [17,"ὅταν","每当/当……时"],
  [17,"μείζων","更大的/更多的"],
  [17,"πληρόω","我充满/完成/应验"],
  [17,"ποιέω","我做/使"],

  [18,"ἀποκρίνομαι","我回答"],
  [18,"δεῖ","是必须的"],
  [18,"δύναμαι","我能/有能力"],
  [18,"ἔρχομαι","我来/去"],
  [18,"νύξ","夜晚"],
  [18,"ὅστις","凡……的"],
  [18,"πορεύομαι","我去/着手/生活"],
  [18,"συνάγω","我聚集/邀请"],
  [18,"τόπος","地方/地点"],
  [18,"ὡς","如/像/当/约"],

  [19,"βασιλεύς","王"],
  [19,"γεννάω","我生/产生"],
  [19,"ζάω","我活"],
  [19,"Ἰουδαία","犹太"],
  [19,"Ἰουδαῖος","犹太的/犹太人"],
  [19,"Ἰσραήλ","以色列"],
  [19,"καρπός","果子/庄稼/结果"],
  [19,"ὅλος","整个/完整的"],
  [19,"προσκυνέω","我敬拜"],

  [20,"ἀποθνῄσκω","我死"],
  [20,"ἄρτος","面包/食物"],
  [20,"βάλλω","我扔/投"],
  [20,"γινώσκω","我知道/认识"],
  [20,"ἐγείρω","我唤醒/举起/使复活"],
  [20,"ἐσθίω","我吃"],
  [20,"εὐαγγέλιον","福音/好消息"],
  [20,"εὐαγγελίζω","我传福音"],
  [20,"εὑρίσκω","我找到"],
  [20,"λαμβάνω","我拿/接受/娶"],
  [20,"μένω","我留下/居住"],
  [20,"ὁράω","我看见"],
  [20,"παραλαμβάνω","我接受/带走"],
  [20,"πίνω","我喝"],
  [20,"φέρω","我带/背负/结出"],

  [22,"ἀποστέλλω","我差遣"],
  [22,"βαίνω","我去"],
  [22,"γίνομαι","我成为/发生"],
  [22,"δίδωμι","我给"],
  [22,"φεύγω","我逃跑"]

].map(function(item){

  return {

    lesson:item[0],

    word:item[1],

    gloss:item[2]

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


let currentLemma =
  "";


let currentReturn =
  "lesson";


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
DOCUMENT READY
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function(){

    bindEvents();

    renderHome();

  }
);


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
      error
    );

  }


  return {

    currentLesson:0,

    lessons:{},

    vocab:{}

  };

}


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


  $("loadCorpusButton")
    && (
      $("loadCorpusButton").onclick =
        loadAllCorpus
    );


  if(
    $("openLessons")
  ){

    $("openLessons").onclick =
      function(){

        $("lessonPanel")
          .classList
          .remove(
            "hidden"
          );

      };

  }


  if(
    $("closeLessons")
  ){

    $("closeLessons").onclick =
      function(){

        $("lessonPanel")
          .classList
          .add(
            "hidden"
          );

      };

  }


  if(
    $("continueLesson")
  ){

    $("continueLesson").onclick =
      function(){

        openLesson(
          currentLessonIndex
        );

      };

  }

}


/* =========================================================
HOME
========================================================= */

function renderHome(){

  renderCourseProgress();

  renderTodayLesson();

  renderLessonList();

  renderCorpusStatus();

}


function renderTodayLesson(){

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  if(
    !lesson
  ){

    return;

  }


  $("todayLessonNumber")
    .textContent =

      "L" +
      String(
        lesson.n
      ).padStart(
        2,
        "0"
      );


  $("todayLessonTitle")
    .textContent =
      lesson.title;


  $("todayLessonObjective")
    .textContent =
      lesson.objective;

}


function renderCourseProgress(){

  let completed =
    0;


  LESSONS.forEach(
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
      LESSONS.length *
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


  $("courseProgressText")
    .textContent =

      "已完成 " +
      completed +
      " / " +
      LESSONS.length +
      " 课";

}


/* =========================================================
LESSON LIST
========================================================= */

function renderLessonList(){

  const box =
    $("lessonList");


  box.innerHTML =
    "";


  let groupName =
    "";


  LESSONS.forEach(
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
          lesson.group;


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
    LESSONS[
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
    !LESSONS[index]
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
    LESSONS[
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
        currentStep +
        1
      ) +
      " 步 / 5";


  $("lessonStepProgress")
    .style.width =

      (
        currentStep ===
        4
          ? 100
          : percent
      ) +
      "%";


  if(
    currentStep ===
    0
  ){

    renderTextbookContent(
      area,
      lesson,
      st
    );

  }

  else if(
    currentStep ===
    1
  ){

    renderPractice(
      area,
      lesson,
      st
    );

  }

  else if(
    currentStep ===
    2
  ){

    renderVocabulary(
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
TEXTBOOK
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

        "学习方法"

      +

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
      q:"未来式常见形式特征是什么？",
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
      q:"第一不定过去式常见形式标记是什么？",
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
  ] || {

    q:"今天最重要的重点是什么？",

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

    "<h3>练一练</h3>" +

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

      "先认识，不必一次全部记住。"

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

        "本课没有需要单独学习的词汇。"

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

      "<h3>现在进入真实新约</h3>" +

      "<p>" +

        "把刚才学的内容放到真正的经文里。"

      +

      "</p>" +

      "<div class='training-task'>" +

        "<strong>今天只做一个观察</strong>" +

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
CORPUS
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
    LESSONS[
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


  const verseMap =
    new Map();


  candidates.forEach(
    function(
      token
    ){

      if(
        !verseMap.has(
          token.verseKey
        )
      ){

        verseMap.set(
          token.verseKey,
          token
        );

      }

    }
  );


  return Array.from(
    verseMap.values()
  )
  .sort(
    function(
      a,
      b
    ){

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
CORPUS RENDER
========================================================= */

function renderCorpusTraining(){

  const area =
    $("corpusArea");


  const lesson =
    LESSONS[
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

        "暂时没有合适的短例句。" +

        "<br><br>" +

        "先继续学习教材内容。"

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
    seed
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

    "<strong>你现在只需要做：</strong>" +

    escapeHtml(
      guide.task
    );


  area.appendChild(
    task
  );


  const buttonRow =
    document.createElement(
      "div"
    );


  buttonRow.innerHTML =

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
    buttonRow
  );


  $("showHint")
    .onclick =
      function(){

        showTrainingHint(
          seed,
          lesson
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


/* =========================================================
SHORT PASSAGE
========================================================= */

function renderShortPassage(
  tokens,
  target
){

  const box =
    $("shortCorpusText");


  box.innerHTML =
    "";


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
          )
        );

      }
    );


  renderTokenDetail(
    target,
    "corpusTokenDetail"
  );

}


/* =========================================================
CHINESE HINT
========================================================= */

function showTrainingHint(
  token,
  lesson
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


  const gloss =
    vocab
      ? vocab.gloss
      : token.lemma;


  let hint =
    "目标词：" +
    gloss +
    "。先观察它的词形。";


  if(
    lesson.kind ===
    "present"
  ){

    hint =
      "目标词：" +
      gloss +
      "。注意它是现在式、主动语态、直说语气，再观察人称和数。";

  }

  else if(
    lesson.kind ===
    "noun"
  ){

    hint =
      "目标词：" +
      gloss +
      "。注意它的性、数和格。";

  }

  else if(
    lesson.kind ===
    "adjective"
  ){

    hint =
      "目标词：" +
      gloss +
      "。看看它和哪个名词保持一致。";

  }

  else if(
    lesson.kind ===
    "relative"
  ){

    hint =
      "目标词：" +
      gloss +
      "。先找出它连接的对象，再观察它在关系子句中的功能。";

  }


  box.innerHTML =

    "<strong>中文提示</strong>" +

    "<div class='training-answer'>" +

      escapeHtml(
        hint
      ) +

    "</div>";

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

        "现在回到本课。"

        +

        "<button id='returnLesson' class='primary wide' type='button'>" +

          "回到本课 →"

        +

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

  renderCorpusStatus(
    "正在准备新约原文……"
  );


  for(
    const book of
    BOOKS
  ){

    await loadBook(
      book.id
    );

  }


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


    return true;

  }

  catch(
    error
  ){

    console.warn(
      "GBRM Corpus:",
      error
    );


    return false;

  }

}


function renderCorpusStatus(
  message
){

  const box =
    $("corpusStatus");


  if(
    box
  ){

    box.textContent =
      message ||
      "需要时自动加载";

  }

}


/* =========================================================
MORPHGNT
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
PARSING
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

  const c =
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
      c
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

      "进一步学习这个词 →"

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
      "当前载入的原文中还没有找到这个词。"
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

            : "这是词典形"

        ) +

      "</div>" +

      "<div class='lemma-help'>" +

        "需要时再继续观察这个词在新约中的其他形式。"

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

            "点击查看一个真实例句"

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

      "<h3>今天学到了什么？</h3>" +

      recordLine(
        "教材",
        st.content
      ) +

      recordLine(
        "练习",
        st.practice
      ) +

      recordLine(
        "词汇",
        st.vocabulary
      ) +

      recordLine(
        "原文",
        st.corpus
      ) +

      "<div class='training-task'>" +

        "<strong>问自己：</strong>" +

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

    return "我看到一个现在式动词时，能不能先分析形式？";

  }


  if(
    lesson.kind ===
    "relative"
  ){

    return "我能不能找到关系词连接的信息？";

  }


  if(
    lesson.kind ===
    "perfect"
  ){

    return "我能不能认出完成式，并理解它与现在结果的关系？";

  }


  return "我能不能用一句话说出本课最重要的知识？";

}


function recordLine(
  label,
  checked
){

  return (

    "<div style='display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)'>" +

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
    LESSONS[
      currentLessonIndex
    ];


  $("lessonArea")
    .innerHTML =

      "<div class='lesson-section'>" +

        "<div class='success'>" +

          "<strong>✓ 今天完成了</strong>" +

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

          "可以停在这里。"

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
      function(){

        if(
          currentLessonIndex <
          LESSONS.length - 1
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
    LESSONS
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
      "先完成至少一课教材课程。"
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

        "不用追求全部正确，下一次再见。"

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

        "🔊 听发音"

      +

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
  )
  .forEach(
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

                    "下一词 →"

                  +

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
TRAINING GUIDES

   中文为主。
   英文术语只作为学习对象。
========================================================= */

const TRAINING_GUIDES = {

  intro:{

    title:
      "学习方法",

    explanation:
      "基础阶段不用一次记住很多。先认识一个概念，再通过练习和重复建立稳定记忆。",

    task:
      "说出今天最重要的一件事。"

  },


  history:{

    title:
      "历史背景",

    explanation:
      "这里主要建立背景认识，不需要记住大量历史细节。",

    task:
      "知道为什么学习新约希腊文。"

  },


  study:{

    title:
      "学习方法",

    explanation:
      "学习语言最重要的是持续。每天学习一点，再不断回来复习。",

    task:
      "确认自己知道今天学习的内容。"

  },


  alphabet:{

    title:
      "字母与发音",

    explanation:
      "先把字母认熟，再慢慢建立“字母—声音—单词”的联系。",

    task:
      "看到希腊字母时尝试读出来。"

  },


  syllable:{

    title:
      "音节",

    explanation:
      "音节可以帮助你把陌生单词拆开来读。",

    task:
      "尝试把一个希腊词分成音节。"

  },


  noun:{

    title:
      "名词",

    explanation:
      "看到名词时，先观察性、数和格，再判断它在句子中的作用。",

    task:
      "找到名词，并观察它的性、数、格。"

  },


  case:{

    title:
      "格",

    explanation:
      "主格常与主语有关，受格常与直接受词有关。先看形式，再判断功能。",

    task:
      "观察这个名词在句子中的作用。"

  },


  case2:{

    title:
      "所有格与间接受格",

    explanation:
      "不要只背中文名称。要观察这个名词和其他词是什么关系。",

    task:
      "判断它是在表达所属还是间接对象。"

  },


  preposition:{

    title:
      "介词",

    explanation:
      "看到介词后，马上看看它后面的名词，这两个部分通常需要一起理解。",

    task:
      "找到介词和它带的名词。"

  },


  adjective:{

    title:
      "形容词",

    explanation:
      "形容词通常会和所修饰的名词保持性、数、格的一致。",

    task:
      "看看形容词修饰哪个名词。"

  },


  third:{

    title:
      "第三格变式",

    explanation:
      "重点不是一次背完全部词尾，而是学会观察词干和词尾。",

    task:
      "先找词干，再看词尾。"

  },


  pronoun:{

    title:
      "代名词",

    explanation:
      "看到代名词时，先问它指谁，再观察人称、数和格。",

    task:
      "找到代名词指向的对象。"

  },


  autos:{

    title:
      "αὐτός",

    explanation:
      "αὐτός 的具体功能需要结合上下文判断，不要强行固定成一个中文意思。",

    task:
      "先看上下文，再决定它的功能。"

  },


  demonstrative:{

    title:
      "指示词",

    explanation:
      "重点是它指向什么，而不是只背“这个、那个”。",

    task:
      "找到它具体指向的对象。"

  },


  relative:{

    title:
      "关系代名词",

    explanation:
      "关系代名词把信息连接起来。它的格要结合它在关系子句中的功能判断。",

    task:
      "找出它连接的对象。"

  },


  verb:{

    title:
      "动词",

    explanation:
      "看到动词时，先不要翻译。先观察人称、数、时态、语态和语气。",

    task:
      "尝试分析一个完整的动词词形。"

  },


  present:{

    title:
      "现在式主动直说",

    explanation:
      "先认出现在式，再确认主动和直说，最后观察人称和数。",

    task:
      "找到一个现在式主动直说动词。"

  },


  contract:{

    title:
      "缩略动词",

    explanation:
      "词典形和经文中的实际词形可能不同，不要因此认为它们是不同的词。",

    task:
      "把实际词形和词典形连接起来。"

  },


  mp:{

    title:
      "关身／被动",

    explanation:
      "先认出形式，再结合上下文判断具体意义。",

    task:
      "观察主词与动作的关系。"

  },


  future:{

    title:
      "未来式",

    explanation:
      "先认出未来式的形式特征，再观察人称、数以及句子的意义。",

    task:
      "在经文中找出未来式。"

  },


  stems:{

    title:
      "字根与字干",

    explanation:
      "不同形式可能使用不同字干。认识字干可以帮助你少背很多孤立词形。",

    task:
      "把实际词形和词典形联系起来。"

  },


  imperfect:{

    title:
      "未完成式",

    explanation:
      "它帮助我们看到过去时间中的持续、进行或重复动作。",

    task:
      "观察过去动作有没有持续或进行的特点。"

  },


  aorist:{

    title:
      "不定过去式",

    explanation:
      "先把它认作一种语法形式，不要马上把它等同于某个中文时态。",

    task:
      "先识别形式，再观察上下文。"

  },


  passive:{

    title:
      "被动语态",

    explanation:
      "被动语态要注意主词与动作之间的关系。主词通常是接受动作的一方。",

    task:
      "找出谁接受了动作。"

  },


  perfect:{

    title:
      "完成式",

    explanation:
      "完成式常把已经发生的动作和现在仍然存在的结果联系起来。",

    task:
      "观察过去发生的事情是否产生现在的结果。"

  }

};


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
END
========================================================= */
