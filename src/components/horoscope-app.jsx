import React,{ useState, useEffect } from "react";
import AstroCard from "./horoscope";
import signesData from "../../data/tarot-zodiac.json";

export default function HoroscopeApp() {
  const [dateNaissance, setDateNaissance] = useState("");
  const [signe, setSigne] = useState("");

  // Fonction pour enlever les accents
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

  // Convertit une date "21 mars" en "03-21"
  const convertirDate = (dateStr) => {
    const moisMap = {
      "janvier": "01", "février": "02", "mars": "03", "avril": "04", "mai": "05",
      "juin": "06", "juillet": "07", "août": "08", "septembre": "09",
      "octobre": "10", "novembre": "11", "décembre": "12"
    };
    const [jour, mois] = dateStr.split(" ");
    return `${moisMap[mois]}-${jour.padStart(2, "0")}`;
  };


  // Trouve le signe astrologique
  const getSigneAstro = (date) => {
    if (!date) return null;
    
    const moisJour = date.slice(5); // Garde MM-JJ (ex: "03-21")
    console.log("Date formatée:", moisJour); // Debug

    const signeTrouvé = signesData.zodiac_signs.find(signe => {
      const debut = convertirDate(signe.start_date);
      const fin = convertirDate(signe.end_date);
      console.log(`Vérification : ${signe.name} (${debut} - ${fin})`);
      return (moisJour >= debut && moisJour <= fin);
    });

    if (!signeTrouvé) {
      console.log("Aucun signe trouvé !");
      return null;
    }

    const signeSansAccent = removeAccents(signeTrouvé.name.toLowerCase());
    console.log("Signe trouvé:", signeSansAccent);
    return signeSansAccent;
  };

  // Soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    const signeTrouvé = getSigneAstro(dateNaissance);
    setSigne(signeTrouvé);
  };

  useEffect(() => {
    const savedDate = localStorage.getItem("dateNaissance");
    if (savedDate) {
      setDateNaissance(savedDate);
      const signeTrouvé = getSigneAstro(savedDate);
      setSigne(signeTrouvé);
    }
  }, []);

  useEffect(() => {
    if (dateNaissance) {
      console.log("date de naissance : ", dateNaissance);
      localStorage.setItem("dateNaissance", dateNaissance);
    }
  }, [dateNaissance]);

  return (
    <div>
      <h1>Découvrez votre Horoscope</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Entrez votre date de naissance :
          <input
            type="date"
            value={dateNaissance}
            onChange={(e) => setDateNaissance(e.target.value)}
            required
          />
        </label>
        <button type="submit">Voir mon horoscope</button>
      </form>

      {signe ? (
        <>
          <h2>Votre signe astrologique est : {signe}</h2>
          <AstroCard signe={signe} />
        </>
      ) : (
        <p>Aucun signe trouvé pour cette date.</p>
      )}
    </div>
  );
}
