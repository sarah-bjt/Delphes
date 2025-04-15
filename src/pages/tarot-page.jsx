import Header from '../components/header.jsx'; 
import Footer from '../components/footer';
import TarotGallerie from "../components/tarot-gallery";
import TarotDraw from "../components/tirage-tarot";
import "../styles/page.css";

export default function TarotPage(){
    return (
        <div className="page-container">
            <Header/>
            <main>
            <h1>Les Cartes de Tarot</h1>
            <TarotDraw/>
            {/* <TarotGallerie/> */}
            </main>
            <Footer/>
        </div>
    )
}