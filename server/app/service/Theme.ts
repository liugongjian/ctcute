import { Service } from 'egg'
import fs = require('fs')
import path = require('path')

/**
 * Code Service
 */
export default class ThemeService extends Service {

  public async getThemeCodes(name: string) {
    // 主题色模版路径
    try {
      const themePath = path.resolve(__dirname, '../../../theme', name, '_variables.scss')
      return fs.readFileSync(themePath, { encoding: 'utf8' })
    } catch (e) {
      this.ctx.throwBizError('THEME_NOT_FOUND')
    }

  }
}
