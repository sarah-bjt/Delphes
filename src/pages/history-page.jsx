import React from "react";
import { Link } from 'react-router-dom';   
import Header from '../components/header.jsx'; 
import Footer from '../components/footer.jsx';
import TarotHistory from "../components/tarot-history.jsx";
import "../styles/page.css";


export default function TarotHistoryPage(){
    return (
        <div className="page-container">
            <Header/>
            <main>
                <h1 >Historique des Tirages</h1>
                <Link to="/tarot"><button>Retourner au tirage</button></Link>
                <TarotHistory/>
            </main>
            <Footer/>
        </div>
    )
}