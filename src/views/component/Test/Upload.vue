<!--
 * @Author: 黄靖
 * @Date: 2023-03-27 15:12:09
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-13 14:49:40
 * @Description: Slider
-->
<template>
  <div>
    <h1>Upload 上传</h1>
    <el-card>
      <UploadDemo />
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UploadDemo from '@/views/ui/components/Upload.vue'

@Component({
  name: 'Slider',
  components: {
    UploadDemo,
  },
})
export default class extends Vue {}
</script>
