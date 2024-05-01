export type GameTypes =
  | 'initial'
  | 'playing'
  | 'stopped'
  | 'counting'
  | 'finished'

export interface ActionsTypesGame {
  INITIAL: GameTypes
  PLAYING: GameTypes
  STOPPED: GameTypes
  COUNTING: GameTypes
  FINISHED: GameTypes
}

export interface PayloadPropGame {
  payload: GameTypes
}

export interface GameReducerPayload {
  type: GameTypes
  payload: PayloadPropGame
}

export interface GameContextType {
  state: GameTypes
  changeInitial: (action: PayloadPropGame) => void
  changePlaying: (action: PayloadPropGame) => void
  changeCounting: (action: PayloadPropGame) => void
  changeStopped: (action: PayloadPropGame) => void
  changeFinished: (action: PayloadPropGame) => void
}
