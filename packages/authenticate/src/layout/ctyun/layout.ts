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
    cssUrl: '/layout/static/css/app.css',
  }

  // 资源加载
  async load() {
    try {
      const { urlPrefix, cssUrl, jsUrl } = this.config

      loadCss(`${urlPrefix}${cssUrl}`)
      await loadJs(`${urlPrefix}${jsUrl}`)
    } catch (err) {
      return Promise.reject(`Ctyun Layout 加载失败：${err}`)
    }
  }

  // 初始化
  init({ consoleInitArgs, useAd }: CtyunLayoutInitOptions = { useAd: true }) {
    try {
      const { consoleLayout, fixedSidebarAd } = window.CtcloudLayout

      consoleLayout.init(consoleInitArgs)

      // 初始化客服入口
      useAd && fixedSidebarAd.init()

      return Promise.resolve(consoleLayout)
    } catch (err) {
      return Promise.reject(`Ctyun Layout 初始化失败：${err}`)
    }
  }
}
