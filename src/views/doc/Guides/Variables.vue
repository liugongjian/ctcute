<!--
 * @Author: 黄靖
 * @Date: 2023-03-20 17:53:38
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-05-05 15:34:38
 * @Description: scss变量
-->

<template>
  <div class="doc-scss-wrapper">
    <h1>SASS变量</h1>
    <el-divider></el-divider>
    <div v-for="(v, idx) in variables" :key="idx">
      <template v-if="v.doc === 'true'">
        <h3>{{ v.title }}</h3>
        <el-table :data="v.list" fit border>
          <el-table-column prop="name" label="变量名">
            <template slot-scope="{ row }">
              <span class="variables-name" @click="copyCode(row.name)">{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="value" label="值">
            <template slot-scope="{ row }">
              <span v-if="isColor(row)" class="coloratlas" :style="{ backgroundColor: row.value }"></span>
              <span class="variables-value">{{ row.value }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="scene" label="使用场景"></el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import json from '@cutedesign/ui/style/themes/default/variables-doc.js'
import copy from 'copy-to-clipboard'

@Component({
  name: 'Variables',
})
export default class extends Vue {
  private variables = json

  /**
   * 复制变量名
   */
  private copyCode(content: string) {
    copy(content)
    this.$message.success(`已复制变量名${content}`)
  }

  private isColor(row) {
    if (row.type) {
      return row.type === 'color'
    } else {
      const value = row.value
      return /^#[0-9A-Fa-f]{3,6}$/.test(value)
    }
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

.variables-value,
.coloratlas {
  vertical-align: middle;
}

.coloratlas {
  display: inline-block;
  margin-right: $padding;
  width: $text-size;
  height: $text-size;
  border-radius: calc($text-size / 2);
}
</style>
