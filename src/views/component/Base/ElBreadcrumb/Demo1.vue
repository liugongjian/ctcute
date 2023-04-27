<!--
* @Author: 胡一苗
* @Date: 2023-03-22 15:42:05
 * @LastEditors: XinZhao
 * @LastEditTime: 2023-04-24 10:06:09
* @Description: desc
-->
<template>
  <div class="collapse-demo">
    <div class="sub-sample">
      <h3>{{ $t('demo.breadcrumb.demo1.title1') }}</h3>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">{{ $t('demo.breadcrumb.demo1.level1') }}</el-breadcrumb-item>
        <el-breadcrumb-item to="/">{{ $t('demo.breadcrumb.demo1.level2') }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $t('demo.breadcrumb.demo1.page') }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-sample">
      <h3>{{ $t('demo.breadcrumb.demo1.title2') }}</h3>
      <el-breadcrumb separator="/" size="small">
        <el-breadcrumb-item to="/">{{ $t('demo.breadcrumb.demo1.level1') }}</el-breadcrumb-item>
        <el-breadcrumb-item to="/">{{ $t('demo.breadcrumb.demo1.level2') }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $t('demo.breadcrumb.demo1.page') }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {}
</script>
