import React, { useMemo, useState } from "react";

// --- STYLE SIMPLE (remplace Tailwind) ---
const styles = {
  container: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1e293b, #020617)",
    color: "white",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid #334155",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center"
  },
  button: {
    padding: "10px 15px",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

const questions = [
  { id:1, cat:"Questions personnelles", q:"Pourquoi souhaitez-vous devenir français(e) ?", r:"Je souhaite devenir français(e) pour m’intégrer pleinement dans la société, partager les valeurs de la République et participer à la vie citoyenne.", astuce:"Intégration + valeurs" },
  { id:2, cat:"Questions personnelles", q:"Depuis combien de temps vivez-vous en France ?", r:"Je vis en France depuis plusieurs années et cela m’a permis de mieux connaître le pays et de m’intégrer.", astuce:"Durée + intégration" }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(true);

  const current = questions[index];

  return (
    <div style={styles.container}>
      <h1 style={{textAlign:"center"}}>Entretien JIB</h1>

      <div style={{marginTop:"30px"}}>
        <div style={styles.card}>
          <h2>{current.q}</h2>

          {showAnswer && (
            <div style={{marginTop:"20px"}}>
              <strong>Réponse :</strong>
              <p>{current.r}</p>
            </div>
          )}
        </div>

        <div style={{marginTop:"20px", display:"flex", gap:"10px"}}>
          <button style={styles.button} onClick={()=>setIndex(i=>Math.max(i-1,0))}>Prev</button>
          <button style={styles.button} onClick={()=>setShowAnswer(v=>!v)}>Afficher réponse</button>
          <button style={styles.button} onClick={()=>setIndex(i=>Math.min(i+1,questions.length-1))}>Next</button>
        </div>
      </div>
    </div>
  );
}