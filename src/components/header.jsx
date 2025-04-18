import React from "react";
import { Link } from 'react-router-dom'
import "../styles/header.css"
import "../styles/button.css";

export default function Header() {
  return (
    <header> 
    <div>
      <div className="header-home">
        <Link to="/" >Delphes</Link>
      </div>
      <nav className="header-navigation">
        <Link to="/zodiac">Astrologie</Link>
        <Link to="/tarot">Tarot</Link>
      </nav>
    </div>
  </header>
);
}
