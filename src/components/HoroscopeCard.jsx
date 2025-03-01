import React, { useState, useEffect } from "react";

export default function AstroCard() {
  const [astroData, setAstroData] = useState(null); // État pour les données
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour les erreurs

  useEffect(() => {
    // Récupérer les données depuis l'API
    fetch("https://kayoo123.github.io/astroo-api/hebdomadaire.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données.");
        }
        return response.json();
      })
      .then((data) => {
        setAstroData(data.vierge[2]); // Extraire la donnée spécifique
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Charger les données une seule fois

  // Affichage du contenu
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div id="astro-card">
      <h3>Prévisions pour la Vierge</h3>
      <p>{astroData}</p>
    </div>
  );
}
