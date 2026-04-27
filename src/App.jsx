import React, { useMemo, useState } from "react";

const questions = [
  {id:1,cat:"Questions personnelles",q:"Pourquoi souhaitez-vous devenir français(e) ?"},
  {id:2,cat:"Questions personnelles",q:"Depuis combien de temps vivez-vous en France ?"},
  {id:3,cat:"Questions personnelles",q:"Pourquoi avez-vous choisi de vivre en France ?"},
  {id:4,cat:"Questions personnelles",q:"Vous sentez-vous intégré(e) ? Pourquoi ?"},
  {id:5,cat:"Questions personnelles",q:"Comment montrez-vous votre intégration ?"},
  {id:6,cat:"Questions personnelles",q:"Qu’aimez-vous dans la vie en France ?"},
  {id:7,cat:"Questions personnelles",q:"Qu’est-ce qui vous plaît le moins en France ?"},
  {id:8,cat:"Questions personnelles",q:"Que représente pour vous la nationalité française ?"},
  {id:9,cat:"Questions personnelles",q:"Quelles valeurs françaises partagez-vous ?"},
  {id:10,cat:"Questions personnelles",q:"Que pensez-vous de la devise « Liberté, Égalité, Fraternité » ?"},
  {id:11,cat:"Questions personnelles",q:"Souhaitez-vous voter ? Pourquoi ?"},
  {id:12,cat:"Questions personnelles",q:"Qu’est-ce que la citoyenneté ?"},
  {id:13,cat:"Questions personnelles",q:"Que représente la République pour vous ?"},
  {id:14,cat:"Questions personnelles",q:"Avez-vous des amis français ?"},
  {id:15,cat:"Questions personnelles",q:"Participez-vous à la vie locale ?"},
  {id:16,cat:"Questions personnelles",q:"Êtes-vous membre d’une association ?"},
  {id:17,cat:"Questions personnelles",q:"Avez-vous déjà fait du bénévolat ?"},
  {id:18,cat:"Questions personnelles",q:"Avez-vous participé à une action citoyenne ?"},
  {id:19,cat:"Questions personnelles",q:"Comment vous informez-vous sur l’actualité ?"},
  {id:20,cat:"Questions personnelles",q:"Parlez-vous français à la maison ?"},
  {id:21,cat:"Questions personnelles",q:"Comment améliorez-vous votre français ?"},
  {id:22,cat:"Questions personnelles",q:"Travaillez-vous en France ?"},
  {id:23,cat:"Questions personnelles",q:"Quel est votre métier ?"},
  {id:24,cat:"Questions personnelles",q:"Quels sont vos projets en France ?"},
  {id:25,cat:"Questions personnelles",q:"Souhaitez-vous rester en France définitivement ?"},
  {id:26,cat:"Questions personnelles",q:"Quelle est votre plus grande fierté en France ?"},
  {id:27,cat:"Questions personnelles",q:"Quelle difficulté avez-vous rencontrée ?"},
  {id:28,cat:"Questions personnelles",q:"Comment avez-vous surmonté cette difficulté ?"},
  {id:29,cat:"Questions personnelles",q:"Quels sont vos loisirs ?"},
  {id:30,cat:"Questions personnelles",q:"Connaissez-vous des traditions françaises ?"},
  {id:31,cat:"Questions personnelles",q:"Célébrez-vous des fêtes françaises ?"},
  {id:32,cat:"Questions personnelles",q:"Quel aspect de la culture française vous a marqué ?"},
  {id:33,cat:"Questions personnelles",q:"Que pensez-vous de l’école en France ?"},
  {id:34,cat:"Questions personnelles",q:"Que pensez-vous de la liberté d’expression ?"},
  {id:35,cat:"Questions personnelles",q:"Que pensez-vous de la laïcité ?"},
  {id:36,cat:"Questions personnelles",q:"Qu’appréciez-vous dans le mode de vie français ?"},
  {id:37,cat:"Questions personnelles",q:"Avez-vous des enfants scolarisés en France ?"},
  {id:38,cat:"Questions personnelles",q:"Quelle langue parlez-vous avec vos enfants ?"},
  {id:39,cat:"Questions personnelles",q:"Quel conseil donneriez-vous à un nouvel arrivant ?"},
  {id:40,cat:"Questions personnelles",q:"Que signifie être un bon citoyen ?"},
  {id:41,cat:"Histoire, culture et société",q:"Qui est le président de la République ?"},
  {id:42,cat:"Histoire, culture et société",q:"Qui est le Premier ministre ?"},
  {id:43,cat:"Histoire, culture et société",q:"Quelle est la capitale de la France ?"},
  {id:44,cat:"Histoire, culture et société",q:"Combien y a-t-il de régions en France ?"},
  {id:45,cat:"Histoire, culture et société",q:"Quels sont les symboles de la République ?"},
  {id:46,cat:"Histoire, culture et société",q:"Que représente le drapeau français ?"},
  {id:47,cat:"Histoire, culture et société",q:"Que représente Marianne ?"},
  {id:48,cat:"Histoire, culture et société",q:"Quel est l’hymne national ?"},
  {id:49,cat:"Histoire, culture et société",q:"Que signifie la fête du 14 juillet ?"},
  {id:50,cat:"Histoire, culture et société",q:"Qu’est-ce que la Révolution française ?"},
  {id:51,cat:"Histoire, culture et société",q:"En quelle année a eu lieu la Révolution française ?"},
  {id:52,cat:"Histoire, culture et société",q:"Qui était Napoléon Bonaparte ?"},
  {id:53,cat:"Histoire, culture et société",q:"Qui était Charles de Gaulle ?"},
  {id:54,cat:"Histoire, culture et société",q:"Que s’est-il passé en 1945 ?"},
  {id:55,cat:"Histoire, culture et société",q:"Qu’est-ce que la Seconde Guerre mondiale ?"},
  {id:56,cat:"Histoire, culture et société",q:"Qu’est-ce que la Déclaration des droits de l’homme ?"},
  {id:57,cat:"Histoire, culture et société",q:"Quelles sont les grandes valeurs de la République ?"},
  {id:58,cat:"Histoire, culture et société",q:"Qu’est-ce que la laïcité ?"},
  {id:59,cat:"Histoire, culture et société",q:"Quelle est la langue officielle ?"},
  {id:60,cat:"Histoire, culture et société",q:"Quelles sont les grandes spécialités culinaires françaises ?"},
  {id:61,cat:"Histoire, culture et société",q:"Connaissez-vous des écrivains français ?"},
  {id:62,cat:"Histoire, culture et société",q:"Connaissez-vous des artistes français ?"},
  {id:63,cat:"Histoire, culture et société",q:"Quelle est l’importance de la culture en France ?"},
  {id:64,cat:"Histoire, culture et société",q:"Qu’est-ce que le patrimoine ?"},
  {id:65,cat:"Histoire, culture et société",q:"Connaissez-vous des monuments français ?"},
  {id:66,cat:"Histoire, culture et société",q:"Qu’est-ce que l’Union européenne ?"},
  {id:67,cat:"Histoire, culture et société",q:"La France fait-elle partie de l’Union européenne ?"},
  {id:68,cat:"Histoire, culture et société",q:"Quelle est la monnaie en France ?"},
  {id:69,cat:"Histoire, culture et société",q:"Quels sont les pays voisins de la France ?"},
  {id:70,cat:"Histoire, culture et société",q:"Qu’est-ce que la francophonie ?"},
  {id:71,cat:"Institutions françaises",q:"Qu’est-ce que la République ?"},
  {id:72,cat:"Institutions françaises",q:"Qui dirige la France ?"},
  {id:73,cat:"Institutions françaises",q:"Qu’est-ce que le Parlement ?"},
  {id:74,cat:"Institutions françaises",q:"Quelles sont les deux chambres du Parlement ?"},
  {id:75,cat:"Institutions françaises",q:"Quel est le rôle de l’Assemblée nationale ?"},
  {id:76,cat:"Institutions françaises",q:"Quel est le rôle du Sénat ?"},
  {id:77,cat:"Institutions françaises",q:"Quel est le rôle du Président ?"},
  {id:78,cat:"Institutions françaises",q:"Quel est le rôle du gouvernement ?"},
  {id:79,cat:"Institutions françaises",q:"Qu’est-ce que le pouvoir exécutif ?"},
  {id:80,cat:"Institutions françaises",q:"Qu’est-ce que le pouvoir législatif ?"},
  {id:81,cat:"Institutions françaises",q:"Qu’est-ce que le pouvoir judiciaire ?"},
  {id:82,cat:"Institutions françaises",q:"Qu’est-ce que la séparation des pouvoirs ?"},
  {id:83,cat:"Institutions françaises",q:"Comment sont élus les députés ?"},
  {id:84,cat:"Institutions françaises",q:"Combien dure un mandat présidentiel ?"},
  {id:85,cat:"Institutions françaises",q:"Qu’est-ce qu’une élection ?"},
  {id:86,cat:"Institutions françaises",q:"Qui peut voter en France ?"},
  {id:87,cat:"Institutions françaises",q:"Qu’est-ce qu’une commune ?"},
  {id:88,cat:"Institutions françaises",q:"Qui est le maire ?"},
  {id:89,cat:"Institutions françaises",q:"Quel est le rôle du maire ?"},
  {id:90,cat:"Institutions françaises",q:"Qu’est-ce qu’une préfecture ?"},
  {id:91,cat:"Lois et République",q:"Qui fait les lois en France ?"},
  {id:92,cat:"Lois et République",q:"Comment une loi est-elle adoptée ?"},
  {id:93,cat:"Lois et République",q:"Qu’est-ce qu’une loi ?"},
  {id:94,cat:"Lois et République",q:"Qui propose les lois ?"},
  {id:95,cat:"Lois et République",q:"Qu’est-ce que la Constitution ?"},
  {id:96,cat:"Lois et République",q:"Que signifie « nul n’est censé ignorer la loi » ?"},
  {id:97,cat:"Lois et République",q:"Qu’est-ce que la présomption d’innocence ?"},
  {id:98,cat:"Lois et République",q:"Quelle est la majorité pénale ?"},
  {id:99,cat:"Lois et République",q:"À quoi sert une loi ?"},
  {id:100,cat:"Lois et République",q:"Qui est protégé par la loi ?"},
  {id:101,cat:"Lois et République",q:"Peut-on critiquer une loi ?"},
  {id:102,cat:"Lois et République",q:"Qui contrôle les lois ?"},
  {id:103,cat:"Lois et République",q:"Qu’est-ce qu’un tribunal ?"},
  {id:104,cat:"Lois et République",q:"Qu’est-ce que le droit au recours ?"},
  {id:105,cat:"Lois et République",q:"La loi est-elle la même pour tous ?"},
  {id:106,cat:"Lois et République",q:"Peut-on manifester ?"},
  {id:107,cat:"Lois et République",q:"Peut-on critiquer le gouvernement ?"},
  {id:108,cat:"Lois et République",q:"Qu’est-ce que le droit de grève ?"},
  {id:109,cat:"Lois et République",q:"Quelles sont les sources du droit ?"},
  {id:110,cat:"Lois et République",q:"Quels sont les droits en cas d’arrestation ?"},
  {id:111,cat:"Lois et République",q:"Quelle est la différence entre une loi et un règlement ?"},
  {id:112,cat:"Lois et République",q:"A-t-on le droit d’être défendu ?"},
  {id:113,cat:"Lois et République",q:"La loi protège-t-elle la liberté de religion ?"},
  {id:114,cat:"Lois et République",q:"La loi protège-t-elle la liberté d’expression ?"},
  {id:115,cat:"Lois et République",q:"Qu’est-ce qu’un casier judiciaire ?"},
  {id:116,cat:"Lois et République",q:"Un citoyen peut-il changer une loi ?"},
  {id:117,cat:"Lois et République",q:"Les lois s’appliquent-elles aux étrangers ?"},
  {id:118,cat:"Lois et République",q:"Peut-on se défendre seul ?"},
  {id:119,cat:"Lois et République",q:"Qu’est-ce qu’un contrat ?"},
  {id:120,cat:"Lois et République",q:"Pourquoi la justice est-elle indépendante ?"},
];

const sampleAnswers = {
  1:"Je souhaite devenir français(e) car je vis en France depuis plusieurs années, je suis intégré(e) et je partage les valeurs de la République.",
  2:"Je vis en France depuis plusieurs années, ce qui m’a permis de m’intégrer progressivement.",
  3:"J’ai choisi la France pour sa stabilité, ses opportunités et son respect des droits.",
  4:"Oui, car j’ai un travail, des relations sociales et je participe à la vie quotidienne.",
  5:"Je parle français, je travaille, je respecte les lois et je m’implique localement.",
  6:"J’aime la stabilité, la qualité de vie, les services publics et la culture.",
  7:"Comme dans tous les pays, il y a des défis, mais je m’adapte et reste positif(ve).",
  8:"C’est un engagement et une reconnaissance de mon intégration.",
  9:"Liberté, égalité, fraternité, respect et solidarité.",
  10:"Elle représente les principes fondamentaux de la République.",
  11:"Oui, car voter est un droit et un devoir citoyen.",
  12:"La citoyenneté, c’est participer à la vie du pays et respecter ses lois.",
  13:"Un système fondé sur l’égalité, les droits et les lois.",
  14:"Oui, au travail et dans mon entourage.",
  15:"Oui, par des activités locales ou associatives.",
  16:"Pas toujours, mais je participe quand c’est possible.",
  17:"Oui, pour aider les autres et contribuer à la société.",
  18:"Oui, par des actions locales ou solidaires.",
  19:"Par la télévision, internet et les journaux.",
  20:"Oui, pour progresser et m’intégrer.",
  21:"En lisant, en parlant et en regardant les actualités.",
  22:"Oui, je travaille en France.",
  23:"J’exerce un métier qui me permet de participer à la société.",
  24:"Continuer à travailler et construire mon avenir en France.",
  25:"Oui, je souhaite m’installer durablement.",
  26:"Avoir trouvé ma place et un emploi stable.",
  27:"La langue ou l’adaptation culturelle au début.",
  28:"En apprenant et en faisant des efforts.",
  29:"Lecture, sport, promenades, activités culturelles.",
  30:"Oui, comme le 14 juillet ou Noël.",
  31:"Oui, avec ma famille ou mes amis.",
  32:"L’importance de la culture et du débat.",
  33:"L’école offre une éducation de qualité.",
  34:"C’est une liberté essentielle avec des limites.",
  35:"Elle garantit la neutralité et la liberté de croire ou non.",
  36:"L’équilibre entre travail et vie personnelle.",
  37:"Oui, ils sont scolarisés ici.",
  38:"Le français principalement.",
  39:"Apprendre la langue et être patient.",
  40:"Respecter les lois et participer à la société.",
  41:"Le président actuel est Emmanuel Macron.",
  42:"Le Premier ministre est Gabriel Attal, selon l’actualité.",
  43:"La capitale est Paris.",
  44:"Il y a 18 régions.",
  45:"Le drapeau, Marianne, l’hymne et la devise.",
  46:"Il symbolise liberté, égalité et fraternité.",
  47:"Elle représente la République.",
  48:"L’hymne est La Marseillaise.",
  49:"Il commémore la Révolution française.",
  50:"Un événement majeur marquant la fin de la monarchie absolue.",
  51:"En 1789.",
  52:"Un empereur et chef militaire français.",
  53:"Un général et président fondateur de la Ve République.",
  54:"Fin de la Seconde Guerre mondiale.",
  55:"Un conflit mondial de 1939 à 1945.",
  56:"Un texte fondamental sur les droits humains.",
  57:"Liberté, égalité, fraternité.",
  58:"La séparation de l’État et des religions.",
  59:"Le français.",
  60:"Fromage, baguette, gastronomie variée.",
  61:"Oui, comme Victor Hugo.",
  62:"Oui, comme Claude Monet.",
  63:"Elle est centrale dans la société.",
  64:"L’ensemble des biens culturels et historiques.",
  65:"Oui, comme la Tour Eiffel.",
  66:"Une organisation de pays européens.",
  67:"Oui.",
  68:"L’euro.",
  69:"Espagne, Italie, Allemagne, Belgique…",
  70:"L’ensemble des pays parlant français.",
  71:"Un régime politique sans roi.",
  72:"Le président et le gouvernement.",
  73:"L’institution qui vote les lois.",
  74:"L’Assemblée nationale et le Sénat.",
  75:"Voter les lois et contrôler le gouvernement.",
  76:"Représenter les territoires.",
  77:"Diriger l’État et représenter la France.",
  78:"Diriger la politique du pays.",
  79:"Appliquer les lois.",
  80:"Voter les lois.",
  81:"Rendre la justice.",
  82:"Séparer les pouvoirs pour éviter les abus.",
  83:"Par élection.",
  84:"5 ans.",
  85:"Un vote pour choisir des représentants.",
  86:"Les citoyens français majeurs.",
  87:"Une collectivité locale.",
  88:"Le responsable de la commune.",
  89:"Gérer la ville et ses services.",
  90:"Le représentant de l’État.",
  91:"Le Parlement.",
  92:"Elle est votée puis promulguée.",
  93:"Une règle générale.",
  94:"Gouvernement ou parlementaires.",
  95:"Le texte fondamental.",
  96:"Chacun doit respecter la loi.",
  97:"On est innocent jusqu’à preuve du contraire.",
  98:"18 ans.",
  99:"Organiser la société.",
  100:"Tout le monde.",
  101:"Oui, mais elle doit être respectée.",
  102:"Le Conseil constitutionnel.",
  103:"Une institution de justice.",
  104:"Contester une décision.",
  105:"Oui.",
  106:"Oui, pacifiquement.",
  107:"Oui.",
  108:"Arrêter de travailler pour défendre ses droits.",
  109:"Constitution, lois, règlements.",
  110:"Avocat, silence, juge.",
  111:"Loi = Parlement / règlement = gouvernement.",
  112:"Oui.",
  113:"Oui.",
  114:"Oui, avec limites.",
  115:"Historique des condamnations.",
  116:"Indirectement.",
  117:"Oui.",
  118:"Oui.",
  119:"Un accord juridique.",
  120:"Car elle est indépendante du pouvoir politique."
};

function shuffleArray(list){
  return [...list].sort(() => Math.random() - 0.5);
}

export default function App(){
  const [category,setCategory] = useState("Toutes");
  const [index,setIndex] = useState(0);
  const [showAnswer,setShowAnswer] = useState(false);
  const [order,setOrder] = useState(questions);
  const [known,setKnown] = useState([]);
  const [review,setReview] = useState([]);

  const categories = ["Toutes", "Questions personnelles", "Histoire, culture et société", "Institutions françaises", "Lois et République"];
  const filtered = useMemo(() => order.filter(q => category === "Toutes" || q.cat === category), [order, category]);
  const current = filtered[index] || filtered[0];
  const progress = Math.round((known.length / questions.length) * 100);

  const goNext = () => { setIndex(i => Math.min(i + 1, filtered.length - 1)); setShowAnswer(false); };
  const goPrev = () => { setIndex(i => Math.max(i - 1, 0)); setShowAnswer(false); };

  const markKnown = () => {
    if(!current) return;
    setKnown(prev => prev.includes(current.id) ? prev : [...prev, current.id]);
    setReview(prev => prev.filter(id => id !== current.id));
    goNext();
  };

  const markReview = () => {
    if(!current) return;
    setReview(prev => prev.includes(current.id) ? prev : [...prev, current.id]);
    setKnown(prev => prev.filter(id => id !== current.id));
    goNext();
  };

  return (
    <div style={{minHeight:"100vh",background:"radial-gradient(circle at top,#1e293b,#020617)",color:"white",fontFamily:"Arial, sans-serif",display:"flex"}}>
      <aside style={{width:250,borderRight:"1px solid #334155",padding:24,display:"none"}} className="sidebar">
        <h2 style={{fontSize:22,marginBottom:4}}>🇫🇷 Naturalisation</h2>
        <p style={{color:"#94a3b8",marginBottom:35}}>Simulateur d’entretien</p>
        <div style={{display:"grid",gap:14,color:"#cbd5e1"}}>
          <div>⌂ Question</div><div>☑ Révisions</div><div>◷ Historique</div><div>▥ Statistiques</div><div>⌕ Recherche</div>
        </div>
        <div style={{marginTop:45,padding:20,borderRadius:16,background:"rgba(255,255,255,.06)",border:"1px solid #1f2937",textAlign:"center"}}>
          <p>Progression globale</p>
          <div style={{fontSize:34,fontWeight:"bold",margin:"20px 0"}}>{progress}%</div>
          <p style={{color:"#94a3b8"}}>{known.length} / 120 questions</p>
        </div>
      </aside>

      <main style={{flex:1,padding:24,maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"flex",gap:12,marginBottom:30,flexWrap:"wrap"}}>
          {categories.map(cat => (
            <button key={cat} onClick={() => {setCategory(cat); setIndex(0); setShowAnswer(false);}} style={{padding:"12px 18px",borderRadius:18,border:category===cat ? "1px solid #60a5fa" : "1px solid #334155",background:category===cat ? "rgba(37,99,235,.25)" : "rgba(255,255,255,.03)",color:category===cat ? "#bfdbfe" : "#e5e7eb",fontWeight:700,cursor:"pointer"}}>
              {cat} ({cat === "Toutes" ? questions.length : questions.filter(q=>q.cat===cat).length})
            </button>
          ))}
        </div>

        {current && <>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18,color:"#cbd5e1"}}>
            <div>Question {index + 1} / {filtered.length}</div>
            <div>🔖 Marquer cette question</div>
          </div>

          <div onClick={() => setShowAnswer(!showAnswer)} style={{minHeight:330,borderRadius:22,border:"1px solid #334155",background:"linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.02))",boxShadow:"0 25px 70px rgba(0,0,0,.35)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:30,cursor:"pointer"}}>
            <div style={{padding:"10px 18px",borderRadius:999,background:"rgba(37,99,235,.18)",color:"#93c5fd",fontWeight:700,marginBottom:35}}>{current.cat.toUpperCase()}</div>
            {!showAnswer ? <>
              <h1 style={{fontSize:"clamp(26px,4vw,40px)",lineHeight:1.25,maxWidth:850}}>{current.q}</h1>
              <p style={{color:"#94a3b8",fontSize:18,marginTop:45}}>☝️ Cliquer pour voir la réponse</p>
            </> : <>
              <h2 style={{fontSize:24,color:"#86efac",marginBottom:18}}>Réponse modèle</h2>
              <p style={{fontSize:"clamp(20px,3vw,30px)",lineHeight:1.45,maxWidth:850}}>{sampleAnswers[current.id]}</p>
            </>}
          </div>

          <div style={{display:"flex",justifyContent:"space-between",gap:16,marginTop:28,flexWrap:"wrap"}}>
            <button onClick={goPrev} style={buttonStyle}>← Précédent</button>
            <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
              <button onClick={markReview} style={{...buttonStyle,border:"1px solid #ef4444",color:"#f87171"}}>↻ À revoir</button>
              <button onClick={markKnown} style={{...buttonStyle,border:"1px solid #22c55e",color:"#86efac"}}>✓ Mémorisé</button>
            </div>
            <button onClick={goNext} style={buttonStyle}>Suivant →</button>
          </div>

          <div style={{textAlign:"center",marginTop:26}}>
            <button onClick={() => {setOrder(shuffleArray(questions)); setIndex(0); setShowAnswer(false);}} style={{...buttonStyle,minWidth:280}}>🔀 Mélanger les cartes</button>
          </div>
        </>}
      </main>
    </div>
  );
}

const buttonStyle = {padding:"16px 28px",borderRadius:14,border:"1px solid #334155",background:"rgba(255,255,255,.03)",color:"white",fontWeight:700,cursor:"pointer",fontSize:16};
