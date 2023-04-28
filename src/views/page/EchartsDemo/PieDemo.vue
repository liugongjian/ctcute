<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-12 09:47:21
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-12 09:50:30
 * @Description: 饼图
-->
<template>
  <cute-card-box title="饼图">
    <template #content>
      <VChart :option="option" style="height: 280px; width: 100%" :theme="theme" />
    </template>
  </cute-card-box>
</template>
<script lang="ts">
import { CuteCardBox } from '@cutedesign/ui'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'PieDemo',
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
    // 饼图
    this.option = {
      // color: [
      //   this.variables.chartColor1,
      //   this.variables.chartColor10,
      //   this.variables.chartColor4,
      //   this.variables.chartColor11,
      //   this.variables.colorGrey4,
      // ],
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
          // color: this.variables.colorGrey1,
        },
        subtextStyle: {
          fontSize: 16,
          fontWeight: 500,
          fontFamily: '微软雅黑',
          // color: this.variables.colorGrey1,
        },
      },
      textStyle: {
        // color: this.variables.colorGrey1,
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
          // color: this.variables.colorGrey1, // 字体颜色
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
            lineStyle: {
              // color: this.variables.colorGrey1,
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
                // color: this.variables.colorGrey1,
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
