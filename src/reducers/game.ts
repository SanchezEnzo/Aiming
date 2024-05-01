import { GameReducerPayload, GameTypes } from '../@types/game'
import { STATES_GAME } from '../constants/statesGames'

export const gameReducer = (
  state: GameTypes,
  action: GameReducerPayload
): GameTypes => {
  const { type: actionType } = action
  switch (actionType) {
    case STATES_GAME.INITIAL: {
      const newState = STATES_GAME.INITIAL
      return newState
    }
    case STATES_GAME.PLAYING: {
      const newState = STATES_GAME.PLAYING
      return newState
    }
    case STATES_GAME.STOPPED: {
      const newState = STATES_GAME.STOPPED
      return newState
    }
    case STATES_GAME.COUNTING: {
      const newState = STATES_GAME.COUNTING
      return newState
    }
    case STATES_GAME.FINISHED: {
      const newState = STATES_GAME.FINISHED
      return newState
    }
    default:
      return state
  }
}

export const gameInitialState = STATES_GAME.INITIAL
