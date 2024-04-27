import { createContext } from 'react'
import { useSettingsReducer } from '../hooks/useSettingsReducer'

export const SettingsContext = createContext()

export function SettingsProvider({ children }) {
  const { settings, handleChangeName, handleChangeSettings } =
    useSettingsReducer()

  return (
    <SettingsContext.Provider
      value={{
        settings,
        handleChangeName,
        handleChangeSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
