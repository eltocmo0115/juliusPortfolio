import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Vendor (Bootstrap CSS + JS + Icons — loaded from local vendor files)
import './assets/Craftivo/assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/Craftivo/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/Craftivo/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'

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
