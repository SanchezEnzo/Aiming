export type GameTypes =
  | 'initial'
  | 'playing'
  | 'stopped'
  | 'counting'
  | 'finished'

export interface ActionsTypesGame {
  CHANGE_INITIAL: GameTypes
  CHANGE_PLAYING: GameTypes
  CHANGE_STOPPED: GameTypes
  CHANGE_COUNTING: GameTypes
  CHANGE_FINISHED: GameTypes
}

export interface Position {
  positionX: string
  positionY: string
}
