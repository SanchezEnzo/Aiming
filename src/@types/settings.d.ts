export interface SettingsContextType {
  settings: {
    name: string
    difficulty: string
  }
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export type ActionSettings = 'CHANGE_DIFFICULTY' | 'CHANGE_NAME'

// Reducer types
export interface Settings {
	name: string
	difficulty: keyof typeof DIFFICULTIES
}

export type ActionSettingsTypes =
	| { type: 'CHANGE_DIFFICULTY'; payload: keyof typeof DIFFICULTIES }
	| { type: 'CHANGE_NAME'; payload: string }