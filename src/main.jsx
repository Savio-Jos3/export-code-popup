import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'; // This is the new correct path
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
