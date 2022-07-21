/*
 * @Author: 朱玉豆
 * @Date: 2022-07-08 17:04:20
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2022-07-21 13:16:19
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProDetail2 from '@/types/ProDetail2'

/**
 * 获取复杂详情页2数据
 * @returns 详情对象
 */
export const getProDetail = (): AxiosPromise<ProDetail2.ProDetailInfo2> =>
  request({
    url: '/mock/175/detail/proDetail2',
    method: 'get',
  })
