/*
 * @Author: 黄璐璐
 * @Date: 2022-08-31 09:54:16
 * @LastEditors: 黄璐璐
 * @LastEditTime: 2022-09-01 10:52:47
 * @Description:
 */
/**
 * 递归过滤异步路由表，返回符合用户权限的路由表
 * @param routes asyncRouterMap
 * @param perms
 */
export function filterAsyncRouter(routes, perms) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(perms, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, perms)
      }
      res.push(tmp)
    }
  })

  return res
}

/**
 * 通过meta.perms判断是否与当前用户权限匹配
 * @param perms
 * @param route
 */
export function hasPermission(perms, route) {
  if (route.meta && route.meta.perms) {
    return perms.some(perm => route.meta.perms.includes(perm))
  } else {
    return true
  }
}
