import { useEffect, useRef, useState } from 'react'
import { useGame } from './useGame'
import { useScore } from './useScore'
import { useSettings } from './useSettings'
import { DIFFICULTIES } from '../constants/difficulties'
import { STATES_GAME } from '../constants/statesGames'
import { Position } from '../@types/global'

export function usePosition() {
  const { state , changeFinished } = useGame()
  const { settings } = useSettings()
  const { score, setScore } = useScore()
  const [changedValue, setChangedValue] = useState(false)
  const [timeToChangePosition, setTimeToChangePosition] = useState<number>(0)
  const [position, setPosition] = useState<Position>({
    positionX: Math.round(Math.random() * 100) + '%',
    positionY: Math.round(Math.random() * 100) + '%'
  })
  const isFirstCount = useRef(true)

  useEffect(() => {
    switch (settings.difficulty) {
      case DIFFICULTIES.Easy: {
        setTimeToChangePosition(1350)
        break
      }
      case DIFFICULTIES.Normal: {
        setTimeToChangePosition(1000)
        break
      }
      case DIFFICULTIES.Hard: {
        setTimeToChangePosition(650)
        break
      }
    }

    if (state === STATES_GAME.PLAYING) {
      const intervalPosition = setInterval(() => {
        if (changedValue) return
        setPosition({
          positionX: Math.round(Math.random() * 100) + '%',
          positionY: Math.round(Math.random() * 100) + '%'
        })
        setChangedValue(true)
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
      setChangedValue(false)
      isFirstCount.current = true
    }
  }, [state, settings])

  const changePosition = () => {
		if (changedValue || isFirstCount.current) {
      setScore((prevCount: number) => prevCount + 1)
      setChangedValue(false)
      if (isFirstCount.current) isFirstCount.current = false
    }
  }
  return { position, changePosition }
}
