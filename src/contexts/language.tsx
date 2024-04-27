import { useState, createContext } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('English')

  const handleLanguages = () => {
    const newLanguage = language === 'English' ? 'Spanish' : 'English'
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguages }}>
      {children}
    </LanguageContext.Provider>
  )
}
