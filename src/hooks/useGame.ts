import { useState } from 'react'
import { GameTypes } from '../service/types'

function useGame() {
  const [stateGame, setStateGame] = useState<GameTypes>('initial')
}
