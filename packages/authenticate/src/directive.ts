export default {
  bind(el, bindings, vnode) {
    el.style.display = 'none'
    compileAuthorize(el, bindings, vnode)
  },
  update: function (el, bindings, vnode) {
    compileAuthorize(el, bindings, vnode)
  },

  componentUpdated: function (el, bindings, vnode) {
    compileAuthorize(el, bindings, vnode)
  },

  unbind: function (el) {
    el.style.display = null
  },
  // inserted(el, binding, vnode) {
  //   const { value } = binding

  //   if (value && value instanceof Array && value.length > 0) {
  //     vnode.context.$auth.isAuthorized(value).then((hasAuth: boolean) => {
  //       if (!hasAuth) {
  //         // el.parentNode && el.parentNode.removeChild(el)
  //         debugger
  //         el.style.display = 'none'
  //       }
  //     })
  //   } else {
  //     throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"')
  //   }
  // },
}

function compileAuthorize(el, bindings, vnode) {
  const { value } = bindings
  if (value && value instanceof Array && value.length > 0) {
    const hasAuth = vnode.context.$auth.isAuthorized(value)
    debugger
    if (!hasAuth) {
      el.style.display = 'none'
    } else {
      el.style.display = null
    }
  } else {
    throw new Error("need roles! Like v-permission=\"['admin','editor']\"")
  }
}
