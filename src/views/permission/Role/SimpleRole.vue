<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-16 17:01:54
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-menu">
    <!--表格工具栏-->
    <div class="table-tools">
      <el-button type="primary" @click="addRoles">+ 添 加</el-button>
    </div>

    <!--弹窗-->
    <el-dialog
      class="medium-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <!--新增-->
      <div v-if="title === '新建'">
        <el-form :model="form" :rules="rules" label-width="90px" class="simple-form">
          <el-form-item label="角色名" prop="remark">
            <el-input placeholder="请输入角色名" />
          </el-form-item>
          <el-form-item label="角色标识" prop="disabledSelect">
            <el-input placeholder="请输入角色标识" />
          </el-form-item>

          <el-form-item label="备注" prop="disabledInput">
            <el-input placeholder="请输入备注" />
          </el-form-item>
          <el-form-item label="角色权限" prop="disabledInput">
            <cute-select-tree multiple />
          </el-form-item>
        </el-form>
      </div>
      <!-- 设置用户 -->
      <div v-if="title === '设置用户'">
        <el-transfer v-model="value" :data="data"></el-transfer>
      </div>
      <div class="medium-dialog--footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" :loading="submitting" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>

    <!--表格-->
    <el-table v-loading="loading" :data="tableData" fit border>
      <el-table-column prop="id" label="id">
        <template slot-scope="{ row }">
          <router-link to="/">{{ row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="角色名" :formatter="statusFormatter"> </el-table-column>
      <el-table-column prop="logo" label="角色标识" />
      <el-table-column prop="note" label="备注" />
      <el-table-column prop="actions" label="操作" width="250" fixed="right" class-name="actions">
        <template slot-scope="{ row }">
          <el-button type="text" @click="gotoEdit(row)">编辑</el-button>
          <el-button type="text" @click="gotoCopy(row)">复制</el-button>
          <el-button type="text" @click="gotoDetail(row)">删除</el-button>
          <el-button type="text" @click="gotoSetUser(row)">设置用户</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页-->
    <el-pagination
      :current-page="pager.page"
      :page-size="pager.limit"
      :total="pager.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { ElForm } from 'element-ui/types/form'
import * as SimpleUser from '@/types/SimpleUser'
import { getUsers } from '@/api/simpleUser'

@Component({
  name: 'SimpleTable',
})
export default class extends Vue {
  private value = [1, 4]

  //弹窗标题
  private title = ''

  //弹窗标题
  private visible = false

  //新增弹窗内容
  private addFlag = false

  //设置用户啊弹窗内容
  private setFlag = false

  // 搜索信息
  private conditions: SimpleUser.Conditions = {
    status: '',
    name: '',
  }

  // 条件搜索表单
  @Ref('conditions')
  private conditionsForm: ElForm

  // 主机信息下拉框选项
  private statusOptions = [
    {
      value: '1',
      label: '全部',
    },
    {
      value: '2',
      label: '正常',
    },
    {
      value: '选项3',
      label: '冻结',
    },
  ]

  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
  }

  // 加载状态
  private loading = false

  // 表格数据
  private tableData: SimpleUser.Host[] = null

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getTable()
  }

  /**
   * 获取表格数据
   */
  private async getTable() {
    try {
      this.loading = true
      // 分页信息和搜索条件
      // const params: SimpleUser.TableParams = {
      //   page: this.pager.page,
      //   limit: this.pager.limit,
      //   ...this.conditions,
      // }
      // const res = await getUsers(params)
      // this.pager.total = res.data.total
      // this.tableData = res.data.list
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }

  /**
   * 切换分页数量
   * @param limit {number} 分页数
   */
  private handleSizeChange(limit: number) {
    this.pager.limit = limit
    this.getTable()
  }

  /**
   * 切换分页页码
   * @param page {number} 分页码
   */
  private handleCurrentChange(page: number) {
    this.pager.page = page
    this.getTable()
  }

  /**
   * 搜索
   */
  private search() {
    this.getTable()
  }

  /**
   * 新增角色
   */
  private addRoles() {
    this.addFlag = true
    this.visible = true
    this.title = '新建'
  }
  private gotoSetUser() {
    this.setFlag = true
    this.visible = true
    this.title = '设置用户'
  }

  /**
   *  关闭弹窗
   */

  private close() {
    this.visible = false
  }
}
</script>
<style lang="scss" scoped>
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
</style>
