import React,{ useState, useEffect } from "react";
import AstroCard from "./horoscope.jsx";
import zodiacData from "../../data/tarot-zodiac.json";

export default function HoroscopeApp() {
  const [birthDate, setbirthDate] = useState("");
  const [sign, setsign] = useState("");

// take off accents
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

// convert date in numbers
  const convertDate = (dateStr) => {
    const monthMap = {
      "janvier": "01", "février": "02", "mars": "03", "avril": "04", "mai": "05",
      "juin": "06", "juillet": "07", "août": "08", "septembre": "09",
      "octobre": "10", "novembre": "11", "décembre": "12"
    };
    const [day, month] = dateStr.split(" ");
    return `${monthMap[month]}-${day.padStart(2, "0")}`;
  };

// find zodiac sign
const getZodiacSign = (date) => {
  if (!date) return null;
  
  const monthDate = date.slice(5); // Garde MM-JJ (ex: "03-21")
  console.log("Date formatée:", monthDate);
  
  // Cas spécial pour le Capricorne (22 décembre - 19 janvier)
  if ((monthDate >= "12-22" && monthDate <= "12-31") || 
      (monthDate >= "01-01" && monthDate <= "01-19")) {
        console.log("signe trouvé: capricorne");
    return "capricorne";
  }
  
  const signFound = zodiacData.zodiac_signs.find(sign => {
    if (removeAccents(sign.name.toLowerCase()) === "capricorne") {
      return false;
    }
    
    const start = convertDate(sign.start_date);
    const end = convertDate(sign.end_date);
    return (monthDate >= start && monthDate <= end);
  });

  if (!signFound) {
    console.log("Aucun signe trouvé !");
    return null;
  }

  const signNoAccent = removeAccents(signFound.name.toLowerCase());
  console.log("signe trouvé:", signNoAccent);
  return signNoAccent;
};


  const handleSubmit = (event) => {
    event.preventDefault();
    const signFound = getZodiacSign(birthDate);
    setsign(signFound);
  };

  useEffect(() => {
    const savedDate = localStorage.getItem("birthDate");
    if (savedDate) {
      setbirthDate(savedDate);
      const signFound = getZodiacSign(savedDate);
      setsign(signFound);
    }
  }, []);

  useEffect(() => {
    if (birthDate) {
      console.log("date de naissance : ", birthDate);
      localStorage.setItem("birthDate", birthDate);
    }
  }, [birthDate]);

  return (
    <div>
      <h1>Découvrez votre Horoscope</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Entrez votre date de naissance :
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setbirthDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Voir mon horoscope</button>
      </form>

      {sign ? (
        <>
          <h2>Votre signe astrologique est : {sign}</h2>
          <AstroCard sign={sign} />
        </>
      ) : (
        <p>Aucun signe trouvé pour cette date.</p>
      )}
    </div>
  );
}
