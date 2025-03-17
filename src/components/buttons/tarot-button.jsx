import "../../styles/button.css";


export default function TarotButton({onNavigate}) {
    const handleClick = () => {
      onNavigate("Tarot");
    };
  

    return (
        <button onClick={handleClick}>
          Tarot
        </button>
      );
    }