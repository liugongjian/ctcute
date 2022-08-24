import BaseLayout from '../common/BaseLayout'
import { loadJs, loadCss } from '../common/utils'
import { LayoutConfigOptions, CtyunLayoutInitOptions } from '../types/layout'

export class CtyunLayout extends BaseLayout {
  constructor(options?: LayoutConfigOptions) {
    super()

    if (options) this.setConfig(options)
  }

  protected config = {
    CONTAINER_ID: 'ctcloud-console', // 容器 id 固定使用这个，修改没有意义
    URL_PREFIX: '/ctyun', // url 前缀，可按需调整
    JS_URL: '/layout/ctcloud-layout.min.js',
    CSS_URL: '/layout/static/css/app.css',
  }

  /**
   * 执行初始化
   */
  async init({ consoleInitArgs, useAd }: CtyunLayoutInitOptions = { useAd: true }) {
    try {
      const { URL_PREFIX, CSS_URL, JS_URL } = this.config

      loadCss(`${URL_PREFIX}${CSS_URL}`)
      await loadJs(`${URL_PREFIX}${JS_URL}`)

      const { consoleLayout, fixedSidebarAd } = window.CtcloudLayout

      consoleLayout.init(consoleInitArgs)

      // 初始化客服入口
      useAd && fixedSidebarAd.init()

      return consoleLayout
    } catch (err) {
      return Promise.reject(`Ctyun Layout 初始化失败：${err}`)
    }
  }
}
