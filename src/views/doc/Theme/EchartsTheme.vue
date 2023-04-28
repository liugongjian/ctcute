<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-05 07:53:38
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-27 15:46:50
 * @Description: 内置的Echarts主题
-->

<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from '../components/CuteMavonEditor.vue'

@Component({
  name: 'EchartsTheme',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 内置的Echarts主题
### 1. cuted-light(用于默认主题)
### 2. cuted-dark(用于dark模式下的主题)
具体使用方式如下：
\`\`\`
根据需要引入和注册主题
import themeLight from '@cutedesign/ui/echarts-theme/cuted-light.json'
import themeDark from '@cutedesign/ui/echarts-theme/cuted-dark.json'
import * as echarts from 'echarts'
echarts.registerTheme('cuted-light', themeLight)
\`\`\`

### 3. 建议配合\`vue-echarts\`使用，弃用@cutedesign/chart
\`\`\`
main.ts
import Vue from 'vue'
import ECharts from 'vue-echarts'
import themeLight from '@cutedesign/ui/echarts-theme/cuted-light.json'
import themeDark from '@cutedesign/ui/echarts-theme/cuted-dark.json'
import * as echarts from 'echarts'
echarts.registerTheme('cuted-light', themeLight)
echarts.registerTheme('cuted-dark', themeDark)
Vue.component('v-chart', ECharts)

xxx.vue
<v-chart :options="options" theme="cuted-light"></v-chart>
\`\`\`
`
}
</script>
