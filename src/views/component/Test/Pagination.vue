/*
* @Author: 胡一苗
* @Date: 2023-03-23 13:46:05
* @LastEditors: 胡一苗
* @LastEditTime: 2023-03-30 09:03:58
* @Description: desc
*/
<template>
  <div>
    <h1>Pagination</h1>
    <PaginationDemo />
    <div class="sub-sample">
      <h4>默认尺寸</h4>
      <el-pagination
        :total="total"
        :current-page="currentPage1"
        layout="total, sizes, prev, pager, next, jumper"
      />
      <el-pagination
        :total="total"
        :current-page="currentPage1"
        layout="total, sizes, prev, pager, next, jumper"
        background
      />
    </div>
    <div class="sub-sample">
      <h4>较小尺寸</h4>
      <el-pagination
        :total="total"
        :current-page="currentPage1"
        layout="total, sizes, prev, pager, next, jumper"
        small
      />
      <el-pagination
        :total="total"
        :current-page="currentPage1"
        layout="total, sizes, prev, pager, next, jumper"
        small
        background
      />
    </div>
    <div class="sub-sample">
      <h4>禁用</h4>
      <el-pagination
        :total="total"
        :current-page="currentPage1"
        layout="total, sizes, prev, pager, next, jumper"
        disabled
      />
      <el-pagination
        :total="total"
        :current-page="currentPage1"
        layout="total, sizes, prev, pager, next, jumper"
        disabled
        background
      />
      <el-pagination
        :total="total"
        :current-page="currentPage1"
        layout="total, sizes, prev, pager, next, jumper"
        disabled
        small
      />
      <el-pagination
        :total="total"
        :current-page="currentPage1"
        layout="total, sizes, prev, pager, next, jumper"
        disabled
        small
        background
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PaginationDemo from '@/views/ui/components/Pagination.vue'

@Component({
  name: 'Pagination',
  components: {
    PaginationDemo,
  },
})
export default class extends Vue {
  private total = 153
  private currentPage1 = 1
}
</script>
<style lang="scss" scoped>
.sub-sample ::v-deep .el-pagination {
  margin-bottom: 16px;
}
</style>
