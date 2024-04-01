import { Footer } from '../components/leaderboard/Footer'
import { Header } from '../components/leaderboard/Header'
import { Table } from '../components/leaderboard/Table'
import { Confirm } from '../components/leaderboard/Confirm'

export default function Leaderboard() {
  return (
    <div className='text-[#ebebeb]'>
      <Header />
      <Table />
      <Confirm />
      <Footer />
    </div>
  )
}
