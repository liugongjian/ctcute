<!--
 * @Author: 秦瑞斌
 * @Date: 2022-07-20 10:14:50
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-06 16:48:40
 * @Description:
-->
<template>
  <div>
    <p>点击附件即可下载，点击小眼睛可在新的标签页进行预览</p>
    <h3>附件-小</h3>
    <cute-appendix
      :value="value1"
      size="small"
      :url="url"
      :type="'csv'"
      @download="downloadExcel"
    ></cute-appendix>
    <cute-appendix
      :value="value2"
      :url="url"
      size="small"
      :show-eye="true"
      :type="'img'"
      @preview="downloadImg"
      @download="downloadImg"
    ></cute-appendix>
    <h3>附件-大</h3>
    <cute-appendix
      :url="url"
      :type="'file'"
      :title="title1"
      :svg-color="color1"
      :file-size="size1"
      @download="downPdf"
    ></cute-appendix>
    <cute-appendix
      size="medium"
      :url="url"
      :type="'pdf'"
      :show-eye="true"
      :svg-color="color2"
      :title="title2"
      :file-size="size2"
      :svg-name="'file-pdf-fill'"
      @preview="downPdf"
      @download="downPdf"
    ></cute-appendix>
    <cute-appendix
      size="medium"
      :url="url"
      :type="'xlsx'"
      :show-eye="true"
      :svg-color="color3"
      :title="title3"
      :file-size="size3"
      :svg-name="'file-excel-fill'"
      @preview="downloadExcel"
      @download="downloadExcel"
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
  private value1 = '组件123.csv'
  private value2 = '组件123.jpg'
  private title1 = '非常规文件，不能预览'
  private title2 = '这是一个PDF文件'
  private title3 = '这是一个超凡脱俗的EXCEL文件11111'
  private size1 = '1.3MB'
  private size2 = '1.3MB'
  private size3 = '1.3MB'
  private color1 = Variables.colorNeutral6
  private color2 = Variables.colorDangerHover
  private color3 = Variables.colorSuccessHover
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
