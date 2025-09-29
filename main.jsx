import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CompFun from './CompFun.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CompFun/>
  <App />
  </StrictMode>,
)
