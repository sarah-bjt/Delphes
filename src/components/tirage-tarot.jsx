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

{/* <div className="mt-6">
//         {drawnCards.length > 0 && <p className="font-bold">Cartes révélées :</p>}
//         {drawnCards.map((card, index) => (
//           <p key={index}>
//             <strong>
//               {index === 0 ? "Passé :" : index === 1 ? "Présent :" : "Futur :"}
//             </strong> {card.name} - {card.upright_meaning}
//           </p>
//         ))}
//       </div> */}

// ----------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import jeu_de_carte from "../../data/tarot/cartes_tarot.json";

// export default function TarotDraw() {
//   const [deck, setDeck] = useState([]);
//   const [drawnCards, setDrawnCards] = useState([]);

//   // Mélanger le jeu au chargement initial
//   useEffect(() => {
//     const shuffledDeck = [...jeu_de_carte.tarot_cards]
//       .sort(() => 0.5 - Math.random()) // Mélange aléatoire
//       .map((card, index) => ({ ...card, id: index })); // Ajoute un identifiant unique

//     setDeck(shuffledDeck);
//   }, []); // Ne s'exécute qu'une seule fois au montage

//   // Sélectionner une carte
//   const revealCard = (id) => {
//     if (drawnCards.length >= 3) return; // Limite de 3 cartes atteinte

//     const chosenCard = deck.find(card => card.id === id);
//     if (chosenCard) {
//       setDrawnCards([...drawnCards, chosenCard]); // Ajoute la carte tirée
//       setDeck(deck.filter(card => card.id !== id)); // Retire la carte du deck
//     }
//   };

//   return (
//     <div className="p-4 text-center">
//       <h1 className="text-xl font-bold">Tirage de Tarot</h1>

//       {/* Affichage du deck anonymisé */}
//       <div className="mt-6 flex flex-wrap justify-center gap-2">
//         {deck.length > 0 && drawnCards.length < 3 &&
//           deck.map(card => (
//             <button 
//               key={card.id} 
//               onClick={() => revealCard(card.id)} 
//               className="w-20 h-32 bg-gray-700 text-white rounded shadow"
//             >
//               ?
//             </button>
//           ))
//         }
//       </div>

//       {/* Affichage des cartes révélées */}
//       <div className="mt-6">
//         {drawnCards.length > 0 && <p className="font-bold">Cartes révélées :</p>}
//         {drawnCards.map((card, index) => (
//           <p key={index}>
//             <strong>
//               {index === 0 ? "Passé :" : index === 1 ? "Présent :" : "Futur :"}
//             </strong> {card.name} - {card.upright_meaning}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }


// -------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import jeu_de_carte from "../../data/tarot/cartes_tarot.json";

// export default function TarotDraw() {
//   const [deck, setDeck] = useState([]);
//   const [drawnCards, setDrawnCards] = useState([]);

//   // Mélanger et anonymiser le jeu au début
//   const initializeDeck = () => {
//     const shuffledDeck = [...jeu_de_carte.tarot_cards]
//       .sort(() => 0.5 - Math.random()) // Mélange aléatoire
//       .map((card, index) => ({ ...card, id: index, revealed: false })); // Identifiant unique

//     setDeck(shuffledDeck);
//     setDrawnCards([]); // Réinitialiser le tirage
//   };

//   // Révéler une carte choisie par l'utilisateur
//   const revealCard = (id) => {
//     if (drawnCards.length >= 3) return; // Limite de 3 cartes atteinte

//     const chosenCard = deck.find(card => card.id === id);
//     if (chosenCard) {
//       setDrawnCards([...drawnCards, chosenCard]); // Ajoute la carte tirée
//       setDeck(deck.filter(card => card.id !== id)); // Retire la carte du deck
//     }
//   };

//   return (
//     <div className="p-4 text-center">
//       <h1 className="text-xl font-bold">Tirage de Tarot</h1>

//       {/* Bouton pour mélanger et commencer un nouveau tirage */}
//       <button onClick={initializeDeck} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
//         Mélanger le jeu
//       </button>

//       {/* Affichage du deck anonymisé */}
//       <div className="mt-6 flex flex-wrap justify-center gap-2">
//         {deck.length > 0 && drawnCards.length < 3 &&
//           deck.map(card => (
//             <button 
//               key={card.id} 
//               onClick={() => revealCard(card.id)} 
//               className="w-20 h-32 bg-gray-700 text-white rounded shadow"
//             >
//               ?
//             </button>
//           ))
//         }
//       </div>

//       {/* Affichage des cartes révélées */}
//       <div className="mt-6">
//         {drawnCards.length > 0 && <p className="font-bold">Cartes révélées :</p>}
//         {drawnCards.map((card, index) => (
//           <p key={index}>
//             <strong>
//               {index === 0 ? "Passé :" : index === 1 ? "Présent :" : "Futur :"}
//             </strong> {card.name} - {card.upright_meaning}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }



// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import jeu_de_carte from "../../data/tarot/cartes_tarot.json";

// export default function TarotDraw() {
//   const [deck, setDeck] = useState([]);
//   const [drawnCards, setDrawnCards] = useState([]);
  
//   // Mélanger et anonymiser le jeu au début
//   const initializeDeck = () => {
//     const shuffledDeck = [...jeu_de_carte.tarot_cards]
//       .sort(() => 0.5 - Math.random()) // Mélange aléatoire
//       .map(card => ({ ...card, revealed: false })); // Ajouter un état "anonymisé"
    
//     setDeck(shuffledDeck);
//     setDrawnCards([]); // Réinitialiser les cartes piochées
//   };

//   // Tirer une carte au hasard
//   const drawCard = () => {
//     if (deck.length === 0 || drawnCards.length >= 3) return; // Empêche de tirer plus de 3 cartes

//     const nextCard = deck[0]; // Prend la première carte du deck
//     setDrawnCards([...drawnCards, nextCard]); // Ajoute à la liste des cartes révélées
//     setDeck(deck.slice(1)); // Retire la carte du deck
//   };

//   return (
//     <div className="p-4 text-center">
//       <h1 className="text-xl font-bold">Tirage de Tarot</h1>

//       {/* Bouton pour mélanger et commencer un nouveau tirage */}
//       <button onClick={initializeDeck} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">
//         Mélanger le jeu
//       </button>

//       {/* Bouton pour piocher une carte */}
//       {deck.length > 0 && drawnCards.length < 3 && (
//         <button onClick={drawCard} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded ml-2">
//           Piocher une carte
//         </button>
//       )}

//       {/* Affichage des cartes tirées */}
//       <div className="mt-6">
//         {drawnCards.length > 0 && <p className="font-bold">Cartes révélées :</p>}
//         {drawnCards.map((card, index) => (
//           <p key={index}>
//             <strong>
//               {index === 0 ? "Passé :" : index === 1 ? "Présent :" : "Futur :"}
//             </strong> {card.name} - {card.upright_meaning}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }
