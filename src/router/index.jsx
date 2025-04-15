import { createBrowserRouter,  Navigate } from "react-router-dom";
import HomePage from '../pages/home-page.jsx'
import HoroscopePage from '../pages/horoscope-page.jsx'
import TarotPage from '../pages/tarot-page.jsx'

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tarot",
    element: <TarotPage />,
  },
  {
    path:"/horoscope",
    element: <HoroscopePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

