<template>
  <div>
    <p>显示当前页面的路径，快速返回之前的任意页</p>
    <div class="sub-sample">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>一级内容</el-breadcrumb-item>
        <el-breadcrumb-item>二级内容</el-breadcrumb-item>
        <el-breadcrumb-item>当前页面</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiBreadcrumb',
})
export default class extends Vue {
  public static title = {
    zh: '面包屑',
    en: 'Breadcrumb',
  }
  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
}
</script>
