<!--
 * @Author: 马妍
 * @Date: 2022-07-25 15:58:42
 * @LastEditors: 马妍
 * @LastEditTime: 2022-07-25 17:07:50
 * @Description: 
-->
<template>
  <div class="document-preview">
    <div class="document-preview-title">
      <h1>我是文章标题文章大标题</h1>
      <div>
        <span>发布时间：2022-05-20</span>
        <span>来源：我是发布来源 </span>
        <span>其他：我是其他内容 </span>
      </div>
    </div>
    <div class="document-preview-content">
      <div class="preview-content-desc">
        <h2>一. 我是大标题</h2>
        <p>
          我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。我是正文内容。
        </p>

        <h2>二. 我是大标题我的标题可以很长（我可能还有备注）</h2>
        <p>1. 我是第二层的分级。正文内容。我是正文内容。我是正文内容。</p>
        <p>2. 我是第二层的分级。正文内容。我是正文内容。我是正文内容。我是正文内容 。</p>

        <h2>三. 我是大标题我的标题可以很长</h2>
        <p>1. 我是正文内容。我是正文内容。我是正文内容。</p>
        <div class="preview-content-paragraph">
          <p>① 我是第三层的分级。</p>
          <p>② 我是第三层的分级。</p>
          <p>③ 我是第三层的分级。</p>
        </div>
        <p>2. 我是正文内容。我是正文内容。我是正文内容。</p>
        <p>
          3. 我是正文内容，我是正文内容。我是正文内容。我是正文内容我是正文内容。我是正文内容。我是正文内容。
        </p>
      </div>
    </div>
    <div class="document-preview-content_file">
      <p>我是其他内容，我可能是一些提示文案。也许有也许没有。</p>
      <h3>2个附件：</h3>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'SimpleDocumentPreview',
})
export default class extends Vue {}
</script>
