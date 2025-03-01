// import "./SigneGallerie.css";
import TarotCard from "./TarotCard.jsx";
import jeu_de_carte from "../../data/tarot/cartes_tarot.json";

export default function TarotGallerie() {
  return (
    <div id="signe-gallerie">
      {jeu_de_carte.tarot_cards.map((carte) => (
        <TarotCard
        key={carte.name}
          name={carte.name}
          arcana={carte.arcana}
          upright_meaning={carte.upright_meaning}
          reversed_meaning={carte.reversed_meaning}
        />
      ))}
    </div>
  );
}
