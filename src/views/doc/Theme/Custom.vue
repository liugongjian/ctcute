<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-05 07:53:38
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-28 12:28:18
 * @Description: 更换主题
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'CustomTheme',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `
## 自定义主题

### 官方的配色一般用于上云的场景，若您有特殊的需求，则可以自定义主题。

1. 在项目目录的 \`src/assets/css\` 目录下创建 \`_variables.scss\` 文件，定义您想覆盖的颜色变量，如 \`$color-master-1\`。全量的颜色变量名可在 \`@cutedesign/theme/css/_variables-cute.scss\` 中查看
2. 在项目目录的 \`vue.config.js\` 文件中，配置自定义颜色变量解析路径，覆盖原来的定义。具体的，在 \`style-resources-loader\` 的最后一个 \`patterns\` 中，添加 **path.resolve(__dirname, 'src/assets/css/_variables.scss')** ，完整的例子如下:

\`\`\`
pluginOptions: {
  'style-resources-loader': {
    preProcessor: 'scss',
    patterns: [
      path.resolve(__dirname, 'node_modules/@cutedesign/ui/style/themes/default/index.scss'),
      path.resolve(__dirname, 'node_modules/@cutedesign/theme/css/_mixins.scss'),
    ],
  },
},
\`\`\`

3. 若您在项目中需要以js变量的形式直接使用颜色变量，为了让ts找到的定义，需要在项目目录的 \`src/assets/css\` 目录下创建 \`_variables.scss.d.ts\` 文件，并写入如下内容：

\`\`\`js
import { IScssVariablesRevised } from '@cutedesign/ui/style/themes/default/index.scss'
export const variablesRevised: IScssVariablesRevised
export default variablesRevised
\`\`\`
`
}
</script>
