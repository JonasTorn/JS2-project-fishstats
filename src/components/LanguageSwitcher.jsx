import { useLanguageStore } from '@/stores/languageStore'
import { Button } from '@/components/ui/button'

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageStore()

  return (
    <Button 
      onClick={() => setLanguage(language === 'en' ? 'sv' : 'en')}
      variant="ghost"
    >
      {language === 'en' ? '🇬🇧' : '🇸🇪'}
    </Button>
  )
}