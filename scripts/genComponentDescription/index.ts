/*
 * @Author: 胡佳婷
 * @Date: 2022-07-20 10:39:14
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-07-20 10:52:30
 * @Description:
 */
import path from 'path'
import { run as genDesctiption } from '../utils/genDescription'

const srcPath = path.join(__dirname, '../../src/components')
const destPath = path.join(__dirname, 'componentDescription.ts')
const refName = 'componentDescription'

genDesctiption(srcPath, destPath, refName)
