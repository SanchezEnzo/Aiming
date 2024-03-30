export function Settings() {
  return (
    <section className='flex w-[800px] justify-around tracking-[2px] text-[1.3rem] my-[8vh] '>
      <div className='flex flex-col items-center'>
        <label htmlFor={nameId} className='animation text-[#ebebeb]  font-bold'>
          {language === 'English' ? 'Insert name' : 'Ingresar nombre'}
        </label>
        <input
          onChange={handleChangeName}
          type='text'
          id={nameId}
          className='animation w-[200px] tracking-[0.5px] pl-[5px] h-[35px] block rounded-md text-center focus-visible:outline-none'
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
          onChange={handleChangeSettings}
          id={difficultyId}
          className='animation h-[35px] tracking-[0.5px] rounded-md w-[200px] text-center '
          value={settings.difficulty}
        >
          <option value={DIFFICULTIES.EASY}>
            {language === 'English' ? 'Easy' : 'Fácil'}
          </option>
          <option value={DIFFICULTIES.NORMAL}>{DIFFICULTIES.NORMAL}</option>
          <option value={DIFFICULTIES.HARD}>
            {language === 'English' ? 'Hard' : 'Dificil'}
          </option>
        </select>
      </div>
    </section>
  )
}
