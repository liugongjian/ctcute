/*
 * @Author: 何晋升
 * @Date: 2022年7月26日 16:03:00
 * @LastEditors: 何晋升
 * @LastEditTime: 2022年7月26日 16:03:00
 * @Description: 表格分页工具，包含定义分页
 */
import * as Request from '@/types/Request'
import * as Response from '@/types/Response'
import { ElTable } from 'element-ui/types/table'

export default class tableHook {
  public tableData = []

  // 分页参数
  public pager: Request.Pager = {
    page: 1,
    limit: 20,
  }

  // 表格总数
  public total: Number = 0

  // 表格loading效果
  public loading: Boolean = false

  // 分页数量选项
  public pageSizes: Number[] = [20, 30, 40, 50, 100]

  // 分页布局
  public paginationLayout: String = 'total, prev, pager, next, sizes, jumper'

  // 查询条件表单
  private queryForm

  // 查询事件
  private queryEvent

  // 表格
  private tableRef

  // 是否滚动到底部加载数据
  private isLazy

  // 防抖，仅 isLazy = true 时生效
  private queryTimes = null

  constructor(
    form: Object = {},
    queryImpl: Function = undefined,
    ref: InstanceType<typeof ElTable> | undefined = undefined,
    lazy: Boolean = false
  ) {
    this.queryForm = form
    this.queryEvent = queryImpl
    this.tableRef = ref?.$el.querySelector('.el-table__body-wrapper')
    this.isLazy = lazy
    this.bindLazyLoadEvent()
  }

  // 绑定表格滚动底部加载事件
  bindLazyLoadEvent() {
    if (this.isLazy && this.tableRef) {
      this.tableRef.addEventListener('scroll', this.handleScroll)
      // TODO 添加loading提示语
      // this.tableRef.append('<span>...加载中，请稍等</span>')
    }
  }

  removeLazyLoadEvent() {
    if (this.isLazy && this.tableRef) {
      this.tableRef.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll(e) {
    // 获取dom滚动距离 添加1px的偏移量
    const scrollTop = e.target.scrollTop + 1
    // 获取可视区的高度
    const offsetHeight = this.tableRef.offsetHeight
    // 获取滚动条总高度
    const scrollHeight = this.tableRef.scrollHeight

    if (scrollTop + offsetHeight >= scrollHeight) {
      // 把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
      if (this.queryTimes) {
        clearTimeout(this.queryTimes)
      }
      this.queryTimes = setTimeout(() => {
        this.pager.page++
        this.query()
      }, 500)
    }
  }

  async query() {
    this.setLoading()
    try {
      const param = Object.assign(this.queryForm, this.pager)
      await this.queryEvent(param)
    } catch (e) {
      console.error('表格查询方法错误', e)
    }
    this.resetLoading()
  }

  /* 设定列表数据 */
  setResult(list, total) {
    if (this.isLazy) {
      this.tableData = this.tableData.concat(list)
    } else {
      this.tableData = list
    }
    this.total = total
  }

  /**
   * 切换分页数量
   * @param limit {number} 分页数
   */
  handleSizeChange(limit) {
    this.pager.limit = limit
    this.query()
  }

  /**
   * 切换分页页码
   * @param page {number} 分页码
   */
  handleCurrentChange(current) {
    this.pager.page = current
    this.query()
  }

  setLoading() {
    if (!this.loading) {
      this.loading = true
    }
  }

  resetLoading() {
    this.loading = false
  }
}
