import { ChangeEvent, useReducer } from 'react'
import { initialSettings, settingsReducer } from '../reducers/settings'
import { DIFFICULTIES } from '../constants/difficulties'

export function useSettingsReducer() {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings)

  const handleChangeDifficulty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'CHANGE_DIFFICULTY',
      payload: e.target.value as keyof typeof DIFFICULTIES
    })
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: e.target.value
    })
  }

  return { settings, handleChangeName, handleChangeDifficulty }
}
