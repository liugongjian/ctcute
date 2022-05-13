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
      /**
       * CDN单点登录
       */
      '/iam/gw/': {
        target: 'https://iam-test.ctcdn.cn/',
        secure: false,
        changeOrigin: true,
        bypass: (req) => {
          if (req.headers && req.headers.referer) {
            const url = new URL(req.headers.referer)
            url.host = 'iam-test.ctcdn.cn'
            url.port = ''
            req.headers.referer = url.href
          }
        }
      },
      '/iam/': {
        target: 'https://iam-test.ctcdn.cn/',
        secure: false,
        changeOrigin: true
      },
      /**
       * 天翼云单点登录
       */
      '/layout/': {
        target: 'https://www.ctyun.cn/',
        secure: false,
        changeOrigin: true
      },
      '/gw/': {
        target: 'https://www.ctyun.cn/',
        secure: false,
        changeOrigin: true
      },
      /**
       * Node.js接口
       */
      '/v1/': {
        target: 'http://local.ctcdn.cn:3000/',
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
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: 'expanded' }
      }
    }
  }
}
