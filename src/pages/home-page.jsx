import React from 'react';
import Header from '../components/header.jsx'; 
import Footer from '../components/footer';
import "../styles/page.css";
export default function HomePage(){
    return (
        <div className="page-container">
            < Header/>
            <main>
            <h1>Bienvenue à Delphes</h1>
            <p>Ici vous trouverez votre avenir mais aussi votre passé et votre présent</p>
            </main>
            < Footer/>
        </div>

    )
}