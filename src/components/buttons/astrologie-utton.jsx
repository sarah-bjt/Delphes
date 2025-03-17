import "../../styles/button.css";

export default function AstrologieButton({onNavigate}) {
    const handleClick = () => {
      onNavigate("Astrologie");
    };

    return (
        <button  onClick={handleClick}>
          Astrologie
        </button>
      );
    }