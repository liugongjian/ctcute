import { AxiosRequestConfig } from 'axios'

export default {
  fetchUrl: '/iam/gw/auth/Current',

  // axios 请求拦截器，为请求默认带上 workspaceId 请求参数（固定放在 params 中）
  requestInterceptor: (workspaceId: string | number) => (config: AxiosRequestConfig) => {
    if (!config.params) {
      config.params = {}
    }
    config.params.workspaceId = workspaceId

    return config
  },

  // axios 响应拦截器，暂不存在需求
  // ResponseInterceptor: response => response,
}
