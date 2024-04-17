import { createContext, useState } from 'react'
import { GameTypes } from '../service/types'

export const GameContext = createContext<any>(null)

type GameContextProps = {
  children: React.ReactNode
}

export function GameProvider({ children }: GameContextProps) {
  const [gameState, setGameState] = useState<GameTypes>('initial')

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  )
}
