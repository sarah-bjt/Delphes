import React from "react";
import { Link } from 'react-router-dom'
import "../styles/header.css"
import "../styles/button.css";

export default function Header() {
  return (
    <header className="header-outer"> 
    <div className="header-inner responsive-wrapper">
      <div className="header-home">
        <Link to="/" className="button">Delphes</Link>
      </div>
      <nav className="header-navigation">
        <Link to="/horoscope" className="button">Horoscope</Link>
        <Link to="/tarot" className="button">Tarot</Link>
      </nav>
    </div>
  </header>
);
}
