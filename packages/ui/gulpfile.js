/* eslint-disable prettier/prettier */
'use strict'

const { series, src, dest } = require('gulp')
// tag.scss使用了内置模块@use 'sass:color'，必须使用dart-sass
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const clean = require('gulp-clean')
const replace = require('gulp-replace')
const fs = require('fs')
const path = require('path')

const getThemeChalkPath = () => {
  try {
    fs.statSync(path.join(__dirname, './node_modules/element-ui'))
    return './node_modules/element-ui/packages/theme-chalk'
  } catch (error) {}
  try {
    fs.statSync(path.join(__dirname, '../../node_modules/element-ui'))
    return '../../node_modules/element-ui/packages/theme-chalk'
  } catch (error) {}
  return ''
}

// 以下是theme包全局样式
const scssCutedFiles = [
  './style/element-variables.scss', // element-variables.scss编译需要替换element-ui路径变量，所以不能放在index.scss里，不然无法读取就无法替换
  './style/index.scss',
]

// 编译scss需要正确路径，把variables.scss提取到根目录; path是路径，theme是default or dark
function extractVariablesScss(path, theme) {
  return (
    src([`./style/themes/${path}/variables.scss`])
      // 替换palette的路径
      .pipe(replace("@import 'palette'", `@import './themes/${path}/palette'`))
      // 替换variables-deprecated的路径
      .pipe(replace("@import 'variables-deprecated'", `@import './themes/${path}/variables-deprecated'`))
      .pipe(rename(`variables-${theme}.scss`))
      .pipe(dest('./style'))
  )
}

// 编译cuted scss
function compileCutedScss(theme) {
  return (
    src([`./style/variables-${theme}.scss`, './style/_mixins.scss'].concat(scssCutedFiles))
      .pipe(concat(`./cuted-${theme}.scss`))
      // 要把element-variables.scss从index.scss抽取出来做两次replace，才能正确编译
      .pipe(replace('~element-ui/lib/theme-chalk/fonts', 'fonts'))
      // gulp不认识~，替换为项目根目录下node_modules的element-ui
      .pipe(replace('~element-ui/packages/theme-chalk/src/index', `${getThemeChalkPath()}/src/index`))
      .pipe(sass.sync())
      .pipe(
        autoprefixer({
          browsers: ['ie > 9', 'last 2 versions'],
          cascade: false,
        })
      )
      .pipe(cleanCSS())
      .pipe(rename(`cuted-${theme}.css`))
      .pipe(dest('./lib'))
  )
}

// iconfont.css和bahnschrift.css加进去
function concatCSS(theme) {
  return src(['./fonts/iconfont.css', './fonts/bahnschrift.css', `./lib/cuted-${theme}.css`])
    .pipe(concat(`${theme == 'default' ? 'index.css' : 'index.' + theme + '.css'}`))
    .pipe(cleanCSS())
    .pipe(dest('./lib'))
}

// copy elementui font到lib目录
function copyfontElementUI() {
  return src(`${getThemeChalkPath()}/src/fonts/**`).pipe(dest('./lib/fonts'))
}

// 拷贝字体文件
function copyfontLocal() {
  return src([
    './fonts/*.eot',
    './fonts/*.ttf',
    './fonts/*.woff',
    './fonts/*.woff2',
    './fonts/*.svg',
    './fonts/*.json',
  ]).pipe(dest('./lib'))
}

function cleanup(theme) {
  return src([`./lib/cuted-${theme}.css`, `./style/variables-${theme}.scss`], { read: false }).pipe(
    clean({ force: true })
  )
}

// 合并为一个scss用于定制主题(包括颜色变量)
function mergeSCSS(path, theme) {
  return (
    src(
      [`./style/themes/${path}/variables.scss`, './style/_mixins.scss']
        .concat(scssCutedFiles)
        .concat(['./fonts/iconfont.css', './fonts/bahnschrift.css'])
    )
      .pipe(concat(`${theme == 'default' ? 'index.scss' : 'index.' + theme + '.scss'}`))
      // 替换palette的路径
      .pipe(replace("@import 'palette'", `@import '../style/themes/${path}/palette'`))
      // 替换variables-deprecated的路径
      .pipe(
        replace("@import 'variables-deprecated'", `@import '../style/themes/${path}/variables-deprecated'`)
      )
      // 替换iconfont.css和bahnschrift.css中的字体路径
      .pipe(replace("url('bahnschrift", "url('~@cutedesign/ui/lib/bahnschrift"))
      .pipe(replace("url('iconfont", "url('~@cutedesign/ui/lib/iconfont"))
      // 替换css/index.scss里的相对路径
      .pipe(replace("@import './", "@import '../style/"))
      .pipe(dest('./lib'))
  )
}

// 编译element-override.scss直接输出css，给非scss项目使用，用于覆盖
function compileElementOverrideScss() {
  return (
    src([
      './style/variables-default.scss',
      './style/_mixins.scss',
      './style/element-variables.scss',
      './style/element-override.scss',
    ])
      .pipe(concat('./cute-element-override.scss'))
      // element-variables.scss编译需要替换element-ui路径变量，所以需要单独引用
      .pipe(replace("@import './themes/default/variables.scss';", ''))
      .pipe(replace("@import './mixins.scss';", ''))
      .pipe(replace("@import './element-variables.scss';", ''))
      // 要把element-variables.scss单独抽取出来做两次replace，才能正确编译
      .pipe(replace('~element-ui/lib/theme-chalk/fonts', 'fonts'))
      // gulp不认识~，替换为项目根目录下node_modules的element-ui
      .pipe(replace('~element-ui/packages/theme-chalk/src/index', `${getThemeChalkPath()}/src/index`))
      .pipe(sass.sync())
      .pipe(
        autoprefixer({
          browsers: ['ie > 9', 'last 2 versions'],
          cascade: false,
        })
      )
      .pipe(cleanCSS())
      .pipe(rename('cute-element-override.css'))
      .pipe(dest('./lib'))
  )
}

// 组合构建dark和default样式
// theme由 类型(dark or ligt) + 颜色(orange or blue)组合而成，default默认是light_blue
const buildDefaultCss = series(
  () => extractVariablesScss('default', 'default'),
  () => compileCutedScss('default'),
  () => concatCSS('default')
)
const buildDarkBlueCss = series(
  () => extractVariablesScss('dark/blue', 'dark_blue'),
  () => compileCutedScss('dark_blue'),
  () => concatCSS('dark_blue')
)

const mergeDefaultScss = series(() => mergeSCSS('default', 'default'))
const mergeDarkBlueScss = series(() => mergeSCSS('dark/blue', 'dark_blue'))

const cleanFiles = series(
  () => cleanup('default'),
  () => cleanup('dark_blue')
)

exports.build = series(
  buildDefaultCss,
  buildDarkBlueCss,
  copyfontElementUI,
  copyfontLocal,
  mergeDefaultScss,
  mergeDarkBlueScss,
  compileElementOverrideScss,
  cleanFiles
)
