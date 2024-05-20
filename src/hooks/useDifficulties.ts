import { useState } from 'react'
import { DIFFICULTIES } from '../constants/difficulties'
import { Difficulties } from '../@types/global'

export function useDifficulties() {
  const [difficulties, setDifficulties] = useState<Difficulties>(
    DIFFICULTIES.Easy
  )

  const handleDifficulty = (e: React.MouseEvent<HTMLLIElement>) => {
    setDifficulties(e.currentTarget.title as Difficulties)
  }
  return { difficulties, handleDifficulty }
}
