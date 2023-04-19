const path = require('path')

module.exports = {
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        sassOptions: { outputStyle: 'expanded' },
      },
    },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.exclude.add(path.join(__dirname, 'icons')).end()
      // components内所用svg内联
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 8 * 1024
      })
      .end()

    // set svg-sprite-loader
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'icons'))
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
  },
}
