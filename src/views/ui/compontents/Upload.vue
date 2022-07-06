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
          <div class="sub-svg-text"><svg-icon name="upload" /><span>添加文件</span></div>

          <div class="el-upload__tip">单个文件不超过15M</div>
        </el-upload>
      </div>
    </div>
    <div>
      <h3>拖拽上传</h3>
      <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <svg-icon name="container" class="el-icon-upload" />
        <div class="el-upload__text">
          <b>点击或将文件拖拽到这里上传</b>
          <div>支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>
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
}
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed $border-color-primary;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: $color-status-info;
}

.el-upload-dragger .el-icon-upload {
  width: 33px !important;
  height: 42px !important;
  margin-top: 38px;
  color: $color-master-1;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.sub-upload {
  width: 320px;
  height: 80px;
  border: 1px solid $border-color-primary;
  margin: 24px 0;
  border-radius: 2px;

  &:hover {
    border-color: $color-master-1;
  }
}

.sub-svg-text {
  margin-top: 18px;

  svg {
    color: $color-master-1;
    margin-right: 10px;
  }

  span {
    font-size: 12px;
    color: $color-master-1;
  }
}
</style>
