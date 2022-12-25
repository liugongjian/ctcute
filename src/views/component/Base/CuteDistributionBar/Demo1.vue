<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:18
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-25 16:29:29
 * @Description: 带标题的内容块
-->
<template>
  <cute-distribution-bar :data="barList"> </cute-distribution-bar>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteDistributionBar } from '@cutedesign/base'
@Component({
  name: 'CuteDistributionBarDemo1',
  components: {
    CuteDistributionBar,
  },
})
export default class extends Vue {
  barList = [
    {
      code: 'nm-center',
      name: '内蒙中心',
      value: 10,
    },
    {
      code: 'gz-center',
      name: '贵州中心',
      value: 20,
    },
    {
      code: 'third-center',
      name: '第三中心',
      value: 40,
    },
    {
      code: 'fourth-center',
      name: '第四中心',
      value: 30,
    },
  ]
}
</script>
