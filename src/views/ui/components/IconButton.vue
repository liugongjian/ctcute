<template>
  <div class="ui-iconbutton">
    <p>常用的文字按钮</p>
    <h2>默认状态</h2>
    <div class="sub-sample">
      <el-button icon="setting" square></el-button>
      <el-button icon="setting" square :border="false"></el-button>
      <el-button icon="download" :border="false">下载</el-button>
      <el-button type="primary" icon="download" :border="false" plain>下载</el-button>
    </div>
    <h2>禁用状态</h2>
    <div class="sub-sample">
      <el-button icon="setting" square disabled></el-button>
      <el-button icon="setting" square disabled :border="false"></el-button>
      <el-button icon="download" disabled :border="false">下载</el-button>
      <el-button type="primary" icon="download" disabled :border="false" plain>下载</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiIconButton',
})
export default class extends Vue {
  public static title = {
    zh: '图标按钮',
    en: 'IconButton',
  }
  public static description = {
    maintainer: '朱凌浩',
    version: 'v2.0',
    updateTime: '2023.05.05',
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
