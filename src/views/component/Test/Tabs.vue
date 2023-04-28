<!--
 * @Author: 黄靖
 * @Date: 2023-03-27 15:12:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-27 15:12:09
 * @Description: Step
-->
<template>
  <div>
    <h1>Tabs</h1>
    <h2>默认样式</h2>
    <h3>大尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs size="large">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>中尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs size="medium">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>小尺寸(默认)</h3>
    <el-row class="sub-tabs">
      <el-tabs>
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>可关闭</h3>
    <el-row class="sub-tabs">
      <el-tabs
        v-model="value.default"
        closable
        addable
        @tab-add="value => addTab('default', value)"
        @tab-remove="value => removeTab('default', value)"
      >
        <el-tab-pane
          v-for="item in editableTabs.default"
          :key="item.name"
          :name="item.name"
          :label="item.title"
          :disabled="item.disabled"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于下方</h3>
    <el-row class="sub-tabs">
      <el-tabs tab-position="bottom">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于左方</h3>
    <el-row class="sub-tabs">
      <el-tabs tab-position="left">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于右方</h3>
    <el-row class="sub-tabs">
      <el-tabs tab-position="right">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-divider />
    <h2>按钮式(button)</h2>
    <h3>大尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs type="button" size="large">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>中尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs type="button" size="medium">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>小尺寸(默认)</h3>
    <el-row class="sub-tabs">
      <el-tabs type="button">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>可关闭</h3>
    <el-row class="sub-tabs">
      <el-tabs
        v-model="value.button"
        type="button"
        closable
        addable
        @tab-add="value => addTab('button', value)"
        @tab-remove="value => removeTab('button', value)"
      >
        <el-tab-pane
          v-for="item in editableTabs.button"
          :key="item.name"
          :name="item.name"
          :label="item.title"
          :disabled="item.disabled"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于下方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="button" tab-position="bottom">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于左方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="button" tab-position="left">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于右方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="button" tab-position="right">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-divider />
    <h2>选项卡式(card)</h2>
    <h3>大尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" size="large">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>中尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" size="medium">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>小尺寸(默认)</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" size="small">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>可关闭</h3>
    <el-row class="sub-tabs">
      <el-tabs
        v-model="value.card"
        type="card"
        closable
        addable
        @tab-add="value => addTab('card', value)"
        @tab-remove="value => removeTab('card', value)"
      >
        <el-tab-pane
          v-for="item in editableTabs.card"
          :key="item.name"
          :name="item.name"
          :label="item.title"
          :disabled="item.disabled"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于下方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" tab-position="bottom">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于左方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" tab-position="left">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于右方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="card" tab-position="right">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <el-divider />
    <h2>卡片式(border-card)</h2>
    <h3>大尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs type="border-card" size="large">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>中尺寸</h3>
    <el-row class="sub-tabs">
      <el-tabs type="border-card" size="medium">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>小尺寸(默认)</h3>
    <el-row class="sub-tabs">
      <el-tabs type="border-card" size="small">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>可关闭</h3>
    <el-row class="sub-tabs">
      <el-tabs
        v-model="value.borderCard"
        type="border-card"
        closable
        addable
        @tab-add="value => addTab('borderCard', value)"
        @tab-remove="value => removeTab('borderCard', value)"
      >
        <el-tab-pane
          v-for="item in editableTabs.borderCard"
          :key="item.name"
          :name="item.name"
          :label="item.title"
          :disabled="item.disabled"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于下方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="border-card" tab-position="bottom">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于左方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="border-card" tab-position="left">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <h3>选项卡位于右方</h3>
    <el-row class="sub-tabs">
      <el-tabs type="border-card" tab-position="right">
        <el-tab-pane v-for="item in tabs" :key="item.name" :label="item.title" :disabled="item.disabled">
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import StepsDemo from '@/views/ui/components/Steps.vue'

@Component({
  name: 'Steps',
  //   components: {
  //     StepsDemo,
  //   },
})
export default class extends Vue {
  private tabs = [
    {
      title: '用户管理',
      name: '1',
      content: '用户管理',
    },
    {
      title: '配置管理',
      name: '2',
      content: '配置管理',
    },
    {
      title: '角色管理',
      name: '3',
      content: '角色管理',
    },
    {
      title: '定时任务补偿',
      name: '4',
      content: '定时任务补偿',
    },
    {
      title: '禁用项',
      name: '5',
      content: '禁用项',
      disabled: true,
    },
  ]
  private editableTabs = {
    default: [...this.tabs],
    button: [...this.tabs],
    card: [...this.tabs],
    borderCard: [...this.tabs],
  }
  private value = {
    default: '1',
    button: '1',
    card: '1',
    borderCard: '1',
  }

  private removeTab(type, targetName) {
    let tabs = this.editableTabs[type]
    let activeName = this.value[type]
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
    this.$set(this.value, type, activeName)
    this.$set(
      this.editableTabs,
      type,
      tabs.filter(tab => tab.name !== targetName)
    )
  }

  private addTab(type: string, tabName: string) {
    const newTabName = this.editableTabs[type].length + 1 + ''
    const tabs = [...this.editableTabs[type]]
    tabs.push({
      title: tabName,
      name: newTabName,
      content: 'New Tab content',
    })
    this.$set(this.editableTabs, type, tabs)
    this.$set(this.value, type, newTabName)
  }
}
</script>
<style lang="scss" scoped>
.sub-tabs {
  max-width: 800px;
}
</style>
