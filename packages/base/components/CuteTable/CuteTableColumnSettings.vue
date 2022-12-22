<template>
  <div>
    <!-- 列设置选择表单 -->
    <!-- <el-popover
      placement="bottom-end"
      trigger="click"
      class="table-column-settings__popover"
      @show="handlePopoverShow"
      @hide="handlePopoverHide"
    > -->
      <!-- 固定的，用来全选 -->
      <!-- <el-checkbox v-model="allSelected" label="全选" @change="handleSelectedChange"></el-checkbox> -->
      <!-- 分割线 -->
      <!-- <el-divider class="table-column-settings__divider"></el-divider> -->
      <!-- 列出全部选项 -->
      <!-- <el-checkbox-group v-model="selectedColumns" class="table-column-settings__label-group">
        <el-checkbox v-for="v in tableColumns" :key="v.label" :label="v.label" :disabled="v.isDisabled">
        </el-checkbox>
      </el-checkbox-group> -->

      <!-- 列设置图标 -->
      <!-- <div slot="reference" :class="['head-title', { 'table-column-settings__svg--active': popoverShow }]">
        <svg-icon name="setting" width="14" height="14" class="table-column-settings__svg" />
        <span>列设置</span>
      </div>
    </el-popover> -->

    <!-- el-dropdown改写el-popover -->
    <el-dropdown 
      trigger="click"
      class="table-column-settings__dropdown"
      :hide-on-click="false"
      @visible-change="handleDropdownVisible"
    >
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-checkbox v-model="allSelected" label="全选" @change="handleSelectedChange">
          </el-checkbox>
        </el-dropdown-item>
        <!-- 分割线 -->
        <el-divider class="table-column-settings__divider"></el-divider>
        <el-checkbox-group v-model="selectedColumns" class="table-column-settings__label-group">
          <el-dropdown-item v-for="v in tableColumns">
            <el-checkbox  :key="v.label" :label="v.label" :disabled="v.isDisabled">
            </el-checkbox>
          </el-dropdown-item>
        </el-checkbox-group>
      </el-dropdown-menu>

      <div :class="['head-title', { 'table-column-settings__svg--active': dropdownShow }]">
        <svg-icon name="setting" width="14" height="14" :class="['table-column-settings__svg', { 'table-column-settings__svg--active': dropdownShow }]" />
        <span>列设置</span>
      </div>
    </el-dropdown>
    <!-- 表格 -->
    <el-table
      ref="tableRef"
      v-loading="tableHook.loading"
      :data="tableData? tableData: tableHook.tableData"
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
        :current-page="tableHook.pager.page"
        :page-size="tableHook.pager.limit"
        :total="tableHook.total"
        @size-change="tableHook.handleSizeChange.call(tableHook)"
        @current-change="tableHook.handleCurrentChange.call(tableHook)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from 'vue-property-decorator'
import { ElTable } from 'element-ui/types/table'
import TableHookClass from '@cutedesign/base/hook/TableHook'
import { camelCase } from 'yargs-parser'

@Component({
  name: 'CuteTableColumnSettings',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) tableData?: []
  @Prop({ type: Array, default: [] }) tableColumns?: []

  // 收集选中的选项中的 label 属性
  private selectedColumns = ['主机别名', '实例状态', '操作']

  // popover 状态变量
  private popoverShow = false

  // popover 状态变量
  private dropdownShow = false

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

  public handleDropdownVisible(val) {
    console.log('handleDropdownVisible', val)
    this.dropdownShow = val
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
    console.log('mounted', this.tableData)
    this.tableHook = new TableHookClass({}, this.innerGetTable, this.tableRef, false)
    this.tableHook.query()
    this.initSelectedColumns()
    this.isAllSelected()
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-menu {
  width: 190px;
  height: 341px;
  overflow: hidden;

  ::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
    color:black !important;
  }

  ::v-deep .el-dropdown-menu__item {
    &:hover {
      .el-checkbox__label {
        color: $color-master-1 !important;
      }
    }
  }
}

.table-column-settings {
  // &__popover {
  //   float: right;
  //   cursor: pointer;

  //   .head-title {
  //     margin-bottom: 13px;
  //   }
  // }
  &__dropdown {
    float: right;
    cursor: pointer;
    .head-title {
      margin-bottom: 13px;
      &:hover {
        color: $color-master-3;
        .table-column-settings__svg {
          color: $color-master-3;
        }
      }
    }
  }

  &__divider {
    margin: 10px 0 !important;
  }

  &__label-group {
    max-height: 300px;
    overflow: auto;

    label {
      margin-bottom: 10px;
      display: block;
    }
  }

  &__svg {
    margin-right: 6px;
  }

  &__svg--active {
    color: $color-master-3;
  }

  &-paginationContainer {
    height: 20px;
  }

  &__page {
    float: right;
  }
}
</style>
