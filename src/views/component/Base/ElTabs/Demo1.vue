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
    <h3>{{ $t('demo.tabs.common.editable') }}</h3>
    <el-row>
      <el-tabs
        v-model="editableTabsValue1"
        closable
        addable
        :add-button-text="$t('demo.tabs.common.addButtonText')"
        @tab-remove="removeTab1"
        @tab-add="addTab1"
      >
        <el-tab-pane
          v-for="item in editableTabs1"
          :key="item.name"
          :label="item.title"
          :name="item.name"
          :disabled="item.disabled"
          >{{ item.content }}</el-tab-pane
        >
      </el-tabs>
    </el-row>
    <h3>{{ $t('demo.tabs.common.addWithInput') }}</h3>
    <el-row>
      <el-tabs v-model="editableTabsValue2" addable show-add-input @tab-add="addTab2">
        <el-tab-pane
          v-for="item in editableTabs2"
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

  private editableTabs1 = [
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
  private editableTabs2 = [...this.editableTabs1]

  private editableTabsValue1 = '1'
  private editableTabsValue2 = '1'

  private tabIndex = 3

  private removeTab1(targetName) {
    const tabs = this.editableTabs1
    let activeName = this.editableTabsValue1
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

    this.editableTabsValue1 = activeName
    this.editableTabs1 = tabs.filter(tab => tab.name !== targetName)
  }

  private addTab1() {
    const newTabName = ++this.tabIndex + ''
    this.editableTabs1.push({
      title: this.$t('demo.tabs.common.newTabName'),
      name: newTabName,
      content: this.$t('demo.tabs.common.newTabContent'),
    })
    this.editableTabsValue1 = newTabName
  }

  private addTab2(tabName: string) {
    const newTabName = ++this.tabIndex + ''
    this.editableTabs2.push({
      title: tabName,
      name: newTabName,
      content: this.$t('demo.tabs.common.newTabContent'),
    })
    this.editableTabsValue2 = newTabName
  }
}
</script>
