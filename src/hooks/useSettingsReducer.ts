import { ChangeEvent, useReducer } from 'react'
import { initialSettings, settingsReducer } from '../reducers/settings'
import { DIFFICULTIES } from '../constants/difficulties'
import { ACTION_TYPES_SETTINGS } from '../constants/actionTypesSettings'

export function useSettingsReducer() {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings)

  const handleChangeDifficulty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: ACTION_TYPES_SETTINGS.CHANGE_DIFFICULTY,
      payload: e.target.value as keyof typeof DIFFICULTIES
    })
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ACTION_TYPES_SETTINGS.CHANGE_NAME,
      payload: e.target.value
    })
  }

  return { settings, handleChangeName, handleChangeDifficulty }
}
