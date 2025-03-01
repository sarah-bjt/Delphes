import "./SigneGallerie.css";
import SignCard from "./SigneCard.jsx";
import signes_astro from "../../data/astro/signes_astro.json";

export default function SigneGallerie() {
  return (
    <div id="signe-gallerie">
      {signes_astro.zodiac_signs.map((sign) => (
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
  );
}
