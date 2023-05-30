<!--
 * @Author: 胡佳婷
 * @Date: 2023-02-09 08:20:54
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-02-12 09:35:53
 * @Description: 有标题的卡片，通常用于图表类的盒子
-->

<template>
  <el-card class="cute-card" shadow="hover">
    <div v-if="title" slot="header" class="cute-card__header">
      <span class="cute-card__header__title">{{ title }}</span>
      <div v-if="$slots.extra" class="cute-card__header__extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="cute-card__content" :style="'height:' + contentHeight">
      <slot name="content"></slot>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CuteCardBox',
})
export default class extends Vue {
  /**
   * 标题
   */
  @Prop({ default: '', required: false }) private readonly title: string
  /**
   * 内容高度
   */
  @Prop({ default: '100%', required: false }) private readonly contentHeight: string
}
</script>
