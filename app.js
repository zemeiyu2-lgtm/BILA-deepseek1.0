/* =========================================================
   GBRM V1.4
   Greek Bible Reading Model

   FOUNDATION L01–L25
   VOCABULARY MEMORY
   MORPHOLOGY ENGINE

   Form
   ↓
   Parse
   ↓
   Function
   ↓
   Meaning
========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {

  STATE_KEY:
    "GBRM_V14_STATE",

  LANGUAGE:
    "en-US",

  NORMAL_RATE:
    0.88,

  SLOW_RATE:
    0.65

};


/* =========================================================
   COURSE
========================================================= */

const LESSONS = [

  {
    n: 1,
    title: "希腊语",
    group: "引言",
    objective:
      "认识学习新约希腊文的目的，并建立原文阅读方向。",
    kind: "intro",
    sections: [
      "为什么学习希腊文",
      "学习目标",
      "学习方法"
    ]
  },

  {
    n: 2,
    title: "学习希腊文",
    group: "引言",
    objective:
      "建立持续学习、发音、书写和复习习惯。",
    kind: "intro",
    sections: [
      "学习纪律",
      "多感官学习",
      "作业与复习"
    ]
  },

  {
    n: 3,
    title: "字母与发音",
    group: "引言",
    objective:
      "掌握24个字母、元音、双母音与气号。",
    kind: "alphabet",
    sections: [
      "24个字母",
      "元音",
      "双母音",
      "气号"
    ]
  },

  {
    n: 4,
    title: "标点符号与音节",
    group: "引言",
    objective:
      "认识希腊文标点与基本音节结构。",
    kind: "syllable",
    sections: [
      "标点符号",
      "音节",
      "阅读练习"
    ]
  },

  {
    n: 5,
    title: "英文的名词简介",
    group: "名词系统",
    objective:
      "建立名词、性、数、格的基本概念。",
    kind: "noun",
    sections: [
      "名词是什么",
      "性与数",
      "格与功能"
    ]
  },

  {
    n: 6,
    title: "主格与直接受格；定冠词",
    group: "名词系统",
    objective:
      "学习主格、受格和定冠词。",
    kind: "case",
    sections: [
      "主格",
      "直接受格",
      "定冠词",
      "原文观察"
    ]
  },

  {
    n: 7,
    title: "所有格与间接受格",
    group: "名词系统",
    objective:
      "理解所有格、间接受格和关系意义。",
    kind: "case",
    sections: [
      "所有格",
      "间接受格",
      "形式比较",
      "原文观察"
    ]
  },

  {
    n: 8,
    title: "介词与 εἰμί",
    group: "名词系统",
    objective:
      "学习基本介词和 εἰμί。",
    kind: "case",
    sections: [
      "介词",
      "εἰμί",
      "基本形式",
      "原文观察"
    ]
  },

  {
    n: 9,
    title: "形容词",
    group: "名词系统",
    objective:
      "认识形容词与名词之间的性、数、格一致。",
    kind: "adjective",
    sections: [
      "形容词功能",
      "一致关系",
      "基本形式",
      "原文阅读"
    ]
  },

  {
    n: 10,
    title: "第三格变式名词",
    group: "名词系统",
    objective:
      "开始识别第三格变式名词。",
    kind: "third",
    sections: [
      "第三格变式",
      "词干",
      "常见形式",
      "原文观察"
    ]
  },

  {
    n: 11,
    title: "第一与第二人称代名词",
    group: "名词系统",
    objective:
      "掌握第一、第二人称代名词。",
    kind: "pronoun",
    sections: [
      "第一人称",
      "第二人称",
      "格与功能",
      "原文观察"
    ]
  },

  {
    n: 12,
    title: "αὐτός",
    group: "名词系统",
    objective:
      "认识 αὐτός 的基本形式与功能。",
    kind: "autos",
    sections: [
      "αὐτός",
      "基本形式",
      "句法功能",
      "原文观察"
    ]
  },

  {
    n: 13,
    title: "指示代名词／形容词",
    group: "名词系统",
    objective:
      "认识指示代名词的形式与指涉。",
    kind: "demonstrative",
    sections: [
      "指示词",
      "οὗτος",
      "一致关系",
      "原文观察"
    ]
  },

  {
    n: 14,
    title: "关系代名词",
    group: "名词系统",
    objective:
      "理解关系代名词与关系子句。",
    kind: "relative",
    sections: [
      "关系代名词",
      "ὅς · ἥ · ὅ",
      "性数格",
      "原文观察"
    ]
  },

  {
    n: 15,
    title: "动词简介",
    group: "动词系统",
    objective:
      "建立时态、语态、语气、人称与数的基本概念。",
    kind: "verb",
    sections: [
      "动词是什么",
      "人称与数",
      "时态与观点",
      "时态字干"
    ]
  },

  {
    n: 16,
    title: "现在式主动语态直说语气",
    group: "动词系统",
    objective:
      "掌握现在式主动直说语气。",
    kind: "present",
    sections: [
      "结构图",
      "六个人称",
      "人称字尾",
      "原文观察"
    ]
  },

  {
    n: 17,
    title: "缩略动词",
    group: "动词系统",
    objective:
      "认识缩略动词和元音缩合。",
    kind: "contract",
    sections: [
      "缩略是什么",
      "ἀγαπάω",
      "ζητέω",
      "原文观察"
    ]
  },

  {
    n: 18,
    title: "现在式关身／被动语态",
    group: "动词系统",
    objective:
      "学习现在式关身／被动形式。",
    kind: "mp",
    sections: [
      "关身／被动",
      "基本字尾",
      "形式观察",
      "原文阅读"
    ]
  },

  {
    n: 19,
    title: "未来式主动／关身",
    group: "动词系统",
    objective:
      "学习未来式基本构成。",
    kind: "future",
    sections: [
      "未来式",
      "σ记号",
      "主动语态",
      "关身语态"
    ]
  },

  {
    n: 20,
    title: "动词字根与未来式其他字形",
    group: "动词系统",
    objective:
      "认识动词词干与未来式变化。",
    kind: "stems",
    sections: [
      "词干",
      "塞音结尾",
      "缩略字干",
      "词典时态字形"
    ]
  },

  {
    n: 21,
    title: "不完成式",
    group: "动词系统",
    objective:
      "认识未完成式。",
    kind: "imperfect",
    sections: [
      "未完成式",
      "往昔号",
      "ἔλυον",
      "原文观察"
    ]
  },

  {
    n: 22,
    title: "第二不定过去式",
    group: "动词系统",
    objective:
      "学习第二不定过去式与第二词干。",
    kind: "aorist2",
    sections: [
      "第二不定过去式",
      "第二词干",
      "主动与关身",
      "释经观察"
    ]
  },

  {
    n: 23,
    title: "第一不定过去式",
    group: "动词系统",
    objective:
      "学习第一不定过去式与 σα。",
    kind: "aorist1",
    sections: [
      "第一不定过去式",
      "σα",
      "主动与关身",
      "释经观察"
    ]
  },

  {
    n: 24,
    title: "不定过去式与未来式被动",
    group: "动词系统",
    objective:
      "认识被动语态的特殊标记。",
    kind: "passive",
    sections: [
      "未来被动",
      "不定过去式被动",
      "构成",
      "释经观察"
    ]
  },

  {
    n: 25,
    title: "现在完成式",
    group: "动词系统",
    objective:
      "认识完成式基本构成。",
    kind: "perfect",
    sections: [
      "完成式",
      "重复号",
      "主动形式",
      "原文观察"
    ]
  }

];


/* =========================================================
   VOCABULARY
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
8,ἦν,他/她/它是(过去),
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
9,ἀπεκρίθη,他/她/它回答,
9,δοῦλος,奴隶/仆人,124
9,ἐάν,如果/当,351
9,ἐμός,我的,76
9,ἐντολή,诫命/命令,67
9,καθώς,如/正如,182
9,κακός,坏的/恶的,50
9,μου,我的,
9,νεκρός,死的/尸体,128
9,πιστός,忠心的/有信心的,67
9,πονηρός,邪恶的/坏的,78
9,πρῶτος,第一的/前面的,155
9,τρίτος,第三的,56
10,ἅγιος,圣洁的/圣徒,233
10,εἰ,如果,502
10,εἰ μή,除非/如果不,
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
11,ἄν,（语助词）,166
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
13,τηρέω,我保守/护卫/遵守,70
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
14,οὕτως,而/如此,215
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


const VOCABULARY =
  VOCAB_CSV
    .trim()
    .split("\n")
    .map(function(line) {

      const parts =
        line.split(",");


      let freq =
        parts[3] ||
        "";


      freq =
        freq
          .replace(
            /[^0-9]/g,
            ""
          );


      return {

        lesson:
          Number(
            parts[0]
          ),

        word:
          (parts[1] || "")
            .trim(),

        gloss:
          (parts[2] || "")
            .trim(),

        frequency:
          freq
            ? Number(freq)
            : null

      };

    })
    .filter(function(item) {

      return (
        item.lesson &&
        item.word
      );

    });


/* =========================================================
   MORPHOLOGY DATA
========================================================= */

const MORPHOLOGY_ITEMS = [

  {
    form:
      "ἔλαβον",

    lemma:
      "λαμβάνω",

    stem:
      "λαβ",

    tense:
      "不定过去式",

    voice:
      "主动",

    mood:
      "直说语气",

    person:
      "第一人称单数 / 第三人称复数（依上下文）",

    number:
      "单数或复数",

    meaning:
      "拿了 / 领受了",

    lesson:
      22

  },


  {
    form:
      "ἔλυσα",

    lemma:
      "λύω",

    stem:
      "λυ",

    tense:
      "第一不定过去式",

    voice:
      "主动",

    mood:
      "直说语气",

    person:
      "第一人称单数",

    number:
      "单数",

    meaning:
      "我解开了",

    lesson:
      23

  },


  {
    form:
      "ἐλύθην",

    lemma:
      "λύω",

    stem:
      "λυ",

    tense:
      "不定过去式",

    voice:
      "被动",

    mood:
      "直说语气",

    person:
      "第一人称",

    number:
      "单数",

    meaning:
      "我被解开了",

    lesson:
      24

  },


  {
    form:
      "λέλυκα",

    lemma:
      "λύω",

    stem:
      "λυ",

    tense:
      "完成式",

    voice:
      "主动",

    mood:
      "直说语气",

    person:
      "第一人称",

    number:
      "单数",

    meaning:
      "我已经解开",

    lesson:
      25

  },


  {
    form:
      "λύομεν",

    lemma:
      "λύω",

    stem:
      "λυ",

    tense:
      "现在式",

    voice:
      "主动",

    mood:
      "直说语气",

    person:
      "第一人称",

    number:
      "复数",

    meaning:
      "我们解开",

    lesson:
      16

  },


  {
    form:
      "λύετε",

    lemma:
      "λύω",

    stem:
      "λυ",

    tense:
      "现在式",

    voice:
      "主动",

    mood:
      "直说语气",

    person:
      "第二人称",

    number:
      "复数",

    meaning:
      "你们解开",

    lesson:
      16

  },


  {
    form:
      "ἔλυον",

    lemma:
      "λύω",

    stem:
      "λυ",

    tense:
      "未完成式",

    voice:
      "主动",

    mood:
      "直说语气",

    person:
      "第一人称单数 / 第三人称复数",

    number:
      "单数或复数",

    meaning:
      "我正在解开 / 他们正在解开",

    lesson:
      21

  },


  {
    form:
      "λύσομαι",

    lemma:
      "λύω",

    stem:
      "λυ",

    tense:
      "未来式",

    voice:
      "关身",

    mood:
      "直说语气",

    person:
      "第一人称",

    number:
      "单数",

    meaning:
      "我将为自己解开",

    lesson:
      19

  }

];


/* =========================================================
   BIBLE EXAMPLES
========================================================= */

const BIBLE = {

  5: [
    "John 1:1",
    "Ἐν ἀρχῇ ἦν ὁ λόγος.",
    "太初有道。"
  ],

  6: [
    "John 1:1",
    "καὶ ὁ λόγος ἦν πρὸς τὸν θεόν.",
    "道与神同在。"
  ],

  7: [
    "John 1:6",
    "ἀπεσταλμένος παρὰ θεοῦ.",
    "从神那里差来的。"
  ],

  8: [
    "John 1:1",
    "Ἐν ἀρχῇ ἦν ὁ λόγος.",
    "太初有道。"
  ],

  9: [
    "John 1:46",
    "δύναταί τι ἀγαθὸν εἶναι;",
    "还能出什么好的吗？"
  ],

  10: [
    "John 1:5",
    "τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει.",
    "光照在黑暗里。"
  ],

  11: [
    "John 1:23",
    "Ἐγὼ φωνὴ βοῶντος ἐν τῇ ἐρήμῳ.",
    "我就是那在旷野有人声喊着的。"
  ],

  12: [
    "John 1:10",
    "ὁ κόσμος δι’ αὐτοῦ ἐγένετο.",
    "世界也是借着他造的。"
  ],

  13: [
    "John 1:30",
    "οὗτός ἐστιν.",
    "这就是那一位。"
  ],

  14: [
    "John 1:30",
    "οὗ ἐγὼ εἶπον.",
    "我曾说过的那一位。"
  ],

  16: [
    "John 1:7",
    "πάντες πιστεύσωσιν δι’ αὐτοῦ.",
    "叫众人因他可以信。"
  ],

  17: [
    "John 1:38",
    "τί ζητεῖτε;",
    "你们寻找什么？"
  ],

  19: [
    "John 1:51",
    "ὄψεσθε τὸν οὐρανὸν ἀνεῳγότα.",
    "你们将要看见天开了。"
  ],

  22: [
    "Luke 15:24",
    "ἦν νεκρὸς καὶ ἔζησεν.",
    "他是死而复活。"
  ],

  23: [
    "Romans 5:1",
    "δικαιωθέντες οὖν ἐκ πίστεως.",
    "我们既因信称义。"
  ],

  24: [
    "Romans 6:3",
    "ἐβαπτίσθημεν εἰς τὸν θάνατον αὐτοῦ.",
    "受洗归入他的死。"
  ],

  25: [
    "John 3:18",
    "ἤδη κέκριται.",
    "已经定了。"
  ]

};


/* =========================================================
   FORM DATA
========================================================= */

const FORM_DATA = {

  noun: [

    ["ὁ λόγος","阳性·单数·主格","the Word"],

    ["τοῦ λόγου","阳性·单数·所有格","of the Word"],

    ["τὸν λόγον","阳性·单数·受格","the Word"],

    ["τῷ λόγῳ","阳性·单数·间接受格","to/for the Word"]

  ],

  case: [

    ["ὁ θεός","主格·阳性·单数","God"],

    ["τὸν θεόν","受格·阳性·单数","God"],

    ["τοῦ θεοῦ","所有格·阳性·单数","of God"],

    ["τῷ θεῷ","间接受格·阳性·单数","to/for God"]

  ],

  adjective: [

    ["ἀγαθός","阳性·主格单数","good"],

    ["ἀγαθή","阴性·主格单数","good"],

    ["ἀγαθόν","中性·主格/受格单数","good"]

  ],

  third: [

    ["φῶς","主格/受格","light"],

    ["φωτός","所有格","of light"],

    ["σῶμα","主格/受格","body"],

    ["σώματος","所有格","of body"]

  ],

  pronoun: [

    ["ἐγώ","第一人称·主格单数","I"],

    ["μοι","第一人称·间接受格单数","to/for me"],

    ["ἡμεῖς","第一人称·主格复数","we"],

    ["σύ","第二人称·主格单数","you"],

    ["ὑμεῖς","第二人称·主格复数","you"]

  ],

  autos: [

    ["αὐτός","主格·阳性单数","he / himself"],

    ["αὐτόν","受格·阳性单数","him"],

    ["αὐτοῦ","所有格·阳性单数","his / of him"],

    ["αὐτοί","主格·阳性复数","they"]

  ],

  demonstrative: [

    ["οὗτος","阳性·主格单数","this"],

    ["αὕτη","阴性·主格单数","this"],

    ["τοῦτο","中性·主格/受格单数","this"],

    ["οὗτοι","阳性·主格复数","these"]

  ],

  relative: [

    ["ὅς","阳性·主格单数","who"],

    ["ἥ","阴性·主格单数","who"],

    ["ὅ","中性·主格/受格单数","which"],

    ["οὗ","所有格","of whom/of which"],

    ["ὅν","阳性·受格单数","whom"]

  ],

  verb: [

    ["λύω","现在式·主动·1单","I loose"],

    ["λύεις","现在式·主动·2单","you loose"],

    ["λύει","现在式·主动·3单","he/she/it looses"]

  ],

  present: [

    ["λύω","1单","I loose"],

    ["λύεις","2单","you loose"],

    ["λύει","3单","he/she/it looses"],

    ["λύομεν","1复","we loose"],

    ["λύετε","2复","you loose"],

    ["λύουσι(ν)","3复","they loose"]

  ],

  contract: [

    ["ἀγαπάω","字典形","I love"],

    ["ἀγαπῶ","缩略·1单","I love"],

    ["ζητέω","字典形","I seek"],

    ["ζητῶ","缩略·1单","I seek"]

  ],

  mp: [

    ["λύομαι","现在式·关身/被动·1单","I am being loosed"],

    ["λύεται","现在式·关身/被动·3单","he/she/it is being loosed"],

    ["λυόμεθα","现在式·关身/被动·1复","we are being loosed"]

  ],

  future: [

    ["λύσω","未来主动·1单","I will loose"],

    ["λύσεις","未来主动·2单","you will loose"],

    ["λύσει","未来主动·3单","he/she/it will loose"],

    ["λύσομαι","未来关身·1单","I will loose for myself"]

  ],

  stems: [

    ["ἀκούω","现在式","hear"],

    ["ἀκούσω","未来式","I will hear"],

    ["βλέπω","现在式","see"],

    ["βλέψω","未来式","I will see"]

  ],

  imperfect: [

    ["ἔλυον","未完成式","I was loosing / they were loosing"],

    ["ἔλυες","2单","you were loosing"],

    ["ἔλυε(ν)","3单","he/she/it was loosing"]

  ],

  aorist2: [

    ["ἔλαβον","第二不定过去式","I took / they took"],

    ["ἔλαβες","主动·2单","you took"],

    ["ἔλαβε(ν)","主动·3单","he/she/it took"]

  ],

  aorist1: [

    ["ἔλυσα","第一不定过去式·主动1单","I loosed"],

    ["ἔλυσας","主动·2单","you loosed"],

    ["ἔλυσε(ν)","主动·3单","he/she/it loosed"],

    ["ἐλυσάμην","关身·1单","I loosed for myself"]

  ],

  passive: [

    ["ἐλύθην","不定过去式被动·1单","I was loosed"],

    ["ἐλύθησαν","不定过去式被动·3复","they were loosed"],

    ["λυθήσομαι","未来被动·1单","I will be loosed"]

  ],

  perfect: [

    ["λέλυκα","完成式主动·1单","I have loosed"],

    ["λέλυκας","完成式主动·2单","you have loosed"],

    ["λέλυκε(ν)","完成式主动·3单","he/she/it has loosed"],

    ["λέλυμαι","完成式关身/被动·1单","I have been loosed"]

  ]

};


/* =========================================================
   STATE
========================================================= */

let state =
  loadState();


let currentLessonIndex =
  0;


let currentStep =
  0;


let testScore =
  0;


let testAnswered =
  0;


let speechRate =
  CONFIG.NORMAL_RATE;


let reviewQueue =
  [];


let reviewIndex =
  0;


let morphologyQueue =
  [];


let morphologyIndex =
  0;


let morphologyScore =
  0;


let morphologyAnswered =
  0;


/* =========================================================
   STORAGE
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


      return {

        lessons:
          parsed.lessons ||
          {},

        vocabulary:
          parsed.vocabulary ||
          {},

        morphology:
          parsed.morphology ||
          {

            attempted:
              0,

            correct:
              0

          }

      };

    }

  }

  catch (
    error
  ) {

    console.warn(
      "GBRM storage:",
      error
    );

  }


  return {

    lessons:
      {},

    vocabulary:
      {},

    morphology: {

      attempted:
        0,

      correct:
        0

    }

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
      "GBRM save:",
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


function go(
  id
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
    $(id);


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
   INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);


function init() {

  renderHome();

  renderCourseReview();

  renderVocabularySummary();

  renderVocabularyDatabase();

  bindEvents();

}


function bindEvents() {

  if (
    $("lessonBackBtn")
  ) {

    $("lessonBackBtn").onclick =
      function() {

        go("home");

        renderHome();

      };

  }


  if (
    $("lessonPrevBtn")
  ) {

    $("lessonPrevBtn").onclick =
      previousLesson;

  }


  if (
    $("lessonNextBtn")
  ) {

    $("lessonNextBtn").onclick =
      nextStep;

  }


  if (
    $("openVocabReview")
  ) {

    $("openVocabReview").onclick =
      startVocabularyReview;

  }


  if (
    $("openVocabAll")
  ) {

    $("openVocabAll").onclick =
      function() {

        renderVocabularyDatabase();

        go("vocabAll");

      };

  }


  if (
    $("vocabAllBack")
  ) {

    $("vocabAllBack").onclick =
      function() {

        go("home");

      };

  }


  if (
    $("vocabSearch")
  ) {

    $("vocabSearch")
      .addEventListener(
        "input",
        renderVocabularyDatabase
      );

  }


  if (
    $("vocabReviewBack")
  ) {

    $("vocabReviewBack").onclick =
      function() {

        go("home");

        renderHome();

      };

  }


  if (
    $("openMorphology")
  ) {

    $("openMorphology").onclick =
      startMorphologyTraining;

  }


  if (
    $("morphologyBack")
  ) {

    $("morphologyBack").onclick =
      function() {

        go("home");

        renderHome();

      };

  }


  if (
    $("openCourseReview")
  ) {

    $("openCourseReview").onclick =
      function() {

        renderCourseReview();

        go("courseReview");

      };

  }


  if (
    $("courseReviewBack")
  ) {

    $("courseReviewBack").onclick =
      function() {

        go("home");

      };

  }

}


/* =========================================================
   LESSON STATE
========================================================= */

function getLessonState(
  index
) {

  const id =
    "L" +
    LESSONS[index].n;


  if (
    !state.lessons[id]
  ) {

    state.lessons[id] = {

      completed:
        false,

      score:
        0,

      completedAt:
        null

    };

  }


  return state.lessons[id];

}


/* =========================================================
   VOCAB STATE
========================================================= */

function getWordState(
  word
) {

  if (
    !state.vocabulary
  ) {

    state.vocabulary = {};

  }


  if (
    !state.vocabulary[word]
  ) {

    state.vocabulary[word] = {

      status:
        "new",

      correct:
        0,

      wrong:
        0,

      recallCorrect:
        0,

      spellingCorrect:
        0,

      lastSeen:
        null,

      nextReview:
        null

    };

  }


  return state.vocabulary[word];

}


/* =========================================================
   HOME
========================================================= */

function renderHome() {

  renderLessonList();

  updateCourseProgress();

  renderVocabularySummary();

}


/* =========================================================
   LESSON LIST
========================================================= */

function renderLessonList() {

  const box =
    $("lessonList");


  if (
    !box
  ) {

    return;

  }


  box.innerHTML =
    "";


  let lastGroup =
    "";


  LESSONS.forEach(
    function(
      lesson,
      index
    ) {

      if (
        lesson.group !==
        lastGroup
      ) {

        const label =
          document.createElement(
            "div"
          );


        label.className =
          "mini-label";


        label.textContent =
          lesson.group
            .toUpperCase();


        box.appendChild(
          label
        );


        lastGroup =
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


      if (
        st.completed
      ) {

        button.classList.add(
          "done"
        );

      }


      button.innerHTML =

        "<div class='lesson-number'>" +

        "L" +

        String(
          lesson.n
        ).padStart(
          2,
          "0"
        ) +

        "</div>" +

        "<div>" +

        "<div class='lesson-name'>" +

        escapeHtml(
          lesson.title
        ) +

        "</div>" +

        "<small class='lesson-meta'>" +

        (
          st.completed

            ? "✓ 已完成 · " +
              st.score +
              "%"

            : lesson.group

        ) +

        "</small>" +

        "</div>" +

        "<div class='lesson-status'>" +

        (
          st.completed
            ? "✓"
            : "→"
        ) +

        "</div>";


      button.onclick =
        function() {

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


function updateCourseProgress() {

  const completed =
    LESSONS.filter(
      function(
        lesson,
        index
      ) {

        return getLessonState(
          index
        ).completed;

      }
    ).length;


  const percent =
    Math.round(
      completed /
      LESSONS.length *
      100
    );


  if (
    $("completedLessons")
  ) {

    $("completedLessons")
      .textContent =
      completed;

  }


  if (
    $("totalLessons")
  ) {

    $("totalLessons")
      .textContent =
      LESSONS.length;

  }


  if (
    $("courseProgress")
  ) {

    $("courseProgress")
      .textContent =
      percent +
      "%";

  }


  if (
    $("homeProgressBar")
  ) {

    $("homeProgressBar")
      .style.width =
      percent +
      "%";

  }

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


  currentStep =
    0;


  testScore =
    0;


  testAnswered =
    0;


  speechRate =
    CONFIG.NORMAL_RATE;


  renderLessonHeader();

  renderLessonStep();

  renderLessonVocabulary();

  go("lesson");

}


function renderLessonHeader() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  $("lessonEyebrow")
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


  $("lessonReference")
    .textContent =
    "Lesson " +
    String(
      lesson.n
    ).padStart(
      2,
      "0"
    );


  $("lessonObjective")
    .textContent =
    lesson.objective;

}


/* =========================================================
   STEP ENGINE
========================================================= */

function renderLessonStep() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const box =
    $("lessonContent");


  box.innerHTML =
    "";


  if (
    currentStep <
    lesson.sections.length
  ) {

    box.appendChild(
      buildLessonSection(
        lesson,
        currentStep
      )
    );


    $("lessonNextBtn")
      .textContent =

      currentStep ===
      lesson.sections.length - 1

        ? "进入测试 →"

        : "下一步 →";


    return;

  }


  renderTest();

}


/* =========================================================
   LESSON SECTION
========================================================= */

function buildLessonSection(
  lesson,
  step
) {

  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  const h =
    document.createElement(
      "h3"
    );


  h.textContent =
    lesson.sections[
      step
    ];


  section.appendChild(
    h
  );


  const p =
    document.createElement(
      "p"
    );


  p.className =
    "muted";


  p.textContent =
    "先学习，再观察形式，最后回到新约文本。";


  section.appendChild(
    p
  );


  if (
    lesson.n <=
    4
  ) {

    renderFoundation(
      section,
      lesson,
      step
    );

  }

  else {

    renderGrammar(
      section,
      lesson,
      step
    );

  }


  return section;

}


/* =========================================================
   FOUNDATION
========================================================= */

function renderFoundation(
  section,
  lesson,
  step
) {

  if (
    lesson.kind ===
    "alphabet"
  ) {

    if (
      step ===
      0
    ) {

      const grid =
        document.createElement(
          "div"
        );


      grid.className =
        "choice-grid";


      const alphabet = [

        ["Α","α","Alpha"],
        ["Β","β","Beta"],
        ["Γ","γ","Gamma"],
        ["Δ","δ","Delta"],
        ["Ε","ε","Epsilon"],
        ["Ζ","ζ","Zeta"],
        ["Η","η","Eta"],
        ["Θ","θ","Theta"],
        ["Ι","ι","Iota"],
        ["Κ","κ","Kappa"],
        ["Λ","λ","Lambda"],
        ["Μ","μ","Mu"],
        ["Ν","ν","Nu"],
        ["Ξ","ξ","Xi"],
        ["Ο","ο","Omicron"],
        ["Π","π","Pi"],
        ["Ρ","ρ","Rho"],
        ["Σ","σ","Sigma"],
        ["Τ","τ","Tau"],
        ["Υ","υ","Upsilon"],
        ["Φ","φ","Phi"],
        ["Χ","χ","Chi"],
        ["Ψ","ψ","Psi"],
        ["Ω","ω","Omega"]

      ];


      alphabet.forEach(
        function(item) {

          const b =
            document.createElement(
              "button"
            );


          b.innerHTML =

            "<div class='word-greek'>" +
            item[1] +
            "</div>" +

            "<div class='word-gloss'>" +
            item[0] +
            " · " +
            item[2] +
            "</div>";


          b.onclick =
            function() {

              speakText(
                item[2]
              );

            };


          grid.appendChild(
            b
          );

        }
      );


      section.appendChild(
        grid
      );


      return;

    }


    if (
      step ===
      1
    ) {

      [

        ["α","a"],
        ["ε","e"],
        ["η","ē"],
        ["ι","i"],
        ["ο","o"],
        ["υ","u"],
        ["ω","ō"]

      ].forEach(
        function(item) {

          addSimpleWord(
            section,
            item[0],
            "基本元音",
            item[1]
          );

        }
      );


      return;

    }


    if (
      step ===
      2
    ) {

      [

        ["αι","ai"],
        ["ει","ei"],
        ["οι","oi"],
        ["ου","ou"],
        ["αυ","au"],
        ["ευ","eu"],
        ["υι","ui"]

      ].forEach(
        function(item) {

          addSimpleWord(
            section,
            item[0],
            "双母音",
            item[1]
          );

        }
      );


      return;

    }


    addSimpleWord(
      section,
      "ἀπόστολος",
      "词首气号",
      "apostolos"
    );


    addNotice(
      section,
      "观察字母、声音和词形，不要只背中文。"
    );

    return;

  }


  if (
    lesson.kind ===
    "syllable"
  ) {

    if (
      step ===
      0
    ) {

      [

        [";","Greek question mark"],
        [".","Period"],
        [",","Comma"],
        [":","Colon / raised dot"]

      ].forEach(
        function(item) {

          addSimpleWord(
            section,
            item[0],
            item[1],
            item[0]
          );

        }
      );


      return;

    }


    [

      ["λόγος","λό-γος"],
      ["θεός","θε-ός"],
      ["ζωή","ζω-ή"],
      ["ἄνθρωπος","ἄν-θρω-πος"]

    ].forEach(
      function(item) {

        addSimpleWord(
          section,
          item[0],
          "音节",
          item[1]
        );

      }
    );


    return;

  }


  addBox(
    section,

    lesson.n ===
    1

      ?

      "学习希腊文，是为了更准确地进入新约原文。"

      :

      "语言学习需要持续、重复、发音、书写和规律复习。"

  );

}


/* =========================================================
   GRAMMAR
========================================================= */

function renderGrammar(
  section,
  lesson,
  step
) {

  if (
    step ===
    0
  ) {

    addBox(
      section,
      lesson.objective
    );


    addNotice(
      section,
      researchNotice(
        lesson.kind
      )
    );


    return;

  }


  const forms =
    FORM_DATA[
      lesson.kind
    ] || [];


  if (
    step ===
    1
  ) {

    forms.forEach(
      function(item) {

        addSimpleWord(
          section,
          item[0],
          item[1],
          item[2]
        );

      }
    );


    return;

  }


  if (
    step ===
    2
  ) {

    if (
      forms.length
    ) {

      const table =
        document.createElement(
          "table"
        );


      table.className =
        "form-table";


      table.innerHTML =

        "<tr>" +

        "<th>形式</th>" +

        "<th>观察</th>" +

        "</tr>" +


        forms
          .map(
            function(item) {

              return (

                "<tr>" +

                "<td class='greek'>" +

                escapeHtml(
                  item[0]
                ) +

                "</td>" +

                "<td>" +

                escapeHtml(
                  item[1]
                ) +

                "</td>" +

                "</tr>"

              );

            }
          )
          .join("");


      section.appendChild(
        table
      );

    }


    return;

  }


  const bible =
    BIBLE[
      lesson.n
    ];


  if (
    bible
  ) {

    addBibleBox(
      section,
      bible
    );

  }


  addNotice(
    section,
    researchNotice(
      lesson.kind
    )
  );

}


/* =========================================================
   COURSE TEST
========================================================= */

function renderTest() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const box =
    $("lessonContent");


  box.innerHTML =
    "";


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>课程测试</h3>" +

    "<p class='muted'>" +

    "完成全部测试题后结束本课。"

    +

    "</p>";


  const questions =
    getTestQuestions(
      lesson.n
    );


  testScore =
    0;


  testAnswered =
    0;


  const score =
    document.createElement(
      "div"
    );


  score.className =
    "exercise-score";


  score.id =
    "liveTestScore";


  score.textContent =
    "0 / " +
    questions.length;


  section.appendChild(
    score
  );


  questions.forEach(
    function(
      q,
      qi
    ) {

      const block =
        document.createElement(
          "div"
        );


      block.style.marginTop =
        "17px";


      const title =
        document.createElement(
          "strong"
        );


      title.textContent =

        (
          qi +
          1
        ) +

        ". " +

        q[0];


      block.appendChild(
        title
      );


      const grid =
        document.createElement(
          "div"
        );


      grid.className =
        "choice-grid";


      q[1].forEach(
        function(
          option,
          oi
        ) {

          const b =
            document.createElement(
              "button"
            );


          b.type =
            "button";


          b.textContent =
            option;


          b.onclick =
            function() {

              grid
                .querySelectorAll(
                  "button"
                )
                .forEach(
                  function(
                    x
                  ) {

                    x.disabled =
                      true;

                  }
                );


              testAnswered++;


              if (
                oi ===
                q[2]
              ) {

                testScore++;


                b.classList.add(
                  "choice-correct"
                );

              }

              else {

                b.classList.add(
                  "choice-wrong"
                );

              }


              score.textContent =

                testScore +

                " / " +

                questions.length;

            };


          grid.appendChild(
            b
          );

        }
      );


      block.appendChild(
        grid
      );


      section.appendChild(
        block
      );

    }
  );


  const finish =
    document.createElement(
      "button"
    );


  finish.className =
    "primary wide";


  finish.textContent =
    "完成本课";


  finish.onclick =
    function() {

      if (
        testAnswered <
        questions.length
      ) {

        alert(
          "请先完成全部测试题。"
        );

        return;

      }


      completeLesson(
        testScore,
        questions.length
      );

    };


  section.appendChild(
    finish
  );


  box.appendChild(
    section
  );


  $("lessonNextBtn")
    .textContent =
    "重新测试";


  $("lessonNextBtn")
    .onclick =
    renderTest;

}


function getTestQuestions(
  n
) {

  const tests = {

    1: [
      [
        "学习希腊文的主要目的是什么？",
        [
          "进入新约原文",
          "只为考试",
          "只背中文"
        ],
        0
      ]
    ],

    2: [
      [
        "多感官学习包括什么？",
        [
          "看、读、听、写",
          "只看中文",
          "只背答案"
        ],
        0
      ]
    ],

    3: [
      [
        "希腊文有多少个字母？",
        [
          "24",
          "26",
          "20"
        ],
        0
      ]
    ],

    4: [
      [
        "希腊文问号是什么？",
        [
          ";",
          "?",
          ":"
        ],
        0
      ]
    ],

    5: [
      [
        "名词核心观察维度是什么？",
        [
          "性、数、格",
          "时态、语态、语气",
          "人称、时间、观点"
        ],
        0
      ]
    ],

    6: [
      [
        "τὸν θεόν 是什么格？",
        [
          "受格",
          "主格",
          "所有格"
        ],
        0
      ]
    ],

    7: [
      [
        "τοῦ θεοῦ 是什么格？",
        [
          "所有格",
          "主格",
          "受格"
        ],
        0
      ]
    ],

    8: [
      [
        "εἰμί 的基本意义是什么？",
        [
          "to be",
          "to see",
          "to hear"
        ],
        0
      ]
    ],

    9: [
      [
        "形容词通常与名词在哪些方面一致？",
        [
          "性、数、格",
          "时态、语态、语气",
          "只有性"
        ],
        0
      ]
    ],

    10: [
      [
        "第三格变式需要特别注意什么？",
        [
          "词干与字尾",
          "中文翻译",
          "章节号码"
        ],
        0
      ]
    ],

    11: [
      [
        "ἐγώ 表示什么？",
        [
          "I",
          "you",
          "we"
        ],
        0
      ]
    ],

    12: [
      [
        "αὐτόν 常表示什么？",
        [
          "him",
          "his",
          "they"
        ],
        0
      ]
    ],

    13: [
      [
        "οὗτος 的基本功能是什么？",
        [
          "this",
          "who",
          "because"
        ],
        0
      ]
    ],

    14: [
      [
        "关系代名词的格由什么决定？",
        [
          "它在关系子句中的功能",
          "中文翻译",
          "章节号码"
        ],
        0
      ]
    ],

    15: [
      [
        "动词需要观察什么？",
        [
          "时态、语态、语气、人称、数",
          "只有时间",
          "只有中文"
        ],
        0
      ]
    ],

    16: [
      [
        "λύομεν 是什么？",
        [
          "第一人称复数",
          "第二人称单数",
          "第三人称复数"
        ],
        0
      ]
    ],

    17: [
      [
        "ἀγαπῶ 属于什么？",
        [
          "缩略形式",
          "未来被动",
          "不定过去式"
        ],
        0
      ]
    ],

    18: [
      [
        "关身／被动意义如何判断？",
        [
          "结合上下文",
          "只看中文",
          "只看长度"
        ],
        0
      ]
    ],

    19: [
      [
        "未来式常见什么标记？",
        [
          "σ",
          "θ",
          "μ"
        ],
        0
      ]
    ],

    20: [
      [
        "为什么需要学习动词字干？",
        [
          "不同形式可能使用不同字干",
          "动词没有人称",
          "动词取代冠词"
        ],
        0
      ]
    ],

    21: [
      [
        "未完成式通常表达什么？",
        [
          "过去中的持续/进行观点",
          "未来命令",
          "只有身份"
        ],
        0
      ]
    ],

    22: [
      [
        "第二不定过去式的重要特征是什么？",
        [
          "第二词干",
          "未来σ",
          "冠词"
        ],
        0
      ]
    ],

    23: [
      [
        "第一不定过去式常见什么标记？",
        [
          "σα",
          "θη",
          "μαι"
        ],
        0
      ]
    ],

    24: [
      [
        "不定过去式被动常见什么标记？",
        [
          "θη",
          "σ",
          "ομαι"
        ],
        0
      ]
    ],

    25: [
      [
        "完成式常见什么特征？",
        [
          "重复号",
          "未来σ",
          "冠词"
        ],
        0
      ]
    ]

  };


  return (
    tests[n] ||
    []
  );

}


/* =========================================================
   COMPLETE LESSON
========================================================= */

function completeLesson(
  score,
  total
) {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const st =
    getLessonState(
      currentLessonIndex
    );


  st.completed =
    true;


  st.score =
    Math.round(
      score /
      total *
      100
    );


  st.completedAt =
    new Date()
      .toISOString();


  saveState();


  renderHome();

  renderCourseReview();

  renderVocabularySummary();


  $("lessonContent")
    .innerHTML =

    "<div class='lesson-section'>" +

    "<div class='success'>" +

    "<strong>✓ " +

    escapeHtml(
      lesson.title
    ) +

    "</strong>" +

    "<br><br>" +

    "课程成绩：" +

    st.score +

    "%" +

    "<br><br>" +

    (
      st.score >=
      80

        ? "基础掌握良好，可以继续下一课。"

        : "建议复习后再次测试。"

    ) +

    "</div>" +

    "</div>";


  const next =
    $("lessonNextBtn");


  if (
    currentLessonIndex <
    LESSONS.length - 1
  ) {

    next.textContent =
      "下一课 →";


    next.onclick =
      function() {

        openLesson(
          currentLessonIndex +
          1
        );

      };

  }

  else {

    next.textContent =
      "返回课程目录";


    next.onclick =
      function() {

        go("home");

        renderHome();

      };

  }

}


/* =========================================================
   STEP
========================================================= */

function nextStep() {

  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  if (
    currentStep <
    lesson.sections.length
  ) {

    currentStep++;

    renderLessonStep();

    renderLessonVocabulary();

  }

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

    go("home");

  }

}


/* =========================================================
   VOCABULARY CARD
========================================================= */

function renderLessonVocabulary() {

  const container =
    $("lessonVocabulary");


  if (
    !container
  ) {

    return;

  }


  const lesson =
    LESSONS[
      currentLessonIndex
    ];


  const list =
    VOCABULARY.filter(
      function(item) {

        return (
          item.lesson ===
          lesson.n
        );

      }
    );


  container.innerHTML =
    "";


  if (
    !list.length
  ) {

    return;

  }


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "lesson-section";


  section.innerHTML =

    "<h3>📚 本课新单字</h3>" +

    "<p class='muted'>" +

    "先听，再认，再回忆。"

    +

    "</p>";


  list.forEach(
    function(item) {

      section.appendChild(
        createVocabularyCard(
          item
        )
      );

    }
  );


  container.appendChild(
    section
  );

}


function createVocabularyCard(
  item
) {

  const memory =
    getWordState(
      item.word
    );


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "vocab-card";


  card.innerHTML =

    "<div>" +

    "<div class='vocab-greek'>" +

    escapeHtml(
      item.word
    ) +

    "</div>" +

    "<div class='vocab-gloss'>" +

    escapeHtml(
      item.gloss
    ) +

    "</div>" +

    "<div class='vocab-frequency'>" +

    "NT frequency: " +

    (
      item.frequency ===
      null

        ? "—"

        : item.frequency

    ) +

    "</div>" +

    "</div>" +


    "<div class='vocab-actions'>" +

    "<button type='button' class='listen'>" +

    "🔊 听"

    +

    "</button>" +

    "<button type='button' class='recall'>" +

    "🧠 回忆"

    +

    "</button>" +

    "</div>" +


    "<span class='vocab-status'>" +

    vocabStatus(
      memory.status
    ) +

    "</span>";


  card
    .querySelector(
      ".listen"
    )
    .onclick =
    function() {

      speakText(
        item.word
      );

    };


  card
    .querySelector(
      ".recall"
    )
    .onclick =
    function() {

      startSingleVocabularyReview(
        item
      );

    };


  return card;

}


function vocabStatus(
  status
) {

  if (
    status ===
    "mastered"
  ) {

    return "已掌握";

  }


  if (
    status ===
    "learning"
  ) {

    return "学习中";

  }


  return "新单字";

}


/* =========================================================
   VOCAB REVIEW
========================================================= */

function startSingleVocabularyReview(
  item
) {

  reviewQueue =
    [item];


  reviewIndex =
    0;


  go(
    "vocabReview"
  );


  renderVocabularyReview();

}


function startVocabularyReview() {

  const due =
    getDueVocabulary();


  if (
    !due.length
  ) {

    alert(
      "今天暂时没有到期复习的单字。"
    );

    return;

  }


  reviewQueue =
    due;


  reviewIndex =
    0;


  go(
    "vocabReview"
  );


  renderVocabularyReview();

}


function renderVocabularyReview() {

  const box =
    $("vocabReviewArea");


  const counter =
    $("reviewCounter");


  if (
    !box
  ) {

    return;

  }


  if (
    reviewIndex >=
    reviewQueue.length
  ) {

    counter.textContent =
      "训练完成";


    box.innerHTML =

      "<div class='success'>" +

      "<strong>🎉 单字训练完成</strong>" +

      "<br><br>" +

      "继续保持规律复习。"

      +

      "</div>";


    renderVocabularySummary();


    return;

  }


  const item =
    reviewQueue[
      reviewIndex
    ];


  counter.textContent =

    "第 " +

    (
      reviewIndex +
      1
    ) +

    " / " +

    reviewQueue.length;


  box.innerHTML =
    "";


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "vocab-memory-test";


  section.innerHTML =

    "<div class='eyebrow'>" +

    "MEANING RECALL"

    +

    "</div>" +

    "<div class='vocab-memory-word greek'>" +

    escapeHtml(
      item.word
    ) +

    "</div>" +

    "<button type='button' id='hearWord'>🔊 听发音</button>" +

    "<p class='muted' style='text-align:center'>" +

    "请选择基本意思。"

    +

    "</p>" +

    "<div id='vocabChoices' class='vocab-memory-options'></div>";


  section
    .querySelector(
      "#hearWord"
    )
    .onclick =
    function() {

      speakText(
        item.word
      );

    };


  const grid =
    section.querySelector(
      "#vocabChoices"
    );


  getVocabularyOptions(
    item
  )
    .forEach(
      function(
        option
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

            grid
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
              normalize(
                option
              ) ===
              normalize(
                item.gloss
              );


            if (
              correct
            ) {

              button.classList.add(
                "vocab-correct"
              );

            }

            else {

              button.classList.add(
                "vocab-wrong"
              );

            }


            updateVocabularyMemory(
              item,
              correct
            );


            const result =
              document.createElement(
                "div"
              );


            result.className =
              "success";


            result.style.marginTop =
              "14px";


            result.textContent =

              correct

                ? "✓ 正确。"

                : (

                  "✗ 正确答案：" +

                  item.gloss

                );


            const next =
              document.createElement(
                "button"
              );


            next.className =
              "primary wide";


            next.textContent =
              "下一词 →";


            next.onclick =
              function() {

                reviewIndex++;

                renderVocabularyReview();

              };


            result.appendChild(
              next
            );


            section.appendChild(
              result
            );

          };


        grid.appendChild(
          button
        );

      }
    );


  box.appendChild(
    section
  );

}


function getVocabularyOptions(
  correct
) {

  const others =
    VOCABULARY
      .filter(
        function(item) {

          return (
            item.word !==
            correct.word &&
            item.gloss
          );

        }
      )
      .slice()
      .sort(
        function() {

          return Math.random() -
            0.5;

        }
      );


  const options = [

    correct.gloss,

    others[0]
      ? others[0].gloss
      : "生命",

    others[1]
      ? others[1].gloss
      : "世界",

    others[2]
      ? others[2].gloss
      : "光"

  ];


  return options.sort(
    function() {

      return Math.random() -
        0.5;

    }
  );

}


function updateVocabularyMemory(
  item,
  correct
) {

  const memory =
    getWordState(
      item.word
    );


  memory.lastSeen =
    new Date()
      .toISOString();


  if (
    correct
  ) {

    memory.correct++;

    memory.recallCorrect++;

  }

  else {

    memory.wrong++;

  }


  const score =
    memory.recallCorrect +
    memory.spellingCorrect;


  if (
    score >=
    5
  ) {

    memory.status =
      "mastered";

    memory.nextReview =
      addDays(
        30
      );

  }

  else if (
    score >=
    4
  ) {

    memory.status =
      "learning";

    memory.nextReview =
      addDays(
        14
      );

  }

  else if (
    score >=
    3
  ) {

    memory.status =
      "learning";

    memory.nextReview =
      addDays(
        7
      );

  }

  else if (
    score >=
    2
  ) {

    memory.status =
      "learning";

    memory.nextReview =
      addDays(
        3
      );

  }

  else {

    memory.status =
      "learning";

    memory.nextReview =
      addDays(
        1
      );

  }


  if (
    !correct
  ) {

    memory.status =
      "learning";

    memory.nextReview =
      addDays(
        1
      );

  }


  saveState();

  renderVocabularySummary();

}


function addDays(
  days
) {

  const date =
    new Date();


  date.setDate(
    date.getDate() +
    days
  );


  return date
    .toISOString()
    .slice(
      0,
      10
    );

}


function getDueVocabulary() {

  const today =
    new Date()
      .toISOString()
      .slice(
        0,
        10
      );


  return VOCABULARY.filter(
    function(item) {

      const memory =
        getWordState(
          item.word
        );


      return (
        memory.nextReview &&
        memory.nextReview <=
        today
      );

    }
  );

}


/* =========================================================
   VOCAB SUMMARY
========================================================= */

function renderVocabularySummary() {

  const unique =
    [];


  const seen =
    {};


  VOCABULARY.forEach(
    function(item) {

      if (
        !seen[item.word]
      ) {

        seen[item.word] =
          true;

        unique.push(
          item
        );

      }

    }
  );


  let learning =
    0;


  let mastered =
    0;


  unique.forEach(
    function(item) {

      const memory =
        getWordState(
          item.word
        );


      if (
        memory.status ===
        "learning"
      ) {

        learning++;

      }


      if (
        memory.status ===
        "mastered"
      ) {

        mastered++;

      }

    }
  );


  const due =
    getDueVocabulary()
      .length;


  if (
    $("vocabTotal")
  ) {

    $("vocabTotal")
      .textContent =
      unique.length;

  }


  if (
    $("vocabLearning")
  ) {

    $("vocabLearning")
      .textContent =
      learning;

  }


  if (
    $("vocabMastered")
  ) {

    $("vocabMastered")
      .textContent =
      mastered;

  }


  if (
    $("vocabDue")
  ) {

    $("vocabDue")
      .textContent =
      due;

  }

}


/* =========================================================
   VOCAB DATABASE
========================================================= */

function renderVocabularyDatabase() {

  const box =
    $("vocabAllList");


  if (
    !box
  ) {

    return;

  }


  const input =
    $("vocabSearch");


  const query =
    input
      ? input.value
          .trim()
          .toLowerCase()
      : "";


  const list =
    VOCABULARY.filter(
      function(item) {

        const text =

          (
            item.word +
            " " +
            item.gloss +
            " " +
            item.lesson
          )
            .toLowerCase();


        return (
          !query ||
          text.includes(
            query
          )
        );

      }
    );


  box.innerHTML =
    "";


  if (
    !list.length
  ) {

    box.innerHTML =

      "<div class='muted'>" +

      "没有找到匹配词汇。"

      +

      "</div>";

    return;

  }


  list.forEach(
    function(item) {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "vocab-database-row";


      const memory =
        getWordState(
          item.word
        );


      row.innerHTML =

        "<div class='vocab-db-greek'>" +

        escapeHtml(
          item.word
        ) +

        "</div>" +

        "<div>" +

        escapeHtml(
          item.gloss
        ) +

        "</div>" +

        "<div class='vocab-db-meta'>" +

        "Lesson " +

        item.lesson +

        " · " +

        vocabStatus(
          memory.status
        ) +

        "</div>" +

        "<div class='vocab-db-frequency'>" +

        "NT frequency: " +

        (
          item.frequency ===
          null
            ? "—"
            : item.frequency
        ) +

        "</div>";


      row.onclick =
        function() {

          startSingleVocabularyReview(
            item
          );

        };


      box.appendChild(
        row
      );

    }
  );

}


/* =========================================================
   MORPHOLOGY ENGINE
========================================================= */

function startMorphologyTraining() {

  morphologyQueue =
    MORPHOLOGY_ITEMS
      .slice()
      .sort(
        function() {

          return Math.random() -
            0.5;

        }
      );


  morphologyIndex =
    0;


  morphologyScore =
    0;


  morphologyAnswered =
    0;


  go(
    "morphology"
  );


  renderMorphology();

}


function renderMorphology() {

  const box =
    $("morphologyArea");


  const counter =
    $("morphologyCounter");


  if (
    morphologyIndex >=
    morphologyQueue.length
  ) {

    counter.textContent =
      "训练完成";


    box.innerHTML =

      "<div class='success'>" +

      "<strong>🔬 词形分析完成</strong>" +

      "<br><br>" +

      "成绩：" +

      morphologyScore +

      " / " +

      morphologyQueue.length +

      "<br><br>" +

      (
        morphologyScore >=
        morphologyQueue.length * 0.8

          ? "词形基础掌握良好。"

          : "建议再做一次词形训练。"

      ) +

      "</div>";


    saveMorphologyStats();

    return;

  }


  const item =
    morphologyQueue[
      morphologyIndex
    ];


  counter.textContent =

    "第 " +

    (
      morphologyIndex +
      1
    ) +

    " / " +

    morphologyQueue.length;


  box.innerHTML =
    "";


  const section =
    document.createElement(
      "div"
    );


  section.className =
    "morphology-card";


  section.innerHTML =

    "<div class='morphology-progress'>" +

    "<div class='morphology-progress-fill' style='width:" +

    (

      morphologyIndex /
      morphologyQueue.length *
      100

    ) +

    "%'></div>" +

    "</div>" +

    "<div class='morphology-word greek'>" +

    escapeHtml(
      item.form
    ) +

    "</div>" +

    "<button type='button' id='morphSpeak'>🔊 听词形</button>" +

    "<div id='morphQuestions'></div>";


  box.appendChild(
    section
  );


  $("morphSpeak").onclick =
    function() {

      speakText(
        item.form
      );

    };


  buildMorphologyQuestions(
    item
  );

}


/* =========================================================
   MORPH QUESTIONS
========================================================= */

function buildMorphologyQuestions(
  item
) {

  const container =
    $("morphQuestions");


  if (
    !container
  ) {

    return;

  }


  const questions = [

    {
      key:
        "lemma",

      label:
        "1. 词典形",

      answer:
        item.lemma

    },

    {
      key:
        "tense",

      label:
        "2. 时态",

      answer:
        item.tense

    },

    {
      key:
        "voice",

      label:
        "3. 语态",

      answer:
        item.voice

    },

    {
      key:
        "mood",

      label:
        "4. 语气",

      answer:
        item.mood

    },

    {
      key:
        "person",

      label:
        "5. 人称",

      answer:
        item.person

    },

    {
      key:
        "number",

      label:
        "6. 数",

      answer:
        item.number

    }

  ];


  questions.forEach(
    function(q) {

      const block =
        document.createElement(
          "div"
        );


      block.className =
        "morphology-question";


      block.innerHTML =
        "<div>" +
        escapeHtml(
          q.label
        ) +
        "</div>" +
        "<div class='morphology-options'></div>";


      const grid =
        block.querySelector(
          ".morphology-options"
        );


      getMorphologyOptions(
        q,
        item
      )
        .forEach(
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

                grid
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
                  normalize(
                    option
                  ) ===
                  normalize(
                    q.answer
                  );


                if (
                  correct
                ) {

                  button.classList.add(
                    "choice-correct"
                  );

                  morphologyScore++;

                }

                else {

                  button.classList.add(
                    "choice-wrong"
                  );

                }


                morphologyAnswered++;


                state.morphology.attempted++;


                if (
                  correct
                ) {

                  state.morphology.correct++;

                }


                saveState();


                const result =
                  document.createElement(
                    "div"
                  );


                result.className =
                  "success";


                result.style.marginTop =
                  "8px";


                result.textContent =

                  correct

                    ? "✓"

                    : (

                      "✗ 正确答案：" +

                      q.answer

                    );


                block.appendChild(
                  result
                );

              };


            grid.appendChild(
              button
            );

          }
        );


      container.appendChild(
        block
      );

    }
  );


  const finish =
    document.createElement(
      "button"
    );


  finish.className =
    "primary wide";


  finish.textContent =
    "分析下一个词形 →";


  finish.onclick =
    function() {

      if (
        morphologyAnswered <
        questions.length
      ) {

        alert(
          "请完成这个词形的全部分析。"
        );

        return;

      }


      morphologyIndex++;

      morphologyAnswered =
        0;

      renderMorphology();

    };


  container.appendChild(
    finish
  );

}


/* =========================================================
   MORPH OPTIONS
========================================================= */

function getMorphologyOptions(
  question,
  item
) {

  const pool = [];


  MORPHOLOGY_ITEMS.forEach(
    function(other) {

      const value =
        other[
          question.key
        ];


      if (
        value &&
        value !==
        question.answer
      ) {

        pool.push(
          value
        );

      }

    }
  );


  pool.push(
    "主格"
  );

  pool.push(
    "受格"
  );

  pool.push(
    "现在式"
  );

  pool.push(
    "主动"
  );

  pool.push(
    "复数"
  );


  const unique = [];


  pool.forEach(
    function(value) {

      if (
        value &&
        value !==
        question.answer &&
        !unique.includes(
          value
        )
      ) {

        unique.push(
          value
        );

      }

    }
  );


  unique.sort(
    function() {

      return Math.random() -
        0.5;

    }
  );


  return [

    question.answer,

    unique[0] ||
      "受格",

    unique[1] ||
      "现在式",

    unique[2] ||
      "主动"

  ]
    .sort(
      function() {

        return Math.random() -
          0.5;

      }
    );

}


/* =========================================================
   MORPHOLOGY STATS
========================================================= */

function saveMorphologyStats() {

  saveState();

}


function normalize(
  value
) {

  return String(
    value ?? ""
  )
    .trim()
    .replace(
      /\s+/g,
      " "
    )
    .normalize(
      "NFD"
    )
    .replace(
      /[\u0300-\u036f]/g,
      ""
    );

}


/* =========================================================
   SIMPLE COMPONENTS
========================================================= */

function addSimpleWord(
  parent,
  word,
  detail,
  gloss
) {

  const card =
    document.createElement(
      "div"
    );


  card.className =
    "word-card";


  card.innerHTML =

    "<div class='word-card-main'>" +

    "<div>" +

    "<div class='word-greek'>" +

    escapeHtml(
      word
    ) +

    "</div>" +

    "<div class='word-gloss'>" +

    escapeHtml(
      gloss
    ) +

    "</div>" +

    "</div>" +

    "<button type='button' class='speak-btn'>🔊</button>" +

    "</div>" +

    "<div class='word-detail'>" +

    escapeHtml(
      detail
    ) +

    "</div>";


  card
    .querySelector(
      ".speak-btn"
    )
    .onclick =
    function(
      event
    ) {

      event.stopPropagation();

      speakText(
        word
      );

    };


  parent.appendChild(
    card
  );

}


function addBox(
  parent,
  text
) {

  const box =
    document.createElement(
      "div"
    );


  box.className =
    "grammar-box";


  box.textContent =
    text;


  parent.appendChild(
    box
  );

}


function addNotice(
  parent,
  text
) {

  const box =
    document.createElement(
      "div"
    );


  box.className =
    "notice-box";


  box.textContent =
    text;


  parent.appendChild(
    box
  );

}


function addBibleBox(
  parent,
  bible
) {

  const box =
    document.createElement(
      "div"
    );


  box.className =
    "bible-box";


  box.innerHTML =

    "<div class='bible-reference'>" +

    escapeHtml(
      bible[0]
    ) +

    "</div>" +

    "<div class='bible-text greek'>" +

    escapeHtml(
      bible[1]
    ) +

    "</div>" +

    "<div class='muted'>" +

    escapeHtml(
      bible[2]
    ) +

    "</div>";


  box.onclick =
    function() {

      speakText(
        bible[1]
      );

    };


  parent.appendChild(
    box
  );

}


function researchNotice(
  kind
) {

  const notes = {

    noun:
      "名词：先判断性、数、格，再判断句中功能。",

    case:
      "格：不要把一个格机械等于一个中文意思，要结合上下文。",

    adjective:
      "形容词：寻找相关名词，检查性、数、格一致。",

    third:
      "第三格变式：寻找词干，再确认字尾。",

    pronoun:
      "代词：先识别形式，再追踪指涉对象。",

    autos:
      "αὐτός：不要固定成一个中文译法。",

    demonstrative:
      "指示词：先问它具体指向什么。",

    relative:
      "关系代名词：性、数与先行词相关，格由关系子句中的功能决定。",

    verb:
      "动词：分别观察时态、语态、语气、人称和数。",

    present:
      "现在式：观察时态字干、连接母音和人称字尾。",

    contract:
      "缩略动词：观察元音缩合。",

    mp:
      "关身／被动：形式相同或接近时必须结合上下文判断。",

    future:
      "未来式：先确认形式，再讨论时间和观点。",

    stems:
      "词干：陌生动词形式需要回到词典和时态字形。",

    imperfect:
      "未完成式：观察往昔号、字干以及过去中的连续观点。",

    aorist2:
      "第二不定过去式：重点观察第二词干。",

    aorist1:
      "第一不定过去式：观察往昔号、字干和 σα。",

    passive:
      "被动：先完成形态分析，再判断动作接受者。",

    perfect:
      "完成式：观察重复号及动作与持续结果之间的关系。"

  };


  return (
    notes[kind] ||
    "先看形式，再看功能，最后回到上下文。"
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
      "当前浏览器不支持语音朗读。"
    );

    return;

  }


  window.speechSynthesis.cancel();


  const utterance =
    new SpeechSynthesisUtterance(
      text
    );


  utterance.lang =
    CONFIG.LANGUAGE;


  utterance.rate =
    speechRate;


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

window.speakText =
  speakText;

window.startVocabularyReview =
  startVocabularyReview;

window.startSingleVocabularyReview =
  startSingleVocabularyReview;

window.startMorphologyTraining =
  startMorphologyTraining;


/* =========================================================
   END GBRM V1.4
========================================================= */
