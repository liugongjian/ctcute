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
      errors: true,
    },
    proxy: {
      '/v1/auth/': {
        // target: 'http://fed.ctyuncdn.cn:8088', // 线上服务
        target: 'http://172.24.12.7:7002', //hjt 后端服务
        //  target: 'http://172.21.65.214:8088/',
        // target: 'http://localhost:7002',
        https: true,
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
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'node_modules/@cutedesign/theme/css/_variables.scss'),
        path.resolve(__dirname, 'node_modules/@cutedesign/theme/css/_mixins.scss'),
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: 'expanded' },
      },
    },
  },
  chainWebpack: config => {
    // 配置alias
    config.resolve.alias.set('scripts', path.join(__dirname, 'scripts'))

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'packages/theme/icons'))
      .add(path.join(__dirname, 'node_modules/@cutedesign/theme/icons'))
      .add(path.join(__dirname, 'src/assets/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'packages/theme/icons'))
      .add(path.join(__dirname, 'node_modules/@cutedesign/theme/icons'))
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
