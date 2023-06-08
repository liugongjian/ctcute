/**
 * 配置文件根据.env.[mode]中设置的NODE_ENV的值匹配对应的配置文件settings.[environment].js，[mode]则是根据vue-cli-service serve命令--mode参数所指定。
 * 默认情况下，mode有三种模式development、test、production
 * 关于Vue CLI 模式与环境变量说明详见：https://cli.vuejs.org/zh/guide/mode-and-env.html
 * 如果您不想通过环境来区分配置文件，比如在某些场景下想根据不同的业务类型来区分配置文件，那么需要对当前/settings/index.js进行一些改造：
 * 1）首先在环境变量中新增一个变量，建议以VUE_APP_开头，变量将通过 webpack.DefinePlugin 静态地嵌入到客户端侧的代码中，例如在.env.ctyun下设置VUE_APP_TYPE='ctyun'，在.env.iam下设置VUE_APP_TYPE='iam'
 * 2) 将const env = process.env.NODE_ENV改为const env = process.env.VUE_APP_TYPE
 * 3) 对应的创建settings.ctyun.js和settings.iam.js
 */
const defaultSettings = require('./settings.default')

const settingsMapping = {}
const env = process.env.NODE_ENV

let settings = null

if (typeof window !== 'undefined') {
  // 此处是vue组件中需要读取配置，在浏览器端运行，因此使用webpack注入的require.context对配置文件进行遍历
  const ctx = require.context('./', true, /settings.*\.js$/)
  ctx.keys().forEach(file => {
    const key = file.match(/settings\.(.*).js/)[1]
    const script = ctx(file)
    settingsMapping[key] = {
      ...defaultSettings,
      ...script,
    }
  })
} else {
  // 此处是vue.config.js需要读取配置，在node.js端运行，因此使用fs对配置文件进行遍历
  const fs = require('fs')
  const path = require('path')
  const settingsPath = path.resolve(__dirname)
  const files = fs.readdirSync(settingsPath)
  files.forEach(file => {
    if (/^settings\./.test(file) && path.extname(file) === '.js') {
      const filePath = path.resolve(settingsPath, file)
      const data = fs.readFileSync(filePath, 'utf-8')
      const script = eval(data)
      const key = file.match(/^settings\.(.*).js/)[1]
      settingsMapping[key] = {
        ...defaultSettings,
        ...script,
      }
    }
  })
}

// 如果没有相应的配置文件，默认使用default的配置
if (settingsMapping.hasOwnProperty(env)) {
  settings = settingsMapping[env]
} else {
  settings = defaultSettings
}

// 由于需要在vue.config中使用，因此使用CommonJS规范导出
module.exports = settings
