import { createContext, useState } from 'react'
import { ProviderProps } from '../@types/global'
import { TimeContextProps } from '../@types/time'

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
