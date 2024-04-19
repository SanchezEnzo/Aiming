import { ReactNode, createContext, useState } from 'react'

export const ScoreContext = createContext<any>({})

interface ScoreProviderProps {
  children: ReactNode
}

export function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState(0)
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
