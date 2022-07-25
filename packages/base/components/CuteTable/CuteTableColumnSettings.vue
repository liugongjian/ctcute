<template>
  <div :class="tableColumnSettingsClass">
    <!-- 列设置选择表单 -->
    <el-popover placement="bottom-end" trigger="click" class="table-column-settings__popover" @show="handlePopoverShow"
      @hide="handlePopoverHide">
      <!-- 固定的，用来反选 -->
      <el-checkbox v-model="allSelected" label="全选" @change="handleSelectedChange"></el-checkbox>
      <!-- 分割线 -->
      <el-divider class="table-column-settings__divider"></el-divider>
      <!-- 列出全部选项 -->
      <el-checkbox-group v-model="innerSelectedOptions" class="table-column-settings__label-group">
        <el-checkbox v-for="(v, i) in allOptionsWithDisable" :key="v.label" :label="v.label" :disabled="v.disabled">
        </el-checkbox>
      </el-checkbox-group>

      <!-- 列设置图标 -->
      <div slot="reference" :class="['head-title', { 'table-column-settings__svg--active': popoverShow }]">
        <svg-icon name="setting" width="14" height="14" style="margin-right: 6px" />
        <span>列设置</span>
      </div>
    </el-popover>

    <!-- 表格 -->
    <el-table :data="data" fit border>
      <el-table-column v-for="(v, i) in selectedOptionsWithProp" :key="v.prop" :prop="v.prop" :label="v.label">
        <template slot-scope="{ row }">
          <span v-if="v.prop === 'health'">
            <span class="health-dot" :class="`health-dot--${row.health}`" />{{ HEALTH[row.health] }}
          </span>

          <span v-else-if="v.prop === 'status'">{{ STATUS[row[v.prop]] }}</span>
          <span v-else>{{ row[v.prop] }}</span>
        </template>
      </el-table-column>

      <el-table-column v-if="$slots.default" prop="actions" label="操作">
        <slot></slot>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div style="height: 20px">
      <el-pagination :current-page="pager.page" :page-size="pager.limit" :total="pager.total"
        class="table-column-settings__page" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit } from 'vue-property-decorator'

@Component({
  name: 'CuteTableColumnSettings',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) data?: []
  @Prop({ type: Array, default: [] }) allOptions?: []
  @Prop({ type: Array, default: [] }) selectedOptions?: []
  @Prop({ type: Array, default: [] }) disabledOptions?: []
  @Prop({ type: String, default: '' }) className?: string
  @Prop({ type: Object, default: null }) pager?: null

  // 合并外部传入命名空间
  private get tableColumnSettingsClass() {
    if (this.className) {
      return 'table-column-settings ' + this.className
    } else {
      return 'table-column-settings'
    }
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
    if (this.innerSelectedOptions.length === this.allOptions.length) {
      this.allSelected = true
    } else {
      this.allSelected = false
    }
  }

  private innerSelectedOptions = []
  private initInnerSelectedOptions() {
    this.allOptions.forEach((v: any) => {
      if (this.selectedOptions.some(item => item === v.prop)) {
        this.innerSelectedOptions.push(v.label)
      }
    })
  }

  @Emit('handleSizeChangeEmit')
  private handleSizeChange(limit: number) {
    return limit
  }
  @Emit('handleCurrentChangeEmit')
  private handleCurrentChange(page: number) {
    return page
  }

  private get allOptionsWithDisable() {
    const data = []
    this.allOptions.forEach((v: any) => {
      if (this.disabledOptions.some(item => item === v.prop)) {
        data.push({ ...v, disabled: true })
      } else {
        data.push({ ...v, disabled: false })
      }
    })

    return data
  }

  private get selectedOptionsWithProp() {
    const data = []
    this.allOptions.forEach((v: any) => {
      if (this.innerSelectedOptions.some(item => item === v.label)) {
        data.push(v)
      }
    })
    return data
  }

  // 监听innerSelectedOptions，判断是否需要修改全选按钮
  @Watch('innerSelectedOptions')
  onChangeValue() {
    this.isAllSelected() // 判断是否已全选
  }

  // 全选按钮 全选事件
  // 根据全选状态变量，来判断将要做什么
  public handleSelectedChange() {
    const data = []
    if (!this.allSelected) {
      this.allOptions.forEach((v: any) => {
        if (this.disabledOptions.some(item => item === v.prop)) {
          data.push(v.label)
        }
      })
    } else {
      this.allOptions.forEach((v: any) => {
        data.push(v.label)
      })
    }
    this.innerSelectedOptions = data
  }

  // 健康状态字典
  private HEALTH = {
    1: '健康',
    2: '警告',
    3: '危险',
    4: '进行中',
    5: '失联',
    6: '成功',
    7: '失败',
    8: '停止',
    9: '暂停',
  }
  // 实例状态字典
  private STATUS = {
    1: '待分配',
    2: '已部署',
  }

  mounted() {
    this.initInnerSelectedOptions() // 复制 prop，用来内部操作
    this.isAllSelected() // 判断是否已全选
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

  .health-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 100%;

    &--1 {
      background: $color-status-success;
    }

    &--2 {
      background: $color-status-warning;
    }

    &--3 {
      background: $color-status-danger;
    }

    &--4 {
      background: $color-status-info;
    }

    &--5 {
      background: $disabled-color;
    }
  }

  &__page {
    float: right;
  }
}
</style>
