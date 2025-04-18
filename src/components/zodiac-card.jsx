import "../styles/card.css";

export default function ZodiacCard({ name, start_date, end_date, element, traits}) {
  return (
    <div className="card">
      <div className="description">
        <h3 className="title">{name}</h3>
        <p className="text">Du {start_date} jusqu'au {end_date}</p>
        <p className="text">Élément : {element}</p>
        <p className="text">Caractéristiques : {traits.join(", ")}</p>
      </div>
    </div>
  );
}
