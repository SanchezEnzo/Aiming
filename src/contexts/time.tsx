import { createContext, useState } from 'react'

export const TimeContext = createContext<any>({})

interface TimeProviderProp {
  children: React.ReactNode
}

export function TimeProvider({ children }: TimeProviderProp) {
  const [time, setTime] = useState(0)

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      {children}
    </TimeContext.Provider>
  )
}
