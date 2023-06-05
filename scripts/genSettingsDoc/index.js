const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const { parseSettings } = require('./libs/parse')

const data = parseSettings(path.join(__dirname, '../../src/settings/settings.default.js'))

// 将文本写入文件
const targetPath = path.join(__dirname, '../../src/settings/doc.js')
fs.writeFileSync(
  targetPath,
`/* eslint-disable prettier/prettier */
export default ${JSON.stringify(data, null, 2).replace(/"/g, '\'')}`
)
console.log(chalk.green(`Settings文档生成成功`))