import BaseLayout from '../common/BaseLayout'
import { loadJs, loadCss } from '../common/utils'
import { LayoutConfigOptions, IamLayoutInitOptions } from '../../../types/layout'

export default class IamLayout extends BaseLayout {
  constructor(options?: LayoutConfigOptions) {
    super()

    if (options) this.setConfig(options)
  }

  protected config = {
    containerId: 'container',
    urlPrefix: '/iam', // url 前缀，可按需调整
    jsUrl: '/layout/alogic-layout.js',
    cssUrl: '/layout/alogic-layout.css',
  }

  // 资源加载
  async #load() {
    try {
      const { urlPrefix, cssUrl, jsUrl } = this.config

      loadCss(`${urlPrefix}${cssUrl}`)
      await loadJs(`${urlPrefix}${jsUrl}`)
    } catch (err) {
      return Promise.reject(`Iam Layout 加载失败：${err}`)
    }
  }

  // 初始化
  async init(options: IamLayoutInitOptions) {
    try {
      await this.#load()

      const { consoleContainer } = window.AlogicLayout
      const { containerId, bizDomain } = options

      consoleContainer.init({
        baseNode: document.getElementById(containerId || this.config.containerId),
      })

      // 侧边栏高亮
      bizDomain && consoleContainer.match({ domain: bizDomain })
      // 如需定制菜单，参考文档

      return Promise.resolve(consoleContainer)
    } catch (err) {
      return Promise.reject(`Iam Layout 初始化失败：${err}`)
    }
  }
}
