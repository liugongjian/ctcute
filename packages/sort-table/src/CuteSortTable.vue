<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:14:48
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-28 13:45:51
 * @Description:
-->
<template>
  <div>
    <el-table ref="tableRef" v-loading="loading" :data="tableData" fit border>
      <template v-for="(item, index) in tableColumns">
        <el-table-column
          :key="index + item.prop"
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
            <slot v-if="item.slot" :name="item.slot" :scope="scope" />
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
      <el-table-column label="优先级">
        <div class="sort-table">
          <svg-icon name="menu" class="sort-icon" />
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import Sortable from 'sortablejs'

@Component({
  name: 'CuteSortTable',
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) loading?: false // 表头数据
  @Prop({ type: Array, default: [] }) tableData?: [] // 表格数据
  @Prop({ type: Array, default: [] }) tableColumns?: [] // 表头数据

  @Ref('tableRef')
  private tableRef: ElTable

  sortable: any

  /**
   * 页面Mounted
   */
  private mounted() {
    this.rowDrop()
  }

  // 行拖拽排序, .sort-table 可拖拽元素
  private rowDrop() {
    const tbody = this.tableRef.$el.querySelectorAll('tbody')

    this.sortable = Sortable.create(tbody[0], {
      handle: '.sort-table',
      onEnd: ({ newIndex, oldIndex }) => {
        this.$emit('sort', { newIndex, oldIndex })
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

.sort-icon {
  cursor: pointer;
  color: #777;

  &:hover {
    color: $color-master-1;
  }
}
</style>
