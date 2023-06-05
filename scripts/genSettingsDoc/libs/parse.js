const fs = require('fs')

const parseSettings = (filePath) => {
  // const filePath = path.join(__dirname, '../../src/settings/base.js')
  const file = fs.readFileSync(filePath, 'utf-8')
  const commentArray = file
    .split('\n')
    .filter(line => line.trim().startsWith('//'))
    .map(line => line.replace('//', '').trim())
  
  const settings = eval(file)
  

  const keys = Object.keys(settings)
  return keys.map((key, index) => {
    return {
      name: key,
      value: settings[key],
      comment:commentArray[index],
    }
  })

  // const valueArray = stringMatch[1]
  //   .split('\n')
  //   .filter(line => line.trim() !== '' && !line.trim().startsWith('//'))
  //   .map((line, index) => {
  //     const [key] = line.split(':')
  //     const value = line.substring(line.indexOf(":") + 1).trim().slice(0, -1).replace(/\'/g, '"')
  //     return {
  //       name: key.trim(),
  //       value: value,
  //       comment:commentArray[index],
  //     }
  //   })
  //   return valueArray
}

module.exports = { parseSettings }