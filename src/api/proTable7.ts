/*
 * @Author: 秦瑞斌
 * @Date: 2022-11-11 14:54:21
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-11 15:06:59
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getTable = (): AxiosPromise<any> =>
  request({
    url: '/mock/175/table/tree',
    method: 'get',
  })
