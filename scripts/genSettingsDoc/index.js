const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const { parseSettings } = require('./libs/parse')

const baseArray = parseSettings(path.join(__dirname, '../../src/settings/base.js'))
const themeArray = parseSettings(path.join(__dirname, '../../src/settings/theme.js'))
const netArray = parseSettings(path.join(__dirname, '../../src/settings/net.js'))

const data = [{
  title: 'Base',
  path: 'settings/base.js',
  list: baseArray
}, {
  title: 'Theme',
  path: 'settings/theme.js',
  list: themeArray
}, {
  title: 'Net',
  path: 'settings/net.js',
  list: netArray
}]

// 将文本写入文件
const targetPath = path.join(__dirname, '../../src/settings/settings.doc.js')
fs.writeFileSync(
  targetPath,
`/* eslint-disable prettier/prettier */
export default ${JSON.stringify(data, null, 2).replace(/"/g, '\'')}`
)
console.log(chalk.green(`Settings文档生成成功`))