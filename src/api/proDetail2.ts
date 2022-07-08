import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProDetail2 from '@/types/ProDetail2'

/**
 * 获取复杂详情页2数据
 * @returns 详情对象
 */
export const getProDetail = (): AxiosPromise<ProDetail2.ProDetailInfo2> =>
  request({
    url: '/mock/175/detail/proDetail',
    method: 'get',
  })
