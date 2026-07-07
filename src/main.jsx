import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Vendor (Bootstrap CSS + JS + Icons — from npm)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Global styles
import './styles/base.css'
import './styles/animations.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/cards.css'
import './styles/footer.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
