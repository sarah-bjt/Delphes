import { createBrowserRouter,  Navigate } from "react-router-dom";
import HomePage from '../pages/home-page.jsx'
import ZodiacPage from '../pages/zodiac-page.jsx'
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
    path:"/zodiac",
    element: <ZodiacPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

