<template>
  <div class="sub-progress">
    <p>展示操作的当前进度</p>
    <h3>常规进度条</h3>
    <p>加载中进度条，存在加载中、成功、失败三种状态，进度条长度支持自定义</p>
    <el-row>
      <el-progress :percentage="40" class="normal-text"></el-progress>
    </el-row>
    <el-row>
      <el-progress :percentage="100" status="success"></el-progress>
    </el-row>
    <el-row>
      <el-progress :percentage="100" status="exception"></el-progress>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiProgress',
})
export default class extends Vue {
  public static title = {
    zh: '进度条',
    en: 'Progress',
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  width: 275px;
  height: 20px;
  margin-top: 24px;
}
</style>
