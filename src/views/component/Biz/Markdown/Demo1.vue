<!--
 * @Author: 王月功
 * @Date: 2022-11-29 22:03:32
 * @LastEditors: 王月功
 * @LastEditTime: 2022-11-30 01:07:28
 * @Description:
-->
<template>
  <div>
    <h3>MdEditor</h3>
    <md-editor ref="mdEditor" v-model="mdStr" :upload-image="uploadImage" @copy-code-success="onCopy" />

    <h3>MdPreview</h3>
    <md-preview :text="mdStr" height="300px" @copy-code-success="onCopy" />
  </div>
</template>
<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import MdEditor, { MdPreview } from '@feta/markdown'

Vue.use(MdEditor)
Vue.use(MdPreview)

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  @Ref('mdEditor') private mdEditor: MdEditor

  // md 编辑器的内容（解析前）
  private mdStr =
    "[[toc]]\n\n# 标题1\n\n## 标题2\n\n### 标题3\n\n**粗体**\n\n*斜体*\n\n~~删除线~~\n\n> 引用\n\n- 无序列表1\n- 无序列表2\n\n1. 有序列表a\n2. 有序列表b\n\n表格：\n|column1|column2|column3|\n|-|-|-|\n|content1|content2|content3|\n\n分割线： ------------------------------------\n\n链接： [链接](https://www.ctyun.cn)\n\n图片： ![Description](https://www.ctyun.cn/portal/_nuxt/img/logo.red.3211b23.svg)\n\n代码块：基于 [prismjs](https://prismjs.com/) 实现，目前支持 `js、jsx、java、go、php、python、ruby、json、yaml、shell、sql、mongodb、regex、nginx、docker、http、uri、css、sass、scss、less`。\n```js\nimport Vue from 'vue';\n```\n"

  // md 上传图片
  private async uploadImage() {
    // ... 调用后端服务上传，成功后获取图片地址 url
    return Promise.resolve({
      url: 'pathUrl',
      desc: 'file.name',
    })
  }

  // 插入链接
  private insertChildPage(data) {
    this.mdEditor.execCommand('link', {
      link: data.path,
      desc: data.name,
      download: data.name,
    })
  }

  // 预览区代码复制成功
  private onCopy() {
    this.$message.success('复制成功')
  }

  // 获取解析后的 htmlstr
  private getMdHtml() {
    return this.mdEditor.getHtml()
  }
}
</script>
<style lang="scss" scoped></style>
