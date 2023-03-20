<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-17 14:09:19
 * @Description: Tag
-->
<template>
  <div>
    <h1>Tag</h1>
    <TagDemo />
    <div class="tag-group">
      <h3>尺寸</h3>
      <el-tag closable>默认标签</el-tag>
      <el-tag size="large" closable>大标签</el-tag>
      <el-tag size="medium" closable>中等标签</el-tag>
      <el-tag size="small" closable>小型标签</el-tag>
      <el-tag size="mini" closable>超小标签</el-tag>
    </div>
    <div class="tag-group">
      <h3>Default</h3>
      <el-tag v-for="item in items" :key="item.label" :type="item.type" closable>
        {{ item.label }}
      </el-tag>
    </div>
    <div class="tag-group">
      <h3>Dark</h3>
      <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark" closable>
        {{ item.label }}
      </el-tag>
    </div>
    <div class="tag-group">
      <h3>Light</h3>
      <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="light" closable>
        {{ item.label }}
      </el-tag>
    </div>
    <div class="tag-group">
      <h3>Plain</h3>
      <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="plain" closable>
        {{ item.label }}
      </el-tag>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TagDemo from '@/views/ui/components/Tag.vue'

@Component({
  name: 'Tag',
  components: {
    TagDemo,
  },
})
export default class extends Vue {
  private items = [
    { type: '', label: '标签一' },
    { type: 'success', label: '标签二' },
    { type: 'info', label: '标签三' },
    { type: 'danger', label: '标签四' },
    { type: 'warning', label: '标签五' },
  ]
}
</script>
<style lang="scss" scoped>
.el-tag {
  margin: 0 $margin;
}
</style>
