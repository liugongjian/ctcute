/*
 * @Author: 马妍
 * @Date: 2022-08-17 16:01:30
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-17 16:22:55
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

interface tree {
  key: string
  label: string
  children: any[]
}
/**
 * 获取三级获树形数据
 * @returns 树形数据
 */
export const getThreeTrees = (): AxiosPromise<tree[]> =>
  request({
    url: '/mock/175/tree/threeData',
    method: 'get',
  })

/**
 * 获取二级获树形数据
 * @returns 树形数据
 */
export const getTwoTrees = (): AxiosPromise<tree[]> =>
  request({
    url: '/mock/175/tree/twoData',
    method: 'get',
  })
