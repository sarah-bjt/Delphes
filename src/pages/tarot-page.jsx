import TarotGallerie from "../components/tarot-gallery";
import TarotDraw from "../components/tirage-tarot";

export default function TarotPage(){
    return (
        <div>
            <h1>Les Cartes de Tarot</h1>
            <TarotDraw/>
            <TarotGallerie/>
        </div>
    )
}