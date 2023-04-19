/**
 * description: 读取SCSS的变量文件，并生成SASS导出变量、变量TS类型文件、变量说明文档
 * author: zhulh
 * last modified: 2023-02-28
 */
const fs = require('fs')
const sass = require('sass')
const chalk = require('chalk')

// 生成:export导出变量
function generateJsExport(data, filePath) {
  const variables = data.split('\n')
  const exports = []
  const keys = new Set()
  variables.forEach(variable => {
    if (variable.startsWith('$')) {
      const variableStringList = variable.split(':')
      const key = toUpperCamelCase(variableStringList[0].replace('$', ''))
      if (!keys.has(key)) {
        keys.add(key)
        exports.push(`  ${key}: ${variableStringList[0]};`)
      }
    }
  })
  const result = `/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable property-no-unknown */
/* stylelint-disable property-case */
@import './variables.scss';

:export {
${exports.join('\n')}
}
`

  // 将文本写入文件
  const targetPath = filePath.substring(0, filePath.lastIndexOf('/')) + '/index.scss'
  fs.writeFileSync(targetPath, result)
  console.log(chalk.green(':export导出变量生成成功'))
  return targetPath
}

// 生成TS Type
function generateTsType(data, filePath) {
  const variables = data.split('\n')
  const exports = []
  const keys = new Set()
  variables.forEach(variable => {
    if (variable.startsWith('$')) {
      const variableStringList = variable.split(':')
      const key = toUpperCamelCase(variableStringList[0].replace('$', ''))
      if (!keys.has(key)) {
        keys.add(key)
        exports.push(`  ${key}: string;`)
      }
    }
  })
  let result = `${exports.join('\n')}`
  result = `
export interface IScssVariablesRevised {
${result}
}

export const variablesRevised: IScssVariablesRevised
export default variablesRevised
`
  // 将文本写入文件
  const targetPath = filePath.substring(0, filePath.lastIndexOf('/')) + '/index.scss.d.ts'
  fs.writeFileSync(targetPath, result)
  console.log(chalk.green('TS Type生成成功'))
}

// 生成变量Doc文档
function generateDoc(data, filePath) {
  // 解析出css值
  const scssResult = sass.compile(filePath, { style: 'compressed' })
  const regex = /:export{([^}]+)}/
  const match = scssResult.css.match(regex)
  const cssItems = match[1].split(';')
  const cssMap = new Map()
  cssItems.forEach(item => {
    const itemStringList = item.split(':')
    cssMap[itemStringList[0]] = itemStringList[1]
  })

  // 解析Variables
  const docList = []
  const variables = data.split('\n')
  variables.forEach(variable => {
    if (variable.includes('Title:')) {
      const match = variable.match(/\/\* Title: (.*); Doc: (.*).*/)
      const title = match[1]
      const doc = match[2]
      docList.push({
        title,
        doc,
        list: [],
      })
    } else if (variable.startsWith('$')) {
      const variableStringList = variable.split(':')
      const jsKey = toUpperCamelCase(variableStringList[0].replace('$', ''))
      const key = variableStringList[0]
      const valueStringList = variableStringList[1].split(';')
      const comment = valueStringList[1] || ''
      const value = cssMap[jsKey]
      const type = value.startsWith('#') ? 'color' : 'string'
      if (!comment.includes('deprecated')) {
        docList.length &&
          docList[docList.length - 1].list.push({
            name: key,
            type: type,
            value: value,
            scene: comment.replace('//', '').trim(),
          })
      }
    }
  })
  // 将文本写入文件
  const targetPath = filePath.substring(0, filePath.lastIndexOf('/')) + '/variables-doc.js'
  // eslint-disable-next-line quotes
  fs.writeFileSync(targetPath, `export default  ${JSON.stringify(docList, null, 2).replace(/"/g, "'")}`)
  console.log(chalk.green('Variables Doc生成成功'))
}

// 中划线变量转驼峰
function toUpperCamelCase(str) {
  // 去除所有空格和连字符
  // str = str.replace(/[\s-]+/g, '')
  // 将首字母转为大写
  str = str.charAt(0).toLowerCase() + str.slice(1)
  // 将连字符后的字符转为大写
  str = str.replace(/-([a-z\d])/g, function (match, char) {
    return char.toUpperCase()
  })
  return str
}

module.exports = { generateJsExport, generateTsType, generateDoc, toUpperCamelCase }
