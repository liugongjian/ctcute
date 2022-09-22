/*
 * @Author: 黄璐璐
 * @Date: 2022-08-16 13:49:25
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-16 14:54:24
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
// 表格数据一样 直接用简单表格的声明
import * as SimpleTable from '@/types/SimpleTable'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getTable = (params: SimpleTable.TableParams): AxiosPromise<SimpleTable.TableData> =>
  request({
    url: '/mock/175/table',
    method: 'get',
    params,
  })
