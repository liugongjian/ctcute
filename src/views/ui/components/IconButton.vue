<template>
  <div class="ui-iconbutton">
    <p>常用的文字按钮</p>
    <h2>默认状态</h2>
    <div class="sub-sample">
      <el-button class="button" plain>
        <svg-icon name="setting" />
      </el-button>
      <el-button type="text" plain><svg-icon name="setting" /> </el-button>
      <el-button type="text" plain><svg-icon name="download" />下载</el-button>
      <el-button type="text"><svg-icon name="download" />下载</el-button>
    </div>
    <h2>禁用状态</h2>
    <div class="sub-sample">
      <el-button disabled plain><svg-icon name="setting" /></el-button>
      <el-button disabled type="text"><svg-icon name="setting" /></el-button>
      <el-button disabled type="text"><svg-icon name="download" />下载</el-button>
      <el-button disabled type="text"><svg-icon name="download" />下载</el-button>
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
