import { LeaderBoardContext } from '../contexts/leaderBoard'
import { useContext } from 'react'
import { useSettings } from './useSettings'
import { useScore } from './useScore'
import { DIFFICULTIES } from '../constants/difficulties'
import { useGame } from './useGame'
import { STATES_GAME } from '../constants/statesGames'

export function useLeaderBoard() {
  const {
    leaderBoard,
    leaderBoardEasy,
    leaderBoardNormal,
    leaderBoardHard,
    setLeaderBoard,
    clearLeaderBoard
  } = useContext(LeaderBoardContext)
  const { settings } = useSettings()
  const { score } = useScore()
  const { state, changeStopped } = useGame()

  const updateLeaderBoard = () => {
    if (settings.difficulty === DIFFICULTIES.Easy) {
      const newLeaderBoard = [
        ...leaderBoardEasy,
        { name: settings.name, score: score, id: leaderBoardEasy.length }
      ]
      setLeaderBoard({ ...leaderBoard, leaderBoardEasy: newLeaderBoard })
      window.localStorage.setItem(
        DIFFICULTIES.Easy,
        JSON.stringify(newLeaderBoard)
      )
    }
    if (settings.difficulty === DIFFICULTIES.Normal) {
      const newLeaderBoard = [
        ...leaderBoardNormal,
        { name: settings.name, score: score, id: leaderBoardNormal.length }
      ]
      setLeaderBoard({ ...leaderBoard, leaderBoardNormal: newLeaderBoard })
      window.localStorage.setItem(
        DIFFICULTIES.Normal,
        JSON.stringify(newLeaderBoard)
      )
    }
    if (settings.difficulty === DIFFICULTIES.Hard) {
      const newLeaderBoard = [
        ...leaderBoardHard,
        { name: settings.name, score: score, id: leaderBoardHard.length }
      ]
      setLeaderBoard({ ...leaderBoard, leaderBoardHard: newLeaderBoard })
      window.localStorage.setItem(
        DIFFICULTIES.Hard,
        JSON.stringify(newLeaderBoard)
      )
    }
    if (state === STATES_GAME.FINISHED) {
      changeStopped({ payload: STATES_GAME.STOPPED })
    }
  }

  return {
    leaderBoardEasy,
    leaderBoardNormal,
    leaderBoardHard,
    updateLeaderBoard,
    clearLeaderBoard
  }
}
