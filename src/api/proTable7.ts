/*
 * @Author: 秦瑞斌
 * @Date: 2022-10-21 15:00:03
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-10-21 15:04:27
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProTable7 from '@/types/ProTable7'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getTable = (params: ProTable7.TableParams): AxiosPromise<ProTable7.TableData> =>
  request({
    url: '/mock/175/table/nesting2', // 有分页
    method: 'get',
    params,
  })
