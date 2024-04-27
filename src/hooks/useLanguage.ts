import { LanguageContext } from '../contexts/language'
import { useContext } from 'react'

export function useLanguages() {
  const context = useContext(LanguageContext)

  if (context === undefined)
    throw new Error('useLanguages have to used within LanguageProvider')

  return context
}
