import { createVuePlugin } from 'vite-plugin-vue2'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import viteRequireContext from '@originjs/vite-plugin-require-context'
import path from 'path'

/**插件 */
function viteNameLessClass() {
  return {
    name: 'vite-nameless-class',
    transform(code, id) {
      if (!id.endsWith('.vue')) {
        return null  // Only applicable to regular vue file imports
      }
      // Form class name from cleaned filename
      let class_name = id.split(path.sep).pop()
        .slice(0, '.vue'.length * -1)
        .replace(/[^a-zA-Z]/g, '')

      // 待优化适配多个空格或换行
      return code.replace('export default class extends Vue',
        `export default class ${class_name} extends Vue`)
    }
  }
}

export default {
  plugins: [
    viteNameLessClass(),
    viteCommonjs(),
    viteRequireContext(),
    createVuePlugin(),
  ],
  define: {
    'process.env': process.env,
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json'],
    alias: [
      { find: '@', replacement: '/src' },
      { find: 'scripts', replacement: '/scripts' },
      // this is required for the SCSS modules
      { find: /^~(.*)$/, replacement: '$1' }
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ['@import "@cutedesign/theme/css/_variables-cute.scss";', '@import "@cutedesign/theme/css/_mixins.scss";', ''].join('\n')
      }
    }
  }
}