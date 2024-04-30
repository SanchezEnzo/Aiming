import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { DIFFICULTIES } from '../constants/difficulties'
import { ProviderProps } from '../@types/global'

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

interface LeaderBoardContextType {
  leaderBoard: LeaderBoardStateType
  leaderBoardEasy: LeaderBoardType[]
  leaderBoardNormal: LeaderBoardType[]
  leaderBoardHard: LeaderBoardType[]
  setLeaderBoard: Dispatch<SetStateAction<LeaderBoardStateType>>
  clearLeaderBoard: () => void
}

const initialLeaderBoardContextValue: LeaderBoardContextType = {
  leaderBoard: {
    leaderBoardEasy: [],
    leaderBoardNormal: [],
    leaderBoardHard: []
  },
  leaderBoardEasy: [],
  leaderBoardNormal: [],
  leaderBoardHard: [],
  setLeaderBoard: () => {},
  clearLeaderBoard: () => {}
}

export const LeaderBoardContext = createContext<LeaderBoardContextType>(
  initialLeaderBoardContextValue
)

export function LeaderBoardProvider({ children }: ProviderProps) {
  const [leaderBoard, setLeaderBoard] = useState<LeaderBoardStateType>({
    leaderBoardEasy: JSON.parse(
      window.localStorage.getItem(DIFFICULTIES.Easy) || '[]'
    ),
    leaderBoardNormal: JSON.parse(
      window.localStorage.getItem(DIFFICULTIES.Normal) || '[]'
    ),
    leaderBoardHard: JSON.parse(
      window.localStorage.getItem(DIFFICULTIES.Hard) || '[]'
    )
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
