import { useContext } from 'react'
import { GameContext } from '../contexts/game'

export function useGame() {
  const context = useContext(GameContext)

  if (!context) throw new Error('useGame must to be within GameProvider')

  return context
}
