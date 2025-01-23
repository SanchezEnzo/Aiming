import { useId } from 'react'
import { useSettings } from '../../hooks/useSettings'
import { DIFFICULTIES } from '../../constants/difficulties'
import { useLanguages } from '../../hooks/useLanguage'

export function Settings() {
  const nameId = useId()
  const difficultyId = useId()
  const { settings, handleChangeDifficulty, handleChangeName } = useSettings()
  const { language } = useLanguages()

  return (
    <section className='flex w-[800px] justify-around tracking-[2px] text-[1.3rem] my-[8vh] '>
      <div className='flex flex-col items-center'>
        <label htmlFor={nameId} className='animation text-[#ebebeb]  font-bold'>
          {language === 'English' ? 'Insert name' : 'Ingresar nombre'}
        </label>
        <input
          onChange={e =>  handleChangeName(e)}
          type='text'
          id={nameId}
          className='animation w-[200px] tracking-[0.5px] pl-[5px] text-black h-[35px] block rounded-md text-center focus-visible:outline-none'
          value={settings.name}
        />
      </div>

      <div className='animation flex flex-col db-[transparent] items-center'>
        <label
          htmlFor={difficultyId}
          className='animation text-[#ebebeb]  font-bold'
        >
          {language === 'English' ? 'Difficulty' : 'Dificultad'}
        </label>
        <select
          onChange={e => handleChangeDifficulty(e)}
          id={difficultyId}
          className='animation text-black h-[35px] tracking-[0.5px] rounded-md w-[200px] text-center '
          value={settings.difficulty}
        >
          <option value={DIFFICULTIES.Easy}>
            {language === 'English' ? 'Easy' : 'Fácil'}
          </option>
          <option value={DIFFICULTIES.Normal}>{DIFFICULTIES.Normal}</option>
          <option value={DIFFICULTIES.Hard}>
            {language === 'English' ? 'Hard' : 'Difícil'}
          </option>
        </select>
      </div>
    </section>
  )
}
