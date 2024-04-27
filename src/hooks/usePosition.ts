import { useEffect, useRef, useState } from 'react'
import { useGame } from './useGame'
import { useScore } from './useScore'
import { useSettings } from './useSettings'
import { DIFFICULTIES } from '../constants/difficulties'
import { STATES_GAME } from '../constants/statesGames'
import { Position } from '../@types/global'

export function usePosition() {
  const { state } = useGame()
  const { settings } = useSettings()
  const { setScore } = useScore()
  const [changeValue, setChangeValue] = useState(false)
  const [timeToChangePosition, setTimeToChangePosition] = useState<number>(0)
  const [position, setPosition] = useState<Position>({
    positionX: Math.round(Math.random() * 100) + '%',
    positionY: Math.round(Math.random() * 100) + '%'
  })
  const isFirstCount = useRef(true)

  useEffect(() => {
    switch (settings.difficulty) {
      case DIFFICULTIES.EASY: {
        setTimeToChangePosition(1350)
        break
      }
      case DIFFICULTIES.NORMAL: {
        setTimeToChangePosition(1000)
        break
      }
      case DIFFICULTIES.HARD: {
        setTimeToChangePosition(650)
        break
      }
    }

    if (state === STATES_GAME.PLAYING) {
      const intervalPosition = setInterval(() => {
        if (changeValue) return
        setPosition({
          positionX: Math.round(Math.random() * 100) + '%',
          positionY: Math.round(Math.random() * 100) + '%'
        })
        setChangeValue(true)
      }, timeToChangePosition)

      const finishInterval = setTimeout(() => {
        clearInterval(intervalPosition)
      }, 30000)

      return () => {
        clearInterval(intervalPosition)
        clearTimeout(finishInterval)
      }
    }

    if (state === STATES_GAME.FINISHED || state === STATES_GAME.STOPPED) {
      setChangeValue(false)
      isFirstCount.current = true
    }
  }, [state, settings])

  const handleClick = () => {
    if (changeValue || isFirstCount.current) {
      setScore((prevCount: number) => prevCount + 1)
      setChangeValue(false)
      if (isFirstCount.current) isFirstCount.current = false
    }
  }
  return { position, handleClick }
}
