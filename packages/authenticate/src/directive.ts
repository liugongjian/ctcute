/*
 * @Author: 胡佳婷
 * @Date: 2023-05-12 13:44:39
 * @LastEditors: 王月功
 * @LastEditTime: 2023-06-06 10:38:45
 * @Description:
 */
export default {
  inserted(el, binding, vnode) {
    const { value, modifiers } = binding

    let needPerms = value instanceof Array ? value : [value || ''] // 权限数据支持字符串、数组字符串
    needPerms = needPerms.map(v => v.trim()).filter(v => v) // 过滤空字符串，避免影响匹配结果

    const strict = !!modifiers.strict
    let hasAuth = strict ? false : true // 修饰符 strict ：严格模式默认无权限，松散模式默认有权限

    if (needPerms.length > 0) {
      hasAuth = vnode.context.$auth.isAuthorized(needPerms)
    } else {
      /* eslint-disable-next-line no-console */
      console.warn('[@cutedesign/authenticate] need roles! Like v-permission=\'["admin","editor"]\'')
    }

    if (!hasAuth) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  },
}
