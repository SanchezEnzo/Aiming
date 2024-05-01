import { useState, createContext } from 'react'
import { ProviderProps } from '../@types/global'
import { Language, LanguageContextType } from '../@types/language'

const initialLanguageContextValue: LanguageContextType = {
  language: 'Spanish',
  handleLanguages: () => {}
}

export const LanguageContext = createContext<LanguageContextType>(
  initialLanguageContextValue
)

export function LanguageProvider({ children }: ProviderProps) {
  const [language, setLanguage] = useState<Language>('Spanish')

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
