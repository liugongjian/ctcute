<!--
 * @Author: 赵昕
 * @Date: 2022-07-21 14:18:32
 * @LastEditors: 赵昕
 * @LastEditTime: 2022-07-21 14:48:22
 * @Description: 带新增功能的标签组
-->
<template>
  <div class="tag-demo">
    <div class="tag-demo-primary">
      <cute-tag :dynamic-tags.sync="dynamicTags" tag-name="+ 标签"></cute-tag>
    </div>
    <div class="tag-demo-large">
      <cute-tag :dynamic-tags.sync="dynamicLargeTags" tag-name="+ 大标签" tag-size="large"></cute-tag>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  name: 'Demo1',
})
export default class extends Vue {
  // 普通标签数组
  private dynamicTags = ['标签']
  // 大标签数组
  private dynamicLargeTags = ['大标签']
}
</script>
<style lang="scss" scoped>
.tag-demo {
  .tag-demo-primary {
    margin-bottom: 15px;
  }
}
</style>
