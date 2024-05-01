import { useReducer } from 'react'
import { gameInitialState, gameReducer } from '../reducers/game'
import { PayloadPropGame } from '../@types/game'
import { STATES_GAME } from '../constants/statesGames'

export function useGameReducer() {
  const [state, dispatch] = useReducer(gameReducer, gameInitialState)

  const changeInitial = (action: PayloadPropGame) =>
    dispatch({
      type: STATES_GAME.INITIAL,
      payload: action
    })
  const changePlaying = (action: PayloadPropGame) =>
    dispatch({
      type: STATES_GAME.PLAYING,
      payload: action
    })
  const changeStopped = (action: PayloadPropGame) =>
    dispatch({
      type: STATES_GAME.STOPPED,
      payload: action
    })
  const changeCounting = (action: PayloadPropGame) =>
    dispatch({
      type: STATES_GAME.COUNTING,
      payload: action
    })
  const changeFinished = (action: PayloadPropGame) =>
    dispatch({
      type: STATES_GAME.FINISHED,
      payload: action
    })

  return {
    state,
    changeInitial,
    changePlaying,
    changeCounting,
    changeStopped,
    changeFinished
  }
}
