<template>
  <div>
    <div v-if="!textarea" class="cute-appendix">
      <svg-icon class="appendix-link-icon" name="attachment" :width="16" :height="16" />
      <el-link type="primary" class="appendix-link" @click="handleDownload"> {{ value }} </el-link>
      <svg-icon
        v-if="showEye"
        class="appendix-eye-icon"
        name="eye"
        :width="16"
        :height="16"
        @click="openPreview"
      />
    </div>
    <div v-else>
      <div class="appendix-big">
        <div class="appendix-big-item" @click="handleDownload">
          <svg-icon
            class="appendix-link-icon"
            :name="svgName"
            :color="svgColor"
            opacity="70%"
            :width="24"
            :height="24"
          />
          <div class="appendix-big-item-title">
            <p>{{ title }}</p>
            <p>{{ size }}</p>
          </div>
        </div>
        <div>
          <svg-icon
            v-if="showEye"
            class="appendix-eye-icon"
            name="eye"
            :width="16"
            :height="16"
            @click="openPreview"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'CuteAppendix',
})
export default class extends Vue {
  @Prop({ default: false }) public textarea!: boolean
  @Prop({ default: '组件' }) public value!: string
  @Prop({ default: false }) public preview!: boolean
  @Prop({ default: false }) public showEye!: boolean
  @Prop({ default: '标题1' }) public title!: string
  @Prop({ default: '1MB' }) public size!: string
  @Prop({ default: 'file-fill' }) public svgName!: string
  @Prop({ default: '' }) public svgColor: string
  @Prop({ required: true }) public type: string
  /**
   * 预览
   */
  private openPreview() {
    this.$emit('preview', this.type)
  }
  /**
   * 下载
   */
  private handleDownload() {
    this.$emit('download', this.type)
  }
}
</script>

<style lang="scss" scoped>
.cute-appendix {
  margin-top: 8px;
}
.appendix-link-icon {
  margin-right: 4px;
  color: $color-grey-3;
  vertical-align: -4px !important;
}

.appendix-eye-icon {
  margin-left: 8px;
  color: $color-grey-3;
  vertical-align: -4px !important;

  &:hover {
    color: $color-master-1;
    cursor: pointer;
  }
}

.appendix-big {
  display: flex;
  align-items: center;
  margin-top: 10px;

  &-item {
    width: 240px;
    height: 52px;
    background-color: $color-grey-11;
    display: flex;
    align-items: center;
    padding: 0 8px;

    &:hover {
      background-color: $color-master-7;
      cursor: pointer;
    }

    &-title {
      margin-left: 10px;

      p:nth-child(1) {
        max-width: 186px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-family: PingFangSC-Medium;
        font-size: 12px;
        color: $color-grey-1;
        line-height: 20px;
        font-weight: 500;
        margin: 5px 0 5px 0;
      }

      p:nth-child(2) {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: $color-grey-2;
        line-height: 20px;
        font-weight: 400;
        margin: 0;
      }
    }
  }
}
</style>
