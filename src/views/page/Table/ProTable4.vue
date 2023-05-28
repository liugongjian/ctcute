<!--
 * @Author: 胡一苗
 * @Date: 2022-07-12 16:20:34
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-23 10:23:05
 * @Description: 复杂表格4
-->
<template>
  <el-card class="pro-table-4">
    <div class="table4-left">
      <div class="tree-wrap">
        <div class="tree-title">这是一个标题</div>
        <el-tree
          :data="treeData"
          node-key="key"
          :default-expanded-keys="['2']"
          :current-node-key="'2'"
          highlight-current
          :indent="22"
        >
          <span slot-scope="{ node, data }" class="custom-tree-node">
            <span class="custom-tree-node__icon">
              <svg-icon v-if="!node.isLeaf" name="folder" width="16" height="16" />
              <svg-icon v-if="!node.isLeaf" name="folder-open" width="16" height="16" />
            </span>
            <span :class="node.isLeaf ? 'icon-leaf-label' : ''">{{ node.label }}</span>
            <div class="custom-tree-node__operations">
              <el-button v-if="!node.isLeaf" type="text" text-type="weak" @click.stop>
                <svg-icon name="plus-square" width="16" height="16" />
              </el-button>
              <div class="operation-dropdown">
                <el-button
                  v-if="data.key !== 1"
                  class="dropdown-link"
                  type="text"
                  text-type="weak"
                  @click.stop
                >
                  <svg-icon name="ellipsis-square" width="16" height="16" />
                </el-button>
                <div class="dropdown-menu">
                  <div v-if="!node.isLeaf" class="dropdown-menu__item" tabindex="-1" @click.stop>重命名</div>
                  <div v-if="!node.isLeaf" class="dropdown-menu__item" tabindex="-1" @click.stop>删除</div>
                  <div v-if="node.isLeaf" class="dropdown-menu__item" tabindex="-1" @click.stop>移动</div>
                </div>
              </div>
            </div>
          </span>
        </el-tree>
      </div>
    </div>
    <div class="table4-right">
      <div class="table-wrap">
        <!--表格工具栏-->
        <div class="table-tools">
          <div class="table-tools__left">
            <el-button type="primary">+ 新增按钮</el-button>
            <el-button>次按钮</el-button>
          </div>
          <div class="table-tools__right table-tools__conditions">
            <el-form ref="conditions" :model="conditions" inline @submit.native.prevent>
              <el-form-item prop="host">
                <cute-remind-select
                  v-model="conditions.host"
                  :options="hostOptions"
                  title="主机"
                  placeholder="请选择主机"
                />
              </el-form-item>
              <el-form-item prop="name">
                <cute-remind-input v-model="conditions.name" placeholder="请输入IP地址" title="IP地址" />
              </el-form-item>
              <el-form-item class="table-tools__conditions__buttons">
                <el-button type="primary" plain @click="search">查 询</el-button>
                <el-button @click="resetConditions">重 置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!--表格-->
        <cute-scroller v-model="tableHeight" :offset="32">
          <el-table v-loading="loading" :data="tableData" fit :height="tableHeight">
            <el-table-column prop="name" label="主机别名">
              <template slot-scope="{ row }">
                <router-link to="/">{{ row.name }}</router-link>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="实例状态" :formatter="statusFormatter"></el-table-column>
            <el-table-column prop="ip" label="IP地址" />
            <el-table-column prop="cpu" label="CPU利用率(%)" />
            <el-table-column prop="memory" label="内存利用率(%)" />
            <el-table-column prop="health" label="健康状态">
              <template slot-scope="scope">
                <cute-state :type="HEALTH[scope.row.health].colorType">
                  {{ HEALTH[scope.row.health].text }}
                </cute-state>
              </template>
            </el-table-column>
          </el-table>
        </cute-scroller>
        <!--分页-->
        <el-pagination
          :current-page="pager.page"
          :page-size="pager.limit"
          :total="pager.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as ProTable4 from '@/types/ProTable4'
import { getTable, getHosts, getTrees } from '@/api/proTable4'
import { STATUS, HEALTH2 } from '@/dics/proTable4'

@Component({
  name: 'ProTable4',
})
export default class extends Vue {
  // 表格的高度，将通过CuteScroller组件动态返回
  private tableHeight = 'none'

  // 健康状态字典
  private HEALTH = HEALTH2

  // 搜索信息
  private conditions: ProTable4.Conditions = {
    host: '',
    name: '',
  }

  // 主机信息下拉框选项
  private hostOptions = []

  // 树形数据
  private treeData = []

  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
  }

  // 加载状态
  private loading = false

  // 表格数据
  private tableData: ProTable4.Host[] = null

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getHosts()
    this.getTable()
    this.getTrees()
  }

  /**
   * 获取主机列表
   */
  private async getHosts() {
    try {
      const res = await getHosts()
      const options = res.data.map(item => {
        return {
          value: item,
          label: item,
        }
      })
      this.hostOptions = options
    } catch (e) {
      this.$message.error(e)
    }
  }

  /** * 获取树形列表 */
  private async getTrees() {
    try {
      const res = await getTrees()
      res.data[0].children[0].key = '2'
      this.treeData = res.data
      console.log(res.data)
    } catch (e) {
      this.$message.error(e)
    }
  }

  /**
   * 获取表格数据
   */
  private async getTable() {
    try {
      this.loading = true
      // 分页信息和搜索条件
      const params: ProTable4.TableParams = {
        page: this.pager.page,
        limit: this.pager.limit,
        ...this.conditions,
      }
      const res = await getTable(params)
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
    const conditionsForm: any = this.$refs.conditions
    conditionsForm.resetFields()
  }

  /**
   * 查看详情
   * @param data {ProTable4.Host} 表格行对象
   */
  private gotoDetail(data: ProTable4.Host) {
    this.$message.success(`前往${data.name}详情页面`)
  }

  /**
   * 查看监控指标
   * @param data {ProTable4.Host} 表格行对象
   */
  private gotoDashboard(data: ProTable4.Host) {
    this.$message.info(`前往${data.name}监控指标页面`)
  }

  /**
   * 使用字典格式化实例状态
   * @param data {ProTable4.Host} 表格行对象
   */
  private statusFormatter(data: ProTable4.Host) {
    return STATUS[data.status]
  }
}
</script>

<style lang="scss" scoped>
$tree-node-popover-margin: 0.3em;
$tree-button-tooltip-content-padding: 0.8em 1.2em;
.tree-node-popover {
  box-shadow: $shadow-1;
  min-width: 0;
  padding: 0;
  margin: $tree-node-popover-margin 0 0 0;

  .tooltip-content {
    display: flex;
    flex-direction: column;
    background: $color-bg-1;

    .el-button {
      margin: 0;
      padding: $tree-button-tooltip-content-padding;
      color: $text-color-light;

      &:hover {
        background: $color-neutral-1;
      }
    }
  }
}
.icon-leaf-label {
  padding-left: 34px;
}
</style>
