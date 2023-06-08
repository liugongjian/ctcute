const path = require('path')

const base = {
  // 指定项目在构建时的基本 URL 路径
  publicPath: '/',
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

const theme = {
  // Logo地址
  logoIcon: path.resolve(base.publicPath, '/images/ct-logo.svg'),
  // 子Logo地址
  subLogoIcon: path.resolve(base.publicPath, '/images/cute-design.svg'),
  // 默认主题
  theme: 'default',
  // 多主题切换，如果传空则关闭多主题切换功能
  multiThemes: ['default', 'dark/blue'],
  // 布局方式，可选类型: default(页面导航栏随滚动条滚动) / fixed-navbar(固定页面导航栏)
  layout: 'default',
  // Loading式样
  loading: '',
  // 背景水印
  watermark: '',
}

const net = {
  // 网络请求地址前缀
  apiBaseUrl: '/',
  // 最长请求时间
  requestTimeout: 5 * 3600 * 1000,
  // 消息框消失时间
  messageDuration: 5 * 1000,
}

module.exports = {
  ...base,
  ...theme,
  ...net,
}
