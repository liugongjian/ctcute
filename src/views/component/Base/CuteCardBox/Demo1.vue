<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-09 08:30:39
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-26 12:53:55
 * @Description:
-->

<template>
  <cute-card-box title="只有title">
    <template #content>
      <VChart :option="option" style="height: 280px; width: 100%" />
    </template>
  </cute-card-box>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteCardBox } from '@cutedesign/ui'
@Component({
  name: 'CuteCardBoxDemo1',
  components: {
    CuteCardBox,
  },
})
export default class extends Vue {
  // 柱状图
  private option = {}

  private created() {
    // 柱状图
    this.option = {
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}' + '<br />' + '流程定义数：{c}',
      },
      xAxis: {
        type: 'category',
        data: ['用户 1', '用户 2', '用户 3', '用户 4', '用户 5'],
        nameLocation: 'start',
        verticalAlign: 'bottom',
        name: '用户',
        axisLabel: {
          //x轴文字的配置
          show: true,
        },
      },
      yAxis: {
        type: 'value',
        nameLocation: 'end',
        name: '数量',
        nameTextStyle: {
          padding: [0, 40, 0, 0],
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      series: [
        {
          data: [23, 20, 15, 8, 7, 11, 13],
          type: 'bar',
          barWidth: 26,
        },
      ],
    }
  }
}
</script>
