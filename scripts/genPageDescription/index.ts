/*
 * @Author: 胡佳婷
 * @Date: 2022-07-15 21:02:01
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-07-18 12:31:54
 * @Description:
 */
import path from 'path'
import fsPromises from 'fs/promises'
import * as _ from 'lodash'
import { pageDesc } from './types/pageDescription'

const srcPath = path.join(__dirname, '../../src/views/page')
const ANNOTATION = /<!--(\n|.)*?-->/
const CHAR = '@'

let resArr: pageDesc[] = []

async function getSrcLists(examplePath: string) {
  const dirs = await fsPromises.readdir(examplePath)
  const isIncludes = (dir: any[] | string) => dir.includes('.DS_Store')
  if (isIncludes(dirs)) {
    const index = dirs.findIndex(dir => isIncludes(dir))
    dirs.splice(index, 1)
  }
  return dirs
}

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

async function writeIndexFile(path: string, data: string) {
  fsPromises.writeFile(path, data)
}

;(async () => {
  const lists = await getSrcLists(srcPath)
  for (const list of lists) {
    const filePath = path.resolve(srcPath, list)
    const files = await getSrcLists(filePath)
    for (const file of files) {
      if (file.endsWith('.vue')) {
        const srcFilePath = path.resolve(filePath, file)
        const content = await fsPromises.readFile(srcFilePath, 'utf-8')
        const templateArray = content.split('<template>')

        const res = getAnnotation(templateArray[0])
        if (res) {
          const fileName = file.slice(0, -4)
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
    }
  }
  console.log('outside resArr', resArr)
  const resStr = `
const pageDescription = ${JSON.stringify(resArr, null, '\t')}
export default pageDescription
`
  const destPath = path.join(__dirname, 'pageDescription.ts')
  await writeIndexFile(destPath, resStr)
  // // 格式化文件
  // // 格式化文件代码
  // spawn.sync('npx', ['--quiet', 'prettier', '--write', './**/**/*.{js,ts,vue,html}'], {
  //   stdio: 'inherit',
  //   cwd: dirPath
  // });
})()
