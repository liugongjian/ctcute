import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProForm1 from '@/types/ProForm1'

/**
 * 创建复杂表单1
 * @param params 表单对象
 * @returns 结果对象
 */
export const createProForm1 = (params: ProForm1.Form): AxiosPromise<ProForm1.Response> =>
  request({
    url: '/mock/175/form/proForm1',
    method: 'post',
    data: params
  })
