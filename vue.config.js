const path = require('path')
const isHttps = process.argv[process.argv.length - 1] === '--https'

console.info('是否开启https:', isHttps)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/apps/scaffold/' : '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/ctyun/': {
        target: 'https://www.ctyun.cn/',
        secure: false,
        changeOrigin: true
      },
      '/layout/': {
        target: 'https://www.ctyun.cn/',
        secure: false,
        changeOrigin: true
      },
      '/gw': {
        target: 'https://www.ctyun.cn',
        secure: false,
        changeOrigin: true
      },
      '/ctyun/signin': {
        target: 'https://www.ctyun.cn/',
        secure: false,
        changeOrigin: true
      },
      '/services/user/ImageCode': {
        target: 'https://www.ctyun.cn/',
        secure: false,
        changeOrigin: true
      },
      '/record2/': {
        target: 'https://www.ctyun.cn/',
        secure: false,
        changeOrigin: true
      },
      '/ctyunfile/': {
        target: 'https://www.ctyun.cn/',
        secure: false,
        changeOrigin: true
      },
      '/cloudapp/': {
        target: 'https://www.ctyun.cn/',
        secure: false,
        changeOrigin: true
      },
      '/v1': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false
      }
    },
    historyApiFallback: true,
    disableHostCheck: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/assets/css/_variables.scss'),
        path.resolve(__dirname, 'src/assets/css/_mixins.scss')
      ]
    }
  }
}
