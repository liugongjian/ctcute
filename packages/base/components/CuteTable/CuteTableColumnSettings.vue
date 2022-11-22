<template>
  <div>
    <!-- 列设置选择表单 -->
    <el-popover placement="bottom-end" trigger="click" class="table-column-settings__popover" @show="handlePopoverShow"
      @hide="handlePopoverHide">
      <!-- 固定的，用来全选 -->
      <el-checkbox v-model="allSelected" label="全选" @change="handleSelectedChange"></el-checkbox>
      <!-- 分割线 -->
      <el-divider class="table-column-settings__divider"></el-divider>
      <!-- 列出全部选项 -->
      <el-checkbox-group v-model="selectedColumns" class="table-column-settings__label-group">
        <el-checkbox v-for="(v, i) in tableColumns" :key="v.label" :label="v.label" :disabled="v.isDisabled">
        </el-checkbox>
      </el-checkbox-group>

      <!-- 列设置图标 -->
      <div slot="reference" :class="['head-title', { 'table-column-settings__svg--active': popoverShow }]">
        <svg-icon name="setting" width="14" height="14" style="margin-right: 6px" />
        <span>列设置</span>
      </div>
    </el-popover>

    <!-- 表格 -->
    <el-table ref="tableRef" v-loading="tableHook.loading" :data="tableHook.tableData" fit border v-bind="$attrs">
      <template v-for="(item, index) in tableColumns" v-if="selectedColumns.some(v => v === item.label)">
        <el-table-column :key="index + item.prop" :prop="item.prop" :label="item.label" v-bind="item.props">
          <template slot-scope="scope">
            <slot v-if="item.slot" :name="item.slot" :scope="scope" />
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 分页 -->
    <div style="height: 20px">
      <el-pagination class="table-column-settings__page" :current-page="tableHook.pager.page"
        :page-size="tableHook.pager.limit" :total="tableHook.total" @size-change="tableHook.handleSizeChange"
        @current-change="tableHook.handleCurrentChange" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import TableHookClass from '@cutedesign/base/hook/TableHook'

@Component({
  name: 'CuteTableColumnSettings',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) tableData?: []
  @Prop({ type: Array, default: [] }) tableColumns?: []

  @Ref('tableRef')
  private tableRef: ElTable
  public tableHook = new TableHookClass()

  private async innerGetTable() {
    this.tableHook.setResult(this.tableData, 100)
  }

  // 监听 tableData 属性，因为内部的状态取决于 tableHook.tableData, 但是这个值不会自动跟着外部属性改变
  @Watch('tableData')
  onChangeProp() {
    this.innerGetTable() // 判断是否已全选
  }

  mounted() {
    this.tableHook = new TableHookClass({}, this.innerGetTable, this.tableRef, false)
    this.tableHook.query()
    this.initSelectedColumns()
    this.isAllSelected() // 判断是否已全选
  }

  // popover 状态变量
  private popoverShow = false

  public handlePopoverShow() {
    this.popoverShow = true
  }

  public handlePopoverHide() {
    this.popoverShow = false
  }

  // 全选状态变量
  private allSelected = false

  // 判断是否已全选
  public isAllSelected() {
    if (this.tableColumns.length === this.selectedColumns.length) {
      this.allSelected = true
    } else {
      this.allSelected = false
    }
  }

  private selectedColumns = []

  private initSelectedColumns() {
    const data = []
    this.tableColumns?.forEach((item: any) => {
      if (item.isSelected) data.push(item.label)
    })
    this.selectedColumns = data
  }

  // 监听innerSelectedOptions，判断是否需要修改全选按钮
  @Watch('selectedColumns')
  onChangeValue() {
    this.isAllSelected() // 判断是否已全选
  }

  // 全选按钮 全选事件
  // 根据全选状态变量，来判断将要做什么
  public handleSelectedChange() {
    const data = []
    if (!this.allSelected) {
      this.tableColumns.forEach((v: any) => {
        if (v.isDisabled) {
          data.push(v.label)
        }
      })
    } else {
      this.tableColumns.forEach((v: any) => {
        data.push(v.label)
      })
    }
    this.selectedColumns = data
  }
}
</script>

<style lang="scss" scoped>
.table-column-settings {
  &__popover {
    float: right;
    cursor: pointer;

    .head-title {
      margin-bottom: 13px;
    }
  }

  &__divider {
    margin: 10px 0 !important;
  }

  &__label-group {
    // 设置高度，超出滚动
    max-height: 300px;
    overflow: auto;

    label {
      margin-bottom: 10px;
      display: block;
    }
  }

  &__svg--active {
    color: $color-master-3;
  }

  &__page {
    float: right;
  }
}
</style>
