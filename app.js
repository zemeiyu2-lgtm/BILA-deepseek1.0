/* GBRM V2.3.3-COMPACT
基线：V2.3.2
教材 → 练习 → 词汇闪卡 → 短原文 → 自学帮助 → 回顾
*/
const CFG={base:"https://raw.githubusercontent.com/morphgnt/sblgnt/master/",key:"GBRM_V23_STATE",lang:"el-GR",rate:.82},
BOOKS=[["Mt","马太福音","61-Mt-morphgnt.txt"],["Mk","马可福音","62-Mk-morphgnt.txt"],["Lk","路加福音","63-Lk-morphgnt.txt"],["Jn","约翰福音","64-Jn-morphgnt.txt"],["Ac","使徒行传","65-Ac-morphgnt.txt"],["Ro","罗马书","66-Ro-morphgnt.txt"],["1Co","哥林多前书","67-1Co-morphgnt.txt"],["2Co","哥林多后书","68-2Co-morphgnt.txt"],["Ga","加拉太书","69-Ga-morphgnt.txt"],["Eph","以弗所书","70-Eph-morphgnt.txt"],["Php","腓立比书","71-Php-morphgnt.txt"],["Col","歌罗西书","72-Col-morphgnt.txt"],["1Th","帖撒罗尼迦前书","73-1Th-morphgnt.txt"],["2Th","帖撒罗尼迦后书","74-2Th-morphgnt.txt"],["1Ti","提摩太前书","75-1Ti-morphgnt.txt"],["2Ti","提摩太后书","76-2Ti-morphgnt.txt"],["Tit","提多书","77-Tit-morphgnt.txt"],["Phm","腓利门书","78-Phm-morphgnt.txt"],["Heb","希伯来书","79-Heb-morphgnt.txt"],["Jas","雅各书","80-Jas-morphgnt.txt"],["1Pe","彼得前书","81-1Pe-morphgnt.txt"],["2Pe","彼得后书","82-2Pe-morphgnt.txt"],["1Jn","约翰一书","83-1Jn-morphgnt.txt"],["2Jn","约翰二书","84-2Jn-morphgnt.txt"],["3Jn","约翰三书","85-3Jn-morphgnt.txt"],["Jud","犹大书","86-Jud-morphgnt.txt"],["Re","启示录","87-Re-morphgnt.txt"]].map(x=>({id:x[0],name:x[1],file:x[2]})),
LESSONS=[{"n":1,"group":"第一部分 · 引言","title":"希腊语","kind":"history","objective":"认识希腊语的历史，以及它为何成为新约时代的重要语言。","content":"本课从希腊语的历史进入新约语境，帮助学生先知道自己为什么要学习这种语言。"},{"n":2,"group":"第一部分 · 引言","title":"学习希腊文","kind":"study","objective":"建立学习目标、熟记、时间、毅力与同伴学习的基本习惯。","content":"教材特别强调：学习希腊文不是为了锻炼智力，而是为了更明白并更清楚地传扬神的话语；同时要建立记忆与纪律。"},{"n":3,"group":"第一部分 · 引言","title":"字母与发音","kind":"alphabet","objective":"掌握希腊文字母、母音、双母音和气号的基本识别与发音。","content":"教材要求先掌握二十四个字母，再进入发音、母音、双母音与气号。"},{"n":4,"group":"第一部分 · 引言","title":"标点符号与音节","kind":"syllable","objective":"认识希腊文标点、重音符以及分音节的方法。","content":"本课让学生认识希腊文标点与音节划分，并提醒标点可能影响经文解释。"},{"n":5,"group":"第二部分 · 名词系统","title":"英文的名词简介","kind":"noun","objective":"先用英文文法建立格、数、性与格变式的概念。","content":"教材先用英文解释格、数、性与格变式，再进入希腊文名词系统。"},{"n":6,"group":"第二部分 · 名词系统","title":"主格与直接受格；定冠词","kind":"case","objective":"辨认第一、第二格变式，掌握主格、直接受格和定冠词。","content":"本课进入名词系统的核心训练：看词尾辨认格，并学习定冠词与名词的一致。"},{"n":7,"group":"第二部分 · 名词系统","title":"所有格与间接受格","kind":"case2","objective":"掌握所有格、间接受格，以及名词规则4、5、6。","content":"教材继续处理两个主要的格，并介绍关键词的概念。"},{"n":8,"group":"第二部分 · 名词系统","title":"介词与 εἰμί","kind":"preposition","objective":"掌握介词、介词受词、附属子句、εἰμί与述词主格。","content":"本课从介词进入句子关系，并继续处理 εἰμί 与述词主格。"},{"n":9,"group":"第二部分 · 名词系统","title":"形容词","kind":"adjective","objective":"认识形容词的形容用法、叙述用法和名词用法，以及一致与性。","content":"教材指出形容词在神学与释经上都很重要，并训练学生根据冠词、位置与一致关系判断用法。"},{"n":10,"group":"第二部分 · 名词系统","title":"第三格变式名词","kind":"third","objective":"掌握第三格变式及相关词干、词尾和塞音方块规则。","content":"本课进入第三格变式，并训练学生利用规则而不是死背大量变化表。"},{"n":11,"group":"第二部分 · 名词系统","title":"第一与第二人称代名词","kind":"pronoun","objective":"掌握第一、第二人称代名词，并继续观察格、数、人称。","content":"教材说明代名词的格由句中功能决定，人称与数由先行词决定。"},{"n":12,"group":"第二部分 · 名词系统","title":"αὐτός","kind":"autos","objective":"认识 αὐτός 的三种基本用法。","content":"教材把 αὐτός 当作已经学过的2-1-2形容词来处理，并在此基础上训练其三种用法。"},{"n":13,"group":"第二部分 · 名词系统","title":"指示代名词／形容词","kind":"demonstrative","objective":"学习“这个/那个”等指示词，并认识呼格。","content":"教材强调指示词既可作代名词，也可作形容词；本课同时介绍第五个格——呼格。"},{"n":14,"group":"第二部分 · 名词系统","title":"关系代名词","kind":"relative","objective":"掌握关系代名词及其与先行词、关系子句的关系。","content":"本课完成名词系统的重要代词部分，并进一步训练根据句中功能判断关系代名词的格。"},{"n":15,"group":"第三部分 · 直说语气动词系统","title":"动词简介","kind":"verb","objective":"建立人称、数、时态、时间、语态、语气和观点的框架。","content":"教材先用英文解释动词，再进入希腊文。学生暂时不必背复杂词形，而是先理解动词分析的方法。"},{"n":16,"group":"第三部分 · 直说语气动词系统","title":"现在式主动语态直说语气","kind":"present","objective":"掌握现在式主动直说语气以及今将主动人称字尾。","content":"教材把现在式拆成时态字干、连接母音和人称字尾，并让学生学习真正的人称字尾。"},{"n":17,"group":"第三部分 · 直说语气动词系统","title":"缩略动词","kind":"contract","objective":"认识 α、ε、ο 结尾字干的缩略及五大规则。","content":"教材强调先认识基本规则，再用这些规则理解缩略后的实际词形。"},{"n":18,"group":"第三部分 · 直说语气动词系统","title":"现在式关身／被动语态直说语气","kind":"mp","objective":"掌握现在式关身／被动语态的基本形式，并认识关身形主动意。","content":"教材暂时将所见到的关身形理解为主动意义，并把真正的关身语态留到后续深入处理。"},{"n":19,"group":"第三部分 · 直说语气动词系统","title":"未来式主动／关身语态直说语气","kind":"future","objective":"掌握未来式主动与关身语态的基本形式。","content":"教材说明未来式通常表达未来动作，并介绍 sigma 的时态特有记号及相应的人称字尾。"},{"n":20,"group":"第三部分 · 直说语气动词系统","title":"动词字根；未来式的其他字形","kind":"stems","objective":"区分字根、现在式字干和时态字干，并掌握流音动词未来式。","content":"教材强调学习字根可以减少死背例外的需要，并用流音动词说明未来式变化。"},{"n":21,"group":"第三部分 · 直说语气动词系统","title":"不完成式","kind":"imperfect","objective":"认识过去时间中的连续或重复动作，以及未完成式的构成。","content":"教材把未完成式和连续观点联系起来，并介绍往昔号、现在式字干、连接母音和往昔人称字尾。"},{"n":22,"group":"第三部分 · 直说语气动词系统","title":"第二不定过去式主动／关身语态直说语气","kind":"aorist2","objective":"掌握第二不定过去式的第二字干、构成与未界定观点。","content":"教材比较不定过去式与未完成式，特别强调不定过去式的未界定观点，并提醒不要过度解释时态。"},{"n":23,"group":"第三部分 · 直说语气动词系统","title":"第一不定过去式主动／关身语态直说语气","kind":"aorist1","objective":"掌握第一不定过去式主动／关身语态的基本词形。","content":"教材展示 ἔλυσα 与 ἐλυσάμην 等形式，并说明两类不定过去式意义相同但词形不同。"},{"n":24,"group":"第三部分 · 直说语气动词系统","title":"不定过去式与未来式被动语态直说语气","kind":"passive","objective":"掌握未来式被动与不定过去式被动的构成及主动接受动作的意义。","content":"教材把被动语态形式与时态特有记号结合起来，并强调主词接受动作。"},{"n":25,"group":"第三部分 · 直说语气动词系统","title":"现在完成式直说语气","kind":"perfect","objective":"认识现在完成式的构成，以及过去动作产生持续到现在的结果。","content":"教材用重复号、字干、κα 与人称字尾说明现在完成式，并强调完成式所表达的结果持续性。"}],
VOCAB=[ [4,"ἀγγελος","使者/天使",175],[4,"ἀμήν","实实在在地/阿们",129],[4,"ἄνθρωπος","人/人类",550],[4,"ἀπόστολος","使徒/报信者",80],[4,"Γαλιλαία","加利利",61],[4,"γραφή","著作/圣经",50],[4,"δόξα","荣耀/威严",166],[4,"ἐγώ","我",1802],[4,"ἔσχατος","最后的",52],[4,"ζωή","生命",135],[4,"θεός","神/神明",1317],[4,"καί","和/也",9161],[4,"καρδία","心/内在自己",156],[4,"κόσμος","世界/世人",186],[4,"λόγος","言语/道",330],[4,"πνεῦμα","灵/圣灵",379],[4,"προφήτης","先知",144],[4,"σάββατον","安息日/一周",68],[4,"φωνή","声音/声响",139],[4,"Χριστός","基督/弥赛亚",529],[4,"Ἀβραάμ","亚伯拉罕",73],[4,"Δαυίδ","大卫",59],[4,"Παῦλος","保罗",158],[4,"Πέτρος","彼得",156],[4,"Πιλᾶτος","彼拉多",55],[4,"Σίμων","西门",75],[6,"ἀγάπη","爱",116],[6,"ἄλλος","别的/另一个",155],[6,"αὐτός","他/她/它/自己",5597],[6,"βασιλεία","国度",162],[6,"δέ","但是/而",2792],[6,"ἐν","在……里面",2752],[6,"ἔργον","工作/行为",169],[6,"καιρός","时间/季节",85],[6,"νῦν","现在",147],[6,"ὁ","这",19870],[6,"ὅτι","因为/那",1296],[6,"οὐ","不",1606],[6,"ὥρα","小时/时候",106],[7,"οὐρανός","天/天空",273],[7,"οὗτος","这个/这些",1388],[7,"σύ","你",1067],[7,"υἱός","儿子/子孙",377],[7,"ὥστε","所以/以致",83],[8,"ἀλλά","但是/然而",638],[8,"ἀπό","从/离开",646],[8,"διά","藉着/因为",667],[8,"εἰμί","我是/存在",2460],[8,"ἐκ","从/出自",914],[8,"ἡμέρα","日/白天",389],[8,"ἦν","他/她/它是(过去)",0],[8,"θάλασσα","海/湖",91],[8,"θάνατος","死亡",120],[8,"ἵνα","为了/要",663],[8,"Ἰωάννης","约翰",135],[8,"λέγω","我说/告诉",2354],[8,"μετά","与……一起/在……之后",469],[8,"οἰκία","屋子/家庭",93],[8,"οἶκος","屋子/家庭",114],[8,"ὄχλος","人群/大众",175],[8,"παρά","从/在……旁边/沿着",194],[8,"παραβολή","比喻",50],[8,"πρός","向/朝着/与……一起",700],[8,"ὑπό","被/在……底下",220],[9,"ἀγαθός","好的/有用的",102],[9,"ἀγαπητός","亲爱的",61],[9,"αἰώνιος","永远的",71],[9,"ἀλλήλων","彼此",100],[9,"ἀπεκρίθη","回答",0],[9,"δοῦλος","奴隶/仆人",124],[9,"ἐάν","如果/当",351],[9,"ἐμός","我的",76],[9,"ἐντολή","诫命/命令",67],[9,"καθώς","如/正如",182],[9,"κακός","坏的/恶的",50],[9,"μου","我的",0],[9,"νεκρός","死的/尸体",128],[9,"πιστός","忠心的/有信心的",67],[9,"πονηρός","邪恶的/坏的",78],[9,"πρῶτος","第一的/前面的",155],[9,"τρίτος","第三的",56],[10,"ἅγιος","圣洁的/圣徒",233],[10,"εἰ","如果",502],[10,"εἰ μή","除非/如果不",0],[10,"εἷς","一",344],[10,"ἤδη","现在/已经",61],[10,"ὄνομα","名字/名声",231],[10,"οὐδείς","没有一个/没有任何",234],[10,"πᾶς","每一个/所有的",1244],[10,"περί","关于/围绕",333],[10,"σάρξ","肉体/身体",147],[10,"σύν","与……一起",128],[10,"σῶμα","身体",142],[10,"τέκνον","儿女/子孙",99],[10,"τίς","谁?/什么?",556],[10,"τις","某人/任何人",525],[11,"ἀδελφός","弟兄",343],[11,"ἄν","（语助词）",166],[11,"ἀνήρ","男人/丈夫",216],[11,"ἐκκλησία","教会/聚会",114],[11,"ἐλπίς","盼望/期盼",53],[11,"ἔξω","没有/在外面",63],[11,"ἐπί","在……上/基于/向着",890],[11,"ἡμεῖς","我们",864],[11,"θέλημα","旨意/欲望",62],[11,"ἴδε","看哪",29],[11,"ἰδού","看哪",200],[11,"καλός","美丽的/好的",100],[11,"μήτηρ","母亲",83],[11,"οὐδέ","而不/甚至不",143],[11,"πατήρ","父亲",413],[11,"πίστις","信心/信仰",243],[11,"ὕδωρ","水",76],[11,"ὑμεῖς","你们",1840],[11,"φῶς","光",73],[11,"χάρις","恩典/宠爱",155],[11,"ὧδε","在这里",61],[12,"αἰών","世代/永恒",122],[12,"διδάσκαλος","老师",59],[12,"εὐθύς","立刻",51],[12,"ἕως","直到",146],[12,"μαθητής","门徒",261],[12,"μέν","一方面/确实",179],[12,"μηδείς","没有一个人/一件事物",90],[12,"μόνος","唯独/只有",114],[12,"ὅπως","如何/以致/为要",53],[13,"γυνή","女人/妻子",215],[13,"δικαιοσύνη","公义",92],[13,"δώδεκα","十二",75],[13,"ἑαυτοῦ","他自己/她自己/它自己",319],[13,"ἐκεῖνος","那个/那些",265],[13,"ἤ","或/比",343],[13,"κἀγώ","而我/但我",84],[13,"μακάριος","有福的/快乐的",50],[13,"μέγας","大的/伟大的",243],[13,"πολύς","许多的/多的",365],[13,"σήμερον","今天",41],[13,"τηρέω","我保守/护卫/遵守",70],[14,"ἀλήθεια","真理",109],[14,"εἰρήνη","平安",92],[14,"ἐνώπιον","在……前",94],[14,"ἐπαγγελία","应许",52],[14,"ἑπτά","七",88],[14,"θρόνος","宝座",62],[14,"Ἰερουσαλήμ","耶路撒冷",77],[14,"κατά","向下/根据",473],[14,"κεφαλή","头",75],[14,"ὁδός","道路/行为",101],[14,"ὅς","谁/哪一个",1411],[14,"ὅτε","当……时",103],[14,"πλοῖον","船/小船",68],[14,"ῥῆμα","话/言论",68],[14,"οὕτως","而/如此",215],[14,"χείρ","手/臂",177],[14,"ψυχή","魂/生命/自己",103],[16,"ἀκούω","我听见/学习",428],[16,"βλέπω","我看见/注视",133],[16,"ἔχω","我有/拿着",708],[16,"λύω","我解开/毁坏",42],[16,"νόμος","律法/原则",194],[16,"ὅπου","在……地方",82],[16,"πιστεύω","我相信/信任",241],[16,"πρόσωπον","脸/外貌",76],[16,"τότε","那时/然后",160],[16,"τυφλός","瞎眼的",50],[16,"χαρά","喜乐/愉快",59],[17,"ἀγαπάω","我爱/珍爱",143],[17,"δαιμόνιον","鬼",63],[17,"ζητέω","我寻求/渴望",117],[17,"καλέω","我召/命名/邀请",148],[17,"λαλέω","我说/讲",296],[17,"οἶδα","我知道/明白",318],[17,"ὅταν","每当/当……时",123],[17,"μείζων","更大的/更多的",55],[17,"πληρόω","我充满/完成/应验",86],[17,"ποιέω","我做/使",568],[18,"ἀποκρίνομαι","我回答",231],[18,"δεῖ","是必须的",101],[18,"δύναμαι","我能/有能力",210],[18,"ἔρχομαι","我来/去",634],[18,"νύξ","夜晚",61],[18,"ὅστις","凡……的",144],[18,"πορεύομαι","我去/着手/生活",153],[18,"συνάγω","我聚集/邀请",59],[18,"τόπος","地方/地点",94],[18,"ὡς","如/像/当/约",504],[19,"βασιλεύς","王",115],[19,"γεννάω","我生/产生",97],[19,"ζάω","我活",140],[19,"Ἰουδαία","犹太",43],[19,"Ἰουδαῖος","犹太的/犹太人",195],[19,"Ἰσραήλ","以色列",68],[19,"καρπός","果子/庄稼/结果",66],[19,"ὅλος","整个/完整的",109],[19,"προσκυνέω","我敬拜",60],[20,"ἀποθνῄσκω","我死",111],[20,"ἄρτος","面包/食物",97],[20,"βάλλω","我扔/投",122],[20,"γινώσκω","我知道/认识",222],[20,"ἐγείρω","我唤醒/举起/使复活",144],[20,"ἐσθίω","我吃",158],[20,"εὐαγγέλιον","福音/好消息",76],[20,"εὐαγγελίζω","我传福音",55],[20,"εὑρίσκω","我找到",176],[20,"λαμβάνω","我拿/接受/娶",258],[20,"μένω","我留下/居住",118],[20,"ὁράω","我看见",454],[20,"παραλαμβάνω","我接受/带走",49],[20,"πίνω","我喝",73],[20,"φέρω","我带/背负/结出",67],[22,"ἀποστέλλω","我差遣",132],[22,"βαίνω","我去",60],[22,"γίνομαι","我成为/发生",678],[22,"δίδωμι","我给",416],[22,"φεύγω","我逃跑",29] ].map(x=>({lesson:x[0],word:x[1],gloss:x[2],frequency:x[3]}));

const state=loadState();
let li=safe(state.currentLesson),step=0,ret="lesson",review=[],ri=0;
const corpus={books:{},tokens:[],verses:{},lemmas:{},loading:{}};
const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const norm=v=>String(v??"").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ς/g,"σ").toLowerCase();
const safe=v=>{v=Number(v);return Number.isFinite(v)?Math.max(0,Math.min(LESSONS.length-1,Math.floor(v))):0};
const LState=i=>{const k="L"+LESSONS[safe(i)].n;return state.lessons[k]||(state.lessons[k]={completed:false,content:false,practice:false,vocabulary:false,corpus:false,review:false,attempts:0,correct:0,corpusReviewed:0})};
const VState=w=>state.vocab[w]||(state.vocab[w]={seen:0,remembered:0,wrong:0,lastReviewed:null});

function loadState(){
  try{
    const s=JSON.parse(localStorage.getItem(CFG.key)||"null");
    return s&&typeof s==="object"
      ? {currentLesson:safe(s.currentLesson),lessons:s.lessons||{},vocab:s.vocab||{}}
      : {currentLesson:0,lessons:{},vocab:{}};
  }catch(e){
    return {currentLesson:0,lessons:{},vocab:{}};
  }
}

function save(){
  try{
    localStorage.setItem(CFG.key,JSON.stringify(state));
  }catch(e){}
}

function go(id){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  const e=$(id);
  if(e)e.classList.add("active");
  scrollTo(0,0);
}

function home(){
  let c=0;
  LESSONS.forEach((_,i)=>LState(i).completed&&c++);
  const p=Math.round(c/LESSONS.length*100);

  if($("completedCount"))$("completedCount").textContent=c;
  if($("currentLessonDisplay"))$("currentLessonDisplay").textContent="L"+String(li+1).padStart(2,"0");
  if($("coursePercent"))$("coursePercent").textContent=p+"%";
  if($("courseProgress"))$("courseProgress").style.width=p+"%";

  lessonList();
}

function lessonList(){
  const b=$("lessonList");
  if(!b)return;

  b.innerHTML="";
  let g="";

  LESSONS.forEach((l,i)=>{
    if(g!==l.group){
      const h=document.createElement("div");
      h.className="lesson-group";
      h.textContent=l.group;
      b.appendChild(h);
      g=l.group;
    }

    const s=LState(i);
    const q=document.createElement("button");

    q.type="button";
    q.className="lesson-item"+(i===li?" current":"")+(s.completed?" completed":"");

    q.innerHTML=
      `<div class="lesson-index">L${String(l.n).padStart(2,"0")}</div>`+
      `<div>`+
      `<div class="lesson-title">${esc(l.title)}</div>`+
      `<small class="lesson-meta">${s.completed?"✓ 已完成":"进入学习"}</small>`+
      `</div>`+
      `<div class="lesson-mark">${s.completed?"✓":"→"}</div>`;

    q.onclick=()=>openLesson(i);

    b.appendChild(q);
  });
}

function openLesson(i){
  li=safe(i);
  step=0;
  state.currentLesson=li;
  save();
  renderLesson();
  go("lesson");
}

function renderLesson(){
  const l=LESSONS[li];
  if(!l)return;

  if($("lessonLabel"))$("lessonLabel").textContent="LESSON "+String(l.n).padStart(2,"0");
  if($("lessonTitle"))$("lessonTitle").textContent=l.title;

  if($("lessonHeader")){
    $("lessonHeader").innerHTML=
      `<div class="lesson-number">L${String(l.n).padStart(2,"0")}</div>`+
      `<div class="lesson-name">${esc(l.title)}</div>`+
      `<div class="lesson-objective">${esc(l.objective)}</div>`;
  }

  renderStep();
}

function renderStep(){
  const a=$("lessonArea");
  const l=LESSONS[li];
  const s=LState(li);

  if(!a)return;

  a.innerHTML="";

  if(step===0)textbook(a,l,s);
  else if(step===1)practice(a,l,s);
  else if(step===2)vocabLesson(a,l,s);
  else if(step===3)corpusGate(a,l,s);
  else reviewStep(a,l,s);

  if($("lessonStepText"))
    $("lessonStepText").textContent=`当前步骤 ${step+1} / 5`;

  if($("lessonStepProgress"))
    $("lessonStepProgress").style.width=(step/4*100)+"%";

  if($("lessonPrevious"))
    $("lessonPrevious").disabled=!step;

  if($("lessonNext"))
    $("lessonNext").textContent=[
      "进入练习 →",
      "进入词汇 →",
      "进入原文 →",
      "开始原文训练",
      "完成本课 →"
    ][step];
}

function textbook(a,l,s){
  a.innerHTML=
    `<div class="lesson-section">`+
      `<h3>教材</h3>`+
      `<div class="lesson-content">${esc(l.content)}</div>`+
      `<div class="training-line"><strong>今天：</strong>${esc(l.objective)}</div>`+
    `</div>`;

  s.content=true;
  save();
}

function practice(a,l,s){
  const d={
    history:[
      "为什么学习新约希腊文？",
      ["更准确阅读经文","只记规则","只为考试"]
    ],
    study:[
      "学习希腊文最需要什么？",
      ["持续、重复和练习","只看教材","一次全部记住"]
    ],
    alphabet:[
      "希腊文有多少个字母？",
      ["24","26","22"]
    ],
    syllable:[
      "希腊文问号是什么符号？",
      [";","?",":"]
    ],
    noun:[
      "名词首先观察什么？",
      ["格、数、性","时态、语态","只有中文"]
    ],
    case:[
      "τὸν θεόν 中 θεόν 是什么格？",
      ["受格","主格","所有格"]
    ],
    case2:[
      "θεοῦ 最基本是哪一个格？",
      ["所有格","主格","受格"]
    ],
    preposition:[
      "介词首先和什么一起看？",
      ["它的受词","下一课","词频"]
    ],
    adjective:[
      "形容词要和名词观察什么？",
      ["性、数、格","只有词义","只有长度"]
    ],
    third:[
      "第三格变式先看什么？",
      ["词干和词尾","中文翻译","词频"]
    ],
    pronoun:[
      "ἐγώ 的基本意义？",
      ["我","你","我们"]
    ],
    autos:[
      "αὐτός 为什么要看上下文？",
      ["功能可能不同","它没有意义","它不是词"]
    ],
    demonstrative:[
      "指示词首先找什么？",
      ["它指向什么","词频","页码"]
    ],
    relative:[
      "关系代名词首先观察什么？",
      ["它连接什么信息","中文长度","词频"]
    ],
    verb:[
      "遇到动词先做什么？",
      ["观察形式","立刻解释","只翻译"]
    ],
    present:[
      "现在式主动直说观察什么？",
      ["时态、语态、语气、人称、数","只有时态","只有中文"]
    ],
    contract:[
      "缩略动词最重要的动作？",
      ["联系词典形与实际词形","死背所有变化","只记中文"]
    ],
    mp:[
      "关身／被动形式最终要结合什么？",
      ["上下文","词频","章节号"]
    ],
    future:[
      "未来式先观察什么？",
      ["形式特征","中文长度","词频"]
    ],
    stems:[
      "为什么学习字根？",
      ["帮助识别不同词形","所有词不变化","只用于名词"]
    ],
    imperfect:[
      "未完成式帮助观察什么？",
      ["过去中的持续或重复","只有未来","只有身份"]
    ],
    aorist2:[
      "第二不定过去式要注意什么？",
      ["第二字干","定冠词","翻译"]
    ],
    aorist1:[
      "第一不定过去式先观察什么？",
      ["形式特征","词频","长度"]
    ],
    passive:[
      "被动语态重点看什么？",
      ["谁接受动作","谁总是发出动作","只有时间"]
    ],
    perfect:[
      "完成式重点观察什么？",
      ["过去动作与现在结果的联系","只有未来","只有过去"]
    ]
  }[l.kind]||[];

  a.innerHTML=
    `<div class="lesson-section">`+
      `<h3>练习</h3>`+
      `<div class="practice-card">`+
        `<div class="practice-question">${esc(d[0]||"今天最重要的知识是什么？")}</div>`+
        `<div id="practiceOptions" class="practice-options"></div>`+
        `<div id="practiceFeedback"></div>`+
      `</div>`+
    `</div>`;

  (d[1]||["继续学习"]).forEach((x,i)=>{
    const b=document.createElement("button");
    b.textContent=x;

    b.onclick=()=>{
      s.attempts++;

      if(i===0){
        s.correct++;
        s.practice=true;

        document
          .querySelectorAll("#practiceOptions button")
          .forEach(z=>z.disabled=true);

        $("practiceFeedback").innerHTML=
          "<div class='success'>✓ 正确。</div>";

        save();

        setTimeout(()=>{
          step=2;
          renderStep();
        },250);

      }else{

        b.classList.add("wrong");

        $("practiceFeedback").innerHTML=
          "<div class='notice-box'>再看一次教材，然后重新尝试。</div>";

      }
    };

    $("practiceOptions").appendChild(b);
  });
}

function vocabLesson(a,l,s){
  const list=VOCAB.filter(x=>x.lesson===l.n);

  a.innerHTML=
    `<div class="lesson-section">`+
      `<h3>本课词汇</h3>`+
      `<p class="muted">先认识，再用闪卡主动回忆。</p>`+
      `<div id="lessonVocabGrid" class="vocab-grid"></div>`+
    `</div>`;

  const g=$("lessonVocabGrid");

  if(!list.length){

    g.innerHTML=
      "<div class='notice-box'>本课暂未接入独立词库。</div>";

  }else{

    list.forEach(x=>{
      const c=document.createElement("div");
      const v=VState(x.word);

      c.className="vocab-card";

      c.innerHTML=
        `<div class="vocab-header">`+
          `<div class="vocab-word">${esc(x.word)}</div>`+
          `<button class="vocab-speak">🔊</button>`+
        `</div>`+
        `<div class="vocab-gloss">${esc(x.gloss)}</div>`+
        `<div class="vocab-actions"><button class="vocab-memory">记住了</button></div>`+
        `<span class="vocab-status">${v.remembered?"学习中":"第一次见"}</span>`;

      c.querySelector(".vocab-speak").onclick=()=>speak(x.word);

      c.querySelector(".vocab-memory").onclick=()=>{
        v.seen++;
        v.remembered++;
        v.lastReviewed=new Date().toISOString();

        c.querySelector(".vocab-status").textContent=
          v.remembered>=4?"比较稳定":"学习中";

        save();
      };

      g.appendChild(c);
    });
  }

  s.vocabulary=true;
  save();
}

function startVocabularyReview(){
  const done=LESSONS
    .filter((_,i)=>LState(i).completed)
    .map(x=>x.n);

  const src=done.length
    ? VOCAB.filter(x=>done.includes(x.lesson))
    : VOCAB.filter(x=>x.lesson===LESSONS[li].n);

  review=src
    .slice()
    .sort(
      (a,b)=>
        (VState(a.word).remembered-VState(a.word).wrong)-
        (VState(b.word).remembered-VState(b.word).wrong)
    )
    .slice(0,12);

  if(!review.length)
    return alert("当前还没有可复习词汇。");

  ri=0;
  go("vocabReview");
  flash();
}

function flash(){
  const c=$("vocabReviewCounter");
  const a=$("vocabReviewArea");

  if(!c||!a)return;

  if(ri>=review.length){

    c.textContent="复习完成";

    a.innerHTML=
      "<div class='success'>"+
        "<strong>✓ 今天复习完成</strong>"+
        "<br><br>"+
        "不熟的词会再次出现。"+
      "</div>";

    return;
  }

  const x=review[ri];

  c.textContent=
    `第 ${ri+1} / ${review.length}`;

  a.innerHTML=
    `<div class="flashcard">`+
      `<div class="flashcard-word">${esc(x.word)}</div>`+
      `<div class="flashcard-hint">先自己想一想，再翻卡。</div>`+
      `<button id="flashReveal" class="primary wide">显示答案</button>`+
    `</div>`;

  $("flashReveal").onclick=
    ()=>answer(x);
}

function answer(x){
  const a=$("vocabReviewArea");

  a.innerHTML=
    `<div class="flashcard">`+
      `<div class="flashcard-word">${esc(x.word)}</div>`+
      `<div class="flashcard-answer">${esc(x.gloss)}</div>`+
      `<button id="flashSpeak" class="secondary wide">🔊 再听一次</button>`+
      `<div class="flashcard-actions">`+
        `<button id="flashNotSure" class="secondary">还不熟</button>`+
        `<button id="flashKnow" class="primary">记住了</button>`+
      `</div>`+
    `</div>`;

  $("flashSpeak").onclick=
    ()=>speak(x.word);

  $("flashNotSure").onclick=
    ()=>rate(x,false);

  $("flashKnow").onclick=
    ()=>rate(x,true);
}

function rate(x,ok){
  const v=VState(x.word);

  v.seen++;

  ok
    ? v.remembered++
    : v.wrong++;

  v.lastReviewed=
    new Date().toISOString();

  save();

  ri++;
  flash();
}


/* =========================================================
原文训练
========================================================= */

const EX={
  6:["Jn",1,1,"θεός"],
  7:["Jn",1,6,"θεός"],
  8:["Jn",1,6,"παρά"],
  9:["Mt",12,35,"ἀγαθός"],
  10:["Jn",1,14,"σάρξ"],
  11:["Jn",1,23,"ἐγώ"],
  12:["Mt",1,23,"αὐτός"],
  13:["Jn",1,7,"οὗτος"],
  14:["Jn",1,30,"ὅς"],
  15:["Jn",1,5,"φαίνω"],
  16:["Jn",1,5,"φαίνω"],
  17:["1Th",1,2,"εὐχαριστέω"],
  18:["Jn",12,23,"ἀποκρίνομαι"],
  19:["Lk",15,18,"πορεύομαι"],
  20:["Jn",1,15,"γίνομαι"],
  21:["Jn",1,1,"εἰμί"],
  22:["Jn",1,14,"γίνομαι"],
  23:["Mt",3,15,"ποιέω"],
  24:["Ro",6,3,"βαπτίζω"],
  25:["Jn",3,18,"κρίνω"]
};

function corpusGate(a,l,s){

  if(l.n<4){

    s.corpus=true;
    save();

    a.innerHTML=
      "<div class='lesson-section'>"+
        "<h3>完成</h3>"+
        "<p class='muted'>这一课以教材学习为主。</p>"+
      "</div>";

    return;
  }

  a.innerHTML=
    "<div class='lesson-section'>"+
      "<h3>真实新约</h3>"+
      "<p class='muted'>把今天学的内容放进一小段真实经文。</p>"+
      "<button id='launchCorpus' class='primary wide'>进入原文 →</button>"+
    "</div>";

  $("launchCorpus").onclick=
    startCorpus;
}

async function startCorpus(){

  go("corpus");

  const a=$("corpusArea");

  if(a)
    a.innerHTML=
      "<div class='card'>"+
        "<h3>正在读取真实新约</h3>"+
        "<p class='muted'>请稍候……</p>"+
      "</div>";

  const e=EX[LESSONS[li].n];

  if(!e)
    return finishCorpus();

  const ok=
    await loadBook(e[0]);

  if(!ok){

    a.innerHTML=
      "<div class='notice-box'>"+
        "<strong>原文暂时无法读取。</strong>"+
        "<button id='retryCorpus' class='secondary wide'>重新读取</button>"+
        "<button id='backCorpus' class='secondary wide'>返回本课</button>"+
      "</div>";

    $("retryCorpus").onclick=
      startCorpus;

    $("backCorpus").onclick=
      returnCorpus;

    return;
  }

  renderCorpus(e);
}

function renderCorpus(e){

  const a=$("corpusArea");

  const v=
    corpus.verses[
      e[0]+"-"+e[1]+"-"+e[2]
    ]||[];

  if(!v.length){

    a.innerHTML=
      "<div class='notice-box'>"+
        "这一条例文暂时没有成功载入。"+
        "<button id='backCorpus' class='secondary wide'>返回本课</button>"+
      "</div>";

    $("backCorpus").onclick=
      returnCorpus;

    return;
  }

  const t=
    v.find(
      x=>norm(x.lemma)===norm(e[3])
    )||v[0];

  const i=
    Math.max(
      0,
      v.indexOf(t)
    );

  const short=
    v.slice(
      Math.max(0,i-3),
      Math.min(v.length,i+4)
    );

  a.innerHTML=
    `<div class="corpus-card">`+
      `<div class="corpus-reference">${esc(v[0].reference)}</div>`+
      `<div id="corpusGreek" class="corpus-greek"></div>`+
      `<div class="corpus-context-note">目标词附近的短语</div>`+
      `<div id="corpusTokenDetail"></div>`+
    `</div>`+

    `<div class="notice-box">`+
      `<strong>现在做：</strong>`+
      `先看词形，再想它在句中的作用。`+
      `<button id="hintBtn" class="secondary wide">需要提示</button>`+

      `<div id="hintBox" class="training-line" style="display:none">`+
        `先看目标词的形式，再决定怎样分析。`+
        `<button id="explainBtn" class="secondary wide">还是不明白？</button>`+
      `</div>`+

      `<div id="explainBox" class="training-line" style="display:none">`+
        `${esc(t.lemma+" 是词典形；先掌握本课要求。")}`+
      `</div>`+
    `</div>`+

    `<button id="finishCorpus" class="primary wide">完成原文训练</button>`;

  renderTokens(
    short,
    t
  );

  $("hintBtn").onclick=
    ()=>$("hintBox").style.display="block";

  $("explainBtn").onclick=
    ()=>$("explainBox").style.display="block";

  $("finishCorpus").onclick=
    finishCorpus;
}

function renderTokens(ts,sel){

  const b=$("corpusGreek");

  if(!b)return;

  b.innerHTML="";

  ts.forEach(t=>{

    const s=
      document.createElement(
        "span"
      );

    s.className=
      "corpus-token"+
      (
        t.wordIndex===
        sel.wordIndex
          ? " active"
          : ""
      );

    s.textContent=
      t.rawText;

    s.onclick=()=>{

      b
        .querySelectorAll(
          ".corpus-token"
        )
        .forEach(
          x=>x.classList.remove(
            "active"
          )
        );

      s.classList.add(
        "active"
      );

      tokenDetail(
        t
      );
    };

    b.appendChild(
      s
    );

    b.appendChild(
      document.createTextNode(
        " "
      )
    );
  });

  tokenDetail(
    sel
  );
}

function tokenDetail(t){

  const b=
    $("corpusTokenDetail");

  if(!b)return;

  b.innerHTML=
    `<div class="token-detail-word">${esc(t.rawText)}</div>`+
    line("词典形",t.lemma)+
    line("词性",pos(t.pos))+
    line(
      "形态",
      [
        t.morph.tense,
        t.morph.voice,
        t.morph.mood,
        t.morph.person,
        t.morph.number,
        t.morph.case,
        t.morph.gender
      ]
      .filter(Boolean)
      .join(" · ")
    );
}

function line(a,b){

  return b
    ? `<div class="token-line">`+
      `<span class="token-label">${esc(a)}</span>`+
      `<span class="token-value">${esc(b)}</span>`+
      `</div>`
    : "";
}

function pos(c){

  return (
    {
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
    }
    [c]
  )||c;
}


/* =========================================================
MorphGNT
========================================================= */

function parse(text,b){

  const o=[];
  const n={};

  String(
    text||""
  )
  .split(
    /\r?\n/
  )
  .forEach(
    line=>{

      const p=
        line
          .trim()
          .split(
            /\s+/
          );

      if(
        p.length<7 ||
        !/^[0-9]{6}$/.test(
          p[0]
        )
      )return;

      const ch=
        +p[0].slice(
          2,
          4
        );

      const ve=
        +p[0].slice(
          4,
          6
        );

      const k=
        b.id+
        "-"+
        ch+
        "-"+
        ve;

      n[k]=
        (n[k]||0)+1;

      o.push({

        bookId:b.id,

        bookName:b.name,

        chapter:ch,

        verse:ve,

        wordIndex:n[k],

        verseKey:k,

        reference:
          b.name+
          " "+
          ch+
          ":"+
          ve,

        pos:p[1],

        parsing:p[2],

        rawText:p[3],

        word:p[4],

        normalizedWord:p[5],

        lemma:
          p
            .slice(6)
            .join(" "),

        morph:
          decode(
            p[2]
          )

      });

    }
  );

  return o;
}


function decode(c){

  c=
    String(
      c||""
    )
    .padEnd(
      8,
      "-"
    );

  return {

    person:
      (
        {
          "1":"第一人称",
          "2":"第二人称",
          "3":"第三人称"
        }
      )[c[0]]||"",

    tense:
      (
        {
          P:"现在式",
          I:"未完成式",
          F:"未来式",
          A:"不定过去式",
          X:"完成式",
          Y:"过去完成式"
        }
      )[c[1]]||"",

    voice:
      (
        {
          A:"主动",
          M:"关身",
          P:"被动"
        }
      )[c[2]]||"",

    mood:
      (
        {
          I:"直说",
          D:"命令",
          S:"虚拟",
          O:"愿望",
          N:"不定词",
          P:"分词"
        }
      )[c[3]]||"",

    case:
      (
        {
          N:"主格",
          G:"所有格",
          D:"间接受格",
          A:"受格",
          V:"呼格"
        }
      )[c[4]]||"",

    number:
      (
        {
          S:"单数",
          P:"复数"
        }
      )[c[5]]||"",

    gender:
      (
        {
          M:"阳性",
          F:"阴性",
          N:"中性"
        }
      )[c[6]]||""
  };
}


async function loadBook(id){

  if(
    corpus.books[id]
  )return true;

  if(
    corpus.loading[id]
  )return corpus.loading[id];

  const b=
    BOOKS.find(
      x=>x.id===id
    );

  if(!b)return false;

  const p=
    (
      async()=>{
        try{

          const r=
            await fetch(
              CFG.base+
              b.file,
              {
                cache:
                  "force-cache"
              }
            );

          if(
            !r.ok
          )throw Error(
            r.status
          );

          const ts=
            parse(
              await r.text(),
              b
            );

          if(
            !ts.length
          )throw Error(
            "empty"
          );

          corpus.books[id]={
            book:b,
            tokens:ts
          };

          ts.forEach(
            t=>{

              corpus.tokens.push(
                t
              );

              (
                corpus.verses[
                  t.verseKey
                ]||
                (
                  corpus.verses[
                    t.verseKey
                  ]=[]
                )
              )
              .push(
                t
              );

              (
                corpus.lemmas[
                  norm(t.lemma)
                ]||
                (
                  corpus.lemmas[
                    norm(t.lemma)
                  ]=[]
                )
              )
              .push(
                t
              );

            }
          );

          if(
            $("corpusStatus")
          ){

            $("corpusStatus")
              .textContent=
              b.name+
              " 已载入";

          }

          return true;

        }
        catch(e){

          console.warn(
            "GBRM corpus",
            id,
            e
          );

          return false;

        }
      }
    )();

  corpus.loading[id]=p;

  const ok=
    await p;

  delete corpus.loading[id];

  return ok;
}


/* =========================================================
Review
========================================================= */

function reviewStep(
  a,
  l,
  s
){

  a.innerHTML=
    "<div class='lesson-section'>"+
      "<h3>最后回顾</h3>"+
      "<div class='training-line'>"+
        "<strong>问自己：</strong>"+
        "我能不能用一句话说出本课最重要的内容？"+
      "</div>"+
      "<button id='finishLessonButton' class='primary wide'>"+
        "完成本课"+
      "</button>"+
    "</div>";

  s.review=
    true;

  save();

  $("finishLessonButton")
    .onclick=
    complete;
}


function complete(){

  const s=
    LState(li);

  if(
    !s.content ||
    !s.practice ||
    !s.vocabulary ||
    !s.corpus ||
    !s.review
  ){

    return alert(
      "先完成本课全部步骤。"
    );

  }

  s.completed=
    true;

  save();

  const l=
    LESSONS[li];

  $("lessonArea").innerHTML=

    `<div class="success">`+

      `<strong>✓ 本课完成</strong>`+

      `<br><br>`+

      `L${String(l.n).padStart(2,"0")}`+
      ` · ${esc(l.title)}`+

      `<button id="nextLessonButton" class="primary wide">`+

        (
          li<
          LESSONS.length-1
            ? "下一课 →"
            : "返回首页"
        )+

      `</button>`+

    `</div>`;

  $("nextLessonButton")
    .onclick=
    ()=>li<
      LESSONS.length-1
        ? openLesson(li+1)
        : goHome;
}


/* =========================================================
Navigation
========================================================= */

function next(){

  const s=
    LState(li);

  if(
    step===1 &&
    !s.practice
  ){

    return alert(
      "请先完成练习。"
    );

  }

  if(
    step===3 &&
    !s.corpus
  ){

    return startCorpus();

  }

  if(
    step<4
  ){

    step++;

    renderStep();

  }
  else{

    complete();

  }
}


function prev(){

  if(
    step
  ){

    step--;

    renderStep();

  }
  else{

    goHome();

  }

}


function returnCorpus(){

  renderLesson();

  go("lesson");

}


function speak(t){

  if(
    !speechSynthesis
  ){

    return;

  }

  speechSynthesis.cancel();

  const u=
    new SpeechSynthesisUtterance(
      t
    );

  u.lang=
    CFG.lang;

  u.rate=
    CFG.rate;

  speechSynthesis.speak(
    u
  );

}


function goHome(){

  home();

  go("home");

}


/* =========================================================
Init
========================================================= */

function init(){

  if(
    $("lessonBack")
  )
    $("lessonBack")
      .onclick=
      goHome;

  if(
    $("lessonPrevious")
  )
    $("lessonPrevious")
      .onclick=
      prev;

  if(
    $("lessonNext")
  )
    $("lessonNext")
      .onclick=
      next;

  if(
    $("startVocabularyReview")
  )
    $("startVocabularyReview")
      .onclick=
      startVocabularyReview;

  if(
    $("vocabReviewBack")
  )
    $("vocabReviewBack")
      .onclick=
      goHome;

  if(
    $("corpusBack")
  )
    $("corpusBack")
      .onclick=
      returnCorpus;

  if(
    $("lemmaBack")
  )
    $("lemmaBack")
      .onclick=
      goHome;

  if(
    $("verseBack")
  )
    $("verseBack")
      .onclick=
      returnCorpus;

  home();
}


init();


window.openLesson=
  openLesson;

window.startVocabularyReview=
  startVocabularyReview;

window.startLessonCorpusTraining=
  startCorpus;

window.speakText=
  speak;

window.renderLessonStep=
  renderStep;
