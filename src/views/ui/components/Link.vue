<!--
 * @Author: liugj
 * @Date: 2023-03-06 19:31:42
 * @LastEditors: liugj
 * @LastEditTime: 2023-04-25 14:34:09
 * @Description:
-->
<template>
  <div>
    <p>常用的链接</p>
    <h2>默认状态</h2>
    <div class="sub-sample">
      <el-link type="primary">链接文字</el-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiLink',
})
export default class extends Vue {
  public static title = {
    zh: '链接',
    en: 'Link',
  }
  public static description = {
    maintainer: '马妍',
    version: 'v1.0',
    updateTime: '2022.07.12',
  }
}
</script>

<style lang="scss" scoped>
.sub-sample {
  .el-link + .el-link {
    margin-left: 20px;
  }
}
</style>
