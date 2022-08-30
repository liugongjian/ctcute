import { Route, NavigationGuardNext, NavigationGuard } from 'vue-router'

let __workspaceId__ = ''

export default (cb: NavigationGuard) => (to: Route, from: Route, next: NavigationGuardNext) => {
  // 从 route 中获取 workspaceId ，做一次写操作
  let { workspaceId } = to.query

  // 允许在 query 中修改 workspaceId 来变更工作区
  if (workspaceId && workspaceId !== __workspaceId__) {
    // 处理2个同名参数引起的登录异常问题
    const wid = typeof workspaceId === 'string' ? workspaceId : (workspaceId[0] as string)

    __workspaceId__ = to.query.workspaceId = wid
  } else {
    workspaceId = to.query.workspaceId = __workspaceId__
  }

  // 自动填充 query: workspaceId
  if (workspaceId) {
    if (/.*\?(.*&)?workspaceId=[^\s]+/.test(to.fullPath)) {
      next()
    } else {
      next({
        name: to.name as string,
        params: to.params,
        query: to.query,
      })
    }
  } else {
    cb(to, from, next)
  }
}
