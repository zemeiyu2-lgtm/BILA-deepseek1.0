/* =========================================================
GBRM V2.9.1
基础版冻结候选

完整 app.js

核心：
教材
→ 知识点
→ 简短练习
→ 本课词汇
→ 精选真实新约
→ 学生先观察
→ 需要帮助？
→ 提示
→ 解释
→ 完整分析

重要：
1. MorphGNT 位置码正确解析：
   040101
   = 书卷 04
   = 章节 01
   = 经节 01

2. 精选经文同时支持：
   targetForm
   targetLemma

3. 学生端不显示：
   词频
   数据统计
   页码
   数据库信息

4. 不要求学生分析尚未学习的语法。
========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  VERSION:
    "2.9.1",

  STATE_KEY:
    "GBRM_V291_STATE",

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

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
LESSONS
========================================================= */

const LESSONS = [

  {
    n:1,
    group:"第一部分 · 引言",
    title:"希腊语",
    kind:"history",
    objective:"认识新约时代的希腊语背景。",
    content:"知道自己为什么学习新约希腊文。",
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
    content:"把字母和声音联系起来。",
    topics:["24个字母","母音","双母音","气号"]
  },

  {
    n:4,
    group:"第一部分 · 引言",
    title:"标点符号与音节",
    kind:"syllable",
    objective:"认识标点、重音和音节。",
    content:"开始准确阅读希腊文。",
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
    objective:"认识常见介词与 εἰμί。",
    content:"介词和它所带的名词要一起看。",
    topics:["介词","介词短语","εἰμί"]
  },

  {
    n:9,
    group:"第二部分 · 名词系统",
    title:"形容词",
    kind:"adjective",
    objective:"认识形容词和名词的一致。",
    content:"观察形容词与它所修饰的名词。",
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
    content:"观察人称、数和格。",
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
    group:"第三部分 · 直说语气动词系统",
    title:"动词简介",
    kind:"verb",
    objective:"建立动词分析框架。",
    content:"面对一个动词，先观察它的形式。",
    topics:["人称","数","时态","语态","语气"]
  },

  {
    n:16,
    group:"第三部分 · 直说语气动词系统",
    title:"现在式主动语态直说语气",
    kind:"present",
    objective:"掌握现在式主动直说。",
    content:"先认现在式，再看主动、直说、人称和数。",
    topics:["现在式","主动","直说","人称","数"]
  },

  {
    n:17,
    group:"第三部分 · 直说语气动词系统",
    title:"缩略动词",
    kind:"contract",
    objective:"认识缩略动词。",
    content:"建立词典形和实际词形之间的联系。",
    topics:["αω","εω","οω","缩略"]
  },

  {
    n:18,
    group:"第三部分 · 直说语气动词系统",
    title:"现在式关身／被动语态直说语气",
    kind:"mp",
    objective:"认识现在式关身／被动形式。",
    content:"先认形式，再结合上下文判断。",
    topics:["关身","被动","现在式"]
  },

  {
    n:19,
    group:"第三部分 · 直说语气动词系统",
    title:"未来式主动／关身语态直说语气",
    kind:"future",
    objective:"认识未来式主动与关身。",
    content:"先认形式，再观察人称和数。",
    topics:["未来式","主动","关身"]
  },

  {
    n:20,
    group:"第三部分 · 直说语气动词系统",
    title:"动词字根；未来式其他字形",
    kind:"stems",
    objective:"认识字根、字干与形式变化。",
    content:"理解为什么一个词会出现不同字干。",
    topics:["字根","字干","时态字干"]
  },

  {
    n:21,
    group:"第三部分 · 直说语气动词系统",
    title:"不完成式",
    kind:"imperfect",
    objective:"认识过去中的持续观点。",
    content:"观察过去中的持续、进行或重复。",
    topics:["未完成式","往昔号","持续"]
  },

  {
    n:22,
    group:"第三部分 · 直说语气动词系统",
    title:"第二不定过去式",
    kind:"aorist2",
    objective:"认识第二不定过去式。",
    content:"观察第二字干及其形式。",
    topics:["第二不定过去式","第二字干"]
  },

  {
    n:23,
    group:"第三部分 · 直说语气动词系统",
    title:"第一不定过去式",
    kind:"aorist1",
    objective:"认识第一不定过去式。",
    content:"观察第一不定过去式的形式。",
    topics:["第一不定过去式","σα"]
  },

  {
    n:24,
    group:"第三部分 · 直说语气动词系统",
    title:"不定过去式与未来式被动语态",
    kind:"passive",
    objective:"认识被动形式。",
    content:"观察谁接受了动作。",
    topics:["被动","θη","未来式被动"]
  },

  {
    n:25,
    group:"第三部分 · 直说语气动词系统",
    title:"现在完成式",
    kind:"perfect",
    objective:"认识完成式。",
    content:"观察过去动作与现在结果的联系。",
    topics:["完成式","重复号","结果"]
  }

];


/* =========================================================
VOCABULARY
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
  [17,"εὐχαριστέω","感谢"],

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
  [19,"πορεύομαι","我去/行走"],

  [20,"ἀποθνῄσκω","我死"],
  [20,"γινώσκω","我知道/认识"],
  [20,"ἐγείρω","我唤醒/举起/使复活"],
  [20,"εὐαγγελίζω","我传福音"],
  [20,"εὑρίσκω","我找到"],
  [20,"λαμβάνω","我拿/接受/娶"],
  [20,"μένω","我留下/居住"],
  [20,"ὁράω","我看见"],
  [20,"φέρω","我带/背负/结出"],

  [21,"εἰμί","是/存在"],
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
  [24,"βαπτίζω","我施洗"],

  [25,"γινώσκω","我知道/认识"],
  [25,"ποιέω","我做/使"],
  [25,"πιστεύω","我相信/信任"],
  [25,"κρίνω","判断/审判"]

].map(function(item){

  return {

    lesson:item[0],

    word:item[1],

    gloss:item[2]

  };

});


/* =========================================================
CURATED EXAMPLES

注意：

targetForm = 真实经文中的实际词形
targetLemma = 词典形

系统优先 targetForm，
然后使用 targetLemma 辅助确认。

========================================================= */

const CURATED_EXAMPLES = {

  3:[
    {
      book:"Jn",
      chapter:1,
      verse:1,

      targetForm:"λόγος",

      targetLemma:"λόγος",

      task:
        "先把这个词读出来。",

      hint:
        "先看字母，不要急着翻译。",

      explanation:
        "这一阶段最重要的是建立字母、声音和单词之间的联系。",

      analysis:
        "λόγος 是词典形。当前先学会辨认和读出，不要求进行完整形态分析。",

      teacherNote:
        "字母与发音的第一处真实经文接触。"
    }
  ],


  5:[
    {
      book:"Jn",
      chapter:1,
      verse:1,

      targetForm:"λόγος",

      targetLemma:"λόγος",

      task:
        "找到 λόγος，判断它是不是名词。",

      hint:
        "先找一个表示人物、事物或概念的词。",

      explanation:
        "希腊文名词会随着它在句中的作用发生形式变化。",

      analysis:
        "λόγος 是名词。当前重点只是认识名词，而不是一次分析所有格变化。",

      teacherNote:
        "名词系统第一处真实经文。"
    }
  ],


  6:[
    {
      book:"Jn",
      chapter:1,
      verse:1,

      targetForm:"θεόν",

      targetLemma:"θεός",

      task:
        "找到 τὸν θεόν，观察它的词尾。",

      hint:
        "先看词尾，不要先依靠词序。",

      explanation:
        "格帮助我们判断名词在句子中的基本功能。",

      analysis:
        "θεόν 是 θεός 的受格单数形式，出现在 πρὸς τὸν θεόν 中。当前重点是根据形式认识受格。",

      teacherNote:
        "主格与受格的第一处核心练习。"
    }
  ],


  7:[
    {
      book:"Jn",
      chapter:1,
      verse:6,

      targetForm:"θεοῦ",

      targetLemma:"θεός",

      task:
        "找到 θεοῦ，然后和 θεός 比较。",

      hint:
        "只比较词尾。",

      explanation:
        "同一个词会因为在句子中的作用不同而采用不同形式。",

      analysis:
        "θεοῦ 来自 θεός，是所有格单数形式。这里先学习认识形式，不要求复杂句法。",

      teacherNote:
        "所有格入门。"
    }
  ],


  8:[
    {
      book:"Jn",
      chapter:1,
      verse:6,

      targetForm:"παρὰ",

      targetLemma:"παρά",

      task:
        "把 παρὰ 和后面的词一起看。",

      hint:
        "不要把介词和后面的词完全拆开。",

      explanation:
        "介词通常和它所带的名词形成一个关系单位。",

      analysis:
        "παρὰ 在这里与 θεοῦ 构成介词短语。当前学习重点是看见介词和其词一起出现。",

      teacherNote:
        "介词短语。"
    }
  ],


  9:[
    {
      book:"Mt",
      chapter:12,
      verse:35,

      targetForm:"ἀγαθὸς",

      targetLemma:"ἀγαθός",

      task:
        "找到 ἀγαθὸς，再找和它搭配的名词。",

      hint:
        "先找到“描述”的词。",

      explanation:
        "形容词通常和它修饰的名词保持性、数、格的一致。",

      analysis:
        "ἀγαθός 在这里与 ἄνθρωπος 形成描述关系。当前重点是认识形容词与名词之间的一致。",

      teacherNote:
        "形容词一致。"
    }
  ],


  10:[
    {
      book:"Jn",
      chapter:1,
      verse:14,

      targetForm:"σὰρξ",

      targetLemma:"σάρξ",

      task:
        "找到 σὰρξ，注意它的形式。",

      hint:
        "先认识这个词，不需要背完整变化表。",

      explanation:
        "第三格变式中，词干和词尾值得特别注意。",

      analysis:
        "σὰρξ 是名词。当前先建立“第三格变式词形可能不同”的意识。",

      teacherNote:
        "第三格变式初步认识。"
    }
  ],


  11:[
    {
      book:"Jn",
      chapter:1,
      verse:23,

      targetForm:"ἐγώ",

      targetLemma:"ἐγώ",

      task:
        "看到 ἐγώ，回答：谁在说话？",

      hint:
        "先想到说话的人自己。",

      explanation:
        "ἐγώ 表达第一人称“我”。",

      analysis:
        "ἐγώ 是第一人称单数主格代名词。当前重点是认识它的基本意义和人称。",

      teacherNote:
        "第一人称代名词。"
    }
  ],


  12:[
    {
      book:"Mt",
      chapter:1,
      verse:23,

      targetForm:"αὐτοῦ",

      targetLemma:"αὐτός",

      task:
        "找到 αὐτοῦ，先判断它指向谁。",

      hint:
        "先找它所指的人。",

      explanation:
        "αὐτός 的具体功能不能脱离上下文判断。",

      analysis:
        "αὐτοῦ 来自 αὐτός。当前只要求注意词形变化和指涉关系。",

      teacherNote:
        "αὐτός 上下文使用。"
    }
  ],


  13:[
    {
      book:"Jn",
      chapter:1,
      verse:7,

      targetForm:"οὗτος",

      targetLemma:"οὗτος",

      task:
        "找到 οὗτος，问：这个词指向谁？",

      hint:
        "先不要急着翻译“这个”。",

      explanation:
        "指示词的意义需要和它所指的对象联系起来。",

      analysis:
        "οὗτος 是指示代词。当前重点是认识它的指示功能。",

      teacherNote:
        "指示代词。"
    }
  ],


  14:[
    {
      book:"Jn",
      chapter:1,
      verse:30,

      targetForm:"ὃς",

      targetLemma:"ὅς",

      task:
        "找到关系词，看看它连接什么信息。",

      hint:
        "先找到它前面的对象。",

      explanation:
        "关系代名词把前后信息连接起来。",

      analysis:
        "ὃς 是关系代名词。当前只要求认识它的连接作用，不要求画完整关系子句结构。",

      teacherNote:
        "关系代名词。"
    }
  ],


  15:[
    {
      book:"Jn",
      chapter:1,
      verse:5,

      targetForm:"φαίνει",

      targetLemma:"φαίνω",

      task:
        "找出句子中的动词。",

      hint:
        "找表达动作或状态的词。",

      explanation:
        "现在先学会认出动词，后面再逐步分析时态、语态和语气。",

      analysis:
        "φαίνει 来自 φαίνω，是动词。当前不用要求完整形态分析。",

      teacherNote:
        "动词简介。"
    }
  ],


  16:[
    {
      book:"Jn",
      chapter:1,
      verse:5,

      targetForm:"φαίνει",

      targetLemma:"φαίνω",

      task:
        "找到 φαίνει，尝试判断它的形式。",

      hint:
        "先问：现在式吗？主动吗？直说吗？",

      explanation:
        "分析顺序是现在式 → 主动 → 直说 → 人称 → 数。",

      analysis:
        "φαίνει 来自 φαίνω，是现在式、主动语态、直说语气、第三人称单数。",

      teacherNote:
        "现在式主动直说。"
    }
  ],


  17:[
    {
      book:"1Th",
      chapter:1,
      verse:2,

      targetForm:"Εὐχαριστοῦμεν",

      targetLemma:"εὐχαριστέω",

      task:
        "观察 Εὐχαριστοῦμεν，想一想它和词典形有什么关系。",

      hint:
        "先找词典形，再比较实际形式。",

      explanation:
        "缩略动词在实际变化时，词干末尾的元音会发生缩合。",

      analysis:
        "Εὐχαριστοῦμεν 来自 εὐχαριστέω，是现在式主动直说语气第一人称复数。当前重点是认识缩略后的实际形式。",

      teacherNote:
        "缩略动词。"
    }
  ],


  18:[
    {
      book:"Jn",
      chapter:12,
      verse:23,

      targetForm:"ἀποκρίνεται",

      targetLemma:"ἀποκρίνομαι",

      task:
        "观察 ἀποκρίνεται，看看它和词典形有什么不同。",

      hint:
        "先找动词词尾。",

      explanation:
        "现在式关身／被动的词尾与主动语态不同。",

      analysis:
        "ἀποκρίνεται 来自 ἀποκρίνομαι，是现在式关身／被动形式。当前不进入分词。",

      teacherNote:
        "现在式关身／被动直说。"
    }
  ],


  19:[
    {
      book:"Lk",
      chapter:15,
      verse:18,

      targetForm:"πορεύσομαι",

      targetLemma:"πορεύομαι",

      task:
        "找到 πορεύσομαι，观察它的未来式形式。",

      hint:
        "注意未来式的词形特征。",

      explanation:
        "未来式首先要从形式上认出来，再进入人称与数。",

      analysis:
        "πορεύσομαι 来自 πορεύομαι，是未来式关身形式、第一人称单数直说语气。",

      teacherNote:
        "未来式关身。"
    }
  ],


  20:[
    {
      book:"Jn",
      chapter:1,
      verse:15,

      targetForm:"γέγονεν",

      targetLemma:"γίνομαι",

      task:
        "观察 γέγονεν，并尝试把它和词典形联系起来。",

      hint:
        "不要马上认为这是另外一个词。",

      explanation:
        "动词在不同形式中可能使用不同的时态字干。",

      analysis:
        "γέγονεν 与 γίνομαι 属于同一词汇系统。当前重点是认识词干变化，不要求进行完成式完整分析。",

      teacherNote:
        "这里只显示词干意识，避免提前教授完成式。"
    }
  ],


  21:[
    {
      book:"Jn",
      chapter:1,
      verse:1,

      targetForm:"ἦν",

      targetLemma:"εἰμί",

      task:
        "找到 ἦν，想一想它是不是过去时间中的持续形式。",

      hint:
        "先认出过去，再想持续。",

      explanation:
        "未完成式帮助我们看到过去中的持续、进行或重复。",

      analysis:
        "ἦν 来自 εἰμί，是未完成式、主动语态、直说语气、第三人称单数。",

      teacherNote:
        "未完成式核心例句。"
    }
  ],


  22:[
    {
      book:"Jn",
      chapter:1,
      verse:14,

      targetForm:"ἐγένετο",

      targetLemma:"γίνομαι",

      task:
        "找到 ἐγένετο，观察它和词典形 γίνομαι 的差异。",

      hint:
        "先看词干。",

      explanation:
        "第二不定过去式常使用不同的第二字干。",

      analysis:
        "ἐγένετο 来自 γίνομαι，是第二不定过去式、关身语态、直说语气、第三人称单数。",

      teacherNote:
        "第二不定过去式。"
    }
  ],


  23:[
    {
      book:"Mt",
      chapter:3,
      verse:15,

      targetForm:"ἐποίησεν",

      targetLemma:"ποιέω",

      task:
        "找到 ἐποίησεν，看看它和词典形 ποιέω 的关系。",

      hint:
        "注意过去形式。",

      explanation:
        "第一不定过去式可以从词形特征开始认识。",

      analysis:
        "ἐποίησεν 来自 ποιέω，是第一不定过去式、主动语态、直说语气、第三人称单数。",

      teacherNote:
        "避免使用命令语气作为核心训练。"
    }
  ],


  24:[
    {
      book:"Ro",
      chapter:6,
      verse:3,

      targetForm:"ἐβαπτίσθημεν",

      targetLemma:"βαπτίζω",

      task:
        "找到 ἐβαπτίσθημεν，观察谁接受了动作。",

      hint:
        "问：谁是动作的接受者？",

      explanation:
        "被动语态中，主词通常是动作的接受者。",

      analysis:
        "ἐβαπτίσθημεν 来自 βαπτίζω，是不定过去式、被动语态、直说语气、第一人称复数。",

      teacherNote:
        "被动语态核心例句。"
    }
  ],


  25:[
    {
      book:"Jn",
      chapter:3,
      verse:18,

      targetForm:"κέκριται",

      targetLemma:"κρίνω",

      task:
        "找到 κέκριται，观察过去动作与现在有什么联系。",

      hint:
        "想一想：动作已经发生了吗？结果现在还在吗？",

      explanation:
        "完成式常把已经发生的动作与现在仍然存在的结果联系起来。",

      analysis:
        "κέκριται 来自 κρίνω，是现在完成式、被动语态、直说语气、第三人称单数。当前重点是理解完成式的结果性。",

      teacherNote:
        "完成式总结例句。"
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
      "GBRM state error:",
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

      const saved =
        JSON.parse(
          raw
        );


      if(
        saved &&
        typeof saved ===
        "object"
      ){

        return saved;

      }

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

  const continueButton =
    $("continueLesson");


  if(
    continueButton
  ){

    continueButton.onclick =
      function(){

        openLesson(
          currentLessonIndex
        );

      };

  }


  const openLessons =
    $("openLessons");


  if(
    openLessons
  ){

    openLessons.onclick =
      function(){

        $("lessonPanel")
          .classList
          .remove(
            "hidden"
          );

      };

  }


  const closeLessons =
    $("closeLessons");


  if(
    closeLessons
  ){

    closeLessons.onclick =
      function(){

        $("lessonPanel")
          .classList
          .add(
            "hidden"
          );

      };

  }


  const lessonBack =
    $("lessonBack");


  if(
    lessonBack
  ){

    lessonBack.onclick =
      goHome;

  }


  const lessonPrevious =
    $("lessonPrevious");


  if(
    lessonPrevious
  ){

    lessonPrevious.onclick =
      previousStep;

  }


  const lessonNext =
    $("lessonNext");


  if(
    lessonNext
  ){

    lessonNext.onclick =
      nextStep;

  }


  const vocabReviewBack =
    $("vocabReviewBack");


  if(
    vocabReviewBack
  ){

    vocabReviewBack.onclick =
      goHome;

  }


  const vocabReview =
    $("startVocabularyReview");


  if(
    vocabReview
  ){

    vocabReview.onclick =
      startVocabularyReview;

  }


  const corpusBack =
    $("corpusBack");


  if(
    corpusBack
  ){

    corpusBack.onclick =
      returnFromCorpus;

  }


  const lemmaBack =
    $("lemmaBack");


  if(
    lemmaBack
  ){

    lemmaBack.onclick =
      returnFromLemma;

  }


  const verseBack =
    $("verseBack");


  if(
    verseBack
  ){

    verseBack.onclick =
      returnFromVerse;

  }


  const verseBackButton =
    $("verseBackButton");


  if(
    verseBackButton
  ){

    verseBackButton.onclick =
      returnFromVerse;

  }

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


  const number =
    $("todayLessonNumber");


  const title =
    $("todayLessonTitle");


  const objective =
    $("todayLessonObjective");


  if(
    number
  ){

    number.textContent =

      "L" +
      String(
        lesson.n
      ).padStart(
        2,
        "0"
      );

  }


  if(
    title
  ){

    title.textContent =
      lesson.title;

  }


  if(
    objective
  ){

    objective.textContent =
      lesson.objective;

  }

}


/* =========================================================
COURSE PROGRESS
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


  const percentBox =
    $("coursePercent");


  const bar =
    $("courseProgress");


  const text =
    $("courseProgressText");


  if(
    percentBox
  ){

    percentBox.textContent =
      percent + "%";

  }


  if(
    bar
  ){

    bar.style.width =
      percent + "%";

  }


  if(
    text
  ){

    text.textContent =

      "已完成 " +
      completed +
      " / " +
      LESSONS.length +
      " 课";

  }

}


/* =========================================================
LESSON LIST
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

  const lesson =
    LESSONS[
      index
    ];


  if(
    !lesson
  ){

    return {};

  }


  const key =
    "L" +
    lesson.n;


  if(
    !state.lessons
  ){

    state.lessons =
      {};

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


  if(
    !lesson
  ){

    return;

  }


  const label =
    $("lessonLabel");


  const title =
    $("lessonTitle");


  if(
    label
  ){

    label.textContent =

      "LESSON " +
      String(
        lesson.n
      ).padStart(
        2,
        "0"
      );

  }


  if(
    title
  ){

    title.textContent =
      lesson.title;

  }


  const header =
    $("lessonHeader");


  if(
    header
  ){

    header.innerHTML =

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
LESSON STEPS
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
    LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  area.innerHTML =
    "";


  const progress =
    currentStep ===
    4

      ? 100

      : Math.round(
          currentStep /
          4 *
          100
        );


  const stepText =
    $("lessonStepText");


  const stepBar =
    $("lessonStepProgress");


  if(
    stepText
  ){

    stepText.textContent =

      "第 " +
      (
        currentStep +
        1
      ) +
      " 步 / 5";

  }


  if(
    stepBar
  ){

    stepBar.style.width =
      progress + "%";

  }


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


  const previous =
    $("lessonPrevious");


  const next =
    $("lessonNext");


  if(
    previous
  ){

    previous.disabled =
      currentStep === 0;

  }


  if(
    next
  ){

    next.textContent =

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

  const guides = {

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
      "先找出动词，再逐步分析。",

    present:
      "先认现在式、主动、直说。",

    contract:
      "实际词形可能不同于词典形。",

    mp:
      "先认形式，再判断功能。",

    future:
      "先认未来式形式。",

    stems:
      "把实际词形和词典形联系起来。",

    imperfect:
      "注意过去中的持续。",

    aorist2:
      "注意第二字干。",

    aorist1:
      "注意 σα 类形式。",

    passive:
      "观察谁接受动作。",

    perfect:
      "观察过去动作和现在结果的关系。"

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
      ["帮助识别不同形式","因为动词没有变化","只用于名词"],
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
    !state.vocab
  ){

    state.vocab =
      {};

  }


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


      const memory =
        getVocabState(
          item.word
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

  const examples =
    CURATED_EXAMPLES[
      lesson.n
    ] || [];


  if(
    !examples.length
  ){

    markCorpusComplete();


    area.innerHTML =

      "<div class='success'>" +

        "本课没有单独原文训练。"

      +

      "</div>";

    return;

  }


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
    const id of ids
  ){

    await loadBook(
      id
    );

  }

}


/* =========================================================
CURATED EXAMPLE
========================================================= */

function renderCuratedExample(){

  const area =
    $("corpusArea");


  if(
    !area
  ){

    return;

  }


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const examples =
    CURATED_EXAMPLES[
      lesson.n
    ] || [];


  if(
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


  const label =
    $("corpusLabel");


  if(
    label
  ){

    label.textContent =

      "LESSON " +
      String(
        lesson.n
      ).padStart(
        2,
        "0"
      );

  }


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

      "现在做"

    +

    "</div>" +

    "<div class='curated-note-text'>" +

      escapeHtml(
        example.task
      ) +

    "</div>";


  area.appendChild(
    note
  );


  renderHelp(
    area,
    example
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

    currentExampleIndex + 1 <
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
PASSAGE
========================================================= */

function renderCuratedPassage(
  tokens,
  example
){

  const box =
    $("curatedGreek");


  if(
    !box
  ){

    return;

  }


  box.innerHTML =
    "";


  if(
    !tokens.length
  ){

    box.innerHTML =

      "<div class='notice-box'>" +

        "这条例文暂时没有成功载入。"

      +

      "</div>";


    return;

  }


  /*
    双重定位：

    1. targetForm
    2. targetLemma

    先找实际词形。
    找不到再根据 Lemma 找。
  */

  let target =
    null;


  if(
    example.targetForm
  ){

    target =
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

            ||

            normalize(
              token.word
            ) ===

            normalize(
              example.targetForm
            )

          );

        }
      );

  }


  if(
    !target &&
    example.targetLemma
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


  /*
    只显示目标词附近少量内容。
    保持“短而精”。
  */

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
  else{

    const detail =
      $("corpusTokenDetail");


    if(
      detail
    ){

      detail.innerHTML =

        "<div class='notice-box'>" +

          "这条例文已经载入，但没有定位到指定词形。"

        +

      "</div>";

    }

  }

}


/* =========================================================
HELP

三级：

1. 提示
2. 解释
3. 完整分析

默认关闭。
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
CORPUS COMPLETE
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
LOAD MORPHGNT BOOK
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


    if(
      !tokens.length
    ){

      throw new Error(
        "原文文件读取成功，但没有解析出词。"
      );

    }


    corpus.books[
      book.id
    ] = {

      book,

      tokens

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
      book.id,
      error
    );


    return false;

  }

}


/* =========================================================
MORPHGNT PARSER

真实格式：

040101 P- -------- Ἐν Ἐν ἐν ἐν
040101 N- ----DSF- ἀρχῇ ἀρχῇ ἀρχῇ ἀρχή
040101 V- 3IAI-S-- ἦν ἦν ἦν εἰμί

所以：

slice(0,2) = book
slice(2,4) = chapter
slice(4,6) = verse

不是 word index。

========================================================= */

function parseMorphGNT(
  text,
  book
){

  const result =
    [];


  const lines =
    String(
      text || ""
    )
    .split(
      /\r?\n/
    );


  lines.forEach(
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


      /*
        标准 MorphGNT：

        040101

        04 = book
        01 = chapter
        01 = verse
      */

      if(
        !/^\d{6}$/.test(
          location
        )
      ){

        return;

      }


      const sourceBook =
        location.slice(
          0,
          2
        );


      const chapter =
        Number(
          location.slice(
            2,
            4
          )
        );


      const verse =
        Number(
          location.slice(
            4,
            6
          )
        );


      const parsing =
        parts[2];


      const rawText =
        cleanPunctuation(
          parts[3]
        );


      const word =
        cleanPunctuation(
          parts[4]
        );


      const normalizedWord =
        cleanPunctuation(
          parts[5]
        );


      const lemma =
        cleanPunctuation(
          parts
            .slice(
              6
            )
            .join(
              " "
            )
        );


      /*
        wordIndex：
        同一节内从1开始编号。

        不是从 location 读取。
      */

      const previousSameVerse =
        result
          .filter(
            function(
              item
            ){

              return (

                item.chapter ===
                chapter &&

                item.verse ===
                verse

              );

            }
          )
          .length;


      const wordIndex =
        previousSameVerse + 1;


      const verseKey =
        book.id +
        "-" +
        chapter +
        "-" +
        verse;


      result.push({

        bookId:
          book.id,

        sourceBook,

        bookName:
          book.name,

        chapter,

        verse,

        wordIndex,

        verseKey,

        reference:
          book.name +
          " " +
          chapter +
          ":" +
          verse,

        pos:
          parts[1],

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


/* =========================================================
PUNCTUATION
========================================================= */

function cleanPunctuation(
  value
){

  return String(
    value ?? ""
  )
  .replace(
    /^[⸂⸃]+/g,
    ""
  )
  .replace(
    /[.,;:··!?]+$/g,
    ""
  )
  .trim();

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
MORPHOLOGY DECODER
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
        S:"假设",
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


  const map = {

    A:"形容词",

    C:"连接词",

    D:"副词",

    I:"感叹词",

    N:"名词",

    P:"介词",

    R:"代词",

    V:"动词",

    X:"语助词"

  };


  return (

    map[
      value[0]
    ]

    ||

    value

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


  const vocab =
    findVocabulary(
      token.lemma
    );


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


  const button =
    $("openTokenLemma");


  if(
    button
  ){

    button.onclick =
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
LEMMA ENGINE
========================================================= */

function openLemma(
  lemma
){

  if(
    corpus.tokens.length ===
    0
  ){

    alert(
      "请先进入原文训练。"
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
      "当前载入的原文中没有找到这个词。"
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


  if(
    !area
  ){

    return;

  }


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

      const key =
        token.rawText;


      forms[key] =
        (
          forms[key] ||
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

        return (
          b[1] -
          a[1]
        );

      }
    )
    .slice(
      0,
      20
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

        "需要时再看实际词形。"

      +

      "</div>" +

    "</div>" +

    "<div class='card'>" +

      "<h3>词形</h3>" +

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

                  item.rawText ===
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

  const reference =
    $("verseReference");


  if(
    reference
  ){

    reference.textContent =

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


      span.textContent =
        token.rawText;


      span.onclick =
        function(){

          document
            .querySelectorAll(
              "#verseText .corpus-token"
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

  const questions = {

    noun:
      "我能不能说出名词最基本的三个观察点？",

    case:
      "看到名词时，我能不能先根据形式判断格？",

    adjective:
      "我能不能找到形容词修饰的名词？",

    relative:
      "我能不能找出关系词连接的信息？",

    present:
      "看到现在式时，我能不能先分析形式？",

    imperfect:
      "我能不能看出过去中的持续？",

    aorist2:
      "我能不能认出第二不定过去式？",

    aorist1:
      "我能不能认出第一不定过去式？",

    passive:
      "我能不能判断谁接受了动作？",

    perfect:
      "我能不能理解过去动作与现在结果的联系？"

  };


  return (

    questions[
      lesson.kind
    ]

    ||

    "我能不能用一句话说出本课最重要的内容？"

  );

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
COMPLETE LESSON
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
NEXT / PREVIOUS
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
    3
  ){

    if(
      !st.corpus
    ){

      startLessonCorpusTraining();

      return;

    }

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
            ).remembered

            -

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


/* =========================================================
END
========================================================= */
