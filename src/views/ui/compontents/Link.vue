<template>
  <div>
    <p>常用的链接</p>
    <h2>默认状态</h2>
    <div class="sub-sample">
      <el-link>文字按钮</el-link>
      <el-link type="primary">文字按钮</el-link>
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
}
</script>

<style lang="scss" scoped>
.sub-sample {
  .el-link + .el-link {
    margin-left: 20px;
  }
}
</style>
