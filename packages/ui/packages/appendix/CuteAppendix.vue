<template>
  <div>
    <div v-if="size === 'small'" class="cute-appendix--small">
      <svg-icon class="cute-appendix--small__link-icon" name="attachment" />
      <el-link type="primary" class="appendix-link__text" :underline="false" @click="handleDownload">
        {{ value }}
      </el-link>
      <svg-icon v-if="showEye" class="appendix-eye-icon" name="preview" @click="openPreview" />
    </div>
    <div v-else>
      <div class="cute-appendix--medium">
        <div class="cute-appendix--medium__content" @click="handleDownload">
          <svg-icon
            class="cute-appendix--medium__content__link-icon"
            :name="svgName"
            :color="svgColor"
            opacity="70%"
          />
          <div class="cute-appendix--medium__content__title">
            <p>{{ title }}</p>
            <p>{{ fileSize }}</p>
          </div>
        </div>
        <div>
          <svg-icon v-if="showEye" class="appendix-eye-icon" name="preview" @click="openPreview" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import axios from 'axios'
import * as XLSX from 'xlsx/xlsx.mjs'
@Component({
  name: 'CuteAppendix',
})
export default class extends Vue {
  @Prop({ default: 'medium' }) public size!: string
  @Prop({ default: '组件' }) public value!: string
  @Prop({ default: false }) public showEye!: boolean
  @Prop({ default: '标题1' }) public title!: string
  @Prop({ default: '1MB' }) public fileSize!: string
  @Prop({ default: 'file-fill' }) public svgName!: string
  @Prop({ default: '' }) public svgColor: string
  @Prop({ required: true }) public type: string
  @Prop({ default: '' }) public url: string
  private tableau = null
  /**
   * 下载
   */
  private handleDownload() {
    this.$emit('download')
    if (this.url) {
      switch (this.type) {
        case 'csv':
          this.downloadFile(this.url, this.value)
          break
        case 'img':
          this.downloadFile(this.url, this.value)
          break
        case 'file':
          this.downloadFile(this.url, this.title)
          break
        case 'pdf':
          this.downloadFile(this.url, this.title)
          break
        case 'xlsx':
          window.open(this.url)
          break
        default:
          break
      }
    }
  }
  /**
   * 预览
   */
  private openPreview() {
    this.$emit('preview')
    if (this.url) {
      switch (this.type) {
        case 'img':
          window.open(this.url)
          break
        case 'pdf':
          window.open(this.url)
          break
        case 'xlsx':
          this.previewExcel(this.url)
          break
        default:
          break
      }
    }
  }
  /**
   * excel预览
   */
  private async previewExcel(url: string) {
    try {
      axios
        .get(url, {
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
      ;(this as any).$message.error(e)
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
