import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProTable5 from '@/types/ProTable5'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getTable = (params: ProTable5.TableParams): AxiosPromise<ProTable5.TableData> =>
  request({
    url: '/mock/175/table',
    method: 'get',
    params,
  })

/**
 * 获取Hosts
 * @returns hosts选项
 */
export const getHosts = (): AxiosPromise<string[]> =>
  request({
    url: '/mock/175/table/hosts',
    method: 'get',
  })
