export interface Difficulties {
  EASY: string
  NORMAL: string
  HARD: string
}

export type GameTypes =
  | 'initial'
  | 'playing'
  | 'stopped'
  | 'counting'
  | 'finished'
