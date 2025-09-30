import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import State from './State.jsx'
import StateInReact from './StateInReact.jsx'
import CounterUseeffect from './CounterUseEffect.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <StateInReact/>
  <CounterUseeffect/>
  <App />
  </>
)
