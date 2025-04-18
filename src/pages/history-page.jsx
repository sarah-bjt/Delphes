import Header from '../components/header.jsx'; 
import Footer from '../components/footer.jsx';
import TarotHistory from "../components/tarot-history.jsx";
import "../styles/page.css";
import TarotSearch from '../components/tarot-search.jsx';

import { Link } from 'react-router-dom'


export default function TarotHistoryPage(){
    return (
        <div className="page-container">
            <Header/>
            <main>
                <TarotHistory/>
            </main>
            <Footer/>
        </div>
    )
}