<!--
 * @Author: zhulh
 * @Date: 2022-09-22 17:54:37
 * @LastEditors: zhulh
 * @LastEditTime: 2022-08-25 18:11:55
 * @Description:
-->
<template>
  <div>
    <div class="component__container">
      <h1>VssVideoPlayer / 视频播放器</h1>
      <component-demo path="@/views/component/Biz/VssVideoPlayer/Demo1.vue">
        <demo1 />
      </component-demo>
      <h2>VssVideoPlayer Attributes</h2>
      <el-table :data="prop" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="options" label="可选值" />
        <el-table-column prop="default" label="默认值" />
      </el-table>
      <h2>VssVideoPlayer Readonly Property</h2>
      <el-table :data="readonlyProperty" fit border>
        <el-table-column prop="name" label="参数" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="type" label="类型" />
      </el-table>
      <h2>VssVideoPlayer Methods</h2>
      <el-table :data="method" fit border>
        <el-table-column prop="name" label="方法名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="params" label="参数" />
      </el-table>
      <h2>VssVideoPlayer Events</h2>
      <el-table :data="event" fit border>
        <el-table-column prop="name" label="事件名称" />
        <el-table-column prop="desc" label="说明" />
        <el-table-column prop="callback" label="回调参数" />
      </el-table>
      <h2>VssVideoPlayer Slots</h2>
      <el-table :data="slot" fit border>
        <el-table-column prop="name" label="name" />
        <el-table-column prop="desc" label="说明" />
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Demo1 from './Demo1.vue'
import ComponentDemo from '@/layout/components/ComponentDemo/index.vue'

@Component({
  name: 'CuteSelectTree',
  components: {
    ComponentDemo,
    Demo1,
  },
})
export default class extends Vue {
  private prop = [
    {
      name: 'type',
      desc: '播放器类型',
      type: 'String',
      options: 'flv, hls, rtc',
      default: null,
    },
    {
      name: 'url',
      desc: '视频地址',
      type: 'String',
      options: '',
      default: null,
    },
    {
      name: 'volume',
      desc: '默认音量',
      type: 'Number',
      options: '0 - 1',
      default: 0.3,
    },
    {
      name: 'playbackRate',
      desc: '默认倍速',
      type: 'Number',
      options: '',
      default: 1,
    },
    {
      name: 'isAutoPlay',
      desc: '是否自动播放',
      type: 'Boolean',
      options: '',
      default: 'true',
    },
    {
      name: 'isLive',
      desc: '是否为直播流',
      type: 'Boolean',
      options: '',
      default: 'false',
    },
    {
      name: 'isMuted',
      desc: '是否默认静音',
      type: 'Boolean',
      options: '',
      default: 'false',
    },
    {
      name: 'hasProgress',
      desc: '是否显示进度条',
      type: 'Boolean',
      options: '',
      default: 'false',
    },
    {
      name: 'hasControl',
      desc: '是否显示控制栏',
      type: 'Boolean',
      options: '',
      default: 'true',
    },
    {
      name: 'hasFullscreen',
      desc: '是否显示全屏按钮',
      type: 'Boolean',
      options: '',
      default: 'true',
    },
  ]

  private readonlyProperty = [
    {
      name: 'isLoading',
      desc: '加载中',
      type: 'Boolean',
    },
  ]

  private method = [
    {
      name: 'play',
      desc: '播放',
      params: '',
    },
    {
      name: 'pause',
      desc: '暂停',
      params: '',
    },
    {
      name: 'seek',
      desc: '跳进',
      params: 'time - 跳进时间(秒）',
    },
    {
      name: 'toggleMuteStatus',
      desc: '设置是否静音',
      params: 'isMuted - 是否静音',
    },
    {
      name: 'setVolume',
      desc: '设置音量',
      params: 'volume - 音量大小，取值0-1',
    },
    {
      name: 'setPlaybackRate',
      desc: '设置播放倍速',
      params: 'playbackRate - 播放倍速',
    },
    {
      name: 'reloadPlayer',
      desc: '重新加载播放器',
      params: '',
    },
    {
      name: 'disposePlayer',
      desc: '销毁播放器',
      params: '',
    },
  ]

  private event = [
    {
      name: 'onPlay',
      desc: '当开始播放时触发',
      callback: '',
    },
    {
      name: 'onPause',
      desc: '当暂停时触发',
      callback: '',
    },
    {
      name: 'onEnded',
      desc: '当播放完成时触发',
      callback: '',
    },
    {
      name: 'onRetry',
      desc: '当重试时触发',
      callback: '',
    },
    {
      name: 'onTimeUpdate',
      desc: '当播放时间变化时触发',
      callback: 'currentTime - 当前时间',
    },
    {
      name: 'onDurationChange',
      desc: '当视频时长变化时触发',
      callback: 'duration - 视频时长',
    },
    {
      name: 'onVolumeChange',
      desc: '当音量变化时触发',
      callback: 'volume - 当前音量',
    },
    {
      name: 'onRateChange',
      desc: '当播放倍速变化时触发',
      callback: 'playbackRate - 当前倍速',
    },
    {
      name: 'onSeeked',
      desc: '当视频时间跳跃时触发',
      callback: 'currentTime - 当前时间',
    },
    {
      name: 'onBuffered',
      desc: '当预加载视频流时触发',
      callback: 'bufferedTime - 预加载时长',
    },
    {
      name: 'onLoadStart',
      desc: '当开始加载视频流时触发',
      callback: '',
    },
    {
      name: 'onCanplay',
      desc: '当加载完成，准备播放时触发',
      callback: '',
    },
  ]

  private slot = [
    {
      name: 'headerLeft',
      desc: '视频眉头左侧',
    },
    {
      name: 'headerRight',
      desc: '视频眉头右侧',
    },
    {
      name: 'controlRight',
      desc: '控制栏右侧，可用于增加自定义按钮',
    },
    {
      name: 'controlBody',
      desc: '控制栏主体，可用于添加水印等',
    },
  ]
}
</script>
