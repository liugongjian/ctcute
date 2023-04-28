<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-28 16:12:50
 * @Description: Link
-->
<template>
  <div>
    <h1>Link</h1>
    <LinkDemo />
    <div>
      <h3>{{ $t('componentTest.link.basic') }}</h3>
      <el-link type="primary">{{ $t('componentTest.link.main') }}</el-link>
      <el-link type="success">{{ $t('componentTest.link.success') }}</el-link>
      <el-link type="warning">{{ $t('componentTest.link.warn') }}</el-link>
      <el-link type="danger">{{ $t('componentTest.link.danger') }}</el-link>
    </div>
    <div>
      <h3>{{ $t('componentTest.link.disable') }}</h3>
      <el-link type="primary" disabled>{{ $t('componentTest.link.main') }}</el-link>
      <el-link type="success" disabled>{{ $t('componentTest.link.success') }}</el-link>
      <el-link type="warning" disabled>{{ $t('componentTest.link.warn') }}</el-link>
      <el-link type="danger" disabled>{{ $t('componentTest.link.danger') }}</el-link>
    </div>
    <div>
      <h3>{{ $t('componentTest.link.whetherUnderline') }}</h3>
      <el-link :underline="false">{{ $t('componentTest.link.hasUnderline') }}</el-link>
      <el-link>{{ $t('componentTest.link.noUnderline') }}</el-link>
    </div>
    <div>
      <h3>A tag</h3>
      <a href="#">{{ $t('componentTest.link.default') }}</a>
    </div>
    <div>
      <h3>{{ $t('componentTest.link.icon') }}</h3>
      <el-link icon="el-icon-edit">{{ $t('componentTest.link.edit') }}</el-link>
      <el-link>
        {{ $t('componentTest.link.info') }}
        <i class="el-icon-view el-icon--right"></i>
      </el-link>
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
