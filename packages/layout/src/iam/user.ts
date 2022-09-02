export default {
  fetchUrl: '/iam/gw/auth/Current',

  loginUrl: `/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`, // 对应业务后端的登录地址
  logoutUrl: '/sign/out', // 对应业务后端的退出地址，按需重写

  // 支持外部设置，可能需要带上业务路径前缀
  setConfig({ loginUrl, logoutUrl }: { loginUrl?: string; logoutUrl?: string } = {}) {
    if (loginUrl) this.loginUrl = loginUrl
    if (logoutUrl) this.logoutUrl = logoutUrl
  },

  // axios 响应拦截器，暂不存在需求
  // responseInterceptor: response => response,
}
