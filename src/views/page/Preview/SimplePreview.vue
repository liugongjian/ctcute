<!--
 * @Author: 马妍
 * @Date: 2022-07-25 15:58:42
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-08-16 14:09:47
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
      <div>
        <div>
          <cute-appendix
            :append="true"
            :type="'file'"
            title="EDR终端安全加强指引"
            size="1.3MB"
            @download="downPdf"
          ></cute-appendix>
        </div>
        <div>
          <cute-appendix
            :append="true"
            :type="'pdf'"
            :show-eye="true"
            title="这是一个PDF文件"
            size="1.3MB"
            :svg-name="'file-pdf-fill'"
            svg-color="#FF535A"
            :url="url"
            @preview="downPdf"
            @download="downPdf"
          ></cute-appendix>
        </div>
        <div>
          <cute-appendix
            value="组件123.csv"
            :textarea="false"
            :type="'csv'"
            :url="url"
            @download="downloadExcel"
          ></cute-appendix>
        </div>
        <div>
          <cute-appendix
            value="组件123.jpg"
            :textarea="false"
            :show-eye="true"
            :url="url"
            :type="'img'"
            @preview="downloadImg"
            @download="downloadImg"
          ></cute-appendix>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteAppendix } from '@cutedesign/appendix'
import { createImg, createPdf, createExcel } from '@/api/appendix'

@Component({
  name: 'SimpleDocumentPreview',
  components: { CuteAppendix },
})
export default class extends Vue {
  private url = ''

  /**
   * excel
   */
  private async downloadExcel() {
    try {
      const res = await createExcel()
      this.url = res.data.url
    } catch (e) {
      this.$message.error(e)
    }
  }

  /**
   * pdf下载
   */
  private async downPdf() {
    try {
      const res = await createPdf()
      this.url = res.data.url
    } catch (e) {
      this.$message.error(e)
    }
  }

  /**
   * 图片
   */
  private async downloadImg() {
    try {
      const res = await createImg()
      this.url = res.data.url
    } catch (e) {
      this.$message.error(e)
    }
  }
}
</script>
