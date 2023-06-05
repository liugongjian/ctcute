/**
 * 根据vue-cli-service serve命令后的--mode所对应的.env中的NODE_ENV的值匹配对应的配置文件，
 * 换而言之，这里配置文件settings.[environment].js中的environment读取的是node环境变量process.env.NODE_ENV的值，
 * 而process.env.NODE_ENV对应的是根目录下的.env.[mode]中所设的NODE_ENV的值，.env.[mode]中的mode值是根据vue-cli-service serve命令后的--mode所指定。
 * mode参数的设置请参考Vue CLI 模式与环境变量：https://cli.vuejs.org/zh/guide/mode-and-env.html
 * 例如：需要增加一个pre环境，可以按照以下步骤进行设置
 * 1）首先，需要在根目录下增加一个.env.pre文件，在文中输入NODE_ENV=pre
 * 2）然后，在settings目录下增加settings.pre.js文件并添加需要覆盖settings.default.js中的属性
 * 3）最后，通过vue-cli-service serve --mode pre运行项目，或者在package.json新增一条scripts记录
 * 最后的最后，如果你不想使用vue-cli-service的--mode参数，那也可以直接在运行vue-cli-service的时候直接设置环境变量，比如NODE_ENV=production npx vue-cli-service serve (windows下使用set NODE_ENV=production && npx vue-cli-service serve)
 */
const fs = require('fs')
const path = require('path')
const defaultSettings = require('./settings.default')

const settingsMapping = {}
let env = process.env.NODE_ENV

let settings = null

if (fs.hasOwnProperty('readdirSync')) {
  // 此处是vue.config.js需要读取配置，因此使用fs对配置文件进行遍历
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
} else {
  // 此处是vue组件中需要读取配置，因此使用webpack注入的require.context对配置文件进行遍历
  const ctx = require.context('./', true, /settings.*\.js$/)
  ctx.keys().forEach(file => {
    const key = file.match(/settings\.(.*).js/)[1]
    const script = ctx(file)
    settingsMapping[key] = {
      ...defaultSettings,
      ...script,
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
