import { Link } from 'react-router-dom'
import { ReturnIcon } from '../icons'

export function Header() {
  return (
    <header>
      {true ? (
        <Link to='/game'>
          <ReturnIcon />
        </Link>
      ) : (
        <Link to='/'>
          <ReturnIcon />
        </Link>
      )}
    </header>
  )
}