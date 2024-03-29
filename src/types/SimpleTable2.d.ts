/*
 * @Author: 马妍
 * @Date: 2022-08-10 16:47:27
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-10 16:47:34
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

/* 过滤条件 */
export type Conditions = {
  ip: string
  host: string
  name: string
}
/* 复杂表格过滤条件 */
export type ComplexConditions = {
  host: string
  name: string
  environment: string
  cpu: string
}
/* 获取表格请求类型 */
export type TableParams = Request.Pager & Conditions

/* 返回列表 */
export type TableData = {
  list: Host[]
} & Response.Pager
