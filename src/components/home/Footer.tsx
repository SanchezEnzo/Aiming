import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className=' flex'>
      <Link
        to='/game'
        className='no-underline text-[1.5rem] tracking-[2px] link-to-play animation font-bold animate-[slide-out-left] inline-block py-[5px] relative hover:bg-[0]'
      >
        Play
      </Link>
    </footer>
  )
}
