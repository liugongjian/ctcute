const { publicPath } = require('./base')
const path = require('path')

const settings = {
  // Logo地址
  logoIcon: path.resolve(publicPath, '/images/ct-logo.svg'),
  // 子Logo地址
  subLogoIcon: path.resolve(publicPath, '/images/cute-design.svg'),
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

module.exports = settings
