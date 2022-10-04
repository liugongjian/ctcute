/*
 * @Author: 胡佳婷
 * @Date: 2022-07-15 21:02:01
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-07-20 13:07:11
 * @Description:
 */
import path from 'path'
import fs from 'fs-extra'
import * as _ from 'lodash'
import { Description } from '../types/Description'

const ANNOTATION = /<!--(\n|.)*?-->/
const CHAR = '@'

let resArr: Description[] = []

async function getSrcLists(dir, fileList: string[] = []) {
  const files = await fs.readdir(dir)
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const stat = await fs.stat(path.join(dir, file))
    if (stat.isDirectory()) {
      fileList = await getSrcLists(path.join(dir, file), fileList)
    } else {
      if (file.endsWith('.vue')) {
        fileList.push(path.join(dir, file))
      }
    }
  }
  return fileList
}

// ; (async () => {
//   const test = await getSrcLists(path.join(__dirname, '../../src/components'))
//   console.log(test)
// })()

function cacheMap(comments: string[]) {
  const map = new Map<string, Set<string>>()
  const reg = /^@([a-zA-Z]*):/
  comments.forEach(comment => {
    const regComment = reg.exec(comment)
    if (_.isEmpty(regComment)) return
    const readyComment = comment.replace(reg, '')
    const key = ((regComment as any[])[0] as string).trim().replace(CHAR, '')
    const mapValue = map.get(key)
    if (mapValue) {
      mapValue.add(readyComment)
      return
    }
    const set = new Set<string>()
    set.add(readyComment)
    map.set(key, set)
  })

  return map
}

function getQuery(comment: string) {
  comment = comment.replace(/\*\/$/, '')
  let splitComment = comment.split(CHAR)
  splitComment = splitComment.slice(1, splitComment.length).map((val, index) => {
    let value = (CHAR + val.replace(/((\* $)|(\* ))/gm, '')).trim()
    if (index === splitComment.length - 2) {
      value = value.split('\n')[0]
    }
    return value
  })
  return cacheMap(splitComment)
}

function getAnnotation(content: string) {
  const execContent = ANNOTATION.exec(content)
  // console.log('===execContent===', execContent)
  if (_.isEmpty(execContent)) return
  const comment = (execContent as any[])[0]
  return getQuery(comment)
}

function getLastPath(file: string, srcPath: string) {
  const splitStrArr = srcPath.split('src/')
  const splitStr = '/src/' + splitStrArr[splitStrArr.length - 1] + '/'
  // const splitFilePath = file.split('/src/views/page/')
  const splitFilePath = file.split(splitStr)
  return splitFilePath[splitFilePath.length - 1]
}

async function writeIndexFile(path: string, data: string) {
  fs.writeFile(path, data)
}

export async function run(srcPath: string, destPath: string, refName: string) {
  const files = await getSrcLists(srcPath)
  for (const fullFile of files) {
    // const srcFilePath = path.resolve(filePath, file)
    const file = fullFile.slice(fullFile.lastIndexOf('/') + 1)
    const content = await fs.readFile(fullFile, 'utf-8')
    const templateArray = content.split('<template>')

    const res = getAnnotation(templateArray[0])
    if (res) {
      let fileName = file.slice(0, -4)
      // 如果是index，则使用目录名
      if (fileName === 'index') {
        fileName = getLastPath(fullFile, srcPath)
      }
      let strTmp = ''
      for (let [key, value] of res.entries()) {
        strTmp += `${key} ${[...value].join('')}\n`
      }
      resArr.push({
        name: fileName,
        descriptionInfo: strTmp,
      })
    }
  }
  console.log('outside resArr', resArr)
  const resStr = `
const ${refName} = ${JSON.stringify(resArr, null, '\t')}
export default ${refName}
`
  await writeIndexFile(destPath, resStr)
}
