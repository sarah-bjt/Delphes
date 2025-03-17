import "../../styles/button.css";


export default function homeButton({onNavigate}) {
    const handleClick = () => {
      onNavigate("Home");
    };

    return (
        <button className="home-button" onClick={handleClick}>
          Delphes
        </button>
      );
    }