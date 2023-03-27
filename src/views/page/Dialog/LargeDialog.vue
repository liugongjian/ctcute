<!--
 * @Author: 马妍
 * @Date: 2022-07-08 20:57:32
 * @LastEditors: zhulh
 * @LastEditTime: 2023-03-24 14:50:27
 * @Description: 大弹窗
-->
<template>
  <el-card>
    <h2>大弹窗</h2>
    <div>
      <p>全屏弹窗除外，弹窗最大宽度为 1000px，最大高度为640px</p>
      <el-button type="primary" @click="handleClick">大弹窗</el-button>
    </div>
    <el-dialog width="1000px" :title="title" :visible="visible" :close-on-click-modal="false" @close="close">
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
      <div slot="footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'LargeDialog',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string

  private title = '大弹窗限制（内容较多的复杂弹窗）'
  private visible = false
  private close() {
    this.visible = false
  }
  private confirm() {
    this.visible = false
  }

  private handleClick() {
    this.visible = true
  }
}
</script>
