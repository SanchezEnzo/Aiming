import { Dispatch, SetStateAction } from "react"

export interface TimeContextProps {
  time: number
  setTime: Dispatch<SetStateAction<number>>
}
