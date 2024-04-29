import { useState } from 'react'
import { DIFFICULTIES } from '../constants/difficulties'

export function useDifficulties() {
  const [difficulties, setDifficulties] = useState(DIFFICULTIES.easy)

  const handleDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDifficulties(e.target.innerText)
  }
  return { difficulties, handleDifficulty }
}
