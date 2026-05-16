import React, { useMemo, useState } from "react";

const questions = [
  {
    id: 1,
    cat: "Questions personnelles",
    q: "Pourquoi souhaitez-vous devenir français(e) ?",
    r: `Je souhaite devenir français car la France représente aujourd'hui le centre de ma vie personnelle et professionnelle.

La France m'a accueilli et m'a permis de m'épanouir sur le plan professionnel et personnel. La première fois que je suis venu en France était en 2015 dans le cadre d'une mission. Puis en 2017, j'ai décroché mon premier CDI et depuis j'y vis de manière continue.

J'ai construit un parcours solide dans le domaine de la data et de l'IA. J'ai débuté comme consultant senior, puis j'ai évolué vers des fonctions à plus forte responsabilité jusqu'à occuper actuellement un poste de directeur des opérations. Mon engagement s'est aussi concrétisé par un investissement dans mon entreprise, dont je suis aujourd'hui associé.

Sur le plan personnel, je suis marié depuis 2018 et je partage ma vie en France avec mon épouse. Nous y avons construit notre stabilité familiale et sociale.

Je me reconnais pleinement dans les valeurs de la République française, notamment le mérite, l'égalité des chances et la responsabilité. Obtenir la nationalité française représente pour moi une étape naturelle afin de m'engager pleinement dans la société française.`,
    astuce: "Intégration + valeurs",
  },
  {
    id: 2,
    cat: "Questions personnelles",
    q: "Que représente pour toi la nationalité française ?",
    r: `La nationalité française est pour moi une reconnaissance de mon attachement à la France et une étape naturelle dans mon parcours d'intégration.`,
    astuce: "Durée + intégration",
  },
  {
    id: 3,
    cat: "Questions personnelles",
    q: "Pourquoi avez-vous choisi de vivre en France ?",
    r: `J'ai choisi de vivre en France initialement dans le cadre d'une opportunité professionnelle qui m'a permis de découvrir un environnement de travail dynamique et structuré, notamment dans le domaine de la data et des nouvelles technologies.

La France s'est rapidement imposée comme un choix évident grâce à la qualité de son écosystème professionnel, à la richesse de ses opportunités dans mon domaine, ainsi qu'à la stabilité qu'elle offre.`,
    astuce: "Stabilité + opportunités + droits",
  },
  {
    id: 4,
    cat: "Questions personnelles",
    q: "Vous sentez-vous intégré(e) ? Pourquoi ?",
    r: `Oui, je me sens pleinement intégré en France, aussi bien sur le plan professionnel que personnel.

Sur le plan professionnel, j'ai construit une grande partie de ma carrière en France depuis 2017. Aujourd'hui, j'occupe un poste à responsabilités et je suis également associé dans mon entreprise.

Sur le plan personnel, je vis en France avec mon épouse depuis notre mariage en 2018. Par ailleurs, je maîtrise la langue française, comme en atteste mon niveau B2 obtenu au TEF avec une moyenne de 490.`,
    astuce: "Travail + relations + quotidien",
  },
  {
    id: 5,
    cat: "Questions personnelles",
    q: "Pourquoi avez-vous décidé de demander la naturalisation en France ?",
    r: `Cela fait plusieurs années que je construis ma vie ici. Je paye mes impôts, je crée de l'emploi, j'ai mes attaches personnelles. Devenir Français n'est pas une simple formalité administrative, c'est une démarche de cohérence. Je veux participer à la vie de la cité, voter, et porter officiellement les couleurs d'un pays dont je partage déjà le quotidien et les valeurs.`,
    astuce: "Langue + travail + lois",
  },
  {
    id: 6,
    cat: "Questions personnelles",
    q: "Qu'aimez-vous dans la vie en France ?",
    r: `Ce que j'apprécie particulièrement dans la vie en France, c'est l'équilibre entre vie professionnelle et vie personnelle, la qualité de vie, la richesse culturelle, les services publics et les valeurs portées par la société française, notamment l'égalité des chances, le mérite et la solidarité.`,
    astuce: "Stabilité + services publics + culture",
  },
  {
    id: 7,
    cat: "Questions personnelles",
    q: "Qu'est-ce qui vous plaît le moins en France ?",
    r: `Comme dans tout pays, il peut exister certains aspects du quotidien qui demandent de l'adaptation. Par exemple, j'ai dû m'habituer à certaines différences culturelles au début. Cependant, avec le temps, j'ai appris à les comprendre et à m'y adapter pleinement.`,
    astuce: "Rester positif",
  },
  {
    id: 8,
    cat: "Questions personnelles",
    q: "Vous sentez-vous aujourd'hui plus français que de votre pays d'origine, ou l'inverse ?",
    r: `Aujourd'hui, je me sens profondément attaché à la France, qui est devenue mon foyer. C'est ici que je me suis construit, que j'ai développé ma vie personnelle et professionnelle, et que je me projette pour l'avenir.

Je n'oppose pas ces deux identités. Mon pays d'origine fait partie de mon histoire et de mon parcours. Devenir français représente pour moi une continuité logique de mon intégration.`,
    astuce: "Équilibre + attachement France + respect origine",
  },
  {
    id: 9,
    cat: "Valeurs républicaines",
    q: "Quelles valeurs françaises partagez-vous ?",
    r: `Je partage les valeurs fondamentales de la République française : la liberté, l'égalité et la fraternité. Je suis aussi attaché au respect des lois, à la laïcité, à l'égalité des chances et au sens des responsabilités.`,
    astuce: "Devise + respect + solidarité",
  },
  {
    id: 10,
    cat: "Valeurs républicaines",
    q: "Que pensez-vous de la devise « Liberté, Égalité, Fraternité » ?",
    r: `Pour moi, cette devise représente les valeurs essentielles de la France. La liberté, c'est le respect des choix de chacun. L'égalité, c'est l'égalité des droits et des chances. La fraternité, c'est le respect, la solidarité et le vivre-ensemble.`,
    astuce: "Devise = 3 principes",
  },
];

// ✅ Partie dédiée au mode QCM : ici tu mets uniquement les questions QCM spécifiques.
// Elles sont indépendantes des cartes de révision/quiz.
const qcmQuestions = [
  {
    id: "qcm-1",
    cat: "Institutions",
    q: "Qui élit le président de la République française ?",
    options: [
      "Les citoyens français au suffrage universel direct",
      "Les députés uniquement",
      "Les sénateurs uniquement",
      "Le Premier ministre",
    ],
    correctIndex: 0,
    correction: "Le président de la République est élu par les citoyens français au suffrage universel direct.",
  },
  {
    id: "qcm-2",
    cat: "Institutions",
    q: "Qui nomme le Premier ministre ?",
    options: [
      "Le président de la République",
      "Le Sénat",
      "Le Conseil constitutionnel",
      "Les maires",
    ],
    correctIndex: 0,
    correction: "Le Premier ministre est nommé par le président de la République.",
  },
  {
    id: "qcm-3",
    cat: "Valeurs républicaines",
    q: "Quelle est la devise de la République française ?",
    options: [
      "Liberté, Égalité, Fraternité",
      "Travail, Famille, Patrie",
      "Unité, Justice, Progrès",
      "Paix, Justice, Solidarité",
    ],
    correctIndex: 0,
    correction: "La devise officielle de la République française est : Liberté, Égalité, Fraternité.",
  },
  {
    id: "qcm-4",
    cat: "Laïcité",
    q: "Que signifie principalement la laïcité en France ?",
    options: [
      "La neutralité de l'État vis-à-vis des religions et la liberté de conscience",
      "L'interdiction totale des religions",
      "L'obligation d'avoir une religion",
      "Le pouvoir religieux dans l'État",
    ],
    correctIndex: 0,
    correction: "La laïcité garantit la liberté de conscience et impose la neutralité de l'État vis-à-vis des religions.",
  },
  {
    id: "qcm-5",
    cat: "Citoyenneté",
    q: "Quel droit politique important obtient-on avec la nationalité française ?",
    options: [
      "Le droit de vote aux élections nationales",
      "Le droit de ne plus payer d'impôts",
      "Le droit de ne pas respecter les lois",
      "Le droit de choisir le Premier ministre directement",
    ],
    correctIndex: 0,
    correction: "La nationalité française permet notamment de voter aux élections nationales et de participer pleinement à la vie citoyenne.",
  },
];

function shuffleArray(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function HighlightText({ text, search }) {
  const content = String(text || "");
  const cleanSearch = search.trim();

  if (!cleanSearch) return <>{content}</>;

  const escaped = cleanSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = content.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === cleanSearch.toLowerCase() ? (
          <mark key={i} className="highlight">
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}

export default function App() {
  const [mode, setMode] = useState("revision");
  const [category, setCategory] = useState("Toutes");
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(true);
  const [order, setOrder] = useState(questions);
  const [qcmOrder, setQcmOrder] = useState(qcmQuestions);
  const [known, setKnown] = useState([]);
  const [review, setReview] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [qcmAnswered, setQcmAnswered] = useState(false);

  const activeList = mode === "qcm" ? qcmOrder : order;
  const totalCount = mode === "qcm" ? qcmQuestions.length : questions.length;

  const categories = useMemo(() => {
    const source = mode === "qcm" ? qcmQuestions : questions;
    return ["Toutes", ...Array.from(new Set(source.map((q) => q.cat))), "À revoir"];
  }, [mode]);

  const filtered = useMemo(() => {
    const normalizedSearch = normalizeText(search);

    const categoryFiltered = (() => {
      if (category === "À revoir") return activeList.filter((q) => review.includes(q.id));
      if (category === "Toutes") return activeList;
      return activeList.filter((q) => q.cat === category);
    })();

    if (!normalizedSearch) return categoryFiltered;

    return categoryFiltered.filter((q) => {
      const qcmText = q.options ? q.options.join(" ") + " " + (q.correction || "") : "";
      const searchableText = normalizeText(`${q.q} ${q.r || ""} ${q.astuce || ""} ${q.cat} ${qcmText}`);
      return searchableText.includes(normalizedSearch);
    });
  }, [activeList, category, review, search]);

  const current = filtered[index] || filtered[0];
  const progress = Math.round((known.length / (questions.length + qcmQuestions.length)) * 100);
  const hasSearch = search.trim().length > 0;

  const resetCardVisibility = (selectedMode = mode) => {
    setShowAnswer(selectedMode === "revision");
    setSelectedChoice(null);
    setQcmAnswered(false);
  };

  const goNext = () => {
    setIndex((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
    resetCardVisibility();
  };

  const goPrev = () => {
    setIndex((i) => Math.max(i - 1, 0));
    resetCardVisibility();
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setCategory("Toutes");
    setIndex(0);
    resetCardVisibility(newMode);
  };

  const chooseCategory = (cat) => {
    setCategory(cat);
    setIndex(0);
    resetCardVisibility();
  };

  const handleSearch = (value) => {
    setSearch(value);
    setIndex(0);
    resetCardVisibility();
  };

  const clearSearch = () => {
    setSearch("");
    setIndex(0);
    resetCardVisibility();
  };

  const markKnown = () => {
    if (!current) return;
    setKnown((prev) => (prev.includes(current.id) ? prev : [...prev, current.id]));
    setReview((prev) => prev.filter((id) => id !== current.id));
    goNext();
  };

  const markReview = () => {
    if (!current) return;
    setReview((prev) => (prev.includes(current.id) ? prev : [...prev, current.id]));
    setKnown((prev) => prev.filter((id) => id !== current.id));
    goNext();
  };

  const handleQcmChoice = (choiceIndex) => {
    if (!current || qcmAnswered) return;

    setSelectedChoice(choiceIndex);
    setQcmAnswered(true);

    if (choiceIndex === current.correctIndex) {
      setKnown((prev) => (prev.includes(current.id) ? prev : [...prev, current.id]));
      setReview((prev) => prev.filter((id) => id !== current.id));
    } else {
      setReview((prev) => (prev.includes(current.id) ? prev : [...prev, current.id]));
      setKnown((prev) => prev.filter((id) => id !== current.id));
    }
  };

  const shuffleCurrentMode = () => {
    if (mode === "qcm") setQcmOrder(shuffleArray(qcmQuestions));
    else setOrder(shuffleArray(questions));
    setIndex(0);
    resetCardVisibility();
  };

  const resetProgress = () => {
    setKnown([]);
    setReview([]);
    setIndex(0);
    setOrder(questions);
    setQcmOrder(qcmQuestions);
    clearSearch();
    resetCardVisibility();
  };

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        html, body, #root { height: 100%; overflow: hidden; }
        body { margin: 0; }
        .app {
          height: 100dvh;
          min-height: 100dvh;
          background: radial-gradient(circle at top, #1e293b, #020617);
          color: white;
          font-family: Arial, sans-serif;
          padding: 14px 18px;
          overflow: hidden;
        }
        .container {
          max-width: 1120px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .header { text-align: center; margin-bottom: 10px; flex: 0 0 auto; }
        .title { margin: 0; font-size: clamp(30px, 4.4vw, 50px); font-weight: 900; letter-spacing: -0.04em; }
        .subtitle { margin: 4px 0 0; color: #94a3b8; font-size: 15px; }
        .modebar { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 10px; flex: 0 0 auto; }
        .modeBtn, .btn {
          border: 1px solid #334155;
          background: rgba(255,255,255,.05);
          color: white;
          cursor: pointer;
          font-weight: 800;
        }
        .modeBtn { padding: 13px 14px; border-radius: 16px; font-size: 15px; }
        .active { border-color: #60a5fa !important; background: rgba(37,99,235,.28) !important; color: #bfdbfe !important; }
        .categoryArea { margin-bottom: 10px; flex: 0 0 auto; }
        .categorySelect {
          display: block;
          width: 100%;
          border: 1px solid #334155;
          background: rgba(15, 23, 42, .95);
          color: white;
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 15px;
          font-weight: 800;
          outline: none;
          cursor: pointer;
        }
        .searchArea {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-bottom: 8px;
          flex: 0 0 auto;
        }
        .searchInput {
          flex: 1;
          width: 100%;
          border: 1px solid #334155;
          background: rgba(15, 23, 42, .78);
          color: white;
          border-radius: 15px;
          padding: 13px 15px;
          font-size: 15px;
          font-weight: 800;
          outline: none;
        }
        .clearBtn {
          border: 1px solid #334155;
          background: rgba(255,255,255,.05);
          color: #cbd5e1;
          cursor: pointer;
          font-weight: 900;
          border-radius: 14px;
          padding: 13px 15px;
        }
        .searchInfo {
          color: #93c5fd;
          font-size: 13px;
          font-weight: 800;
          margin: -2px 0 8px;
          flex: 0 0 auto;
        }
        .highlight {
          background: rgba(250,204,21,.9);
          color: #111827;
          border-radius: 5px;
          padding: 0 4px;
          font-weight: 900;
        }
        .meta { display: flex; justify-content: space-between; align-items: center; color: #cbd5e1; margin-bottom: 8px; flex: 0 0 auto; }
        .progress { color: #93c5fd; font-weight: 800; }
        .card {
          flex: 1 1 auto;
          min-height: 0;
          border-radius: 24px;
          border: 1px solid #334155;
          background: linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
          box-shadow: 0 25px 70px rgba(0,0,0,.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          padding: 24px 30px;
          overflow: hidden;
        }
        .badge {
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(37,99,235,.20);
          color: #93c5fd;
          font-weight: 900;
          margin-bottom: 18px;
          font-size: 13px;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .question { font-size: clamp(22px, 3.2vw, 34px); line-height: 1.2; max-width: 900px; margin: 0 0 18px; flex: 0 0 auto; }
        .answerBox, .qcmBox {
          width: 100%;
          max-width: 980px;
          flex: 1 1 auto;
          min-height: 0;
          padding: 22px;
          border-radius: 18px;
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .answerBox {
          border: 1px solid rgba(34,197,94,.35);
          background: rgba(34,197,94,.08);
        }
        .answerTitle { color: #86efac; font-size: 22px; margin: 0 0 14px; }
        .answer { font-size: clamp(18px, 2.5vw, 24px); line-height: 1.45; margin: 0; white-space: pre-line; }
        .tip { margin-top: 18px; padding: 12px 16px; border-radius: 14px; border: 1px solid rgba(96,165,250,.45); background: rgba(37,99,235,.16); color: #bfdbfe; font-size: 16px; font-weight: 800; }
        .hint { color: #94a3b8; font-size: 16px; }
        .qcmInstruction { margin: 0 0 14px; color: #cbd5e1; font-size: 16px; font-weight: 800; }
        .qcmChoices { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; text-align: left; }
        .qcmChoice {
          border: 1px solid #334155;
          background: rgba(15, 23, 42, .72);
          color: white;
          border-radius: 18px;
          padding: 16px;
          cursor: pointer;
          text-align: left;
          min-height: 94px;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
        }
        .qcmChoice:hover { transform: translateY(-2px); background: rgba(30, 41, 59, .95); border-color: #60a5fa; }
        .qcmLetter {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: rgba(96,165,250,.18);
          color: #bfdbfe;
          font-weight: 900;
          margin-bottom: 10px;
        }
        .qcmText { display: block; color: #e2e8f0; font-size: 16px; line-height: 1.35; font-weight: 800; }
        .correctChoice { border-color: #22c55e !important; background: rgba(34,197,94,.14) !important; }
        .wrongChoice { border-color: #ef4444 !important; background: rgba(239,68,68,.14) !important; }
        .disabledChoice { cursor: default; transform: none !important; }
        .qcmFeedback { margin-top: 14px; padding: 14px 16px; border-radius: 16px; font-weight: 900; line-height: 1.35; }
        .successFeedback { border: 1px solid rgba(34,197,94,.45); background: rgba(34,197,94,.12); color: #86efac; }
        .errorFeedback { border: 1px solid rgba(239,68,68,.45); background: rgba(239,68,68,.12); color: #fca5a5; }
        .qcmCorrection { margin-top: 10px; color: #cbd5e1; font-weight: 700; font-size: 14px; }
        .actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 10px; flex: 0 0 auto; }
        .btn { padding: 14px 16px; border-radius: 14px; font-size: 15px; }
        .red { border-color: #ef4444; color: #fca5a5; }
        .green { border-color: #22c55e; color: #86efac; }
        .bottomActions { display: flex; gap: 12px; justify-content: center; margin-top: 8px; flex: 0 0 auto; }
        .bottomActions .btn { min-width: 240px; }

        @media (max-width: 700px) {
          .app { padding: 8px; }
          .title { font-size: 26px; }
          .subtitle { display: none; }
          .modebar { gap: 6px; margin-bottom: 6px; }
          .modeBtn { padding: 8px 4px; border-radius: 11px; font-size: 11px; }
          .categorySelect, .searchInput, .clearBtn { padding: 9px 10px; border-radius: 12px; font-size: 12px; }
          .meta { font-size: 11px; margin-bottom: 5px; }
          .meta span:last-child { display: none; }
          .card { border-radius: 16px; padding: 10px; overflow-y: auto; }
          .badge { font-size: 9px; padding: 5px 9px; margin-bottom: 8px; }
          .question { font-size: clamp(17px, 5.3vw, 22px); margin-bottom: 9px; }
          .answerBox, .qcmBox { padding: 10px; border-radius: 13px; }
          .answerTitle { font-size: 14px; }
          .answer { font-size: clamp(14px, 4.2vw, 17px); line-height: 1.28; }
          .tip { margin-top: 8px; padding: 7px 9px; font-size: 12px; }
          .qcmInstruction { font-size: 12px; margin-bottom: 8px; }
          .qcmChoices { grid-template-columns: 1fr; gap: 7px; }
          .qcmChoice { min-height: 0; padding: 9px; border-radius: 12px; }
          .qcmLetter { width: 22px; height: 22px; font-size: 11px; margin-bottom: 5px; }
          .qcmText { font-size: 12px; }
          .qcmFeedback { margin-top: 8px; padding: 9px; border-radius: 12px; font-size: 12px; }
          .actions { gap: 5px; margin-top: 6px; }
          .btn { padding: 8px 4px; border-radius: 10px; font-size: 10.5px; min-height: 34px; }
          .bottomActions { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
          .bottomActions .btn { width: 100%; min-width: 0; }
        }
      `}</style>

      <main className="container">
        <header className="header">
          <h1 className="title">Inchalla Marbouha</h1>
          <p className="subtitle">Révision pour l'entretien de naturalisation</p>
        </header>

        <div className="modebar">
          <button className={`modeBtn ${mode === "revision" ? "active" : ""}`} onClick={() => switchMode("revision")}>
            📖 Révision
          </button>
          <button className={`modeBtn ${mode === "quiz" ? "active" : ""}`} onClick={() => switchMode("quiz")}>
            🎯 Quiz
          </button>
          <button className={`modeBtn ${mode === "qcm" ? "active" : ""}`} onClick={() => switchMode("qcm")}>
            ✅ QCM dédié
          </button>
        </div>

        <div className="categoryArea">
          <select className="categorySelect" value={category} onChange={(e) => chooseCategory(e.target.value)}>
            {categories.map((cat) => {
              const count =
                cat === "Toutes"
                  ? totalCount
                  : cat === "À revoir"
                    ? review.filter((id) => activeList.some((q) => q.id === id)).length
                    : activeList.filter((q) => q.cat === cat).length;
              return (
                <option key={cat} value={cat}>
                  {cat} ({count})
                </option>
              );
            })}
          </select>
        </div>

        <div className="searchArea">
          <input
            className="searchInput"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="🔎 Rechercher un mot-clé : République, impôts, laïcité, président..."
          />
          {hasSearch && <button className="clearBtn" onClick={clearSearch}>✕</button>}
        </div>

        {hasSearch && (
          <div className="searchInfo">
            {filtered.length} résultat{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""} pour “{search}”
          </div>
        )}

        {!current ? (
          <div className="card">
            <h2>Aucune carte trouvée.</h2>
            <p className="hint">Essayez un autre mot-clé ou changez de catégorie.</p>
          </div>
        ) : (
          <>
            <div className="meta">
              <span>Question {index + 1} / {filtered.length}</span>
              <span className="progress">{progress}% mémorisé</span>
              <span>Total mode : {totalCount}</span>
            </div>

            <section className="card" onClick={() => mode === "quiz" && setShowAnswer((v) => !v)}>
              <div className="badge">
                <HighlightText text={current.cat.toUpperCase()} search={search} />
              </div>

              <h2 className="question">
                <HighlightText text={current.q} search={search} />
              </h2>

              {mode === "qcm" ? (
                <div className="qcmBox">
                  <p className="qcmInstruction">Choisissez une réponse. La correction s'affiche directement.</p>

                  <div className="qcmChoices">
                    {current.options.map((option, choiceIndex) => {
                      const isSelected = selectedChoice === choiceIndex;
                      const isCorrectChoice = current.correctIndex === choiceIndex;
                      const choiceClass = [
                        "qcmChoice",
                        qcmAnswered ? "disabledChoice" : "",
                        qcmAnswered && isCorrectChoice ? "correctChoice" : "",
                        qcmAnswered && isSelected && !isCorrectChoice ? "wrongChoice" : "",
                      ].join(" ");

                      return (
                        <button
                          key={`${current.id}-${choiceIndex}`}
                          className={choiceClass}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQcmChoice(choiceIndex);
                          }}
                        >
                          <span className="qcmLetter">{String.fromCharCode(65 + choiceIndex)}</span>
                          <span className="qcmText">
                            <HighlightText text={option} search={search} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {qcmAnswered && (
                    <div className={`qcmFeedback ${selectedChoice === current.correctIndex ? "successFeedback" : "errorFeedback"}`}>
                      {selectedChoice === current.correctIndex
                        ? "✅ Bonne réponse ! Question marquée comme mémorisée."
                        : "❌ Mauvaise réponse. Question ajoutée à À revoir."}
                      <div className="qcmCorrection">Correction : {current.correction}</div>
                    </div>
                  )}
                </div>
              ) : showAnswer ? (
                <div className="answerBox">
                  <h3 className="answerTitle">Réponse modèle</h3>
                  <p className="answer">
                    <HighlightText text={current.r} search={search} />
                  </p>
                  {current.astuce && (
                    <div className="tip">
                      Astuce : <HighlightText text={current.astuce} search={search} />
                    </div>
                  )}
                </div>
              ) : (
                <p className="hint">☝️ Cliquez pour voir la réponse</p>
              )}
            </section>

            <div className="actions">
              <button className="btn" onClick={goPrev}>← Précédent</button>
              <button className="btn red" onClick={markReview}>↻ À revoir</button>
              <button className="btn green" onClick={markKnown}>✓ Mémorisé</button>
              <button className="btn" onClick={goNext}>Suivant →</button>
            </div>

            <div className="bottomActions">
              <button className="btn" onClick={shuffleCurrentMode}>🔀 Mélanger ce mode</button>
              <button className="btn" onClick={resetProgress}>🧹 Réinitialiser la progression</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
