<!--
 * @Author: 赵昕
 * @Date: 2023-04-20 10:33:02
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-20 14:32:12
 * @Description: PageHeader
-->
<template>
  <div class="page-header-test">
    <h1>PageHeader</h1>
    <el-card>
      <h3>基础用法</h3>
      <el-page-header content="详情页面" class="bottom"></el-page-header>
      <el-page-header>
        <template #title>
          <span class="title">Back</span>
        </template>
        <template #content>
          <span class="content">
            <svg-icon name="user" />
            <span class="main-title">Title</span>
            <span class="sub-title">Sub title</span>
            <el-tag>Default</el-tag>
          </span>
        </template>
      </el-page-header>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Container',
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.page-header-test {
  .el-card {
    h3 {
      margin-top: 0;
    }
    .bottom {
      margin-bottom: $margin-4x;
    }

    .main-title {
      font-size: $text-size-md;
      color: $text-color;
      margin: 0 $margin;
      font-weight: $text-title-weight;
    }
    .sub-title {
      font-size: $text-size-sm;
      color: $text-color-light;
      margin-right: $margin;
    }
  }
}
</style>
