<template>
  <div class="sub-tag">
    <h3>
      默认标签-使用了
      <a href="/component/base/cute-tag" target="_blank">CuteTag</a>
      组件
    </h3>
    <div class="default-tags">
      <el-tag type="info">标签</el-tag>
      <cute-tag tag-name="+ 新标签" :dynamic-tags="dynamicTags1"></cute-tag>
    </div>
    <h3>
      大标签-使用了
      <a href="/component/base/cute-tag" target="_blank">CuteTag</a>
      组件
    </h3>
    <div class="large-tags">
      <el-tag type="info" size="large">CPU使用量>=2</el-tag>
      <cute-tag :dynamic-tags="dynamicTags2" tag-name="+ 新标签" tag-size="large"></cute-tag>
    </div>

    <h3>彩色Plain标签</h3>
    <div class="color-tags">
      <el-tag type="danger" effect="plain">红色</el-tag>
      <el-tag type="success" effect="plain">绿色</el-tag>
      <el-tag type effect="plain">蓝色</el-tag>
      <el-tag type="warning" effect="plain">黄色</el-tag>
    </div>

    <h3>主题标签</h3>
    <div class="color-tags">
      <el-tag type="danger" effect="light">红色</el-tag>
      <el-tag type="success" effect="light">绿色</el-tag>
      <el-tag type effect="light">蓝色</el-tag>
      <el-tag type="warning" effect="light">黄色</el-tag>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'UiTag',
})
export default class extends Vue {
  public static title = {
    zh: '标签',
    en: 'Tag',
  }
  public static description = {
    maintainer: '张晨曦',
    version: 'v2.0',
    updateTime: '2023.05.05',
  }
  private dynamicTags1 = ['标签']
  private dynamicTags2 = ['CPU使用量>=3']
}
</script>

<style lang="scss" scoped>
.sub-tag {
  margin-top: 24px;
}

.default-tags,
.color-tags {
  .el-tag {
    margin-right: 8px;
  }
}

.large-tags {
  .el-tag {
    margin-right: 12px;
  }
}
</style>
