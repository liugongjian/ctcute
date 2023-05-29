/*
 * @Author: 胡佳婷
 * @Date: 2022-10-04 17:01:49
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-05-12 08:14:44
 * @Description:
 */
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

export type Option = {
  option: Record<string, unknown>
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
