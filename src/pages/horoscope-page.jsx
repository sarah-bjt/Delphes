import Header from '../components/header.jsx'; 
import Footer from '../components/footer';
import HoroscopeApp from "../components/horoscope-app";
// import SigneGallerie from "../components/sign-gallery";
import "../styles/page.css";
import SignSearch from '../components/sign-search.jsx';

export default function HoroscopePage(){
    return (
        <div className="page-container">
            <Header/>
            <main>
            <h1>Trouver votre horoscope</h1>
            <HoroscopeApp/>
            <h1>Et quelques infos sur les signes astro</h1>
            <SignSearch/>
            </main>
            {/* <SigneGallerie/> */}
            <Footer/>
        </div>

    )
}