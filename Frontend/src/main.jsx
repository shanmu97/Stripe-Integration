import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Debug: log publishable key at startup to ensure Vite env is available in the client
console.log('VITE_STRIPE_PUBLISHABLE_KEY at startup:', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
