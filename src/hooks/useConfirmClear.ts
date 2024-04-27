import { useContext } from 'react'
import { ConfirmClearContext } from '../contexts/confirm'

export function useConfirmClear() {
  const context = useContext(ConfirmClearContext)

  if (context === undefined)
    throw new Error('useConfirmeClear have to used within ConfirmClearContext')

  return context
}
