import Header from '../components/header.jsx'; 
import Footer from '../components/footer.jsx';
import TarotDraw from "../components/tarot-draw.jsx";
import "../styles/page.css";
import TarotSearch from '../components/tarot-search.jsx';

export default function TarotPage(){
    return (
        <div className="page-container">
            <Header/>
            <main>
                <TarotDraw/>
                <TarotSearch/>
            </main>
            <Footer/>
        </div>
    )
}