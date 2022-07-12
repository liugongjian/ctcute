<template>
  <cute-mavon-editor class="component-md-table" :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from './components/CuteMavonEditor.vue'

@Component({
  name: 'DesignTarget',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 组件维护人
|   组件   |  维护人    |  版本    |
| ---------------------------------------- | :---------: | :---------: |
|   Button 按钮    | 马妍     |  v0.1    |
|   TextButton 文字按钮    |  马妍    |  v0.1    |
|   IconButton 图标按钮   |  马妍    |  v0.1    |
|   Content Area Tips 内容区提示    |  马妍    |   v0.1    |
|   Link 链接    |   马妍    |   v0.1    |
|   Breadcrumb 面包屑    |  马妍    |   v0.1    |
|   Pagination 分页器    |   马妍、胡佳婷   |  v0.1    |
|   Steps 步骤条    |    吴静  |   v0.1   |
|   Input 输入框    |    马妍    |   v0.1     |
|   Select 选择器    |   马妍    |   v0.1     |
|   Radio 单选框    |   马妍    |   v0.1     |
|   Checkbox 多选框    |   马妍    |   v0.1     |
|   Rate 评分    |   胡佳婷   |   v0.1   |
|   Slider 滑动输入条    |   马妍    |   v0.1     |
|   Upload 上传     |   马妍    |   v0.1     |
|   Switch 开关    |  马妍    |   v0.1     |
|   Popover 气泡提示     |  马妍    |   v0.1     |
|   Tooltip 文字提示     |   马妍    |   v0.1     |
|   Tabs 选项卡     |  马妍    |   v0.1     |
|   SelectedButton 选择按钮     |  马妍、王亚振    |  v0.1     |
|   Table 表格     |  朱玉豆    |   v0.1    |
|   Alert 警告     |  赵昕    |  v0.1    |
|   Content Area Tips 内容区提示     |   马妍    |   v0.1    |
|   Tag 标签     |   赵昕    |  v0.1    |
|   Tree 树形菜单     |  肖仁    |  v0.1    |
|   State 状态      |   王亚振   |   v0.1   |
|   Notification 通知提醒框      |   马妍    |   v0.1    |
|   Toast 轻提示      |   赵昕    |  v0.1    |
|   Drawer 抽屉      |   赵昕    |  v0.1    |
|   Transfer 穿梭框      |   赵昕    |  v0.1    |
|   Collapse 折叠       |   赵昕    |  v0.1    |
|   Timeline 时间轴       |  赵昕    |  v0.1    |
`
}
</script>
<style lang="scss">
.component-md-table {
  table {
    th:first-of-type {
      width: 30%;
    }

    th:nth-of-type(2) {
      width: 20%;
    }

    th:nth-of-type(3) {
      width: 20%;
    }
  }
}
</style>
