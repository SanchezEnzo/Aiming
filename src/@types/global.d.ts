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

export type Difficulties = 'Easy' | 'Normal' | 'Hard'

export interface DifficultiesTypes {
  Easy: Difficulties
  Normal: Difficulties
  Hard: Difficulties
}

type ActionSettings = 'CHANGE_DIFFICULTY' | 'CHANGE_NAME'

export interface ActionTypesSettings {
  CHANGE_DIFFICULTY: ActionSettings
  CHANGE_NAME: ActionSettings
}
