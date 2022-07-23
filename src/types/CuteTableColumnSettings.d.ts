import * as Request from './Request'
import * as Response from './Response'

// 表单请求数据
export type TableParams = Request.Pager

/* 返回列表 */
export type TableData = {
  list: Host[]
} & Response.Pager

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
