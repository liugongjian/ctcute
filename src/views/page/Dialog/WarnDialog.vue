<!--
 * @Author: 朱凌浩
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-24 14:50:27
 * @Description: 告警弹窗
-->
<template>
  <el-card>
    <h2>警告弹窗</h2>
    <el-button type="primary" @click="open">警告弹窗</el-button>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'WarnDialog',
})
export default class extends Vue {
  public open(): void {
    this.$confirm('此操作将永久删除该文件，是否继续？', '警告提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
  }
}
</script>
