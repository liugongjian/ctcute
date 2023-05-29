/*
 * @Author: 马妍
 * @Date: 2022-08-09 13:41:43
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-16 18:02:32
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
export const copyRoles = (id): AxiosPromise<any> =>
  request({
    url: `/v1/auth/roles/${id}/copy`,
    method: 'post',
  })

/**
 * 删除角色
 */
export const delRoles = (id): AxiosPromise<any> =>
  request({
    url: `/v1/auth/roles/${id}`,
    method: 'delete',
  })

/**
 * 编辑角色
 */
export const editRoles = (roleId, data): AxiosPromise<any> =>
  request({
    url: `/v1/auth/roles/${roleId}`,
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
    url: `/v1/auth/roles/${data.roleId}/users`,
    method: 'put',
    data,
  })
