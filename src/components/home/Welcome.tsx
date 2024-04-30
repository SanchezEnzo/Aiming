import { useLanguages } from '../../hooks/useLanguage'
import { Settings } from './Settings'

export function Welcome() {
  const { language } = useLanguages()
  return (
    <main className='flex flex-col items-center'>
      <h1 className='animation tracking-[3px] text-[7rem]  font-[Work Sans, sans-serif] font-bold  '>
        Aiming
      </h1>

      <p className='animation mb-3 text-center text-[#ebebeb] tracking-[2px] text-[1.2rem] w-[70%] mt-[5vh] leading-8'>
        {language === 'English'
          ? 'Welcome to Aiming! \n In this game, you can test your aiming skills.' +
            ' Whether you are a beginner or consider yourself an expert, this' +
            ' challenge will make you have a good time. \n Prepare your mouse, and' +
            ' have fun! :)'
          : '¡Bienvenido a Aiming! En este juego, podrás poner a prueba tus habilidades de puntería sin importar si eres principiante o experto. Este desafío te garantiza momentos de diversión asegurada. ¡Prepara tu ratón y disfruta al máximo! :)'}
      </p>
      <Settings />
    </main>
  )
}
