/*
 * @Author: 胡佳婷
 * @Date: 2023-05-12 13:44:39
 * @LastEditors: 王月功
 * @LastEditTime: 2023-06-06 09:41:30
 * @Description:
 */
export default {
  inserted(el, binding, vnode) {
    const { value, modifiers } = binding
    // 权限数据支持字符串、数组字符串
    const needPerms = value instanceof Array ? value : [value]
    const strict = !!modifiers.strict

    // 修饰符 strict ：严格模式默认无权限，松散模式默认有权限
    let hasAuth = strict ? false : true

    if (value && needPerms.length > 0) {
      hasAuth = vnode.context.$auth.isAuthorized(needPerms)
    } else {
      console.warn('[@cutedesign/authenticate] need roles! Like v-permission=\'["admin","editor"]\'')
    }

    if (!hasAuth) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  },
}
