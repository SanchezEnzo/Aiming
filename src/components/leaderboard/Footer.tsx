import { useConfirmClear } from '../../hooks/useConfirmClear'
import { useLanguages } from '../../hooks/useLanguage'
import { CardConfirm } from './CardConfirm'

export function Footer() {
  const { language } = useLanguages()
  const { handleConfirmClear } = useConfirmClear()

  return (
    <footer className='fixed bottom-[4vh]'>
      <button
        className='cursor-pointer mt-2.5 flex justify-center w-[250px] border-solid border font-bold py-[5px] rounded-[10px] bg-[#6436c7] hover:text-white'
        onClick={handleConfirmClear}
      >
        {language === 'English' ? 'Clear board' : 'Limpiar tabla'}
      </button>
      {false && (
        <div className='fixed bottom-0 top-0 left-0 right-0 bg-[#783CFF]/75 blur-sm z-20 '>
          <CardConfirm />
        </div>
      )}
    </footer>
  )
}
