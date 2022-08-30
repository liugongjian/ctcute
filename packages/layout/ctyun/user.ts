import { AxiosRequestConfig } from 'axios'

export default {
  fetchUrl: '/ctyun/gw/auth/Current',

  // axios 请求拦截器，为请求默认带上 workspaceId 请求参数（固定放在 params 中，ctyun 中使用的是用户 ID 作为工作区id）
  requestInterceptor: (userId: string | number) => (config: AxiosRequestConfig) => {
    if (!config.params) {
      config.params = {}
    }
    config.params.workspaceId = userId

    return config
  },

  // axios 响应拦截器，暂不存在需求
  // ResponseInterceptor: response => response,
}
