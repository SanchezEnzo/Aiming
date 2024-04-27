import { useReducer } from 'react'
import { initialSettings, settingsReducer } from '../reducers/settings'

export function useSettingsReducer() {
  const [settings, dispatch] = useReducer(settingsReducer, initialSettings)

  const handleChangeSettings = e => {
    dispatch({
      type: 'changeSettings',
      payload: e.target.value
    })
  }

  const handleChangeName = e => {
    dispatch({
      type: 'changeName',
      payload: e.target.value
    })
  }

  return { settings, handleChangeName, handleChangeSettings }
}
