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

export interface Position {
  positionX: string
  positionY: string
}

export type ProviderProps = {
  children: React.ReactNode
}

export type Difficulties = 'easy' | 'normal' | 'hard'
