import { useCountDown } from '../../hooks/useCountDown'
import { useLanguages } from '../../hooks/useLanguage'

export function CountDown() {
  const countDown = useCountDown()
  const { language } = useLanguages()

  if (countDown > 0)
    return (
      <h2 className='text-[4rem] text-white absolute top-[40%] mx-aut countDown'>
        {countDown}
      </h2>
    )
  if (countDown === 0)
    return (
      <h2 className='text-[4rem] text-white absolute top-[40%] mx-auto countDown'>
        {language === 'English' ? 'Go!' : 'Ya!'}
      </h2>
    )
}
