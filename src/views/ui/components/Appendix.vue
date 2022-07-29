<!--
 * @Author: 秦瑞斌
 * @Date: 2022-07-20 10:14:50
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-07-29 14:18:50
 * @Description: 
-->
<template>
  <div>
    <p>点击附件即可下载，点击小眼睛可在新的标签页进行预览</p>
    <h3>附件-小</h3>
    <cute-appendix :value="value1" :textarea="false" :type="'csv'" @download="downloadFiles"></cute-appendix>
    <cute-appendix
      :value="value2"
      :textarea="false"
      :show-eye="true"
      :type="'img'"
      @preview="openPreview"
      @download="downloadFiles"
    ></cute-appendix>
    <h3>附件-大</h3>
    <cute-appendix
      :textarea="true"
      :type="'file'"
      :title="title1"
      :size="size1"
      :svg-color="color1"
      @download="downloadFiles"
    ></cute-appendix>
    <cute-appendix
      :textarea="true"
      :type="'pdf'"
      :show-eye="true"
      :title="title2"
      :size="size2"
      :svg-name="'file-pdf-fill'"
      :svg-color="color2"
      @preview="openPreview"
      @download="downloadFiles"
    ></cute-appendix>
    <cute-appendix
      :textarea="true"
      :type="'xlsx'"
      :show-eye="true"
      :title="title3"
      :size="size3"
      :svg-name="'file-excel-fill'"
      :svg-color="color3"
      @preview="openPreview"
      @download="downloadFiles"
    ></cute-appendix>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { CuteAppendix } from '@cutedesign/base'
import { createImg, createPdf, createExcel } from '@/api/appendix'
import axios from 'axios'
import * as XLSX from 'xlsx/xlsx.mjs'
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
    updateTime: '2022.07.19',
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
  private tableau = null
  private openPreview(type: string) {
    switch (type) {
      case 'img':
        this.getImg()
        break
      case 'pdf':
        this.getPdf()
        break
      case 'xlsx':
        this.previewExcel()
        break
      default:
        break
    }
  }
  private downloadFiles(type: string) {
    console.log(type, 'ttttt')
    switch (type) {
      case 'csv':
        this.downImg(this.value1)
        break
      case 'img':
        this.downImg(this.value2)
        break
      case 'file':
        this.downPdf(this.title1)
        break
      case 'pdf':
        this.downPdf(this.title2)
        break
      case 'xlsx':
        this.getExcel()
        break
      default:
        break
    }
  }
  /**
   * 获取图片
   */
  private async getImg() {
    try {
      const res = await createImg()
      this.url = res.data.url
      window.open(this.url)
    } catch (e) {
      this.$message.error(e)
    }
  }
  /**
   * pdf预览
   */
  private async getPdf() {
    try {
      const res = await createPdf()
      this.url = res.data.url
      window.open(this.url)
    } catch (e) {
      this.$message.error(e)
    }
  }
  /**
   * excel预览
   */
  private async previewExcel() {
    try {
      const res = await createExcel()
      this.url = res.data.url
      axios
        .get(this.url, {
          responseType: 'arraybuffer', // 设置响应体类型为arraybuffer
        })
        .then(({ data }) => {
          const workbook = XLSX.read(new Uint8Array(data), { type: 'array' }) // 解析数据
          const worksheet = workbook.Sheets[workbook.SheetNames[0]] // workbook.SheetNames 下存的是该文件每个工作表名字,这里取出第一个工作表
          this.tableau = XLSX.utils.sheet_to_html(worksheet) // 渲染
          const win = window.open() as any //打开新的空白窗口
          win.document.write(`${this.tableau}`) //在新窗口中输出提示信息
          win.document.querySelector('table').setAttribute('border', '1')
          win.document.querySelector('table').setAttribute('cellspacing', '0')
          win.focus() //让原窗口获取焦点
        })
    } catch (e) {
      this.$message.error(e)
    }
  }
  /**
   * pdf下载
   */
  private async downPdf(title: string) {
    try {
      const res = await createPdf()
      this.url = res.data.url
      this.downloadFile(this.url, title)
    } catch (e) {
      this.$message.error(e)
    }
  }
  /**
   * 图片下载
   */
  private async downImg(title: string) {
    try {
      const res = await createImg()
      this.url = res.data.url
      this.downloadFile(this.url, title)
    } catch (e) {
      this.$message.error(e)
    }
  }
  /**
   * excel下载
   */
  private async getExcel() {
    try {
      const res = await createExcel()
      this.url = res.data.url
      window.open(this.url)
    } catch (e) {
      this.$message.error(e)
    }
  }
  /**
   * 返回文件地址，下载文件到本地
   * @param {string} fileUrl 返回的文件地址
   * @param {string} fileName  文件名称，默认当前时间戳
   */
  private downloadFile(fileUrl, fileName = new Date().valueOf().toString()) {
    fetch(fileUrl).then(res =>
      res.blob().then(blob => {
        const a = document.createElement('a')
        const url = window.URL.createObjectURL(blob)
        a.href = url
        a.download = fileName
        a.click()
        window.URL.revokeObjectURL(url)
      })
    )
  }
}
</script>

<style lang="scss" scoped></style>
