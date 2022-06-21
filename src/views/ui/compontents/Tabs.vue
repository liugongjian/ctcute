<template>
  <div class="ui-tabs">
    <h3>基础样式</h3>
    <el-row>
      <el-tabs>
        <el-tab-pane label="选项一">选项一</el-tab-pane>
        <el-tab-pane label="禁用项" disabled>禁用项</el-tab-pane>
        <el-tab-pane label="默认项">默认项</el-tab-pane>
      </el-tabs>
    </el-row>
    <hr />
    <h3>带icon样式</h3>
    <el-row>
      <el-tabs>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-cloudy"></i> 选项一</span>
          选项一
        </el-tab-pane>
        <el-tab-pane disabled>
          <span slot="label"><i class="el-icon-cloudy"></i> 禁用项</span>
          禁用项
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-cloudy"></i> 默认项</span>
          默认项
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <hr />

    <h3>小选项卡</h3>
    <el-row class="small-tabs">
      <el-tabs value="third" type="card" size="small">
        <el-tab-pane label="默认项" name="second">默认项</el-tab-pane>
        <el-tab-pane label="选中项" name="third">选中项</el-tab-pane>
        <el-tab-pane label="禁用选项" name="fourth" disabled>禁用选项</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>可删除小选项卡</h3>
    <el-row class="delete-tabs">
      <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <!-- <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
          {{ item.content }}
        </el-tab-pane> -->
        <el-tab-pane label="默认选项">默认选项</el-tab-pane>
        <el-tab-pane label="选中选项">选中选项</el-tab-pane>
        <el-tab-pane label="选中不可点选项" disabled>选中不可点选项</el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiTabs',
})
export default class extends Vue {
  public static title = {
    zh: '选项卡',
    en: 'Tabs',
  }

  private editableTabs = [
    {
      title: '默认项',
      name: '1',
      content: '默认项',
    },
    {
      title: '选中项',
      name: '2',
      content: '选中项',
    },
    {
      title: '不可用',
      name: '3',
      content: '不可用',
    },
  ]

  private editableTabsValue = '1'

  private removeTab(targetName) {
    const tabs = this.editableTabs
    let activeName = this.editableTabsValue
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    this.editableTabsValue = activeName
    this.editableTabs = tabs.filter(tab => tab.name !== targetName)
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin: 20px 0 24px 0;
}

// ::v-deep.el-tabs__nav.is-top {
//   border: none;
// }
// ::v-deep .el-tabs__item.is-top.is-active {
//   border-top: 1px solid #dddddd;
//   box-sizing: content-box;
// }
// ::v-deep.el-tabs__item {
//   height: 28px;
//   line-height: 28px;
// }

// .delete-tabs {
//   ::v-deep.el-tabs__nav.is-top {
//     border: none;
//   }
//   ::v-deep.el-tabs__item.is-top.is-active.is-closable {
//     border-top: 1px solid #dddddd;
//     box-sizing: content-box;
//   }
//   ::v-deep.el-tabs__item {
//     height: 28px;
//     line-height: 28px;
//   }
// }
</style>
