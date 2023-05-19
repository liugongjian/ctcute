const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.externals({
      vue: 'vue',
      'element-ui': 'element-ui',
    })
  },
}
