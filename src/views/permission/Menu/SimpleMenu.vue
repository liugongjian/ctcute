<!--
 * @Author: 朱凌浩
 * @Date: 2022-06-18 13:13:36
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-10 10:53:48
 * @Description: 基础表格
-->
<template>
  <el-card class="simple-menu">
    <!--表格工具栏-->
    <div class="table-tools">
      <el-button type="primary" @click="resetConditions">+ 添 加</el-button>
    </div>

    <!--弹窗-->
    <el-dialog
      class="medium-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form :model="form" :rules="rules" label-width="90px" class="simple-form">
        <el-form-item label="类型" prop="type">
          <el-radio-group v-model="labels">
            <el-radio-button label="菜单">菜单</el-radio-button>
            <el-radio-button label="权限">权限</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="名称" prop="remark">
          <el-input placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="上级菜单" prop="disabledSelect">
          <cute-select-tree />
        </el-form-item>

        <el-form-item label="排序" prop="disabledInput">
          <el-input placeholder="请输入" />
        </el-form-item>
        <el-form-item label="路由" prop="disabledInput">
          <el-input placeholder="请输入" />
        </el-form-item>
        <div v-if="labels === '权限'">
          <hr class="segmentation" />
          <el-form-item>
            <el-alert :closable="false" title="权限标识与别名说明" type="info" class="el-alert-primary">
              <p class="el-alert__description">
                标识，别名属同一个权限，主要用于前后分离,前后权限标识不一致,且前后两端皆需判定权限的项目。一般情况别名置空即可,如有多个别名可逗号分隔。
              </p>
            </el-alert>
          </el-form-item>

          <el-form-item label="标识" prop="disabledInput">
            <el-input placeholder="请输入" />
          </el-form-item>

          <el-form-item label="别名" prop="disabledInput">
            <el-input placeholder="请输入" />
          </el-form-item>
        </div>
      </el-form>

      <div class="medium-dialog--footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" :loading="submitting" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>

    <!--表格-->
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="date" label="日期" sortable width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" sortable width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="actions" label="操作" width="250" fixed="right" class-name="actions">
        <template slot-scope="{ row }">
          <el-button type="text" @click="gotoEdit(row)">编辑</el-button>
          <el-button type="text" @click="gotoDetail(row)">删除</el-button>
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
  //弹窗标题
  private title = '新建'
  private labels = '菜单'
  //弹窗开关
  private visible = false

  // 搜索信息
  private conditions: SimpleUser.Conditions = {
    status: '',
    name: '',
  }

  // 条件搜索表单
  @Ref('conditions')
  private conditionsForm: ElForm

  private tableData = [
    {
      id: 1,
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      id: 2,
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄',
    },
    {
      id: 3,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
      children: [
        {
          id: 31,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
      ],
    },
    {
      id: 4,
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄',
    },
  ]

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
  //   private tableData: SimpleUser.Host[] = null

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
      //   this.tableData = res.data.list
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
    this.visible = true
  }

  /**
   * 表单确定
   */
  private confirm() {
    this.visible = false
  }

  /**
   * 编辑
   */
  private gotoEdit() {
    console.log('编辑')
  }

  /**
   * 删除
   */
  private gotoDetail() {
    console.log('删除')
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
