import { Service } from 'egg'
import fs = require('fs')
import path = require('path')

/**
 * Code Service
 */
export default class Code extends Service {
  // 页面模版路径
  private pagePath = path.resolve(__dirname, '../../../src')

  /**
   * 获得代码清单
   * @param name 模块名称
   * @return {string} 清单JSON
   */
  public async getManifest(name: string) {
    const manifestPath = this.app.manifestMapping[name]
    if (manifestPath) {
      const manifest = fs.readFileSync(manifestPath, { encoding: 'utf8' })
      try {
        return JSON.parse(manifest)
      } catch (e) {
        this.ctx.throwBizError('MANIFEST_JSON_ERR')
      }
    } else {
      this.ctx.throwBizError('PAGE_NOT_FOUND')
    }
  }

  /**
   * 根据路径获得单个代码
   * @param codePath 代码路径
   * @return {string} 代码
   */
  public getCode(codePath: string) {
    const code = fs.readFileSync(this.replaceAtSymbol(codePath), { encoding: 'utf8' })
    return code
  }

  /**
   * 根据名称获得所有代码
   * @param name 名称
   * @return {string} 代码列表
   */
  public async getCodes(name: string) {
    const manifest = await this.getManifest(name)
    const manifestFiles = manifest.files
    const files = manifestFiles.map(file => {
      return {
        path: file.path.replace('@/', ''),
        code: this.getCode(file.path),
      }
    })
    return {
      files,
      package: manifest.package,
    }
  }

  /**
   * 根据名称数组获得这一组页面的所有代码
   * @param pageNames 名称数组
   * @return {codes} 代码数组
   */
  public async getPageList(pageNames: string[]) {
    const errorNames: string[] = []
    const pageRes: any = []
    for (const name of pageNames) {
      try {
        const manifest = await this.getManifest(name)
        const manifestFiles = manifest.files

        const files = manifestFiles.map(file => {
          return {
            path: file.path.replace('@/', ''),
            code: this.getCode(file.path),
          }
        })
        pageRes.push({
          files,
          package: manifest.package,
        })
      } catch (e) {
        errorNames.push(name)
      }
    }
    if (errorNames.length > 0) {
      this.ctx.throwBizError('PAGE_NOT_FOUND', { message: `页面${errorNames.join(',')}不存在` })
    } else {
      return pageRes
    }
  }

  /**
   * 获取所有页面名字
   * @return {string[]} 页面名称列表
   */
  public async getAllPageName() {
    return Object.keys(this.app.manifestMapping)
  }

  /**
   * 替换AT符号
   * @param filePath 文件路径
   * @return {string} 完成文件路径
   */
  private replaceAtSymbol(filePath) {
    return filePath.replace('@', this.pagePath)
  }
}
