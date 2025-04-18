import Header from '../components/header.jsx'; 
import Footer from '../components/footer.jsx';
import TarotDraw from "../components/tarot-draw.jsx";
import "../styles/page.css";

export default function TarotPage(){
    return (
        <div className="page-container">
            <Header/>
            <main>
                <TarotDraw/>
            </main>
            <Footer/>
        </div>
    )
}