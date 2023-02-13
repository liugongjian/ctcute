<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-12 09:47:21
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-12 09:52:09
 * @Description: 折线图
-->
<template>
  <cute-card-box title="折线图">
    <template #content>
      <CuteChart :option="option" :height="'280px'" :width="'100%'" />
    </template>
  </cute-card-box>
</template>
<script lang="ts">
import { CuteCardBox } from '@cutedesign/base'
import { CuteChart } from '@cutedesign/chart'
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'LineDemo',
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
    // 线图
    this.option = {
      grid: {
        left: '3%',
        right: '2%',
        bottom: '3%',
        containLabel: true,
      },
      // color: [this.variables.chartColor12, this.variables.chartColor4],
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['昨日', '今日'],
        show: true,
        textStyle: {
          fontSize: 12, // 字体大小
          // color: this.variables.colorGrey1, // 字体颜色
        },
        icon: 'circle',
        top: '6%',
        right: '12px',
        itemWidth: 10,
        itemGap: 20,
        itemHeight: 10,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['0', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22', '24'],
          nameLocation: 'start',
          name: '小时',
        },
      ],
      yAxis: {
        type: 'value',
        nameLocation: 'end',
        name: '数量',
        nameTextStyle: {
          padding: [0, 40, 0, 0],
        },
        // splitLine: {
        //   lineStyle: {
        //     type: 'dashed',
        //   },
        // },
        max: 12,
      },
      series: [
        {
          name: '昨日',
          type: 'line',
          areaStyle: {
            // color: 'rgba(247,204,139,0.2)',
          },
          emphasis: {
            focus: 'series',
          },
          symbol: 'none',
          // lineStyle: {
          //   color: this.variables.chartColor12,
          //   normal: {
          //     color: this.variables.chartColor12,
          //   },
          // },
          data: [0, 0, 0, 0, 0, 0, 7, 7, 7, 12, 12, 12, 12],
        },
        {
          name: '今日',
          type: 'line',
          areaStyle: {
            // color: 'rgba(241,158,75,0.2)',
          },
          emphasis: {
            focus: 'series',
          },
          symbol: 'none',
          // lineStyle: {
          //   color: this.variables.chartColor4,
          //   normal: {
          //     color: this.variables.chartColor4,
          //   },
          // },
          data: [5, 5, 5, 5, 12, 12, 12, 12, 12, 12, 12, 12, 12],
        },
      ],
    }
  }
}
</script>
