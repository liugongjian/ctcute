const zh: { [key: string]: any } = {
  language: {
    zh: '中文',
    en: '英文',
  },
}

// 当前目录下所有 js 文件
const ctx = require.context('./', true, /.js$/)
ctx.keys().forEach(file => (zh[file.replace(/^\.\/(\w+)\.js$/, '$1')] = ctx(file).default))

export default zh
