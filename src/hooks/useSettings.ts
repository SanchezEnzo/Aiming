import { useContext } from 'react'
import { SettingsContext } from '../contexts/settings'

export function useSettings() {
  const context = useContext(SettingsContext)

  if (context === undefined)
    throw new Error('useSettings have to used within SettingsProvider')

  return context
}
