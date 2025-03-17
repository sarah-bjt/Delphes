import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
import "./styles/page.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <App />
    </main>
  </StrictMode>,
)
