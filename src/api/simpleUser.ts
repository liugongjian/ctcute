/*
 * @Author: 马妍
 * @Date: 2022-08-09 13:41:43
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-09 13:42:33
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as SimpleUser from '@/types/SimpleUser'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getUsers = (params: SimpleUser.TableParams): AxiosPromise<SimpleUser.TableData> =>
  request({
    url: '/mock/175/table',
    method: 'get',
    params,
  })

/**
 * 获取获取告警对象
 * @returns 告警对象数组
 */
export const getHosts = (): AxiosPromise<string[]> =>
  request({
    url: '/mock/175/table/hosts',
    method: 'get',
  })
