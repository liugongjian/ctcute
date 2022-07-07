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
import SvgIcon from 'vue-svgicon'
import copy from 'copy-to-clipboard'

@Component({
  name: 'Icon',
})
export default class extends Vue {
  private icons = null

  private mounted() {
    this.icons = Object.keys(SvgIcon.icons)
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
    svg {
      color: $text-color-light-1;
    }
  }

  &__name {
    margin-top: 10px;
    color: $text-color-light-2;
  }
}
</style>
