import { useGame } from '../../hooks/useGame'
import { STATES_GAME } from '../../constants/statesGames'

export function Footer() {
  const { state, changePlaying } = useGame()

  console.log(state)

  return (
    <footer>
      {state.status === STATES_GAME.INITIAL && (
        <button
          onClick={() => changePlaying(STATES_GAME.PLAYING)}
          className='bg-transparent border-none cursor-pointer text-[1.5rem] mb-[2vh]  tracking-[2px] font-bold z-20 hover:text-white'
        >
          Start
        </button>
      )}
      {state.status === STATES_GAME.PLAYING && (
        <button
          onClick={() => changePlaying({ status: STATES_GAME.STOPPED })}
          className='bg-transparent border-none cursor-pointer text-[1.5rem] mb-[2vh]  tracking-[2px] font-bold z-20 hover:text-white'
        >
          Stop
        </button>
      )}
      {state.status === STATES_GAME.STOPPED && (
        <button
          onClick={() => changePlaying({ status: STATES_GAME.INITIAL })}
          className='bg-transparent border-none cursor-pointer text-[1.5rem] mb-[2vh]  tracking-[2px] font-bold z-20 hover:text-white'
        >
          Restart
        </button>
      )}
    </footer>
  )
}
