import Header from './components/header.jsx'
import HomePage from './pages/home-page.jsx'
import HoroscopePage from './pages/horoscope-page.jsx'
import TarotPage from './pages/tarot-page.jsx'
import Footer from './components/footer.jsx'
import { useState } from 'react'
// import "./styles/page.css"

export default function App() {

  const [currentPage, setCurrentPage] = useState("Home")

  const navigateTo = (page) => {
    setCurrentPage(page);
  }

  let content;
  if (currentPage === "Home"){
    content = <HomePage/>
  }
  else if (currentPage === "Tarot"){
    content = <TarotPage/>
  }
  else if (currentPage === "Astrologie"){
    content = <HoroscopePage/>
  }

  return (
    <div>
      <Header onNavigate={navigateTo}/>
      {content}
      <Footer/>
    </div>
  )
}


