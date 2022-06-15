<template>
  <div class="ui-button">
    <p>常用的操作按钮</p>
    <h2>特殊按钮</h2>
    <div class="sub-special">
      <el-button type="danger">特殊按钮</el-button>
      <el-button type="primary" disabled>不可用特殊按钮</el-button>
    </div>
    <h2>不同尺寸</h2>
    <div class="sub-sample">
      <el-button>次按钮</el-button>
      <el-button size="small">小次按钮</el-button>
      <el-button type="primary" size="small">小主按钮</el-button>
    </div>
    <h2>常用按钮</h2>
    <div class="sub-sample">
      <el-button type="primary">主按钮</el-button>
      <el-button>次按钮</el-button>
      <el-button type="danger" plain>危险</el-button>
      <el-button size="small"><svg-icon name="plus-circle" /> 带图标按钮</el-button>
      <el-dropdown>
        <el-button size="small"> <svg-icon name="select" /> 按钮2 <svg-icon name="caret-down" /> </el-button>
        <el-dropdown-menu slot="dropdown" class="conventional-dropdown">
          <el-dropdown-item> <svg-icon name="select" /> 按钮</el-dropdown-item>
          <el-dropdown-item> <svg-icon name="select" /> 按钮</el-dropdown-item>
          <el-dropdown-item> <svg-icon name="select" /> 按钮</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button size="small">小次按钮</el-button>
    </div>
    <h2>禁用状态</h2>
    <div class="sub-sample">
      <el-button disabled type="primary">主按钮</el-button>
      <el-button disabled type="primary">次按钮</el-button>
      <el-button disabled type="danger" plain>危险</el-button>
      <el-button disabled size="small" type="primary"><svg-icon name="plus-circle" /> 带图标按钮</el-button>
      <el-button disabled size="small" type="primary"><svg-icon name="select" /> 按钮2 </el-button>
      <el-button disabled size="small" type="primary">小次按钮</el-button>
    </div>
    <h2>组合图标</h2>
    <div class="sub-combination">
      <p>常用于复杂详情页</p>
      <el-button>操作一</el-button>
      <el-button>操作二</el-button>
      <el-dropdown>
        <el-button>...</el-button>
        <el-dropdown-menu slot="dropdown" class="combination-dropdown">
          <el-dropdown-item>操作一</el-dropdown-item>
          <el-dropdown-item>操作二</el-dropdown-item>
          <el-dropdown-item>操作三</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-button type="primary">主操作</el-button>
    </div>
    <h2>按钮布局</h2>
    <div class="sub-sample">
      <p>
        两个字的按钮中间需要加入一个空格，按钮之间常规间距为8px，弹窗的确定和取消间距为16px，主按钮一般放在左侧，仅在弹窗下方确定放在取消的右侧。
      </p>
      <div class="button-layout">
        <el-button type="primary">主按钮</el-button>
        <el-button>次按钮</el-button>
      </div>
      <div class="button-layout">
        <el-button type="primary" size="small">小按钮</el-button>
        <el-button size="small">小按钮</el-button>
      </div>
      <div class="button-layout">
        <el-button>取消</el-button>
        <el-button type="primary">主按钮</el-button>
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
  name: 'UiButton',
})
export default class extends Vue {
  public static title = {
    zh: '按钮',
    en: 'Button',
  }

  private flag = false
}
</script>
<style lang="scss" scoped>
.sub-sample {
  white-space: nowrap;
  .el-button + .el-button {
    margin-left: 16px;
  }
}
.sub-combination {
  .el-button + .el-button {
    margin: 0px;
  }
  .el-button + .el-dropdown {
    margin: 0;
  }
}

.button-layout {
  display: inline-block;

  .el-button + .el-button {
    margin-left: 8px;
  }
}

.button-layout + .button-layout {
  margin-left: 48px;
}
</style>
