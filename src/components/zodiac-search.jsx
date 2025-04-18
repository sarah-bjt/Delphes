import { useState } from "react";
import "../styles/gallerie.css";
import ZodiacCard from "./zodiac-card.jsx";
import zodiacData from "../../data/tarot-zodiac.json";

export default function ZodiacSearch() {
  const [selectedElements, setSelectedElements] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedElements((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const filteredSigns = selectedElements.length === 0
    ? []
    : zodiacData.zodiac_signs.filter(sign => 
        selectedElements.includes(sign.element)
      );

  return (
    <div>
      <h1>Les signes astrologiques par types</h1>
      
      <fieldset>
        <legend>Choisis un ou plusieurs types:</legend>

        <div>
          <input
            type="checkbox"
            id="Feu"
            value="Feu"
            checked={selectedElements.includes("Feu")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Feu">Feu</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="Eau"
            value="Eau"
            checked={selectedElements.includes("Eau")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Eau">Eau</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="Air"
            value="Air"
            checked={selectedElements.includes("Air")}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="Air">Air</label>
        </div>

        <div>
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

      <div id="gallerie">
        {filteredSigns.map((sign) => (
          <ZodiacCard
            key={sign.id}
            name={sign.name}
            start_date={sign.start_date}
            end_date={sign.end_date}
            element={sign.element}
            traits={sign.traits}
          />
        ))}
      </div>
    </div>
  );
}