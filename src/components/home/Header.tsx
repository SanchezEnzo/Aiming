import { Link } from 'react-router-dom'
import { Toggle } from './Toggle'
import { CrownIcon } from '../icons/CrownIcon'

export function Header() {
	return (
		<header className='w-full '>
			<Link to='/leaderboard'>
				<CrownIcon />
			</Link>
			<div className='fixed top-6 left-8 '>
				<Toggle left={'EN'} right={'ES'} />
			</div>
		</header>
	)
}
