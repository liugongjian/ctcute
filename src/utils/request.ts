/*
 * @Author: 马妍
 * @Date: 2022-07-22 00:06:08
 * @LastEditors: 王月功
 * @LastEditTime: 2022-08-19 16:15:05
 * @Description:
 */
import axios from 'axios'
import settings from '@/settings'
import { Message } from 'element-ui'

/** 创建axios实例 */
const service = axios.create({
  baseURL: settings.apiBaseUrl,
  timeout: 5 * 3600 * 1000,
})

/** 请求拦截器 */
service.interceptors.request.use(
  config => {
    const method = config.method.toLowerCase()
    // 加入请求时间戳
    if (method === 'post' || method === 'put') {
      // ...
    } else if (method === 'get') {
      if (!config.params) {
        config.params = {}
      }
      // config.params.requestTime = Date.now()
    }

    //将token挂载到请求头上
    if (sessionStorage.getItem('token')) {
      config.headers['Authorization'] = sessionStorage.getItem('token')
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/** 响应拦截器拦截器 */
service.interceptors.response.use(
  response => {
    // 对接口返回做统一处理, 这里要跟后台约定好接口异常返回的数据格式
    return Promise.resolve(response.data)
  },
  error => {
    if (error.response.status === 401) {
      Message({
        message: '登录失效, 请重新登录! ',
        type: 'error',
        duration: 5 * 1000,
      })
      sessionStorage.clear()
      window.location.href = `/login?redirect=${location.pathname}${location.search}`
    }
    return Promise.reject(error)
  }
)

export default service
