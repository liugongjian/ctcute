<!--
 * @Author: 秦瑞斌
 * @Date: 2022-11-11 13:41:25
 * @LastEditors: 钟有承
 * @LastEditTime: 2023-01-11 16:38:51
 * @Description: 复杂表格6
-->
<template>
  <el-card class="pro-table-6">
    <!--表格工具栏-->
    <div class="table-tools">
      <el-button type="primary">+ 添 加</el-button>
    </div>
    <!--表格-->
    <el-table
      ref="tableRef"
      v-loading="loading"
      :data="tableData"
      fit
      border
      row-key="_id"
      default-expand-all
      :tree-props="{ children: 'children' }"
    >
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="menuType" label="其他状态" width="180">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.menuType === 0" class="table6-tag" type="info">目录</el-tag>
          <el-tag v-if="scope.row.menuType === 1" class="table6-tag" type="primary">菜单</el-tag>
          <el-tag v-if="scope.row.menuType === 2" class="table6-tag" type="success">权限</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="orderNum" label="排序"> </el-table-column>
      <el-table-column prop="url" label="路由"> </el-table-column>
      <el-table-column prop="perms" label="标识"> </el-table-column>
      <el-table-column prop="alias" label="别名" :show-overflow-tooltip="true"> </el-table-column>
      <el-table-column prop="actions" label="操作" width="100" class-name="actions">
        <template slot-scope="{}">
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { getTable } from '@/api/proTable6'
import { ElTable } from 'element-ui/types/table'

@Component({
  name: 'ProTable6',
})
export default class extends Vue {
  @Ref('tableRef')
  private tableRef: ElTable

  private dataOptions = []

  private tableData = []
  private tableDataTemp = []
  private loading = false

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getTables()
  }

  /**
   * 获取表格数据
   */
  private async getTables() {
    try {
      this.loading = true
      const res = await getTable()
      if ((res as any).code === 200) {
        const res_menus = res.data.result.map(item => {
          item.label = item.name
          item.id = item._id
          return item
        })
        this.tableDataTemp = res_menus
        if (res_menus && res_menus.length > 0) {
          this.tableData = this.o(res_menus, '')
          this.dataOptions = [
            {
              id: '999999',
              label: '一级菜单',
              children: this.tableData,
            },
          ]
        } else {
          this.tableData = []
          this.dataOptions = [
            {
              id: '9999999',
              label: '一级菜单',
            },
          ]
        }
      }
      this.loading = false
    } catch (e) {
      console.error(e)
      this.loading = false
    } finally {
    }
  }
  private o(data, _id) {
    const menu = data.filter(o => o.parentId === _id)
    menu.forEach(o => {
      const children = this.o(data, o._id)
      if (children && children.length > 0) {
        o.children = children
      }
    })
    return menu
  }
}
</script>
<style lang="scss" scoped>
.table6-tag {
  width: 40px;
  padding: 0;
  text-align: center;
}
</style>
