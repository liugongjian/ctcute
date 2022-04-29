<template>
  <div>
    <p>显示当前页面的路径，快速返回之前的任意页</p>
    <div class="sub-sample">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiBreakcrumb'
})
export default class extends Vue {
  public static title = {
    zh: '面包屑',
    en: 'Breadcrumb'
  }
}
</script>
