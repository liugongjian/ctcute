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
## @cutedesign/ui 使用手册

#### 安装

\`\`\`
npm i @cutedesign/ui
\`\`\`

#### 快速上手

\`\`\`
import '@cutedesign/ui/lib/index.css'
import CuteUI from '@cutedesign/ui'
Vue.use(CuteUI)
\`\`\`
    
#### 自定义主题

1. 新建scss文件修改样式变量，如custom.scss，全部变量见\`@cutedesign/theme/css/_variables-cute.scss\`

\`\`\`
/* 修改变量，全部变量见@cutedesign/ui/style/themes/default/variables.scss */
$color-master: #fa8334; // 默认
$color-master-hover: #ff934c; // 悬停
$color-master-active: #d46322; // 触发
$color-master-bg: #ffe1c6; // 背景
$color-master-bg-light: #ffefe3; // 背景浅色
$color-master-bg-light-2: #fef2ea; // 背景浅色2

/* 如果不想修改样式变量，删除以上代码，保留下面一行即可 */
/* 引用ui包scss样式变量，必需 */
@import "~@cutedesign/ui/lib/index.scss";
\`\`\`       

2. 项目入口文件引入
\`\`\`
import './custom.scss'
import CuteUI from '@cutedesign/ui'
Vue.use(CuteUI)
\`\`\`


### 关于项目中使用@cutedisign/ui包里颜色变量的情况
 
分两种情况：

1.如果不修改主题，仅使用ui包的默认颜色变量，可通过style-resource-loader等方式把颜色变量注入，然后在项目中样式可直接引用颜色变量即可

\`\`\`
pluginOptions: {
  'style-resources-loader': {
    preProcessor: 'scss',
    patterns: [
      path.resolve(__dirname, 'node_modules/@cutedesign/ui/style/themes/default/variables.scss'),
      path.resolve(__dirname, 'node_modules/@cutedesign/ui/style/_mixins.scss')
    ],
  }
}
\`\`\` 

2.如果要修改主题，如已定义custom.scss修改颜色变量，为保证项目中引用的颜色变量和主题一致，还需要覆盖默认颜色变量，比如在src/assets/css/_variables.scss里添加颜色变量覆盖，同时在在 \`style-resources-loader\` 的最后一个 \`patterns\` 中，添加 **path.resolve(__dirname, 'src/assets/css/_variables.scss')** ，例子如下
\`\`\`
pluginOptions: {
  'style-resources-loader': {
    preProcessor: 'scss',
    patterns: [
      path.resolve(__dirname, 'node_modules/@cutedesign/ui/style/themes/default/variables.scss'),
      path.resolve(__dirname, 'node_modules/@cutedesign/ui/style/_mixins.scss'),
      path.resolve(__dirname, 'src/assets/css/_variables.scss'),
    ],
  }
}
\`\`\` 
`
}
</script>
