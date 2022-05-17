import request from '@/utils/request'

/**
 * 获取获取告警对象
 * @returns 告警对象数组
 */
export const getAlertTarget = (): Promise<any> =>
  request({
    url: '/mock/175/form/alertTarget',
    method: 'get'
  })

/**
 * 创建简单表单
 * @param params 表单对象
 * @returns 结果对象
 */
export const createSimpleForm = (params: any): Promise<any> =>
  request({
    url: '/mock/175/form/simpleForm',
    method: 'post',
    data: params
  })