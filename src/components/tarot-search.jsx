import { useState } from "react";
import TarotCard from "./tarot-card.jsx";
import tarotData from "../../data/tarot-zodiac.json";
import "../styles/gallerie.css";

export default function TarotSearch() {
  const [selectedArcana, setSelectedArcana] = useState([]);
  const [selectedSuites, setSelectedSuites] = useState([]);

  const handleArcanaChange = (event) => {
    const value = event.target.value;
    setSelectedArcana((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
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
    // Si aucun filtre n'est sélectionné, ne rien afficher
    if (selectedArcana.length === 0 && selectedSuites.length === 0) {
      return false;
    }
    
    // Filtrage par arcane
    const matchesArcana = selectedArcana.length === 0 || selectedArcana.includes(card.arcana);
    
    // Filtrage par suite (uniquement pour les arcanes mineurs)
    const matchesSuite = 
      selectedSuites.length === 0 || 
      (card.arcana === "Mineur" && selectedSuites.includes(card.suite));
    
    // Pour les arcanes majeurs, on ignore le filtrage par suite
    if (card.arcana === "Majeur") {
      return matchesArcana;
    }
    
    // Pour les arcanes mineurs, on applique les deux filtres
    return matchesArcana && matchesSuite;
  });

  // Obtenir les suites uniques pour les options de filtrage
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
            <input
              type="checkbox"
              id="Majeur"
              value="Majeur"
              checked={selectedArcana.includes("Majeur")}
              onChange={handleArcanaChange}
            />
            <label htmlFor="Majeur">Arcanes Majeurs</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Mineur"
              value="Mineur"
              checked={selectedArcana.includes("Mineur")}
              onChange={handleArcanaChange}
            />
            <label htmlFor="Mineur">Arcanes Mineurs</label>
          </div>
        </fieldset>

        {selectedArcana.includes("Mineur") && (
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

      {(selectedArcana.length > 0 || selectedSuites.length > 0) && (
        <div className="selection-summary">
          {selectedArcana.length > 0 && (
            <p>Arcanes sélectionnés: {selectedArcana.join(", ")}</p>
          )}
          {selectedSuites.length > 0 && (
            <p>Suites sélectionnées: {selectedSuites.join(", ")}</p>
          )}
        </div>
      )}

      <div id="gallerie">
        {filteredCards.map((card) => (
          <TarotCard
            key={card.name}
            name={card.name}
            arcana={card.arcana}
            suite={card.suite}
            upright_meaning={card.upright_meaning}
            reversed_meaning={card.reversed_meaning}
          />
        ))}
      </div>
      
      {selectedArcana.length > 0 && filteredCards.length === 0 && (
        <p>Aucune carte ne correspond à votre sélection.</p>
      )}
    </div>
  );
}