<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:14:48
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2023-04-11 14:08:56
 * @Description:
-->
<template>
  <div>
    <el-table-draggable handle=".handle">
      <el-table ref="table" v-loading="loading" :data="tableData" v-bind="$attrs" v-on="$listeners">
        <el-table-column label="" width="48">
          <div class="handle">
            <svg-icon name="sortTable" class="sort-icon" />
          </div>
        </el-table-column>
        <template v-for="(item, index) in tableColumns">
          <el-table-column
            v-if="!item.props || item.props.type !== 'selection'"
            :key="index + item.prop"
            :prop="item.prop"
            :label="item.label"
            v-bind="item.props"
          >
            <template slot-scope="scope">
              <slot v-if="item.slot" :name="item.slot" :scope="scope" />
              <span v-else>{{ scope.row[item.prop] }}</span>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </el-table-draggable>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import ElTableDraggable from 'element-ui-el-table-draggable'

@Component({
  name: 'CuteSortTable',
  components: {
    ElTableDraggable,
  },
})
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) loading?: false // 表头数据
  @Prop({ type: Array, default: [] }) tableData?: [] // 表格数据
  @Prop({ type: Array, default: [] }) tableColumns?: [] // 表头数据

  @Ref('table')
  private table: ElTable
}
</script>
