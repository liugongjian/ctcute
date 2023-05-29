import * as Request from './Request'
import * as Response from './Response'

/**
 * 表格数据
 * 示例为服务器主机
 */
export type Order = {
  orderId: string
  product: string
  project: string
  orderType: string
  createTime: number
}

/* 过滤条件 */
export type Conditions = {
  orderType: string
}
/* 复杂表格过滤条件 */
export type ComplexConditions = {
  host: string
}
/* 获取表格请求类型 */
export type TableParams = Request.Pager & Conditions

/* 返回列表 */
export type TableData = {
  list: Host[]
} & Response.Pager
