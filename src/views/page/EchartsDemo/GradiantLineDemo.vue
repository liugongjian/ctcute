<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-12 09:47:21
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-12 09:57:09
 * @Description: 渐变折线图
-->
<template>
  <cute-card-box title="渐变折线图">
    <template #content>
      <VChart :option="option" style="height: 280px; width: 100%" :theme="theme" />
    </template>
  </cute-card-box>
</template>
<script lang="ts">
import { CuteCardBox } from '@cutedesign/ui'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'GradiantLineDemo',
  components: {
    CuteCardBox,
  },
})
export default class extends Vue {
  @Prop({ default: 'cuted-light', required: false }) private readonly theme: string
  private option = {}
  private data = [
    ['2000-06-05', 116],
    ['2000-06-06', 129],
    ['2000-06-07', 135],
    ['2000-06-08', 86],
    ['2000-06-09', 73],
    ['2000-06-10', 85],
    ['2000-06-11', 73],
    ['2000-06-12', 68],
    ['2000-06-13', 92],
    ['2000-06-14', 130],
    ['2000-06-15', 245],
    ['2000-06-16', 139],
    ['2000-06-17', 115],
    ['2000-06-18', 111],
    ['2000-06-19', 309],
    ['2000-06-20', 206],
    ['2000-06-21', 137],
    ['2000-06-22', 128],
    ['2000-06-23', 85],
    ['2000-06-24', 94],
    ['2000-06-25', 71],
    ['2000-06-26', 106],
    ['2000-06-27', 84],
    ['2000-06-28', 93],
    ['2000-06-29', 85],
    ['2000-06-30', 73],
    ['2000-07-01', 83],
    ['2000-07-02', 125],
    ['2000-07-03', 107],
    ['2000-07-04', 82],
    ['2000-07-05', 44],
    ['2000-07-06', 72],
    ['2000-07-07', 106],
    ['2000-07-08', 107],
    ['2000-07-09', 66],
    ['2000-07-10', 91],
    ['2000-07-11', 92],
    ['2000-07-12', 113],
    ['2000-07-13', 107],
    ['2000-07-14', 131],
    ['2000-07-15', 111],
    ['2000-07-16', 64],
    ['2000-07-17', 69],
    ['2000-07-18', 88],
    ['2000-07-19', 77],
    ['2000-07-20', 83],
    ['2000-07-21', 111],
    ['2000-07-22', 57],
    ['2000-07-23', 55],
    ['2000-07-24', 60],
  ]
  private dateList = this.data.map(function (item) {
    return item[0]
  })
  private valueList = this.data.map(function (item) {
    return item[1]
  })
  /**
   * 页面Mounted
   */
  created() {
    // 渐变折线图
    this.option = {
      // Make gradient line here
      visualMap: [
        {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400,
        },
        {
          show: false,
          type: 'continuous',
          seriesIndex: 1,
          dimension: 0,
          min: 0,
          max: this.dateList.length - 1,
        },
      ],
      title: [
        {
          left: 'center',
          text: 'Gradient along the y axis',
        },
        {
          top: '55%',
          left: 'center',
          text: 'Gradient along the x axis',
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
      xAxis: [
        {
          data: this.dateList,
        },
        {
          data: this.dateList,
          gridIndex: 1,
        },
      ],
      yAxis: [
        {},
        {
          gridIndex: 1,
        },
      ],
      grid: [
        {
          bottom: '60%',
        },
        {
          top: '60%',
        },
      ],
      series: [
        {
          type: 'line',
          showSymbol: false,
          data: this.valueList,
        },
        {
          type: 'line',
          showSymbol: false,
          data: this.valueList,
          xAxisIndex: 1,
          yAxisIndex: 1,
        },
      ],
    }
  }
}
</script>
