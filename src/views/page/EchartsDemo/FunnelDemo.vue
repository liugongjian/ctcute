<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-07 10:28:39
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-12 10:27:18
 * @Description: 漏斗图
-->

<template>
  <cute-card-box title="漏斗图">
    <template #content>
      <CuteChart :option="option" :height="'600px'" :width="'100%'" />
    </template>
  </cute-card-box>
</template>
<script lang="ts">
import { CuteCardBox } from '@cutedesign/ui'
import { CuteChart } from '@cutedesign/ui'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'FunnelDemo',
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
    // 缓动函数
    this.option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%',
      },
      toolbox: {
        orient: 'vertical',
        top: 'center',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
      },
      series: [
        {
          name: 'Funnel',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '5%',
          top: '50%',
          data: [
            { value: 60, name: 'Visit' },
            { value: 30, name: 'Inquiry' },
            { value: 10, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' },
          ],
        },
        {
          name: 'Pyramid',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '5%',
          top: '5%',
          sort: 'ascending',
          data: [
            { value: 60, name: 'Visit' },
            { value: 30, name: 'Inquiry' },
            { value: 10, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' },
          ],
        },
        {
          name: 'Funnel',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '55%',
          top: '5%',
          label: {
            position: 'left',
          },
          data: [
            { value: 60, name: 'Visit' },
            { value: 30, name: 'Inquiry' },
            { value: 10, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' },
          ],
        },
        {
          name: 'Pyramid',
          type: 'funnel',
          width: '40%',
          height: '45%',
          left: '55%',
          top: '50%',
          sort: 'ascending',
          label: {
            position: 'left',
          },
          data: [
            { value: 60, name: 'Visit' },
            { value: 30, name: 'Inquiry' },
            { value: 10, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' },
          ],
        },
      ],
    }
  }
}
</script>
