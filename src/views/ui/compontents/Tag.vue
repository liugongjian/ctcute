<template>
  <div>
    <el-row style="margin-top: 20px">
      <el-col :span="1">
        <el-tag type="info">标签</el-tag>
      </el-col>
      <el-col :span="1">
        <el-tag type="info" closable>标签</el-tag>
      </el-col>
      <el-col :span="2"><el-button class="button-new-tag" size="small">+ New Tag</el-button></el-col>
      <!-- <el-col :span="1">
        <el-tag type="danger">red</el-tag>
      </el-col> -->
      <!-- <el-col :span="1">
        <el-tag type="success">green</el-tag>
      </el-col>
      <el-col :span="1">
        <el-tag>蓝色</el-tag>
      </el-col>
      <el-col :span="1">
        <el-tag type="warning">橙色</el-tag>
      </el-col>
      <el-col :span="1">
        <el-tag type="success">橙色</el-tag>
      </el-col> -->
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "UiTag",
})
export default class extends Vue {
  public static title = {
    zh: "标签",
    en: "Tag",
  }
}
</script>