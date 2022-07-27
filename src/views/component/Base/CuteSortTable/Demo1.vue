<!--
 * @Author: huanglulu
 * @Date: 2022-07-21 10:08:23
 * @LastEditors: huanglulu
 * @LastEditTime: 2022-07-27 09:08:03
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
  >
    <template #name="{ scope }">
      <span class="text-ellipsis name-primary" style="width: 100%">{{ scope.row.name }}</span>
    </template>
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
    <template #priority="{}">
      <div class="sort-table">
        <svg-icon name="sort" class="sort-icon" />
      </div>
    </template>
  </cute-sort-table>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { HEALTH } from '@/dics/simpleTable'
import data from '@/utils/mock'
import Sortable from 'sortablejs'

@Component({
  name: 'Demo3',
})
export default class extends Vue {
  private tableData = data.tableData10
  private tableColumns = [
    { prop: 'name', label: '主机别名', slot: 'name' },
    { prop: 'status', label: '实例状态' },
    { prop: 'time', label: '时间', width: '150px', sortable: true },
    { prop: 'label', label: '标签', width: 150, slot: 'label' },
    { prop: 'description', label: '描述', width: '150px', slot: 'description' },
    { prop: 'healthy', label: '健康状态', slot: 'healthy' },
    { prop: 'operation', label: '操作', width: 190, slot: 'operation' },
    { prop: 'priority', label: '优先级', width: 150, slot: 'priority' },
  ]
  private HEALTH = HEALTH
  private total = 100
  private page = 4
  private limit = 10
  private flag = false
  sortable: any

  private mounted() {
    this.rowDrop()
  }

  private openDropdown(e) {
    e ? (this.flag = true) : (this.flag = false)
  }

  private refresh(val) {
    console.log('获取列表数据', val, this.page, this.limit)
    this.page = val.pageNum
    this.limit = val.pageSize
  }

  // 行拖拽排序, .sort-table 可拖拽元素
  private rowDrop() {
    const table = this.$refs.sortTable as any
    const tbody = table.$el.querySelectorAll('tbody')

    this.sortable = Sortable.create(tbody[0], {
      handle: '.sort-table',
      onEnd: ({ newIndex, oldIndex }) => {
        const currRow = this.tableData.splice(oldIndex, 1)[0]
        this.tableData.splice(newIndex, 0, currRow)
        const newArray = this.tableData.slice(0)
        this.tableData = []
        this.$nextTick(function () {
          this.tableData = newArray
        })
      },
    })
  }
}
</script>
<style lang="scss" scoped>
.el-table {
  // width: 65%;
  margin: 24px 0;

  .text-ellipsis {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    width: 100%;
  }

  .name-primary {
    color: $color-master-1;
  }

  .cell {
    span {
      font-size: 12px;
    }

    .el-button--text:last-child:before {
      content: '|';
      color: $border-color-primary;
      margin-right: 10px;
    }
  }

  .el-dropdown-link {
    cursor: pointer;
    color: $color-master-1;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-table__fixed {
    height: 1000px;
  }
}

.sub-table:not(:last-child) {
  border-bottom: 1px solid $color-grey-7;
  padding-bottom: 24px;
}

.bt-operation {
  color: $color-master-1;
}

.sub-spot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 10px;

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

.sub-small-spot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 10px;

  &--6 {
    background: $color-status-success;
  }

  &--7 {
    background: $color-status-danger;
  }

  &--8 {
    background: $color-status-warning;
  }

  &--9 {
    background: $disabled-color;
  }
}

.top-fill {
  transform: rotate(180deg);
}
.sort-icon {
  cursor: pointer;
  &:hover {
    color: $color-master-1;
  }
}
</style>
