import { Settings } from './Settings'

export function Welcome() {
  return (
    <main className='h-[50%] flex flex-col items-center'>
      <h1>Aiming</h1>

      <p className='w-[70%]'>
        ¡Bienvenido a Aiming! En este juego, podrás poner a prueba tus
        habilidades de puntería sin importar si eres principiante o experto.
        Este desafío te garantiza momentos de diversión asegurada. ¡Prepara tu
        ratón y disfruta al máximo! :)
      </p>
      <Settings />
    </main>
  )
}
