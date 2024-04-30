import { DIFFICULTIES } from '../../constants/difficulties'
import { useConfirmClear } from '../../hooks/useConfirmClear'
import { useDifficulties } from '../../hooks/useDifficulties'
import { useLanguages } from '../../hooks/useLanguage'
import { useLeaderBoard } from '../../hooks/useLeaderBoard'
import { CardConfirm } from './CardConfirm'

export function Table() {
  const { difficulties, handleDifficulty } = useDifficulties()
  const { language } = useLanguages()
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
  const { confirmClear } = useConfirmClear()

  return (
    <>
      <h3 className='text-7xl my-[2vh]'>
        {language === 'English' ? 'Leaderboard' : 'Tabla de clasificación'}
      </h3>
      <ul className='flex justify-around w-[810px] mb-[2vh] border border-solid border-[#ebebeb] rounded-t-xl p-0.5 text-center text-[1.5rem]'>
        <li
          className={
            difficulties === DIFFICULTIES.Easy
              ? 'transition bg-[#713ee1] text-white cursor-pointer rounded-tl-xl w-[270px]'
              : 'cursor-pointer w-[270px] hover:text-white'
          }
          onClick={handleDifficulty}
          title={DIFFICULTIES.Easy}
        >
          {language === 'English' ? 'Easy' : 'Fácil'}
        </li>
        <li
          className={
            difficulties === DIFFICULTIES.Normal
              ? 'transition bg-[#713ee1] text-white cursor-pointer w-[270px]'
              : 'cursor-pointer w-[270px] hover:text-white'
          }
          onClick={handleDifficulty}
          title={DIFFICULTIES.Normal}
        >
          {DIFFICULTIES.Normal}
        </li>
        <li
          className={
            difficulties === DIFFICULTIES.Hard
              ? 'transition bg-[#713ee1] text-white cursor-pointer rounded-tr-xl w-[270px]'
              : 'cursor-pointer w-[270px] hover:text-white'
          }
          onClick={handleDifficulty}
          title={DIFFICULTIES.Hard}
        >
          {language === 'English' ? 'Hard' : 'Dificil'}
        </li>
      </ul>
      <table className='w-[810px]'>
        <thead>
          <tr className='flex justify-around text-[1.2rem]'>
            <th className='block w-[100px]'>
              {language === 'English' ? 'Position' : 'Posición'}
            </th>
            <th className='block w-[100px]'>
              {language === 'English' ? 'Name' : 'Nombre'}
            </th>
            <th className='block w-[100px]'>
              {language === 'English' ? 'Score' : 'Puntaje'}
            </th>
          </tr>
          <tr>
            <th colSpan={3}>
              <hr />
            </th>
          </tr>
        </thead>
        <tbody>
          {difficulties === DIFFICULTIES.Easy &&
            sortedLeaderBoardEasy.map((player, num) => (
              <tr className='flex justify-around mt-[0.5vh]' key={player.id}>
                <td className='text-center block w-[270px]'>{num + 1}.</td>
                <td className='text-center block w-[270px]'>
                  {player.name ? player.name : 'no name'}
                </td>
                <td className='text-center block w-[270px]'>{player.score}</td>
              </tr>
            ))}
          {difficulties === DIFFICULTIES.Normal &&
            sortedLeaderBoardNormal.map((player, num) => (
              <tr className='flex justify-around mt-[0.5vh]' key={player.id}>
                <td className='text-center block w-[270px]'>{num + 1}.</td>
                <td className='text-center block w-[270px]'>
                  {player.name ? player.name : 'no name'}
                </td>
                <td className='text-center block w-[270px]'>{player.score}</td>
              </tr>
            ))}
          {difficulties === DIFFICULTIES.Hard &&
            sortedLeaderBoardHard.map((player, num) => (
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
      {confirmClear && <CardConfirm />}
    </>
  )
}
