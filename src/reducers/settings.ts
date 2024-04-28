import { DIFFICULTIES } from '../constants/difficulties'
import { Settings } from '../contexts/settings'

export const initialSettings: Settings = {
  name: '',
  difficulty: 'easy'
}

const enum ACTION_TYPES_SETTINGS {
  CHANGE_SETTINGS = 'changeSettings',
  CHANGE_NAME = 'changeName'
}

type SettingsReducerActions =
  | {
      type: 'changeName'
      payload: string
    }
  | {
      type: 'changeSettings'
      payload: keyof typeof DIFFICULTIES
    }

export const settingsReducer = (
  settings: Settings,
  action: SettingsReducerActions
) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case ACTION_TYPES_SETTINGS.CHANGE_SETTINGS:
      return { ...settings, difficulty: actionPayload }
    case ACTION_TYPES_SETTINGS.CHANGE_NAME:
      return { ...settings, name: actionPayload }
  }
  return settings
}
