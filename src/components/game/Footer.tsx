import { useGame } from '../../hooks/useGame'
import { STATES_GAME } from '../../constants/statesGames'
import { useLanguages } from '../../hooks/useLanguage'

export function Footer() {
	const { state, changeCounting, changePlaying, changeStopped, changeInitial } =
		useGame()
	const { language } = useLanguages()

	return (
		<footer className='mb-2'>
			{state === STATES_GAME.INITIAL && (
				<>
					<button
						className='bg-transparent border-none cursor-pointer text-[1.5rem] text-[#ebebeb] tracking-[2px] font-bold  z-20 hover:text-white'
						onClick={() => {
							changeCounting({ payload: STATES_GAME.COUNTING })
							setTimeout(() => {
								changePlaying({ payload: STATES_GAME.PLAYING })
							}, 2000)
						}}
					>
						{language === 'English' ? 'Start' : 'Iniciar'}
					</button>
				</>
			)}
			{state === STATES_GAME.PLAYING && (
				<button
					className='bg-transparent border-none cursor-pointer text-[1.5rem] text-[#ebebeb] tracking-[2px] font-bold  z-20 hover:text-white'
					onClick={() => changeStopped({ payload: STATES_GAME.STOPPED })}
				>
					{language === 'English' ? 'Stop' : 'Pausa'}
				</button>
			)}
			{(state === STATES_GAME.STOPPED || state === STATES_GAME.FINISHED) && (
				<button
					className='bg-transparent border-none cursor-pointer text-[1.5rem] text-[#ebebeb] tracking-[2px] font-bold  z-20 hover:text-white'
					onClick={() => changeInitial({ payload: STATES_GAME.INITIAL })}
				>
					{language === 'English' ? 'Reset' : 'Reiniciar'}
				</button>
			)}
		</footer>
	)
}
