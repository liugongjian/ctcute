<template>
  <div>
    <div style="margin-bottom: 10px">
      <el-button size="small" @click="submitUpload">手动触发上传</el-button>
      <el-button size="small" @click="abortUpload">手动暂停上传</el-button>
      <el-button size="small" @click="clearFiles">清除所有文件</el-button>
    </div>
    <s3-upload
      ref="uploadRef"
      class="drag-uploader"
      drag
      :s3-client-config="s3ClientConfig"
      :s3-upload-config="s3UploadConfig"
      :limit="100"
      :multiple="true"
      :auto-upload="false"
      :file-list="fileList"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      :on-remove="onRemove"
      :on-exceed="onExceed"
      :on-success="onSuccess"
      :on-error="onError"
      :on-change="onChange"
    >
      <svg-icon name="container" class="el-icon-upload" />
      <div class="el-upload__text">
        <b>点击或将文件拖拽到这里上传</b>
        <div>示例关闭了自动上传，请点击按钮手动触发上传</div>
      </div>
    </s3-upload>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import S3Upload from '@cutedesign/s3-upload'
import '@cutedesign/s3-upload/dist/s3-upload.css'

Vue.use(S3Upload)

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  @Ref('uploadRef')
  private uploadRef: S3Upload

  // 文件列表
  private fileList = []

  // S3相关配置
  private s3ClientConfig = {
    endpoint: 'https://gdoss.xstore.ctyun.cn/',
    region: 'default',
    credentials: {
      accessKeyId: 'pNTuGYDCnVx1MwDIv6aM',
      secretAccessKey: 'AYDYgTg7rC4eRqU2bHP9nqdUG2LrX8LpO9DltUOZ',
    },
  }

  private s3UploadConfig(file) {
    return {
      Bucket: 'xiaoxintest5',
      Key: `${file.name}`,
      parallelChunkCount: 2, // 切片并发上传的个数
    }
  }

  private submitUpload() {
    this.uploadRef.submit()
  }

  private abortUpload() {
    this.uploadRef.abort()
  }

  private clearFiles() {
    this.uploadRef.clearFiles()
  }

  private onSuccess(file, fileList) {
    console.log('>>>>> onSuccess', file, fileList)
  }

  private onError(file, fileList) {
    console.log('>>>>> onError', file, fileList)
  }

  private onRemove(file, fileList) {
    console.log('>>>> omRemove', file, fileList)
  }

  private beforeRemove(file, fileList) {
    console.log('>>>>> beforeRemove', file, fileList)
    return this.$confirm(`确定移除 ${file.name}？`)
  }

  private beforeUpload(file) {
    console.log('>>>>> beforeupload', file)
    return true
  }

  private onChange(file, fileList) {
    console.log('>>>> onChange', file, fileList)
  }

  private onExceed(file, fileList) {
    console.log('>>>> onExceed', file, fileList)
  }
}
</script>
