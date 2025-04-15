
import Header from '../components/header.jsx'; 
import Footer from '../components/footer';
import HoroscopeApp from "../components/horoscope-app";
import SigneGallerie from "../components/sign-gallery";

export default function HoroscopePage(){
    return (
        <div>
            <Header/>
            <h1>Trouver votre horoscope</h1>
            <HoroscopeApp/>
            <h1>Et quelques infos sur les signes astro</h1>
            <SigneGallerie/>
            <Footer/>
        </div>

    )
}