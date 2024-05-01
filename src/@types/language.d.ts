export type Language = 'English' | 'Spanish'

export interface LanguageContextType {
  language: Language
  handleLanguages: () => void
}
