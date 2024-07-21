import { useLanguages } from '../hooks/useLanguage'

export function MobileScreen() {
	const { language } = useLanguages()
	return (
		<div className='absolute flex justify-center items-center w-full h-full backdrop-blur-[5px]'>
			{language === 'English' ? (
				<p className='text-[22px] text-[#f1f1f1] font-semibold text-center'>
					This application is only available on PC
				</p>
			) : (
				<p className='text-[22px] text-[#f1f1f1] font-semibold text-center'>
					Esta aplicación esta solamente disponible en PC
				</p>
			)}
		</div>
	)
}
