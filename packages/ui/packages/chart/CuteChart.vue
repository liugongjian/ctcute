<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-03 15:17:40
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-22 09:59:42
 * @Description:
-->
<template>
  <div class="chart-cont" :style="'width:' + width + ';height:' + height">
    <v-chart class="chart" :option="option" autoresize :theme="theme" />
  </div>
</template>

<script lang="ts">
import * as echarts from 'echarts'
import ECharts, { THEME_KEY } from 'vue-echarts'
import { Component, Prop, Vue, Provide } from 'vue-property-decorator'
import themeLight from './theme/cuted-light.json'
import themeDark from './theme/cuted-dark.json'

echarts.registerTheme('cuted-light', themeLight)
echarts.registerTheme('cuted-dark', themeDark)

@Component({
  name: 'CuteChart',
  components: {
    VChart: ECharts,
  },
})
export default class extends Vue {
  @Prop({ type: Object, default: null }) option?: null // echarts配置项
  @Prop({ type: String, default: '--' }) title?: '--' // 标题
  @Prop({ type: [Number, String], default: '300px' }) width?: '300px' // 高度
  @Prop({ type: [Number, String], default: '200px' }) height?: '200px' // 宽度
  @Prop({ type: String, default: 'cuted-light' }) theme?: 'cuted-light' // 主题
  @Provide(THEME_KEY) private getTheme(): string {
    return this.theme
  }
}
</script>
