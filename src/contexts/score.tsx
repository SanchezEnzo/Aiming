import { ReactNode, createContext, useState } from 'react'
import { ScoreContextType } from '../@types/score'

const initialScoreContextType = {
  score: 0,
  setScore: () => {}
}

export const ScoreContext = createContext<ScoreContextType>(
  initialScoreContextType
)

interface ScoreProviderProps {
  children: ReactNode
}

export function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState<number>(0)
  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore
      }}
    >
      {children}
    </ScoreContext.Provider>
  )
}
