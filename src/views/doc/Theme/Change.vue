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
import CuteMavonEditor from '../components/CuteMavonEditor.vue'

@Component({
  name: 'ChangeTheme',
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
\`\`\`
`
}
</script>
