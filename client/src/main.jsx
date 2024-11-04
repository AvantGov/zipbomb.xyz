// depends
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// comps
import App from './App.jsx'

// font depends
import '@fontsource/unifontex';
import '@fontsource/share-tech-mono';
import '@fontsource/silkscreen';
import '@fontsource/libre-barcode-39-text';

// css
import './CSS/index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
