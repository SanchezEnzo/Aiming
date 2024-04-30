import { STATES_GAME } from '../../constants/statesGames'
import { useGame } from '../../hooks/useGame'
import { usePosition } from '../../hooks/usePosition'
import { Ball } from './Ball'
import { CountDown } from './CountDown'

export function Playground() {
  const { position, handleClick } = usePosition()
  const { state } = useGame()

  return (
    <section className='relative h-4/5 w-[90%] flex justify-center items-center'>
      {state === STATES_GAME.PLAYING && (
        <Ball handleClick={handleClick} position={position} />
      )}
      {state === STATES_GAME.COUNTING && <CountDown />}
    </section>
  )
}
