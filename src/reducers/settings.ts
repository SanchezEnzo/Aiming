import { DIFFICULTIES } from '../constants/difficulties'
import { ACTION_TYPES_SETTINGS } from '../constants/actionTypesSettings'

interface Settings {
  name: string
  difficulty: keyof typeof DIFFICULTIES
}

type ActionSettingsTypes =
  | { type: 'CHANGE_DIFFICULTY'; payload: keyof typeof DIFFICULTIES }
  | { type: 'CHANGE_NAME'; payload: string }

export const initialSettings = {
  name: '',
  difficulty: DIFFICULTIES.Easy
}

export const settingsReducer = (
  state: Settings,
  action: ActionSettingsTypes
): Settings => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case ACTION_TYPES_SETTINGS.CHANGE_DIFFICULTY:
      return {
        ...state,
        difficulty: actionPayload as keyof typeof DIFFICULTIES
      }
    case ACTION_TYPES_SETTINGS.CHANGE_NAME:
      return { ...state, name: actionPayload }
    default:
      return state
  }
}
