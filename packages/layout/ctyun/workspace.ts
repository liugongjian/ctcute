import beforeEach from '../common/routerBeforeEach'

// 路由拦截器
export default beforeEach(() => {
  window.location.href = `/sign/in?returnUrl=${encodeURIComponent(window.location.href)}`
})
