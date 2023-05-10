/*
 * @Author: 黄璐璐
 * @Date: 2022-08-31 09:54:16
 * @LastEditors: 王月功
 * @LastEditTime: 2023-05-09 23:30:02
 * @Description:
 */
import { Route } from 'vue-router'

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
 * @param hasPerms
 * @param route
 */
export function hasPermission(hasPerms: string[], route: Route) {
  if (route.meta && route.meta.perms) {
    const { perms } = route.meta
    // 支持设置一个或多个权限
    const needPerms = Array.isArray(perms) ? perms : [perms]

    return hasPerms.some(has => {
      // 支持 has 有多个权限值，逗号分割
      const _hasPerms = has
        .split(',')
        .map(perm => perm.trim())
        .filter(perm => perm)

      return _hasPerms.some(has => {
        // 支持通配符，匹配规则为去掉通配符后支持前缀匹配 eg：m_* 能匹配到 m_home
        const idx = has.indexOf('*')
        return idx === -1
          ? needPerms.includes(has) // 默认全匹配
          : needPerms.some(need => need.startsWith(has.slice(0, idx))) // 通配符为前缀匹配
      })
    })
  } else {
    return true
  }
}
