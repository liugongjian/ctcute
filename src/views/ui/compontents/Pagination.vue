<template>
  <div class="ui-pagination">
    <p>自定义页数分页器/最多显示 5 页内容，当数量多时默认显示前 5 页以及最后 1 页。</p>
    <p>
      若选中的是中间的页数，则除了固定显示第 1 页和最后 1 页之外，显示以选中的页数为中间数，向前和向后各 2
      页。
    </p>
    <el-pagination
      :current-page="currentPage4"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import UiElPagination from '@/components/ElementUI/Pagination/index.vue'
@Component({
  name: 'UiPagination',
  // components: { UiElPagination },
})
export default class extends Vue {
  public static title = {
    zh: '分页器',
    en: 'Pagination',
  }

  private total = 153 // 总条数
  private optionSize = '10' // 下拉回显值
  currentPage4 = 4
  options = [
    // 下拉数据
    {
      value: '选项1',
      label: '10',
    },
    {
      value: '选项2',
      label: '20',
    },
    {
      value: '选项3',
      label: '30',
    },
    {
      value: '选项4',
      label: '40',
    },
  ]

  handleSizeChange(val) {
    console.log(`每页 ${val} 条`)
  }

  handleCurrentChange(val) {
    console.log(`当前页: ${val}`)
  }
}
</script>
<style lang="scss" scoped>
.el-pagination {
  display: flex;
  align-items: center;
}
</style>
