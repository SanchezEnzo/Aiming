import { motion, spring } from 'framer-motion'
// import { useLanguages } from '../../hooks/useLanguages'

export function Toggle({
  firstParam,
  secondParam
}: {
  firstParam: string
  secondParam: string
}) {
  // const { language, handleLanguages } = useLanguages()

  return (
    <div className='animation flex items-center justify-between text-white '>
      <span>{firstParam}</span>
      <div
        // onClick={handleLanguages}
        // data-language={language}
        className='flex items-center justify-start w-[50px] h-[30px] bg-[#ffffffbb] rounded-2xl cursor-pointer data-[language=Spanish]:justify-end'
      >
        <motion.div
          layout
          transition={spring}
          className='h-[25px] w-[25px] rounded-full bg-white'
        ></motion.div>
      </div>
      <span>{secondParam}</span>
    </div>
  )
}
