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
## 页面维护人
|   页面   |  维护人    |  版本    |
| ---------------------------------------- | :---------: | :---------: |
|   SimpleForm 基础表单    | 朱凌浩     |  v0.1    |
|   ProForm1 复杂表单1    |  秦瑞斌    |  v0.1    |
|   ProForm2 复杂表单2   |  秦瑞斌    |  v0.1    |
|   StepForm 分步表单    |  何晋升    |   v0.1    |
|   SmallDialog 小弹窗    |   黄璐璐    |   v0.1    |
|   MediumDialog 中弹窗    |  秦瑞斌    |   v0.1    |
|   LargeDialog 大弹窗    |   马妍   |  v0.1    |
|   FullScreenDialog 全屏弹窗    |   吴博聪   |  v0.1    |
|   ProSmallDialog 复杂小弹窗    |   吴博聪   |  v0.1    |
|   ProMediumDialog 复杂中弹窗    |   吴博聪   |  v0.1    |
|   SuccessDialog 成功弹窗    |   李志伟   |  v0.1    |
|   WarnDialog 告警弹窗    |   李志伟   |  v0.1    |
|   SimpleTable 基础表格    |   朱凌浩   |  v0.1    |
|   ProTable1 复杂表格1    |   马妍   |  v0.1    |
|   ProTable2 复杂表格2    |   马妍   |  v0.1    |
|   ProTable3 复杂表格3    |   张晨曦   |  v0.1    |
|   ProTable4 复杂表格4    |   肖仁   |  v0.1    |
|   Card1 卡片1    |   王亚振   |  v0.1    |
|   Card2 卡片2    |   孙善鹏   |  v0.1    |
|   Card3 卡片3    |   赵丹   |  v0.1    |
|   SimpleDetail 简单详情    |   胡佳婷   |  v0.1    |
|   ProDetail1 复杂详情1    |   赵昕   |  v0.1    |
|   ProDetail2 复杂详情2    |   朱玉豆   |  v0.1    |
|   SimpleChart 基础图表    |   孙善鹏   |  v0.1    |
|   Page403 403页    |   万璐敏   |  v0.1    |
|   Page404 404页    |   万璐敏   |  v0.1    |
|   Page500 500页    |   万璐敏   |  v0.1    |
|   EmptyPage 空页面    |   万璐敏   |  v0.1    |
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
