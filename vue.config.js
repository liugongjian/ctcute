const path = require('path')
const isHttps = process.argv[process.argv.length - 1] === '--https'

console.info('是否开启https:', isHttps)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
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
       * Node.js接口
       */
      '/v1/': {
        target: 'http://localhost:7001/',
        changeOrigin: true,
        secure: false
      },
      /**
       * Mock接口
       */
      '/mock/175/': {
        target: 'https://yapi.ctcdn.cn/',
        https: true,
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
  },
  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(path.join(__dirname, "src/assets/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.join(__dirname, "src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      .options({
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|fill-rule)'
            }
          }
        ]
      })
      .end()
  }
}
