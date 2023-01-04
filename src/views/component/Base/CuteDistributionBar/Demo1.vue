<!--
 * @Author: wujingcheng
 * @Date: 2022-12-23 15:25:18
 * @LastEditors: wujingcheng
 * @LastEditTime: 2022-12-28 16:19:23
 * @Description: 带标题的内容块
-->
<template>
  <div>
    <cute-distribution-bar :data="barList" :props="props" :max="200"> </cute-distribution-bar>
  </div>
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
      id: 'nm-center',
      label: '内蒙中心',
    },
    {
      id: 'gz-center',
      label: '贵州中心',
    },
    {
      id: 'third-center',
      label: '第三中心',
    },
    {
      id: 'fourth-center',
      label: '第四中心',
    },
  ]
  props = {
    code: 'id',
    name: 'label',
  }
}
</script>
