<!--
 * @Author: 秦瑞斌
 * @Date: 2022-10-21 13:45:25
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-16 22:55:20
 * @Description: 云硬盘列表
-->
<template>
  <el-card class="simple-table">
    <el-alert type="info" show-icon :closable="false">
      <template slot="title">
        您还可以创建200块云硬盘，剩余容量为 32768 GB <el-button type="text"> 了解配额详情</el-button>
      </template>
    </el-alert>
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__left">
        <el-button type="danger">创建云硬盘</el-button>
      </div>
      <div class="table-tools__right table-tools__conditions">
        <el-form ref="conditions" :model="conditions" inline @submit.native.prevent>
          <el-form-item prop="name">
            <cute-remind-input v-model="searchValue" placeholder="请输入主机别名" title="主机别名" />
          </el-form-item>
          <el-form-item class="table-tools__conditions__buttons">
            <el-button class="button" plain>
              <svg-icon name="reload" />
            </el-button>
            <el-button class="button" plain>
              <svg-icon name="setting" />
            </el-button>
            <el-button class="button" plain>
              <svg-icon name="export" />
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <el-table v-loading="loading" :data="tableComponentData && tableComponentData.tableData" border>
      <el-table-column prop="name" label="主机别名">
        <template slot-scope="scope">
          <el-button type="text" size="small" class="bt-operation">{{ scope.row.name }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="实例状态"> </el-table-column>
      <el-table-column prop="ip" label="IP地址" min-width="100px"> </el-table-column>
      <el-table-column prop="time" label="时间" sortable min-width="160px"> </el-table-column>
      <el-table-column prop="label" label="标签" min-width="160px">
        <template slot-scope="scope">
          <el-tag type="info" size="small">{{ scope.row.label[0] }}</el-tag>
          <el-tag type="info" size="small">{{ scope.row.label[1] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="描述" width="350px">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" :content="scope.row.description" placement="top">
            <span class="text-ellipsis">{{ scope.row.description }}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column prop="healthy" label="健康状态">
        <template slot-scope="scope">
          <span class="health-state">
            <span class="health-dot" :class="`health-dot--${scope.row.healthy}`" />
            {{ HEALTH[scope.row.healthy] }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="210px" class-name="actions">
        <template slot-scope="{ row, $index }">
          <el-button type="text" size="small" class="bt-operation" @click="handleClick($index, row)">
            挂载
          </el-button>
          <el-button type="text" size="small" class="bt-operation">卸载</el-button>
          <el-button type="text" size="small" class="bt-operation">扩容</el-button>
          <el-dropdown trigger="click" :append-to-body="false" @visible-change="openDropdown($index)">
            <el-button type="text" size="small" class="bt-operation">
              更多
              <i
                class="el-icon-arrow-down el-icon--right"
                :class="row.flag ? 'top-fill' : 'el-icon-arrow-down el-icon--right'"
              />
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退订</el-dropdown-item>
              <el-dropdown-item>创建云硬盘备份</el-dropdown-item>
              <el-dropdown-item>创建</el-dropdown-item>
              <el-dropdown-item disabled>Disabled</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      :current-page="currentPage4"
      :total="153"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

import { getTableComponent } from '@/api/tableComponent'
import { HEALTH } from '@/dics/productList'

@Component({
  name: 'ProductList',
})
export default class extends Vue {
  // 健康状态字典
  private HEALTH = HEALTH
  private colorVariables = variables
  private currentPage4 = 4
  private searchValue = ''

  private tableComponentData = null

  // 加载状态
  private loading = false

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getTableComponentData()
  }

  /**
   * 获取表格数据
   */
  private async getTableComponentData() {
    // 接口
    this.loading = true
    const res = await getTableComponent()
    // 小三角旋转开关
    const tableData = res.data.tableData.map(item => {
      ;(item as any).flag = false
      return item
    })
    this.tableComponentData = { ...res.data.tableData, tableData: tableData }
    this.loading = false
  }
  private handleSizeChange(val) {
    console.log(`每页 ${val} 条`)
  }
  private handleCurrentChange(val) {
    console.log(`当前页: ${val}`)
  }

  /** * 下拉展开旋转小三角 */
  private openDropdown(index) {
    this.tableComponentData.tableData[index].flag = !this.tableComponentData.tableData[index].flag
  }
}
</script>
<style lang="scss" scoped>
.is-alert-tip {
  margin-bottom: $margin-4x;
}

.el-tag + .el-tag {
  margin-left: $margin-2x;
}

.health-state {
  display: inline-flex;
  align-items: center;
}

.health-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: $margin-2x;
  border-radius: 100%;

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
    background: $color-info;
  }

  &--5 {
    background: $disabled-color;
  }
}
</style>
