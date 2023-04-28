<template>
  <div>
    <h3>{{ $t('demo.tabs.common.large') }}</h3>
    <el-row class="sub-tabs">
      <el-tabs size="large">
        <el-tab-pane :label="$t('demo.tabs.common.option1')">{{
          $t('demo.tabs.common.option1')
        }}</el-tab-pane>
        <el-tab-pane :label="$t('demo.tabs.common.optionDefault')">{{
          $t('demo.tabs.common.optionDefault')
        }}</el-tab-pane>
        <el-tab-pane :label="$t('demo.tabs.common.optionForbid')" disabled>{{
          $t('demo.tabs.common.optionForbid')
        }}</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>{{ $t('demo.tabs.common.medium') }}</h3>
    <el-row class="sub-tabs">
      <el-tabs size="medium">
        <el-tab-pane :label="$t('demo.tabs.common.option1')">{{
          $t('demo.tabs.common.option1')
        }}</el-tab-pane>
        <el-tab-pane :label="$t('demo.tabs.common.optionDefault')">{{
          $t('demo.tabs.common.optionDefault')
        }}</el-tab-pane>
        <el-tab-pane :label="$t('demo.tabs.common.optionForbid')" disabled>{{
          $t('demo.tabs.common.optionForbid')
        }}</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>{{ $t('demo.tabs.common.small') }}</h3>
    <el-row class="sub-tabs">
      <el-tabs>
        <el-tab-pane :label="$t('demo.tabs.common.option1')">{{
          $t('demo.tabs.common.option1')
        }}</el-tab-pane>
        <el-tab-pane :label="$t('demo.tabs.common.optionDefault')">{{
          $t('demo.tabs.common.optionDefault')
        }}</el-tab-pane>
        <el-tab-pane :label="$t('demo.tabs.common.optionForbid')" disabled>{{
          $t('demo.tabs.common.optionForbid')
        }}</el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>{{ $t('demo.tabs.common.delete') }}</h3>
    <el-row>
      <el-tabs
        v-model="editableTabsValue"
        type="card"
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
          >{{ item.content }}</el-tab-pane
        >
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
      title: this.$t('demo.tabs.common.optionDefault'),
      name: '1',
      content: this.$t('demo.tabs.common.optionDefault'),
    },
    {
      title: this.$t('demo.tabs.common.optionChoosed'),
      name: '2',
      content: this.$t('demo.tabs.common.optionChoosed'),
    },
    {
      title: this.$t('demo.tabs.common.optionDisable'),
      name: '3',
      content: this.$t('demo.tabs.common.optionDisable'),
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

  private addTab(tabName: string) {
    const newTabName = ++this.tabIndex + ''
    this.editableTabs.push({
      title: tabName,
      name: newTabName,
      content: 'New Tab content',
    })
    this.editableTabsValue = newTabName
  }
}
</script>
