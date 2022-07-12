<template>
  <div class="sub-tag">
    <h3>默认标签</h3>
    <el-tag type="info">标签</el-tag>
    <el-tag v-if="isShow" type="info" closable :disable-transitions="false" @close="closeTag">标签</el-tag>
    <cute-tag-add tag-name="+ 标签"></cute-tag-add>
    <h3>大标签</h3>
    <el-tag type="info" size="large">CPU使用量>=2</el-tag>
    <el-tag v-if="isLargeShow" type="info" size="large" closable @close="isLargeShow = false"
      >CPU使用量>=3</el-tag
    >
    <cute-tag-add tag-name="+ 新增过滤" tag-size="large"></cute-tag-add>
    <h3>彩色标签</h3>
    <el-tag type="danger">红色</el-tag>
    <el-tag type="success">绿色</el-tag>
    <el-tag type>蓝色</el-tag>
    <el-tag type="warning">黄色</el-tag>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteTagAdd from '@/components/CuteTag/index.vue'
@Component({
  name: 'UiTag',
  components: {
    CuteTagAdd,
  },
})
export default class extends Vue {
  public static title = {
    zh: '标签',
    en: 'Tag',
  }
  private isShow = true
  private isLargeShow = true
  private inputVisible = false
  private isFilterShow = true

  private closeTag() {
    this.isShow = false
  }
}
</script>

<style lang="scss" scoped>
.sub-tag {
  margin-top: 24px;
}

.el-tag {
  margin-right: 10px;
}
</style>
