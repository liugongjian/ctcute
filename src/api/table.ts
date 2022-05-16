import request from '@/utils/request'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getTable = (params: any): Promise<any> =>
  request({
    url: '/mock/175/table',
    method: 'get',
    params
  })

/**
 * 获取获取告警对象
 * @returns 告警对象数组
 */
export const getHosts = (): Promise<any> =>
  request({
    url: '/mock/175/table/hosts',
    method: 'get'
  })
