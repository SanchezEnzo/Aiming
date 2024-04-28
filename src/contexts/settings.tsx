import { PropsWithChildren, createContext } from 'react'
import { useSettingsReducer } from '../hooks/useSettingsReducer'

export interface Settings {
  name: string
  difficulty: keyof typeof DIFFICULTIES
}

enum DIFFICULTIES {
  easy = 'easy',
  normal = 'normal',
  hard = 'hard'
}

interface SettingsContextProps {
  settings: Settings
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeSettings: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InitialValueSettingsContext: SettingsContextProps = {
  settings: {
    name: '',
    difficulty: DIFFICULTIES.easy
  },
  handleChangeName: () => {},
  handleChangeSettings: () => {}
}

export const SettingsContext = createContext<SettingsContextProps>(
  InitialValueSettingsContext
)

export function SettingsProvider({ children }: PropsWithChildren) {
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
