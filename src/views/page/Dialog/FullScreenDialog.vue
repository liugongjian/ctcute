<!--
 * @Author: 吴博聪
 * @Date: 2022-07-08 16:29:27
 * @LastEditors: 吴博聪
 * @LastEditTime: 2022-07-18 13:45:42
 * @Description: 全屏弹窗
-->
<template>
  <el-card>
    <h2>全屏弹窗</h2>
    <div>
      <p>弹窗铺满全屏，上下左右间距是24px</p>
      <el-button type="primary" @click="handleClick">全屏弹窗</el-button>
    </div>
    <el-dialog
      class="fullscreen-dialog"
      :title="title"
      :visible="visible"
      :close-on-click-modal="false"
      @close="close"
    >
      <div class="fullscreen-dialog--content">
        <slot name="content">
          <el-form>
            <el-form-item label="配置状态">
              <el-checkbox-group v-model="status">
                <el-checkbox-button v-for="status in statusOptions" :key="status.value" :label="status.value">
                  {{ status.name }}
                </el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
          <el-table v-loading="loading" :data="tableData" fit border>
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="name" label="主机" />
            <el-table-column prop="configFileName" label="配置文件" />
            <el-table-column prop="createTime" label="创建同步时间" />
            <el-table-column prop="modifyTime" label="最新同步时间" />
            <el-table-column prop="status" label="最新同步状态">
              <svg-icon name="check-circle" color="#8AC926" /> 同步成功
            </el-table-column>
          </el-table>
          <!--分页-->
          <el-pagination
            style="float: right"
            :current-page="pager.page"
            :page-size="pager.limit"
            :total="pager.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </slot>
      </div>
      <div class="fullscreen-dialog--footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import * as FullscreenDialog from '@/types/FullscreenDialog'
import { getTable } from '@/api/fullscreenDialog'

@Component({
  name: 'FullScreenDialog',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  private title = '全屏弹窗示例'
  private visible = false

  private status: number[] = []
  // 分页信息
  private pager = {
    page: 1,
    limit: 10,
    total: 20,
  }
  // 加载状态
  private loading = false
  // 表格数据
  private tableData: FullscreenDialog.Host[] = null

  private get statusOptions() {
    return [
      { name: '同步成功', value: 0 },
      { name: '同步失败', value: 1 },
      { name: '同步中', value: 2 },
      { name: '不一致', value: 3 },
    ]
  }

  @Watch('visible')
  onVisibleChange(val) {
    if (val) this.getTable()
  }

  /**
   * 获取表格数据
   */
  private async getTable() {
    try {
      this.loading = true
      // 分页信息和搜索条件
      const params: FullscreenDialog.TableParams = {
        page: this.pager.page,
        limit: this.pager.limit,
        status: this.status.join(','),
      }
      const res = await getTable(params)
      this.pager.total = res.data.total
      this.tableData = res.data.list
    } catch (e) {
      this.$message.error(e)
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

  private close() {
    this.visible = false
  }
  private confirm() {
    this.visible = false
  }

  private handleClick() {
    this.visible = true
  }
}
</script>
