<!--
 * @Author: 朱玉豆
 * @Date: 2023-04-22 08:35:39
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-06 18:47:57
 * @Description: 复杂列设置
-->
<template>
  <div>
    <vxe-toolbar ref="xToolbar1" custom>
      <template #buttons> </template>
    </vxe-toolbar>
    <!--复杂列设置-->
    <vxe-table
      id="toolbar_demo5"
      ref="xTable1"
      border="inner"
      resizable
      :custom-config="{ storage: true, checkMethod: checkColumnMethod }"
      :data="tableData"
      @resizable-change="resizableChangeEvent"
    >
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="主机别名">
        <template #default="{ row }">
          <router-link to="/">{{ row.name }}</router-link>
        </template>
      </vxe-column>
      <vxe-column field="ip" title="IP地址"></vxe-column>
      <vxe-column field="time" title="时间" sortable></vxe-column>
      <vxe-column
        field="health"
        title="健康状态"
        :filters="[
          { label: '健康', value: 1 },
          { label: '警告', value: 2 },
          { label: '危险', value: 3 },
          { label: '进行中', value: 4 },
          { label: '失联', value: 5 },
        ]"
        :filter-method="filterNameMethod"
      >
        <template #default="{ row }">
          <span class="health-dot" :class="`health-dot--${row.health}`" />{{ HEALTH[row.health] }}
        </template>
      </vxe-column>
      <vxe-column field="actions" title="操作" width="190px" class-name="actions">
        <template #default="{ row, rowIndex }">
          <el-button type="text" size="small" class="bt-operation"> 挂载 </el-button>
          <el-button type="text" size="small" class="bt-operation">卸载</el-button>
          <el-button type="text" size="small" class="bt-operation">扩容</el-button>
          <el-divider direction="vertical"></el-divider>
          <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown(rowIndex)">
            <span class="el-dropdown-link">
              更多<i
                class="el-icon-arrow-down el-icon--right"
                :class="row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退订</el-dropdown-item>
              <el-dropdown-item>创建云硬盘备份</el-dropdown-item>
              <el-dropdown-item>创建</el-dropdown-item>
              <el-dropdown-item disabled>Disabled</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getTableData } from './mock'
import { STATUS, HEALTH } from './dict'
import { TableType } from './types'

@Component({
  name: 'Demo8',
})
export default class extends Vue {
  // 健康状态字典
  private HEALTH = HEALTH
  // 小三角旋转开关
  private flag = false
  // 表格数据
  private tableData: Array<TableType> = getTableData()

  /**
   * 使用字典格式化实例状态
   * @param data {TableType} 表格行对象
   */
  private statusFormatter(data: TableType) {
    return STATUS[data.status]
  }

  created() {
    this.$nextTick(() => {
      // 手动将表格和工具栏进行关联
      ;(this.$refs.xTable1 as any).connect(this.$refs.xToolbar1)
    })
    this.tableData.map((item: any) => {
      item.flag = false
      return item
    })
  }
  checkColumnMethod({ column }) {
    if (column.property === 'name') {
      return false
    }
    return true
  }
  resizableChangeEvent() {
    const columns = (this.$refs.xTable1 as any).getColumns()
    const customData = columns.map(column => {
      return {
        width: column.renderWidth,
      }
    })
    console.log(customData)
  }

  filterNameMethod({ value, row }) {
    return value === row.health
  }
  openDropdown(rowIndex) {
    this.$set(this.tableData, rowIndex, {
      ...this.tableData[rowIndex],
      flag: !this.tableData[rowIndex].flag,
    })
  }
}
</script>
<style lang="scss" scoped>
.health-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 10px;
  border-radius: 100%;
  position: relative;
  top: -1px;

  &--1 {
    background: $color-success;
  }

  &--2 {
    background: $color-warning;
  }

  &--3 {
    background: $color-danger;
  }

  &--4 {
    background: $color-master;
  }

  &--5 {
    background: $disabled-color;
  }
}

.el-tag {
  margin-right: 8px;
}

.el-dropdown-link {
  cursor: pointer;
  color: $color-master;
}
</style>
