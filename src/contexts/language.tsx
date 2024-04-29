import { useState, createContext } from 'react'
import { ProviderProps } from '../@types/global'

type Language = 'English' | 'Spanish'

interface LanguageContextType {
  language: Language
  handleLanguages: () => void
}

const initialLanguageContextValue: LanguageContextType = {
  language: 'Spanish',
  handleLanguages: () => {}
}

export const LanguageContext = createContext<LanguageContextType>(
  initialLanguageContextValue
)

export function LanguageProvider({ children }: ProviderProps) {
  const [language, setLanguage] = useState<Language>('English')

  const handleLanguages = () => {
    const newLanguage: Language = language === 'English' ? 'Spanish' : 'English'
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguages }}>
      {children}
    </LanguageContext.Provider>
  )
}