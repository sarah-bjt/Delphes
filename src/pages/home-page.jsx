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
            <p>
                Au pied du mont Parnasse, là où le souffle sacré d'Apollon traverse les pierres antiques, se trouve Delphes -  
                berceau de sagesse et de mystères. Jadis, la Pythie transmettait ici les paroles divines, 
                guidée par les échos du monde invisible. Les prêtres traduisaient ses murmures en prophéties, 
                révélant aux mortels leur destinée.
            </p>
            <p>
                Aujourd'hui, Delphes renaît dans un espace numérique, entre magie et technologie. 
                Entrez dans ce sanctuaire moderne : tirez les cartes du tarot ou laissez les astres dévoiler leur message.  
                Le voile du futur est mince… oseras-tu le soulever ?
            </p>
            </main>
            < Footer/>
        </div>

    )
}