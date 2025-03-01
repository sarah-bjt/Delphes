
import SigneGallerie from './components/SigneGallerie.jsx'
import TarotGallerie from './components/TarotGallerie.jsx'


export default function App() {
  return (
    <div>
      <div>
      <h1>Les Signes astro</h1>
      </div>
      <div>
        <SigneGallerie/>
      </div>


      <div>
      <h1>Les cartes de Tarot</h1>
      </div>
      <div>
        <TarotGallerie/>
      </div>
    </div>
  )
}


