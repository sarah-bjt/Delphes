export default function TarotCard({ name, upright_meaning, reversed_meaning,}) {
    return (
  <div className="card">
    <h3 className="title">{name}</h3>
    <p className="text">à l'endroit : {upright_meaning}</p>
    <p className="text">à l'envert : {reversed_meaning}</p>
  </div>
  );
}
  