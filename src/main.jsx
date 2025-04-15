// main.jsx
import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import "./styles/page.css"


import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from "./router/index";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="page-container">
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)