<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-12 09:47:21
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-26 14:15:55
 * @Description: 柱状图
-->
<template>
  <cute-card-box title="柱状图">
    <template #content>
      <VChart :option="option" style="height: 280px; width: 100%" :theme="theme" />
    </template>
  </cute-card-box>
</template>
<script lang="ts">
import { CuteCardBox } from '@cutedesign/ui'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'BarDemo',
  components: {
    CuteCardBox,
  },
})
export default class extends Vue {
  @Prop({ default: 'cuted-light', required: false }) private readonly theme: string
  private option = {}
  /**
   * 页面Mounted
   */
  created() {
    // 柱状图
    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['2012', '2013', '2014', '2015', '2016'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Forest',
          type: 'bar',
          // barGap: 0,
          emphasis: {
            focus: 'series',
          },
          data: [320, 332, 301, 334, 390],
        },
        {
          name: 'Steppe',
          type: 'bar',
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290],
        },
        {
          name: 'Desert',
          type: 'bar',
          emphasis: {
            focus: 'series',
          },
          data: [150, 232, 201, 154, 190],
        },
        {
          name: 'Wetland',
          type: 'bar',
          emphasis: {
            focus: 'series',
          },
          data: [98, 77, 101, 99, 40],
        },
      ],
    }
  }
}
</script>
