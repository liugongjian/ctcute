/*
 * @Author: 朱玉豆
 * @Date: 2022-07-08 17:04:20
 * @LastEditors: liugj
 * @LastEditTime: 2023-05-25 10:55:30
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import * as ProDetail4 from '@/types/ProDetail4'

/**
 * 获取复杂详情页2数据
 * @returns 详情对象
 */
export const getProDetail = (): AxiosPromise<ProDetail4.ProDetailInfo4> =>
  request({
    url: '/mock/175/detail/proDetail2',
    method: 'get',
  })
