/*
 * @Author: 马妍
 * @Date: 2022-08-09 13:41:43
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-18 14:55:36
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getRoles = (params): AxiosPromise<any> =>
  request({
    url: '/v1/auth/roles',
    method: 'get',
    params,
  })
