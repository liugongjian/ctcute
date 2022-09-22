import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as StepForm from '@/types/StepForm'

/**
 * 创建分步表单
 * @param params 表单对象
 * @returns 结果对象
 */
export const createStepForm = (params: StepForm.SubmitParams): AxiosPromise<StepForm.Response> =>
  request({
    url: '/mock/175/form/stepForm',
    method: 'post',
    data: params,
  })
