import enLocale from 'element-ui/lib/locale/lang/en'

const en: { [key: string]: any } = {
  el: {
    ...enLocale.el,
    pagination: {
      goto: 'Go to',
      pagesize: '',
      total: 'Total {total}',
      pageClassifier: '',
    },
    colorpicker: {
      clear: 'Cancel',
      confirm: 'Confirm',
    },
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
    // el 采用合并策略
    case 'el':
      Object.assign(en['el'], ctx(file).default)
      break
    // 默认直接赋值
    default:
      en[key] = ctx(file).default
  }
})

export default en
