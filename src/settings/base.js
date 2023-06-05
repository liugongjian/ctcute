const settings = {
  // 开发以及部署时的URL
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // 开发环境端口号
  devPort: 8080,
  // 项目标题（包括初次加载雪花屏的标题 页面的标题 浏览器的标题）
  title: '天翼云前端脚手架',
  // TODO: 是否开启缓存路由，建议配合CuteTab使用
  keepAlive: false,
  // 缓存路由的最大数量
  keepAliveMaxNum: 99,
  // 路由模式，可选值为history或hash
  routerMode: 'history',
  // i18n默认语言
  i18nDefaultLang: 'zh',
  // i18n本地持久化时的localStorage key
  i18nStorageKey: 'cute-lang',
}

module.exports = settings
