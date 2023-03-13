<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:18
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-28 09:28:12
 * @Description: 带标题的内容块
-->
<template>
  <cute-distribution-bar :data="barList" mode="free" :max="3000"> </cute-distribution-bar>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteDistributionBar } from '@cutedesign/ui'
@Component({
  name: 'CuteDistributionBarDemo3',
  components: {
    CuteDistributionBar,
  },
})
export default class extends Vue {
  barList = [
    {
      code: 'nm-center',
      name: '内蒙中心',
      checked: true,
      value: 300,
    },
    {
      code: 'gz-center',
      name: '贵州中心',
      checked: true,
      value: 1000,
    },
    {
      code: 'third-center',
      name: '第三中心',
    },
    {
      code: 'fourth-center',
      name: '第四中心',
    },
  ]
}
</script>
