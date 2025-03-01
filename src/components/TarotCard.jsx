// import "./Card.css";

export default function TarotCard({ name, arcana, upright_meaning, reversed_meaning,}) {
    return (
      <div className="card">
        <div className="description">
          <h3 className="title">{name}</h3>
          <p className="text">Cette carte fait partie de la famille {arcana}</p>
          <p className="text">Si elle est pioché à l'endroit alors elle repérense {upright_meaning}</p>
          <p className="text">A l'envert est représente {reversed_meaning}</p>
        </div>
      </div>
    );
  }
  