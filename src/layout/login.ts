/*
 * @Author: 马妍
 * @Date: 2022-08-15 10:02:43
 * @LastEditors: 马妍
 * @LastEditTime: 2022-08-16 21:48:59
 * @Description:
 */
import request from '@/utils/request'
import { AxiosPromise } from 'axios'
/**
 * 获取验证码
 * @returns 验证码
 */
export const getCodes = (): AxiosPromise<any> =>
  request({
    url: '/v1/auth/verify',
    method: 'get',
  })
/**
 * 超级用户登录
 * @returns 登录
 */
export const getSuperLogin = (params): AxiosPromise<any> =>
  request({
    url: '/v1/auth/login',
    method: 'post',
    data: params,
  })

/**
 * 退出登录
 * @returns 退出登录
 */
export const Logout = (params): AxiosPromise<any> =>
  request({
    url: '/v1/auth/logout',
    method: 'post',
    data: params,
  })
