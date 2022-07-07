import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProForm2 from '@/types/ProForm2'

/**
 * 创建复杂表单2
 * @param params 表单对象
 * @returns 结果对象
 */
export const createProForm2 = (params: ProForm2.Form): AxiosPromise<ProForm2.Response> =>
  request({
    url: '/mock/175/form/proForm2',
    method: 'post',
    data: params
  })
