<!--
 * @Author: 赵昕
 * @Date: 2023-04-19 17:59:02
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-20 10:36:37
 * @Description: Container
-->
<template>
  <div class="container-test">
    <h1>Container</h1>
    <el-card>
      <h3>常见页面布局</h3>
      <el-container class="bottom">
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>

      <el-container class="bottom cols">
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>

      <el-container class="bottom">
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
        <el-footer>Footer</el-footer>
      </el-container>

      <el-container>
        <el-header>Header</el-header>
        <el-container class="bottom">
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
      </el-container>

      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
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
.container-test {
  .el-card {
    h3 {
      margin-top: 0;
    }

    .el-header,
    .el-footer {
      background-color: $color-master-bg;
      text-align: center;
      line-height: 60px;
    }

    .el-aside {
      background-color: $color-master-bg-light;
      text-align: center;
      line-height: 200px;
    }

    .el-main {
      background-color: $color-master-bg-light-2;
      text-align: center;
      line-height: 160px;
    }

    .cols {
      .el-main,
      .el-aside {
        line-height: 280px;
      }
    }

    .bottom {
      margin-bottom: $margin-5x;
    }
  }
}
</style>
