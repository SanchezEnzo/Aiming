import { DIFFICULTIES } from '../../constants/difficulties'
import { LeaderBoardType } from '../../contexts/leaderBoard'
import { useDifficulties } from '../../hooks/useDifficulties'
import { useLeaderBoard } from '../../hooks/useLeaderBoard'

export function Table() {
  const { difficulties } = useDifficulties()
  const { leaderBoardEasy, leaderBoardNormal, leaderBoardHard } =
    useLeaderBoard()
  const sortedLeaderBoardEasy = leaderBoardEasy
    .sort((a: { score: number }, b: { score: number }) => b.score - a.score)
    .slice(0, 10)
  const sortedLeaderBoardNormal = leaderBoardNormal
    .sort((a: { score: number }, b: { score: number }) => b.score - a.score)
    .slice(0, 10)
  const sortedLeaderBoardHard = leaderBoardHard
    .sort((a: { score: number }, b: { score: number }) => b.score - a.score)
    .slice(0, 10)

  return (
    <table className='w-[810px] animation'>
      <thead>
        <tr className='flex justify-around text-[1.2rem]'>
          <th className='block w-[100px]'>
            {/* {language === 'English' ? 'Position' : 'Posición'} */}
            Posicion
          </th>
          <th className='block w-[100px]'>
            {/* {language === 'English' ? 'Name' : 'Nombre'} */}
            Nombre
          </th>
          <th className='block w-[100px]'>
            {/* {language === 'English' ? 'Score' : 'Puntaje'} */}
            Puntaje
          </th>
        </tr>
        <tr>
          <th colSpan={3}>
            <hr />
          </th>
        </tr>
      </thead>
      <tbody>
        {difficulties === DIFFICULTIES.easy &&
          sortedLeaderBoardEasy.map((player: LeaderBoardType, num: number) => (
            <tr className='flex justify-around mt-[0.5vh]' key={player.id}>
              <td className='text-center block w-[270px]'>{num + 1}.</td>
              <td className='text-center block w-[270px]'>
                {player.name ? player.name : 'no name'}
              </td>
              <td className='text-center block w-[270px]'>{player.score}</td>
            </tr>
          ))}
        {difficulties === DIFFICULTIES.normal &&
          sortedLeaderBoardNormal.map(
            (player: LeaderBoardType, num: number) => (
              <tr className='flex justify-around mt-[0.5vh]' key={player.id}>
                <td className='text-center block w-[270px]'>{num + 1}.</td>
                <td className='text-center block w-[270px]'>
                  {player.name ? player.name : 'no name'}
                </td>
                <td className='text-center block w-[270px]'>{player.score}</td>
              </tr>
            )
          )}
        {difficulties === DIFFICULTIES.hard &&
          sortedLeaderBoardHard.map((player: LeaderBoardType, num: number) => (
            <tr className='flex justify-around mt-[0.5vh]' key={player.id}>
              <td className='text-center block w-[270px]'>{num + 1}.</td>
              <td className='text-center block w-[270px]'>
                {player.name ? player.name : 'no name'}
              </td>
              <td className='text-center block w-[270px]'>{player.score}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}
