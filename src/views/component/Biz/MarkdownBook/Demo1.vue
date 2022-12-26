<!--
 * @Description:
 * @Author: 王月功
 * @Date: 2022-12-23 19:41:27
 * @LastEditTime: 2022-12-23 19:51:59
 * @LastEditors: 王月功
-->

<template>
  <div>
    <h3>MarkdownBook</h3>
    <md-book
      :base-url="baseUrl"
      :book-name="bookName"
      :http="http"
      height="400px"
      @copy-code-success="onCopy"
      @load-menu-fail="onMenuFail"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import MdBook from '@feta/markdown-book'
import '@feta/markdown-book/lib/index.css'
import http from '@/utils/request'

Vue.use(MdBook)

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  // book 根目录
  private baseUrl = 'https://vip.ctcdn.cn/h5/gitbook'

  bookName = 'gitbook 演示文档'

  http = http

  // 预览区代码复制成功
  private onCopy(code: string) {
    console.log(code)
    this.$message.success('复制成功')
  }

  // 菜单加载错误
  private onMenuFail(err: any) {
    console.log(err)
  }
}
</script>
<style lang="scss" scoped></style>
