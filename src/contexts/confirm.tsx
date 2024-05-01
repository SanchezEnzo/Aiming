import { createContext, useState } from 'react'
import { ProviderProps } from '../@types/global'
import { ConfirmClearContextType } from '../@types/confirm'

const initialConfirmClearContextTypeValue = {
  confirmClear: false,
  handleConfirmClear: () => {}
}

export const ConfirmClearContext = createContext<ConfirmClearContextType>(
  initialConfirmClearContextTypeValue
)

export function ConfirmClearProvider({ children }: ProviderProps) {
  const [confirmClear, setConfirmClear] = useState<boolean>(false)

  function handleConfirmClear() {
    setConfirmClear(!confirmClear)
  }

  return (
    <ConfirmClearContext.Provider value={{ confirmClear, handleConfirmClear }}>
      {children}
    </ConfirmClearContext.Provider>
  )
}
