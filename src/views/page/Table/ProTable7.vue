<!--
 * @Author: 秦瑞斌
 * @Date: 2022-10-21 13:41:25
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-05-18 18:25:08
 * @Description: 复杂表格7
-->
<template>
  <el-card class="pro-table-7" :body-style="{ minHeight: 'calc(100vh - 126px)' }">
    <!--标题-->
    <div class="table7-title">实时计算管理控制台</div>
    <!--描述-->
    <div class="table7-explain">
      天翼云实时计算平台是基于开源基于Apache
      FinkK构建的一站全托管的实时计算平台，可在端到端之间实现高效实时数据分析能力，集成企业大规模作业，免运维、高弹性。
      极简化SQL作业，助力企业向实时化方向转化。
    </div>
    <!--表格-->
    <el-table v-loading="loading" :data="tableData" fit>
      <el-table-column type="expand" width="32">
        <template slot-scope="scope">
          <el-table
            ref="multipleTable"
            tooltip-effect="dark"
            :data="scope.row.projectSpaces"
            class="expand-table"
          >
            <el-table-column prop="projectSpace" label="名称">
              <template slot-scope="{ row }">
                <el-button type="text">
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
          <el-button type="text">
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
import { Component, Vue } from 'vue-property-decorator'
import { formatDatetime } from '@/utils/date'
import * as ProTable7 from '@/types/ProTable7'
import { getTable } from '@/api/proTable7'
import { STATUS2, TYPE } from '@/dics/proTable7'

@Component({
  name: 'ProTable7',
})
export default class extends Vue {
  // 状态字典
  private STATUS = STATUS2
  // 类型字典
  private TYPE = TYPE
  // 格式化时间
  private formatDatetime = formatDatetime

  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
  }

  // 加载状态
  private loading = false

  // 表格数据
  private tableData: ProTable7.TableDataItem[] = null

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
      // 分页信息
      const params: ProTable7.TableParams = {
        page: this.pager.page,
        limit: this.pager.limit,
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
