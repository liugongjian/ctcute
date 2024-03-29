import { Route } from 'vue-router'
import { AxiosRequestConfig } from 'axios'

let __workspaceId__ = ''

// 路由拦截器
export default {
  setWorkspaceId: (workspaceId: string) => {
    __workspaceId__ = workspaceId
  },
  routerBeforeEach: (to: Route) => {
    // 从 route 中获取 workspaceId ，做一次写操作
    let { workspaceId } = to.query

    // 允许在 query 中修改 workspaceId 来变更工作区
    if (workspaceId && workspaceId !== __workspaceId__) {
      // 处理2个同名参数引起的登录异常问题
      const wid = typeof workspaceId === 'string' ? workspaceId : (workspaceId[0] as string)

      __workspaceId__ = wid
    } else {
      workspaceId = __workspaceId__
    }

    // 自动填充 query: workspaceId
    if (workspaceId) {
      if (!/.*\?(.*&)?workspaceId=[^\s]+/.test(to.fullPath)) {
        return {
          ...to,
          name: to.name as string,
          params: to.params,
          query: {
            ...to.query,
            workspaceId,
          },
        }
      } else {
        return void 0
      }
    } else {
      return to.name === 'interceptor' ? void 0 : { name: 'interceptor' }
    }
  },

  // axios 请求拦截器，为请求默认带上 workspaceId 请求参数（固定放在 params 中）
  requestInterceptor: (config: AxiosRequestConfig) => {
    if (!config.params) {
      config.params = {}
    }
    config.params.workspaceId = __workspaceId__

    return config
  },
}
