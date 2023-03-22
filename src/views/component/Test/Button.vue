<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-17 14:09:19
 * @Description: Button
-->
<template>
  <div>
    <h1>Button</h1>
    <el-row>
      <h3>默认按钮</h3>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="ct">天翼云按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="fatal">严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>默认按钮(禁用状态)</h3>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="ct" disabled>天翼云按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
      <el-button type="fatal" disabled>严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>默认按钮(加载中)</h3>
      <el-button loading>默认按钮</el-button>
      <el-button type="primary" loading>主要按钮</el-button>
      <el-button type="ct" loading>天翼云按钮</el-button>
      <el-button type="success" loading>成功按钮</el-button>
      <el-button type="info" loading>信息按钮</el-button>
      <el-button type="warning" loading>警告按钮</el-button>
      <el-button type="danger" loading>危险按钮</el-button>
      <el-button type="fatal" loading>严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>默认按钮</h3>
      <el-button round>默认按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="ct" round>天翼云按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
      <el-button type="fatal" round>严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>默认按钮(图标)</h3>
      <el-button><svg-icon name="plus-circle" /> 默认按钮</el-button>
      <el-button type="primary"><svg-icon name="plus-circle" /> 主要按钮</el-button>
      <el-button type="ct"><svg-icon name="plus-circle" /> 天翼云按钮</el-button>
      <el-button type="success"><svg-icon name="plus-circle" /> 成功按钮</el-button>
      <el-button type="info"><svg-icon name="plus-circle" /> 信息按钮</el-button>
      <el-button type="warning"><svg-icon name="plus-circle" /> 警告按钮</el-button>
      <el-button type="danger"><svg-icon name="plus-circle" /> 危险按钮</el-button>
      <el-button type="fatal"><svg-icon name="plus-circle" /> 严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>大尺寸按钮(large)(图标)</h3>
      <el-button size="large"><svg-icon name="plus-circle" /> 大尺寸按钮</el-button>
      <el-button type="primary" size="large"><svg-icon name="plus-circle" /> 主要按钮</el-button>
      <el-button type="ct" size="large"><svg-icon name="plus-circle" /> 天翼云按钮</el-button>
      <el-button type="success" size="large"><svg-icon name="plus-circle" /> 成功按钮</el-button>
      <el-button type="info" size="large"><svg-icon name="plus-circle" /> 信息按钮</el-button>
      <el-button type="warning" size="large"><svg-icon name="plus-circle" /> 警告按钮</el-button>
      <el-button type="danger" size="large"><svg-icon name="plus-circle" /> 危险按钮</el-button>
      <el-button type="fatal" size="large"><svg-icon name="plus-circle" /> 严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>小尺寸按钮(small)(图标)</h3>
      <el-button size="small"><svg-icon name="plus-circle" /> 小尺寸按钮</el-button>
      <el-button type="primary" size="small"><svg-icon name="plus-circle" /> 主要按钮</el-button>
      <el-button type="ct" size="small"><svg-icon name="plus-circle" /> 天翼云按钮</el-button>
      <el-button type="success" size="small"><svg-icon name="plus-circle" /> 成功按钮</el-button>
      <el-button type="info" size="small"><svg-icon name="plus-circle" /> 信息按钮</el-button>
      <el-button type="warning" size="small"><svg-icon name="plus-circle" /> 警告按钮</el-button>
      <el-button type="danger" size="small"><svg-icon name="plus-circle" /> 危险按钮</el-button>
      <el-button type="fatal" size="small"><svg-icon name="plus-circle" /> 严重危险按钮</el-button>
    </el-row>

    <el-row>
      <h3>朴素按钮</h3>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="ct" plain>天翼云按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
      <el-button type="fatal" plain>严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>朴素按钮(禁用状态)</h3>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="ct" plain disabled>天翼云按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
      <el-button type="fatal" plain disabled>严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>朴素按钮(加载中)</h3>
      <el-button plain loading>朴素按钮</el-button>
      <el-button type="primary" plain loading>主要按钮</el-button>
      <el-button type="ct" plain loading>天翼云按钮</el-button>
      <el-button type="success" plain loading>成功按钮</el-button>
      <el-button type="info" plain loading>信息按钮</el-button>
      <el-button type="warning" plain loading>警告按钮</el-button>
      <el-button type="danger" plain loading>危险按钮</el-button>
      <el-button type="fatal" plain loading>严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>朴素按钮(圆角)</h3>
      <el-button plain round>朴素按钮</el-button>
      <el-button type="primary" plain round>主要按钮</el-button>
      <el-button type="ct" plain round>天翼云按钮</el-button>
      <el-button type="success" plain round>成功按钮</el-button>
      <el-button type="info" plain round>信息按钮</el-button>
      <el-button type="warning" plain round>警告按钮</el-button>
      <el-button type="danger" plain round>危险按钮</el-button>
      <el-button type="fatal" plain round>严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>朴素按钮(图标)</h3>
      <el-button plain><svg-icon name="plus-circle" /> 默认按钮</el-button>
      <el-button type="primary" plain icon="el-icon-search">主要按钮</el-button>
      <el-button type="ct" plain icon="el-icon-search">天翼云按钮</el-button>
      <el-button type="success" plain icon="plus-circle">成功按钮</el-button>
      <el-button type="info" plain icon="plus-circle">信息按钮</el-button>
      <el-button type="warning" plain icon="plus-circle">警告按钮</el-button>
      <el-button type="danger" plain icon="plus-circle">危险按钮</el-button>
      <el-button type="fatal" plain icon="plus-circle">严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>大尺寸按钮(large)(图标)</h3>
      <el-button plain size="large" icon="plus-circle">小尺寸按钮</el-button>
      <el-button type="primary" plain size="large" icon="el-icon-search">主要按钮</el-button>
      <el-button type="ct" plain size="large" icon="el-icon-search">天翼云按钮</el-button>
      <el-button type="success" plain size="large" icon="plus-circle">成功按钮</el-button>
      <el-button type="info" plain size="large" icon="plus-circle">信息按钮</el-button>
      <el-button type="warning" plain size="large" icon="plus-circle">警告按钮</el-button>
      <el-button type="danger" plain size="large" icon="plus-circle">危险按钮</el-button>
      <el-button type="fatal" plain size="large" icon="plus-circle">严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>小尺寸按钮(small)(图标)</h3>
      <el-button plain size="small" icon="plus-circle">小尺寸按钮</el-button>
      <el-button type="primary" plain size="small" icon="el-icon-search">主要按钮</el-button>
      <el-button type="ct" plain size="small" icon="el-icon-search">天翼云按钮</el-button>
      <el-button type="success" plain size="small" icon="plus-circle">成功按钮</el-button>
      <el-button type="info" plain size="small" icon="plus-circle">信息按钮</el-button>
      <el-button type="warning" plain size="small" icon="plus-circle">警告按钮</el-button>
      <el-button type="danger" plain size="small" icon="plus-circle">危险按钮</el-button>
      <el-button type="fatal" plain size="small" icon="plus-circle">严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>迷你尺寸按钮(mini)(图标)</h3>
      <el-button plain size="mini" icon="plus-circle">小尺寸按钮</el-button>
      <el-button type="primary" plain size="mini" icon="el-icon-search">主要按钮</el-button>
      <el-button type="ct" plain size="mini" icon="el-icon-search">天翼云按钮</el-button>
      <el-button type="success" plain size="mini" icon="plus-circle">成功按钮</el-button>
      <el-button type="info" plain size="mini" icon="plus-circle">信息按钮</el-button>
      <el-button type="warning" plain size="mini" icon="plus-circle">警告按钮</el-button>
      <el-button type="danger" plain size="mini" icon="plus-circle">危险按钮</el-button>
      <el-button type="fatal" plain size="mini" icon="plus-circle">严重危险按钮</el-button>
    </el-row>
    <el-row>
      <h3>Dropdown Button</h3>
      <el-dropdown>
        <el-button size="small">
          <svg-icon name="select" /> 按钮2
          <svg-icon name="caret-down" />
        </el-button>
        <el-dropdown-menu slot="dropdown" class="conventional-dropdown">
          <el-dropdown-item><svg-icon name="select" /> 按钮</el-dropdown-item>
          <el-dropdown-item><svg-icon name="select" /> 按钮</el-dropdown-item>
          <el-dropdown-item><svg-icon name="select" /> 按钮</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
    <el-row>
      <h3>按钮Element图标</h3>
      <el-button icon="el-icon-search">搜索</el-button>
      <el-button icon="el-icon-message">消息</el-button>
      <el-button icon="el-icon-message" type="primary">消息</el-button>
      <el-button icon="el-icon-message" type="primary" plain>消息</el-button>
      <el-button icon="el-icon-message" :border="false">消息</el-button>
      <el-button icon="el-icon-message" type="primary" plain :border="false">消息</el-button>
      <el-button icon="el-icon-search" size="large" square></el-button>
      <el-button icon="el-icon-search" size="medium" square></el-button>
      <el-button icon="el-icon-search" size="small" square></el-button>
      <el-button icon="el-icon-search" size="mini" square></el-button>
      <el-button icon="el-icon-search" size="large" circle></el-button>
      <el-button icon="el-icon-search" size="medium" circle></el-button>
      <el-button icon="el-icon-search" size="small" circle></el-button>
      <el-button icon="el-icon-search" size="mini" circle></el-button>
    </el-row>
    <el-row>
      <h3>按钮Cuted图标</h3>
      <el-button icon="plus-circle">添加</el-button>
      <el-button icon="alert-fill">告警</el-button>
      <el-button icon="alert-fill" type="primary">告警</el-button>
      <el-button icon="alert-fill" type="primary" plain>告警</el-button>
      <el-button icon="alert-fill" :border="false">告警</el-button>
      <el-button icon="alert-fill" type="primary" plain :border="false">告警</el-button>
      <el-button icon="plus-circle" size="large" square></el-button>
      <el-button icon="plus-circle" size="medium" square></el-button>
      <el-button icon="plus-circle" size="small" square></el-button>
      <el-button icon="plus-circle" size="mini" square></el-button>
      <el-button icon="plus-circle" size="large" circle></el-button>
      <el-button icon="plus-circle" size="medium" circle></el-button>
      <el-button icon="plus-circle" size="small" circle></el-button>
      <el-button icon="plus-circle" size="mini" circle></el-button>
    </el-row>
    <el-row>
      <h3>按钮Cuted图标(禁用)</h3>
      <el-button icon="plus-circle" disabled>添加</el-button>
      <el-button icon="alert-fill" disabled>告警</el-button>
      <el-button icon="alert-fill" type="primary" disabled>告警</el-button>
      <el-button icon="alert-fill" type="primary" plain disabled>告警</el-button>
      <el-button icon="alert-fill" :border="false" disabled>告警</el-button>
      <el-button icon="alert-fill" type="primary" plain :border="false" disabled>告警</el-button>
      <el-button icon="plus-circle" size="large" square disabled></el-button>
      <el-button icon="plus-circle" size="medium" square disabled></el-button>
      <el-button icon="plus-circle" size="small" square disabled></el-button>
      <el-button icon="plus-circle" size="mini" square disabled></el-button>
      <el-button icon="plus-circle" size="large" circle disabled></el-button>
      <el-button icon="plus-circle" size="medium" circle disabled></el-button>
      <el-button icon="plus-circle" size="small" circle disabled></el-button>
      <el-button icon="plus-circle" size="mini" circle disabled></el-button>
    </el-row>
    <el-row>
      <h3>按钮组</h3>
      <el-button-group>
        <el-button icon="el-icon-arrow-left">上一页</el-button>
        <el-button>下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group style="margin-left: 40px">
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Button',
})
export default class extends Vue {}
</script>
