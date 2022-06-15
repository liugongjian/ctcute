<template>
  <div class="sub-tag">
    <el-tag type="info">标签</el-tag>
    <el-tag type="info" closable>标签</el-tag>
    <el-button class="button-new-tag" size="small">+ 标签</el-button>
    <el-tag type="danger">红色</el-tag>
    <el-tag type="success">绿色</el-tag>
    <el-tag type="">蓝色</el-tag>
    <el-tag type="warning">橙色</el-tag>
    <el-tag class="yellow-tag">黄色</el-tag>
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

<style lang="scss" scoped>
.sub-tag {
  margin-top: 24px;
}
.el-tag {
  margin-left: 10px;
  height: 22px;
  line-height: 20px;
}
.yellow-tag {
  background-color: #fef6e7;
  color: #fa9a43;
  border: 1px solid #fcd68a;
}
.button-new-tag {
  margin-left: 10px;
  height: 22px;
  line-height: 22px;
  padding-top: 0;
  padding-bottom: 0;
  border: 1px dashed #ccc;
}
</style>
