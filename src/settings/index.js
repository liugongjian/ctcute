const base = require('./base')
const theme = require('./theme')
const net = require('./net')

// 由于需要在vue.config中使用，因此使用CommonJS规范导出
module.exports = {
  ...base,
  ...theme,
  ...net,
}
