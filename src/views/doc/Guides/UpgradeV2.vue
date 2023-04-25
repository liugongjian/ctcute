<!--
 * @Author: 朱凌浩
 * @Date: 2023-04-19 17:01:49
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-04-19 17:01:49
 * @Description:
-->
<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from '../components/CuteMavonEditor.vue'

@Component({
  name: 'Resource',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 升级到V2
1.  确保npm的仓库已切换到<http://verdaccio.ctcdn.cn>私库【需配置hosts 36.111.140.224 verdaccio.ctcdn.cn】

2.  安装@cutedesign/ui包

3.  打开vue.config.js进行编辑

4.  将pluginOptions对象下的行101的path.resolve(\_\_dirname, 'node\_modules/@cutedesign/theme/css/\_variables.scss')替换为path.resolve(\_\_dirname, 'node\_modules/@cutedesign/ui/style/themes/default/variables.scss'),

5.  将pluginOptions对象下的行102的path.resolve(\_\_dirname, 'node\_modules/@cutedesign/theme/css/\_mixins.scss')替换为path.resolve(\_\_dirname, 'node\_modules/@cutedesign/ui/style/\_mixins.scss'),

6.  将行121的.exclude.add(path.join(\_\_dirname, 'node\_modules/@cutedesign/theme/icons'))替换为.exclude.add(path.join(\_\_dirname, 'node\_modules/@cutedesign/ui/style/icons'))

7.  将行127的.include.add(path.join(\_\_dirname, 'node\_modules/@cutedesign/theme/icons'))替换为.include.add(path.join(\_\_dirname, 'node\_modules/@cutedesign/ui/style/icons'))

8.  在 Vue工程的入口main.js中将import CuteComponent from '@cutedesign/base'替换为import CuteComponent from '@cutedesign/ui'；同时引入样式 import '@cutedesign/ui/lib/index.css'

9.  如在vue组件中引用过SASS变量，需要替换引用路径，将@cutedesign/theme/css/\_variables.scss替换为@cutedesign/ui/style/themes/default/index.scss

10.  集成CuteDesign提供的页面Layout框架（包含页眉、侧边栏导航），具体使用方法参见[CuteLayout组件](/component/base/cute-layout)

上述步骤4-7的vue.config.js示例代码：
\`\`\`js
...
module.exports = {
  ...,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'node_modules/@cutedesign/ui/style/themes/default/variables.scss'),
        path.resolve(__dirname, 'node_modules/@cutedesign/ui/style/_mixins.scss'),
        path.resolve(__dirname, 'src/assets/css/_variables.scss'),
      ],
    },
  },
  ...
  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'node_modules/@cutedesign/ui/icons'))
      .add(path.join(__dirname, 'src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'node_modules/@cutedesign/ui/icons'))
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
    ...
    },
}
\`\`\`
`
}
</script>
