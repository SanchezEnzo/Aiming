import { Dispatch, SetStateAction } from 'react'

export interface ScoreContextType {
  score: number
  setScore: Dispatch<SetStateAction<number>>
}
