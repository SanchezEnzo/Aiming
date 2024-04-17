import { createContext, useContext, useReducer } from 'react'
import { ActionsTypesGame, GameTypes } from '../service/types'

export const GameContext = createContext<any>(null)

export const ACTIONS_TYPES_GAME: ActionsTypesGame = {
  CHANGE_INITIAL: 'initial',
  CHANGE_PLAYING: 'playing',
  CHANGE_STOPPED: 'stopped',
  CHANGE_COUNTING: 'counting',
  CHANGE_FINISHED: 'finished'
}

type GameContextProps = {
  children: React.ReactNode
}

interface GameReducerPayload {
  type: string
  payload: Partial<GameTypes> // Make payload partial to allow updating only specific properties
}

interface StateType {
  status: GameTypes
}

const gameInitialState: StateType = {
  status: ACTIONS_TYPES_GAME.CHANGE_INITIAL
}

const gameReducer = (state: StateType, action: GameReducerPayload) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case ACTIONS_TYPES_GAME.CHANGE_INITIAL:
    case ACTIONS_TYPES_GAME.CHANGE_PLAYING:
    case ACTIONS_TYPES_GAME.CHANGE_STOPPED:
    case ACTIONS_TYPES_GAME.CHANGE_COUNTING:
    case ACTIONS_TYPES_GAME.CHANGE_FINISHED: {
      return { ...state, status: actionPayload } // Update only the changed properties
    }
    default:
      return state
  }
}

export function GameProvider({ children }: GameContextProps) {
  const [state, dispatch] = useReducer(gameReducer, gameInitialState)

  const changeInitial = (action: Partial<GameTypes>) =>
    dispatch({
      type: ACTIONS_TYPES_GAME.CHANGE_INITIAL,
      payload: action
    })
  const changePlaying = (action: Partial<GameTypes>) =>
    dispatch({
      type: ACTIONS_TYPES_GAME.CHANGE_PLAYING,
      payload: action
    })
  const changeStopped = (action: Partial<GameTypes>) =>
    dispatch({
      type: ACTIONS_TYPES_GAME.CHANGE_STOPPED,
      payload: action
    })
  const changeCounting = (action: Partial<GameTypes>) =>
    dispatch({
      type: ACTIONS_TYPES_GAME.CHANGE_COUNTING,
      payload: action
    })
  const changeFinished = (action: Partial<GameTypes>) =>
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
