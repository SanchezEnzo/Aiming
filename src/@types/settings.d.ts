import { ACTION_TYPES_SETTINGS } from "../constants/actionTypesSettings"
import { DIFFICULTIES } from "../constants/difficulties"

export interface SettingsContextType {
  settings: {
    name: string
    difficulty: string
  }
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeDifficulty: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

// Reducer types
export interface Settings {
	name: string
	difficulty: keyof typeof DIFFICULTIES
}

export type ActionSettingsTypes =
	| { type: ACTION_TYPES_SETTINGS.CHANGE_DIFFICULTY; payload: keyof typeof DIFFICULTIES }
	| { type: ACTION_TYPES_SETTINGS.CHANGE_NAME; payload: string }