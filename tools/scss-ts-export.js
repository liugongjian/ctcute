/**
 * description: 读取SCSS的变量文件，并生成:export导出变量
 * author: zhulh
 * last modified: 2023-02-28
 */

const fs = require('fs')

// 从命令行参数中获取文件路径
const filePath = process.argv[2]

// 读取文件内容
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) throw err
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
  const path = process.argv[1].substring(0, process.argv[1].lastIndexOf('/')) + '/scss-ts-export.txt'
  fs.writeFile(path, result, function (err) {
    if (err) {
      console.error(err)
    } else {
      console.log('变量生成成功')
    }
  })
})

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
