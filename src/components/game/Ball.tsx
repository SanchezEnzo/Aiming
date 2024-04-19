import { Position } from '../../service/types'
import { BallIcon } from '../Icons'

export function Ball({
  handleClick,
  position
}: {
  handleClick: () => void
  position: Position
}) {
  return (
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
  )
}
