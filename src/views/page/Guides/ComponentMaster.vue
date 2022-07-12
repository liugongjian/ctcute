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
|   Button 按钮    | 马妍     |  v1.0    |
|   TextButton 文字按钮    |  马妍    |  v1.0    |
|   IconButton 图标按钮   |  马妍    |  v1.0    |
|   Content Area Tips 内容区提示    |  马妍    |   v1.0    |
|   Link 链接    |   马妍    |   v1.0    |
|   Breadcrumb 面包屑    |  马妍    |   v1.0    |
|   Pagination 分页器    |   马妍、胡佳婷   |  v1.0    |
|   Steps 步骤条    |    吴静  |   v1.0   |
|   Input 输入框    |    马妍    |   v1.0     |
|   Select 选择器    |   马妍    |   v1.0     |
|   Radio 单选框    |   马妍    |   v1.0     |
|   Checkbox 多选框    |   马妍    |   v1.0     |
|   Rate 评分    |   胡佳婷   |   v1.0   |
|   Slider 滑动输入条    |   马妍    |   v1.0     |
|   Upload 上传     |   马妍    |   v1.0     |
|   Switch 开关    |  马妍    |   v1.0     |
|   Popover 气泡提示     |  马妍    |   v1.0     |
|   Tooltip 文字提示     |   马妍    |   v1.0     |
|   Tabs 选项卡     |  马妍    |   v1.0     |
|   SelectedButton 选择按钮     |  马妍、王亚振    |  v1.0     |
|   Table 表格     |  朱玉豆    |   v1.0    |
|   Alert 警告     |  赵昕    |  v1.0    |
|   Content Area Tips 内容区提示     |   马妍    |   v1.0    |
|   Tag 标签     |   赵昕    |  v1.0    |
|   Tree 树形菜单     |  肖仁    |  v1.0    |
|   State 状态      |   王亚振   |   v1.0   |
|   Notification 通知提醒框      |   马妍    |   v1.0    |
|   Toast 轻提示      |   赵昕    |  v1.0    |
|   Drawer 抽屉      |   赵昕    |  v1.0    |
|   Transfer 穿梭框      |   赵昕    |  v1.0    |
|   Collapse 折叠       |   赵昕    |  v1.0    |
|   Timeline 时间轴       |  赵昕    |  v1.0    |
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
