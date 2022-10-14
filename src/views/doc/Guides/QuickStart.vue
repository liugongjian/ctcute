<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-10-09 14:23:19
 * @Description: 快速开始
-->
<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from '../components/CuteMavonEditor.vue'

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
### 5. 根据自身项目需求，选择是否需要集成用户权限体系，目前支持的包括自建用户权限(local)，IAM(iam)，天翼云(ctyun)三种，具体配置请参考[用户权限](/docs/userperm)
### 6. 选择主题色，目前默认为橙色，已支持蓝色主题
### 7. 进入项目目录，试用\`cuted add <PageName> [optonal NewPageName]\` 生成demo页
### 8. [optional 安装依赖]，执行\`npm run serve\`(iam用户使用npm run serve:iam，ctyun用户使用npm run serve:ctyun)，启动项目即可
### 9. [备选] 若您不需要安装全局依赖，可以跳过第二步，并使用\`npx fe-cli create<projectName>\`和\`npx cute-design-tools add\`的方式使用

## cuted工具简介
### 列出所有页面
cuted ls
### 新增页面
cuted add <PageName> [NewPageName]
### 批量新增页面
cuted madd [.cuted.json]
### 更换主题
cuted theme <themeName>

## 代码仓库
[https://gitlab.ctyuncdn.cn/ct-basic/cute-design-web.git](https://gitlab.ctyuncdn.cn/ct-basic/cute-design-web.git)
如果您没有权限，请联系胡佳婷（企业微信）帮您开通开发权限。

## 详细文档说明
[脚手架使用说明书](http://fed.ctyuncdn.cn/blog/team2/tobegrouped/hujiating/cutedesign/assets/%E8%84%9A%E6%89%8B%E6%9E%B6%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%E4%B9%A6.pdf)
`
}
</script>
