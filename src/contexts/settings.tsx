import { createContext } from 'react'
import { useSettingsReducer } from '../hooks/useSettingsReducer'
import { ProviderProps } from '../@types/global'

interface SettingsContextType {
  settings: {
    name: string
    difficulty: string
  }
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const initialSettings: SettingsContextType = {
  settings: {
    name: '',
    difficulty: 'Easy'
  },
  handleChangeName: () => {},
  handleChangeDifficulty: () => {}
}

export const SettingsContext =
  createContext<SettingsContextType>(initialSettings)

export function SettingsProvider({ children }: ProviderProps) {
  const { settings, handleChangeName, handleChangeDifficulty } =
    useSettingsReducer()

  return (
    <SettingsContext.Provider
      value={{
        settings,
        handleChangeName,
        handleChangeDifficulty
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}
