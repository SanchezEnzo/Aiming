import { createContext, useContext, useReducer } from 'react'
import { GameTypes, ProviderProps } from '../@types/global'
import { STATES_GAME } from '../constants/statesGames'

export interface PayloadPropGame {
  payload: GameTypes
}

interface GameReducerPayload {
  type: GameTypes
  payload: PayloadPropGame
}

interface GameContextType {
  state: GameTypes
  changeInitial: (action: PayloadPropGame) => void
  changePlaying: (action: PayloadPropGame) => void
  changeCounting: (action: PayloadPropGame) => void
  changeStopped: (action: PayloadPropGame) => void
  changeFinished: (action: PayloadPropGame) => void
}

const initialValueGameContext: GameContextType = {
  state: 'initial',
  changeInitial: () => {},
  changePlaying: () => {},
  changeCounting: () => {},
  changeStopped: () => {},
  changeFinished: () => {}
}

export const GameContext = createContext<GameContextType>(
  initialValueGameContext
)

const gameReducer = (
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

const gameInitialState = STATES_GAME.INITIAL

export function GameProvider({ children }: ProviderProps) {
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

  return (
    <GameContext.Provider
      value={{
        state,
        changeInitial,
        changePlaying,
        changeCounting,
        changeStopped,
        changeFinished
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGameContext() {
  const context = useContext(GameContext)

  if (!context) throw new Error('useGameContext have to be within GameProvider')
  return context
}
