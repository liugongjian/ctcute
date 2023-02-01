/*
 * @Author: 胡佳婷
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-12-14 17:30:59
 * @Description:
 */
import { Application, IBoot } from 'egg'
import path = require('path')
import glob = require('glob')

export default class AppBootHook implements IBoot {
  private readonly app: Application
  constructor(app: Application) {
    this.app = app
  }

  /**
   * 获取模版名称和Manifest映射关系
   * @param manifestList Manifest列表
   * @returns 映射关系
   */
  private generateManifestMapping(manifestList) {
    const mapping = {}
    manifestList.forEach(manifestPath => {
      const name = manifestPath.replace(/(.*\/)*([^.]+).manifest/gi, '$2')
      mapping[name] = manifestPath
    })
    console.log('===mapping===', mapping)
    return mapping
  }

  async beforeStart() { }

  configWillLoad() { }

  async didLoad() {
    // 覆盖BizErrorHandler
    this.app.BizErrorHandler = class extends this.app.BizErrorHandler {
      accepts() {
        return 'json'
      }
      json(ctx, _, config) {
        ctx.body = {
          code: config.code,
          msg: config.message,
          // error
        }
      }
    }
  }

  async willReady() {
    /**
     * @description: 遍历src文件夹，生成manifest的映射
     */
    // 页面模版路径
    const pagePath = path.resolve(__dirname, '../src').replace(/\\/g, '/')
    // Manifest列表
    const manifestList: string[] = glob.sync(`${pagePath}/views/**/*.manifest`)

    // 模版名称和Manifest 映射关系
    const manifestMapping = this.generateManifestMapping(manifestList)
    this.app.manifestMapping = manifestMapping
  }

  async didReady() { }
}
