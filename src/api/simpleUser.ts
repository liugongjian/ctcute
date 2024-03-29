/*
 * @Author: 马妍
 * @Date: 2022-08-09 13:41:43
 * @LastEditors: 王月功
 * @LastEditTime: 2023-05-12 19:01:29
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

/**
 * 获取表格数据
 * @returns 表格数据
 */
export const getUsers = (params): AxiosPromise<any> =>
  request({
    url: '/v1/auth/users',
    method: 'get',
    params,
  })

/**
 * 冻结某一个用户
 */
export const freezeUsers = (id): AxiosPromise<any> =>
  request({
    url: `/v1/auth/users/${id}/freeze`,
    method: 'put',
  })

/**
 * 解冻某一个用户
 */
export const unfreezeUsers = (id): AxiosPromise<any> =>
  request({
    url: `/v1/auth/users/${id}/unfreeze`,
    method: 'put',
  })

/**
 * 删除某一个用户
 */
export const delUsers = (data): AxiosPromise<any> =>
  request({
    url: '/v1/auth/users',
    method: 'delete',
    data: data,
  })

/**
 * 某一个用户密码重置
 */
export const resetPWDUsers = (id): AxiosPromise<any> =>
  request({
    url: `/v1/auth/users/${id}/password/reset`,
    method: 'put',
  })

/**
 * 修改某一个用户
 */
export const editUsers = (id, data): AxiosPromise<any> =>
  request({
    url: `/v1/auth/users/${id}`,
    method: 'put',
    data,
  })

/**
 * 添加某一个用户
 */
export const addUsers = (data): AxiosPromise<any> =>
  request({
    url: '/v1/auth/users',
    method: 'post',
    data: data,
  })

//获取用户的所有角色
export const getUserRoles = (params): AxiosPromise<any> =>
  request({
    url: `/v1/auth/users/${params._id}/roles`,
    method: 'get',
  })

//设置用户的角色
export const setUserRole = (data): AxiosPromise<any> =>
  request({
    url: `/v1/auth/users/${data._id}/roles`,
    method: 'put',
    data,
  })
