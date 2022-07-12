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
|   SimpleForm 基础表单    | 朱凌浩     |  v1.0    |
|   ProForm1 复杂表单1    |  秦瑞斌    |  v1.0    |
|   ProForm2 复杂表单2   |  秦瑞斌    |  v1.0    |
|   StepForm 分步表单    |  何晋升    |   v1.0    |
|   SmallDialog 小弹窗    |   黄璐璐    |   v1.0    |
|   MediumDialog 中弹窗    |  秦瑞斌    |   v1.0    |
|   LargeDialog 大弹窗    |   马妍   |  v1.0    |
|   FullScreenDialog 全屏弹窗    |   吴博聪   |  v1.0    |
|   ProSmallDialog 复杂小弹窗    |   吴博聪   |  v1.0    |
|   ProMediumDialog 复杂中弹窗    |   吴博聪   |  v1.0    |
|   SuccessDialog 成功弹窗    |   李志伟   |  v1.0    |
|   WarnDialog 告警弹窗    |   李志伟   |  v1.0    |
|   SimpleTable 基础表格    |   朱凌浩   |  v1.0    |
|   ProTable1 复杂表格1    |   马妍   |  v1.0    |
|   ProTable2 复杂表格2    |   马妍   |  v1.0    |
|   ProTable3 复杂表格3    |   张晨曦   |  v1.0    |
|   ProTable4 复杂表格4    |   肖仁   |  v1.0    |
|   Card1 卡片1    |   王亚振   |  v1.0    |
|   Card2 卡片2    |   孙善鹏   |  v1.0    |
|   Card3 卡片3    |   赵丹   |  v1.0    |
|   SimpleDetail 简单详情    |   胡佳婷   |  v1.0    |
|   ProDetail1 复杂详情1    |   赵昕   |  v1.0    |
|   ProDetail2 复杂详情2    |   朱玉豆   |  v1.0    |
|   SimpleChart 基础图表    |   孙善鹏   |  v1.0    |
|   Page403 403页    |   万璐敏   |  v1.0    |
|   Page404 404页    |   万璐敏   |  v1.0    |
|   Page500 500页    |   万璐敏   |  v1.0    |
|   EmptyPage 空页面    |   万璐敏   |  v1.0    |
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
