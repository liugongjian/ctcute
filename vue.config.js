const path = require('path')
const { publicPath, devPort, title, theme } = require('./src/settings')
const isHttps = process.argv[process.argv.length - 1] === '--https'
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
console.info('是否开启https:', isHttps)

process.env.VUE_APP_TITLE = title

module.exports = {
  publicPath,
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    open: true,
    port: devPort,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/v1/auth/': {
        target: 'http://fed.ctyuncdn.cn/', // 线上服务
        changeOrigin: true,
        secure: false,
      },
      /**
       * Node.js接口
       */
      '/v1/': {
        target: 'http://localhost:7001/',
        changeOrigin: true,
        secure: false,
      },
      /**
       * Mock接口
       */
      '/mock/175/': {
        target: 'https://yapi.ctcdn.cn/',
        https: true,
        changeOrigin: true,
        secure: false,
      },
    },
    historyApiFallback: true,
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: 'expanded', quietDeps: true },
        additionalData: `@import "node_modules/@cutedesign/ui/style/themes/${theme}/variables.scss";
                          @import "node_modules/@cutedesign/ui/style/_mixins.scss";`,
      },
    },
  },
  chainWebpack: config => {
    // 配置alias
    config.resolve.alias.set('scripts', path.join(__dirname, 'scripts'))
    // module和main是原来就有的，不能少了，否则其他依赖包报错
    config.resolve.mainFields.add('main').prepend('module').prepend('cuteMain')

    // 配置monaco
    config.plugin('monaco').use(
      new MonacoWebpackPlugin({
        languages: ['json', 'yaml', 'javascript', 'css', 'html', 'markdown', 'mysql', 'xml'],
      })
    )

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'packages/ui/icons'))
      .add(path.join(__dirname, 'node_modules/@cutedesign/ui/icons'))
      .add(path.join(__dirname, 'src/assets/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'packages/ui/icons'))
      .add(path.join(__dirname, 'node_modules/@cutedesign/ui/icons'))
      .add(path.join(__dirname, 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|fill-rule)',
            },
          },
          {
            name: 'removeTitle',
          },
        ],
      })
      .end()

    config => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementUI', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-codemirror',
            test: /[\\/]node_modules[\\/]codemirror(.*)/,
            priority: 5,
          },
          commons: {
            name: 'chunk-commons',
            test: path.resolve(__dirname, 'src/components'),
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      })
      config.optimization.runtimeChunk('single')
    }
  },
}
