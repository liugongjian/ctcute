<!--
 * @Author: zhulh
 * @Date: 2022-09-26 22:03:32
 * @LastEditors: zhulh
 * @LastEditTime: 2022-09-26 09:04:34
 * @Description: 
-->
<template>
  <div class="video-player">
    <el-form label-width="90px" class="simple-form">
      <el-form-item label="视频格式">
        <el-select v-model="form.type">
          <el-option :value="TypeEnum.FLV" label="FLV" />
          <el-option :value="TypeEnum.HLS" label="HLS" />
          <el-option :value="TypeEnum.RTC" label="Webrtc" />
        </el-select>
      </el-form-item>
      <el-form-item label="流类型">
        <el-select v-model="form.isLive">
          <el-option :value="true" label="直播流" />
          <el-option :value="false" label="点播流" />
        </el-select>
      </el-form-item>
      <el-form-item label="视频URL">
        <el-input v-model="form.url" placeholder="请输入视频播放地址" />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="generate">播放</el-button>
      </el-form-item>
    </el-form>
    <vss-video-player
      ref="vssPlayer"
      :type="form.type"
      :is-live="form.isLive"
      :url="url"
      :has-progress="true"
      :volume="defaultVolume"
      :playback-rate="defaultPlaybackRate"
      @onTimeUpdate="onTimeUpdate"
      @onVolumeChange="onVolumeChange"
      @onRateChange="onRateChange"
    />
    <div v-if="url" class="controls">
      <el-button @click="play">播放</el-button>
      <el-button @click="pause">暂停</el-button>
      <el-button @click="reloadPlayer">重新加载</el-button>
      <el-button @click="disposePlayer">销毁播放器</el-button>
      <el-button @click="setVolume">改音量</el-button>
      <el-button @click="setPlaybackRate">改倍速</el-button>
    </div>
    <hr />
    <el-descriptions v-if="url" class="properties" :column="3">
      <el-descriptions-item>
        <template slot="label">当前时间</template>
        {{ currentTime }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">当前音量</template>
        {{ volume }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">播放倍速</template>
        {{ playbackRate }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
import VssVideoPlayer from '@vss/video-player/index.vue'
import { TypeEnum } from '@vss/video-player/enums'

@Component({
  name: 'Demo1',
  components: {
    VssVideoPlayer,
  },
})
export default class extends Vue {
  @Ref('vssPlayer') private vssPlayer: VssVideoPlayer
  private TypeEnum = TypeEnum
  private form = {
    type: null,
    isLive: false,
    url: '',
  }
  private url = null
  private currentTime = 0
  private defaultVolume = 0.3
  private volume = 0
  private playbackRate = 1
  private defaultPlaybackRate = 1

  /**
   * 开始播放
   */
  private generate() {
    if (!this.form.url) {
      this.$message.warning('请输入视频播放地址')
      return
    }
    if (this.url === this.form.url) {
      this.vssPlayer.reloadPlayer()
    }
    this.url = this.form.url
  }

  /**
   * 播放
   */
  private play() {
    this.vssPlayer.play()
  }

  /**
   * 暂停
   */
  private pause() {
    this.vssPlayer.pause()
  }

  /**
   * 重新加载播放器
   */
  private reloadPlayer() {
    this.vssPlayer.reloadPlayer()
  }

  /**
   * 销毁播放器
   */
  private disposePlayer() {
    this.vssPlayer.disposePlayer()
  }

  /**
   * 改音量
   */
  private setVolume() {
    this.defaultVolume = Math.random()
  }

  /**
   * 改倍速
   */
  private setPlaybackRate() {
    this.defaultPlaybackRate = Math.round(Math.random() * 10)
  }

  /**
   * 当前播放时间变化
   */
  private onTimeUpdate(currentTime) {
    this.currentTime = currentTime
  }

  /**
   * 音量变化
   */
  private onVolumeChange(volume) {
    this.volume = volume
  }

  /**
   * 播放倍速变化
   */
  private onRateChange(playbackRate) {
    this.playbackRate = playbackRate
  }
}
</script>
<style lang="scss" scoped>
.video-player .player__wrap {
  height: 500px;
  background: $color-grey-0;
}

.controls {
  margin-top: $margin-medium;
  margin-bottom: $margin-medium;
}
</style>
