<!--
 * @Author: 胡佳婷
 * @Date: 2022-10-08 10:16:32
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-31 08:30:27
 * @Description:
-->

# 一、版本日志

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
