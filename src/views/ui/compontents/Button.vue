<template>
  <div>
    <p>常用的操作按钮</p>
    <h2>不同尺寸</h2>
    <div class="sub-sample">
      <el-button type="primary">默认按钮</el-button>
      <el-button type="primary" size="medium">中等按钮</el-button>
      <el-button type="primary" size="small">小型按钮</el-button>
      <el-button type="primary" size="mini">超小按钮</el-button>
    </div>
    <h2>常用按钮</h2>
    <div class="sub-sample">
      <el-button type="primary">主按钮</el-button>
      <el-button>次按钮</el-button>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text"><svg-icon name="upload" /></el-button>
      <el-button type="primary" plain>+ 新增按钮</el-button>
      <el-button type="danger" plain>次危险按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="primary"><svg-icon name="save" /> 带图标的按钮</el-button>
    </div>
    <h2>禁用状态</h2>
    <div class="sub-sample">
      <el-button type="primary" disabled>主按钮</el-button>
      <el-button disabled>次按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
      <el-button type="text" disabled><svg-icon name="upload" /></el-button>
      <el-button type="primary" plain disabled>+ 新增按钮</el-button>
      <el-button type="danger" plain disabled>次危险按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
      <el-button type="primary" disabled><svg-icon name="save" /> 带图标的按钮</el-button>
    </div>
    <h2>按钮布局</h2>
    <div class="sub-sample">
      <p>两个字的按钮中间需要加入一个空格，按钮之间常规间距为8px，弹窗的确定和取消间距为16px，主按钮一般放在左侧，仅在弹窗下方确定放在取消的右侧。</p>
      <div class="button-layout">
        <el-button type="primary">主按钮</el-button>
        <el-button>次按钮</el-button>
      </div>
      <div class="button-layout">
        <el-button type="primary" size="small">小型按钮</el-button>
        <el-button size="small">小型按钮</el-button>
      </div>
      <div class="button-layout">
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </div>
    <h2>加载中…</h2>
    <div class="sub-sample">
      <el-button type="primary" :loading="true">加载中…</el-button>
      <el-button :loading="true">加载中…</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiButton'
})
export default class extends Vue {
  public static title = {
    zh: '按钮',
    en: 'Button'
  }
}
</script>
<style lang="scss" scoped>
  .sub-sample {
    white-space: nowrap;

    .el-button + .el-button {
      margin-left: 30px;
    }
  }

  .button-layout {
    display: inline-block;

    .el-button + .el-button {
      margin-left: 8px;
    }
  }

  .button-layout + .button-layout {
    margin-left: 30px;
  }
</style>
