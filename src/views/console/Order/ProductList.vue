<!--
 * @Author: 秦瑞斌
 * @Date: 2022-10-21 13:45:25
 * @LastEditors: 胡一苗
 * @LastEditTime: 2022-12-13 18:20:10
 * @Description: 云硬盘列表
-->
<template>
  <div class="product-list-1">
    <div class="list-header">
      <div class="list-title">
        <span class="list-title-name">
          <el-breadcrumb separator="">
            <el-breadcrumb-item>云硬盘列表</el-breadcrumb-item>
          </el-breadcrumb>
        </span>
        <cute-form-info title="标题测试" content="对标题测试的详细说明" />
      </div>
      <el-button type="danger">创建云硬盘</el-button>
    </div>
    <el-card class="list-table">
      <div class="table-header">
        <p class="table-header-title">
          您还可以创建200块云硬盘，剩余容量为 32768 GB <el-button type="text"> 了解配额详情</el-button>
        </p>
        <div class="table-btn">
          <el-button>续订</el-button>
          <div class="table-btn-search">
            <el-input v-model="searchValue" placeholder="请输入" prefix-icon="el-icon-search"> </el-input>
            <el-button class="button" plain>
              <svg-icon name="reload" />
            </el-button>
            <el-button class="button" plain>
              <svg-icon name="setting" />
            </el-button>
            <el-button class="button" plain>
              <svg-icon name="export" />
            </el-button>
          </div>
        </div>
      </div>
      <!--表格-->
      <div class="sub-table">
        <el-table
          v-loading="loading"
          :data="tableComponentData && tableComponentData.tableData"
          border
          height="614px"
        >
          <el-table-column prop="name" label="主机别名">
            <template slot-scope="scope">
              <el-button type="text" size="small" class="bt-operation">{{ scope.row.name }}</el-button>
              <!-- <div>
                <span class="text-ellipsis name-primary" :title="scope.row.name">{{ scope.row.name }}</span>
              </div> -->
            </template>
          </el-table-column>
          <el-table-column prop="status" label="实例状态"> </el-table-column>
          <el-table-column prop="ip" label="IP地址"> </el-table-column>
          <el-table-column prop="time" label="时间" sortable width="200px"> </el-table-column>
          <el-table-column prop="label" label="标签">
            <template slot-scope="scope">
              <el-tag type="info" size="small" style="margin-right: 8px">{{ scope.row.label[0] }}</el-tag>
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
                <span class="health-dot" :class="`health-dot--${scope.row.healthy}`" />{{ HEALTH[scope.row.healthy] }}
              </span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="210px">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                class="bt-operation"
                @click="handleClick(scope.$index, scope.row)"
              >
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
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import variables from '@cutedesign/theme/css/_variables.scss'

import { getTableComponent } from '@/api/tableComponent'
import { HEALTH } from '@/dics/productList'

@Component({
  name: 'ProductList',
})
export default class extends Vue {
  // 健康状态字典
  private HEALTH = HEALTH
  private colorVariables = variables
  // 小三角旋转开关
  private flag = false
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
    this.tableComponentData = res.data
    this.loading = false
  }
  private handleSizeChange(val) {
    console.log(`每页 ${val} 条`)
  }
  private handleCurrentChange(val) {
    console.log(`当前页: ${val}`)
  }

  /** * 下拉展开旋转小三角 */
  private openDropdown(e) {
    e ? (this.flag = true) : (this.flag = false)
  }
}
</script>
<style lang="scss" scoped>
.health-state {
  display: inline-flex;
  align-items: center;
}

.health-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
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
</style>
