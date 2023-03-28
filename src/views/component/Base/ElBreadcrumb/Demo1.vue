/*
* @Author: 胡一苗
* @Date: 2023-03-22 15:42:05
* @LastEditors: 胡一苗
* @LastEditTime: 2023-03-22 15:50:25
* @Description: desc
*/
<template>
  <div class="collapse-demo">
    <div class="sub-sample">
      <h3>默认尺寸</h3>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">一级内容</el-breadcrumb-item>
        <el-breadcrumb-item to="/">二级内容</el-breadcrumb-item>
        <el-breadcrumb-item>当前页面</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-sample">
      <h3>较小尺寸</h3>
      <el-breadcrumb separator="/" size="small">
        <el-breadcrumb-item to="/">一级内容</el-breadcrumb-item>
        <el-breadcrumb-item to="/">二级内容</el-breadcrumb-item>
        <el-breadcrumb-item>当前页面</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
}
</script>
