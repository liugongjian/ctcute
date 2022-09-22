# scaffold

## Requirements
Node >= 14.0

## 1、基础部分

- [目录说明](/docs/basics/目录说明.md)
- [设计说明](/docs/basics/设计说明.md)
- [一些约定](/docs/basics/一些约定.md)
- [编码风格](/docs/basics/编码风格.md)：描述了相关工具的使用，并提供了常用 IDE 对应插件的使用说明
- [git-message 规范](/docs/basics/git-message规范.md)：描述了 git message 的书写规范


<font color="red">**注意**</font>：由于行位分隔符选用了 lf ，window 系统下需要先关掉 Git 默认的转换规则：

```bash
git config --global core.autocrlf false
```

## 2、项目部分

- [发布流程](/docs/basics/发布流程.md)：描述了各环境发布的操作步骤

# 相关 npm 包文档

- [vue-class-component](https://class-component.vuejs.org/)：装饰器，用于支持类的语法编写 Vue 组件，官方维护
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)：在 `vue-class-component` 上增强了更多的结合 `Vue` 特性的装饰器
- [vuex-module-decorators](https://championswimmer.in/vuex-module-decorators/pages/installation.html)：使用 ts 书写 vuex
- [vue-echarts](https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md)：基于 `Echarts` 的 Vue.js 组件
