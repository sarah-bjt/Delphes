import { useState } from "react";
import "../styles/signe-gallerie.css";
import SignCard from "./sign-card.jsx";
import signes_astro from "../../data/tarot-zodiac.json";

export default function SignSearch() {
  const [selectedElements, setSelectedElements] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedElements((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  // Filtrer les signes en fonction des éléments sélectionnés
  const filteredSigns = selectedElements.length === 0
    ? [] // Afficher tous les signes si aucun élément n'est sélectionné
    : signes_astro.zodiac_signs.filter(sign => 
        selectedElements.includes(sign.element)
      );

  return (
    <div className="sign-search-container">
      <h1>Les signes astrologiques par types</h1>
      
      <fieldset className="element-filters">
        <legend>Choisis un ou plusieurs types:</legend>

        <div className="filter-option">
          <input
            type="checkbox"
            id="Feu"
            value="Feu"
            checked={selectedElements.includes("Feu")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Feu">Feu</label>
        </div>

        <div className="filter-option">
          <input
            type="checkbox"
            id="Eau"
            value="Eau"
            checked={selectedElements.includes("Eau")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Eau">Eau</label>
        </div>

        <div className="filter-option">
          <input
            type="checkbox"
            id="Air"
            value="Air"
            checked={selectedElements.includes("Air")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Air">Air</label>
        </div>

        <div className="filter-option">
          <input
            type="checkbox"
            id="Terre"
            value="Terre"
            checked={selectedElements.includes("Terre")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Terre">Terre</label>
        </div>
      </fieldset>

      {selectedElements.length > 0 && (
        <p className="filter-summary">Éléments sélectionnés : {selectedElements.join(", ")}</p>
      )}

      <div id="signe-gallerie">
        {filteredSigns.map((sign) => (
          <SignCard
            key={sign.id}
            name={sign.name}
            start_date={sign.start_date}
            end_date={sign.end_date}
            element={sign.element}
            traits={sign.traits}
          />
        ))}
      </div>
      
      {filteredSigns.length === 0 && (
        <p className="no-results">Aucun signe ne correspond à votre sélection.</p>
      )}
    </div>
  );
}