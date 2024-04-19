import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GameProvider } from './contexts/game.tsx'
import { LeaderBoardProvider } from './contexts/leaderBoard.tsx'
import { ScoreProvider } from './contexts/score.tsx'
import { TimeProvider } from './contexts/time.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GameProvider>
    <LeaderBoardProvider>
      <ScoreProvider>
        <TimeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TimeProvider>
      </ScoreProvider>
    </LeaderBoardProvider>
  </GameProvider>
)
