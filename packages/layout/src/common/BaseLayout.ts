import { isObject } from './utils'
import { LayoutConfig, LayoutConfigOptions } from '../../types/layout'

export default abstract class Base {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // 配置信息
  protected config: LayoutConfig = {
    containerId: '', // 容器 id
    urlPrefix: '/', // url 前缀
    jsUrl: '/layout.js',
    cssUrl: '/layout.css',
  }

  // 读配置
  public getConfig() {
    return { ...this.config }
  }

  // 写配置
  public setConfig(conf: LayoutConfigOptions) {
    if (!conf || !isObject(conf)) return

    Object.assign(this.config, conf)
  }

  // 初始化
  abstract init(options?: { [opt: string]: string | boolean }): any
}
