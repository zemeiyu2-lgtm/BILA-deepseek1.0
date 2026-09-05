/* =========================================================
   GBRM V1.0
   Foundation Course L01–L25
   Data-driven course engine
========================================================= */

const CONFIG = {
  STATE_KEY: "GBRM_V10_STATE",
  LANGUAGE: "en-US",
  NORMAL_RATE: 0.88,
  SLOW_RATE: 0.65
};

const LESSONS = [
  {
    n: 1,
    title: "希腊语",
    group: "引言",
    objective: "认识学习新约希腊文的目标：以原文阅读服务圣经理解。",
    kind: "intro",
    sections: ["为什么学习希腊文", "学习目标", "学习方法"]
  },
  {
    n: 2,
    title: "学习希腊文",
    group: "引言",
    objective: "建立长期学习、发音、书写、记忆、作业与同伴学习的习惯。",
    kind: "intro",
    sections: ["学习纪律", "多感官学习", "作业与复习"]
  },
  {
    n: 3,
    title: "字母与发音",
    group: "引言",
    objective: "掌握24个字母、书写与基本发音，并认识元音、双母音与气号。",
    kind: "alphabet",
    sections: ["24个字母", "元音", "双母音", "气号"]
  },
  {
    n: 4,
    title: "标点符号与音节",
    group: "引言",
    objective: "认识基本标点和音节结构，开始流畅读取希腊文词形。",
    kind: "syllable",
    sections: ["标点符号", "音节", "阅读练习"]
  },
  {
    n: 5,
    title: "英文的名词简介",
    group: "名词系统",
    objective: "先用熟悉的英文概念理解名词、性、数、格，再转入希腊文。",
    kind: "noun",
    sections: ["名词是什么", "性与数", "格与功能"]
  },
  {
    n: 6,
    title: "主格与直接受格；定冠词",
    group: "名词系统",
    objective: "辨认主格、直接受格与定冠词，并开始通过形式判断句中角色。",
    kind: "case",
    sections: ["主格", "直接受格", "定冠词", "原文观察"]
  },
  {
    n: 7,
    title: "所有格与间接受格",
    group: "名词系统",
    objective: "认识所有格与间接受格的基本功能，并观察关系与来源。",
    kind: "case",
    sections: ["所有格", "间接受格", "形式比较", "原文观察"]
  },
  {
    n: 8,
    title: "介词与 εἰμί",
    group: "名词系统",
    objective: "学习基本介词及 εἰμί 的基本形式，为阅读完整句子作准备。",
    kind: "case",
    sections: ["介词", "εἰμί", "形式", "原文观察"]
  },
  {
    n: 9,
    title: "形容词",
    group: "名词系统",
    objective: "理解形容词与名词之间的性、数、格一致。",
    kind: "adjective",
    sections: ["形容词功能", "一致关系", "词形观察", "原文阅读"]
  },
  {
    n: 10,
    title: "第三格变式名词",
    group: "名词系统",
    objective: "开始识别第三格变式名词的词干和格形式。",
    kind: "third",
    sections: ["第三格变式", "词干", "常见形式", "原文观察"]
  },
  {
    n: 11,
    title: "第一与第二人称代名词",
    group: "名词系统",
    objective: "掌握第一、第二人称代名词的基本形式和句法功能。",
    kind: "pronoun",
    sections: ["第一人称", "第二人称", "格与功能", "原文观察"]
  },
  {
    n: 12,
    title: "αὐτός",
    group: "名词系统",
    objective: "学习 αὐτός 的常见代名词功能，并根据形式和上下文判断意义。",
    kind: "autos",
    sections: ["αὐτός", "基本形式", "句法功能", "原文观察"]
  },
  {
    n: 13,
    title: "指示代名词／形容词",
    group: "名词系统",
    objective: "认识指示词并观察它们如何指向特定对象。",
    kind: "demonstrative",
    sections: ["指示词", "οὗτος", "一致关系", "原文观察"]
  },
  {
    n: 14,
    title: "关系代名词",
    group: "名词系统",
    objective: "理解关系代名词如何连接先行词与关系子句。",
    kind: "relative",
    sections: ["关系代名词", "ὅς · ἥ · ὅ", "性数格", "原文观察"]
  },
  {
    n: 15,
    title: "动词简介",
    group: "直说语气动词系统",
    objective: "建立动词的时态、语态、语气、人称与数等基本概念。",
    kind: "verb",
    sections: ["动词是什么", "人称与数", "时态与观点", "时态字干"]
  },
  {
    n: 16,
    title: "现在式主动语态直说语气",
    group: "直说语气动词系统",
    objective: "掌握现在式主动直说语气的结构：时态字干＋连接母音＋今将人称字尾。",
    kind: "present",
    sections: ["结构图", "六个人称形式", "人称字尾", "原文观察"]
  },
  {
    n: 17,
    title: "缩略动词",
    group: "直说语气动词系统",
    objective: "认识现在式主动缩略动词，并观察元音缩合。",
    kind: "contract",
    sections: ["缩略是什么", "ἀγαπάω", "ζητέω", "原文观察"]
  },
  {
    n: 18,
    title: "现在式关身／被动语态直说语气",
    group: "直说语气动词系统",
    objective: "掌握现在式关身／被动形式，并学习依上下文判断关身或被动意义。",
    kind: "mp",
    sections: ["关身／被动", "基本字尾", "形主动意动词", "原文观察"]
  },
  {
    n: 19,
    title: "未来式主动／关身语态直说语气",
    group: "直说语气动词系统",
    objective: "认识规则未来式，并学习主动与关身语态的基本形式。",
    kind: "future",
    sections: ["未来式", "σ记号", "主动语态", "关身语态"]
  },
  {
    n: 20,
    title: "动词字根；未来式的其他字形",
    group: "直说语气动词系统",
    objective: "学习动词词干和未来式其他字形，并开始使用词典中的时态字形信息。",
    kind: "stems",
    sections: ["词干", "塞音结尾", "缩略字干", "词典时态字形"]
  },
  {
    n: 21,
    title: "不完成式",
    group: "直说语气动词系统",
    objective: "掌握未完成式直说语气，并观察连续观点与过去时间的结合。",
    kind: "imperfect",
    sections: ["未完成式", "往昔号", "ἔλυον", "原文观察"]
  },
  {
    n: 22,
    title: "第二不定过去式主动／关身语态直说语气",
    group: "直说语气动词系统",
    objective: "掌握第二不定过去式的第二词干、主动与关身形式，并避免把观点强行等同于中文时态。",
    kind: "aorist2",
    sections: ["第二不定过去式", "第二词干", "主动与关身", "释经观察"]
  },
  {
    n: 23,
    title: "第一不定过去式主动／关身语态直说语气",
    group: "直说语气动词系统",
    objective: "掌握第一不定过去式的 σα 形式，并与第二不定过去式比较。",
    kind: "aorist1",
    sections: ["第一不定过去式", "σα", "主动与关身", "释经观察"]
  },
  {
    n: 24,
    title: "不定过去式与未来式被动语态直说语气",
    group: "直说语气动词系统",
    objective: "认识 θη／θησ 被动语态时态记号，判断主词作为动作接受者的功能。",
    kind: "passive",
    sections: ["未来被动", "不定过去式被动", "构成", "释经观察"]
  },
  {
    n: 25,
    title: "现在完成式直说语气",
    group: "直说语气动词系统",
    objective: "掌握完成式基本构成，并观察过去动作与持续结果／状态之间的关系。",
    kind: "perfect",
    sections: ["完成式", "重复号", "主动形式", "原文观察"]
  }
];

const ALPHABET = [
  ["Α","α","Alpha","a"],
  ["Β","β","Beta","b"],
  ["Γ","γ","Gamma","g"],
  ["Δ","δ","Delta","d"],
  ["Ε","ε","Epsilon","e"],
  ["Ζ","ζ","Zeta","z"],
  ["Η","η","Eta","ē"],
  ["Θ","θ","Theta","th"],
  ["Ι","ι","Iota","i"],
  ["Κ","κ","Kappa","k"],
  ["Λ","λ","Lambda","l"],
  ["Μ","μ","Mu","m"],
  ["Ν","ν","Nu","n"],
  ["Ξ","ξ","Xi","x"],
  ["Ο","ο","Omicron","o"],
  ["Π","π","Pi","p"],
  ["Ρ","ρ","Rho","r"],
  ["Σ","σ","Sigma","s"],
  ["Τ","τ","Tau","t"],
  ["Υ","υ","Upsilon","u"],
  ["Φ","φ","Phi","ph"],
  ["Χ","χ","Chi","ch"],
  ["Ψ","ψ","Psi","ps"],
  ["Ω","ω","Omega","ō"]
];

const VOWELS = [
  ["α","a"],
  ["ε","e"],
  ["η","ē"],
  ["ι","i"],
  ["ο","o"],
  ["υ","u"],
  ["ω","ō"]
];

const DIPHTHONGS = [
  ["αι","ai"],
  ["ει","ei"],
  ["οι","oi"],
  ["ου","ou"],
  ["αυ","au"],
  ["ευ","eu"],
  ["υι","ui"]
];

const COMMON_FORMS = {
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
    ["ἐγώ","主格·第一人称单数","I"],
    ["μοι","间接受格·第一人称单数","to/for me"],
    ["ἡμεῖς","主格·第一人称复数","we"],
    ["σύ","主格·第二人称单数","you"],
    ["ὑμεῖς","主格·第二人称复数","you"]
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
  present: [
    ["λύω","1单","I loose"],
    ["λύεις","2单","you loose"],
    ["λύει","3单","he/she/it looses"],
    ["λύομεν","1复","we loose"],
    ["λύετε","2复","you loose"],
    ["λύουσι(ν)","3复","they loose"]
  ],
  mp: [
    ["λύομαι","1单","I am being loosed / I loose for myself"],
    ["λύῃ","2单","you are being loosed / middle"],
    ["λύεται","3单","he/she/it is being loosed"],
    ["λυόμεθα","1复","we are being loosed"]
  ],
  future: [
    ["λύσω","未来主动1单","I will loose"],
    ["λύσεις","未来主动2单","you will loose"],
    ["λύσει","未来主动3单","he/she/it will loose"],
    ["λύσομαι","未来关身1单","I will loose for myself"]
  ],
  imperfect: [
    ["ἔλυον","1单/3复·依上下文","I was loosing / they were loosing"],
    ["ἔλυες","2单","you were loosing"],
    ["ἔλυε(ν)","3单","he/she/it was loosing"],
    ["ἐλύομεν","1复","we were loosing"]
  ],
  aorist2: [
    ["ἔλαβον","第二不定过去式·主动1单/3复","I took / they took"],
    ["ἔλαβες","主动2单","you took"],
    ["ἔλαβε(ν)","主动3单","he/she/it took"],
    ["ἐλάβομεν","主动1复","we took"]
  ],
  aorist1: [
    ["ἔλυσα","第一不定过去式·主动1单","I loosed"],
    ["ἔλυσας","主动2单","you loosed"],
    ["ἔλυσε(ν)","主动3单","he/she/it loosed"],
    ["ἐλυσάμην","关身1单","I loosed for myself"]
  ],
  passive: [
    ["λυθήσομαι","未来被动1单","I will be loosed"],
    ["λυθήσῃ","未来被动2单","you will be loosed"],
    ["ἐλύθην","不定过去式被动1单","I was loosed"],
    ["ἐλύθησαν","不定过去式被动3复","they were loosed"]
  ],
  perfect: [
    ["λέλυκα","完成式主动1单","I have loosed"],
    ["λέλυκας","完成式主动2单","you have loosed"],
    ["λέλυκε(ν)","完成式主动3单","he/she/it has loosed"],
    ["λέλυμαι","完成式关身/被动1单","I have been loosed"]
  ]
};

const BIBLE = {
  3: ["John 1:1","Ἐν ἀρχῇ ἦν ὁ λόγος.","太初有道。"],
  6: ["John 1:1","καὶ ὁ λόγος ἦν πρὸς τὸν θεόν.","道与神同在。"],
  7: ["John 1:6","ἀπεσταλμένος παρὰ θεοῦ","从神那里差来的。"],
  8: ["John 1:1","Ἐν ἀρχῇ ἦν ὁ λόγος.","太初有道。"],
  9: ["John 1:46","δύναταί τι ἀγαθὸν εἶναι;","还能出什么好的吗？"],
  10: ["John 1:5","τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει","光照在黑暗里。"],
  11: ["John 1:23","Ἐγὼ φωνὴ βοῶντος ἐν τῇ ἐρήμῳ","我就是那在旷野有人声喊着的。"],
  12: ["John 1:10","ὁ κόσμος δι’ αὐτοῦ ἐγένετο.","世界也是借着他造的。"],
  13: ["John 1:30","οὗτός ἐστιν ὑπὲρ οὗ ἐγὼ εἶπον","这就是我曾说过的那一位。"],
  14: ["John 1:30","οὗ ἐγὼ εἶπον","我曾说过的那一位。"],
  16: ["John 1:7","πάντες πιστεύσωσιν δι’ αὐτοῦ","叫众人因他可以信。"],
  17: ["John 1:38","τί ζητεῖτε;","你们寻找什么？"],
  19: ["John 1:51","ὄψεσθε τὸν οὐρανὸν ἀνεῳγότα","你们将要看见天开了。"],
  22: ["Luke 15:24","ἦν νεκρὸς καὶ ἔζησεν","他是死而复活。"],
  23: ["Romans 5:1","δικαιωθέντες οὖν ἐκ πίστεως","我们既因信称义。"],
  24: ["Romans 6:3","ἐβαπτίσθημεν εἰς τὸν θάνατον αὐτοῦ","受洗归入他的死。"],
  25: ["John 3:18","ἤδη κέκριται","已经定了。"]
};

let state = loadState();
let currentLessonIndex = 0;
let currentStep = 0;
let testScore = 0;
let testAnswered = 0;
let speechRate = CONFIG.NORMAL_RATE;

function loadState() {
  try {
    const x = JSON.parse(
      localStorage.getItem(CONFIG.STATE_KEY) || "null"
    );
    if (x && x.lessons) return x;
  } catch (e) {}
  return { lessons: {} };
}

function save() {
  localStorage.setItem(
    CONFIG.STATE_KEY,
    JSON.stringify(state)
  );
}

function $(id) {
  return document.getElementById(id);
}

function esc(v) {
  return String(v ?? "").replace(
    /[&<>"']/g,
    function (m) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[m];
    }
  );
}

function lessonState(i) {
  const id = "L" + LESSONS[i].n;

  if (!state.lessons[id]) {
    state.lessons[id] = {
      completed: false,
      score: 0,
      completedAt: null
    };
  }

  return state.lessons[id];
}

function go(id) {
  document
    .querySelectorAll(".screen")
    .forEach(function (s) {
      s.classList.remove("active");
    });

  const target = $(id);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function init() {
  renderHome();
  renderReview();
  bindEvents();
}

function bindEvents() {
  if ($("lessonBackBtn")) {
    $("lessonBackBtn").onclick = function () {
      go("home");
      renderHome();
    };
  }

  if ($("reviewBackBtn")) {
    $("reviewBackBtn").onclick = function () {
      go("home");
      renderHome();
    };
  }

  if ($("reviewHomeBtn")) {
    $("reviewHomeBtn").onclick = function () {
      go("review");
      renderReview();
    };
  }

  if ($("lessonNextBtn")) {
    $("lessonNextBtn").onclick = nextStep;
  }

  if ($("lessonPrevBtn")) {
    $("lessonPrevBtn").onclick = previousLesson;
  }
}

function renderHome() {
  const list = $("lessonList");

  if (!list) return;

  list.innerHTML = "";

  let lastGroup = "";

  LESSONS.forEach(function (l, i) {
    if (l.group !== lastGroup) {
      const g = document.createElement("div");
      g.className = "mini-label";
      g.textContent = l.group.toUpperCase();
      list.appendChild(g);
      lastGroup = l.group;
    }

    const st = lessonState(i);

    const btn = document.createElement("button");

    btn.type = "button";
    btn.className =
      "lesson-item" +
      (st.completed ? " done" : "");

    btn.innerHTML =
      "<div class='lesson-number'>L" +
      String(l.n).padStart(2, "0") +
      "</div>" +
      "<div>" +
      "<div class='lesson-name'>" +
      esc(l.title) +
      "</div>" +
      "<small class='lesson-meta'>" +
      esc(l.reference || "") +
      (st.completed ? " · 已完成" : "") +
      "</small>" +
      "</div>" +
      "<div class='lesson-status'>" +
      (st.completed ? "✓" : "→") +
      "</div>";

    btn.onclick = function () {
      openLesson(i);
    };

    list.appendChild(btn);
  });

  const completed = LESSONS.filter(function (_, i) {
    return lessonState(i).completed;
  }).length;

  const percent =
    Math.round(
      completed / LESSONS.length * 100
    );

  if ($("completedLessons")) {
    $("completedLessons").textContent = completed;
  }

  if ($("totalLessons")) {
    $("totalLessons").textContent =
      LESSONS.length;
  }

  if ($("courseProgress")) {
    $("courseProgress").textContent =
      percent + "%";
  }

  if ($("homeProgressBar")) {
    $("homeProgressBar").style.width =
      percent + "%";
  }
}

function renderReview() {
  const box = $("reviewList");

  if (!box) return;

  box.innerHTML = "";

  let has = false;

  LESSONS.forEach(function (l, i) {
    const st = lessonState(i);

    if (!st.completed) return;

    has = true;

    const r = document.createElement("div");

    r.className = "review-row";

    r.innerHTML =
      "<div>" +
      "<strong>L" +
      String(l.n).padStart(2, "0") +
      " · " +
      esc(l.title) +
      "</strong>" +
      "<div class='muted'>已完成</div>" +
      "</div>" +
      "<small>" +
      st.score +
      "%</small>";

    r.onclick = function () {
      openLesson(i);
    };

    box.appendChild(r);
  });

  if (!has) {
    box.innerHTML =
      '<div class="muted">还没有完成课程。</div>';
  }
}

function openLesson(index) {
  currentLessonIndex = index;
  currentStep = 0;
  testScore = 0;
  testAnswered = 0;
  speechRate = CONFIG.NORMAL_RATE;

  renderLessonHeader();
  renderStep();
  go("lesson");
}

function renderLessonHeader() {
  const l = LESSONS[currentLessonIndex];

  if ($("lessonEyebrow")) {
    $("lessonEyebrow").textContent =
      "LESSON " +
      String(l.n).padStart(2, "0");
  }

  if ($("lessonTitle")) {
    $("lessonTitle").textContent =
      l.title;
  }

  if ($("lessonReference")) {
    $("lessonReference").textContent =
      l.reference || "";
  }

  if ($("lessonObjective")) {
    $("lessonObjective").textContent =
      l.objective;
  }
}

function renderStep() {
  const l = LESSONS[currentLessonIndex];
  const box = $("lessonContent");

  if (!box) return;

  box.innerHTML = "";

  if (currentStep < l.sections.length) {
    const section = buildSection(
      l,
      currentStep
    );

    box.appendChild(section);

    $("lessonNextBtn").textContent =
      currentStep === l.sections.length - 1
        ? "进入测试 →"
        : "下一步 →";

    return;
  }

  renderTest();
}

function buildSection(l, step) {
  const s = document.createElement("div");
  s.className = "lesson-section";

  const title = document.createElement("h3");
  title.textContent = l.sections[step];
  s.appendChild(title);

  const intro = document.createElement("p");
  intro.className = "muted";
  intro.textContent =
    "先认识规则，再观察形式，最后回到原文。";
  s.appendChild(intro);

  if (l.kind === "alphabet") {
    renderAlphabet(s, step);
  } else if (l.kind === "syllable") {
    renderSyllable(s, step);
  } else {
    renderGrammar(s, l, step);
  }

  return s;
}

function renderAlphabet(s, step) {
  if (step === 0) {
    const g = document.createElement("div");
    g.className = "choice-grid";

    ALPHABET.forEach(function (a) {
      const b =
        document.createElement("button");

      b.type = "button";

      b.innerHTML =
        "<div class='word-greek greek'>" +
        a[1] +
        "</div>" +
        "<div class='word-gloss'>" +
        a[0] +
        " · " +
        a[2] +
        "</div>";

      b.onclick = function () {
        speakText(a[2]);
      };

      g.appendChild(b);
    });

    s.appendChild(g);

  } else if (step === 1) {

    VOWELS.forEach(function (v) {
      addWord(
        s,
        v[0],
        "基本元音",
        v[1]
      );
    });

  } else if (step === 2) {

    DIPHTHONGS.forEach(function (d) {
      addWord(
        s,
        d[0],
        "双母音",
        d[1]
      );
    });

  } else {

    addWord(
      s,
      "ἀπόστολος",
      "注意词首气号",
      "apostolos"
    );

    addNotice(
      s,
      "气号要作为词形识别的一部分来观察，不要只把它当作装饰。"
    );
  }
}

function renderSyllable(s, step) {
  if (step === 0) {

    [
      [";", "Greek question mark"],
      [".", "Period"],
      [",", "Comma"],
      [":", "Colon / raised dot"]
    ].forEach(function (x) {
      addWord(
        s,
        x[0],
        x[1],
        x[0]
      );
    });

  } else {

    [
      ["λόγος", "λό-γος"],
      ["θεός", "θε-ός"],
      ["ζωή", "ζω-ή"],
      ["ἄνθρωπος", "ἄν-θρω-πος"]
    ].forEach(function (x) {
      addWord(
        s,
        x[0],
        "音节",
        x[1]
      );
    });

  }
}

function renderGrammar(s, l, step) {

  const arr =
    COMMON_FORMS[l.kind] || [];

  if (step === 0) {

    addBox(
      s,
      "本课学习目标：" +
      l.objective
    );

    addNotice(
      s,
      "重点：形式不是装饰。词形本身携带语法信息。"
    );

  } else if (step === 1) {

    arr.forEach(function (x) {
      addWord(
        s,
        x[0],
        x[1],
        x[2]
      );
    });

  } else if (step === 2) {

    if (arr.length) {

      const table =
        document.createElement("table");

      table.className =
        "form-table";

      table.innerHTML =
        "<tr><th>形式</th><th>识别重点</th></tr>" +
        arr.map(function (x) {
          return (
            "<tr>" +
            "<td class='greek'>" +
            esc(x[0]) +
            "</td>" +
            "<td>" +
            esc(x[1]) +
            "</td>" +
            "</tr>"
          );
        }).join("");

      s.appendChild(table);

    }

  } else {

    addBible(s, l.n);

    addNotice(
      s,
      researchNotice(l.kind)
    );

  }
}

function researchNotice(kind) {

  const notes = {

    noun:
      "名词研究：先判断性、数、格，再问它在句子中的功能。",

    case:
      "格研究：不要把一个格机械地等同于单一中文意思，要结合上下文。",

    adjective:
      "形容词研究：找到它修饰或指向的名词，检查性、数、格。",

    third:
      "第三格变式研究：先寻找词干，再确认词尾与格。",

    pronoun:
      "代词研究：先识别形式，再追踪它所指向的对象。",

    autos:
      "αὐτός 研究：不要固定成一个中文译法，要结合形式和上下文。",

    demonstrative:
      "指示词研究：首先问它在文本中具体指向什么。",

    relative:
      "关系代名词研究：性、数与先行词相关；格取决于其在关系子句中的功能。",

    verb:
      "动词研究：人称、数、时态、语态、语气必须分别观察。",

    present:
      "现在式研究：先看时态字干、连接母音、人称字尾，再讨论观点与时间。",

    contract:
      "缩略动词研究：观察词干元音与词尾结合后的缩合。",

    mp:
      "关身／被动研究：形式相似时必须依上下文判断具体意义。",

    future:
      "未来式研究：先识别未来式形式，再结合上下文判断时间与观点。",

    stems:
      "动词字干研究：陌生形式需要回到词典和时态字形。",

    imperfect:
      "未完成式研究：观察往昔号、字干以及过去中的连续观点。",

    aorist2:
      "第二不定过去式研究：重点是第二词干，并避免把它简单等同为中文过去时。",

    aorist1:
      "第一不定过去式研究：观察往昔号、字干、σα以及相关字尾。",

    passive:
      "被动语态研究：先形态分析，再判断动作接受者与上下文。",

    perfect:
      "完成式研究：观察重复号和完成状态，避免把时态意义过度神学化。"

  };

  return (
    notes[kind] ||
    "先看形式，再看功能，最后回到上下文。"
  );
}

function addBox(s, text) {

  const d =
    document.createElement("div");

  d.className =
    "grammar-box";

  d.textContent =
    text;

  s.appendChild(d);
}

function addNotice(s, text) {

  const d =
    document.createElement("div");

  d.className =
    "notice-box";

  d.textContent =
    text;

  s.appendChild(d);
}

function addWord(
  parent,
  greek,
  detail,
  gloss
) {

  const c =
    document.createElement("div");

  c.className =
    "word-card";

  c.innerHTML =
    "<div class='word-card-main'>" +
    "<div>" +
    "<div class='word-greek greek'>" +
    esc(greek) +
    "</div>" +
    "<div class='word-gloss'>" +
    esc(gloss) +
    "</div>" +
    "</div>" +
    "<button type='button' class='speak-btn'>🔊</button>" +
    "</div>" +
    "<div class='word-detail'>" +
    esc(detail) +
    "</div>";

  c.querySelector("button").onclick =
    function (event) {
      event.stopPropagation();
      speakText(greek);
    };

  c.onclick =
    function () {
      speakText(greek);
    };

  parent.appendChild(c);
}

function addBible(s, num) {

  const b =
    BIBLE[num];

  if (!b) return;

  const d =
    document.createElement("div");

  d.className =
    "bible-box";

  d.innerHTML =
    "<div class='bible-reference'>" +
    esc(b[0]) +
    "</div>" +
    "<div class='bible-text greek'>" +
    esc(b[1]) +
    "</div>" +
    "<div class='muted'>" +
    esc(b[2]) +
    "</div>";

  d.onclick =
    function () {
      speakText(b[1]);
    };

  s.appendChild(d);
}

function renderTest() {

  const l =
    LESSONS[currentLessonIndex];

  const box =
    $("lessonContent");

  if (!box) return;

  box.innerHTML = "";

  testScore = 0;
  testAnswered = 0;

  const s =
    document.createElement("div");

  s.className =
    "lesson-section";

  s.innerHTML =
    "<h3>课程测试</h3>" +
    "<p class='muted'>" +
    "完成全部问题后结束本课。测试重点是识别与理解，不是猜答案。" +
    "</p>";

  const live =
    document.createElement("div");

  live.className =
    "exercise-score";

  live.id =
    "testLive";

  const test =
    getTest(l);

  live.textContent =
    "0 / " +
    test.length;

  s.appendChild(live);

  test.forEach(function (q, qi) {

    const b =
      document.createElement("div");

    b.style.marginTop =
      "17px";

    const t =
      document.createElement("strong");

    t.textContent =
      (qi + 1) +
      ". " +
      q[0];

    b.appendChild(t);

    const g =
      document.createElement("div");

    g.className =
      "choice-grid";

    q[1].forEach(function (op, oi) {

      const bt =
        document.createElement("button");

      bt.type =
        "button";

      bt.textContent =
        op;

      bt.onclick =
        function () {

          g.querySelectorAll("button")
            .forEach(function (x) {
              x.disabled = true;
            });

          testAnswered++;

          if (
            oi === q[2]
          ) {

            testScore++;

            bt.classList.add(
              "choice-correct"
            );

          } else {

            bt.classList.add(
              "choice-wrong"
            );

          }

          live.textContent =
            testScore +
            " / " +
            test.length;
        };

      g.appendChild(bt);

    });

    b.appendChild(g);
    s.appendChild(b);

  });

  const done =
    document.createElement("button");

  done.className =
    "primary wide";

  done.textContent =
    "完成本课";

  done.onclick =
    function () {

      if (
        testAnswered <
        test.length
      ) {

        alert(
          "请完成全部测试题。"
        );

        return;
      }

      completeLesson(
        testScore,
        test.length
      );

    };

  s.appendChild(done);

  box.appendChild(s);

  $("lessonNextBtn").textContent =
    "重新测试";

  $("lessonNextBtn").onclick =
    renderTest;
}

function getTest(l) {

  switch (l.n) {

    case 1:

      return [
        [
          "学习希腊文的直接目标是什么？",
          [
            "进入新约原文阅读",
            "只为背考试答案",
            "只学中文术语"
          ],
          0
        ],
        [
          "最重要的长期因素之一是什么？",
          [
            "持续纪律",
            "临时突击",
            "只听不读"
          ],
          0
        ]
      ];

    case 2:

      return [
        [
          "哪一种做法符合多感官学习？",
          [
            "看、读、听、写",
            "只看答案",
            "只背中文"
          ],
          0
        ],
        [
          "作业的核心价值是什么？",
          [
            "把规则带入圣经经文",
            "避免接触经文",
            "只做选择题"
          ],
          0
        ]
      ];

    case 3:

      return [
        [
          "希腊文有多少个字母？",
          ["24","26","22"],
          0
        ],
        [
          "下列哪个是元音？",
          ["η","θ","ψ"],
          0
        ],
        [
          "下列哪个是字母名称？",
          ["Alpha","λόγος","θεός"],
          0
        ]
      ];

    case 4:

      return [
        [
          "希腊文的问号是什么？",
          [";","?",":"],
          0
        ],
        [
          "λόγος 有几个基本音节？",
          ["2","1","3"],
          0
        ]
      ];

    case 5:

      return [
        [
          "名词的三个基本观察维度是什么？",
          [
            "性、数、格",
            "时态、语态、语气",
            "人称、时间、观点"
          ],
          0
        ],
        [
          "格主要帮助判断什么？",
          [
            "句中功能",
            "字母名称",
            "发音速度"
          ],
          0
        ]
      ];

    case 6:

      return [
        [
          "ὁ θεός 是什么格？",
          ["主格","受格","所有格"],
          0
        ],
        [
          "τὸν θεόν 是什么格？",
          ["受格","主格","间接受格"],
          0
        ]
      ];

    case 7:

      return [
        [
          "τοῦ θεοῦ 是什么格？",
          ["所有格","主格","受格"],
          0
        ],
        [
          "τῷ θεῷ 是什么格？",
          ["间接受格","主格","所有格"],
          0
        ]
      ];

    case 8:

      return [
        [
          "εἰμί 的基本意义是什么？",
          ["to be","to see","to hear"],
          0
        ],
        [
          "ἐν 常与哪一格搭配？",
          ["间接受格","主格","受格"],
          0
        ]
      ];

    case 9:

      return [
        [
          "形容词通常和相关名词在哪些方面一致？",
          [
            "性、数、格",
            "时态、语态、语气",
            "人称、时间、观点"
          ],
          0
        ],
        [
          "ἀγαθόν 是什么性？",
          ["中性","阳性","阴性"],
          0
        ]
      ];

    case 10:

      return [
        [
          "第三格变式最需要注意什么？",
          [
            "词干与字尾",
            "只有翻译",
            "只有重音"
          ],
          0
        ],
        [
          "φωτός 是什么？",
          [
            "φῶς 的所有格",
            "φῶς 的主格",
            "动词"
          ],
          0
        ]
      ];

    case 11:

      return [
        [
          "ἐγώ 是什么？",
          [
            "第一人称单数主格",
            "第二人称复数",
            "第三人称单数"
          ],
          0
        ],
        [
          "ὑμεῖς 表示什么？",
          ["you plural","I","we"],
          0
        ]
      ];

    case 12:

      return [
        [
          "αὐτόν 常表示什么？",
          ["him","his","they"],
          0
        ],
        [
          "理解 αὐτός 最重要的原则是什么？",
          [
            "结合形式与上下文",
            "只背一个中文",
            "忽略句法"
          ],
          0
        ]
      ];

    case 13:

      return [
        [
          "οὗτος 的核心功能是什么？",
          ["this","who","because"],
          0
        ],
        [
          "τοῦτο 是哪一种？",
          ["中性单数","阳性复数","阴性单数"],
          0
        ]
      ];

    case 14:

      return [
        [
          "关系代名词的格由什么决定？",
          [
            "它在关系子句中的功能",
            "中文译法",
            "章节号码"
          ],
          0
        ],
        [
          "ὅς 是什么？",
          [
            "阳性主格单数关系代名词",
            "动词",
            "介词"
          ],
          0
        ]
      ];

    case 15:

      return [
        [
          "动词至少要观察哪些核心类别？",
          [
            "时态、语态、语气、人称、数",
            "只有时间",
            "只有中文意义"
          ],
          0
        ],
        [
          "什么是时态字干？",
          [
            "特定时态动词的核心形式",
            "名词词尾",
            "标点符号"
          ],
          0
        ]
      ];

    case 16:

      return [
        [
          "现在式主动直说语气的基本结构是什么？",
          [
            "时态字干+连接母音+人称字尾",
            "字干+θῃ+副词",
            "冠词+名词"
          ],
          0
        ],
        [
          "λύομεν 是哪一种？",
          [
            "第一人称复数",
            "第二人称单数",
            "第三人称复数"
          ],
          0
        ]
      ];

    case 17:

      return [
        [
          "缩略动词发生了什么？",
          [
            "词干元音与词尾发生缩合",
            "名词变格",
            "代词消失"
          ],
          0
        ],
        [
          "ζητῶ 是什么？",
          [
            "ζητέω 的缩略形式",
            "未来式被动",
            "不定过去式"
          ],
          0
        ]
      ];

    case 18:

      return [
        [
          "现在式关身／被动语态常见字尾属于哪组？",
          [
            "-μαι, -σαι, -ται...",
            "-ω, -εις, -ει... only",
            "-σα, -σας, -σε only"
          ],
          0
        ],
        [
          "关身与被动如何判断？",
          [
            "看上下文",
            "看中文字体",
            "只看词长"
          ],
          0
        ]
      ];

    case 19:

      return [
        [
          "规则未来式常出现什么记号？",
          ["σ","θ","κ"],
          0
        ],
        [
          "λύσω 是什么？",
          [
            "未来主动1单",
            "现在主动1单",
            "不定过去式"
          ],
          0
        ]
      ];

    case 20:

      return [
        [
          "为什么要学习动词字根？",
          [
            "因为不同形式可能使用不同字干",
            "因为动词没有人称",
            "因为它取代冠词"
          ],
          0
        ],
        [
          "未来式字形最好从哪里确认？",
          [
            "词典的时态字形",
            "中文索引",
            "章节号"
          ],
          0
        ]
      ];

    case 21:

      return [
        [
          "未完成式常见特征是什么？",
          [
            "过去时间中的连续观点",
            "未来命令",
            "现在状态 only"
          ],
          0
        ],
        [
          "ἔλυον 包含什么？",
          [
            "往昔号+现在式字干+过去人称字尾体系",
            "未来σ+θ",
            "冠词+名词"
          ],
          0
        ]
      ];

    case 22:

      return [
        [
          "第二不定过去式的关键是什么？",
          ["第二词干","未来σ","冠词"],
          0
        ],
        [
          "ἔλαβον 来自哪个现在式？",
          ["λαμβάνω","λύω","γράφω"],
          0
        ]
      ];

    case 23:

      return [
        [
          "第一不定过去式常见什么记号？",
          ["σα","θη","μαι"],
          0
        ],
        [
          "ἔλυσα 是什么？",
          [
            "第一不定过去式主动1单",
            "现在主动1单",
            "未来主动1单"
          ],
          0
        ]
      ];

    case 24:

      return [
        [
          "不定过去式被动常见什么记号？",
          ["θη","σ","ομαι"],
          0
        ],
        [
          "被动语态首先表示什么？",
          [
            "主词接受动作",
            "主词总是发出动作",
            "主词没有功能"
          ],
          0
        ]
      ];

    case 25:

      return [
        [
          "完成式常见什么特征？",
          ["重复号","未来σ","冠词"],
          0
        ],
        [
          "完成式常强调什么？",
          [
            "过去动作及持续结果/状态",
            "只表示未来",
            "只表示命令"
          ],
          0
        ]
      ];

    default:

      return [
        [
          "本课是否完成？",
          ["是","否"],
          0
        ]
      ];
  }
}

function completeLesson(
  correct,
  total
) {

  const l =
    LESSONS[currentLessonIndex];

  const st =
    lessonState(currentLessonIndex);

  st.completed =
    true;

  st.score =
    Math.round(
      correct /
      total *
      100
    );

  st.completedAt =
    new Date().toISOString();

  save();

  renderHome();
  renderReview();

  $("lessonContent").innerHTML =
    "<div class='lesson-section'>" +
    "<div class='success'>" +
    "<strong>" +
    esc(l.title) +
    "</strong>" +
    "<br><br>" +
    "课程成绩：" +
    st.score +
    "%" +
    "<br><br>" +
    (
      st.score >= 80
        ? "基础掌握良好，可以继续。"
        : "建议复习后再次测试。"
    ) +
    "</div>" +
    "</div>";

  const n =
    $("lessonNextBtn");

  if (
    currentLessonIndex <
    LESSONS.length - 1
  ) {

    n.textContent =
      "下一课 →";

    n.onclick =
      function () {

        openLesson(
          currentLessonIndex + 1
        );

      };

  } else {

    n.textContent =
      "返回课程目录";

    n.onclick =
      function () {

        go("home");
        renderHome();

      };
  }
}

function nextStep() {

  const l =
    LESSONS[currentLessonIndex];

  if (
    currentStep <
    l.sections.length
  ) {

    currentStep++;

    renderStep();

  }
}

function previousLesson() {

  if (
    currentLessonIndex >
    0
  ) {

    openLesson(
      currentLessonIndex - 1
    );

  } else {

    go("home");

  }
}

function speakText(text) {

  if (
    !window.speechSynthesis
  ) {

    alert(
      "当前浏览器不支持语音朗读。"
    );

    return;
  }

  window.speechSynthesis.cancel();

  const u =
    new SpeechSynthesisUtterance(
      text
    );

  u.lang =
    CONFIG.LANGUAGE;

  u.rate =
    speechRate;

  u.pitch =
    0.95;

  u.volume =
    1;

  window.speechSynthesis.speak(
    u
  );
}

window.go =
  go;

window.openLesson =
  openLesson;

window.speakText =
  speakText;

document.addEventListener(
  "DOMContentLoaded",
  init
);
