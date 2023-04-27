<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-12 09:47:21
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-12 09:54:18
 * @Description: 折线堆叠图
-->
<template>
  <cute-card-box title="折线堆叠图">
    <template #content>
      <VChart :option="option" style="height: 280px; width: 100%" :theme="theme" />
    </template>
  </cute-card-box>
</template>
<script lang="ts">
import { CuteCardBox } from '@cutedesign/ui'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'LineStackDemo',
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
    // 折线堆叠图
    this.option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    }
  }
}
</script>
