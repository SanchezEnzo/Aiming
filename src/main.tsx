import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GameProvider } from './contexts/game.tsx'
import { LeaderBoardProvider } from './contexts/leaderBoard.tsx'
import { ScoreProvider } from './contexts/score.tsx'
import { TimeProvider } from './contexts/time.tsx'
import { SettingsProvider } from './contexts/settings.tsx'
import { LanguageProvider } from './contexts/language.tsx'
import { ConfirmClearProvider } from './contexts/confirm.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GameProvider>
    <SettingsProvider>
      <LanguageProvider>
        <LeaderBoardProvider>
          <ScoreProvider>
            <TimeProvider>
              <ConfirmClearProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </ConfirmClearProvider>
            </TimeProvider>
          </ScoreProvider>
        </LeaderBoardProvider>
      </LanguageProvider>
    </SettingsProvider>
  </GameProvider>
)
