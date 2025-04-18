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
            <h1>Trouver votre horoscope</h1>
            <HoroscopeApp/>
            <h1>Et quelques infos sur les signes astro</h1>
            <ZodiacSearch/>
            </main>
            <Footer/>
        </div>

    )
}