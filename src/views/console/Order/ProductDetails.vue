<!--
 * @Author: 秦瑞斌
 * @Date: 2022-11-14 16:17:28
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-12-21 14:41:15
 * @Description:
-->
<template>
  <div class="real-order">
    <div class="order-header">
      <svg-icon
        class="left-icon"
        name="left"
        :color="colorVariables.colorWhite"
        :width="15"
        :height="15"
        @click="openPreview"
      />
      <p class="order-compute">存储库</p>
    </div>
    <div class="order-detail">
      <el-card>
        <cute-titled-block title="S1详情">
          <template #content>
            <div class="detail-message">
              <div class="message-img">
                <img src="./images/console.svg" alt="" />
              </div>
              <div class="message-info">
                <el-descriptions :column="2" :colon="false" :label-style="labelStyle">
                  <el-descriptions-item label="名称"
                    ><cute-edit-input v-model="form.name"
                  /></el-descriptions-item>
                  <el-descriptions-item label="状态">{{ form.status }}</el-descriptions-item>
                  <el-descriptions-item label="磁盘ID">{{ form.id }}</el-descriptions-item>
                  <el-descriptions-item label="磁盘容量">{{ form.capacity }}</el-descriptions-item>
                  <el-descriptions-item label="磁盘类型">{{ form.type }}</el-descriptions-item>
                  <el-descriptions-item label="创建时间">{{ form.createTime }}</el-descriptions-item>
                  <el-descriptions-item label="磁盘属性">{{ form.attribute }}</el-descriptions-item>
                  <el-descriptions-item label="到期时间">{{ form.endTime }}</el-descriptions-item>
                  <el-descriptions-item label="共享盘">{{ form.shareDisk }}</el-descriptions-item>
                  <el-descriptions-item label="企业项目">{{ form.enterProject }}</el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
          </template>
        </cute-titled-block>
      </el-card>
      <el-card>
        <el-tabs v-model="activeName">
          <el-tab-pane name="a" label="备份策略">
            <div class="tab-header">
              <el-button>绑定备份策略</el-button>
              <div class="tab-search">
                <el-input v-model="searchValue" placeholder="请输入" prefix-icon="el-icon-search"> </el-input>
                <el-button class="button" plain>
                  <svg-icon name="reload" />
                </el-button>
              </div>
            </div>
            <!--表格-->
            <el-table v-if="activeName === 'a'" v-loading="loading" :data="tableData" fit border>
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
              <el-table-column prop="health" label="健康状态">
                <template slot-scope="{ row }">
                  <span class="health-dot" :class="`health-dot--${row.health}`" />{{ HEALTH[row.health] }}
                </template>
              </el-table-column>
              <el-table-column prop="actions" label="操作" width="150" fixed="right" class-name="actions">
                <template slot-scope="{ row }">
                  <el-button type="text" @click="gotoDetail(row)">详情</el-button>
                  <el-button type="text" @click="gotoDashboard(row)">监控指标</el-button>
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
          </el-tab-pane>
          <el-tab-pane name="b" label="备份副本"> </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import variables from '@cutedesign/ui/style/default/index.scss'
import { CuteSpecialRadio } from '@cutedesign/ui'
import { CuteTitledBlock } from '@cutedesign/ui'
import { STATUS, HEALTH } from '@/dics/productDetails'
@Component({
  name: 'ProductDetails',
  components: { CuteSpecialRadio, CuteTitledBlock },
})
export default class extends Vue {
  private colorVariables = {}

  private searchValue = ''
  // 加载状态
  private loading = false

  // 表格数据
  private tableData = null
  // 健康状态字典
  private HEALTH = HEALTH

  private STATUS = STATUS
  private activeName = 'a'
  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
  }

  private form = {
    name: 'ecm-20be-tz-volume',
    status: '已挂载',
    id: 'b05356c5-f62a-4169-a4f5-81f1242b627c',
    capacity: '40GB',
    type: '普通IO',
    createTime: '2022-02-23 14:25:56',
    attribute: '数据盘',
    endTime: '--',
    shareDisk: '不共享',
    enterProject: 'default',
  }
  private labelStyle = {
    width: '100px',
  }

  /**
   * 查看详情
   * @param data {SimpleTable.Host} 表格行对象
   */
  private gotoDetail(data) {
    this.$message.success(`前往${data.name}详情页面`)
  }
  /**
   * 查看监控指标
   * @param data {SimpleTable.Host} 表格行对象
   */
  private gotoDashboard(data) {
    this.$message.info(`前往${data.name}监控指标页面`)
  }
  /**
   * 使用字典格式化实例状态
   * @param data {SimpleTable.Host} 表格行对象
   */
  private statusFormatter(data) {
    return STATUS[data.status]
  }
  /**
   * 切换分页数量
   * @param limit {number} 分页数
   */
  private handleSizeChange(limit: number) {
    this.pager.limit = limit
    // this.getTable()
  }
  /**
   * 切换分页页码
   * @param page {number} 分页码
   */
  private handleCurrentChange(page: number) {
    this.pager.page = page
    // this.getTable()
  }

  private openPreview() {
    console.log('跳转')
  }
}
</script>
