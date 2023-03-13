<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-12 09:47:21
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-12 09:56:09
 * @Description: 柱状折线图
-->
<template>
  <cute-card-box title="柱状折线图">
    <template #content>
      <CuteChart :option="option" :height="'310px'" :width="'100%'" />
    </template>
  </cute-card-box>
</template>
<script lang="ts">
import { CuteCardBox } from '@cutedesign/ui'
import { CuteChart } from '@cutedesign/chart'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'BarLineDemo',
  components: {
    CuteCardBox,
    CuteChart,
  },
})
export default class extends Vue {
  private option = {}
  /**
   * 页面Mounted
   */
  created() {
    const valueFormatter = value => `${value} %`
    // 柱折混合
    this.option = {
      grid: {
        left: '2%',
        right: '2%',
        top: '72px',
        bottom: '0',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          const values = params.map(item => {
            const value = item.data.valueFormatter ? item.data.valueFormatter(item.value) : item.value
            return `${item.seriesName}：${value}`
          })
          return `今日 ${params[0].axisValueLabel} <br/> ${values.join('<br/>')}`
        },
      },
      legend: {
        data: ['实例数量', '完成率'],
        show: true,
        textStyle: {
          fontSize: 12, // 字体大小
          // color: this.variables.colorGrey1, // 字体颜色
        },
        // icon: 'circle',
        top: '0%',
        right: '9px',
        // itemWidth: 10,
        // itemGap: 20,
        // itemHeight: 10,
      },
      xAxis: [
        {
          type: 'category',
          data: [
            '00：00',
            '02：00',
            '04：00',
            '06：00',
            '08：00',
            '10：00',
            '12：00',
            '14：00',
            '16：00',
            '18：00',
            '20：00',
            '22：00',
            '24：00',
          ],
          nameLocation: 'start',
          verticalAlign: 'bottom',
          name: '时间',
          axisPointer: {
            type: 'shadow',
          },
          // nameTextStyle: {
          //   color: this.variables.colorGrey2,
          // },
          // axisLine: {
          //   // 设置颜色
          //   lineStyle: {
          //     color: this.variables.colorGrey6,
          //   },
          // },
          // axisLabel: {
          //   //x轴文字的配置
          //   show: true,
          //   // textStyle: {
          //   //   color: this.variables.colorGrey2,
          //   // },
          // },
        },
      ],
      yAxis: [
        {
          // splitLine: {
          //   lineStyle: {
          //     type: 'dashed',
          //   },
          // },
          type: 'value',
          name: '实例数量',
          min: 0,
          max: 30,
          interval: 50,
          axisLabel: {
            formatter: '{value}',
          },
        },
        {
          // splitLine: {
          //   lineStyle: {
          //     type: 'dashed',
          //   },
          // },
          type: 'value',
          name: '完成率（%）',
          min: 0,
          max: 30,
          interval: 5,
        },
      ],
      series: [
        {
          name: '实例数量',
          type: 'bar',
          // color: [this.variables.chartColor10],
          barWidth: 26,
          data: [30, 28, 25, 24, 21, 20, 16, 15, 13, 12, 10, 7, 3],
        },
        {
          name: '完成率',
          type: 'line',
          symbol: 'none',
          // color: [this.variables.chartColor1],
          align: 'right',
          yAxisIndex: 1,
          data: [
            { value: 13, valueFormatter },
            { value: 18, valueFormatter },
            { value: 22, valueFormatter },
            { value: 20, valueFormatter },
            { value: 26, valueFormatter },
            { value: 18, valueFormatter },
            { value: 18, valueFormatter },
            { value: 15, valueFormatter },
            { value: 14, valueFormatter },
            { value: 13, valueFormatter },
            { value: 16, valueFormatter },
            { value: 16, valueFormatter },
            { value: 16, valueFormatter },
            { value: 16, valueFormatter },
            { value: 11, valueFormatter },
          ],
        },
      ],
    }
  }
}
</script>
