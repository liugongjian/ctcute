<template>
  <cute-table-column-settings :data="tableData" :pager="pager" :all-options="allOptions"
    :selected-options="selectedOptions" :disabled-options="disabledOptions" :class-name="myName"
    @handleSizeChangeEmit="handleSizeChange" @handleCurrentChangeEmit="handleCurrentChange">
    <template>
      <el-button size="mini">Edit</el-button>
      <el-button size="mini" type="danger">Delete</el-button>
    </template>
  </cute-table-column-settings>
</template>

<script lang="ts">
// 由于未知问题：直接引入不显示组件，但是放入到频率高的组件列表中就可使用
// import { CuteTableColumnSettings } from '@cutedesign/base'
import { Vue, Component } from 'vue-property-decorator'
import * as CuteTableColumnSettingsTypes from '@/types/CuteTableColumnSettings'
import { getTable } from '@/api/cuteTableColumnSettings'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  // 全部的字段选项
  private allOptions = [
    {
      label: '主机别名',
      prop: 'name',
    },
    {
      label: '实例状态',
      prop: 'status',
    },
    {
      label: 'IP地址',
      prop: 'ip',
    },
    {
      label: 'CPU利用率(%)',
      prop: 'cpu',
    },
    {
      label: '内存利用率(%)',
      prop: 'memory',
    },
    {
      label: '磁盘利用率(%)',
      prop: 'disk',
    },
    {
      label: '健康状态',
      prop: 'health',
    },
  ]
  // 默认选择字段
  private selectedOptions = ['name', 'status', 'ip', 'cpu', 'health']
  // 禁止修改字段
  private disabledOptions = ['name', 'status']
  // 上传自己的命名空间，定制化设置
  private myName = 'myClassName'

  // 表格数据
  private tableData: CuteTableColumnSettingsTypes.Host[] = null
  // 分页信息
  private pager = {
    page: 1,
    limit: 10,
    total: 20,
  }

  // 获取内部传出的属性，根据该属性重新获取数据进行传入渲染
  private handleCurrentChange(page) {
    this.pager.page = page
    this.getTable()
  }
  private handleSizeChange(limit) {
    this.pager.limit = limit
    this.getTable()
  }

  /**
   * 获取表格数据
   */
  private async getTable() {
    try {
      // 分页信息和搜索条件
      const params: CuteTableColumnSettingsTypes.TableParams = {
        page: this.pager.page,
        limit: this.pager.limit,
      }
      const res = await getTable(params)
      this.pager.total = res.data.total
      this.tableData = res.data.list
    } catch (e) {
      console.error(e)
    }
  }

  mounted() {
    this.getTable() // 获得表格数据
  }
}
</script>
