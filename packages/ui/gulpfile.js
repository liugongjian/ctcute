'use strict';

const { series, src, dest } = require('gulp');
// tag.scss使用了内置模块@use 'sass:color'，必须使用dart-sass
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const replace = require('gulp-replace');
const fs = require('fs');
const path = require('path');

const getThemeChalkPath = () => {
  try {
    fs.statSync(path.join(__dirname, './node_modules/element-ui'))
    return './node_modules/element-ui/packages/theme-chalk'
  } catch (error) { }
  try {
    fs.statSync(path.join(__dirname, '../../node_modules/element-ui'))
    return '../../node_modules/element-ui/packages/theme-chalk'
  } catch (error) { }
  return ''
}

// 以下是theme包全局样式
const scssCutedFiles = [
  './style/element-variables.scss', // element-variables.scss编译需要替换element-ui路径变量，所以不能放在index.scss里，不然无法读取就无法替换
  './style/index.scss',
]

// 编译scss需要正确路径，把variables.scss提取到根目录
function extractVariablesScss() {
  return src(['./style/themes/default/variables.scss'])
    // 替换palette的路径
    .pipe(replace("@import 'palette'", "@import './themes/default/palette'"))
    .pipe(rename('variables-cute.scss'))
    .pipe(dest('./style'));
}

// 编译cuted scss
function compileCutedScss() {
  return src(['./style/variables-cute.scss', './style/_mixins.scss'].concat(scssCutedFiles))
    .pipe(concat('./cuted.scss'))
    // 要把element-variables.scss从index.scss抽取出来做两次replace，才能正确编译
    .pipe(replace('~element-ui/lib/theme-chalk/fonts', 'fonts'))
    // gulp不认识~，替换为项目根目录下node_modules的element-ui
    .pipe(replace('~element-ui/packages/theme-chalk/src/index', `${getThemeChalkPath()}/src/index`))
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename('cuted.css'))
    .pipe(dest('./lib'));
}

// iconfont.css和bahnschrift.css加进去
function concatCSS() {
  return src(['./fonts/iconfont.css', './fonts/bahnschrift.css', './lib/cuted.css'])
    .pipe(concat('index.css'))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}

// copy elementui font到lib目录
function copyfontElementUI() {
  return src(`${getThemeChalkPath()}/src/fonts/**`)
    .pipe(dest('./lib/fonts'));
}

// 拷贝字体文件
function copyfontLocal() {
  return src(['./fonts/*.eot', './fonts/*.ttf', './fonts/*.woff', './fonts/*.woff2', './fonts/*.svg', './fonts/*.json'])
    .pipe(dest('./lib'));
}

function cleanup() {
  return src(['./lib/cuted.css', './style/variables-cute.scss'], { read: false })
    .pipe(clean({ force: true }));
}

// 合并为一个scss用于定制主题(包括颜色变量)
function mergeSCSS() {
  return src(['./style/themes/default/variables.scss', './style/_mixins.scss'].concat(scssCutedFiles).concat(['./fonts/iconfont.css', './fonts/bahnschrift.css']))
    .pipe(concat('index.scss'))
    // 替换palette的路径
    .pipe(replace("@import 'palette'", "@import '../style/themes/default/palette'"))
    // 替换iconfont.css和bahnschrift.css中的字体路径
    .pipe(replace("url('bahnschrift", "url('~@cutedesign/ui/lib/bahnschrift"))
    .pipe(replace("url('iconfont", "url('~@cutedesign/ui/lib/iconfont"))
    // 替换css/index.scss里的相对路径
    .pipe(replace("@import './", "@import '../style/"))
    .pipe(dest('./lib'));
}

// 编译element-override.scss直接输出css，给非scss项目使用，用于覆盖
function compileElementOverrideScss() {
  return src(['./style/variables-cute.scss', './style/_mixins.scss', './style/element-variables.scss', './style/element-override.scss'])
    .pipe(concat('./cute-element-override.scss'))
    // element-variables.scss编译需要替换element-ui路径变量，所以需要单独引用
    .pipe(replace("@import './themes/default/variables.scss';", ""))
    .pipe(replace("@import './mixins.scss';", ""))
    .pipe(replace("@import './element-variables.scss';", ""))
    // 要把element-variables.scss单独抽取出来做两次replace，才能正确编译
    .pipe(replace('~element-ui/lib/theme-chalk/fonts', 'fonts'))
    // gulp不认识~，替换为项目根目录下node_modules的element-ui
    .pipe(replace('~element-ui/packages/theme-chalk/src/index', `${getThemeChalkPath()}/src/index`))
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename('cute-element-override.css'))
    .pipe(dest('./lib'));
}

exports.build = series(extractVariablesScss, compileCutedScss, concatCSS, copyfontElementUI, copyfontLocal, mergeSCSS, compileElementOverrideScss, cleanup);