import { useGame } from '../../hooks/useGame'
import { STATES_GAME } from '../../constants/statesGames'
import { PayloadProp } from '../../contexts/game'

export function Footer() {
  const { state, changePlaying } = useGame()

  console.log(state)

  return (
    <footer>
      {state.status === STATES_GAME.INITIAL && (
        <button
          onClick={() =>
            changePlaying({ payload: STATES_GAME.PLAYING } as PayloadProp)
          }
          className='bg-transparent border-none cursor-pointer text-[1.5rem] mb-[2vh]  tracking-[2px] font-bold z-20 hover:text-white'
        >
          Start
        </button>
      )}
      {state.status === STATES_GAME.PLAYING && (
        <button
          onClick={() =>
            changePlaying({ payload: STATES_GAME.STOPPED } as PayloadProp)
          }
          className='bg-transparent border-none cursor-pointer text-[1.5rem] mb-[2vh]  tracking-[2px] font-bold z-20 hover:text-white'
        >
          Stop
        </button>
      )}
      {state.status === STATES_GAME.STOPPED && (
        <button
          onClick={() =>
            changePlaying({ payload: STATES_GAME.INITIAL } as PayloadProp)
          }
          className='bg-transparent border-none cursor-pointer text-[1.5rem] mb-[2vh]  tracking-[2px] font-bold z-20 hover:text-white'
        >
          Restart
        </button>
      )}
    </footer>
  )
}
