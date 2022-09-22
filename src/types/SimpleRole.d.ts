/*
 * @Author: 马妍
 * @Date: 2022-08-09 13:38:40
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-18 14:55:25
 * @Description:
 */
import * as Request from './Request'
import * as Response from './Response'

/**
 * 表格数据
 */
export type Role = {
  name: string
  code: string
  remark: string
}

/* 获取表格请求类型 */
export type TableParams = Request.Pager

/* 返回列表 */
export type TableData = {
  list: Role[]
} & Response.Pager
