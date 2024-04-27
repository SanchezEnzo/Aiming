import { Link } from 'react-router-dom'
import { CrownIcon } from '../icons/BallIIcon'
import { Toggle } from './Toggle'

export function Header() {
  return (
    <header className='w-full '>
      <Link to='/leaderboard'>
        <CrownIcon />
      </Link>
      <div className='fixed top-6 left-8 w-[104px]'>
        <Toggle left={'EN'} right={'ES'} />
      </div>
    </header>
  )
}
