import BaseLayout from '../common/BaseLayout'
import { loadJs, loadCss } from '../common/utils'
import { LayoutConfigOptions, IamLayoutInitOptions } from '../types/layout'

export default class IamLayout extends BaseLayout {
  constructor(options?: LayoutConfigOptions) {
    super()

    if (options) this.setConfig(options)
  }

  protected config = {
    containerId: 'alogic-console', // 容器id使用这个，或 iam-console-container
    urlPrefix: '/iam', // url 前缀，可按需调整
    jsUrl: '/layout/alogic-layout.js',
    cssUrl: '/layout/alogic-layout.css',
  }

  /**
   * 执行初始化
   */
  async init({ containerId }: IamLayoutInitOptions = {}) {
    try {
      const { urlPrefix, cssUrl, jsUrl } = this.config

      loadCss(`${urlPrefix}${cssUrl}`)
      await loadJs(`${urlPrefix}${jsUrl}`)

      const { consoleContainer } = window.AlogicLayout

      consoleContainer.init({
        baseNode: document.getElementById(containerId || this.config.containerId),
      })

      return consoleContainer
    } catch (err) {
      return Promise.reject(`Iam Layout 初始化失败：${err}`)
    }
  }
}
