<!--
 * @Author: 赵昕
 * @Date: 2022-07-21 14:18:32
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-21 16:50:51
 * @Description: 带新增功能的标签组
-->
<template>
  <div class="tag-demo">
    <div class="tag-demo-primary">
      <cute-tag
        :dynamic-tags.sync="dynamicTags"
        :tag-name="`+ ${this.$t('demo.tag.demo1.default')}`"
      ></cute-tag>
    </div>
    <div class="tag-demo-large">
      <cute-tag
        :dynamic-tags.sync="dynamicLargeTags"
        :tag-name="`+ ${this.$t('demo.tag.demo1.large')}`"
        tag-size="large"
      ></cute-tag>
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
  private dynamicTags = [this.$t('demo.tag.demo1.default')]
  // 大标签数组
  private dynamicLargeTags = [this.$t('demo.tag.demo1.large')]
}
</script>
<style lang="scss" scoped>
.tag-demo {
  .tag-demo-primary {
    margin-bottom: 15px;
  }
}
</style>
