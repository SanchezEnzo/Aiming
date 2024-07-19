import { useMediaQuery } from 'usehooks-ts'
import { Transition } from '../components/animation/Transition'
import { Footer } from '../components/leaderboard/Footer'
import { Header } from '../components/leaderboard/Header'
import { Table } from '../components/leaderboard/Table'
import { MobileScreen } from './Mobile'

export default function Leaderboard() {
	const isMobileScreen = useMediaQuery('(max-width: 1024px)')
	if (isMobileScreen)
		return (
			<section className='w-full h-screen leaderBoard '>
				<MobileScreen />
			</section>
		)
	return (
		<div className='text-[#ebebeb] fixed inset-0  gap-2.5 tracking-widest flex flex-col items-center  leaderBoard'>
			<Header />
			<Table />
			<Footer />
			<Transition />
		</div>
	)
}
