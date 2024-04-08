import { Footer } from '../components/leaderboard/Footer'
import { Header } from '../components/leaderboard/Header'
import { Table } from '../components/leaderboard/Table'

export default function Leaderboard() {
  return (
    <div className='text-[#ebebeb] fixed inset-0  gap-2.5 tracking-widest flex flex-col items-center  leaderBoard'>
      <Header />
      <Table />
      <Footer />
    </div>
  )
}
