import { createContext, useState, Dispatch, SetStateAction } from 'react'
import { ProviderProps } from '../@types/global'

interface TimeContextProps {
  time: number
  setTime: Dispatch<SetStateAction<number>>
}

const initialValueTimeContext = {
  time: 0,
  setTime: () => {}
}

export const TimeContext = createContext<TimeContextProps>(
  initialValueTimeContext
)

export function TimeProvider({ children }: ProviderProps) {
  const [time, setTime] = useState<number>(0)

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  )
}
