import { useContext, useEffect } from 'react'
import { useGame } from './useGame'
import { useScore } from './useScore'
import { useLeaderBoard } from './useLeaderBoard'
import { TimeContext } from '../contexts/time'
import { STATES_GAME } from '../constants/statesGames'

export function useTime() {
  const { state, setState } = useGame()
  const { setScore } = useScore()
  const { time, setTime } = useContext(TimeContext)
  const { updateLeaderBoard } = useLeaderBoard()

  console.log('useTime')

  useEffect(() => {
    if (state === STATES_GAME.PLAYING) {
      const intervalId = setInterval(() => {
        setTime((prevTime: number) => prevTime + 1)
      }, 100)

      const finishInterval = setTimeout(() => {
        clearInterval(intervalId)
        setState(STATES_GAME.FINISHED)
      }, 30000)

      return () => {
        clearInterval(intervalId)
        clearTimeout(finishInterval)
      }
    }

    if (state === STATES_GAME.INITIAL) {
      setTime(0)
      setScore(0)
      return
    }

    if (state === STATES_GAME.FINISHED) {
      updateLeaderBoard()
    }
  }, [state])

  const timeRound = Math.round(time * 10) / 100
  const timeToShow = timeRound.toFixed(1)

  return { time, timeToShow }
}
