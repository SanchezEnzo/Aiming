import { Link } from 'react-router-dom'
import { useTime } from '../../hooks/useTime'
import { useScore } from '../../hooks/useScore'
import { ReturnIcon } from '../icons/ReturnIcon'
import { CrownIcon } from '../icons/CrownIcon'
import { useLanguages } from '../../hooks/useLanguage'
import { useGame } from '../../hooks/useGame'
import { STATES_GAME } from '../../constants/statesGames'

export function Header() {
  const { timeToShow } = useTime()
  const { score } = useScore()
  const { language } = useLanguages()
  const { state, changeInitial } = useGame()

  return (
    <header className='flex justify-around items-center w-2/4 h-[10%]  tracking-[2px] text-[1.5rem] font-bold'>
      <div className='flex items-center'>
        <span>{language === 'English' ? 'Score' : 'Puntaje'}: </span>{' '}
        <span className='block p-2.5 w-12'>{score}</span>
      </div>
      <div className='flex items-center'>
        <span>{language === 'English' ? 'Time' : 'Tiempo'}: </span>
        <span className='block p-2.5 w-12'>{timeToShow}</span>
      </div>
      <section className='absolute w-full'>
        {(state === STATES_GAME.STOPPED || state === STATES_GAME.FINISHED) && (
          <>
            <label onClick={() => changeInitial({ payload: 'initial' })}>
              <Link
                className='no-underline text-[1.5rem] tracking-[2px]'
                to='/'
              >
                <ReturnIcon />
              </Link>
            </label>
            <Link to='/leaderboard'>
              <CrownIcon />
            </Link>
          </>
        )}
      </section>
    </header>
  )
}
