import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProTable3 from '@/types/ProTable3'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getTable = (params: ProTable3.TableParams): AxiosPromise<ProTable3.TableData> =>
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

/**
 * 获取获取所属环境
 * @returns 所属环境数组
 */
export const getEnvs = (): AxiosPromise<string[]> =>
  request({
    url: '/mock/175/table/envs',
    method: 'get',
  })
