<!--
 * @Author: fanzhengle
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 范郑乐
 * @LastEditTime: 2022-12-13 11:18:32
 * @Description: 树形表格
-->

<template>
  <div>
    <!--树形表格-->
    <vxe-toolbar>
      <template #buttons>
        <el-button @click="$refs.xTable.setAllTreeExpand(true)">展开所有</el-button>
        <el-button @click="$refs.xTable.clearTreeExpand()">关闭所有</el-button>
      </template>
    </vxe-toolbar>
    <vxe-table
      ref="xTable"
      border="inner"
      row-id="_id"
      show-overflow
      :data="tableData3"
      :tree-config="{ transform: true, expandAll: true, rowField: '_id', parentField: 'parentId' }"
    >
      <vxe-column field="name" width="180" title="名称" tree-node></vxe-column>
      <vxe-column field="type" title="其他状态">
        <template #default="{ row }">
          <el-tag v-if="row.menuType === 0" type="info">目录</el-tag>
          <el-tag v-if="row.menuType === 1" type="primary">菜单</el-tag>
          <el-tag v-if="row.menuType === 2" type="success">权限</el-tag>
        </template>
      </vxe-column>
      <vxe-column field="orderNum" title="排序"></vxe-column>
      <vxe-column field="url" title="路由"></vxe-column>
      <vxe-column field="perms" title="标识"></vxe-column>
      <vxe-column field="alias" title="别名"></vxe-column>
      <vxe-column field="actions" title="操作" width="100" fixed="right" class-name="actions">
        <template #default="{}">
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getTableData3 } from './mock'

@Component({
  name: 'Demo7',
})
export default class extends Vue {
  // 表格数据
  private tableData3 = getTableData3()
}
</script>
<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: $color-master;
}
</style>
