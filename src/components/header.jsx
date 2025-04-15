import React from "react";
import AstrologieButton from './buttons/astrologie-utton.jsx';
import TarotButton from './buttons/tarot-button.jsx';
import HomeButton from "./buttons/home-button.jsx";
import "../styles/header.css"

export default function Header({ onNavigate }) {
  return (
    <header className="header-outer"> 
	    <div className="header-inner responsive-wrapper">
        <div className="header-home">
          <HomeButton onNavigate={onNavigate} />
		    </div>
        <nav className="header-navigation">
          <AstrologieButton onNavigate={onNavigate} />
          <TarotButton onNavigate={onNavigate} />
        </nav>
      </div>
    </header>
  );
}

