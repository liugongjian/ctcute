/**
 * description: 构建输出css vars，勿删
 */
const fs = require('fs')
const path = require('path')
const scssLib = require('./genScss/libs/scss')

function buildVars(theme) {
  const filePath = path.join(__dirname, `../packages/ui/style/themes/${theme}/variables.scss`)
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const deprecatedFilePath = filePath.replace('variables.scss', 'variables-deprecated.scss')
  const deprecatedFileData = fs.readFileSync(deprecatedFilePath, 'utf-8')

  const jsExportFilePath = scssLib.generateJsExport(fileData + deprecatedFileData, filePath)
  scssLib.generateCssVar(fileData, jsExportFilePath, 'css-vars')
}

buildVars('default')
buildVars(`dark${path.sep}blue`)
