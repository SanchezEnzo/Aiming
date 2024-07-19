import { useMediaQuery } from 'usehooks-ts'
import { Transition } from '../components/animation/Transition'
import { Footer } from '../components/game/Footer'
import { Header } from '../components/game/Header'
import { Playground } from '../components/game/Playground'
import { MobileScreen } from './Mobile'

export default function Game() {
	const isMobileScreen = useMediaQuery('(max-width: 1024px)')
	if (isMobileScreen)
		return (
			<section className='w-full h-screen game'>
				<MobileScreen />
			</section>
		)
	return (
		<div className='game flex flex-col justify-between items-center w-full h-screen text-[#ebebeb]'>
			<Header />
			<Playground />
			<Footer />
			<Transition />
		</div>
	)
}
