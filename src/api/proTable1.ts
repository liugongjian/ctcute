import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProTable1 from '@/types/ProTable1'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getTable = (params: ProTable1.TableParams): AxiosPromise<ProTable1.TableData> =>
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
