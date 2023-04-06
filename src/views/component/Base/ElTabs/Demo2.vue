<template>
  <div>
    <h3>大尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs type="button" size="large">
        <el-tab-pane label="选项一">选项一</el-tab-pane>
        <el-tab-pane label="默认项">默认项</el-tab-pane>
        <el-tab-pane label="禁用项" disabled>禁用项</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>中尺寸(默认)</h3>
    <el-row class="sub-tabs">
      <el-tabs type="button">
        <el-tab-pane label="选项一">选项一</el-tab-pane>
        <el-tab-pane label="默认项">默认项</el-tab-pane>
        <el-tab-pane label="禁用项" disabled>禁用项</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>小尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs type="button" size="small">
        <el-tab-pane label="选项一">选项一</el-tab-pane>
        <el-tab-pane label="默认项">默认项</el-tab-pane>
        <el-tab-pane label="禁用项" disabled>禁用项</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>可删除</h3>
    <el-row>
      <el-tabs
        v-model="editableTabsValue"
        type="button"
        closable
        addable
        @tab-remove="removeTab"
        @tab-add="addTab"
      >
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

@Component({})
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
  private tabIndex = 3
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

  private addTab() {
    const newTabName = ++this.tabIndex + ''
    this.editableTabs.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    this.editableTabsValue = newTabName
  }
}
</script>
