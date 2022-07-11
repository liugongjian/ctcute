<template>
  <div>
    <h3>基础样式</h3>
    <el-row class="sub-tabs">
      <el-tabs>
        <el-tab-pane label="选项一">选项一</el-tab-pane>
        <el-tab-pane label="禁用项" disabled>禁用项</el-tab-pane>
        <el-tab-pane label="默认项">默认项</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>带icon样式</h3>
    <el-row class="sub-tabs">
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
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
          :disabled="item.disabled"
        >
          {{ item.content }}
        </el-tab-pane>
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
      disabled: true,
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
  margin: 20px 0 24px;
}

.sub-tabs,
.small-tabs {
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 24px;
}

.delete-tabs {
  margin-bottom: 0;
}
</style>
