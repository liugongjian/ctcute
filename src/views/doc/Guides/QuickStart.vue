<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-28 12:12:16
 * @Description: 快速开始
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'

@Component({
  name: 'QuickStart',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = `
[[toc]]

## 快速上手

1. 把镜像源切换到私库 [\`http://verdaccio.ctcdn.cn/\`](http://verdaccio.ctcdn.cn/) 。PS：需要本地配置hosts【36.111.140.224 verdaccio.ctcdn.cn】
2. 全局安装脚手架 \`npm install -g fe-cli\` 和命令行工具 \`npm install -g cute-design-tools\` [cute-design-tools若原先已安装，请卸载后升级到最新版]
3. 执行 \`fe-cli create <projectName>\`，选择 \`cute-design-template\` 模板的 \`master\` 分支创建项目
4. **[optional 输入项目名称]**，默认的项目名称为 '天翼云前端脚手架'
5. 根据自身项目需求，选择是否需要集成用户权限体系，目前支持的包括不集成用户权限体系(none)，IAM用户(iam)，天翼云用户(ctyun)，cuted内置用户(local)si种，具体配置请参考[用户权限](/docs/userperm)
    - 如果用户类型是天翼云用户，可以选择是否集成IT埋点，默认是集成
    - 如果是IAM用户，可以输入项目代码Domain，默认是'cdn'，可后续修改
6. 选择主题色，目前默认为**白-蓝(default)**，已支持黑-蓝(dark-blue)
7. 进入项目目录，试用 \`cuted add <PageName> [optonal NewPageName]\` 生成demo页
8. **[optional 安装依赖]**，执行 \`npm run serve\` (iam用户会执行npm run serve:iam，ctyun用户会执行npm run serve:ctyun，local或none用户会执行npm run serve:local)，启动项目即可
9. **[备选]** 若您不需要安装全局依赖，可以跳过第二步，并使用 \`npx fe-cli create<projectName>\` 和 \`npx cute-design-tools add\` 的方式使用

## cuted工具简介

> 每个命令后面可使用 \`--help\` 查看详情

### 列出所有页面

\`\`\`bash
cuted ls
\`\`\`

### 新增页面

\`\`\`bash
cuted add <PageName> [NewPageName]
\`\`\`

### 批量新增页面

\`\`\`bash
cuted madd [.cuted.json]
\`\`\`

### 更换主题

\`\`\`bash
cuted theme <themeName>
\`\`\`

## [代码仓库](https://gitlab.ctyuncdn.cn/ct-basic/cute-design-web.git)

如果您没有权限，请联系胡佳婷（企业微信）帮您开通开发权限。

## 详细文档说明

[脚手架使用说明书](https://cloud.ctcdn.cn/s/9ELNBiqyW96y7Kg)
`
}
</script>
