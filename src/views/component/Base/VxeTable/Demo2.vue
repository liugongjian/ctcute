<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 14:18:32
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-04-21 14:16:27
 * @Description: 高亮列
-->
<template>
  <!--高亮列-->
  <vxe-table :column-config="{ isCurrent: true, isHover: true }" border="inner" :data="tableData">
    <vxe-column field="name" title="主机别名">
      <template #default="{ row }">
        <router-link to="/">{{ row.name }}</router-link>
      </template>
    </vxe-column>
    <vxe-column field="status" title="实例状态">
      <template #default="{ row }">
        {{ statusFormatter(row) }}
      </template>
    </vxe-column>
    <vxe-column field="ip" title="IP地址"></vxe-column>
    <!-- <vxe-column field="time" title="时间" sortable></vxe-column> -->
    <vxe-column field="tags" title="标签">
      <template #default="{ row }">
        <el-tag v-for="item in row.tags" :key="item" type="info">{{ item }}</el-tag>
      </template>
    </vxe-column>
    <vxe-column field="desc" title="描述" show-overflow></vxe-column>
    <vxe-column field="health" title="健康状态">
      <template #default="{ row }">
        <span class="health-dot" :class="`health-dot--${row.health}`" />{{ HEALTH[row.health] }}
      </template>
    </vxe-column>
    <vxe-column field="actions" title="操作" width="190px" class-name="actions">
      <template #default="{}">
        <el-button type="text" size="small" class="bt-operation"> 挂载 </el-button>
        <el-button type="text" size="small" class="bt-operation">卸载</el-button>
        <el-button type="text" size="small" class="bt-operation">扩容</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-dropdown trigger="click" :append-to-body="false">
          <span class="el-dropdown-link">
            更多<i
              class="el-icon-arrow-down el-icon--right"
              :class="flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
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
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getTableData } from './mock'
import { STATUS, HEALTH } from './dict'
import { TableType } from './types'

@Component({
  name: 'Demo2',
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
.el-tag {
  margin-right: 8px;
}
.el-dropdown-link {
  cursor: pointer;
  color: $color-master-1;
}
</style>
