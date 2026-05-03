import React, { useMemo, useState } from "react";

const questions = [
  {
    id: 1,
    cat: "Questions personnelles",
    q: "Pourquoi souhaitez-vous devenir français(e) ?",
    r: `Je souhaite devenir français car la France représente aujourd’hui le centre de ma vie personnelle et professionnelle.

La France m’a accueilli et m’a permis de m’épanouir sur le plan professionnel et personnel. J’y vis de manière continue depuis 2017, après une première expérience professionnelle en 2016, et j’y ai construit un parcours solide dans le domaine de la data et de l’IA.

J’ai débuté en tant que consultant senior, puis j’ai évolué vers des fonctions à plus forte responsabilité jusqu’à occuper actuellement un poste de directeur des opérations. Mon engagement s’est également concrétisé par un investissement dans mon entreprise, dont je suis aujourd’hui associé, ce qui témoigne de ma volonté de m’inscrire durablement dans l’économie française.

Sur le plan personnel, je suis marié depuis 2018 et je partage ma vie en France avec mon épouse. Nous y avons construit notre stabilité familiale et sociale, ce qui renforce profondément mon attachement au pays.

Je me reconnais pleinement dans les valeurs de la République française, notamment le mérite, l’égalité des chances et la responsabilité. Obtenir la nationalité française représente pour moi une étape naturelle afin de m’engager pleinement dans la société, de participer activement à son développement et de construire mon avenir sur le long terme en France.`,
    astuce: "Intégration + valeurs",
  },
];

const allQuestions = questions;

function shuffleArray(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

export default function App() {
  const [category, setCategory] = useState("Toutes");
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState("revision");
  const [showAnswer, setShowAnswer] = useState(true);
  const [order, setOrder] = useState(allQuestions);
  const [known, setKnown] = useState([]);
  const [review, setReview] = useState([]);

  const categories = useMemo(
    () => ["Toutes", ...Array.from(new Set(allQuestions.map((q) => q.cat))), "À revoir"],
    []
  );

  const filtered = useMemo(() => {
    if (category === "À revoir") return order.filter((q) => review.includes(q.id));
    if (category === "Toutes") return order;
    return order.filter((q) => q.cat === category);
  }, [category, order, review]);

  const current = filtered[index] || filtered[0];
  const progress = Math.round((known.length / allQuestions.length) * 100);

  const resetCardVisibility = (selectedMode = mode) => {
    setShowAnswer(selectedMode === "revision");
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
    resetCardVisibility(newMode);
  };

  const chooseCategory = (cat) => {
    setCategory(cat);
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

  return (
    <div className="app">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        .app {
          min-height: 100vh;
          background: radial-gradient(circle at top, #1e293b, #020617);
          color: white;
          font-family: Arial, sans-serif;
          padding: 18px;
        }
        .container { max-width: 1120px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 16px; }
        .title { margin: 0; font-size: clamp(34px, 5vw, 56px); font-weight: 900; letter-spacing: -0.04em; }
        .subtitle { margin: 8px 0 0; color: #94a3b8; font-size: 17px; }
        .modebar { display: flex; gap: 10px; margin-bottom: 14px; }
        .modeBtn, .btn, .chip {
          border: 1px solid #334155;
          background: rgba(255,255,255,.05);
          color: white;
          cursor: pointer;
          font-weight: 800;
        }
        .modeBtn { flex: 1; padding: 13px 14px; border-radius: 16px; font-size: 15px; }
        .active { border-color: #60a5fa !important; background: rgba(37,99,235,.28) !important; color: #bfdbfe !important; }
        .categoryArea { margin-bottom: 14px; }
        .categorySelect {
          display: none;
          width: 100%;
          border: 1px solid #334155;
          background: rgba(15, 23, 42, .95);
          color: white;
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 15px;
          font-weight: 800;
          outline: none;
        }
        .chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .chip { border-radius: 999px; padding: 9px 13px; font-size: 13px; }
        .meta { display: flex; justify-content: space-between; align-items: center; color: #cbd5e1; margin-bottom: 12px; }
        .mobileLabel { display: none; }
        .progress { color: #93c5fd; font-weight: 800; }
        .card {
          min-height: 350px;
          border-radius: 24px;
          border: 1px solid #334155;
          background: linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
          box-shadow: 0 25px 70px rgba(0,0,0,.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 30px;
        }
        .badge {
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(37,99,235,.20);
          color: #93c5fd;
          font-weight: 900;
          margin-bottom: 24px;
          font-size: 13px;
        }
        .question { font-size: clamp(24px, 4vw, 38px); line-height: 1.25; max-width: 900px; margin: 0 0 24px; }
        .answerBox {
          width: 100%;
          max-width: 900px;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(34,197,94,.35);
          background: rgba(34,197,94,.08);
        }
        .answerTitle { color: #86efac; font-size: 22px; margin: 0 0 14px; }
        .answer { font-size: clamp(18px, 2.5vw, 24px); line-height: 1.45; margin: 0; white-space: pre-line; }
        .tip { margin-top: 18px; padding: 12px 16px; border-radius: 14px; border: 1px solid rgba(96,165,250,.45); background: rgba(37,99,235,.16); color: #bfdbfe; font-size: 16px; font-weight: 800; }
        .hint { color: #94a3b8; font-size: 16px; }
        .actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 18px; }
        .btn { padding: 14px 16px; border-radius: 14px; font-size: 15px; }
        .btn:hover, .chip:hover, .modeBtn:hover { background: rgba(255,255,255,.10); }
        .red { border-color: #ef4444; color: #fca5a5; }
        .green { border-color: #22c55e; color: #86efac; }
        .bottomActions { display: flex; gap: 12px; justify-content: center; margin-top: 14px; }
        .bottomActions .btn { min-width: 240px; }

        @media (max-width: 700px) {
          html, body, #root { height: 100%; overflow: hidden; }
          .app {
            height: 100dvh;
            min-height: 100dvh;
            padding: 8px;
            overflow: hidden;
          }
          .container {
            max-width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .header { margin-bottom: 6px; flex: 0 0 auto; }
          .title { font-size: 26px; letter-spacing: -0.03em; }
          .subtitle { display: none; }
          .modebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            margin-bottom: 6px;
            flex: 0 0 auto;
          }
          .modeBtn {
            padding: 8px 6px;
            border-radius: 11px;
            font-size: 12px;
          }
          .categoryArea { margin-bottom: 6px; flex: 0 0 auto; }
          .categorySelect {
            display: block;
            padding: 9px 12px;
            border-radius: 12px;
            font-size: 13px;
          }
          .chips { display: none; }
          .meta {
            font-size: 11px;
            margin-bottom: 5px;
            gap: 6px;
            flex: 0 0 auto;
          }
          .meta span:last-child { display: none; }
          .mobileLabel { display: inline; }
          .card {
            flex: 1 1 auto;
            min-height: 0;
            max-height: none;
            overflow-y: auto;
            border-radius: 16px;
            padding: 10px;
            justify-content: center;
          }
          .badge {
            font-size: 9px;
            padding: 5px 9px;
            margin-bottom: 8px;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .question {
            font-size: clamp(17px, 5.3vw, 22px);
            line-height: 1.15;
            margin-bottom: 9px;
          }
          .answerBox { padding: 10px; border-radius: 13px; }
          .answerTitle { font-size: 14px; margin-bottom: 6px; }
          .answer { font-size: clamp(14px, 4.2vw, 17px); line-height: 1.28; }
          .tip { margin-top: 8px; padding: 7px 9px; font-size: 12px; border-radius: 11px; }
          .hint { font-size: 13px; }
          .actions {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
            margin-top: 6px;
            flex: 0 0 auto;
          }
          .btn {
            padding: 8px 4px;
            border-radius: 10px;
            font-size: 10.5px;
            min-height: 34px;
          }
          .bottomActions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            margin-top: 5px;
            flex: 0 0 auto;
          }
          .bottomActions .btn { width: 100%; min-width: 0; }
        }
      `}</style>

      <main className="container">
        <header className="header">
          <h1 className="title">Entretien_JIB</h1>
          <p className="subtitle">Révision pour l’entretien de naturalisation</p>
        </header>

        <div className="modebar">
          <button
            className={`modeBtn ${mode === "revision" ? "active" : ""}`}
            onClick={() => switchMode("revision")}
          >
            📖 Mode révision
          </button>
          <button
            className={`modeBtn ${mode === "quiz" ? "active" : ""}`}
            onClick={() => switchMode("quiz")}
          >
            🎯 Mode quiz
          </button>
        </div>

        <div className="categoryArea">
          <select
            className="categorySelect"
            value={category}
            onChange={(e) => chooseCategory(e.target.value)}
          >
            {categories.map((cat) => {
              const count =
                cat === "Toutes"
                  ? allQuestions.length
                  : cat === "À revoir"
                    ? review.length
                    : allQuestions.filter((q) => q.cat === cat).length;
              return (
                <option key={cat} value={cat}>
                  {cat} ({count})
                </option>
              );
            })}
          </select>

          <div className="chips">
            {categories.map((cat) => {
              const count =
                cat === "Toutes"
                  ? allQuestions.length
                  : cat === "À revoir"
                    ? review.length
                    : allQuestions.filter((q) => q.cat === cat).length;
              return (
                <button
                  key={cat}
                  className={`chip ${category === cat ? "active" : ""}`}
                  onClick={() => chooseCategory(cat)}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {!current ? (
          <div className="card">
            <h2>Aucune carte à revoir.</h2>
          </div>
        ) : (
          <>
            <div className="meta">
              <span>
                <span className="mobileLabel">Q </span>Question {index + 1} / {filtered.length}
              </span>
              <span className="progress">{progress}% mémorisé</span>
              <span>Total : {allQuestions.length}</span>
            </div>

            <section
              className="card"
              onClick={() => mode === "quiz" && setShowAnswer((v) => !v)}
            >
              <div className="badge">{current.cat.toUpperCase()}</div>
              <h2 className="question">{current.q}</h2>

              {showAnswer ? (
                <div className="answerBox">
                  <h3 className="answerTitle">Réponse modèle</h3>
                  <p className="answer">{current.r}</p>
                  {current.astuce && <div className="tip">Astuce : {current.astuce}</div>}
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
              <button
                className="btn"
                onClick={() => {
                  setOrder(shuffleArray(allQuestions));
                  setIndex(0);
                  resetCardVisibility();
                }}
              >
                🔀 Mélanger les cartes
              </button>
              <button
                className="btn"
                onClick={() => {
                  setKnown([]);
                  setReview([]);
                  setIndex(0);
                  resetCardVisibility();
                }}
              >
                🧹 Réinitialiser la progression
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
