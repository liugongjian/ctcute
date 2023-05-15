import BaseLayout from '../common/BaseLayout'
import { loadJs, loadCss } from '../common/utils'
import { LayoutConfigOptions, CtyunLayoutInitOptions } from '../../../types/layout'

export default class CtyunLayout extends BaseLayout {
  constructor(options?: LayoutConfigOptions) {
    super()

    if (options) this.setConfig(options)
  }

  protected config = {
    containerId: 'container', // 容器 id
    urlPrefix: '/ctyun', // url 前缀，可按需调整
    jsUrl: '/layout/ctcloud-layout.min.js',
    cssUrl: '/layout/ctcloud-layout.css',
    hookUrl: '/portal/base.min.js', // 低版本不兼容的提示窗
  }

  // 资源加载
  async #load() {
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
  async init({ containerId, bizDomain, logoutUrl, consoleInitArgs }: CtyunLayoutInitOptions) {
    try {
      await this.#load()

      const { consoleLayout } = window.CtcloudLayout

      const container = document.getElementById(containerId || this.config.containerId)
      // ctyun id 固定
      container.id = 'ctcloud-console'

      consoleLayout.init(consoleInitArgs)
      // TODO 生产环境暂时没有这2个 api ，临时加个能力判断
      // 侧边栏高亮
      bizDomain &&
        consoleLayout.matchConsoleMenuCode &&
        consoleLayout.matchConsoleMenuCode({ menuCode: bizDomain })
      // 修改登出路由
      logoutUrl &&
        consoleLayout.updateConsoleLayoutLogoutUrl &&
        consoleLayout.updateConsoleLayoutLogoutUrl(logoutUrl)

      return Promise.resolve(consoleLayout)
    } catch (err) {
      return Promise.reject(`Ctyun Layout 初始化失败：${err}`)
    }
  }
}
