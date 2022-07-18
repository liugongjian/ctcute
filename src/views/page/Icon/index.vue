<!--
 * @Author: 朱凌浩
 * @Date: 2022-07-08 14:31:41
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2022-07-18 14:08:49
 * @Description: 通用icon
-->
<template>
  <el-card>
    <div class="icon__list">
      <div v-for="icon in icons" :key="icon" class="icon__item" @click="copyName(icon)">
        <div class="icon__img"><svg-icon :name="icon" width="35" height="35" /></div>
        <div class="icon__name">{{ icon }}</div>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import copy from 'copy-to-clipboard'

@Component({
  name: 'Icon',
})
export default class extends Vue {
  private icons = null

  private mounted() {
    const req = require.context('@/assets/icons/svg', true, /\.svg$/)
    this.icons = req
      .keys()
      .map(k => k.replace(/\.\/|\.svg/g, ''))
      .sort(function (a, b) {
        for (let i = 0; i < b.length; i++) {
          if (a.toLowerCase().charCodeAt(i) === b.toLowerCase().charCodeAt(i)) continue
          return a.toLowerCase().charCodeAt(i) - b.toLowerCase().charCodeAt(i)
        }
        return 0
      })
  }

  private copyName(icon) {
    copy(icon)
    this.$message.success(`已拷贝Icon名称"${icon}"`)
  }
}
</script>
<style lang="scss" scoped>
.icon {
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: 1px 0 0 1px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    height: 150px;
    border: 1px solid $border-color-light-1;
    color: $text-color-light-2;
    margin: -1px 0 0 -1px;
    cursor: pointer;
    transition: opacity 200ms;

    &:hover {
      opacity: 0.65;
    }
  }

  &__img {
    color: $text-color-light-1;
  }

  &__name {
    margin-top: 10px;
    color: $text-color-light-2;
  }
}
</style>
