import { Service } from 'egg'
import fs = require('fs')
import path = require('path')

/**
 * Code Service
 */
export default class Code extends Service {

  /**
   * 获得代码清单
   * @param manifestPath 代码清单列表路径
   * @return {string} 清单JSON
   */
  public async getManifest(manifestPath: string) {
    try {
      const manifest = fs.readFileSync(this.replaceAtSymbol(manifestPath), { encoding: 'utf8' })
      return JSON.parse(manifest)
    } catch (e) {
      this.ctx.throw(500, '解析manifest错误，请确认是正确的JSON格式。')
    }
  }

  /**
   * 获得代码
   * @param codePath 代码路径
   * @return {string} 代码
   */
  public async getCode(codePath: string) {
    const code = fs.readFileSync(this.replaceAtSymbol(codePath), { encoding: 'utf8' })
    return code
  }

  /**
   * 替换AT符号
   * @param filePath 文件路径
   * @return {string} 完成文件路径
   */
  private replaceAtSymbol(filePath) {
    return filePath.replace('@', path.resolve(__dirname, '../../../src'))
  }
}
