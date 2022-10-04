/*
 * @Author: 马妍
 * @Date: 2022-08-09 13:38:40
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-18 11:41:51
 * @Description:
 */
import * as Request from './Request'
import * as Response from './Response'

/**
 * 表格数据
 */
export type User = {
  name: string
  phone: string
  status: number
  remark: string
  createdTime: number
  lastLoginTime: number
}

/* 过滤条件 */
export type Conditions = {
  status: string
  searchkey: string
}

/* 获取表格请求类型 */
export type TableParams = Request.Pager & Conditions

/* 返回列表 */
export type TableData = {
  list: User[]
} & Response.Pager
