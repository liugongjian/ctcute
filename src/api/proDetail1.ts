import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProDetail1 from '@/types/ProDetail1'

/**
 * 获取复杂详情页1的数据
 * @returns 详情数据
 */
export const getProDetail1 = (params: ProDetail1.ProDetail1Params): AxiosPromise<ProDetail1.ProDetailInfo> =>
  request({
    url: '/mock/175/detail/proDetail1',
    method: 'get',
    params,
  })
