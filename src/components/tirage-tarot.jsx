import React, { useState, useEffect } from "react";
import jeu_de_carte from "../../data/tarot-zodiac.json";
import "../styles/tirage-tarot.css";

export default function TarotDraw() {
  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);

  useEffect(() => {
    const shuffledDeck = [...jeu_de_carte.tarot_cards]
      .sort(() => 0.5 - Math.random())
      .map(card => ({ ...card, reversed: Math.random() < 0.5 })); 
    setDeck(shuffledDeck);
  }, []);

  // Fonction pour tirer une carte
  const drawCard = (index) => {
    if (drawnCards.length >= 3) return;
    const selectedCard = deck[index];
    setDrawnCards([...drawnCards, selectedCard]);
    setDeck(deck.filter((_, i) => i !== index)); // Retire la carte du deck
  };

  return (
    <div className="tarot-container">
      <h1 className="tarot-title">Tirage de Tarot</h1>
      <div className="tarot-deck">
        {deck.map((_, index) => (
          <button key={index} onClick={() => drawCard(index)} className="tarot-card-hidden">
            ?
          </button>
        ))}
      </div>
      {drawnCards.length > 0 && (
        <div className="tarot-results">
          {drawnCards.map((card, index) => (
            <div key={index} className="tarot-card-revealed">
              {index === 0 ? "Passé :" : index === 1 ? "Présent :" : "Futur :"}
              <p className="tarot-card-name">{card.name} {card.reversed ? "(Inversé)" : ""}</p>
              <p className="tarot-card-meaning">
                {card.reversed ? card.reversed_meaning : card.upright_meaning}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

