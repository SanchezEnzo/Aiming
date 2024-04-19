import { ReactNode, createContext, useState } from 'react'
import { DIFFICULTIES } from '../constants/difficulties'

export interface LeaderBoardType {
  name: string
  score: number
  id: number
}

interface LeaderBoardStateType {
  leaderBoardEasy: LeaderBoardType[]
  leaderBoardNormal: LeaderBoardType[]
  leaderBoardHard: LeaderBoardType[]
}

interface LeaderBoardProviderProps {
  children: ReactNode
}

export const LeaderBoardContext = createContext<any>({})

export function LeaderBoardProvider({ children }: LeaderBoardProviderProps) {
  const [leaderBoard, setLeaderBoard] = useState<LeaderBoardStateType>({
    leaderBoardEasy:
      JSON.parse(window.localStorage.getItem(DIFFICULTIES.EASY)) || [],
    leaderBoardNormal:
      JSON.parse(window.localStorage.getItem(DIFFICULTIES.NORMAL)) || [],
    leaderBoardHard:
      JSON.parse(window.localStorage.getItem(DIFFICULTIES.HARD)) || []
  })

  const clearLeaderBoard = () => {
    window.localStorage.clear()
    setLeaderBoard({
      leaderBoardEasy: [],
      leaderBoardNormal: [],
      leaderBoardHard: []
    })
  }

  return (
    <LeaderBoardContext.Provider
      value={{
        leaderBoard,
        leaderBoardEasy: leaderBoard.leaderBoardEasy,
        leaderBoardNormal: leaderBoard.leaderBoardNormal,
        leaderBoardHard: leaderBoard.leaderBoardHard,
        setLeaderBoard,
        clearLeaderBoard
      }}
    >
      {children}
    </LeaderBoardContext.Provider>
  )
}
