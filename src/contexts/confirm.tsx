import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { ProviderProps } from '../@types/global'

interface ConfirmClearContextType {
  confirmClear: boolean
  setConfirmClear: Dispatch<SetStateAction<boolean>>
  handleConfirmClear: () => void
}

const initialConfirmClearContextTypeValue = {
  confirmClear: false,
  setConfirmClear: () => {},
  handleConfirmClear: () => {}
}

export const ConfirmClearContext = createContext<ConfirmClearContextType>(
  initialConfirmClearContextTypeValue
)

export function ConfirmClearProvider({ children }: ProviderProps) {
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
