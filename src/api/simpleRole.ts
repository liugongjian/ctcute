/*
 * @Author: 马妍
 * @Date: 2022-08-09 13:41:43
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-08-22 15:42:09
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getRoles = (params): AxiosPromise<any> =>
  request({
    url: '/v1/auth/roles',
    method: 'get',
    params,
  })

/**
 * 复制角色
 */
export const copyRoles = (params): AxiosPromise<any> =>
  request({
    url: `/v1/auth/roles/${params._id}/copy`,
    method: 'post',
  })

/**
 * 删除角色
 */
export const delRoles = (params): AxiosPromise<any> =>
  request({
    url: `/v1/auth/roles/${params._id}`,
    method: 'delete',
  })

/**
 * 编辑角色
 */
export const editRoles = (id, data): AxiosPromise<any> =>
  request({
    url: `/v1/auth/roles/${id}`,
    method: 'put',
    data,
  })

/**
 * 添加角色
 */
export const addRoles = (data): AxiosPromise<any> =>
  request({
    url: '/v1/auth/roles',
    method: 'post',
    data,
  })
/**
 * 获取某一角色下的所有用户
 */
export const getRoleUser = (data): AxiosPromise<any> =>
  request({
    url: `/v1/auth/roles/${data._id}/users`,
    method: 'get',
  })

export const setRole = (data): AxiosPromise<any> =>
  request({
    url: `/v1/auth/roles/${data._id}/users`,
    method: 'put',
    data,
  })
