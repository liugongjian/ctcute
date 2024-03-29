/*
 * @Author: 马妍
 * @Date: 2022-07-22 00:06:08
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-11-08 10:19:00
 * @Description:
 */
import axios from 'axios'
import settings from '@/settings'
import { Message } from '@cutedesign/ui'

/** 创建axios实例 */
const service = axios.create({
  baseURL: settings.apiBaseUrl,
  timeout: settings.requestTimeout,
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
    if (error.response && error.response.status === 500) {
      Message({
        message: '服务器开小差了，请稍后重试! ',
        type: 'error',
        duration: settings.messageDuration,
      })
    } else {
      Message({
        message: error.response.data.msg,
        type: 'error',
        duration: settings.messageDuration,
      })
    }
    return Promise.reject(error)
  }
)

export default service
