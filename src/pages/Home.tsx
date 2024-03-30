import { Footer } from '../components/home/Footer'
import { Header } from '../components/home/Header'
import { Welcome } from '../components/home/Welcome'

export default function Home() {
  return (
    <div className='home w-full h-screen flex flex-col items-center justify-center text-[#ebebeb]'>
      <Header />
      <Welcome />
      <Footer />
    </div>
  )
}
