<!--
 * @Author: 马妍
 * @Date: 2022-07-19 16:32:05
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-05-28 08:51:27
 * @Description:
-->
<template>
  <div class="upload-demo">
    <h3>文件上传-基础按钮</h3>
    <div style="width: 320px">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
      >
        <el-button icon="upload">上传文件</el-button>
        <div slot="tip" class="el-upload__tip">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>
      </el-upload>
    </div>
    <h3>文件上传-输入框</h3>
    <div style="width: 320px">
      <el-upload
        :show-file-list="false"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-success="handleSuccess"
      >
        <div class="upload-input-box">
          <el-input v-model="uploadSingleName" placeholder="还未选择文件" class="upload-input"></el-input>
          <el-button icon="upload">上传</el-button>
        </div>
        <div slot="tip" class="el-upload__tip">提示语，文案过多时折行显示</div>
      </el-upload>
    </div>
    <h3>文件上传-禁用</h3>
    <div style="width: 320px">
      <el-upload disabled>
        <el-button icon="upload">上传文件</el-button>
      </el-upload>
    </div>
    <div>
      <h3>拖拽上传</h3>
      <p>如果有上传限制，只能上传一个的情况，请删除重新上传</p>
      <el-upload
        class="drag-uploader"
        drag
        :file-list="fileList2"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :on-preview="handlePictureCardPreview"
        :limit="1"
        :on-exceed="handleExceed"
      >
        <!-- <svg-icon name="container" class="el-icon-upload" /> -->
        <div class="el-upload__text">
          <b>点击或将文件拖拽到<span>这里上传</span></b>
          <!-- <div>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div> -->
        </div>
        <div slot="tip" class="el-upload-out__tip">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>
      </el-upload>
    </div>
    <div>
      <h3>图片上传</h3>
      <el-upload
        class="picture-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-remove="handleRemove"
        :file-list="fileList1"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
    <div>
      <h3>图片上传-禁用</h3>
      <el-upload
        disabled
        class="picture-uploader disabled"
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-remove="handleRemove"
        :file-list="fileList1"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
    <h3>文件上传-小</h3>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      multiple
      :limit="3"
      show-file-list
      :file-list="fileList"
      :on-success="handleSuccess"
      class="small-uploader"
    >
      <el-button icon="upload">上传文件</el-button>
      <div slot="tip" class="el-upload__tip">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>
    </el-upload>
    <h3>文件上传</h3>
    <div class="file">
      <el-upload
        class="file-uploader"
        :file-list="fileList"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :on-preview="handlePreview"
      >
        <div class="file-uploader_content">
          <div class="sub-svg-text"><svg-icon name="upload" /><span>添加文件</span></div>
          <div class="el-upload__tip">单个文件不超过15M</div>
        </div>
      </el-upload>
    </div>
    <h3>文件上传-禁用</h3>
    <div class="file file-disabled">
      <el-upload
        disabled
        class="file-uploader"
        :file-list="fileList"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :on-preview="handlePreview"
      >
        <div class="file-uploader_content">
          <div class="sub-svg-text"><svg-icon name="upload" /><span>添加文件</span></div>
          <div class="el-upload__tip">单个文件不超过15M</div>
        </div>
      </el-upload>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiUpload',
})
export default class extends Vue {
  public static title = {
    zh: '上传',
    en: 'Upload',
  }
  public static description = {
    maintainer: '孙善鹏',
    version: 'v2.0',
    updateTime: '2023.05.05',
  }
  private uploadSingleName = ''
  private dialogImageUrl = ''
  private dialogVisible = false
  private fileList1 = [
    {
      url: 'https://fastly.picsum.photos/id/107/400/400.jpg?hmac=Tw5IGwPKXffTRtERQNVpnngbuGCU41IywM01jKfkK8w',
    },
  ]
  private fileList2 = [
    // {
    //   name: '组件123.jpeg',
    //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    // },
  ]

  //默认展示文件
  private fileList = [
    {
      name: '组件123.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
      name: 'food2.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
  ]
  //小文件
  private handlePreview(file) {
    console.log(file)
  }
  private handleRemove(file, fileList) {
    console.log(file, fileList)
  }

  private handleSuccess(id, file) {
    this.uploadSingleName = file.name
    console.log('文件上传成功')
  }
  //图片上传
  private handlePictureCardPreview(file) {
    this.dialogImageUrl = file.url
    this.dialogVisible = true
  }
  private hendelError(file) {
    console.log(file)
  }
  //允许上传最大个数
  private handleExceed() {
    this.$message.warning('只允许上传1个文件')
  }
}
</script>
<style lang="scss" scoped>
.file {
  margin: 24px 0;
}
.small-uploader,
.drag-uploader,
.file-uploader {
  width: 320px;
}
.upload-input-box {
  display: flex;
  .upload-input {
    margin-right: 16px;
    width: 182px;
  }
}
.upload-demo h3 {
  margin-top: 24px;
}
</style>
