import Vue from 'vue'
import VueI18n from 'vue-i18n'

// 引入自定义语言配置
import zh from './zh/index'
import en from './en/index'

// 引入UI框架语言配置---elementui
import locale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const DEFAULT_OPTIONS = {
  storageKey: 'lang',
  defaultLang: 'zh',
}

export default function createI18nInstance(options?: Partial<typeof DEFAULT_OPTIONS>) {
  const { storageKey, defaultLang } = Object.assign({}, DEFAULT_OPTIONS, options)

  const i18n = new VueI18n({
    locale: localStorage.getItem(storageKey) || defaultLang,
    fallbackLocale: defaultLang,
    messages: {
      zh,
      en,
    },
  })

  // element-ui 兼容 i18n 6+ 高版本
  locale.i18n((key: string, value: VueI18n.Values | undefined) => i18n.t(key, value))

  return i18n
}
