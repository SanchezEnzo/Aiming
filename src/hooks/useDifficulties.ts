import { useState } from 'react'
import { DIFFICULTIES } from '../constants/difficulties'

export function useDifficulties() {
  const [difficulties, setDifficulties] = useState(DIFFICULTIES.EASY)

  const handleDifficulty = e => {
    setDifficulties(e.target.innerText)
  }
  return { difficulties, handleDifficulty }
}
