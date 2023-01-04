<!--
 * @Author: 马妍
 * @Date: 2022-10-19 10:59:22
 * @LastEditors: 马妍
 * @LastEditTime: 2022-11-17 10:23:31
 * @Description: 
-->
<template>
  <div class="component-demo">
    <div class="component-demo__content">
      <slot />
    </div>
    <div class="component-demo__code">
      <div v-if="isOpen" class="component-demo__code__body">
        <vue-code-mirror v-if="code" :code="code" mode="text/x-vue" />
      </div>
      <div class="component-demo__code__trigger" @click="toggleCode">
        <svg-icon name="caret-down" />
        <span>{{ isOpen ? '隐藏代码' : '显示代码' }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { getCode } from '@/api/code'

@Component({
  name: 'ComponentDemo',
  components: {
    VueCodeMirror: () => import(/* webpackChunkName: "codemirror" */ '../VueCodeMirror/index.vue'),
  },
})
export default class extends Vue {
  @Prop() private path: string

  private code: string = null

  private isOpen = false

  private mounted() {
    this.getCode(this.path)
  }

  /**
   * 获得代码
   */
  private async getCode(path) {
    try {
      const res = await getCode({
        path: path,
      })
      this.code = res.data
    } catch (e) {
      console.log(e)
    }
  }

  private toggleCode() {
    this.isOpen = !this.isOpen
  }
}
</script>
<style lang="scss" scoped>
.component-demo {
  display: block;
  border: 1px solid $border-color-primary;
  transition: $transition-time all;
  box-shadow: 0 0 8px 0 $color-bg-3 !important;

  &:hover {
    box-shadow: $shadow-card;
  }

  &__content {
    padding: $padding-primary;
    border-bottom: 1px solid $border-color-primary;
  }

  &__code {
    &__body {
      border-bottom: 1px solid $border-color-primary;
    }

    &__trigger {
      padding: $padding-small;
      text-align: center;
      cursor: pointer;
      transition: $transition-time all;

      svg {
        color: $icon-color;
        margin-right: $margin-small;
      }

      &:hover {
        background: $color-grey-10;
      }
    }
  }
}
</style>
