<!--
 * @Author: 朱凌浩
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-24 14:50:27
 * @Description: 成功弹窗
-->
<template>
  <el-card>
    <h2>成功弹窗</h2>
    <el-button type="primary" @click="open">成功弹窗</el-button>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'SuccessDialog',
})
export default class extends Vue {
  public open(): void {
    this.$confirm(
      '已成功创建XXX数据源标签方案，是否配置任务？已成功创建XXX数据源标签方案，是否配置任务？',
      '成功提示',
      {
        confirmButtonText: '前往配置',
        cancelButtonText: '以后再说',
        type: 'success',
      }
    )
  }
}
</script>
