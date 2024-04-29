import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'

interface ScoreContextType {
  score: number
  setScore: Dispatch<SetStateAction<number>>
}

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
