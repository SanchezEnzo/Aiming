import { ScoreContext } from '../contexts/score'
import { useContext } from 'react'

export function useScore() {
  const context = useContext(ScoreContext)

  if (context === undefined) {
    throw new Error('useScore have to used within ScoreProvider')
  }
  return context
}
