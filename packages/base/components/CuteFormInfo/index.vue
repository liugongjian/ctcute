<!--
 * @Author: 朱凌浩
 * @Date: 2022-07-12 14:03:28
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2022-07-20 14:36:02
 * @Description: 提示信息，hover时展示
-->
<template>
  <el-popover
    placement="top-start"
    :title="title"
    :width="width"
    trigger="hover"
    :open-delay="300"
    :content="content"
    :popper-class="`form-item__info--${effect}`"
  >
    <svg-icon slot="reference" class="form-item__info" name="question-circle" />
  </el-popover>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'CuteFormInfo',
})
export default class extends Vue {
  @Prop({ default: 'dark' }) private effect: string
  @Prop({ default: '' }) private title: string
  @Prop({ default: '' }) private content: string
  @Prop() private width: number
}
</script>
<style lang="scss" scoped>
.form-item__info {
  color: $icon-color;
  width: 15px;
  height: 15px;
}
</style>
<style lang="scss">
.form-item__info {
  &--dark {
    background: $color-other-1;
    color: $color-white;

    .el-popover__title {
      color: $color-white;
    }

    &.el-popper[x-placement^='top'] .popper__arrow {
      box-shadow: none;

      &:after {
        border-top-color: $color-other-1 !important;
        box-shadow: none;
      }
    }
  }
}
</style>
