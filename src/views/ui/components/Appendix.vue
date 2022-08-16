<!--
 * @Author: 秦瑞斌
 * @Date: 2022-07-20 10:14:50
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-07-29 16:21:57
 * @Description:
-->
<template>
  <div>
    <p>点击附件即可下载，点击小眼睛可在新的标签页进行预览</p>
    <h3>附件-小</h3>
    <cute-appendix
      :value="value1"
      :append="false"
      :url="url"
      :type="'csv'"
      @download="downloadExcel"
    ></cute-appendix>
    <cute-appendix
      :value="value2"
      :url="url"
      :append="false"
      :show-eye="true"
      :type="'img'"
      @preview="downloadImg"
      @download="downloadImg"
    ></cute-appendix>
    <h3>附件-大</h3>
    <cute-appendix
      :append="true"
      :url="url"
      :type="'file'"
      :title="title1"
      :svg-color="color1"
      :size="size1"
      @download="downPdf"
    ></cute-appendix>
    <cute-appendix
      :append="true"
      :url="url"
      :type="'pdf'"
      :show-eye="true"
      :svg-color="color2"
      :title="title2"
      :size="size2"
      :svg-name="'file-pdf-fill'"
      @preview="downPdf"
      @download="downPdf"
    ></cute-appendix>
    <cute-appendix
      :append="true"
      :url="url"
      :type="'xlsx'"
      :show-eye="true"
      :svg-color="color3"
      :title="title3"
      :size="size3"
      :svg-name="'file-excel-fill'"
      @preview="downloadExcel"
      @download="downloadExcel"
    ></cute-appendix>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteAppendix } from '@cutedesign/appendix'
import { createImg, createPdf, createExcel } from '@/api/appendix'
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
  private value1 = '组件123.csv'
  private value2 = '组件123.jpg'
  private title1 = '非常规文件，不能预览'
  private title2 = '这是一个PDF文件'
  private title3 = '这是一个超凡脱俗的EXCEL文件11111'
  private size1 = '1.3MB'
  private size2 = '1.3MB'
  private size3 = '1.3MB'
  private color1 = '#AAA'
  private color2 = '#FF535A'
  private color3 = '#09CC6E'
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
}
</script>

<style lang="scss" scoped></style>
