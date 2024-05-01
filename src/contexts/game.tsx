import { createContext } from 'react'
import { ProviderProps } from '../@types/global'
import { GameContextType } from '../@types/game'
import { useGameReducer } from '../hooks/useGameReducer'

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

export function GameProvider({ children }: ProviderProps) {
  const {
    state,
    changeCounting,
    changeFinished,
    changeInitial,
    changePlaying,
    changeStopped
  } = useGameReducer()

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
