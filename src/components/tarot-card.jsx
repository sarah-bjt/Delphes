// import "./Card.css";

export default function TarotCard({ name, arcana, suite, upright_meaning, reversed_meaning,}) {
    return (
      <div className="card">
        <div className="description">
          <h3 className="title">{name}</h3>
          <p className="text">Cette carte fait partie de la famille {arcana} {suite}</p>
          <p className="text">à l'endroit : {upright_meaning}</p>
          <p className="text">à l'envert : {reversed_meaning}</p>
        </div>
      </div>
    );
  }
  