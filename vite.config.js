import { createVuePlugin } from 'vite-plugin-vue2'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import viteRequireContext from '@originjs/vite-plugin-require-context'
import path from 'path'

/**插件 */
function viteNameLessClass() {
  return {
    name: 'vite-plugin-nameless-class',
    transform(code, id) {
      if (!id.endsWith('.vue')) {
        return null // Only applicable to regular vue file imports
      }
      // Form class name from cleaned filename
      const class_name = id
        .split(path.sep)
        .pop()
        .slice(0, '.vue'.length * -1)
        .replace(/[^a-zA-Z]/g, '')

      // /export\s+default\s+class\s+extends/ 适配空格或换行
      // 如果在注释里也有，要把注释清理掉，否则会报错 Duplicate export of 'default'；目前只处理了多行注释，单行注释todo
      return code
        .replace(/\/\*[\w\W]*?\*\//g, '')
        .replace(/export\s+default\s+class\s+extends/, `export default class ${class_name} extends`)
    },
  }
}

function viteSvgIconDirPrefix() {
  return {
    name: 'vite-plugin-svg-dir-prefix',
    transform(code, id) {
      // vite-plugin-svg-icons的bug，name会带有[dir]/，所以先用插件处理一下
      if (id.endsWith('packages/theme/icons/index.vue')) {
        return code.replace('#icon-${this.name}', '#icon-svg/${this.name}')
      }
      return null
    },
  }
}

// 为兼容vue-cli用法，不修改源文件，通过插件来修改
function viteTransformSource() {
  return {
    name: 'vite-plugin-transform-source',
    transform(code, id) {
      if (id.endsWith('src/main.ts')) {
        // 给main.ts加上virtual:svg-icons-register，是为了vue-cli也能运行
        return code.replace(
          'import Vue from "vue"',
          ['"import Vue from "vue"', 'import "virtual:svg-icons-register"'].join('\n')
        )
      }
      if (id.endsWith('views/page/Icon/index.vue')) {
        const replacement = `private mounted() {
      const req = import.meta.globEager('../../../../packages/theme/icons/svg/*.svg')
      this.icons = Object.keys(req)
        .map(k => k.split('/').reverse()[0].replace(/\.svg/, ''))
        .sort`
        // 替换require.context('@cutedesign/theme/icons/svg', true, /\.svg$/)，使用import.meta.globEager
        return code.replace(/private\s+mounted\(\)\s+{\s+[\w\W]*?\.sort/, replacement)
      }
      return null
    },
  }
}

export default {
  plugins: [
    // 优先执行，给main.ts加上virtual:svg-icons-register
    {
      ...viteTransformSource(),
      enforce: 'pre',
    },
    viteNameLessClass(),
    viteCommonjs(),
    viteRequireContext(),
    createVuePlugin(),
    viteSvgIconDirPrefix(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'packages/theme/icons')],
      symbolId: 'icon-[name]',
      inject: 'body-first',
      svgoOptions: {
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: '(fill|fill-rule|stroke)',
            },
          },
        ],
      },
    }),
  ],
  define: {
    'process.env': process.env,
    __VITE__: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'element-ui/types', replacement: 'node_modules/element-ui/types' },
      { find: 'scripts', replacement: '/scripts' },
      // this is required for the SCSS modules
      { find: /^~(.*)$/, replacement: '$1' },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          '@import "@cutedesign/theme/css/_variables-cute.scss";',
          '@import "@cutedesign/theme/css/_mixins.scss";',
          '',
        ].join('\n'),
      },
    },
  },
  server: {
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/v1/auth/': {
        // target: 'http://fed.ctyuncdn.cn:8088', // 线上服务
        // target: 'http://172.24.12.7:7002', //hjt 后端服务
        // target: 'http://172.21.65.214:8088/',
        // target: 'http://localhost:7002',
        target: 'http://fed.ctyuncdn.cn',
        https: true,
        changeOrigin: true,
        secure: false,
      },
      /**
       * Node.js接口
       */
      '/v1/': {
        // target: 'http://localhost:7001/',
        target: 'http://fed.ctyuncdn.cn',
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
  },
}
