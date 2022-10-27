/*
 * @Author: 胡佳婷
 * @Date: 2022-07-20 10:39:14
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-05 09:47:28
 * @Description:
 */
import path from 'path'
import { run as genDesctiption } from '../utils/genDescription'

const srcPath = path.join(__dirname, '../../src/views/component')
const destPath = path.join(__dirname, 'componentDescription.ts')
const refName = 'componentDescription'

genDesctiption(srcPath, destPath, refName)
