export default {
  inserted(el, binding, vnode) {
    const { value } = binding
    const auth = vnode.context.$auth.getAllButtons()

    if (value && value instanceof Array && value.length > 0) {
      const permissions = value

      const hasPermission = auth.some(role => {
        return permissions.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error("need roles! Like v-permission=\"['admin','editor']\"")
    }
  },
}
