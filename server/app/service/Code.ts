import { Service } from 'egg'
import fs = require('fs')
import path = require('path')
import glob = require('glob')

function generateManifestMapping(manifestList) {
  const mapping = {}
  manifestList.forEach(manifestPath => {
    const name = manifestPath.replace(/(.*\/)*([^.]+).manifest/ig, '$2')
    mapping[name] = manifestPath
  })
  return mapping
}

const pagePath = path.resolve(__dirname, '../../../src/views/page')
const manifestList: string[] = glob.sync(`${pagePath}/**/*.manifest`)
const manifestMapping = generateManifestMapping(manifestList)

/**
 * Code Service
 */
export default class Code extends Service {

  /**
   * 获得代码清单
   * @param name 模块名称
   * @return {string} 清单JSON
   */
  public async getManifest(name: string) {
    try {
      const manifestPath = manifestMapping[name]
      if (manifestPath) {
        const manifest = fs.readFileSync(manifestPath, { encoding: 'utf8' })
        return JSON.parse(manifest)
      } else {
        this.ctx.throw(500, '模块名称不存在')
      }
    } catch (e) {
      this.ctx.throw(500, '解析manifest错误，请确认是正确的JSON格式。')
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
    try {
      const manifest = await this.getManifest(name)
      const codes = manifest.map(file => {
        return {
          path: file.path.replace('@/', ''),
          code: this.getCode(file.path)
        }
      })
      console.log(codes)
      return codes
    } catch (e) {
      this.ctx.throw(500, '获取代码失败')
    }
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
