<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-09 08:30:39
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-05-31 06:14:03
 * @Description:
-->

<template>
  <cute-card-box :title="$t('demo.cardBox.demo3.title')">
    <template #extra>
      <el-tabs v-model="activeName" class="chart-card-tabs">
        <el-tab-pane :label="$t('demo.cardBox.demo3.tab1')" name="first"></el-tab-pane>
        <el-tab-pane :label="$t('demo.cardBox.demo3.tab2')" name="second"></el-tab-pane>
      </el-tabs>
    </template>
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
  private activeName = 'first'
  private option = {}

  private created() {
    // 线图
    this.option = {
      grid: {
        left: '3%',
        right: '2%',
        bottom: '3%',
        containLabel: true,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['昨日', '今日'],
        show: true,
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
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
        max: 12,
      },
      series: [
        {
          name: '昨日',
          type: 'line',
          emphasis: {
            focus: 'series',
          },
          symbol: 'none',
          data: [0, 0, 0, 0, 0, 0, 7, 7, 7, 12, 12, 12, 12],
        },
        {
          name: '今日',
          type: 'line',
          emphasis: {
            focus: 'series',
          },
          symbol: 'none',
          data: [5, 5, 5, 5, 12, 12, 12, 12, 12, 12, 12, 12, 12],
        },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-card-tabs {
  ::v-deep .el-tabs__header {
    margin: 0;
    margin-top: 22px;
  }

  ::v-deep .el-tabs__nav-wrap:after {
    background: none;
  }
}
</style>
