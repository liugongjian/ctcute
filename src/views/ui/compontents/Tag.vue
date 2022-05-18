<template>
  <div class="sub-tag">
    <el-tag type="info">标签</el-tag>
    <el-tag type="info" closable>标签</el-tag>
    <el-button class="button-new-tag" size="small">+ New Tag</el-button>
    <el-tag type="danger">red</el-tag>
    <el-tag type="success">green</el-tag>
    <el-tag type="">蓝色</el-tag>
    <el-tag type="warning">橙色</el-tag>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiTag'
})
export default class extends Vue {
  public static title = {
    zh: '标签',
    en: 'Tag'
  }
}
</script>

<style lang='scss' scoped>
.sub-tag {
  margin-top: 24px;
}
.el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
