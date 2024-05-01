export interface SettingsContextType {
  settings: {
    name: string
    difficulty: string
  }
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export type ActionSettings = 'CHANGE_DIFFICULTY' | 'CHANGE_NAME'
