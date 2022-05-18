<template>
  <div>
    <div>
      <h3>图片上传</h3>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
      >
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" /> -->
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div>
      <h3>文件上传</h3>
      <div class="sub-upload">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <p><i class="el-icon-upload2"></i> <span>添加文件</span></p>
          <div class="el-upload__tip">单个文件不超过15M</div>
        </el-upload>
      </div>
    </div>
    <div>
      <h3>拖拽上传</h3>
      <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          <h3><em>点击</em>或将文件拖拽到这里上传</h3>
          <p>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</p>
        </div>
      </el-upload>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiUpload'
})
export default class extends Vue {
  public static title = {
    zh: '上传',
    en: 'Upload'
  }
}
</script>

<style lang="scss" scoped >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.el-upload-dragger .el-icon-upload {
  margin-top: 20px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.sub-upload {
  width: 320px;
  height: 80px;
  border: 1px solid #dddddd;
  margin: 24px 0 24px 0;
}
</style>
