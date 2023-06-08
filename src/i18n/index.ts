import { createI18n } from '@cutedesign/ui'
import zh from './zh'
import en from './en'
import settings from '@/settings'

const i18n = createI18n({
  storageKey: settings.i18nStorageKey, // 本地持久化时的 localStorage key
  defaultLang: settings.i18nDefaultLang, // 默认展示的语言
})

i18n.mergeLocaleMessage('zh', zh)
i18n.mergeLocaleMessage('en', en)

export default i18n
