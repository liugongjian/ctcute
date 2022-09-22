/*
 * @Author: 胡佳婷
 * @Date: 2022-07-20 10:39:14
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-07-20 13:25:34
 * @Description:
 */
import path from 'path'
import { run as genDesctiption } from '../utils/genDescription'

const srcPath = path.join(__dirname, '../../src/views/page')
const destPath = path.join(__dirname, 'pageDescription.ts')
const refName = 'pageDescription'

genDesctiption(srcPath, destPath, refName)
