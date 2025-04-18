import { useState } from "react";
import TarotCard from "./tarot-card.jsx";
import tarotData from "../../data/tarot-zodiac.json";
import "../styles/gallerie.css";

export default function TarotSearch() {
  const [selectedArcana, setSelectedArcana] = useState("");
  const [selectedSuites, setSelectedSuites] = useState([]);

  const handleArcanaChange = (event) => {
    setSelectedArcana(event.target.value);
  };

  const handleSuiteChange = (event) => {
    const value = event.target.value;
    setSelectedSuites((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const filteredCards = tarotData.tarot_cards.filter(card => {
    if (selectedArcana === "") {
      return false;
    }
    
    const matchesArcana = card.arcana === selectedArcana;
    
    const matchesSuite = 
      selectedSuites.length === 0 || 
      (card.arcana === "Mineur" && selectedSuites.includes(card.suite));
    
    return matchesArcana && (card.arcana === "Majeur" || matchesSuite);
  });

  const uniqueSuites = [...new Set(
    tarotData.tarot_cards
      .filter(card => card.arcana === "Mineur")
      .map(card => card.suite)
  )];

  return (
    <div>
      <h1>Recherche de cartes de tarot</h1>
      
      <div className="filters">
        <fieldset>
          <legend>Choisissez par arcane:</legend>
          <div>
            <select value={selectedArcana} onChange={handleArcanaChange}>
              <option value="">-- Choisir --</option>
              <option value="Majeur">Majeur</option>
              <option value="Mineur">Mineur</option>
            </select>
          </div>
        </fieldset>

        {selectedArcana === "Mineur" && (
          <fieldset>
            <legend>Choisissez par suite:</legend>
            {uniqueSuites.map((suite) => (
              <div key={suite}>
                <input
                  type="checkbox"
                  id={suite}
                  value={suite}
                  checked={selectedSuites.includes(suite)}
                  onChange={handleSuiteChange}
                />
                <label htmlFor={suite}>{suite}</label>
              </div>
            ))}
          </fieldset>
        )}
      </div>

      <div id="gallerie">
        {filteredCards.map((card) => (
          <TarotCard
            key={card.name}
            name={card.name}
            // arcana={card.arcana}
            // suite={card.suite}
            upright_meaning={card.upright_meaning}
            reversed_meaning={card.reversed_meaning}
          />
        ))}
      </div>
      
      {selectedArcana && filteredCards.length === 0 && (
        <p>Aucune carte ne correspond à votre sélection.</p>
      )}
    </div>
  );
}