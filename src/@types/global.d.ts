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
