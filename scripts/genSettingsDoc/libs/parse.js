const fs = require('fs')

const parseSettings = (filePath) => {
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
}

module.exports = { parseSettings }