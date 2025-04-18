import React, { useEffect, useState } from "react";
import "../styles/tarot-draw.css"; // Tu peux en créer un autre si besoin

export default function TarotHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("tarotHistory")) || [];
    setHistory(savedHistory);
  }, []);

  return (
    <div className="tarot-history-container">
      <h1 className="tarot-title">Historique des Tirages</h1>
      {history.length === 0 ? (
        <p>Aucun tirage enregistré pour l'instant.</p>
      ) : (
        history.map((session, index) => (
          <div key={index} className="tarot-history-session">
            <h3>{session.date}</h3>
            <div className="tarot-results">
              {session.cards.map((card, i) => (
                <div key={i} className="tarot-card-revealed">
                  <div>{i === 0 ? "Passé :" : i === 1 ? "Présent :" : "Futur :"}</div>
                  <div className="tarot-card-name">{card.name} {card.reversed ? "(Inversé)" : ""}</div>
                  <div className="tarot-card-meaning">
                    {card.reversed ? card.reversed_meaning : card.upright_meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
      <button onClick={() => {
        localStorage.removeItem("tarotHistory");
        setHistory([]);
      }}>
        Réinitialiser l'historique
      </button>
    </div>
  );
}
