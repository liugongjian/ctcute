/*
 * @Author: 马妍
 * @Date: 2022-08-15 10:02:43
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-16 00:52:07
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

type CommonRes = { code: number | string; msg: string }

/**
 * 获取菜单数据
 * @returns 菜单数据
 */
export const getMenus = (): Promise<
  CommonRes & {
    data?: {
      result: any[]
    }
  }
> =>
  request({
    url: '/v1/auth/menus',
    method: 'get',
  })

/**
 * 删除菜单数据
 * @returns 菜单数据
 */
export const delMenus = (id): Promise<CommonRes> =>
  request({
    url: `/v1/auth/menus/${id}`,
    method: 'delete',
  })
/**
 * 添加菜单数据
 */
export const addMenus = (data): AxiosPromise<any> =>
  request({
    url: '/v1/auth/menus',
    method: 'post',
    data,
  })

/**
 * 编辑菜单数据
 */
export const editMenus = (data): AxiosPromise<any> =>
  request({
    url: `/v1/auth/menus/${data.menuId}`,
    method: 'put',
    data,
  })
