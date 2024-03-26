import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to the game!</h1>
      <Link to='/play'>Play</Link>
      <Link to='/leaderboard'>Leaderboard</Link>
    </div>
  )
}
