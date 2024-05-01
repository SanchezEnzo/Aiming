import { Dispatch, SetStateAction } from 'react'

export interface LeaderBoardType {
  name: string
  score: number
  id: number
}

export interface LeaderBoardStateType {
  leaderBoardEasy: LeaderBoardType[]
  leaderBoardNormal: LeaderBoardType[]
  leaderBoardHard: LeaderBoardType[]
}

export interface LeaderBoardContextType {
  leaderBoard: LeaderBoardStateType
  leaderBoardEasy: LeaderBoardType[]
  leaderBoardNormal: LeaderBoardType[]
  leaderBoardHard: LeaderBoardType[]
  setLeaderBoard: Dispatch<SetStateAction<LeaderBoardStateType>>
  clearLeaderBoard: () => void
}
