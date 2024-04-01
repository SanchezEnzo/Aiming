import { useId, useState } from 'react'
import { DIFFICULTIES } from '../../constants/difficulties'

export function Settings() {
  const [settings, setSettings] = useState({
    name: 'Enzo',
    difficulty: DIFFICULTIES.EASY
  })
  const nameId = useId()
  const difficultyId = useId()

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {}

  const handleChangeSettings = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {}

  return (
    <section className='flex w-[800px] justify-around tracking-[2px] text-[1.3rem] my-[8vh] '>
      <div className='flex flex-col items-center'>
        <label htmlFor={nameId} className='animation   font-bold'>
          {/* {language === 'English' ? 'Insert name' : 'Ingresar nombre'} */}
          Ingresar nombre
        </label>
        <input
          onChange={handleChangeName}
          type='text'
          id={nameId}
          className='animation w-[200px] tracking-[0.5px] pl-[5px] h-[35px] block rounded-md text-center focus-visible:outline-none text-neutral-800'
          value={settings.name}
        />
      </div>

      <div className='animation flex flex-col db-[transparent] items-center'>
        <label htmlFor={difficultyId} className='animation font-bold'>
          {/* {language === 'English' ? 'Difficulty' : 'Dificultad'} */}
          Dificultad
        </label>
        <select
          onChange={handleChangeSettings}
          id={difficultyId}
          className='animation h-[35px] tracking-[0.5px] rounded-md w-[200px] text-center text-neutral-800'
          value={settings.difficulty}
        >
          <option value={DIFFICULTIES.EASY}>
            {/* {language === 'English' ? 'Easy' : 'Fácil'} */}
            Facil
          </option>
          <option value={DIFFICULTIES.NORMAL}>{DIFFICULTIES.NORMAL}</option>
          <option value={DIFFICULTIES.HARD}>
            {/* {language === 'English' ? 'Hard' : 'Dificil'} */}
            Dificil
          </option>
        </select>
      </div>
    </section>
  )
}
