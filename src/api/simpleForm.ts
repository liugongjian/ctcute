import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as SimpleForm from '@/types/SimpleForm'

/**
 * 获取获取告警对象
 * @returns 告警对象数组
 */
export const getAlertTarget = (): AxiosPromise<string[]> =>
  request({
    url: '/mock/175/form/alertTarget',
    method: 'get',
  })

/**
 * 获取多选项
 * @returns 多选项数组
 */
export const getOptions = (): AxiosPromise<string[]> =>
  request({
    url: '/mock/175/form/options',
    method: 'get',
  })

/**
 * 创建简单表单
 * @param params 表单对象
 * @returns 结果对象
 */
export const createSimpleForm = (params: SimpleForm.Form): AxiosPromise<SimpleForm.Response> =>
  request({
    url: '/mock/175/form/simpleForm',
    method: 'post',
    data: params,
  })
