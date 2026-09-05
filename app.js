/* =========================================================
GBRM V2.7

教材数字化原文训练引擎

核心改变：

不是：
教材 → 自动搜索大量 Corpus

而是：
教材知识点
↓
精选真实新约经文
↓
短而精
↓
中文讲解
↓
学生观察
↓
提示
↓
解释
↓
完整分析

========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  STATE_KEY:
    "GBRM_V27_STATE",

  SPEECH_LANG:
    "el-GR",

  SPEECH_RATE:
    0.82

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

    id:item[0],

    name:item[1],

    file:item[2]

  };

});


/* =========================================================
TEXTBOOK CURRICULUM
========================================================= */

const LESSONS = [

  {
    n:1,
    group:"第一部分 · 引言",
    title:"希腊语",
    kind:"history",
    objective:"认识新约时代的希腊语背景。",
    content:"先知道自己为什么学习新约希腊文。",
    topics:["希腊语","通用希腊文","新约"]
  },

  {
    n:2,
    group:"第一部分 · 引言",
    title:"学习希腊文",
    kind:"study",
    objective:"建立持续学习的习惯。",
    content:"学习希腊文需要持续、重复和练习。",
    topics:["目标","熟记","复习"]
  },

  {
    n:3,
    group:"第一部分 · 引言",
    title:"字母与发音",
    kind:"alphabet",
    objective:"认识希腊字母和基本发音。",
    content:"先把字母和声音联系起来。",
    topics:["24个字母","母音","双母音","气号"]
  },

  {
    n:4,
    group:"第一部分 · 引言",
    title:"标点符号与音节",
    kind:"syllable",
    objective:"认识标点、重音和音节。",
    content:"开始从文字层面准确阅读希腊文。",
    topics:["标点","重音","音节"]
  },

  {
    n:5,
    group:"第二部分 · 名词系统",
    title:"英文的名词简介",
    kind:"noun",
    objective:"建立性、数、格的基本概念。",
    content:"名词形式会随着它在句中的作用发生变化。",
    topics:["性","数","格"]
  },

  {
    n:6,
    group:"第二部分 · 名词系统",
    title:"主格与直接受格；定冠词",
    kind:"case",
    objective:"认识主格、受格和定冠词。",
    content:"开始通过词尾判断名词在句中的基本作用。",
    topics:["主格","受格","定冠词"]
  },

  {
    n:7,
    group:"第二部分 · 名词系统",
    title:"所有格与间接受格",
    kind:"case2",
    objective:"认识所有格和间接受格。",
    content:"观察名词和其他词之间的关系。",
    topics:["所有格","间接受格"]
  },

  {
    n:8,
    group:"第二部分 · 名词系统",
    title:"介词与 εἰμί",
    kind:"preposition",
    objective:"认识常见介词和 εἰμί。",
    content:"观察介词与它所带名词之间的关系。",
    topics:["介词","介词短语","εἰμί"]
  },

  {
    n:9,
    group:"第二部分 · 名词系统",
    title:"形容词",
    kind:"adjective",
    objective:"认识形容词和名词的一致。",
    content:"观察形容词与它所修饰的名词之间的关系。",
    topics:["一致","形容用法"]
  },

  {
    n:10,
    group:"第二部分 · 名词系统",
    title:"第三格变式名词",
    kind:"third",
    objective:"开始识别第三格变式。",
    content:"练习观察词干和词尾。",
    topics:["第三格变式","词干","词尾"]
  },

  {
    n:11,
    group:"第二部分 · 名词系统",
    title:"第一与第二人称代名词",
    kind:"pronoun",
    objective:"掌握第一、第二人称代名词。",
    content:"观察人称、数、格。",
    topics:["第一人称","第二人称","数","格"]
  },

  {
    n:12,
    group:"第二部分 · 名词系统",
    title:"αὐτός",
    kind:"autos",
    objective:"认识 αὐτός 的基本功能。",
    content:"先观察上下文，再决定具体功能。",
    topics:["αὐτός","强化","自己"]
  },

  {
    n:13,
    group:"第二部分 · 名词系统",
    title:"指示代名词／形容词",
    kind:"demonstrative",
    objective:"认识指示词。",
    content:"找到“这个、那个”所指向的对象。",
    topics:["οὗτος","ἐκεῖνος","呼格"]
  },

  {
    n:14,
    group:"第二部分 · 名词系统",
    title:"关系代名词",
    kind:"relative",
    objective:"认识关系代名词和关系子句。",
    content:"观察句子怎样连接更多信息。",
    topics:["关系代名词","先行词","关系子句"]
  },

  {
    n:15,
    group:"第三部分 · 动词系统",
    title:"动词简介",
    kind:"verb",
    objective:"建立动词分析框架。",
    content:"面对一个动词，先观察形式。",
    topics:["人称","数","时态","语态","语气"]
  },

  {
    n:16,
    group:"第三部分 · 动词系统",
    title:"现在式主动语态直说语气",
    kind:"present",
    objective:"掌握现在式主动直说语气。",
    content:"从一个完整词形中找出现在式、主动、直说、人称和数。",
    topics:["现在式","主动","直说","人称","数"]
  },

  {
    n:17,
    group:"第三部分 · 动词系统",
    title:"缩略动词",
    kind:"contract",
    objective:"认识缩略动词。",
    content:"把实际词形和词典形联系起来。",
    topics:["αω","εω","οω","缩略"]
  },

  {
    n:18,
    group:"第三部分 · 动词系统",
    title:"现在式关身／被动语态",
    kind:"mp",
    objective:"认识现在式关身／被动。",
    content:"先识别形式，再结合上下文判断功能。",
    topics:["关身","被动","现在式"]
  },

  {
    n:19,
    group:"第三部分 · 动词系统",
    title:"未来式主动／关身语态",
    kind:"future",
    objective:"认识未来式。",
    content:"先认形式，再观察人称和数。",
    topics:["未来式","σ","主动","关身"]
  },

  {
    n:20,
    group:"第三部分 · 动词系统",
    title:"动词字根；未来式的其他字形",
    kind:"stems",
    objective:"认识字根、字干与形式变化。",
    content:"学习为什么同一个词可能出现不同字干。",
    topics:["字根","字干","时态字干"]
  },

  {
    n:21,
    group:"第三部分 · 动词系统",
    title:"不完成式",
    kind:"imperfect",
    objective:"认识过去中的持续观点。",
    content:"观察过去时间中的持续、进行或重复。",
    topics:["未完成式","往昔号","持续"]
  },

  {
    n:22,
    group:"第三部分 · 动词系统",
    title:"第二不定过去式",
    kind:"aorist",
    objective:"认识第二不定过去式。",
    content:"观察第二字干，并与其他形式比较。",
    topics:["第二不定过去式","第二字干"]
  },

  {
    n:23,
    group:"第三部分 · 动词系统",
    title:"第一不定过去式",
    kind:"aorist",
    objective:"认识第一不定过去式。",
    content:"识别形式，并和已经学过的形式比较。",
    topics:["第一不定过去式","σα"]
  },

  {
    n:24,
    group:"第三部分 · 动词系统",
    title:"不定过去式与未来式被动",
    kind:"passive",
    objective:"认识被动形式。",
    content:"先判断形式，再观察主词与动作之间的关系。",
    topics:["被动","θη","未来式被动"]
  },

  {
    n:25,
    group:"第三部分 · 动词系统",
    title:"现在完成式",
    kind:"perfect",
    objective:"认识完成式。",
    content:"观察完成式的形式，并开始理解过去动作与现在结果的关系。",
    topics:["完成式","重复号","κα"]
  }

];


/* =========================================================
VOCABULARY

这里保留课程训练所需要的词，
不把频次等后台数据展示给学生。
========================================================= */

const VOCABULARY = [

  [3,"λόγος","言语/道"],
  [3,"θεός","神/神明"],

  [5,"λόγος","言语/道"],
  [5,"θεός","神/神明"],
  [5,"κόσμος","世界/世人"],

  [6,"ἀγάπη","爱"],
  [6,"αὐτός","他/她/它/自己"],
  [6,"βασιλεία","国度"],
  [6,"ἐν","在……里面"],
  [6,"ὁ","这"],

  [7,"οὐρανός","天/天空"],
  [7,"οὗτος","这个/这些"],
  [7,"σύ","你"],
  [7,"υἱός","儿子/子孙"],

  [8,"ἀλλά","但是/然而"],
  [8,"ἀπό","从/离开"],
  [8,"διά","藉着/因为"],
  [8,"εἰμί","是/存在"],
  [8,"ἐκ","从/出自"],
  [8,"ἡμέρα","日/白天"],
  [8,"Ἰωάννης","约翰"],
  [8,"λέγω","说/告诉"],

  [9,"ἀγαθός","好的/有用的"],
  [9,"ἀγαπητός","亲爱的"],
  [9,"αἰώνιος","永远的"],
  [9,"δοῦλος","奴隶/仆人"],
  [9,"ἐντολή","诫命/命令"],
  [9,"πιστός","忠心的/有信心的"],

  [10,"ἅγιος","圣洁的/圣徒"],
  [10,"ὄνομα","名字/名声"],
  [10,"πᾶς","每一个/所有的"],
  [10,"σάρξ","肉体/身体"],
  [10,"σῶμα","身体"],

  [11,"ἐγώ","我"],
  [11,"ἡμεῖς","我们"],
  [11,"σύ","你"],
  [11,"ὑμεῖς","你们"],
  [11,"ἀδελφός","弟兄"],
  [11,"πατήρ","父亲"],
  [11,"πίστις","信心/信仰"],
  [11,"φῶς","光"],
  [11,"χάρις","恩典/宠爱"],

  [12,"αὐτός","他/她/它/自己"],
  [12,"διδάσκαλος","老师"],
  [12,"μαθητής","门徒"],

  [13,"οὗτος","这个/这些"],
  [13,"ἐκεῖνος","那个/那些"],
  [13,"γυνή","女人/妻子"],
  [13,"δικαιοσύνη","公义"],
  [13,"μέγας","大的/伟大的"],
  [13,"πολύς","许多的/多的"],

  [14,"ἀλήθεια","真理"],
  [14,"εἰρήνη","平安"],
  [14,"ἐπαγγελία","应许"],
  [14,"θρόνος","宝座"],
  [14,"Ἰερουσαλήμ","耶路撒冷"],
  [14,"ὁδός","道路/行为"],
  [14,"ὅς","谁/哪一个"],

  [15,"ἀκούω","听见/学习"],
  [15,"βλέπω","看见/注视"],
  [15,"ἔχω","有/拿着"],
  [15,"λύω","解开/毁坏"],
  [15,"πιστεύω","我相信/信任"],

  [16,"ἀκούω","听见/学习"],
  [16,"βλέπω","看见/注视"],
  [16,"ἔχω","有/拿着"],
  [16,"λύω","解开/毁坏"],
  [16,"πιστεύω","我相信/信任"],

  [17,"ἀγαπάω","我爱/珍爱"],
  [17,"ζητέω","我寻求/渴望"],
  [17,"καλέω","我召/命名/邀请"],
  [17,"λαλέω","我说/讲"],
  [17,"πληρόω","我充满/完成/应验"],
  [17,"ποιέω","我做/使"],

  [18,"ἀποκρίνομαι","我回答"],
  [18,"δεῖ","是必须的"],
  [18,"δύναμαι","我能/有能力"],
  [18,"ἔρχομαι","我来/去"],
  [18,"τόπος","地方/地点"],

  [19,"βασιλεύς","王"],
  [19,"γεννάω","我生/产生"],
  [19,"ζάω","我活"],
  [19,"Ἰουδαία","犹太"],
  [19,"Ἰουδαῖος","犹太的/犹太人"],
  [19,"Ἰσραήλ","以色列"],
  [19,"καρπός","果子/庄稼/结果"],
  [19,"προσκυνέω","我敬拜"],

  [20,"ἀποθνῄσκω","我死"],
  [20,"γινώσκω","我知道/认识"],
  [20,"ἐγείρω","我唤醒/举起/使复活"],
  [20,"εὐαγγελίζω","我传福音"],
  [20,"εὑρίσκω","我找到"],
  [20,"λαμβάνω","我拿/接受/娶"],
  [20,"μένω","我留下/居住"],
  [20,"ὁράω","我看见"],
  [20,"φέρω","我带/背负/结出"],

  [21,"ἦν","是/存在（过去）"],

  [22,"ἀποστέλλω","我差遣"],
  [22,"βαίνω","我去"],
  [22,"γίνομαι","我成为/发生"],
  [22,"δίδωμι","我给"],
  [22,"φεύγω","我逃跑"],

  [23,"λύω","解开/毁坏"],
  [23,"ποιέω","我做/使"],

  [24,"λαμβάνω","我拿/接受/娶"],
  [24,"λύω","解开/毁坏"],

  [25,"γινώσκω","我知道/认识"],
  [25,"ποιέω","我做/使"],
  [25,"πιστεύω","我相信/信任"]

].map(function(item){

  return {

    lesson:item[0],

    word:item[1],

    gloss:item[2]

  };

});


/* =========================================================
CURATED NEW TESTAMENT EXAMPLES

V2.7 的核心数据。

每课不再：
“系统搜索一堆符合条件的经文”

而是：
“课程作者指定最适合学生的经文”

========================================================= */

const CURATED_EXAMPLES = {

  3:[
    {
      book:"Jn",
      chapter:1,
      verse:1,
      targetLemma:"λόγος",

      task:
        "先看这个词，尝试把它读出来。",

      why:
        "用新约真实经文让学生第一次把字母、声音和一个熟悉的圣经词连接起来。",

      hint:
        "先不要想中文。把注意力放在每个字母的读音上。",

      explanation:
        "这里选择 λόγος，是因为它是非常典型的新约词，同时可以帮助学生把刚学的字母真正用于阅读。",

      analysis:
        "λόγος 是词典形。本阶段最重要的不是立即分析它的格，而是能够辨认、读出并认出这个词。"
    }
  ],


  5:[
    {
      book:"Jn",
      chapter:1,
      verse:1,
      targetLemma:"λόγος",

      task:
        "看 λόγος，想一想：它是一个名词。你能找到它吗？",

      why:
        "约翰福音1:1同时出现多个名词，非常适合作为名词入门观察。",

      hint:
        "先找词形，再问它是不是一个名词。",

      explanation:
        "希腊文名词会根据它在句子里的作用改变形式。现在只需要开始注意这种变化。",

      analysis:
        "λόγος 是名词。进一步学习时，再观察它的性、数和格。"
    }
  ],


  6:[
    {
      book:"Jn",
      chapter:1,
      verse:1,
      targetLemma:"θεός",

      task:
        "找出 θεόν，然后观察它的词尾。",

      why:
        "这一节同时出现 λόγος 和 θεόν，适合学生开始观察主格与受格。",

      hint:
        "先看词尾，不要先翻译。",

      explanation:
        "θεόν 的词尾告诉我们它不是简单地以词典形出现。教材现在开始训练的，就是根据形式判断格。",

      analysis:
        "θεόν 的词典形是 θεός。这里它是受格单数形式，在短语 πρὸς τὸν θεόν 中作为介词 πρὸς 的受词。"
    }
  ],


  7:[
    {
      book:"Jn",
      chapter:1,
      verse:6,
      targetLemma:"θεός",

      task:
        "找到 θεοῦ，看看它和词典形有什么不同。",

      why:
        "θεοῦ 是一个非常清楚的所有格形式，适合学生开始观察词尾变化。",

      hint:
        "先把 θεοῦ 和 θεός 放在一起比较。",

      explanation:
        "这里的重点不是背中文，而是发现同一个词可以因为句中作用不同而改变形式。",

      analysis:
        "θεοῦ 来自 θεός。这里是所有格单数，出现在 παρὰ θεοῦ 中，表达与神的关系。"
    }
  ],


  8:[
    {
      book:"Jn",
      chapter:1,
      verse:6,
      targetLemma:"θεός",

      task:
        "找出介词 παρὰ，再看它后面的 θεοῦ。",

      why:
        "这一短句让学生同时看到介词和它所带的名词。",

      hint:
        "介词和后面的名词先一起看。",

      explanation:
        "希腊文介词通常和它的受词形成一个小单位。现在学会先找到这个单位。",

      analysis:
        "παρὰ θεοῦ 是介词短语。θεοῦ 是所有格，说明这个短语中的关系。当前阶段先掌握识别方法即可。"
    }
  ],


  9:[
    {
      book:"Mt",
      chapter:19,
      verse:17,
      targetLemma:"ἀγαθός",

      task:
        "找到 ἀγαθός，并看看它和哪个名词一起出现。",

      why:
        "这个句子很短，而且形容词的关系比较清楚，适合初学者。",

      hint:
        "找出形容词，再找和它搭配的名词。",

      explanation:
        "形容词不是孤立的。它通常会和所修饰的名词在性、数、格上保持一致。",

      analysis:
        "ἀγαθός 是形容词。这里最重要的是开始观察它与 ὁ 的组合以及它所表达的描述关系。"
    }
  ],


  10:[
    {
      book:"Jn",
      chapter:1,
      verse:14,
      targetLemma:"σάρξ",

      task:
        "找到 σάρξ，观察它的形式。",

      why:
        "σάρξ 是很好的第三格变式观察材料，学生可以开始看到词形不是简单的第一、第二格变式模式。",

      hint:
        "不要急着背完整变化表，先看它现在的形式。",

      explanation:
        "第三格变式常常需要特别注意词干和词尾。现在只建立这种观察习惯。",

      analysis:
        "σάρξ 是名词，词典形就是 σάρξ。当前重点是认识第三格变式中的特殊词形。"
    }
  ],


  11:[
    {
      book:"Jn",
      chapter:1,
      verse:20,
      targetLemma:"ἐγώ",

      task:
        "找到 ἐγώ，然后问：谁在说话？",

      why:
        "这里第一人称代名词直接出现，非常适合建立“形式—说话者”联系。",

      hint:
        "看到 ἐγώ，先想到说话的人。",

      explanation:
        "第一人称代名词表达说话者自己。之后再根据格、数判断它在句子中的具体作用。",

      analysis:
        "ἐγώ 是第一人称代名词，主格单数。它明确指出“我”这个说话者。"
    }
  ],


  12:[
    {
      book:"Mt",
      chapter:1,
      verse:23,
      targetLemma:"αὐτός",

      task:
        "找到 αὐτοῦ，先不要翻译，想一想它指向谁。",

      why:
        "αὐτός 是教材中容易让学生固定成一个中文意思的词，因此真实上下文特别重要。",

      hint:
        "先找它的指涉对象。",

      explanation:
        "αὐτός 在不同上下文中可能承担不同功能。不能看到它就机械地翻译成一个固定中文词。",

      analysis:
        "αὐτοῦ 来自 αὐτός。这里最重要的是看到词形变化，并结合上下文判断它的功能。"
    }
  ],


  13:[
    {
      book:"Jn",
      chapter:1,
      verse:7,
      targetLemma:"οὗτος",

      task:
        "找到 οὗτος，问：这个词指向谁？",

      why:
        "指示词最重要的第一步就是观察它具体指向什么。",

      hint:
        "先不要翻译“这个”，先回头找它指的人。",

      explanation:
        "指示词的意义和指涉对象紧密相关。观察上下文比单独记中文更重要。",

      analysis:
        "οὗτος 是指示代名词。这里具体指向前文的人物，需要根据上下文确认。"
    }
  ],


  14:[
    {
      book:"Jn",
      chapter:1,
      verse:27,
      targetLemma:"ὅς",

      task:
        "找到关系词，并看看它连接了什么信息。",

      why:
        "关系代名词真正的难点是理解它如何连接句子。",

      hint:
        "先找它前面的先行词，再看它在自己的子句里做什么。",

      explanation:
        "关系代名词的格不能只看先行词；要看它在关系子句中的功能。",

      analysis:
        "ὅς 是关系代名词。完整分析时要同时观察先行词与它在关系子句中的句法位置。"
    }
  ],


  15:[
    {
      book:"Jn",
      chapter:1,
      verse:3,
      targetLemma:"γίνομαι",

      task:
        "找到 ἐγένετο，先问：这是一个动词吗？",

      why:
        "动词简介首先需要让学生学会从词形中找出一个动词。",

      hint:
        "先找“发生动作”的词。",

      explanation:
        "面对希腊文动词，不要第一步就翻译。先确定它是动词，然后再逐步分析形式。",

      analysis:
        "ἐγένετο 的词典形是 γίνομαι。它是动词。更进一步才进入时态、语态、语气、人称和数。"
    }
  ],


  16:[
    {
      book:"Jn",
      chapter:1,
      verse:5,
      targetLemma:"φαίνω",

      task:
        "找到 φαίνει，尝试判断它是不是现在式。",

      why:
        "φαίνει 是清楚的现在式主动直说形式，适合本课第一次真正做动词形态识别。",

      hint:
        "先看词形，再想现在式、主动、直说。",

      explanation:
        "本课学习的顺序是：先确认现在式，再确认主动语态和直说语气，最后观察人称与数。",

      analysis:
        "φαίνει 来自 φαίνω，是现在式、主动语态、直说语气、第三人称单数。"
    }
  ],


  17:[
    {
      book:"1Jn",
      chapter:4,
      verse:10,
      targetLemma:"ἀγαπάω",

      task:
        "找到 ἠγαπήσαμεν，然后想一想：它和 ἀγαπάω 是什么关系？",

      why:
        "这个真实词形帮助学生理解实际经文中的词形和词典形并不总是完全一样。",

      hint:
        "先找词典形，再比较词形。",

      explanation:
        "缩略动词是基础阶段很重要的一步：学生开始发现词典形和经文形式之间需要建立联系。",

      analysis:
        "ἀγαπάω 是词典形。经文中的形式经过词形变化后可能看起来很不一样。当前训练重点是建立这种对应意识。"
    }
  ],


  18:[
    {
      book:"Jn",
      chapter:1,
      verse:9,
      targetLemma:"ἔρχομαι",

      task:
        "找到 ἐρχόμενον，观察它的词形。",

      why:
        "ἔρχομαι 是教材中非常重要的动词之一，也能帮助学生认识关身形式与词汇意义之间并不总是一一对应。",

      hint:
        "先看它的词典形。",

      explanation:
        "有些动词使用关身／被动形式，但意义并不是简单的“被动”。一定要结合上下文。",

      analysis:
        "ἐρχόμενον 来自 ἔρχομαι。词形属于现在式关身／被动形式，具体功能需要结合上下文理解。"
    }
  ],


  19:[
    {
      book:"Mt",
      chapter:1,
      verse:21,
      targetLemma:"καλέω",

      task:
        "找到 κληθήσεται，看看它是不是未来式。",

      why:
        "这个词形具有明显的未来被动形式，同时可以作为未来式继续训练。",

      hint:
        "先看词尾，再找未来式特征。",

      explanation:
        "未来式的形式是学生第一次需要明显识别的时态形式之一。",

      analysis:
        "κληθήσεται 来自 καλέω，属于未来式被动形式、第三人称单数。"
    }
  ],


  20:[
    {
      book:"Jn",
      chapter:1,
      verse:15,
      targetLemma:"γίνομαι",

      task:
        "观察 γέγονεν，并想一想：为什么它和 γίνομαι 看起来差很多？",

      why:
        "非常适合开始训练“词典形—实际词形—字干变化”的意识。",

      hint:
        "不要认为它是另外一个词。",

      explanation:
        "希腊文动词在不同形式中可能使用不同字干。学习字根和字干，可以减少机械死背。",

      analysis:
        "γέγονεν 与 γίνομαι 有词形上的差异，但仍然属于同一个词汇系统。当前重点是建立辨认联系。"
    }
  ],


  21:[
    {
      book:"Jn",
      chapter:1,
      verse:1,
      targetLemma:"εἰμί",

      task:
        "找到 ἦν，想一想：它是不是过去时间？",

      why:
        "ἦν 是非常典型的未完成式形式，适合作为第一处真实观察材料。",

      hint:
        "先找动词，再观察它是否带有过去时间的形式。",

      explanation:
        "未完成式帮助我们看到过去时间中的持续或进行。",

      analysis:
        "ἦν 来自 εἰμί，是未完成式、主动语态、直说语气、第三人称单数。"
    }
  ],


  22:[
    {
      book:"Jn",
      chapter:1,
      verse:14,
      targetLemma:"γίνομαι",

      task:
        "找到 ἐγένετο，观察它的词干。",

      why:
        "这是教材中很重要的第二不定过去式观察材料。",

      hint:
        "把 ἐγένετο 和 γίνομαι 放在一起。",

      explanation:
        "第二不定过去式的重要特点之一，是实际词形可能使用不同的字干。",

      analysis:
        "ἐγένετο 来自 γίνομαι，是第二不定过去式、关身语态、直说语气、第三人称单数。"
    }
  ],


  23:[
    {
      book:"Mt",
      chapter:3,
      verse:15,
      targetLemma:"ποιέω",

      task:
        "找到 ἐποίησεν，观察它和词典形 ποιέω 的关系。",

      why:
        "第一不定过去式非常适合学生练习“词典形 → 实际形式”。",

      hint:
        "看看中间是不是出现了你刚学过的 σα。",

      explanation:
        "第一不定过去式通常可以从 σα 形式特征入手识别。",

      analysis:
        "ἐποίησεν 来自 ποιέω，是第一不定过去式、主动语态、直说语气、第三人称单数。"
    }
  ],


  24:[
    {
      book:"Mt",
      chapter:1,
      verse:21,
      targetLemma:"καλέω",

      task:
        "找到 κληθήσεται，观察它的被动形式。",

      why:
        "这一形式同时适合复习未来式和进入被动语态。",

      hint:
        "注意 θη 和未来式形式。",

      explanation:
        "被动语态首先要观察谁接受动作。",

      analysis:
        "κληθήσεται 来自 καλέω，是未来式被动、直说语气、第三人称单数。"
    }
  ],


  25:[
    {
      book:"1Jn",
      chapter:4,
      verse:10,
      targetLemma:"ἀγαπάω",

      task:
        "找到 ἠγαπήκαμεν，看看这个词形和过去动作有什么关系。",

      why:
        "完成式的重点不是单纯“过去”，而是观察已经发生的动作与现在状态之间的联系。",

      hint:
        "注意词形中的完成式特征。",

      explanation:
        "完成式常把过去发生的动作和现在仍然存在的结果联系起来。",

      analysis:
        "ἠγαπήκαμεν 来自 ἀγαπάω，属于完成式、主动语态、直说语气、第一人称复数。当前重点是先认出完成式，再理解其结果性。"
    }
  ]

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


let currentExampleIndex =
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
BASIC
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


  currentExampleIndex =
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

    renderTextbook(
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

        "记住一句话"

      +

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

  const guide = {

    history:
      "先知道为什么学习新约希腊文。",

    study:
      "每天学习一点，反复回来。",

    alphabet:
      "把字母、声音和单词连起来。",

    syllable:
      "先读准文字，再进入单词。",

    noun:
      "看到名词，先看性、数、格。",

    case:
      "先看词尾，再判断功能。",

    case2:
      "观察名词之间的关系。",

    preposition:
      "介词和它带的名词一起看。",

    adjective:
      "看看形容词修饰哪个名词。",

    third:
      "先找词干，再看词尾。",

    pronoun:
      "先问代名词指谁。",

    autos:
      "αὐτός 要结合上下文。",

    demonstrative:
      "先找“这个、那个”指什么。",

    relative:
      "先找关系词，再看它连接什么。",

    verb:
      "先分析形式，再翻译。",

    present:
      "先认现在式、主动、直说。",

    contract:
      "实际词形可能不同于词典形。",

    mp:
      "先认形式，再判断功能。",

    future:
      "先认未来式形式。",

    stems:
      "把实际词形和词典形连起来。",

    imperfect:
      "注意过去中的持续。",

    aorist:
      "先认形式，不急着套中文时态。",

    passive:
      "观察谁接受动作。",

    perfect:
      "观察过去动作与现在结果的关系。"

  };


  return (
    guide[
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

  const questions = {

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
      "介词首先应该和什么一起看？",
      ["它所带的名词","下一课","中文答案"],
      0
    ],

    9:[
      "形容词通常和名词在哪些方面一致？",
      ["性、数、格","时态、语态","只有性"],
      0
    ],

    10:[
      "第三格变式首先要观察什么？",
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
      "指示词首先要观察什么？",
      ["它具体指向什么","中文长度","词频"],
      0
    ],

    14:[
      "关系代名词的格主要看什么？",
      ["它在关系子句中的功能","中文翻译","章节号"],
      0
    ],

    15:[
      "分析动词时首先应该做什么？",
      ["观察形式","立刻翻译","查神学资料"],
      0
    ],

    16:[
      "现在式主动直说需要观察哪些方面？",
      ["现在式、主动、直说、人称、数","只有过去时间","只有中文"],
      0
    ],

    17:[
      "缩略动词最重要的学习意识是什么？",
      ["词典形与实际词形要建立联系","所有词都一样","只背中文"],
      0
    ],

    18:[
      "关身／被动形式最终需要结合什么？",
      ["上下文","词频","章节编号"],
      0
    ],

    19:[
      "未来式首先需要观察什么？",
      ["形式特征","中文长度","词典页码"],
      0
    ],

    20:[
      "为什么学习字根和字干？",
      ["帮助认识不同形式","因为词没有变化","只用于名词"],
      0
    ],

    21:[
      "未完成式主要帮助看到什么？",
      ["过去中的持续或重复","只有未来","只有身份"],
      0
    ],

    22:[
      "第二不定过去式需要特别注意什么？",
      ["第二字干","定冠词","中文翻译"],
      0
    ],

    23:[
      "第一不定过去式常见形式特征是什么？",
      ["σα","θη","μαι"],
      0
    ],

    24:[
      "被动语态中主词通常是怎样的一方？",
      ["接受动作","发起动作","没有动作"],
      0
    ],

    25:[
      "完成式主要帮助观察什么？",
      ["过去动作与现在结果的联系","只有未来","只有过去"],
      0
    ]

  };


  const item =
    questions[
      lesson.n
    ];


  return {

    question:
      item
        ? item[0]
        : "今天最重要的知识是什么？",

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


            $("practiceFeedback")
              .innerHTML =

                "<div class='notice-box'>" +

                  "再看一下教材，再试一次。"

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

      wrong:0

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

      "先认识，不要求一次全部记住。"

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

        "这一课没有需要单独学习的词汇。"

      +

      "</div>";

  }


  list.forEach(
    function(
      item
    ){

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
            getVocabState(
              item.word
            )
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

            const memory =
              getVocabState(
                item.word
              );


            memory.remembered++;

            memory.seen++;


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


      grid.appendChild(
        card
      );

    }
  );


  st.vocabulary =
    true;


  saveState();

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

      "<h3>现在读一句真实经文</h3>" +

      "<p>" +

        "把今天刚学的内容放进新约原文。"

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


/* =========================================================
CURATED CORPUS
========================================================= */

async function startLessonCorpusTraining(){

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const examples =
    CURATED_EXAMPLES[
      lesson.n
    ] || [];


  if(
    !examples.length
  ){

    markCorpusComplete();


    currentStep =
      4;


    renderLesson();

    return;

  }


  currentExampleIndex =
    0;


  await loadCuratedBooks(
    examples
  );


  renderCuratedExample();

  go(
    "corpus"
  );

}


async function loadCuratedBooks(
  examples
){

  const ids =
    [
      ...new Set(
        examples.map(
          function(
            example
          ){

            return example.book;

          }
        )
      )
    ];


  for(
    const id of
    ids
  ){

    await loadBook(
      id
    );

  }

}


function renderCuratedExample(){

  const area =
    $("corpusArea");


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const examples =
    CURATED_EXAMPLES[
      lesson.n
    ] || [];


  if(
    !examples.length ||
    currentExampleIndex >=
    examples.length
  ){

    finishCorpusTraining();

    return;

  }


  const example =
    examples[
      currentExampleIndex
    ];


  const verseKey =
    example.book +
    "-" +
    example.chapter +
    "-" +
    example.verse;


  const tokens =
    corpus.verses[
      verseKey
    ] || [];


  $("corpusLabel")
    .textContent =

      "LESSON " +
      String(
        lesson.n
      ).padStart(
        2,
        "0"
      );


  area.innerHTML =
    "";


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "corpus-card";


  card.innerHTML =

    "<div class='corpus-reference'>" +

      escapeHtml(
        formatReference(
          example
        )
      ) +

    "</div>" +

    "<div id='curatedGreek' class='corpus-greek'></div>" +

    "<div id='corpusTokenDetail'></div>";


  area.appendChild(
    card
  );


  renderCuratedPassage(
    tokens,
    example
  );


  const note =
    document.createElement(
      "div"
    );


  note.className =
    "curated-note";


  note.innerHTML =

    "<div class='curated-note-title'>" +

      "为什么选这一句"

    +

    "</div>" +

    "<div class='curated-note-text'>" +

      escapeHtml(
        example.why
      ) +

    "</div>";


  area.appendChild(
    note
  );


  renderHelp(
    area,
    example
  );


  const task =
    document.createElement(
      "div"
    );


  task.className =
    "training-task";


  task.innerHTML =

    "<strong>现在做：</strong>" +

    escapeHtml(
      example.task
    );


  area.appendChild(
    task
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

    currentExampleIndex +
    1 <
    examples.length

      ? "下一处 →"

      : "完成原文训练";


  next.onclick =
    function(){

      const st =
        getLessonState(
          currentLessonIndex
        );


      st.corpusReviewed++;


      currentExampleIndex++;


      saveState();


      renderCuratedExample();

    };


  area.appendChild(
    next
  );

}


/* =========================================================
REFERENCE
========================================================= */

function formatReference(
  example
){

  const book =
    BOOKS.find(
      function(
        item
      ){

        return (
          item.id ===
          example.book
        );

      }
    );


  return (

    (
      book
        ? book.name
        : example.book
    ) +

    " " +

    example.chapter +

    ":" +

    example.verse

  );

}


/* =========================================================
SHORT PASSAGE
========================================================= */

function renderCuratedPassage(
  tokens,
  example
){

  const box =
    $("curatedGreek");


  box.innerHTML =
    "";


  if(
    !tokens.length
  ){

    box.textContent =
      "正在读取原文……";


    return;

  }


  let target =
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
          target &&
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
                "#curatedGreek .corpus-token"
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


  if(
    target
  ){

    renderTokenDetail(
      target,
      "corpusTokenDetail"
    );

  }

}


/* =========================================================
HELP LEVELS
========================================================= */

function renderHelp(
  area,
  example
){

  const panel =
    document.createElement(
      "div"
    );


  panel.className =
    "help-panel";


  panel.innerHTML =

    "<button id='helpButton' class='help-button' type='button'>" +

      "需要帮助？"

    +

    "</button>" +

    "<div id='help1' class='help-level hidden'>" +

      "<div class='help-level-title'>" +

        "提示"

      +

      "</div>" +

      "<div class='help-level-text'>" +

        escapeHtml(
          example.hint
        ) +

      "</div>" +

      "<button id='help2Button' class='secondary wide' type='button'>" +

        "还是不明白？"

      +

      "</button>" +

    "</div>" +

    "<div id='help2' class='help-level hidden'>" +

      "<div class='help-level-title'>" +

        "解释"

      +

      "</div>" +

      "<div class='help-level-text'>" +

        escapeHtml(
          example.explanation
        ) +

      "</div>" +

      "<button id='help3Button' class='secondary wide' type='button'>" +

        "看完整分析"

      +

      "</button>" +

    "</div>" +

    "<div id='help3' class='help-level hidden'>" +

      "<div class='help-level-title'>" +

        "完整分析"

      +

      "</div>" +

      "<div class='help-level-text'>" +

        escapeHtml(
          example.analysis
        ) +

      "</div>" +

    "</div>";


  area.appendChild(
    panel
  );


  $("helpButton")
    .onclick =
      function(){

        $("help1")
          .classList
          .remove(
            "hidden"
          );

      };


  $("help2Button")
    .onclick =
      function(){

        $("help2")
          .classList
          .remove(
            "hidden"
          );

      };


  $("help3Button")
    .onclick =
      function(){

        $("help3")
          .classList
          .remove(
            "hidden"
          );

      };

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

      book:book,

      tokens:tokens

    };


    tokens.forEach(
      addToken
    );


    return true;

  }

  catch(
    error
  ){

    console.warn(
      "GBRM corpus load:",
      error
    );


    return false;

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


  const vocab =
    findVocabulary(
      token.lemma
    );


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
      "中文",
      vocab
        ? vocab.gloss
        : ""
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

      "继续看这个词 →"

    +

    "</button>";


  const lemmaButton =
    $("openTokenLemma");


  if(
    lemmaButton
  ){

    lemmaButton.onclick =
      function(){

        currentReturn =
          "corpus";


        openLemma(
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


  const direct = {

    "A-":"形容词",
    "C-":"连接词",
    "D-":"副词",
    "I-":"感叹词",
    "N-":"名词",
    "P-":"介词",
    "RA":"定冠词",
    "RD":"指示代词",
    "RI":"疑问/不定代词",
    "RP":"人称代词",
    "RR":"关系代词",
    "V-":"动词",
    "X-":"语助词"

  };


  return (
    direct[
      value
    ]
    ||
    direct[
      value.slice(
        0,
        2
      )
    ]
    ||
    value
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
LEMMA
========================================================= */

function openLemma(
  lemma
){

  if(
    corpus.tokens.length ===
    0
  ){

    alert(
      "请先进入原文训练，让系统载入需要的原文。"
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

    return "看到现在式时，我能不能先分析形式？";

  }


  if(
    lesson.kind ===
    "relative"
  ){

    return "我能不能找出关系词连接的信息？";

  }


  if(
    lesson.kind ===
    "perfect"
  ){

    return "我能不能认出完成式，并理解它与现在结果的关系？";

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
            LESSONS.length -
            1
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
          LESSONS.length -
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


/* =========================================================
END
========================================================= */
