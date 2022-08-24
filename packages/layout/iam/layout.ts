import BaseLayout from '../common/BaseLayout'
import { loadJs, loadCss } from '../common/utils'
import { LayoutConfigOptions, IamLayoutInitOptions } from '../types/layout'

export class IamLayout extends BaseLayout {
  constructor(options?: LayoutConfigOptions) {
    super()

    if (options) this.setConfig(options)
  }

  protected config = {
    CONTAINER_ID: 'alogic-console', // 容器id使用这个，或 iam-console-container
    URL_PREFIX: '/iam', // url 前缀，可按需调整
    JS_URL: '/layout/alogic-layout.js',
    CSS_URL: '/layout/alogic-layout.css',
  }

  /**
   * 执行初始化
   */
  async init({ containerId }: IamLayoutInitOptions = {}) {
    try {
      const { URL_PREFIX, CSS_URL, JS_URL } = this.config

      loadCss(`${URL_PREFIX}${CSS_URL}`)
      await loadJs(`${URL_PREFIX}${JS_URL}`)

      const { consoleContainer } = window.AlogicLayout

      consoleContainer.init({
        baseNode: document.getElementById(containerId || this.config.CONTAINER_ID),
      })

      return consoleContainer
    } catch (err) {
      return Promise.reject(`Iam Layout 初始化失败：${err}`)
    }
  }
}
