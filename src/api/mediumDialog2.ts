/*
 * @Author: zhaodan
 * @Date: 2023-01-09 14:00:27
 * @LastEditors: zhaodan
 * @LastEditTime: 2023-01-09 14:08:48
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as MediumDialog2 from '@/types/MediumDialog2'

/**
 * 中弹窗2
 * @param params 表单对象
 * @returns 结果对象
 */
export const createMediumDialog2 = (params: MediumDialog2.Form): AxiosPromise<MediumDialog2.Response> =>
  request({
    url: '/mock/175/dialog/MediumDialog2',
    method: 'post',
    data: params,
  })
