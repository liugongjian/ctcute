<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:18
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-23 15:31:05
 * @Description: 带标题的内容块
-->
<template>
  <cute-distribution-bar :data="barList" :show-value="false"></cute-distribution-bar>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteDistributionBar } from '@cutedesign/ui'
@Component({
  name: 'CuteDistributionBarDemo2',
  components: {
    CuteDistributionBar,
  },
})
export default class extends Vue {
  barList = [
    {
      code: 'nm-center',
      name: this.$t('demo.distributeBar.common.label1'),
    },
    {
      code: 'gz-center',
      name: this.$t('demo.distributeBar.common.label2'),
    },
    {
      code: 'third-center',
      name: this.$t('demo.distributeBar.common.label3'),
    },
    {
      code: 'fourth-center',
      name: this.$t('demo.distributeBar.common.label4'),
    },
  ]
}
</script>
