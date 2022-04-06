import axios from 'axios'

/** 创建axios实例 */
const service = axios.create({
  timeout: 5 * 3600 * 1000
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
    return Promise.reject(error)
  }
)

export default service
