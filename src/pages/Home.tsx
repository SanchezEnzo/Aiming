import { Footer } from '../components/home/Footer'
import { Header } from '../components/home/Header'
import { Settings } from '../components/home/Settings'
import { Welcome } from '../components/home/Welcome'

export default function Home() {
  return (
    <div className='home w-full h-screen flex flex-col items-center justify-center'>
      <Header />
      <Welcome />
      <Footer />
    </div>
  )
}
