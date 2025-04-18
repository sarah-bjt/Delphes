import Header from '../components/header.jsx'; 
import Footer from '../components/footer.jsx';
import HoroscopeApp from "../components/horoscope-app.jsx";
// import SigneGallerie from "../components/sign-gallery";
import "../styles/page.css";
import ZodiacSearch from '../components/zodiac-search.jsx';

export default function ZodiacPage(){
    return (
        <div className="page-container">
            <Header/>
            <main>
            <HoroscopeApp/>
            <ZodiacSearch/>
            </main>
            <Footer/>
        </div>

    )
}