<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:18
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-23 15:29:15
 * @Description: 带标题的内容块
-->
<template>
  <div>
    <cute-distribution-bar :data="barList" :props="props" :max="200"></cute-distribution-bar>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteDistributionBar } from '@cutedesign/ui'
@Component({
  name: 'CuteDistributionBarDemo1',
  components: {
    CuteDistributionBar,
  },
})
export default class extends Vue {
  barList = [
    {
      id: 'nm-center',
      label: this.$t('demo.distributeBar.common.label1'),
    },
    {
      id: 'gz-center',
      label: this.$t('demo.distributeBar.common.label2'),
    },
    {
      id: 'third-center',
      label: this.$t('demo.distributeBar.common.label3'),
    },
    {
      id: 'fourth-center',
      label: this.$t('demo.distributeBar.common.label4'),
    },
  ]
  props = {
    code: 'id',
    name: 'label',
  }
}
</script>
