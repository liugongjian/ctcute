/**
 * description: 读取主题SCSS的变量文件, 与default样式合并后并导出，参数为主题SCSS变量路径，生成位置位于'主题SCSS变量路径/variables.scss'
 * author: zhulh
 * last modified: 2023-02-28
 */
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const scssLib = require('./libs/scss')

const themeVariables = parseThemeVariables()

const lines = parseDefaultVariables()

// 将文本写入文件
const targetPath = process.argv[2].substring(0, process.argv[2].lastIndexOf('/')) + '/variables.scss'
const fileData = lines.join('\n')
fs.writeFileSync(targetPath, fileData)
console.log(chalk.green('变量生成成功!'))
const jsExportFilePath = scssLib.generateJsExport(fileData, targetPath)
scssLib.generateTsType(fileData, targetPath)
scssLib.generateDoc(fileData, jsExportFilePath)

// 读取新主题变量
function parseThemeVariables() {
  // 从命令行参数中获取主题路径
  const filePath = process.argv[2]
  const data = fs.readFileSync(filePath, 'utf-8')
  const variableLines = data.split('\n')
  const variables = new Map()
  variableLines.forEach(variable => {
    if (variable.startsWith('$')) {
      const variableStringList = variable.split(':')
      const key = variableStringList[0]
      const value = variableStringList[1].replace(';', '')
      variables[key] = value
    }
  })
  return variables
}

// 读取默认主题变量
function parseDefaultVariables() {
  const filePath = path.join(__dirname, '../packages/ui/style/themes/default/variables.scss')
  const data = fs.readFileSync(filePath, 'utf-8')
  const variableLines = data.split('\n')
  const exports = []
  variableLines.forEach(variable => {
    if (variable.startsWith('$') && variable.includes(';')) {
      const variableStringList = variable.split(':')
      const valueStringList = variableStringList[1].split(';')
      const key = variableStringList[0]
      const comment = valueStringList[1]
      let value = ''
      if (themeVariables[key]) {
        value = themeVariables[key]
      } else {
        value = valueStringList[0]
      }
      exports.push(`${key}:${value};${comment}`)
    } else {
      exports.push(variable)
    }
  })
  return exports
}
