import { Link } from 'react-router-dom'
import { useLanguages } from '../../hooks/useLanguage'

export function Footer() {
  const { language } = useLanguages()
  return (
    <footer className=' flex'>
      <Link
        to='/game'
        className='no-underline text-[1.5rem] tracking-[2px] link-to-play animation font-bold animate-[slide-out-left] inline-block py-[5px] relative hover:bg-[0]'
      >
        {language === 'English' ? 'Play' : 'Jugar'}
      </Link>
    </footer>
  )
}
