import React, { useState, useEffect } from "react";

export default function AstroCard({ sign }) {
  const [astroData, setAstroData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHoroscope = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://kayoo123.github.io/astroo-api/hebdomadaire.json");
      if (!response.ok) {
        throw new Error("Erreur lors du chargement des données.");
      }
      const data = await response.json();

      // Vérification et extraction des données
      if (data[sign]) {
        setAstroData(data[sign].slice(1)); // Exclure la première valeur vide
      } else {
        throw new Error("signe non trouvé dans l'API.");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHoroscope();
  }, [sign]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div id="astro-card">
      <h3>Prévisions pour {sign}</h3>
      {astroData.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );
}
