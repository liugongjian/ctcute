<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-05 07:53:38
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-05 09:25:08
 * @Description: 更换主题
-->

<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from './components/CuteMavonEditor.vue'

@Component({
  name: 'QuickStart',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 一键换肤
### 主题色可能会随着天翼云规范的更新而更新，我们在设计之初就考虑到了这一点，所有颜色都是以变量的形式定义的，封装在@cutedesign/theme包中。
### a) 如果您是从脚手架新建一个项目
### 在初始化项目时，脚手架会提供选项，可选择不同的主题。默认的主题会随着官方稳定主题变动，若无特殊需求，自定义主题可选择'none'。目前默认的主题是橙色。
### b) 如果您已经从脚手架创建过项目，想更换主题
### \`cuted\`命令行工具提供了更换主题的命令，使用\`cuted theme <themeName>\`可切换主题，如\`cuted theme blue\`可将主题切换成蓝色。目前可选的主题色包括橙色(orange)和蓝色(blue)

## 自定义主题
### 官方的配色一般用于上云的场景，若您有特殊的需求，则可以自定义主题。
### 1. 在项目目录的\`src/assets/css\`目录下创建\`_variables.scss\`文件，定义您想覆盖的颜色变量，如\`$color-master-1\`。全量的颜色变量名可在\`@cutedesign/theme/css/_variables-cute.scss\`中查看
### 2. 在项目目录的\`vue.config.js\`文件中，配置自定义颜色变量解析路径，覆盖原来的定义。具体的，在\`style-resources-loader\`的最后一个\`patterns\`中，添加**path.resolve(__dirname, 'src/assets/css/_variables.scss')**，完整的例子如下:
\`\`\`
pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'node_modules/@cutedesign/theme/css/_variables.scss'),
        path.resolve(__dirname, 'node_modules/@cutedesign/theme/css/_mixins.scss'),
      ],
    },
  },
\`\`\`
### 3. 若您在项目中需要以js变量的形式直接使用颜色变量，为了让ts找到的定义，需要在项目目录的\`src/assets/css\`目录下创建\`_variables.scss.d.ts\`文件，并写入如下内容：
\`\`\`
import { IScssVariablesRevised } from '@cutedesign/theme/css/_variables.scss'
export const variablesRevised: IScssVariablesRevised
export default variablesRevised

\`\`\`
`
}
</script>
