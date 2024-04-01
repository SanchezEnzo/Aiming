export function Header() {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-[#ebebeb]'>Leaderboard</h1>
      <div className='flex items-center space-x-2'>
        <span className='text-[#ebebeb]'>Filter by:</span>
        <select
          className='bg-[#333] text-[#ebebeb] rounded-md px-2 py-1'
          name='difficulty'
          id='difficulty'
        >
          <option value='EASY'>Easy</option>
          <option value='NORMAL'>Normal</option>
          <option value='HARD'>Hard</option>
        </select>
      </div>
    </div>
  )
}
