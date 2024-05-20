import { useState, MouseEventHandler } from 'react'
import { DIFFICULTIES } from '../constants/difficulties'
import { Difficulties } from '../@types/global'

export function useDifficulties() {
  const [difficulties, setDifficulties] = useState<Difficulties>(
    DIFFICULTIES.Easy
  )

  const handleDifficulty = (e: React.MouseEventHandler<HTMLLIElement>) => {
    setDifficulties(e.target.title)
  }
  return { difficulties, handleDifficulty }
}
