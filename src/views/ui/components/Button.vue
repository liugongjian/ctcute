<template>
  <div class="ui-button">
    <p>常用的操作按钮</p>
    <h2>特殊按钮</h2>
    <div class="sub-special">
      <el-button type="ct">特殊按钮</el-button>
      <el-button disabled>不可用特殊按钮</el-button>
    </div>
    <h2>不同尺寸</h2>
    <div class="sub-sample">
      <el-button>次按钮</el-button>
      <el-button size="small">小次按钮</el-button>
      <el-button type="primary" size="mini">小主按钮</el-button>
    </div>
    <h2>常用按钮</h2>
    <div class="sub-sample">
      <el-button type="primary">主按钮</el-button>
      <el-button>次按钮</el-button>
      <el-button type="danger" plain>危险</el-button>
      <el-button size="small" icon="plus-circle">带图标按钮</el-button>
      <el-dropdown placement="bottom-start" @visible-change="openDropdown">
        <el-button size="small" icon="select">
          按钮2
          <svg-icon name="caret-down" :class="flag ? 'top-fill' : 'svg-icon svg-fill'" />
        </el-button>
        <el-dropdown-menu slot="dropdown" class="conventional-dropdown">
          <el-dropdown-item> <svg-icon name="select" /> 按钮</el-dropdown-item>
          <el-dropdown-item> <svg-icon name="select" /> 按钮</el-dropdown-item>
          <el-dropdown-item> <svg-icon name="select" /> 按钮</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button size="small">小次按钮</el-button>
    </div>
    <div class="button-loading">loading</div>
    <div class="sub-sample">
      <el-button type="primary" :loading="true">主按钮</el-button>
      <el-button :loading="true">次按钮</el-button>
    </div>
    <h2>禁用状态</h2>
    <div class="sub-sample">
      <el-button disabled type="primary">主按钮</el-button>
      <el-button disabled>次按钮</el-button>
      <el-button disabled type="danger" plain>危险</el-button>
      <el-button disabled size="small" icon="plus-circle">带图标按钮</el-button>
      <el-button disabled size="small" icon="select">按钮2 </el-button>
      <el-button disabled size="small">小次按钮</el-button>
    </div>
    <h2>组合按钮</h2>
    <div class="sub-sample">
      <p>组合按钮常用于复杂详情页</p>
      <div class="combination-button">
        <el-button>操作一</el-button>
        <el-button>操作二</el-button>
        <el-dropdown size="medium">
          <el-button size="medium">...</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>操作四</el-dropdown-item>
            <el-dropdown-item>操作五</el-dropdown-item>
            <el-dropdown-item>操作六</el-dropdown-item>
            <el-dropdown-item>操作七</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button size="medium" type="primary">主操作</el-button>
      </div>
    </div>
    <h2>按钮布局</h2>
    <div class="sub-sample">
      <p>
        两个字的按钮中间需要加入一个空格，按钮之间常规间距为12px，弹窗的确定和取消间距为16px，主按钮一般放在左侧，仅在弹窗下方确定放在取消的右侧。
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
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { CuteButtonGroup } from '@cutedesign/ui'

@Component({
  name: 'UiButton',
  // components: { CuteButtonGroup },
})
export default class extends Vue {
  public static title = {
    zh: '按钮',
    en: 'Button',
  }
  public static description = {
    maintainer: '朱凌浩',
    version: 'v2.0',
    updateTime: '2023.05.05',
  }

  private buttonData = [
    { label: '操作一', name: 'op1' },
    { label: '操作二', name: 'op2' },
    { label: '操作三', name: 'op3' },
    { label: '主操作', name: 'op--main' },
  ]

  private flag = false
  private openDropdown(e) {
    e ? (this.flag = true) : (this.flag = false)
  }
}
</script>
<style lang="scss" scoped>
.sub-special {
  padding-bottom: 24px;
  border-bottom: 1px solid $border-color-light;
}

.sub-sample {
  white-space: nowrap;

  .el-button + .el-button {
    margin-left: 16px;
  }
}

.sub-combination {
  .el-button + .el-dropdown {
    margin: 0;
  }
}

.button-layout {
  display: inline-block;

  .el-button + .el-button {
    margin-left: 12px;
  }
}

.button-layout + .button-layout {
  margin-left: 48px;
}

.button-loading {
  color: $color-neutral-7;
  font-size: 12px;
}

.conventional-dropdown,
.combination-dropdown {
  width: 124px;

  .el-dropdown-menu__item {
    padding-left: 21px;

    .svg-icon.svg-fill {
      margin-right: 4px;
    }
  }
}
</style>
