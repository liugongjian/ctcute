import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProDetail3 from '@/types/ProDetail3'

/**
 * 获取基本详情页的数据
 * @returns 详情数据
 */
export const getProDetail3 = (params: ProDetail3.DetailParams): AxiosPromise<ProDetail3.ProDetail3Info> =>
  request({
    url: '/mock/175/detail/simpleDetail',
    method: 'get',
    params,
  })
