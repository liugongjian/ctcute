const en: { [key: string]: any } = {
  language: {
    zh: 'Chinese',
    en: 'English',
  },
}

// 当前目录下所有 js 文件
const ctx = require.context('./', true, /.js$/)
ctx.keys().forEach(file => (en[file.replace(/^\.\/(\w+)\.js$/, '$1')] = ctx(file).default))

export default en
