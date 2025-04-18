import React,{ useState, useEffect,useMemo } from "react";
import AstroCard from "./horoscope.jsx";
import zodiacData from "../../data/tarot-zodiac.json";


export default function HoroscopeApp() {
  const [birthDate, setBirthDate] = useState("");
  const [signName, setSignName] = useState("");

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
    
    const monthDate = date.slice(5); //take off year
    console.log("Date formatée:", monthDate);
    
    // capricorne special case
    if ((monthDate >= "12-22" && monthDate <= "12-31") || 
        (monthDate >= "01-01" && monthDate <= "01-19")) {
      console.log("signe trouvé: capricorne");
      return zodiacData.zodiac_signs.find(sign => 
        removeAccents(sign.name.toLowerCase()) === "capricorne"
      );
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
    
    console.log("signe trouvé:", removeAccents(signFound.name.toLowerCase()));
    return signFound;
  };

  
  const signInfo = useMemo(() => {
    if (!birthDate) return { sign: "", name: "" };
    
    const signFound = getZodiacSign(birthDate);
    if (!signFound) return { sign: "", name: "" };
    
    return {
      sign: removeAccents(signFound.name.toLowerCase()),
      name: signFound.name
    };
  }, [birthDate]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setSignName(signInfo.name);
  };
  
  useEffect(() => {
    const savedDate = localStorage.getItem("birthDate");
    if (savedDate) {
      setBirthDate(savedDate);
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
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Voir mon horoscope</button>
      </form>

      {signInfo.sign ? (
        <AstroCard sign={signInfo.sign} signName={signInfo.name} />
      ) : (
        <p>Aucun signe trouvé pour cette date.</p>
      )}
    </div>
  );
}