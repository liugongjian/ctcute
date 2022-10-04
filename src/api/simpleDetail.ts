import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as SimpleDetail from '@/types/SimpleDetail'

/**
 * 获取基本详情页的数据
 * @returns 详情数据
 */
export const getSimpleDetail = (
  params: SimpleDetail.DetailParams
): AxiosPromise<SimpleDetail.SimpleDetailInfo> =>
  request({
    url: '/mock/175/detail/simpleDetail',
    method: 'get',
    params,
  })
