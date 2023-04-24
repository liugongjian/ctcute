<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-24 09:10:19
 * @Description: Link
-->
<template>
  <div>
    <h1>Link</h1>
    <LinkDemo />
    <div>
      <h3>基础用法</h3>
      <el-link>默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
    </div>
    <div>
      <h3>禁用状态</h3>
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
    </div>
    <div>
      <h3>下划线</h3>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </div>
    <div>
      <h3>A tag</h3>
      <a href="#">默认链接</a>
    </div>
    <div>
      <h3>图标</h3>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LinkDemo from '@/views/ui/components/Link.vue'

@Component({
  name: 'Link',
  components: {
    LinkDemo,
  },
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.el-link {
  margin-right: 20px;
}
</style>
