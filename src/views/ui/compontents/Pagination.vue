<template>
  <div>
    <p>自定义页数分页器/最多显示 5 页内容，当数量多时默认显示前 5 页以及最后 1 页。</p>
    <p>
      若选中的是中间的页数，则除了固定显示第 1 页和最后 1 页之外，显示以选中的页数为中间数，向前和向后各 2
      页。
    </p>
    <div class="pageination">
      <el-pagination
        :page-sizes="[10, 20, 30, 40]"
        :page-size="20"
        layout="total, prev, pager, next, sizes,jumper"
        :total="100"
        :pager-count="5"
        :background="true"
      >
      </el-pagination>
      <el-pagination
        :page-sizes="[10, 20, 30, 40]"
        :page-size="20"
        layout="total, prev, pager, next, sizes,jumper"
        :total="281"
        :pager-count="5"
        :background="true"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiPagination'
})
export default class extends Vue {
  public static title = {
    zh: '分页器',
    en: 'Pagination'
  }
}
</script>
<style  lang="scss" scoped>
</style>
