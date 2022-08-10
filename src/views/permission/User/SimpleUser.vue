<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-10 10:49:26
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-user">
    <!--表格工具栏-->
    <div class="table-tools">
      <div class="table-tools__right table-tools__conditions">
        <el-form ref="conditions" :model="conditions" inline @submit.native.prevent>
          <el-form-item prop="host">
            <el-select v-model="conditions.status" placeholder="请选择状态">
              <el-option v-for="item in statusOptions" :key="item" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="conditions.name" placeholder="请输入主机别名" />
            <el-form-item class="table-tools__conditions__buttons">
              <el-button type="primary" @click="search">查询</el-button>
              <el-button @click="resetConditions">重置</el-button>
            </el-form-item>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!--表格-->
    <el-table v-loading="loading" :data="tableData" fit border>
      <el-table-column prop="name" label="主机别名">
        <template slot-scope="{ row }">
          <router-link to="/">{{ row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="实例状态" :formatter="statusFormatter"> </el-table-column>
      <el-table-column prop="ip" label="IP地址" />
      <el-table-column prop="cpu" label="CPU利用率(%)" />
      <el-table-column prop="memory" label="内存利用率(%)" />
      <el-table-column prop="disk" label="磁盘利用率(%)" />
      <el-table-column prop="actions" label="操作" width="200" fixed="right" class-name="actions">
        <template slot-scope="{ row }">
          <el-button type="text" @click="setRoles(row)">设置角色</el-button>
          <el-button type="text" @click="resetPassword(row)">重置密码</el-button>
          <el-button type="text" @click="freeze(row)">冻结</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--弹窗-->
    <el-dialog
      :class="title === '确认要重置密码吗' ? 'warn-dialog' : title === '设置角色' ? 'medium-dialog' : ''"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <div v-if="title === '确认要重置密码吗'">
        <div class="warn-dialog--content">
          <slot name="icon">
            <svg-icon name="info-circle-fill" />
          </slot>
          <slot name="content">重置后会导致原密码不可用</slot>
        </div>
      </div>
      <div v-if="title === '设置角色'">
        <el-form :model="form" :rules="rules" label-width="90px" class="simple-form">
          <el-form-item label="用户名" prop="name">
            <el-input placeholder="请输用户名" />
          </el-form-item>
          <el-form-item label="角色" prop="disabledSelect">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="审计员"></el-checkbox>
              <el-checkbox label="账号开通,冻结"></el-checkbox>
              <el-checkbox label="超级管理员"></el-checkbox>
              <el-checkbox label="运营人员"></el-checkbox>
              <el-checkbox label="用户管理"></el-checkbox>
              <el-checkbox label="角色管理"></el-checkbox>
              <el-checkbox label="菜单管理"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
      </div>
      <div
        :class="
          title === '确认要重置密码吗'
            ? 'warn-dialog--btns'
            : title === '设置角色'
            ? 'medium-dialog--footer'
            : ''
        "
      >
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>

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
import { HEALTH } from '@/dics/simpleTable'

@Component({
  name: 'SimpleTable',
})
export default class extends Vue {
  private checkList = []
  //弹窗标题
  private title = ''

  //弹窗开关
  private visible = false

  //重置密码弹窗
  private setPassword = false

  //设置角色弹窗
  private setrole = false

  // 健康状态字典
  private HEALTH = HEALTH

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
      const params: SimpleUser.TableParams = {
        page: this.pager.page,
        limit: this.pager.limit,
        ...this.conditions,
      }
      const res = await getUsers(params)
      this.pager.total = res.data.total
      this.tableData = res.data.list
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
   * 重置搜索表单
   */
  private resetConditions() {
    this.conditionsForm.resetFields()
  }

  /**
   * 重置密码
   */
  private resetPassword() {
    this.visible = true
    this.title = '确认要重置密码吗'
  }

  /**
   * 关闭弹窗
   */
  private close() {
    this.visible = false
  }

  /**
   * 确认弹窗
   */
  private confirm() {
    this.visible = false
  }

  /**
   *设置角色
   */
  private setRoles() {
    this.visible = true
    this.title = '设置角色'
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
