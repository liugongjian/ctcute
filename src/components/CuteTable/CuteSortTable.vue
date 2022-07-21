<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:14:48
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-21 17:46:33
 * @Description: 
-->
<template>
  <div>
    <el-table ref="sortTable" :data="tableData" tooltip-effect="dark" border>
      <template v-for="(item, index) in tableColumns">
        <el-table-column
          :key="index + item.prop"
          :type="item.type"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :min-width="item.minWidth"
          :sortable="item.sortable"
          v-bind="item.props"
        >
          <template slot-scope="scope">
            <span v-if="item.type === 'name'" class="text-ellipsis name-primary" style="width: 100%">{{
              scope.row.name
            }}</span>
            <slot v-else-if="item.slot" :name="item.slot" :scope="scope" />
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="优先级">
        <div class="sort-table">
          <svg-icon name="sort" />
        </div>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Sortable from 'sortablejs'
@Component({
  name: 'CuteSortTable',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) tableData?: [] // 表格数据
  @Prop({ type: Array, default: [] }) tableColumns?: [] // 表头数据
  @Prop({ type: Number, default: 100 }) total?: 100 // 分页器的总计
  @Prop({ type: Number, default: 4 }) currentPage?: 4 // 分页器的当前页
  @Prop({ type: Number, default: 10 }) pageSize?: 20 // 分页器的每页数据
  sortable: any
  private mounted() {
    this.rowDrop()
  }

  private handleSizeChange(val) {
    console.log(`每页 ${val} 条`)
    this.$emit('refresh', { pageSize: val, pageNum: this.currentPage })
  }

  private handleCurrentChange(val) {
    console.log(`当前页: ${val}`)
    this.$emit('refresh', { pageSize: this.pageSize, pageNum: val })
  }
  // 行拖拽排序, .sort-table 可拖拽元素
  private rowDrop() {
    const table = this.$refs.sortTable as any
    const tbody = table.$el.querySelectorAll('tbody')

    this.sortable = Sortable.create(tbody[0], {
      handle: '.sort-table',
      onEnd: ({ newIndex, oldIndex }) => {
        this.$emit('handleSort', { newIndex, oldIndex })
      },
    })
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
