import { Link } from 'react-router-dom'
import { CrownIcon } from '../icons'

export function Header() {
  return (
    <header className='w-full h-[10vh]'>
      <Link to='/leaderboard'>
        <CrownIcon />
      </Link>
    </header>
  )
}
