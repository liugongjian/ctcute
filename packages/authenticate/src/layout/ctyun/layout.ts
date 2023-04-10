import BaseLayout from '../common/BaseLayout'
import { loadJs, loadCss } from '../common/utils'
import { LayoutConfigOptions, CtyunLayoutInitOptions } from '../../../types/layout'

export default class CtyunLayout extends BaseLayout {
  constructor(options?: LayoutConfigOptions) {
    super()

    if (options) this.setConfig(options)
  }

  protected config = {
    containerId: 'ctcloud-console', // 容器 id 固定使用这个，修改没有意义
    urlPrefix: '/ctyun', // url 前缀，可按需调整
    jsUrl: '/layout/ctcloud-layout.min.js',
    cssUrl: '/layout/ctcloud-layout.css',
    hookUrl: '/portal/base.min.js', // 低版本不兼容的提示窗
  }

  // 资源加载
  async load() {
    try {
      const { urlPrefix, cssUrl, jsUrl, hookUrl } = this.config

      loadCss(`${urlPrefix}${cssUrl}`)
      loadJs(`${urlPrefix}${hookUrl}`)
      await loadJs(`${urlPrefix}${jsUrl}`)
    } catch (err) {
      return Promise.reject(`Ctyun Layout 加载失败：${err}`)
    }
  }

  // 初始化
  init({ consoleInitArgs }: CtyunLayoutInitOptions = {}) {
    try {
      const { consoleLayout } = window.CtcloudLayout

      consoleLayout.init(consoleInitArgs)

      return Promise.resolve(consoleLayout)
    } catch (err) {
      return Promise.reject(`Ctyun Layout 初始化失败：${err}`)
    }
  }
}
