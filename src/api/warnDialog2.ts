/*
 * @Author: 马妍
 * @Date: 2022-10-25 14:54:19
 * @LastEditors: 马妍
 * @LastEditTime: 2022-10-25 14:56:31
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as WarnDialog2 from '@/types/WarnDialog2'

/**
 * 中弹窗（表单）
 * @param params 表单对象
 * @returns 结果对象
 */
export const createWarnDialog2 = (params: WarnDialog2.Form): AxiosPromise<WarnDialog2.Response> =>
  request({
    url: '/mock/175/dialog/warnDialog2',
    method: 'post',
    data: params,
  })
