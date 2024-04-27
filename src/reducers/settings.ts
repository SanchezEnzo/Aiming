import { DIFFICULTIES } from '../constants/difficulties'
import { ACTION_TYPES } from '../constants/actionTypes'

export const initialSettings = {
  name: '',
  difficulty: DIFFICULTIES.EASY
}

export const settingsReducer = (settings, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case ACTION_TYPES.CHANGE_SETTINGS:
      return { ...settings, difficulty: actionPayload }
    case ACTION_TYPES.CHANGE_NAME:
      return { ...settings, name: actionPayload }
  }
  return settings
}
