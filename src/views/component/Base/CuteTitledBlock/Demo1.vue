<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-21 09:23:18
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2022-08-08 14:04:40
 * @Description: 带标题的内容块
-->
<template>
  <cute-titled-block title="基础信息">
    <template #extra> <el-button type="text">额外操作</el-button> </template>
    <template #content>
      <el-descriptions :column="2" border>
        <el-descriptions-item>
          <template slot="label"> 数据库类型 </template>
          Spark
        </el-descriptions-item>

        <el-descriptions-item>
          <template slot="label"> 表类型 </template>
          物理表
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 配置时间 </template>
          2018-04-24 18:00:00
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 使用时间 </template>
          2018-04-24 18:00:00 至 2019-04-24 18:00:00
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 所属业务</template>
          金融 科技 -T Tech Ui
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 数据位点 </template>
          2018-04-24 18:00:00 至 2019-04-24 18:00:00
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 储存量(GB) </template>
          50
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 数据负责人 </template>
          王小明
        </el-descriptions-item>
        <el-descriptions-item :span="2">
          <template slot="label"> 生命周期（天） </template>
          30
        </el-descriptions-item>
        <el-descriptions-item :span="2">
          <template slot="label"> 配置信息 </template>
          <div>数据盘类型：<span>MongoDB </span></div>
          <div>数据库版本：<span>3.4 </span></div>
          <div>套餐：<span>dds.mongo.mid </span></div>
          <div>存储空间：<span>10 GB </span></div>
          <div>地域：<span>华东 1 </span></div>
        </el-descriptions-item>
      </el-descriptions>
    </template>
  </cute-titled-block>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CuteTitledBlock } from '@cutedesign/base'
@Component({
  name: 'CuteTitledBlockDemo1',
  components: {
    CuteTitledBlock,
  },
})
export default class extends Vue {}
</script>
