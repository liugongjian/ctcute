<!--
 * @Author: 秦瑞斌
 * @Date: 2022-10-21 13:41:25
 * @LastEditors: 钟有承
 * @LastEditTime: 2023-01-11 16:38:51
 * @Description: 复杂表格7
-->
<template>
  <el-card class="pro-table-7" style="height: 100%">
    <h2 class="table7-title">实时计算管理控制台</h2>
    <p class="table7-explain">
      天翼云实时计算平台是基于开源基于Apache
      FinkK构建的一站全托管的实时计算平台，可在端到端之间实现高效实时数据分析能力，集成企业大规模作业，免运维、高弹性。
      极简化SQL作业，助力企业向实时化方向转化。
    </p>
    <el-table v-loading="loading" :data="tableData" fit>
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-table ref="multipleTable" tooltip-effect="dark" :data="scope.row.projectSpaces">
            <el-table-column width="20"></el-table-column>
            <el-table-column prop="projectSpace" label="名称">
              <template slot-scope="{ row }">
                <el-button :disabled="row.projectSpaceState === '1' ? false : true" type="text">{{
                  row.projectSpace
                }}</el-button>
              </template>
            </el-table-column>
            <el-table-column prop="projectSpaceState" label="其他状态">
              <template slot-scope="{ row }">
                <span class="health-state">
                  <span class="health-dot" :class="`health-dot--${row.projectSpaceState}`" />{{
                    STATUS[row.projectSpaceState]
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="cu" label="已使用 / 已购买CU">
              <template slot-scope="{ row }">
                <span class="used">{{ row.cuUsedNum }}</span> / {{ row.cuNum }}
              </template>
            </el-table-column>
            <el-table-column label="创建时间" prop="createTime" width="150">
              <template slot-scope="{ row }">
                {{ formatDatetime(row.createTime, 'yyyy-MM-dd HH:mm') }}
              </template>
            </el-table-column>
            <el-table-column label="操作" width="130">
              <template slot-scope="{ row }">
                <el-button
                  :disabled="row.projectSpaceState === '1' ? false : true"
                  type="text"
                  @click="handleDistribute('资源分配')"
                  >资源分配</el-button
                >
                <el-button
                  :disabled="row.projectSpaceState === '1' ? false : true"
                  type="text"
                  @click="handleDistribute('删除')"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="工作空间/实例ID" prop="workspace">
        <template slot-scope="{ row }">
          <el-button :disabled="row.workspaceState === '1' ? false : true" type="text">{{
            row.workspace
          }}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="工作空间状态" prop="workspaceState">
        <template slot-scope="{ row }">
          <span class="health-state">
            <span class="health-dot" :class="`health-dot--${row.workspaceState}`" />{{
              STATUS[row.workspaceState]
            }}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="已使用 / 已购买CU" prop="CU">
        <template slot-scope="{ row }">
          <span class="used">{{ row.cuUsedNum }}</span> / {{ row.cuNum }}
        </template>
      </el-table-column>
      <el-table-column label="付费类型" prop="payType">
        <template slot-scope="{ row }">
          <el-tag type="warning">{{ TYPE[row.payType] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" prop="createTime" width="140">
        <template slot-scope="{ row }"> {{ formatDatetime(row.createTime, 'yyyy-MM-dd HH:mm') }} </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { formatDatetime } from '@/utils/date'
import * as SimpleTable from '@/types/ProTable7'
import { getTable } from '@/api/proTable7'
import { STATUS, TYPE } from '@/dics/proTable7'
import variables from '@cutedesign/theme/css/_variables.scss'

@Component({
  name: 'ProTable7',
})
export default class extends Vue {
  // 健康状态字典
  private STATUS = STATUS
  private TYPE = TYPE
  private formatDatetime = formatDatetime
  private colorVariables = variables

  // 加载状态
  private loading = false

  // 表格数据
  private tableData: SimpleTable.TableData = null

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
      const res = await getTable()
      this.tableData = res.data
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }
  private handleDistribute(row) {
    this.$message.success(`前往${row}`)
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
    background: $color-status-info-1;
  }

  &--3 {
    background: $color-status-danger-1;
  }
}
</style>