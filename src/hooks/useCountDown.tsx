import { useEffect, useRef, useState } from 'react'

export function useCountDown() {
  const [countDown, setCountDown] = useState(3)
  const timerId = useRef()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown(prevState => prevState - 1)
    }, 500)
    return () => clearInterval(timerId.current)
  }, [])

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timerId.current)
    }
  }, [countDown])

  return countDown
}
