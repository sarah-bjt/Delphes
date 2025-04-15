import React from 'react';
import Header from '../components/header.jsx'; 
import Footer from '../components/footer';
export default function HomePage(){
    return (
        <div>
            < Header/>
            <h1>Bienvenue à Delphes</h1>
            <p>Ici vous trouverez votre avenir mais aussi votre passé et votre présent</p>
            < Footer/>
        </div>

    )
}