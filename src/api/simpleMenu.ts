/*
 * @Author: 马妍
 * @Date: 2022-08-15 10:02:43
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-16 23:14:23
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
/**
 * 获取验菜单数据
 * @returns 菜单数据
 */
export const getMenus = (): AxiosPromise<any> =>
  request({
    url: '/v1/auth/menus',
    method: 'get',
  })
