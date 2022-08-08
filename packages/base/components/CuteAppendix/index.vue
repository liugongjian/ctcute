<template>
  <div>
    <div v-if="!append" class="cute-appendix">
      <svg-icon class="appendix-link-icon" name="attachment" :width="16" :height="16" />
      <el-link type="primary" class="appendix-link" @click="handleDownload"> {{ value }} </el-link>
      <svg-icon
        v-if="showEye"
        class="appendix-eye-icon"
        name="preview"
        :width="16"
        :height="16"
        @click="openPreview"
      />
    </div>
    <div v-else>
      <div class="appendix-big">
        <div class="appendix-big-item" @click="handleDownload">
          <svg-icon
            class="appendix-link-icon"
            :name="svgName"
            :color="svgColor"
            opacity="70%"
            :width="24"
            :height="24"
          />
          <div class="appendix-big-item-title">
            <p>{{ title }}</p>
            <p>{{ size }}</p>
          </div>
        </div>
        <div>
          <svg-icon
            v-if="showEye"
            class="appendix-eye-icon"
            name="preview"
            :width="16"
            :height="16"
            @click="openPreview"
          />
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
  @Prop({ default: false }) public append!: boolean
  @Prop({ default: '组件' }) public value!: string
  @Prop({ default: false }) public showEye!: boolean
  @Prop({ default: '标题1' }) public title!: string
  @Prop({ default: '1MB' }) public size!: string
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

<style lang="scss" scoped>
.cute-appendix {
  margin-top: 10px;
}

.appendix-link-icon {
  margin-right: 4px;
  color: $color-grey-3;
  vertical-align: -4px !important;
}

.appendix-eye-icon {
  margin-left: 8px;
  color: $color-grey-3;
  vertical-align: -4px !important;

  &:hover {
    color: $color-master-1;
    cursor: pointer;
  }
}

.appendix-big {
  display: flex;
  align-items: center;
  margin-top: 10px;

  &-item {
    width: 240px;
    height: 52px;
    background-color: $color-grey-11;
    display: flex;
    align-items: center;
    padding: 0 8px;

    &:hover {
      background-color: $color-master-7;
      cursor: pointer;
    }

    &-title {
      margin-left: 10px;

      p:nth-child(1) {
        max-width: 186px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-family: PingFangSC-Medium;
        font-size: 12px;
        color: $color-grey-1;
        line-height: 20px;
        font-weight: 500;
        margin: 5px 0;
      }

      p:nth-child(2) {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: $color-grey-2;
        line-height: 20px;
        font-weight: 400;
        margin: 0;
      }
    }
  }
}
</style>
