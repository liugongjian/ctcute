<template>
  <div class="table-column-settings">
    <!-- 列设置选择表单 -->
    <el-popover
      placement="bottom-end"
      trigger="click"
      popper-class="table-column-settings__popover"
      @show="handlePopoverShow"
      @hide="handlePopoverHide"
    >
      <!-- 固定的，用来全选 -->
      <el-checkbox v-model="allSelected" label="全选" @change="handleSelectedChange" />
      <!-- 分割线 -->
      <el-divider class="table-column-settings__popover__divider" />
      <!-- 列出全部选项 -->
      <el-checkbox-group v-model="selectedColumns" class="table-column-settings__popover__label-group">
        <el-checkbox v-for="v in tableColumns" :key="v.label" :label="v.label" :disabled="v.isDisabled" />
      </el-checkbox-group>
      <!-- 列设置图标 -->
      <div slot="reference" class="table-column-settings__btns">
        <el-button
          type="text"
          plain
          :class="['table-column-settings__btn', { 'table-column-settings__btn--active': popoverShow }]"
        >
          <svg-icon name="setting" />
          列设置
        </el-button>
      </div>
    </el-popover>
    <!-- 表格 -->
    <el-table
      ref="tableRef"
      v-loading="tableHook.loading"
      :data="tableHook.tableData"
      fit
      border
      v-bind="$attrs"
    >
      <template v-for="(item, index) in selectedTableColumns">
        <el-table-column :key="index + item.prop" :prop="item.prop" :label="item.label" v-bind="item.props">
          <template slot-scope="scope">
            <slot v-if="item.slot" :name="item.slot" :scope="scope" />
            <span v-else>{{ scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 分页 -->
    <div class="table-column-settings-paginationContainer">
      <el-pagination
        class="table-column-settings__page"
        :current-page.sync="tableHook.pager.page"
        :page-size.sync="tableHook.pager.limit"
        :total="tableHook.total"
        @size-change="() => tableHook.handleSizeChange(tableHook.pager.limit)"
        @current-change="() => tableHook.handleCurrentChange(tableHook.pager.page)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import TableHookClass from '@cutedesign/ui/hook/TableHook'

@Component({
  name: 'CuteTableColumnSettings',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) tableData?: []
  @Prop({ type: Array, default: [] }) tableColumns?: []

  // 收集选中的选项中的 label 属性
  private selectedColumns = []

  // popover 状态变量
  private popoverShow = false

  // 全选状态
  private allSelected = false

  /**
   * 获取初始选中选项的 label 属性集
   */
  public initSelectedColumns() {
    const data = []
    this.tableColumns?.forEach((item: any) => {
      if (item.isSelected) data.push(item.label)
    })
    this.selectedColumns = data
  }

  /**
   * 判断是否已全选
   */
  public isAllSelected() {
    if (this.tableColumns.length === this.selectedColumns.length) {
      this.allSelected = true
    } else {
      this.allSelected = false
    }
  }

  public handlePopoverShow() {
    this.popoverShow = true
  }

  public handlePopoverHide() {
    this.popoverShow = false
  }

  /**
   * 根据全选状态变量，来判断下一步操作
   */
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

  /**
   * 监听 selectedColumns，判断是否需要修改全选按钮
   */
  @Watch('selectedColumns')
  onChangeValue() {
    this.isAllSelected()
  }

  public get selectedTableColumns() {
    const temp = []
    this.tableColumns.forEach((item: any) => {
      if (this.selectedColumns.some(v => v === item.label)) {
        temp.push(item)
      }
    })
    return temp
  }

  @Ref('tableRef')
  private tableRef: ElTable
  public tableHook = new TableHookClass()

  private async innerGetTable() {
    this.tableHook.setResult(this.tableData, 100)
  }

  /**
   * 监听 tableData 属性，因为内部的状态取决于 tableHook.tableData, 但是这个值不会自动跟着外部属性改变
   */
  @Watch('tableData')
  onChangeProp() {
    this.innerGetTable()
  }

  mounted() {
    this.tableHook = new TableHookClass({}, this.innerGetTable, this.tableRef, false)
    this.tableHook.query()
    this.initSelectedColumns()
    this.isAllSelected()
  }
}
</script>

<style lang="scss" scoped>
.table-column-settings {
  &__btns {
    display: flex;
    justify-content: right;
  }

  &__btn--active {
    color: $color-master-3 !important;
  }

  &-paginationContainer {
    height: 20px;
  }

  &__page {
    float: right;
  }
}
</style>
<style lang="scss">
// TODO 讨论：自定义全局样式
.table-column-settings__popover {
  min-width: 190px;
  padding: 0;

  &__divider {
    margin: 0;
  }

  &__label-group {
    max-height: 300px;
    overflow: auto;
  }

  label.el-checkbox {
    display: block;
    margin: 5px 0;
    height: 30px;
    line-height: 30px;

    .el-checkbox__inner {
      margin-left: 12px;
    }

    &:hover:not(.is-disabled) {
      background-color: $color-master-7;

      .el-checkbox__label {
        color: $color-master-1;
      }
    }
  }
}
</style>
