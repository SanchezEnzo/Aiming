import { Link } from 'react-router-dom'
import { ReturnIcon } from '../icons/ReturnIcon'
import { useGame } from '../../hooks/useGame'

export function Header() {
  const { state } = useGame()
  return (
    <header>
      <Link to={`${state === 'initial' ? '/' : '/game'}`}>
        <ReturnIcon />
      </Link>
    </header>
  )
}
