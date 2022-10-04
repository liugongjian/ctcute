<template>
  <div>
    <p>常用的文字按钮</p>
    <h2>默认状态</h2>
    <div class="sub-sample">
      <el-button type="text">文字按钮</el-button>
    </div>
    <h2>禁用状态</h2>
    <div class="sub-sample">
      <el-button disabled type="text">文字按钮</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiTextButton',
})
export default class extends Vue {
  public static title = {
    zh: '文字按钮',
    en: 'TextButton',
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
  white-space: nowrap;

  .el-button + .el-button {
    margin-left: 20px;
  }
}
</style>
