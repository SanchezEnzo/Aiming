import { useLeaderBoard } from '../hooks/useLeaderBoard'

const { leaderBoardEasy, leaderBoardNormal, leaderBoardHard } = useLeaderBoard()

const sortedLeaderBoardEasy = leaderBoardEasy
	.sort((a: { score: number }, b: { score: number }) => b.score - a.score)
	.slice(0, 10)
const sortedLeaderBoardNormal = leaderBoardNormal
	.sort((a: { score: number }, b: { score: number }) => b.score - a.score)
	.slice(0, 10)
const sortedLeaderBoardHard = leaderBoardHard
	.sort((a: { score: number }, b: { score: number }) => b.score - a.score)
	.slice(0, 10)

export const TableVariables = [
	sortedLeaderBoardEasy,
	sortedLeaderBoardHard,
	sortedLeaderBoardNormal
]
