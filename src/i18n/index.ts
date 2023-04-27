import { createI18n } from '@cutedesign/ui'
import zh from './zh'
import en from './en'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = createI18n({
  storageKey: 'cute-lang', // 本地持久化时的 localStorage key
  defaultLang: 'zh', // 默认展示的语言
})

i18n.mergeLocaleMessage('zh', zh)
i18n.mergeLocaleMessage('en', en)

export default i18n
