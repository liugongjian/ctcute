<!--
 * @Author: 朱凌浩
 * @Date: 2023-06-05 17:53:38
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-06-05 15:34:38
 * @Description: Settings
-->

<template>
  <div class="doc-scss-wrapper">
    <h1>全局配置</h1>
    <el-divider></el-divider>
    <el-table :data="settings" fit border>
      <el-table-column prop="name" label="名称">
        <template slot-scope="{ row }">
          <span class="variables-name" @click="copyCode(row.name)">{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="默认值">
        <template slot-scope="{ row }">
          <span class="variables-value">{{ row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="comment" label="使用说明"></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import json from '@/settings/doc'
import copy from 'copy-to-clipboard'

@Component({
  name: 'Settings',
})
export default class extends Vue {
  private settings = json

  /**
   * 复制变量名
   */
  private copyCode(content: string) {
    copy(content)
    this.$message.success(`已复制变量名${content}`)
  }
}
</script>
<style lang="scss" scoped>
.doc-scss-wrapper {
  width: 100%;
  height: 100%;
  padding: $padding-2x $padding-6x $padding-4x $padding-6x;
  background-color: $color-bg-2;
}

.variables-name {
  cursor: pointer;

  &:hover {
    color: $color-master;
  }
}

.variables-value {
  vertical-align: middle;
}
</style>
