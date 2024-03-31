import { Settings } from './Settings'

export function Welcome() {
  return (
    <main className='flex flex-col items-center'>
      <h1 className='animation tracking-[3px] text-[7rem]  font-[Work Sans, sans-serif] font-bold  '>
        Aiming
      </h1>

      <p className=' animation mb-3 text-center tracking-[2px] text-[1.2rem] w-[70%] mt-[5vh] leading-8'>
        ¡Bienvenido a Aiming! En este juego, podrás poner a prueba tus
        habilidades de puntería sin importar si eres principiante o experto.
        Este desafío te garantiza momentos de diversión asegurada. ¡Prepara tu
        ratón y disfruta al máximo! :)
      </p>
      <Settings />
    </main>
  )
}
