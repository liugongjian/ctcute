import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as MediumDialog from '@/types/MediumDialog'

/**
 * 中弹窗（表单）
 * @param params 表单对象
 * @returns 结果对象
 */
export const createMediumDialog = (params: MediumDialog.Form): AxiosPromise<MediumDialog.Response> =>
  request({
    url: '/mock/175/dialog/MediumDialog',
    method: 'post',
    data: params
  })
