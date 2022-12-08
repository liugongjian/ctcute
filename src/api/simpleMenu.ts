/*
 * @Author: 马妍
 * @Date: 2022-08-15 10:02:43
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-10-18 14:32:46
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
/**
 * 获取菜单数据
 * @returns 菜单数据
 */
export const getMenus = (): AxiosPromise<any> =>
  request({
    url: '/v1/auth/menus',
    method: 'get',
  })

/**
 * 删除菜单数据
 * @returns 菜单数据
 */
export const delMenus = (id): AxiosPromise<any> =>
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
