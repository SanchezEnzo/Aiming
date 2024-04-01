import { STATES } from '../constants/states'
import { BallIcon } from './Icons'

export function Ball({ state, handleClick, position }) {
  return (
    <main className='relative w-[90%] h-4/5'>
      {state === STATES.GAMING && (
        <figure
          onClick={handleClick}
          className='absolute z-30 w-[50px] h-[50px] bg-[#ebebeb] rounded-full cursor-pointer border-[0.5px] border-solid border-black'
          style={{
            top: position.positionX,
            left: position.positionY,
            boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2) '
          }}
        >
          <BallIcon />
        </figure>
      )}
    </main>
  )
}
