<!--
 * @Author: 李志伟
 * @Date: 2023-03-27 16:34:53
 * @LastEditors: 李志伟
 * @LastEditTime: 2023-03-28 17:01:41
 * @Description: Loading 加载中
-->
<template>
  <div>
    <h1>Loading 加载中</h1>
    <el-row>
      <h3>图标加载</h3>
      <div v-loading="true" element-loading-spinner="el-icon-loading" class="loading loading-icon" />
    </el-row>
    <el-row>
      <h3>文字加载</h3>
      <div
        v-loading="true"
        element-loading-spinner=" "
        element-loading-text="加载中…"
        class="loading loading-text"
      />
    </el-row>
    <el-row>
      <h3>图标文字加载</h3>
      <div
        v-loading="true"
        element-loading-spinner="el-icon-loading"
        element-loading-text="加载中"
        class="loading"
      />
    </el-row>
    <el-row>
      <h3>区域加载</h3>
      <div v-loading="true" class="loading" />
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Loading',
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.loading {
  width: 100px;
  height: 80px;
  &.loading-icon,
  &.loading-text {
    ::v-deep .el-loading-spinner {
      margin-top: -10px;
    }
  }
}
</style>
