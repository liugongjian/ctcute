// components.json维护对外暴露的组件，key为路径(目录名)，value为export的组件名数组 或 需要直接export default的name
var Components = require('./components.json');
var fs = require('fs');
var path = require('path');
var endOfLine = require('os').EOL;
var OUTPUT_PATH = path.join(__dirname, '../dist/index.js');
var BUILD_FILE = 'index.common.js'
var sentence = []
var exportComponentNames = []

Object.entries(Components).forEach(item => {
  if (item[1]) {
    if (Array.isArray(item[1]) && item[1].length) {
      sentence.push(`import { ${item[1].join(', ')} } from './${item[0]}/${BUILD_FILE}';`)
      exportComponentNames = exportComponentNames.concat(item[1])
    }
    if (typeof item[1] == "string") {
      sentence.push(`export { default as ${item[1]} } from './${item[0]}/${BUILD_FILE}'`)
    }
  }
});
// export组件
sentence.push(`export { 
  ${exportComponentNames.join(',' + endOfLine + '  ')} 
}`)
// export default
sentence.push(`export { default } from './base/${BUILD_FILE}'`)

fs.writeFileSync(OUTPUT_PATH, sentence.join(endOfLine));
console.log('[build entry DONE]');
