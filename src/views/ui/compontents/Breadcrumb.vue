<template>
  <div class="ui-Breadcrumb">
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
  name: 'UiBreakcrumb',
})
export default class extends Vue {
  public static title = {
    zh: '面包屑',
    en: 'Breadcrumb',
  }
}
</script>

<style lang="scss" scoped>
.ui-Breadcrumb {
  .el-breadcrumb {
    font-size: 12px;
  }
  ::v-deep.el-breadcrumb__inner:hover {
    color: $primary;
    cursor: pointer;
  }
}
</style>
