<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-03 15:17:40
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-08 08:35:42
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
import themeOrange from './theme/orange.json'

echarts.registerTheme('cuted-orange', themeOrange)
@Component({
  name: 'CuteChart',
  components: {
    VChart: ECharts,
  },
})
export default class extends Vue {
  @Prop({ type: Object, default: null }) option?: null // 标题
  @Prop({ type: String, default: '--' }) title?: '--' // 标题
  @Prop({ type: [Number, String], default: '300px' }) width?: '300px' // 高度
  @Prop({ type: [Number, String], default: '200px' }) height?: '200px' // 宽度
  @Prop({ type: String, default: 'cuted-orange' }) theme?: 'cuted-orange' // 主题
  @Provide(THEME_KEY) private getTheme(): string {
    return this.theme
  }
}
</script>
