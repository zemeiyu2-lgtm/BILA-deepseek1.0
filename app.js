/* =========================================================
GBRM V2.9.2
Greek Bible Reading Model
圣经古希腊文基础学习引擎

核心结构：

首页
 ↓
教材课程
 ↓
教材内容
 ↓
练习
 ↓
词汇
 ↓
真实新约原文
 ↓
提示 / 解释 / 完整分析
 ↓
课程完成

设计原则：

1. 教材是主轴
2. 原文训练是真实新约
3. 原文短而精
4. 中文帮助为主
5. 不要求学生分析尚未学习的语法
6. MorphGNT 只负责原文与形态数据
7. 网络异常不影响课程进入
========================================================= */


/* =========================================================
CONFIG
========================================================= */

const CONFIG = {

  VERSION: "2.9.2",

  STATE_KEY: "GBRM_V292_STATE",

  RAW_BASE:
    "https://raw.githubusercontent.com/morphgnt/sblgnt/master/",

  SPEECH_LANG: "el-GR",

  SPEECH_RATE: 0.82

};


/* =========================================================
BOOKS
========================================================= */

const BOOKS = [

  ["Mt", "马太福音", "61-Mt-morphgnt.txt"],
  ["Mk", "马可福音", "62-Mk-morphgnt.txt"],
  ["Lk", "路加福音", "63-Lk-morphgnt.txt"],
  ["Jn", "约翰福音", "64-Jn-morphgnt.txt"],
  ["Ac", "使徒行传", "65-Ac-morphgnt.txt"],
  ["Ro", "罗马书", "66-Ro-morphgnt.txt"],
  ["1Co", "哥林多前书", "67-1Co-morphgnt.txt"],
  ["2Co", "哥林多后书", "68-2Co-morphgnt.txt"],
  ["Ga", "加拉太书", "69-Ga-morphgnt.txt"],
  ["Eph", "以弗所书", "70-Eph-morphgnt.txt"],
  ["Php", "腓立比书", "71-Php-morphgnt.txt"],
  ["Col", "歌罗西书", "72-Col-morphgnt.txt"],
  ["1Th", "帖撒罗尼迦前书", "73-1Th-morphgnt.txt"],
  ["2Th", "帖撒罗尼迦后书", "74-2Th-morphgnt.txt"],
  ["1Ti", "提摩太前书", "75-1Ti-morphgnt.txt"],
  ["2Ti", "提摩太后书", "76-2Ti-morphgnt.txt"],
  ["Tit", "提多书", "77-Tit-morphgnt.txt"],
  ["Phm", "腓利门书", "78-Phm-morphgnt.txt"],
  ["Heb", "希伯来书", "79-Heb-morphgnt.txt"],
  ["Jas", "雅各书", "80-Jas-morphgnt.txt"],
  ["1Pe", "彼得前书", "81-1Pe-morphgnt.txt"],
  ["2Pe", "彼得后书", "82-2Pe-morphgnt.txt"],
  ["1Jn", "约翰一书", "83-1Jn-morphgnt.txt"],
  ["2Jn", "约翰二书", "84-2Jn-morphgnt.txt"],
  ["3Jn", "约翰三书", "85-3Jn-morphgnt.txt"],
  ["Jud", "犹大书", "86-Jud-morphgnt.txt"],
  ["Re", "启示录", "87-Re-morphgnt.txt"]

].map(function(item){

  return {

    id: item[0],

    name: item[1],

    file: item[2]

  };

});


/* =========================================================
LESSONS
========================================================= */

const LESSONS = [

  {
    n: 1,
    group: "第一部分 · 引言",
    title: "希腊语",
    kind: "history",
    objective: "认识新约时代的希腊语背景。",
    content: "知道自己为什么学习新约希腊文。"
  },

  {
    n: 2,
    group: "第一部分 · 引言",
    title: "学习希腊文",
    kind: "study",
    objective: "建立持续学习的习惯。",
    content: "学习希腊文需要持续、重复和练习。"
  },

  {
    n: 3,
    group: "第一部分 · 引言",
    title: "字母与发音",
    kind: "alphabet",
    objective: "认识希腊字母和基本发音。",
    content: "把字母和声音联系起来。"
  },

  {
    n: 4,
    group: "第一部分 · 引言",
    title: "标点符号与音节",
    kind: "syllable",
    objective: "认识标点、重音和音节。",
    content: "开始准确阅读希腊文。"
  },

  {
    n: 5,
    group: "第二部分 · 名词系统",
    title: "英文的名词简介",
    kind: "noun",
    objective: "建立性、数、格的基本概念。",
    content: "名词形式会随着它在句中的作用发生变化。"
  },

  {
    n: 6,
    group: "第二部分 · 名词系统",
    title: "主格与直接受格；定冠词",
    kind: "case",
    objective: "认识主格、受格和定冠词。",
    content: "开始通过词尾判断名词在句中的基本作用。"
  },

  {
    n: 7,
    group: "第二部分 · 名词系统",
    title: "所有格与间接受格",
    kind: "case2",
    objective: "认识所有格和间接受格。",
    content: "观察名词和其他词之间的关系。"
  },

  {
    n: 8,
    group: "第二部分 · 名词系统",
    title: "介词与 εἰμί",
    kind: "preposition",
    objective: "认识常见介词与 εἰμί。",
    content: "介词和它所带的名词一起看。"
  },

  {
    n: 9,
    group: "第二部分 · 名词系统",
    title: "形容词",
    kind: "adjective",
    objective: "认识形容词和名词的一致。",
    content: "观察形容词与它所修饰的名词。"
  },

  {
    n: 10,
    group: "第二部分 · 名词系统",
    title: "第三格变式名词",
    kind: "third",
    objective: "开始识别第三格变式。",
    content: "练习观察词干和词尾。"
  },

  {
    n: 11,
    group: "第二部分 · 名词系统",
    title: "第一与第二人称代名词",
    kind: "pronoun",
    objective: "掌握第一、第二人称代名词。",
    content: "观察人称、数和格。"
  },

  {
    n: 12,
    group: "第二部分 · 名词系统",
    title: "αὐτός",
    kind: "autos",
    objective: "认识 αὐτός 的基本功能。",
    content: "先观察上下文，再决定具体功能。"
  },

  {
    n: 13,
    group: "第二部分 · 名词系统",
    title: "指示代名词／形容词",
    kind: "demonstrative",
    objective: "认识指示词。",
    content: "找到“这个、那个”所指向的对象。"
  },

  {
    n: 14,
    group: "第二部分 · 名词系统",
    title: "关系代名词",
    kind: "relative",
    objective: "认识关系代名词。",
    content: "观察句子怎样连接更多信息。"
  },

  {
    n: 15,
    group: "第三部分 · 直说语气动词系统",
    title: "动词简介",
    kind: "verb",
    objective: "建立动词分析框架。",
    content: "面对一个动词，先观察它的形式。"
  },

  {
    n: 16,
    group: "第三部分 · 直说语气动词系统",
    title: "现在式主动语态直说语气",
    kind: "present",
    objective: "掌握现在式主动直说。",
    content: "先认现在式，再看主动、直说、人称和数。"
  },

  {
    n: 17,
    group: "第三部分 · 直说语气动词系统",
    title: "缩略动词",
    kind: "contract",
    objective: "认识缩略动词。",
    content: "建立词典形和实际词形之间的联系。"
  },

  {
    n: 18,
    group: "第三部分 · 直说语气动词系统",
    title: "现在式关身／被动语态直说语气",
    kind: "mp",
    objective: "认识现在式关身／被动形式。",
    content: "先认形式，再结合上下文判断。"
  },

  {
    n: 19,
    group: "第三部分 · 直说语气动词系统",
    title: "未来式主动／关身语态直说语气",
    kind: "future",
    objective: "认识未来式主动与关身。",
    content: "先认形式，再观察人称和数。"
  },

  {
    n: 20,
    group: "第三部分 · 直说语气动词系统",
    title: "动词字根；未来式其他字形",
    kind: "stems",
    objective: "认识字根、字干与形式变化。",
    content: "理解为什么一个词会出现不同字干。"
  },

  {
    n: 21,
    group: "第三部分 · 直说语气动词系统",
    title: "不完成式",
    kind: "imperfect",
    objective: "认识过去中的持续观点。",
    content: "观察过去中的持续、进行或重复。"
  },

  {
    n: 22,
    group: "第三部分 · 直说语气动词系统",
    title: "第二不定过去式",
    kind: "aorist2",
    objective: "认识第二不定过去式。",
    content: "观察第二字干及其形式。"
  },

  {
    n: 23,
    group: "第三部分 · 直说语气动词系统",
    title: "第一不定过去式",
    kind: "aorist1",
    objective: "认识第一不定过去式。",
    content: "观察第一不定过去式的形式。"
  },

  {
    n: 24,
    group: "第三部分 · 直说语气动词系统",
    title: "不定过去式与未来式被动语态",
    kind: "passive",
    objective: "认识被动形式。",
    content: "观察谁接受了动作。"
  },

  {
    n: 25,
    group: "第三部分 · 直说语气动词系统",
    title: "现在完成式",
    kind: "perfect",
    objective: "认识完成式。",
    content: "观察过去动作与现在结果的联系。"
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
CURATED NEW TESTAMENT EXAMPLES
========================================================= */

const CURATED_EXAMPLES = {

  3:{
    book:"Jn",
    chapter:1,
    verse:1,
    targetForm:"λόγος",
    targetLemma:"λόγος",
    task:"先把这个词读出来。",
    hint:"先看字母，不要急着翻译。",
    explanation:"这一阶段最重要的是建立字母、声音和单词之间的联系。",
    analysis:"λόγος 是词典形。当前先学会辨认和读出。"
  },

  5:{
    book:"Jn",
    chapter:1,
    verse:1,
    targetForm:"λόγος",
    targetLemma:"λόγος",
    task:"找到 λόγος，判断它是不是名词。",
    hint:"先找表示人物、事物或概念的词。",
    explanation:"希腊文名词会随着它在句中的作用发生形式变化。",
    analysis:"λόγος 是名词。当前重点只是认识名词。"
  },

  6:{
    book:"Jn",
    chapter:1,
    verse:1,
    targetForm:"θεόν",
    targetLemma:"θεός",
    task:"找到 τὸν θεόν，观察它的词尾。",
    hint:"先看词尾，不要先依靠词序。",
    explanation:"格帮助我们判断名词在句子中的基本功能。",
    analysis:"θεόν 是 θεός 的受格单数形式。"
  },

  7:{
    book:"Jn",
    chapter:1,
    verse:6,
    targetForm:"θεοῦ",
    targetLemma:"θεός",
    task:"找到 θεοῦ，然后和 θεός 比较。",
    hint:"只比较词尾。",
    explanation:"同一个词会因为在句中的作用不同而采用不同形式。",
    analysis:"θεοῦ 来自 θεός，是所有格单数形式。"
  },

  8:{
    book:"Jn",
    chapter:1,
    verse:6,
    targetForm:"παρὰ",
    targetLemma:"παρά",
    task:"把 παρὰ 和后面的词一起看。",
    hint:"先找到介词。",
    explanation:"介词通常和它所带的名词形成一个关系单位。",
    analysis:"παρὰ 与 θεοῦ 构成介词短语。"
  },

  9:{
    book:"Mt",
    chapter:12,
    verse:35,
    targetForm:"ἀγαθὸς",
    targetLemma:"ἀγαθός",
    task:"找到 ἀγαθὸς，再找和它搭配的名词。",
    hint:"先找到“描述”的词。",
    explanation:"形容词通常和名词保持性、数、格的一致。",
    analysis:"ἀγαθὸς 与 ἄνθρωπος 形成描述关系。"
  },

  10:{
    book:"Jn",
    chapter:1,
    verse:14,
    targetForm:"σάρξ",
    targetLemma:"σάρξ",
    task:"找到 σάρξ，注意它的形式。",
    hint:"先认识这个词。",
    explanation:"第三格变式中，词干和词尾值得特别注意。",
    analysis:"σάρξ 是名词。当前先建立第三格变式的形式意识。"
  },

  11:{
    book:"Jn",
    chapter:1,
    verse:23,
    targetForm:"ἐγώ",
    targetLemma:"ἐγώ",
    task:"看到 ἐγώ，回答：谁在说话？",
    hint:"先想到说话的人自己。",
    explanation:"ἐγώ 表达第一人称“我”。",
    analysis:"ἐγώ 是第一人称单数主格代名词。"
  },

  12:{
    book:"Mt",
    chapter:1,
    verse:23,
    targetForm:"αὐτοῦ",
    targetLemma:"αὐτός",
    task:"找到 αὐτοῦ，先判断它指向谁。",
    hint:"先找它所指的人。",
    explanation:"αὐτός 的具体功能需要结合上下文。",
    analysis:"αὐτοῦ 来自 αὐτός。当前只要求注意词形与指涉。"
  },

  13:{
    book:"Jn",
    chapter:1,
    verse:7,
    targetForm:"οὗτος",
    targetLemma:"οὗτος",
    task:"找到 οὗτος，问：它指向谁？",
    hint:"先不要急着翻译。",
    explanation:"指示词需要和它所指的对象联系起来。",
    analysis:"οὗτος 是指示代词。"
  },

  14:{
    book:"Jn",
    chapter:1,
    verse:30,
    targetForm:"ὃς",
    targetLemma:"ὅς",
    task:"找到关系词，看看它连接什么信息。",
    hint:"先找到它前面的对象。",
    explanation:"关系代名词把前后信息连接起来。",
    analysis:"ὃς 是关系代名词。当前不要求完整关系子句分析。"
  },

  15:{
    book:"Jn",
    chapter:1,
    verse:5,
    targetForm:"φαίνει",
    targetLemma:"φαίνω",
    task:"找出句中的动词。",
    hint:"找表达动作或状态的词。",
    explanation:"现在先学会认出动词。",
    analysis:"φαίνει 来自 φαίνω，是动词。"
  },

  16:{
    book:"Jn",
    chapter:1,
    verse:5,
    targetForm:"φαίνει",
    targetLemma:"φαίνω",
    task:"找到 φαίνει，尝试判断它的形式。",
    hint:"先问：现在式吗？主动吗？直说吗？",
    explanation:"分析顺序是现在式 → 主动 → 直说 → 人称 → 数。",
    analysis:"φαίνει 是现在式、主动语态、直说语气、第三人称单数。"
  },

  17:{
    book:"1Th",
    chapter:1,
    verse:2,
    targetForm:"Εὐχαριστοῦμεν",
    targetLemma:"εὐχαριστέω",
    task:"观察 Εὐχαριστοῦμεν，想一想它和词典形有什么关系。",
    hint:"先找词典形。",
    explanation:"缩略动词在实际变化时会发生元音缩合。",
    analysis:"Εὐχαριστοῦμεν 来自 εὐχαριστέω，是现在式主动直说语气第一人称复数。"
  },

  18:{
    book:"Jn",
    chapter:12,
    verse:23,
    targetForm:"ἀποκρίνεται",
    targetLemma:"ἀποκρίνομαι",
    task:"观察 ἀποκρίνεται，看看它和词典形有什么不同。",
    hint:"先找动词词尾。",
    explanation:"现在式关身／被动的词尾与主动语态不同。",
    analysis:"ἀποκρίνεται 来自 ἀποκρίνομαι，是现在式关身／被动形式。"
  },

  19:{
    book:"Lk",
    chapter:15,
    verse:18,
    targetForm:"πορεύσομαι",
    targetLemma:"πορεύομαι",
    task:"找到 πορεύσομαι，观察它的未来式形式。",
    hint:"注意未来式的形式。",
    explanation:"未来式先从形式上认出来。",
    analysis:"πορεύσομαι 来自 πορεύομαι，是未来式关身、第一人称单数、直说语气。"
  },

  20:{
    book:"Jn",
    chapter:1,
    verse:15,
    targetForm:"γέγονεν",
    targetLemma:"γίνομαι",
    task:"观察 γέγονεν，并尝试和词典形联系起来。",
    hint:"不要马上认为它是另一个词。",
    explanation:"动词在不同形式中可能使用不同的时态字干。",
    analysis:"γέγονεν 与 γίνομαι 属于同一词汇系统。当前只学习字干变化。"
  },

  21:{
    book:"Jn",
    chapter:1,
    verse:1,
    targetForm:"ἦν",
    targetLemma:"εἰμί",
    task:"找到 ἦν，想一想它是不是过去中的持续形式。",
    hint:"先认出过去。",
    explanation:"未完成式帮助我们看到过去中的持续。",
    analysis:"ἦν 来自 εἰμί，是未完成式主动直说第三人称单数。"
  },

  22:{
    book:"Jn",
    chapter:1,
    verse:14,
    targetForm:"ἐγένετο",
    targetLemma:"γίνομαι",
    task:"找到 ἐγένετο，观察它和词典形的差异。",
    hint:"先看词干。",
    explanation:"第二不定过去式常使用不同的第二字干。",
    analysis:"ἐγένετο 来自 γίνομαι，是第二不定过去式、关身语态、直说语气、第三人称单数。"
  },

  23:{
    book:"Mt",
    chapter:3,
    verse:15,
    targetForm:"ἐποίησεν",
    targetLemma:"ποιέω",
    task:"找到 ἐποίησεν，看看它和词典形的关系。",
    hint:"注意过去形式。",
    explanation:"第一不定过去式可以从词形特征开始认识。",
    analysis:"ἐποίησεν 来自 ποιέω，是第一不定过去式、主动、直说、第三人称单数。"
  },

  24:{
    book:"Ro",
    chapter:6,
    verse:3,
    targetForm:"ἐβαπτίσθημεν",
    targetLemma:"βαπτίζω",
    task:"找到 ἐβαπτίσθημεν，观察谁接受了动作。",
    hint:"问：谁接受动作？",
    explanation:"被动语态中，主词通常是动作的接受者。",
    analysis:"ἐβαπτίσθημεν 来自 βαπτίζω，是不定过去式被动、直说语气、第一人称复数。"
  },

  25:{
    book:"Jn",
    chapter:3,
    verse:18,
    targetForm:"κέκριται",
    targetLemma:"κρίνω",
    task:"找到 κέκριται，观察过去动作与现在有什么联系。",
    hint:"想想结果现在还在不在。",
    explanation:"完成式常把过去动作与现在结果联系起来。",
    analysis:"κέκριται 来自 κρίνω，是现在完成式被动、直说语气、第三人称单数。"
  }

};


/* =========================================================
STATE
========================================================= */

let state =
  loadState();


let currentLessonIndex =
  normalizeLessonIndex(
    state.currentLesson
  );


let currentStep =
  0;


let currentExample =
  null;


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

  books: {},

  tokens: [],

  verses: {},

  lemmas: {},

  loading: {}

};


/* =========================================================
BASIC HELPERS
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
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#039;");

}


function normalize(value){

  return String(
    value ?? ""
  )
  .trim()
  .normalize("NFD")
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


function normalizeLessonIndex(value){

  const number =
    Number(
      value
    );


  if(
    !Number.isFinite(
      number
    )
  ){

    return 0;

  }


  if(
    number < 0
  ){

    return 0;

  }


  if(
    number >=
    LESSONS.length
  ){

    return LESSONS.length - 1;

  }


  return Math.floor(
    number
  );

}


/* =========================================================
STATE
========================================================= */

function loadState(){

  const fallback = {

    currentLesson: 0,

    lessons: {},

    vocab: {}

  };


  try{

    const raw =
      localStorage.getItem(
        CONFIG.STATE_KEY
      );


    if(
      !raw
    ){

      return fallback;

    }


    const saved =
      JSON.parse(
        raw
      );


    if(
      !saved ||
      typeof saved !==
      "object"
    ){

      return fallback;

    }


    return {

      currentLesson:
        normalizeLessonIndex(
          saved.currentLesson
        ),

      lessons:
        (
          saved.lessons &&
          typeof saved.lessons ===
          "object"
        )
          ? saved.lessons
          : {},

      vocab:
        (
          saved.vocab &&
          typeof saved.vocab ===
          "object"
        )
          ? saved.vocab
          : {}

    };

  }
  catch(
    error
  ){

    console.warn(
      "GBRM state error:",
      error
    );


    return fallback;

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
      "GBRM save state:",
      error
    );

  }

}


/* =========================================================
LESSON STATE
========================================================= */

function getLessonState(
  index
){

  const lesson =
    LESSONS[index];


  if(
    !lesson
  ){

    return {

      completed: false,

      content: false,

      practice: false,

      vocabulary: false,

      corpus: false,

      review: false

    };

  }


  const key =
    "L" +
    lesson.n;


  if(
    !state.lessons[key] ||
    typeof state.lessons[key] !==
    "object"
  ){

    state.lessons[key] = {

      completed: false,

      content: false,

      practice: false,

      vocabulary: false,

      corpus: false,

      review: false,

      attempts: 0,

      correct: 0,

      corpusReviewed: 0,

      updatedAt: null

    };

  }


  const st =
    state.lessons[key];


  st.completed =
    Boolean(
      st.completed
    );


  st.content =
    Boolean(
      st.content
    );


  st.practice =
    Boolean(
      st.practice
    );


  st.vocabulary =
    Boolean(
      st.vocabulary
    );


  st.corpus =
    Boolean(
      st.corpus
    );


  st.review =
    Boolean(
      st.review
    );


  st.attempts =
    Number(
      st.attempts
    ) || 0;


  st.correct =
    Number(
      st.correct
    ) || 0;


  st.corpusReviewed =
    Number(
      st.corpusReviewed
    ) || 0;


  return st;

}


/* =========================================================
NAVIGATION
========================================================= */

function go(
  screenId
){

  const screens =
    document.querySelectorAll(
      ".screen"
    );


  screens.forEach(
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

    console.error(
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
HOME
========================================================= */

function renderHome(){

  renderToday();

  renderCourseProgress();

  renderLessonList();

}


function renderToday(){

  currentLessonIndex =
    normalizeLessonIndex(
      currentLessonIndex
    );


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  if(
    $("todayLessonNumber")
  ){

    $("todayLessonNumber")
      .textContent =

      "L" +
      String(
        lesson.n
      ).padStart(
        2,
        "0"
      );

  }


  if(
    $("todayLessonTitle")
  ){

    $("todayLessonTitle")
      .textContent =
      lesson.title;

  }


  if(
    $("todayLessonObjective")
  ){

    $("todayLessonObjective")
      .textContent =
      lesson.objective;

  }

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
      (
        completed /
        LESSONS.length
      ) *
      100
    );


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


  if(
    $("courseProgressText")
  ){

    $("courseProgressText")
      .textContent =

      "已完成 " +
      completed +
      " / " +
      LESSONS.length +
      " 课";

  }

}


/* =========================================================
LESSON LIST

这里最重要：

首页“教材课程”点击时直接调用 openLesson()。

lessonPanel 只是备用课程列表。
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


      button.addEventListener(
        "click",
        function(){

          openLesson(
            index
          );

        }
      );


      box.appendChild(
        button
      );

    }
  );

}


/* =========================================================
OPEN LESSON

完全不读取 MorphGNT。
========================================================= */

function openLesson(
  index
){

  try{

    index =
      normalizeLessonIndex(
        index
      );


    currentLessonIndex =
      index;


    currentStep =
      0;


    currentExample =
      null;


    state.currentLesson =
      index;


    getLessonState(
      index
    );


    saveState();


    renderLesson();


    /*
      先进入课程页面。
    */

    const success =
      go(
        "lesson"
      );


    if(
      !success
    ){

      alert(
        "课程页面不存在，请检查 index.html。"
      );

    }

  }
  catch(
    error
  ){

    console.error(
      "GBRM openLesson:",
      error
    );


    alert(
      "课程打开失败，请按 Ctrl + F5 刷新页面。"
    );

  }

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
LESSON STEP
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


  try{

    switch(
      currentStep
    ){

      case 0:

        renderTextbook(
          area,
          lesson,
          st
        );

        break;


      case 1:

        renderPractice(
          area,
          lesson,
          st
        );

        break;


      case 2:

        renderVocabulary(
          area,
          lesson,
          st
        );

        break;


      case 3:

        renderCorpusGateway(
          area,
          lesson
        );

        break;


      case 4:

        renderReview(
          area,
          lesson,
          st
        );

        break;


      default:

        currentStep =
          0;


        renderTextbook(
          area,
          lesson,
          st
        );

        break;

    }

  }
  catch(
    error
  ){

    console.error(
      "GBRM lesson step:",
      error
    );


    area.innerHTML =

      "<div class='notice-box'>" +

        "<strong>这一学习步骤出现问题。</strong>" +

        "<br><br>" +

        "可以重新加载这一课。"

        +

        "<button class='secondary wide' onclick='renderLessonStep()'>" +

          "重新加载"

        +

        "</button>" +

      "</div>";

  }


  if(
    $("lessonStepText")
  ){

    $("lessonStepText")
      .textContent =

      "第 " +
      (
        currentStep + 1
      ) +
      " 步 / 5";

  }


  if(
    $("lessonStepProgress")
  ){

    const width =
      currentStep === 4

        ? 100

        : (
            currentStep /
            4
          ) *
          100;


    $("lessonStepProgress")
      .style.width =
      width +
      "%";

  }


  if(
    $("lessonPrevious")
  ){

    $("lessonPrevious")
      .disabled =
      currentStep === 0;

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
TEXTBOOK
========================================================= */

function renderTextbook(
  area,
  lesson,
  st
){

  area.innerHTML =

    "<div class='lesson-section'>" +

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
            getGuide(
              lesson.kind
            )
          ) +

        "</div>" +

      "</div>" +

    "</div>";


  st.content =
    true;


  saveState();

}


function getGuide(
  kind
){

  const map = {

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
      "注意第一不定过去式形式。",

    passive:
      "观察谁接受动作。",

    perfect:
      "观察过去动作和现在结果的关系。"

  };


  return (

    map[kind] ||

    "先掌握今天最重要的一点。"

  );

}


/* =========================================================
PRACTICE
========================================================= */

function getPractice(
  lesson
){

  const bank = {

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
      "关系代名词的格应该主要看什么？",
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
      "第一不定过去式需要重点观察什么？",
      ["形式特征","只有中文","只有词频"],
      0
    ],

    24:[
      "被动语态中主词通常怎样？",
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
    bank[
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


  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>练一练</h3>" +

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

          st.attempts =
            Number(
              st.attempts
            ) + 1;


          if(
            index ===
            data.answer
          ){

            st.correct =
              Number(
                st.correct
              ) + 1;


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

                "✓ 对了，继续。"

              +

              "</div>";

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
              300
            );

          }


          saveState();

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
    function(item){

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


  area.innerHTML =

    "<div class='lesson-section'>" +

      "<h3>本课词汇</h3>" +

      "<p class='muted'>" +

        "先认识，不要求一次全部记住。"

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

        "这一课没有单独词汇。"

      +

      "</div>";

  }


  list.forEach(
    function(item){

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

            "我记住了"

          +

          "</button>" +

          "<button class='vocab-lemma' type='button'>" +

            "看原文"

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

          memory.remembered =
            Number(
              memory.remembered
            ) + 1;


          memory.seen =
            Number(
              memory.seen
            ) + 1;


          card
            .querySelector(
              ".vocab-status"
            )
            .textContent =
            vocabStatus(
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


function vocabStatus(
  memory
){

  if(
    Number(
      memory.remembered
    ) >=
    4
  ){

    return "比较稳定";

  }


  if(
    Number(
      memory.remembered
    ) > 0
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

  const example =
    CURATED_EXAMPLES[
      lesson.n
    ];


  if(
    !example
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
    function(){

      startCorpusForLesson(
        lesson
      );

    };

}


/* =========================================================
START CORPUS
========================================================= */

async function startCorpusForLesson(
  lesson
){

  currentExample =
    CURATED_EXAMPLES[
      lesson.n
    ];


  if(
    !currentExample
  ){

    markCorpusComplete();

    currentStep =
      4;

    renderLessonStep();

    return;

  }


  /*
    原文系统从这里开始。
  */

  go(
    "corpus"
  );


  const area =
    $("corpusArea");


  if(
    !area
  ){

    return;

  }


  area.innerHTML =

    "<div class='card'>" +

      "<div class='eyebrow'>" +

        "原文训练"

      +

      "</div>" +

      "<h3>正在准备经文</h3>" +

      "<p class='muted'>" +

        "正在读取这一处新约原文……"

      +

      "</p>" +

    "</div>";


  const success =
    await loadBook(
      currentExample.book
    );


  if(
    !success
  ){

    renderCorpusLoadError();

    return;

  }


  renderCurrentCorpusExample();

}


/* =========================================================
CORPUS LOAD ERROR
========================================================= */

function renderCorpusLoadError(){

  const area =
    $("corpusArea");


  if(
    !area
  ){

    return;

  }


  area.innerHTML =

    "<div class='card'>" +

      "<h3>原文暂时无法读取</h3>" +

      "<p class='muted'>" +

        "课程本身没有问题。"

      +

        "<br><br>" +

        "请检查网络后重新读取。"

      +

      "</p>" +

      "<button id='retryCorpus' class='primary wide' type='button'>" +

        "重新读取"

      +

      "</button>" +

      "<button id='backToLessonFromCorpus' class='secondary wide' type='button'>" +

        "返回本课"

      +

      "</button>" +

    "</div>";


  $("retryCorpus")
    .onclick =
    function(){

      startCorpusForLesson(
        LESSONS[
          currentLessonIndex
        ]
      );

    };


  $("backToLessonFromCorpus")
    .onclick =
    returnFromCorpus;

}


/* =========================================================
CURRENT CORPUS EXAMPLE
========================================================= */

function renderCurrentCorpusExample(){

  const area =
    $("corpusArea");


  if(
    !area ||
    !currentExample
  ){

    return;

  }


  const verseKey =
    makeVerseKey(
      currentExample.book,
      currentExample.chapter,
      currentExample.verse
    );


  const tokens =
    corpus.verses[
      verseKey
    ] || [];


  area.innerHTML =
    "";


  if(
    !tokens.length
  ){

    area.innerHTML =

      "<div class='card'>" +

        "<h3>这一节暂时没有读取到</h3>" +

        "<p class='muted'>" +

          "经文文件已经读取，但没有找到指定经节。"

        +

        "</p>" +

        "<button id='retryVerse' class='primary wide' type='button'>" +

          "重新读取"

        +

        "</button>" +

      "</div>";


    $("retryVerse")
      .onclick =
      function(){

        startCorpusForLesson(
          LESSONS[
            currentLessonIndex
          ]
        );

      };


    return;

  }


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
          currentExample
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
    currentExample
  );


  const task =
    document.createElement(
      "div"
    );


  task.className =
    "curated-note";


  task.innerHTML =

    "<div class='curated-note-title'>" +

      "现在做"

    +

    "</div>" +

    "<div class='curated-note-text'>" +

      escapeHtml(
        currentExample.task
      ) +

    "</div>";


  area.appendChild(
    task
  );


  renderHelp(
    area,
    currentExample
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
    "完成原文训练";


  next.onclick =
    finishCorpus;


  area.appendChild(
    next
  );

}


/* =========================================================
REFERENCE
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
RENDER CURATED PASSAGE
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


  let target =
    null;


  /*
    1.
    优先实际词形
  */

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


  /*
    2.
    找不到再使用 Lemma
  */

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
HELP
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

      "<div class='help-level-title'>提示</div>" +

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

      "<div class='help-level-title'>解释</div>" +

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

      "<div class='help-level-title'>完整分析</div>" +

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

    console.error(
      "GBRM book missing:",
      bookId
    );


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
FETCH MORPHGNT
========================================================= */

async function fetchBook(
  book
){

  try{

    const url =
      CONFIG.RAW_BASE +
      book.file;


    const response =
      await fetch(
        url,
        {
          cache:"no-cache"
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


    tokens.forEach(
      addToken
    );


    console.log(
      "GBRM loaded:",
      book.id,
      tokens.length,
      "tokens"
    );


    return true;

  }
  catch(
    error
  ){

    console.error(
      "GBRM MorphGNT load failed:",
      book.id,
      error
    );


    return false;

  }

}


/* =========================================================
MORPHGNT PARSER

正确结构：

040101

04 = Book
01 = Chapter
01 = Verse

Word index 不从 location 读取，
而是在同一 verse 内自行计算。

========================================================= */

function parseMorphGNT(
  text,
  book
){

  const result =
    [];


  const verseCounters =
    {};


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


      const verseKey =
        makeVerseKey(
          book.id,
          chapter,
          verse
        );


      if(
        typeof verseCounters[
          verseKey
        ] !==
        "number"
      ){

        verseCounters[
          verseKey
        ] =
          0;

      }


      verseCounters[
        verseKey
      ]++;


      result.push({

        bookId:
          book.id,

        sourceBook,

        bookName:
          book.name,

        chapter,

        verse,

        wordIndex:
          verseCounters[
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
          cleanToken(
            parts[3]
          ),

        word:
          cleanToken(
            parts[4]
          ),

        normalizedWord:
          cleanToken(
            parts[5]
          ),

        lemma:
          cleanToken(
            parts
              .slice(
                6
              )
              .join(
                " "
              )
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


/* =========================================================
TOKEN CLEAN
========================================================= */

function cleanToken(
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


  const lemmaKey =
    normalize(
      token.lemma
    );


  if(
    !corpus.lemmas[
      lemmaKey
    ]
  ){

    corpus.lemmas[
      lemmaKey
    ] = [];

  }


  corpus
    .lemmas[
      lemmaKey
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
      code || ""
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
POS
========================================================= */

function decodePOS(
  code
){

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


  const value =
    String(
      code || ""
    );


  return (

    map[
      value[0]
    ] ||

    value

  );

}


/* =========================================================
VOCAB FIND
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
      "请先打开一条例文。"
    );

    return;

  }


  const key =
    normalize(
      lemma
    );


  const entries =
    corpus.lemmas[
      key
    ] || [];


  if(
    !entries.length
  ){

    alert(
      "当前载入原文中没有找到这个词。"
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


  const forms =
    {};


  entries.forEach(
    function(
      token
    ){

      forms[
        token.rawText
      ] =
      (
        forms[
          token.rawText
        ] || 0
      ) + 1;

    }
  );


  const rows =
    Object.keys(
      forms
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

    "</div>" +

    "<div class='card'>" +

      "<h3>词形</h3>" +

      "<div id='lemmaForms'></div>" +

    "</div>";


  rows.forEach(
    function(
      word
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
            word
          ) +

        "</div>" +

        "<div class='form-meta'>" +

          "点击查看真实例句"

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
                  item.rawText ===
                  word
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

function renderReview(
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
          reviewQuestion(
            lesson
          )
        ) +

      "</div>" +

      "<button id='finishLessonButton' class='primary wide' type='button'>" +

        "完成今天的学习"

      +

      "</button>" +

    "</div>";


  /*
    这里只表示学生进入了回顾步骤，
    并不直接代表课程完成。
  */

  st.review =
    true;


  saveState();


  $("finishLessonButton")
    .onclick =
    completeLesson;

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


function reviewQuestion(
  lesson
){

  const map = {

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

    map[
      lesson.kind
    ] ||

    "我能不能用一句话说出本课最重要的内容？"

  );

}


/* =========================================================
COMPLETE CORPUS
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


function finishCorpus(){

  markCorpusComplete();


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

      "<button id='returnLessonFromCorpus' class='primary wide' type='button'>" +

        "回到本课"

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
COMPLETE LESSON
========================================================= */

function completeLesson(){

  const st =
    getLessonState(
      currentLessonIndex
    );


  /*
    课程的完成条件。

    这里不要求一定要成功读取网络，
    但必须至少进入原文步骤。
  */

  if(
    !st.content ||
    !st.practice ||
    !st.vocabulary ||
    !st.corpus ||
    !st.review
  ){

    alert(
      "请先完成本课全部学习步骤。"
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
NEXT STEP
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

      startCorpusForLesson(
        LESSONS[
          currentLessonIndex
        ]
      );


      return;

    }

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


/* =========================================================
PREVIOUS STEP
========================================================= */

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
    !area ||
    !counter
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

        "<strong>✓ 今天复习完成</strong>"

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


          memory.remembered =
            Number(
              memory.remembered
            ) + 1;


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


          memory.wrong =
            Number(
              memory.wrong
            ) + 1;


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


        memory.seen =
          Number(
            memory.seen
          ) + 1;


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
      .sort(
        function(){

          return (
            Math.random() -
            0.5
          );

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

      return (
        Math.random() -
        0.5
      );

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
HOME
========================================================= */

function goHome(){

  renderHome();

  go(
    "home"
  );

}


/* =========================================================
EVENTS

关键修复：

“教材课程” = 直接进入当前课程

不是展开列表。
========================================================= */

function bindEvents(){

  const continueLesson =
    $("continueLesson");


  if(
    continueLesson
  ){

    continueLesson.onclick =
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

        /*
          直接进入当前课程。
        */

        openLesson(
          currentLessonIndex
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

        const panel =
          $("lessonPanel");


        if(
          panel
        ){

          panel.classList.add(
            "hidden"
          );

        }

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


  const vocabReview =
    $("startVocabularyReview");


  if(
    vocabReview
  ){

    vocabReview.onclick =
      startVocabularyReview;

  }


  const vocabReviewBack =
    $("vocabReviewBack");


  if(
    vocabReviewBack
  ){

    vocabReviewBack.onclick =
      goHome;

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
INIT

注意：
初始化时不访问 MorphGNT。
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
      "GBRM init error:",
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

window.startCorpusForLesson =
  startCorpusForLesson;


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
