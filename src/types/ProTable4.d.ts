import * as Request from './Request'
import * as Response from './Response'

/**
 * 表格数据
 * 示例为服务器主机
 */
export type Host = {
  name: string
  status: number
  ip: string
  cpu: string
  memory: string
  disk: string
  health: string
}

/* 过滤条件 */
export type Conditions = {
  host: string
  name: string
}

/* 获取表格请求类型 */
export type TableParams = Request.Pager & Conditions

/* 返回列表 */
export type TableData = {
  list: Host[]
} & Response.Pager
