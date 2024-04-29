import { Link } from 'react-router-dom'
import { useTime } from '../../hooks/useTime'
import { useScore } from '../../hooks/useScore'
import { ReturnIcon } from '../icons/ReturnIcon'
import { CrownIcon } from '../icons/CrownIcon'

export function Header() {
  const { timeToShow } = useTime()
  const { score } = useScore()

  return (
    <header className='flex justify-around items-center w-2/4 h-[10%]  tracking-[2px] text-[1.5rem] font-bold'>
      <div className='flex items-center'>
        {/* <span>{language === 'English' ? 'Score' : 'Puntaje'}: </span>{' '} */}
        <span>Puntaje: </span> <span className='block p-2.5 w-12'>{score}</span>
      </div>
      <div className='flex items-center'>
        {/* <span>{language === 'English' ? 'Time' : 'Tiempo'}: </span> */}
        <span>Tiempo: {timeToShow}</span>
        <span className='block p-2.5 w-12'>{10}</span>
      </div>
      <section className='absolute w-full'>
        <Link className='no-underline text-[1.5rem] tracking-[2px]' to='/'>
          <ReturnIcon />
        </Link>
        <Link to='/leaderboard'>
          <CrownIcon />
        </Link>
      </section>
    </header>
  )
}
