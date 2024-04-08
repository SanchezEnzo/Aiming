import { DIFFICULTIES } from '../../constants/difficulties'

export function Table() {
  return (
    <table className='w-[810px]'>
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
        {/* {difficulties === DIFFICULTIES.EASY &&
          sortedLeaderBoardEasy.map((player, num) => (
            <tr className='flex justify-around mt-[0.5vh]' key={player.id}>
              <td className='text-center block w-[270px]'>{num + 1}.</td>
              <td className='text-center block w-[270px]'>
                {player.name ? player.name : 'no name'}
              </td>
              <td className='text-center block w-[270px]'>{player.score}</td>
            </tr>
          ))}
        {difficulties === DIFFICULTIES.NORMAL &&
          sortedLeaderBoardNormal.map((player, num) => (
            <tr className='flex justify-around mt-[0.5vh]' key={player.id}>
              <td className='text-center block w-[270px]'>{num + 1}.</td>
              <td className='text-center block w-[270px]'>
                {player.name ? player.name : 'no name'}
              </td>
              <td className='text-center block w-[270px]'>{player.score}</td>
            </tr>
          ))}
        {difficulties === DIFFICULTIES.HARD &&
          sortedLeaderBoardHard.map((player, num) => (
            <tr className='flex justify-around mt-[0.5vh]' key={player.id}>
              <td className='text-center block w-[270px]'>{num + 1}.</td>
              <td className='text-center block w-[270px]'>
                {player.name ? player.name : 'no name'}
              </td>
              <td className='text-center block w-[270px]'>{player.score}</td>
            </tr>
          ))} */}
      </tbody>
    </table>
  )
}
