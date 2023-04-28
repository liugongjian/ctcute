<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-05 07:53:38
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-27 15:08:05
 * @Description: 更换主题
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'ChangeTheme',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `

## 一键换肤

### 1. 如果您是从脚手架新建一个项目

在初始化项目时，脚手架会提供选项，可选择不同的主题。默认的主题会随着官方稳定主题变动，若无特殊需求，自定义主题可选择 'default'。目前默认的主题是白-蓝。

### 2. 如果您已经从脚手架创建过项目，想更换主题

\`cuted\` 命令行工具提供了更换主题的命令，使用 \`cuted theme <themeName>\` 可切换主题，如 \`cuted theme dark-blue\` 可将主题切换成黑-蓝。目前可选的主题色包括白-蓝(default)和黑-蓝(dark-blue)。

`
}
</script>
