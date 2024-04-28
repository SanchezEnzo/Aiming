import { createContext, useContext, useReducer } from 'react'
import { GameTypes, ProviderProps } from '../@types/global'
import { STATES_GAME } from '../constants/statesGames'

export const enum ACTIONS_TYPES_GAME {
  CHANGE_INITIAL = 'initial',
  CHANGE_PLAYING = 'playing',
  CHANGE_STOPPED = 'stopped',
  CHANGE_COUNTING = 'counting',
  CHANGE_FINISHED = 'finished'
}

interface StateType {
  status: GameTypes
}

interface PayloadProp {
  payload: keyof typeof STATES_GAME
}

interface GameReducerPayload {
  type: GameTypes
  payload: PayloadProp // Make payload partial to allow updating only specific properties
}

const gameInitialState: StateType = {
  status: ACTIONS_TYPES_GAME.CHANGE_INITIAL
}

interface GameContextType {
  state: StateType
  changeInitial: (action: PayloadProp) => void
  changePlaying: (action: PayloadProp) => void
  changeCounting: (action: PayloadProp) => void
  changeStopped: (action: PayloadProp) => void
  changeFinished: (action: PayloadProp) => void
}

const initialValueGameContext: GameContextType = {
  state: gameInitialState,
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
  state: StateType,
  action: GameReducerPayload
): StateType => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case ACTIONS_TYPES_GAME.CHANGE_INITIAL:
    case ACTIONS_TYPES_GAME.CHANGE_PLAYING:
    case ACTIONS_TYPES_GAME.CHANGE_STOPPED:
    case ACTIONS_TYPES_GAME.CHANGE_COUNTING:
    case ACTIONS_TYPES_GAME.CHANGE_FINISHED: {
      return { ...state, ...actionPayload } // Update only the changed properties
    }
    default:
      return state
  }
}

export function GameProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(gameReducer, gameInitialState)

  const changeInitial = (action: PayloadProp) =>
    dispatch({
      type: ACTIONS_TYPES_GAME.CHANGE_INITIAL,
      payload: action
    })
  const changePlaying = (action: PayloadProp) =>
    dispatch({
      type: ACTIONS_TYPES_GAME.CHANGE_PLAYING,
      payload: action
    })
  const changeStopped = (action: PayloadProp) =>
    dispatch({
      type: ACTIONS_TYPES_GAME.CHANGE_STOPPED,
      payload: action
    })
  const changeCounting = (action: PayloadProp) =>
    dispatch({
      type: ACTIONS_TYPES_GAME.CHANGE_COUNTING,
      payload: action
    })
  const changeFinished = (action: PayloadProp) =>
    dispatch({
      type: ACTIONS_TYPES_GAME.CHANGE_FINISHED,
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
