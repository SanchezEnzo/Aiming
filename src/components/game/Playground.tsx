import { STATES_GAME } from '../../constants/statesGames'
import { useGame } from '../../hooks/useGame'
import { usePosition } from '../../hooks/usePosition'
import { Ball } from './Ball'

export function Playground() {
  const { position, handleClick } = usePosition()
  const { state } = useGame()

  {
    state === STATES_GAME.PLAYING && (
      <Ball handleClick={handleClick} position={position} />
    )
  }

  return <section className='relative h-4/5 w-[90%]'></section>
}
