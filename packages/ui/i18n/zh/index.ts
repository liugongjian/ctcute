import VueI18n from 'vue-i18n'
import el from './element-ui'

const zh: { [key: string]: VueI18n.LocaleMessageObject } = {
  ...el,
  home: {
    title: '首页',
  },
}

const getFileName = (path: string) => path.split('/').pop().replace('.js', '')

// 当前目录下所有 js 文件
const ctx = require.context('./', true, /.js$/)
ctx.keys().forEach(file => {
  const key = file.replace(/^\.\/(\w+)\.js$/, '$1')
  switch (getFileName(file)) {
    // 当前文件不处理
    case getFileName(__filename):
      break
    // el 不允许自由覆写，仅支持在 element-ui.ts 中设置，以良好支持回退策略
    case 'el':
      // Object.assign(zh['el'], ctx(file).default)
      break
    // 默认直接赋值
    default:
      zh[key] = ctx(file).default
  }
})

export default zh
