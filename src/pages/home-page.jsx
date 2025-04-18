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
            <p>Delphes (en grec ancien et grec moderne Δελφοί, Delphoí) est le site d'un sanctuaire panhellénique,
                situé au pied du mont Parnasse, en Phocide, où parle l'oracle d'Apollon à travers sa prophétesse, 
                la Pythie, qui était assise dans une salle du temple d'Apollon. Elle répondait aux questions qui lui étaient posées ; 
                ces réponses étaient aussitôt traduites en phrases par des prêtres. Delphes abrite également l'Omphalos ou « nombril du monde ».</p>
            <p> Ici vous pouver lire votre avenir grâce aux cartes ou aux astres.</p>
            </main>
            < Footer/>
        </div>

    )
}