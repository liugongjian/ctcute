<template>
  <div class="sub-tag">
    <el-tag type="info">标签</el-tag>
    <el-tag v-if="isShow" type="info" closable @close="handleClose">标签</el-tag>
    <el-tag type="newtag">+ 新增过滤</el-tag>
    <el-tag type="danger">红色</el-tag>
    <el-tag type="success">绿色</el-tag>
    <el-tag type="">蓝色</el-tag>
    <el-tag type="warning">黄色</el-tag>
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

  private isShow = true

  private handleClose() {
    this.isShow = false
  }
}
</script>

<style lang="scss" scoped>
.sub-tag {
  margin-top: 24px;
}

.el-tag {
  margin-left: 10px;
}
</style>
