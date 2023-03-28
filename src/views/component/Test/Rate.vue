<!--
 * @Author: 黄靖
 * @Date: 2023-03-23 17:28:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-23 17:28:09
 * @Description: Transfer
-->
<template>
  <div>
    <h1>Rate</h1>
    <h3>基础用法、辅助文字、其他icon</h3>
    <RateDemo />
    <h3>只读</h3>
    <div><el-rate v-model="value" disabled show-score score-template="{value}"> </el-rate></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RateDemo from '@/views/ui/components/Rate.vue'

@Component({
  name: 'Rate',
  components: {
    RateDemo,
  },
})
export default class extends Vue {
  private value = 3.7
}
</script>
<style lang="scss" scoped></style>
