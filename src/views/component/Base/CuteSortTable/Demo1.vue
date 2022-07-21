<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:08:23
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-21 15:32:38
 * @Description: 
-->
<template>
  <cute-sort-table
    ref="sortTable"
    :table-data="tableData"
    :table-columns="tableColumns"
    :total="total"
    :current-page.sync="page"
    :page-size.sync="limit"
    @refresh="refresh"
    @handle-sort="handleSort"
  >
    <template #label="{ scope }">
      <el-tag type="info" size="small" style="margin-right: 8px">{{ scope.row.label[0] }}</el-tag>
      <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
    </template>
    <template #description="{ scope }">
      <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
        <span class="text-ellipsis">{{ scope.row.description }}</span>
      </el-tooltip>
    </template>
    <template #healthy="{ scope }">
      <div>
        <span class="sub-spot" :class="`sub-spot--${scope.row.healthy}`"></span>
        <span>{{ HEALTH[scope.row.healthy] }}</span>
      </div>
    </template>
    <template #operation="{ scope }">
      <el-button type="text" size="small" class="bt-operation" @click="handleClick(scope.$index, scope.row)">
        挂载
      </el-button>
      <el-button type="text" size="small" class="bt-operation">卸载</el-button>
      <el-button type="text" size="small" class="bt-operation">扩容</el-button>
      <el-divider direction="vertical"></el-divider>
      <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown">
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
  </cute-sort-table>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { HEALTH } from '@/dics/simpleTable'
import data from '../../../../utils/mock'

@Component({
  name: 'Demo3',
})
export default class extends Vue {
  private tableData = data.tableData10
  private tableColumns = [
    { prop: 'name', label: '主机别名' },
    { prop: 'status', label: '实例状态' },
    { prop: 'time', label: '时间', width: 150, sortable: true },
    { prop: 'label', label: '标签', width: 150, slot: 'label' },
    { prop: 'description', label: '描述', width: 150, slot: 'description' },
    { prop: 'healthy', label: '健康状态', slot: 'healthy' },
    { prop: 'operation', label: '操作', width: 190, slot: 'operation' },
  ]
  private HEALTH = HEALTH
  private total = 100
  private page = 4
  private limit = 10

  private refresh() {
    console.log('获取列表数据', this.page, this.limit)
  }

  private handleSort(val) {
    const currRow = this.tableData.splice(val.oldIndex, 1)[0]
    this.tableData.splice(val.newIndex, 0, currRow)
    const newArray = this.tableData.slice(0)
    this.tableData = []
    this.$nextTick(function () {
      this.tableData = newArray
    })
  }
}
</script>
