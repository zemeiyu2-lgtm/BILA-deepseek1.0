/* =========================================================
GBRM V2.6
极简门户 + 三级辅助讲解

核心：
教材是主轴
中文降低理解门槛
希腊文是真正学习对象
真实新约是训练场

帮助机制：

学生自己观察
    ↓
需要帮助？
    ↓
提示
    ↓
解释
    ↓
完整分析

默认全部隐藏。
========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  STATE_KEY:
    "GBRM_V26_STATE",

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

].map(function(
  item
){

  return {

    id:item[0],

    name:item[1],

    file:item[2]

  };

});


/* =========================================================
LESSON DATABASE
========================================================= */

const LESSONS = [

  {
    n:1,
    group:"第一部分 · 引言",
    title:"希腊语",
    kind:"history",
    objective:"认识新约时代的希腊语背景。",
    content:"先知道自己为什么学习新约希腊文。",
    topics:[
      "希腊语",
      "通用希腊文",
      "新约"
    ],
    vocabulary:[]
  },

  {
    n:2,
    group:"第一部分 · 引言",
    title:"学习希腊文",
    kind:"study",
    objective:"建立持续学习的习惯。",
    content:"学习希腊文需要持续、重复和练习。",
    topics:[
      "目标",
      "熟记",
      "复习"
    ],
    vocabulary:[]
  },

  {
    n:3,
    group:"第一部分 · 引言",
    title:"字母与发音",
    kind:"alphabet",
    objective:"认识希腊字母和基本发音。",
    content:"先把字母和声音联系起来。",
    topics:[
      "24个字母",
      "母音",
      "双母音",
      "气号"
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
    kind:"syllable",
    objective:"认识标点、重音和音节。",
    content:"开始从文字层面准确阅读希腊文。",
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
    kind:"noun",
    objective:"建立性、数、格的基本概念。",
    content:"名词形式会随着它在句中的作用发生变化。",
    topics:[
      "性",
      "数",
      "格"
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
    kind:"case",
    objective:"认识主格、受格和定冠词。",
    content:"开始通过词尾判断名词在句中的基本作用。",
    topics:[
      "主格",
      "受格",
      "定冠词"
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
    kind:"case2",
    objective:"认识所有格和间接受格。",
    content:"观察名词和其他词之间的关系。",
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
    kind:"preposition",
    objective:"认识常见介词和 εἰμί。",
    content:"观察介词与它所带名词之间的关系。",
    topics:[
      "介词",
      "介词短语",
      "εἰμί"
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
    kind:"adjective",
    objective:"认识形容词和名词的一致。",
    content:"观察形容词与它所修饰的名词之间的关系。",
    topics:[
      "一致",
      "形容用法"
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
    kind:"third",
    objective:"开始识别第三格变式。",
    content:"练习观察词干和词尾。",
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
    kind:"pronoun",
    objective:"掌握第一、第二人称代名词。",
    content:"观察人称、数、格。",
    topics:[
      "第一人称",
      "第二人称",
      "数",
      "格"
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
    kind:"autos",
    objective:"认识 αὐτός 的基本功能。",
    content:"先观察上下文，再决定 αὐτός 的具体功能。",
    topics:[
      "αὐτός",
      "强化",
      "自己"
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
    kind:"demonstrative",
    objective:"认识指示词。",
    content:"找到“这个、那个”所指向的对象。",
    topics:[
      "οὗτος",
      "ἐκεῖνος",
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
    kind:"relative",
    objective:"认识关系代名词和关系子句。",
    content:"观察一个句子怎样连接更多信息。",
    topics:[
      "关系代名词",
      "先行词",
      "关系子句"
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
    kind:"verb",
    objective:"建立动词分析框架。",
    content:"面对一个动词，先观察形式。",
    topics:[
      "人称",
      "数",
      "时态",
      "语态",
      "语气"
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
    kind:"present",
    objective:"掌握现在式主动直说语气。",
    content:"从一个完整词形中找出现在式、主动、直说、人称和数。",
    topics:[
      "现在式",
      "主动",
      "直说",
      "人称",
      "数"
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
    kind:"contract",
    objective:"认识缩略动词。",
    content:"把实际词形和词典形联系起来。",
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
    kind:"mp",
    objective:"认识现在式关身／被动。",
    content:"先识别形式，再结合上下文判断功能。",
    topics:[
      "关身",
      "被动",
      "现在式"
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
    kind:"future",
    objective:"认识未来式。",
    content:"先认形式，再观察人称和数。",
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
    title:"动词字根；未来式的其他字形",
    kind:"stems",
    objective:"认识字根、字干与形式变化。",
    content:"学习为什么同一个词可能出现不同字干。",
    topics:[
      "字根",
      "字干",
      "时态字干"
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
    kind:"imperfect",
    objective:"认识过去中的持续观点。",
    content:"观察过去时间中的持续、进行或重复。",
    topics:[
      "未完成式",
      "往昔号",
      "持续"
    ],
    vocabulary:[
      "ἦν"
    ]
  },

  {
    n:22,
    group:"第三部分 · 动词系统",
    title:"第二不定过去式",
    kind:"aorist",
    objective:"认识第二不定过去式。",
    content:"观察第二字干，并与其他形式比较。",
    topics:[
      "第二不定过去式",
      "第二字干"
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
    kind:"aorist",
    objective:"认识第一不定过去式。",
    content:"识别形式，并和已经学过的形式比较。",
    topics:[
      "第一不定过去式",
      "σα"
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
    kind:"passive",
    objective:"认识被动形式。",
    content:"先判断形式，再观察主词与动作之间的关系。",
    topics:[
      "被动",
      "θη",
      "未来式被动"
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
    kind:"perfect",
    objective:"认识完成式。",
    content:"观察完成式的形式，并开始理解过去动作与现在结果的关系。",
    topics:[
      "完成式",
      "重复号",
      "κα"
    ],
    vocabulary:[
      "γινώσκω",
      "ποιέω",
      "πιστεύω"
    ]
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

].map(function(
  item
){

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
INIT
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

function $(id){

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
      "GBRM state:",
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
      "GBRM state:",
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

  $("continueLesson").onclick =
    function(){

      openLesson(
        currentLessonIndex
      );

    };


  $("openLessons").onclick =
    function(){

      $("lessonPanel")
        .classList
        .remove(
          "hidden"
        );

    };


  $("closeLessons").onclick =
    function(){

      $("lessonPanel")
        .classList
        .add(
          "hidden"
        );

    };


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

  renderTodayLesson();

  renderLessonList();

}


/* =========================================================
TODAY
========================================================= */

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


/* =========================================================
PROGRESS
========================================================= */

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


  let currentGroup =
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
LESSON
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

    renderTextbook(
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
TEXTBOOK
========================================================= */

function renderTextbook(
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

    "<h3>今天学习</h3>" +

    "<div class='lesson-content'>" +

      escapeHtml(
        lesson.content
      ) +

    "</div>" +

    "<div class='training-explanation'>" +

      "<div class='training-explanation-title'>" +

        "一句话记住" +

      "</div>" +

      "<div class='training-explanation-text'>" +

        escapeHtml(
          buildOneLineGuide(
            lesson
          )
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


function buildOneLineGuide(
  lesson
){

  const guides = {

    history:
      "先知道学习新约希腊文的意义。",

    study:
      "每天学习一点，反复回来。",

    alphabet:
      "把字母、声音和单词连起来。",

    syllable:
      "先读准文字，再进入单词。",

    noun:
      "看到名词，先看性、数、格。",

    case:
      "先看词尾，再判断句中功能。",

    case2:
      "观察名词和其他词之间的关系。",

    preposition:
      "介词和它带的名词一起看。",

    adjective:
      "看形容词和哪个名词保持一致。",

    third:
      "先找词干，再看词尾。",

    pronoun:
      "先问这个代名词指谁。",

    autos:
      "αὐτός 要结合上下文判断。",

    demonstrative:
      "先找到“这个、那个”指向什么。",

    relative:
      "找到关系词，再看它连接什么。",

    verb:
      "先分析形式，再翻译。",

    present:
      "先认现在式、主动、直说，再看人称数。",

    contract:
      "词典形和实际词形可能不同。",

    mp:
      "先认形式，再判断动作关系。",

    future:
      "先认未来式的形式特征。",

    stems:
      "把实际词形和词典形联系起来。",

    imperfect:
      "注意过去中的持续或重复。",

    aorist:
      "先认形式，不要马上等同中文时态。",

    passive:
      "观察谁接受了动作。",

    perfect:
      "观察过去动作和现在结果的联系。"

  };


  return (
    guides[
      lesson.kind
    ]
    ||
    "先掌握今天最重要的一点。"
  );

}


/* =========================================================
PRACTICE
========================================================= */

function getPractice(
  lesson
){

  const data = {

    3:[
      "希腊文共有多少个字母？",
      ["24","26","20"],
      0
    ],

    4:[
      "希腊文问号使用哪个符号？",
      [";","?",":"],
      0
    ],

    5:[
      "希腊文名词需要观察什么？",
      ["性、数、格","时态、语态","只有中文"],
      0
    ],

    6:[
      "τὸν θεόν 是什么格？",
      ["受格","主格","所有格"],
      0
    ],

    7:[
      "τοῦ θεοῦ 是什么格？",
      ["所有格","主格","受格"],
      0
    ],

    8:[
      "εἰμί 的基本意义是什么？",
      ["是 / 存在","看见","听见"],
      0
    ],

    9:[
      "形容词通常与名词在哪些方面一致？",
      ["性、数、格","时态、语态","只有性"],
      0
    ],

    10:[
      "第三格变式应该先看什么？",
      ["词干和词尾","中文长度","章节号"],
      0
    ],

    11:[
      "ἐγώ 的基本意义是什么？",
      ["我","你","我们"],
      0
    ],

    12:[
      "αὐτός 为什么需要结合上下文？",
      ["因为功能可能变化","因为没有意义","因为不是希腊文"],
      0
    ],

    13:[
      "指示词首先应该观察什么？",
      ["它具体指向什么","中文有几个字","词频高不高"],
      0
    ],

    14:[
      "关系代名词的格主要由什么决定？",
      ["它在关系子句中的功能","中文翻译","章节号"],
      0
    ],

    15:[
      "分析动词时应该观察什么？",
      ["人称、数、时态、语态、语气","只有中文","只有时态"],
      0
    ],

    16:[
      "λύομεν 是什么人称和数？",
      ["第一人称复数","第二人称单数","第三人称复数"],
      0
    ],

    17:[
      "ἀγαπῶ 与 ἀγαπάω 的关系是什么？",
      ["缩略形式与词典形式","两个不同动词","名词与形容词"],
      0
    ],

    18:[
      "关身／被动需要结合什么判断？",
      ["上下文","中文长度","章节号"],
      0
    ],

    19:[
      "未来式常见的形式特征是什么？",
      ["σ","θη","μαι"],
      0
    ],

    20:[
      "为什么要学习动词字干？",
      ["帮助识别不同形式","因为动词没有变化","只用于名词"],
      0
    ],

    21:[
      "未完成式帮助看到什么？",
      ["过去中的持续或重复","只有未来","只有身份"],
      0
    ],

    22:[
      "第二不定过去式的重要观察点是什么？",
      ["第二字干","未来式 σ","冠词"],
      0
    ],

    23:[
      "第一不定过去式常见形式标记是什么？",
      ["σα","θη","ουσι"],
      0
    ],

    24:[
      "被动语态中主词通常怎样？",
      ["接受动作","发起动作","没有动作"],
      0
    ],

    25:[
      "完成式帮助我们观察什么？",
      ["过去动作与现在结果的联系","只有未来","只有过去"],
      0
    ]

  };


  const item =
    data[
      lesson.n
    ];


  return {

    question:
      item
        ? item[0]
        : "今天最重要的重点是什么？",

    options:
      item
        ? item[1]
        : [
            "教材中的核心知识",
            "没有重点",
            "只背中文"
          ],

    answer:
      item
        ? item[2]
        : 0

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
          data.question
        ) +

      "</div>" +

      "<div id='practiceOptions' class='practice-options'></div>" +

      "<div id='practiceFeedback'></div>" +

    "</div>";


  area.appendChild(
    section
  );


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
                  b
                ){

                  b.disabled =
                    true;

                }
              );


            $("practiceFeedback")
              .innerHTML =

                "<div class='success'>" +

                  "✓ 对了，继续。"

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

                  "先回去看一下，再试一次。"

                +

                "</div>";


            setTimeout(
              function(){

                button.classList.remove(
                  "wrong"
                );

              },
              400
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

      "先认识，不要求一次记完。"

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

        "这一课暂时没有单独词汇。"

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
CORPUS
========================================================= */

function renderCorpusGateway(
  area,
  lesson
){

  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>现在读一句真实经文</h3>" +

      "<p>" +

        "把今天刚学的内容放进新约原文里。"

      +

      "</p>" +

      "<button id='startCorpus' class='primary wide' type='button'>" +

        "开始 →"

      +

      "</button>" +

    "</div>";


  $("startCorpus")
    .onclick =
      startLessonCorpusTraining;

}


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


  const keys =
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

        return keys.includes(
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


  area.innerHTML =
    "";


  if(
    !currentCorpusTokens.length
  ){

    area.innerHTML =

      "<div class='notice-box'>" +

        "暂时没有找到合适的短例句。"

        +

      "</div>";


    markCorpusComplete();

    return;

  }


  if(
    currentCorpusIndex >=
    currentCorpusTokens.length
  ){

    finishCorpusTraining();

    return;

  }


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const seed =
    currentCorpusTokens[
      currentCorpusIndex
    ];


  const tokens =
    corpus.verses[
      seed.verseKey
    ] || [];


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


  renderHelpLevels(
    area,
    seed,
    lesson
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

    currentCorpusIndex + 1 <
    currentCorpusTokens.length

      ? "下一处 →"

      : "完成原文训练";


  next.onclick =
    function(){

      getLessonState(
        currentLessonIndex
      ).corpusReviewed++;


      currentCorpusIndex++;


      saveState();


      renderCorpusTraining();

    };


  area.appendChild(
    next
  );

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
THREE LEVEL HELP

   第一层：不给答案
   第二层：说明原理
   第三层：完整分析
========================================================= */

function renderHelpLevels(
  area,
  token,
  lesson
){

  const panel =
    document.createElement(
      "div"
    );


  panel.className =
    "help-panel";


  panel.innerHTML =

    "<button id='helpLevel1' class='secondary wide' type='button'>" +

      "需要帮助？"

    +

    "</button>" +

    "<div id='helpContent1' class='help-level hidden'>" +

      "<div class='help-level-title'>提示</div>" +

      "<div class='help-level-text'>" +

        escapeHtml(
          buildHint(
            token,
            lesson
          )
        ) +

      "</div>" +

      "<button id='helpLevel2' class='secondary wide' type='button'>" +

        "还是不明白？再讲一点"

      +

      "</button>" +

    "</div>" +

    "<div id='helpContent2' class='help-level hidden'>" +

      "<div class='help-level-title'>解释</div>" +

      "<div class='help-level-text'>" +

        escapeHtml(
          buildExplanation(
            token,
            lesson
          )
        ) +

      "</div>" +

      "<button id='helpLevel3' class='secondary wide' type='button'>" +

        "看完整分析"

      +

      "</button>" +

    "</div>" +

    "<div id='helpContent3' class='help-level hidden'>" +

      "<div class='help-level-title'>完整分析</div>" +

      "<div class='help-level-text'>" +

        buildFullAnalysis(
          token,
          lesson
        ) +

      "</div>" +

    "</div>";


  area.appendChild(
    panel
  );


  $("helpLevel1")
    .onclick =
      function(){

        $("helpContent1")
          .classList
          .remove(
            "hidden"
          );

      };


  $("helpLevel2")
    .onclick =
      function(){

        $("helpContent2")
          .classList
          .remove(
            "hidden"
          );

      };


  $("helpLevel3")
    .onclick =
      function(){

        $("helpContent3")
          .classList
          .remove(
            "hidden"
          );

      };

}


function buildHint(
  token,
  lesson
){

  if(
    lesson.kind ===
    "noun"
  ){

    return (
      "先看这个词的词尾。然后想一想：它的性、数、格是什么？"
    );

  }


  if(
    lesson.kind ===
    "case"
  ){

    return (
      "先不要翻译。注意这个词的词尾。"
    );

  }


  if(
    lesson.kind ===
    "adjective"
  ){

    return (
      "去找一个和它搭配的名词。"
    );

  }


  if(
    lesson.kind ===
    "present"
  ){

    return (
      "先观察词形，再问：这是现在式吗？主动吗？直说吗？"
    );

  }


  if(
    lesson.kind ===
    "future"
  ){

    return (
      "看看词形中有没有你刚学过的未来式特征。"
    );

  }


  if(
    lesson.kind ===
    "imperfect"
  ){

    return (
      "先问：这个动作是在过去发生的吗？"
    );

  }


  if(
    lesson.kind ===
    "aorist"
  ){

    return (
      "先识别它的形式，不要急着用中文时态去翻译。"
    );

  }


  if(
    lesson.kind ===
    "perfect"
  ){

    return (
      "想一想：这个动作过去发生后，今天还留下什么结果？"
    );

  }


  return (
    "先找出今天教材中学习的那个形式。"
  );

}


function buildExplanation(
  token,
  lesson
){

  const vocab =
    findVocabulary(
      token.lemma
    );


  const gloss =
    vocab
      ? vocab.gloss
      : token.lemma;


  if(
    lesson.kind ===
    "noun"
  ){

    return (
      "这个词的基本意思是“" +
      gloss +
      "”。现在先把注意力放在词形：性、数、格告诉我们它在句子中的位置和功能。"
    );

  }


  if(
    lesson.kind ===
    "case"
  ){

    return (
      "这个词的词形帮助我们判断它的格。主格常与主语有关，受格常与直接受词有关。先看形式，再判断功能。"
    );

  }


  if(
    lesson.kind ===
    "adjective"
  ){

    return (
      "形容词并不是孤立的。观察它的性、数、格，然后寻找和它保持一致的名词。"
    );

  }


  if(
    lesson.kind ===
    "present"
  ){

    return (
      "本课重点是识别现在式、主动语态、直说语气，再观察人称和数。"
    );

  }


  if(
    lesson.kind ===
    "relative"
  ){

    return (
      "关系词连接前后的信息。先找出它连接的对象，再看它在自己的子句中承担什么功能。"
    );

  }


  return (
    "这是你刚刚在教材中学习的内容。先根据形式判断，再回到上下文确认。"
  );

}


function buildFullAnalysis(
  token,
  lesson
){

  return (

    "<div class='analysis-block'>" +

      "<strong>" +
        "词形：" +
      "</strong>" +

      "<br>" +

      escapeHtml(
        token.word
      ) +

      "<br><br>" +

      "<strong>" +
        "词典形：" +
      "</strong>" +

      "<br>" +

      escapeHtml(
        token.lemma
      ) +

      "<br><br>" +

      tokenLineHtml(
        "词性",
        decodePOS(
          token.pos
        )
      ) +

      tokenLineHtml(
        "时态",
        token.morph.tense
      ) +

      tokenLineHtml(
        "语态",
        token.morph.voice
      ) +

      tokenLineHtml(
        "语气",
        token.morph.mood
      ) +

      tokenLineHtml(
        "人称",
        token.morph.person
      ) +

      tokenLineHtml(
        "数",
        token.morph.number
      ) +

      tokenLineHtml(
        "格",
        token.morph.case
      ) +

      tokenLineHtml(
        "性",
        token.morph.gender
      ) +

      "<br>" +

      "<strong>" +
        "学习重点：" +
      "</strong>" +

      "<br>" +

      escapeHtml(
        buildOneLineGuide(
          lesson
        )
      ) +

    "</div>"

  );

}


function tokenLineHtml(
  label,
  value
){

  if(
    !value
  ){

    return "";

  }


  return (

    "<div>" +

      escapeHtml(
        label
      ) +

      "：" +

      escapeHtml(
        value
      ) +

    "</div>"

  );

}


/* =========================================================
VOCABULARY FIND
========================================================= */

function findVocabulary(
  lemma
){

  return VOCABULARY.find(
    function(
      item
    ){

      return (
        normalize(
          item.word
        ) ===
        normalize(
          lemma
        )
      );

    }
  ) || null;

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

    tokenLineHtml(
      "词典形",
      token.lemma
    ) +

    tokenLineHtml(
      "词性",
      decodePOS(
        token.pos
      )
    ) +

    tokenLineHtml(
      "时态",
      token.morph.tense
    ) +

    tokenLineHtml(
      "语态",
      token.morph.voice
    ) +

    tokenLineHtml(
      "语气",
      token.morph.mood
    ) +

    tokenLineHtml(
      "人称",
      token.morph.person
    ) +

    tokenLineHtml(
      "数",
      token.morph.number
    ) +

    tokenLineHtml(
      "格",
      token.morph.case
    ) +

    tokenLineHtml(
      "性",
      token.morph.gender
    ) +

    "<button id='openTokenLemma' class='secondary wide' type='button'>" +

      "继续看这个词 →"

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
      "当前已经载入的原文中没有找到这个词。"
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
    findVocabulary(
      currentLemma
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
            : "词典形"

        ) +

      "</div>" +

      "<div class='lemma-help'>" +

        "需要时再看其他词形。"

      +

      "</div>" +

    "</div>" +


    "<div class='card'>" +

      "<h3>词形</h3>" +

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
        ? tokens[0].reference
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

      "<h3>回顾一下</h3>" +

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

        "完成今天的学习"

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

    return "我能不能说出名词最基本的三个观察点？";

  }


  if(
    lesson.kind ===
    "present"
  ){

    return "我看到现在式时，能不能先分析形式？";

  }


  if(
    lesson.kind ===
    "adjective"
  ){

    return "我能不能找到形容词修饰的名词？";

  }


  if(
    lesson.kind ===
    "relative"
  ){

    return "我能不能找出关系词连接的信息？";

  }


  return "我能不能用一句话说出本课最重要的内容？";

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
CORPUS STATE
========================================================= */

function markCorpusComplete(){

  const st =
    getLessonState(
      currentLessonIndex
    );


  st.corpus =
    true;


  saveState();

}


function finishCorpusTraining(){

  markCorpusComplete();


  $("corpusArea")
    .innerHTML =

      "<div class='success'>" +

        "<strong>✓ 原文训练完成</strong>" +

        "<br><br>" +

        "回到本课。"

        +

        "<button id='returnLesson' class='primary wide' type='button'>" +

          "继续 →"

        +

        "</button>" +

      "</div>";


  $("returnLesson")
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

  for(
    const book of
    BOOKS
  ){

    await loadBook(
      book.id
    );

  }

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


/* =========================================================
PARSER
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

        "下一次再见。"

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
