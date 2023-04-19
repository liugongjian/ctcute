/**
 * description: 读取SCSS的变量文件，并生成:export导出变量、ts.d文件、DOC文档
 * author: zhulh
 * last modified: 2023-02-28
 */
const fs = require('fs')
const path = require('path')
const scssLib = require('./libs/scss')

// 从命令行参数中获取文件路径
const filePath = process.argv[2] || path.join(__dirname, '../packages/ui/style/themes/default/variables.scss')
const fileData = fs.readFileSync(filePath, 'utf-8')
const jsExportFilePath = scssLib.generateJsExport(fileData, filePath)
scssLib.generateTsType(fileData, filePath)
scssLib.generateDoc(fileData, jsExportFilePath)
