import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const zh: { [key: string]: any } = {
  el: {
    ...zhLocale.el,
    pagination: {
      goto: '前往',
      pagesize: '',
      total: '共{total}条',
      pageClassifier: '页',
    },
    colorpicker: {
      clear: '取 消',
      confirm: '确 定',
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
      Object.assign(zh['el'], ctx(file).default)
      break
    // 默认直接赋值
    default:
      zh[key] = ctx(file).default
  }
})

export default zh
