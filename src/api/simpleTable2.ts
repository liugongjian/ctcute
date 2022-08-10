/*
 * @Author: 马妍
 * @Date: 2022-08-10 16:49:12
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-10 16:49:18
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
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

/**
 * 获取获取告警对象
 * @returns 告警对象数组
 */
export const getHosts = (): AxiosPromise<string[]> =>
  request({
    url: '/mock/175/table/hosts',
    method: 'get',
  })
