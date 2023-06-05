/* eslint-disable prettier/prettier */
export default [
  {
    'name': 'publicPath',
    'value': '/',
    'comment': '指定项目在构建时的基本 URL 路径'
  },
  {
    'name': 'devPort',
    'value': 8080,
    'comment': '开发环境端口号'
  },
  {
    'name': 'title',
    'value': '天翼云前端脚手架',
    'comment': '项目标题（包括初次加载雪花屏的标题 页面的标题 浏览器的标题）'
  },
  {
    'name': 'keepAlive',
    'value': false,
    'comment': 'TODO: 是否开启缓存路由，建议配合CuteTab使用'
  },
  {
    'name': 'keepAliveMaxNum',
    'value': 99,
    'comment': '缓存路由的最大数量'
  },
  {
    'name': 'routerMode',
    'value': 'history',
    'comment': '路由模式，可选值为history或hash'
  },
  {
    'name': 'i18nDefaultLang',
    'value': 'zh',
    'comment': 'i18n默认语言'
  },
  {
    'name': 'i18nStorageKey',
    'value': 'cute-lang',
    'comment': 'i18n本地持久化时的localStorage key'
  },
  {
    'name': 'logoIcon',
    'value': '/images/ct-logo.svg',
    'comment': 'Logo地址'
  },
  {
    'name': 'subLogoIcon',
    'value': '/images/cute-design.svg',
    'comment': '子Logo地址'
  },
  {
    'name': 'theme',
    'value': 'default',
    'comment': '默认主题'
  },
  {
    'name': 'multiThemes',
    'value': [
      'default',
      'dark/blue'
    ],
    'comment': '多主题切换，如果传空则关闭多主题切换功能'
  },
  {
    'name': 'layout',
    'value': 'default',
    'comment': '布局方式，可选类型: default(页面导航栏随滚动条滚动) / fixed-navbar(固定页面导航栏)'
  },
  {
    'name': 'loading',
    'value': '',
    'comment': 'Loading式样'
  },
  {
    'name': 'watermark',
    'value': '',
    'comment': '背景水印'
  },
  {
    'name': 'apiBaseUrl',
    'value': '/',
    'comment': '网络请求地址前缀'
  },
  {
    'name': 'requestTimeout',
    'value': 18000000,
    'comment': '最长请求时间'
  },
  {
    'name': 'messageDuration',
    'value': 5000,
    'comment': '消息框消失时间'
  }
]