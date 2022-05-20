<template>
  <div>
    <h3>基础样式</h3>
    <el-row>
      <el-tabs>
        <el-tab-pane label="选项一">选项一</el-tab-pane>
        <el-tab-pane label="选项二">选项二</el-tab-pane>
        <el-tab-pane label="选项三">选项三</el-tab-pane>
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
        <el-tab-pane>
          <span slot="label"><i class="el-icon-cloudy"></i> 选项二</span>
          选项二
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-cloudy"></i> 选项三</span>
          选项三
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <hr />
    <h3>卡片样式</h3>
    <el-row>
      <el-tabs value="third" type="card">
        <el-tab-pane label="hover项" name="first">hover项</el-tab-pane>
        <el-tab-pane label="默认项" name="second">默认项</el-tab-pane>
        <el-tab-pane label="选中项" name="third">选中项</el-tab-pane>
        <el-tab-pane label="禁用选项" name="fourth" disabled>禁用选项</el-tab-pane>
      </el-tabs>
    </el-row>
    <el-row>
      <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-row>
      <el-tabs value="second1" type="card">
        <el-tab-pane label="默认选项" name="first1">默认选项</el-tab-pane>
        <el-tab-pane label="默认项" name="second1">选中选项</el-tab-pane>
        <el-tab-pane label="hover选项" name="third1">hover选项</el-tab-pane>
        <el-tab-pane label="选中不可点项" name="fourth1" disabled>选中不可点选项</el-tab-pane>
        <el-tab-pane label="禁用选项" name="fourt2" disabled>禁用选项</el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiTabs'
})
export default class extends Vue {
  public static title = {
    zh: '选项卡',
    en: 'Tabs'
  }

  private editableTabs = [
    {
      title: '选项一',
      name: '1',
      content: '选项一'
    },
    {
      title: '选项二',
      name: '2',
      content: '选项二'
    },
    {
      title: '选项三',
      name: '3',
      content: '选项三'
    }
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
</style>
