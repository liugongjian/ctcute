import { Service } from 'egg'
import fs = require('fs')
import path = require('path')

/**
 * Scss Service
 */
export default class ScssService extends Service {
  public async genScssTheme(code) {
    try {
      const themeVariables = this.parseThemeVariables(code)
      const themePath = path.resolve(__dirname, '../../../packages/ui/style/themes/default/variables.scss')
      const data = fs.readFileSync(themePath, { encoding: 'utf8' })
      const variableLines = data.split('\n')
      const exports: any = []
      variableLines.forEach(variable => {
        if (variable.startsWith('$') && variable.includes(';')) {
          const variableStringList = variable.split(':')
          const valueStringList = variableStringList[1].split(';')
          const key = variableStringList[0]
          let value = valueStringList[0].replace('!default', '').trim()
          if (themeVariables[key]) {
            value = themeVariables[key]
          }
          if (themeVariables[key] || themeVariables[value]) {
            exports.push(`${key}: ${value};`)
          }
        }
      })
      return exports.join('\n')
    } catch (e) {
      this.ctx.throwBizError('THEME_NOT_FOUND')
    }
  }

  private parseThemeVariables(code) {
    const compressed = code.replaceAll('\n', '')
    const variableLines = compressed.split(';')
    const variables = new Map()
    variableLines.forEach(variable => {
      if (variable.startsWith('$')) {
        const variableStringList = variable.split(':')
        const key = variableStringList[0]
        const value = variableStringList[1].trim()
        variables[key] = value
      }
    })
    return variables
  }
}
