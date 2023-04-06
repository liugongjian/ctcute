<template>
  <div class="cute-scroller">
    <slot />
  </div>
</template>
<script lang="ts">
// 引入Vue TypeScript组件包
import { Component, Vue, VModel } from 'vue-property-decorator'

@Component({
  // 组件名称，可以获得更有语义信息的组件树。用于在Vue DevTool Components中显示组件名称。
  name: 'CuteScroller',
})
export default class extends Vue {
  /**
   * 实现一个v-model的双向绑定
   * @VModel 的使用示例
   * 详细文档：https://github.com/kaorun343/vue-property-decorator#-vmodelpropsargs-propoptions-decorator
   */
  @VModel() private heightVal: string

  private isReCalHeight = false

  private mounted() {
    this.calHeight()
    window.addEventListener('resize', this.calHeight)
  }

  private destroy() {
    window.removeEventListener('resize', this.calHeight)
  }

  private reCalHeight() {
    this.heightVal = `${
      document.querySelector('.el-table__body').clientHeight +
      document.querySelector('.el-table__header-wrapper').clientHeight
    }px`
  }

  private calHeight() {
    const scrollPosition = this.$el.getBoundingClientRect()
    const layoutContainer = document.querySelector('.layout-container')
    // 获取计算样式
    const layoutContainerStyle = window.getComputedStyle(layoutContainer)
    // 获取padding值
    const layoutContainerPaddingBottom = parseInt(layoutContainerStyle.getPropertyValue('padding-bottom'))
    // 分页器高度
    const paginationHeight = document.querySelector('.el-pagination').clientHeight
    this.heightVal = `${
      document.body.clientHeight - scrollPosition.top - layoutContainerPaddingBottom - paginationHeight
    }px`

    // this.$nextTick(() => {
    //   if (!this.isReCalHeight) {
    //     this.isReCalHeight = true
    //     if (this.$children[0].$el.className.indexOf('el-table--scrollable-y') === -1) {
    //       this.reCalHeight()
    //     }
    //   }
    // })
  }
}
</script>

<style lang="scss" scoped>
.random {
  color: $text-color-light-1;
  margin-top: 10px;

  .el-input {
    width: 100px;
    margin: 0 8px;
  }
}
</style>
