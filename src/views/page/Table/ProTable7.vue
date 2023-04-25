<!--
 * @Author: 秦瑞斌
 * @Date: 2022-10-21 13:41:25
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-04-23 14:23:53
 * @Description: 复杂表格7
-->
<template>
  <el-card class="pro-table-7">
    <h2 class="table7-title">实时计算管理控制台</h2>
    <p class="table7-explain">
      天翼云实时计算平台是基于开源基于Apache
      FinkK构建的一站全托管的实时计算平台，可在端到端之间实现高效实时数据分析能力，集成企业大规模作业，免运维、高弹性。
      极简化SQL作业，助力企业向实时化方向转化。
    </p>

    <el-table v-loading="loading" :data="tableData" fit>
      <el-table-column type="expand" width="32">
        <template slot-scope="scope">
          <el-table ref="multipleTable" tooltip-effect="dark" :data="scope.row.projectSpaces" class="expand-table">
            <el-table-column prop="projectSpace" label="名称">
              <template slot-scope="{ row }">
                <el-button :disabled="row.projectSpaceState === '1' ? false : true" type="text">
                  {{ row.projectSpace }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column prop="projectSpaceState" label="其他状态">
              <template slot-scope="{ row }">
                <cute-state :type="STATUS[row.projectSpaceState].colorType">
                  {{ STATUS[row.projectSpaceState].text }}
                </cute-state>
              </template>
            </el-table-column>
            <el-table-column prop="cu" label="已使用 / 已购买CU">
              <template slot-scope="{ row }">
                <span class="used">{{ row.cuUsedNum }}</span> / {{ row.cuNum }}
              </template>
            </el-table-column>
            <el-table-column label="创建时间" prop="createTime">
              <template slot-scope="{ row }">
                {{ formatDatetime(row.createTime) }}
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="{ row }">
                <el-button
                  :disabled="row.projectSpaceState === '1' ? false : true"
                  type="text"
                  @click="handleDistribute('资源分配')"
                >
                  资源分配
                </el-button>
                <el-button
                  :disabled="row.projectSpaceState === '1' ? false : true"
                  type="text"
                  @click="handleDistribute('删除')"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="工作空间/实例ID" prop="workspace">
        <template slot-scope="{ row }">
          <el-button :disabled="row.workspaceState === '1' ? false : true" type="text">
            {{ row.workspace }}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="工作空间状态" prop="workspaceState">
        <template slot-scope="{ row }">
          <cute-state :type="STATUS[row.workspaceState].colorType">
            {{ STATUS[row.workspaceState].text }}
          </cute-state>
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
      <el-table-column label="创建时间" prop="createTime">
        <template slot-scope="{ row }"> {{ formatDatetime(row.createTime) }}</template>
      </el-table-column>
    </el-table>

  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { formatDatetime } from '@/utils/date'
import * as SimpleTable from '@/types/ProTable7'
import { getTable } from '@/api/proTable7'
import { STATUS2, TYPE } from '@/dics/proTable7'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

@Component({
  name: 'ProTable7',
})
export default class extends Vue {
  // 健康状态字典
  private STATUS = STATUS2
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
.expand-table {
  margin: 0 48px; // 按业务调整
  width: calc(100% - 96px);
  background-color: transparent;

  &::before {
    height: 0;
  }

  ::v-deep {
    tr,
    .el-table__cell {
      background-color: transparent;
    }

    .el-table__row:last-child {
      .el-table__cell {
        border-bottom: none;
      }
    }
  }
}
</style>
