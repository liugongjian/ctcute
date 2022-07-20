<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-07-20 13:24:16
 * @Description: 快速开始
-->
<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from './components/CuteMavonEditor.vue'

@Component({
  name: 'QuickStart',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = `
## 快速上手
### 1. 把镜像源切换到私库[\`http://verdaccio.ctcdn.cn/\`](http://verdaccio.ctcdn.cn/)。PS：需要本地配置hosts【36.111.140.224 verdaccio.ctcdn.cn】
### 2. 全局安装脚手架\`npm install -g fe-cli\`和命令行工具\`npm install -g cute-design-tools\`
### 3. 执行\`fe-cli create <projectName>\`，选择\`cute-design-template\`模板的\`master\`分支创建项目
### 4. [optional 输入项目名称]，默认的项目名称为'天翼云前端脚手架'
### 5. 根据自身项目需求，选择是否需要集成IAM或者ctcloud，或者都不需要
### 6. 进入项目目录，试用\`cuted add <PageName> [optonal NewPageName]\` 生成demo页
### 7. [optional 安装依赖]，执行\`npm run serve\`，启动项目即可
### 8. [备选] 若您不需要安装全局依赖，可以跳过第二步，并使用\`npx fe-cli create\`和\`npx cute-design-tools add\`的方式使用

## cuted工具简介
### 列出所有页面
cuted ls
### 新增页面
cuted add <PageName> [NewPageName]
### 批量新增页面
cuted madd [.cuted.json]

## 代码仓库
[https://gitlab.ctyuncdn.cn/ct-basic/cute-design-web.git](https://gitlab.ctyuncdn.cn/ct-basic/cute-design-web.git)
如果您没有权限，请联系胡佳婷（企业微信）帮您开通开发权限。
`
}
</script>
