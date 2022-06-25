<template>
  <mavon-editor
    ref="md"
    :value="content"
    :subfield="false"
    default-open="preview"
    :toolbars-flag="false"
    :ishljs="true"
    :code-style="'atom-one-dark'"
    class="test"
  />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'QuickStart',
})
export default class extends Vue {
  // 表单提交状态
  private content = `
### 1. 把镜像源切换到私库[\`http://verdaccio.ctyun.xyz/\`](http://verdaccio.ctyun.xyz/)
### 2. 全局安装脚手架\`npm install -g fe-cli\`和命令行工具\`npm install -g cute-design-tools\`
### 3. 执行\`fe-cli create <projectName>\`，选择\`cute-design-template\`模板的\`master\`分支创建项目
### 4. 进入项目目录，试用\`cuted add <PageName> [optonal NewPageName]\` 生成demo页
### 5. [optional 安装依赖]，执行\`npm run serve\`，启动项目即可
`
}
</script>
<style lang="scss" scoped>
.test {
  font-size: 12px;
  color: $text-color-primary;
}
</style>
