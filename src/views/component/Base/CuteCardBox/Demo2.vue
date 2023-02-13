<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-09 08:30:39
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-10 09:57:32
 * @Description:
-->

<template>
  <cute-card-box title="title+日期选择">
    <template #extra>
      <el-date-picker v-model="statusDate" type="date" placeholder="选择日期" size="mini"></el-date-picker>
    </template>
    <template #content>
      <CuteChart :option="option" :height="'280px'" :width="'100%'" />
    </template>
  </cute-card-box>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteCardBox } from '@cutedesign/base'
import { CuteChart } from '@cutedesign/chart'
@Component({
  name: 'CuteCardBoxDemo1',
  components: {
    CuteCardBox,
    CuteChart,
  },
})
export default class extends Vue {
  private statusDate = ''
  private option = {}

  private created() {
    // 饼图
    this.option = {
      title: {
        text: '流程状态数量',
        subtext: '34567',
        itemGap: 10,
        textAlign: 'center',
        x: '31.4%',
        y: '43.5%',
        textStyle: {
          fontFamily: '微软雅黑',
          fontSize: 12,
          fontWeight: 400,
        },
        subtextStyle: {
          fontSize: 16,
          fontWeight: 500,
          fontFamily: '微软雅黑',
        },
      },
      tooltip: {
        trigger: 'none',
        show: true,
        feature: {
          mark: { show: true },
        },
      },
      legend: {
        show: true,
        textStyle: {
          fontSize: 12, // 字体大小
        },
        icon: 'circle',
        top: '20%',
        right: '10%',
        itemWidth: 10,
        itemGap: 20,
        itemHeight: 10,
        orient: 'vertical',
      },
      series: [
        {
          selectedMode: false,
          labelLine: {
            normal: {
              length: 2,
            },
          },
          fontSize: 12, // 字体大小
          type: 'pie',
          radius: ['45%', '64%'],
          center: ['32%', '50%'],
          data: [
            { value: 40, name: '成功' },
            { value: 16, name: '正在运行' },
            { value: 5, name: '暂停' },
            { value: 2, name: '失败' },
            { value: 3, name: '停止' },
          ],
          itemStyle: {
            normal: {
              label: {
                fontSize: 12, // 字体大小
                show: true,
                padding: [5, 10],
                // formatter:  '{b} \n {c} ({d}%)'
                formatter: '{b}  {c}',
              },
              labelLine: { show: true },
            },
          },
        },
      ],
    }
  }
}
</script>
