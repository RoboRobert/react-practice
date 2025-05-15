import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TicTacToe from './components/TicTacToe.tsx'
import HomePage from './components/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TicTacToe />
  </StrictMode>,
)
