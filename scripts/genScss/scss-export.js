/**
 * description: 读取SCSS的变量文件，并生成:export导出变量、ts.d文件、DOC文档
 * author: zhulh
 * last modified: 2023-02-28
 */
const fs = require('fs')
const path = require('path')
const scssLib = require('./libs/scss')

// 从命令行参数中获取文件路径
const filePath = process.argv[2] ? path.join(process.argv[2]) : path.join(__dirname, '../../packages/ui/style/themes/default/variables.scss')
const fileData = fs.readFileSync(filePath, 'utf-8')
const deprecatedFilePath = filePath.replace('variables.scss', 'variables-deprecated.scss')
const deprecatedFileData = fs.readFileSync(deprecatedFilePath, 'utf-8')

const jsExportFilePath = scssLib.generateJsExport(fileData + deprecatedFileData, filePath)
scssLib.generateTsType(fileData + deprecatedFileData, filePath)
scssLib.generateDoc(fileData, jsExportFilePath, 'variables-doc')
scssLib.generateCssVar(fileData, jsExportFilePath, 'css-vars')


// console.log(deprecatedFileData)
scssLib.generateDoc(deprecatedFileData, jsExportFilePath, 'variables-doc-deprecated')