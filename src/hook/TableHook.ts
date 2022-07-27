/*
 * @Author: 何晋升
 * @Date: 2022年7月26日 16:03:00
 * @LastEditors: 何晋升
 * @LastEditTime: 2022年7月26日 16:03:00
 * @Description: 表格分页工具，包含定义分页
 */
import * as Request from '@/types/Request'
import { ElTable } from 'element-ui/types/table'

export default class TableHook {
  public tableData = []

  // 分页参数
  public pager: Request.Pager = {
    page: 1,
    limit: 20,
  }

  // 表格总数
  public total: number = 0

  // 表格loading效果
  public loading: boolean = false

  // 分页数量选项
  public pageSizes: number[] = [20, 30, 40, 50, 100]

  // 分页布局
  public paginationLayout: string = 'total, prev, pager, next, sizes, jumper'

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

  /**
   *
   * @param form 表格查询用的请求参数
   * @param queryImpl 表格查询的实现方法
   * @param ref  表格元素
   * @param lazy 是否开启滚动到底部加载 需要定义ref
   */
  constructor(
    form: object = {},
    queryImpl: Function = undefined,
    ref: InstanceType<typeof ElTable> | undefined = undefined,
    lazy: boolean = false
  ) {
    this.queryForm = form
    this.queryEvent = queryImpl
    this.tableRef = ref?.$el.querySelector('.el-table__body-wrapper')
    this.isLazy = lazy
    this.bindLazyLoadEvent()
  }

  // 绑定表格滚动底部加载事件
  private bindLazyLoadEvent() {
    if (this.isLazy && this.tableRef) {
      this.tableRef.addEventListener('scroll', this.handleScroll)
      // TODO 添加loading提示语
      // this.tableRef.append('<span>...加载中，请稍等</span>')
    }
  }

  // 去除表格滚动底部加载事件
  public removeLazyLoadEvent() {
    if (this.isLazy && this.tableRef) {
      this.tableRef.removeEventListener('scroll', this.handleScroll)
    }
  }

  // 监听表格滚动条
  private handleScroll(e) {
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

  // 表格查询实现方法，主动开启loading效果、主动合并分页参数
  public async query() {
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
  public setResult(list, total) {
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
  public handleSizeChange(limit) {
    this.pager.limit = limit
    this.query()
  }

  /**
   * 切换分页页码
   * @param page {number} 分页码
   */
  public handleCurrentChange(current) {
    this.pager.page = current
    this.query()
  }

  private setLoading() {
    if (!this.loading) {
      this.loading = true
    }
  }

  private resetLoading() {
    this.loading = false
  }
}
