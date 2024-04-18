import { Link } from 'react-router-dom'
import { CrownIcon, ReturnIcon } from '../Icons'

export function Header() {
  return (
    <header className='flex justify-around items-center w-2/4 h-[10%]  tracking-[2px] text-[1.5rem] font-bold'>
      <div className='flex items-center'>
        {/* <span>{language === 'English' ? 'Score' : 'Puntaje'}: </span>{' '} */}
        <span>Puntaje: </span> <span className='block p-2.5 w-12'>{0}</span>
      </div>
      <div className='flex items-center'>
        {/* <span>{language === 'English' ? 'Time' : 'Tiempo'}: </span> */}
        <span>Tiempo: </span>
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
