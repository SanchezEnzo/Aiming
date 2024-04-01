import { Footer } from '../components/game/Footer'
import { Header } from '../components/game/Header'
import { Playground } from '../components/game/Playground'

export default function Game() {
  return (
    <div className='game flex flex-col justify-between items-center w-full h-screen text-[#ebebeb]'>
      <Header />
      <Playground />
      <Footer />
    </div>
  )
}
