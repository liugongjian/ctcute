/*
 * @Author: 马妍
 * @Date: 2022-07-22 00:06:08
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-07-24 07:19:22
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as SimpleTable from '@/types/ProTable4'

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
interface tree {
  key: string
  label: string
  children: any[]
}
/**
 * 获取获树形数据
 * @returns 树形数据
 */
export const getTrees = (): AxiosPromise<tree[]> =>
  request({
    url: '/mock/175/trees',
    method: 'get',
  })
