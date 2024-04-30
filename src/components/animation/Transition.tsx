import { motion as m, useIsPresent } from 'framer-motion'

export function Transition() {
  const isPresent = useIsPresent()
  return (
    <m.div
      initial={{ scaleY: 1 }}
      animate={{
        scaleY: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
      }}
      exit={{
        scaleY: 1,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
      }}
      style={{ originY: isPresent ? 0 : 1 }}
      className='fixed top-0 left-0 right-0 bottom-0 bg-[#722ebaf3] z-10'
    />
  )
}
