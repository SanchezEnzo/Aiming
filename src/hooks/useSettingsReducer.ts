import { useReducer } from 'react'
import { initialSettings, settingsReducer } from '../reducers/settings'
import { DIFFICULTIES } from '../constants/difficulties'

export function useSettingsReducer() {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings)

  const enum ACTION_TYPES_SETTINGS {
    CHANGE_SETTINGS = 'changeSettings',
    CHANGE_NAME = 'changeName'
  }

  const handleChangeSettings = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ACTION_TYPES_SETTINGS.CHANGE_SETTINGS,
      payload: e.target.value as keyof typeof DIFFICULTIES
    })
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ACTION_TYPES_SETTINGS.CHANGE_NAME,
      payload: e.target.value as string
    })
  }

  return { settings, handleChangeName, handleChangeSettings }
}
