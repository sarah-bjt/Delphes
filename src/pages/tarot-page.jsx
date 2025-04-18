import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header.jsx'; 
import Footer from '../components/footer.jsx';
import TarotDraw from "../components/tarot-draw.jsx";
import TarotSearch from '../components/tarot-search.jsx';
import "../styles/page.css";

export default function TarotPage(){
    return (
        <div className="page-container">
            <Header/>
            <main>
            <h1>Tirage de Tarot</h1>
            <h2>Choisissez 3 cartes : Passé, Présent, Futur</h2>

            <Link to="/historique_tirage">
                <button>Voir l'historique des tirages</button>
            </Link>
                <TarotDraw/>
                <TarotSearch/>
            </main>
            <Footer/>
        </div>
    )
}