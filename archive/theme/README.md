<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-08 10:16:32
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-01 17:27:09
 * @Description:
-->

# 一、版本日志

## v1.1.4

- 新增
  - ColorPicker 组件样式
  - $margin-large: 20px 变量
- 修改
  - alert 组件去除 border
  - 侧边菜单栏样式修改，$sidebar-width 调整为 240px
  - 头部 logo 图表和文字兼容
  - .el-form--inline .el-form-item 重置为$margin-large
  - 调整日期选择器 sidebar 宽度
  - 去掉无关的强制样式
  - 修复 tree 在 windows 上不兼容的问题
  - 修复 select 在 win 下被遮挡边框的 bug

## v1.1.3

- 新增
  - vxe-table 组件样式
- 修改
  - 滚动条样式
  - dark 模式遗留 bug

## v1.1.2(deprecated)

- 修改
  - dark 模式遗留 bug

## v1.1.1(deprecated)

- 修改
  - 规范颜色变量
  - 修复 Upload 组件样式问题
  - 修复 cascade 样式问题

## v1.1.0(deprecated)

- 修改
  - dark 模式遗留 bug

## v1.0.9(deprecated)

- 新增
  - 定义了几个新的颜色变量
- 修改
  - 为支持 dark 模式，把以前默认白色背景的一些组长使用新的颜色变量定义

## v1.0.8

- 修改
  - 修复 small-input 导致的 form 样式问题
  - 修复 slider 样式问题

## v1.0.7

- 修改
  - 修复 form 表单错误提示的样式

## v1.0.6

- 新增
  - 详情页返回按钮样式
  - input 为 small 的样式
- 修改
  - slider 中 input 的样式
  - 嵌套表格的下拉箭头样式改成统一的三角形

## v1.0.5

- 新增
  - 侧边菜单支持增加 icon，如果定义了路由的 meta->icon 属性，则显示 icon，其中 icon 为 svg 的 name
- 修改
  - 修复表单中 tips 和 error 的间距

## v1.0.4

- 修改
  - 修复写死颜色变量的地方，全部改成颜色变量
  - 修复 textarea 在 disable 状态时 border 颜色不对的问题

## v1.0.3

- 修改
  - 拆分\_variables.scss 中的变量到\_variables-cute.scss 中
  - 修复 page/\_form.scss 中的 flex 样式 warning

## v1.0.2

- 修改
  - 修复 selectedButton 禁用样式
  - 修复 WarnDialog 中 button hover 样式

## v1.0.1

- 新增
  - 日期选择框带快捷选项的样式覆盖
  - 表头进行筛选的 table 的样式覆盖
- 修改
  - 无
- 删除
  - 无

## v1.0.0

第一个基础版本

# 二、项目说明

后台项目的全局样式，主要有定义了以下内容：

- 全局样式变量
- 根据天翼云风格覆写了 element-ui 的样式
- 定义了标准页的一些公共样式
