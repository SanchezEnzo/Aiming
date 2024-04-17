import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GameProvider } from './contexts/game.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GameProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GameProvider>
)
