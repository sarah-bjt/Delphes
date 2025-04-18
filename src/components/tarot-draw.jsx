import React, { useState, useEffect } from "react";
import tarotDeck from "../../data/tarot-zodiac.json";
import "../styles/tarot-draw.css";

import { Link } from 'react-router-dom'

export default function TarotDraw() {
  const [deck, setDeck] = useState([]);
  const [drawnCards, setDrawnCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    const shuffledDeck = [...tarotDeck.tarot_cards]
      .sort(() => 0.5 - Math.random())
      .map(card => ({ ...card, reversed: Math.random() < 0.5 })); 
    setDeck(shuffledDeck);
  }, []);

  // Fonction pour tirer une carte
  const drawCard = (index) => {
    if (drawnCards.length >= 3) return;
    
    const selectedCard = deck[index];
    const newDrawnCards = [...drawnCards, selectedCard];
    setDrawnCards(newDrawnCards);
    
    // Ajouter cette carte à la liste des cartes retournées
    setFlippedCards([...flippedCards, index]);
  };

  const redoDraw = () => {
    const reshuffledDeck = [...tarotDeck.tarot_cards]
      .sort(() => 0.5 - Math.random())
      .map(card => ({ ...card, reversed: Math.random() < 0.5 }));
  
    setDeck(reshuffledDeck);
    setDrawnCards([]);
    setFlippedCards([]);
  };

  useEffect(() => {
    if (drawnCards.length === 3) {
      const currentDraw = {
        date: new Date().toLocaleString(),
        cards: drawnCards
      };
  
      const history = JSON.parse(localStorage.getItem("tarotHistory")) || [];
      history.unshift(currentDraw); // ajoute en début de liste
      localStorage.setItem("tarotHistory", JSON.stringify(history));
    }
  }, [drawnCards]);
  

  return (
    <div className="tarot-container">
      <h1>Tirage de Tarot</h1>
      <Link to="/historique_tirage"><button>Voir l'historique des tirages</button></Link>
      {drawnCards.length > 0 && (
        <button className="redo-button" onClick={redoDraw}>
          Refaire un tirage
        </button>
      )}
      
      <div className="tarot-deck">
        {deck.map((card, index) => {
          const isFlipped = flippedCards.includes(index);
          
          return (
            <div 
              key={index}
              className={`tarot-card ${isFlipped ? 'flipped' : ''}`}
              onClick={() => !isFlipped && drawnCards.length < 3 && drawCard(index)}
            >
              <div className="tarot-card-inner">
                <div className="tarot-card-front">
                  ?
                </div>
                <div className="tarot-card-back">
                  <div className="tarot-card-name">{card.name}</div>
                  {card.reversed && <small>(Inversé)</small>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {drawnCards.length > 0 && (
        <div className="tarot-results">
          {drawnCards.map((card, index) => (
            <div key={index} className="tarot-card-revealed">
              <div>{index === 0 ? "Passé :" : index === 1 ? "Présent :" : "Futur :"}</div>
              <div className="tarot-card-name">{card.name} {card.reversed ? "(Inversé)" : ""}</div>
              <div className="tarot-card-meaning">
                {card.reversed ? card.reversed_meaning : card.upright_meaning}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
