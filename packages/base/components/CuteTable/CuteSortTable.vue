<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:14:48
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-25 10:04:26
 * @Description: 
-->
<template>
  <div>
    <el-table ref="sortTable" :data="tableData" tooltip-effect="dark" border>
      <el-table-column v-if="isShowSelection" width="55" type="selection" />
      <template v-for="(item, index) in tableColumns">
        <el-table-column
          :key="index + item.prop"
          :type="item.type && item.type !== 'selection' ? item.type : ''"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :min-width="item.minWidth"
          :sortable="item.sortable"
          :show-overflow-tooltip="item.ellipsis"
          :fixed="item.fixed"
          :align="item.align"
          v-bind="item.props"
        >
          <template slot-scope="scope">
            <span v-if="item.type === 'index'">{{ scope.$index + 1 }}</span>
            <slot v-else-if="item.slot" :name="item.slot" :scope="scope" />
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="isShowPagination"
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
@Component({
  name: 'CuteSortTable',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) tableData?: [] // 表格数据
  @Prop({ type: Array, default: [] }) tableColumns?: [] // 表头数据
  @Prop({ type: Boolean, default: true }) isShowPagination?: true
  @Prop({ type: Boolean, default: true }) isShowSelection?: true
  @Prop({ type: Number, default: 100 }) total?: 100 // 分页器的总计
  @Prop({ type: Number, default: 4 }) currentPage?: 4 // 分页器的当前页
  @Prop({ type: Number, default: 10 }) pageSize?: 20 // 分页器的每页数据

  private handleSizeChange(val) {
    console.log(`每页 ${val} 条`)
    this.$emit('refresh', { pageSize: val, pageNum: this.currentPage })
  }

  private handleCurrentChange(val) {
    console.log(`当前页: ${val}`)
    this.$emit('refresh', { pageSize: this.pageSize, pageNum: val })
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
