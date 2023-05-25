<!--
 * @Author: 秦瑞斌
 * @Date: 2022-07-20 10:14:50
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-25 11:24:09
 * @Description:
-->
<template>
  <div>
    <p>点击附件即可下载，点击右侧icon可在新的标签页进行预览</p>
    <h3>附件-小</h3>
    <cute-appendix :title="smallTitle1" size="small" :url="imageUrl"></cute-appendix>
    <cute-appendix
      :title="smallTitle2"
      :url="imageUrl"
      size="small"
      :show-preview="true"
      :type="'img'"
    ></cute-appendix>
    <h3>附件-大</h3>
    <cute-appendix :url="pdfUrl" :type="'file'" :title="title1" :svg-color="color1"></cute-appendix>
    <cute-appendix
      size="medium"
      :url="pdfUrl"
      :type="'pdf'"
      :show-preview="true"
      :svg-color="color2"
      :title="title2"
      svg-name="file-pdf-fill"
    ></cute-appendix>
    <cute-appendix
      size="medium"
      :url="excelUrl"
      :type="'xlsx'"
      :show-preview="true"
      :svg-color="color3"
      :title="title3"
      svg-name="file-excel-fill"
    ></cute-appendix>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteAppendix } from '@cutedesign/ui'
import { createImg, createPdf, createExcel } from '@/api/appendix'
import Variables from '@cutedesign/ui/style/themes/default/index.scss'

@Component({
  name: 'Appendix',
  components: { CuteAppendix },
})
export default class extends Vue {
  public static title = {
    zh: '附件',
    en: 'Appendix',
  }
  public static description = {
    maintainer: '秦瑞斌',
    version: 'v1.0',
    updateTime: '2022.07.29',
  }
  private smallTitle1 = '小附件1'
  private smallTitle2 = '小附件2'
  private title1 = '非常规文件，不能预览'
  private title2 = '这是一个PDF文件'
  private title3 = '这是一个超凡脱俗的EXCEL文件11111'
  private color1 = Variables.colorNeutral6
  private color2 = Variables.colorDangerHover
  private color3 = Variables.colorSuccessHover
  private pdfSize = ''
  private excelSize = ''
  private pdfUrl = ''
  private excelUrl = ''
  private imageUrl = ''

  mounted() {
    this.getExcel()
    this.getImg()
    this.getPdf()
  }
  /**
   * excel
   */
  private async getExcel() {
    try {
      const res = await createExcel()
      this.excelUrl = res.data.url
      this.excelSize = res.data.size
    } catch (e) {
      this.$message.error(e)
    }
  }
  /**
   * 图片
   */
  private async getImg() {
    try {
      const res = await createImg()
      this.imageUrl = res.data.url
    } catch (e) {
      this.$message.error(e)
    }
  }
  /**
   * pdf下载
   */
  private async getPdf() {
    try {
      const res = await createPdf()
      this.pdfUrl = res.data.url
      this.pdfSize = res.data.size
    } catch (e) {
      this.$message.error(e)
    }
  }
}
</script>

<style lang="scss" scoped></style>
