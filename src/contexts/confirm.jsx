import { createContext, useState } from 'react'

export const ConfirmClearContext = createContext()

export function ConfirmClearProvider({ children }) {
  const [confirmClear, setConfirmClear] = useState(false)

  function handleConfirmClear() {
    setConfirmClear(!confirmClear)
  }

  return (
    <ConfirmClearContext.Provider
      value={{ confirmClear, setConfirmClear, handleConfirmClear }}
    >
      {children}
    </ConfirmClearContext.Provider>
  )
}
