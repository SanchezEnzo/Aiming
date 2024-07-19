import { useMediaQuery } from 'usehooks-ts'
import { Footer } from '../components/home/Footer'
import { Header } from '../components/home/Header'
import { Welcome } from '../components/home/Welcome'
import { MobileScreen } from './Mobile'

export default function Home() {
	const isMobileScreen = useMediaQuery('(max-width: 1024px)')
	if (isMobileScreen)
		return (
			<section className='w-full h-screen home '>
				<MobileScreen />
			</section>
		)
	return (
		<div className='home w-full h-screen flex flex-col items-center justify-center text-[#ebebeb]'>
			<Header />
			<Welcome />
			<Footer />
		</div>
	)
}
