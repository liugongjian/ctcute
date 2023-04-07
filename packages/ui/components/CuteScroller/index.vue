<!--
 * @Author: 马妍
 * @Date: 2022-07-22 21:14:49
 * @LastEditors: yanchengxiang 675036196@qq.com
 * @LastEditTime: 2023-04-07 09:18:52
 * @Description:
-->
<template>
  <div class="cute-scroller">
    <slot />
  </div>
</template>
<script lang="ts">
// 引入Vue TypeScript组件包
import { Component, Vue, VModel, Prop } from 'vue-property-decorator'

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

  // 偏移量
  @Prop({ default: 0 }) offset: number

  private mounted() {
    this.calHeight()
    window.addEventListener('resize', this.calHeight)
  }

  private destroy() {
    window.removeEventListener('resize', this.calHeight)
  }

  // 重新计算高度
  private reCalHeight() {
    // 表格头部高度
    const tableHeaderHeight = this.$el.querySelector('.el-table__header-wrapper').clientHeight
    // 表格内容高度
    const tableBodyHeight = this.$el.querySelector('.el-table__body').clientHeight
    // 表格border线 - 获取到的可能是小数点，此时需要向上取整
    const tableBorderHeight = Math.ceil(
      parseFloat(
        window
          .getComputedStyle(this.$el.querySelector('.el-table td.el-table__cell'))
          .getPropertyValue('border-bottom')
          .split(' ')[0]
      )
    )
    this.heightVal = `${tableHeaderHeight + tableBodyHeight + tableBorderHeight - this.offset}px`
  }

  // 计算高度
  private calHeight() {
    const scrollPosition = this.$el.getBoundingClientRect()
    const layoutContainer = document.querySelector('.layout-container')
    // 获取计算样式
    const layoutContainerStyle = window.getComputedStyle(layoutContainer)
    // 获取padding值
    const layoutContainerPaddingBottom = parseInt(layoutContainerStyle.getPropertyValue('padding-bottom'))
    const nextSibling: any = this.$el.nextSibling
    // 分页器高度
    let paginationHeight = 0
    // 先判断是否存在分页器
    if (nextSibling.className === 'el-pagination') {
      paginationHeight = nextSibling.clientHeight
    }
    this.heightVal = `${
      document.body.clientHeight -
      // 有时候获取到的可能是小数点，此时可以向上取整来得到高度
      Math.ceil(scrollPosition.top) -
      layoutContainerPaddingBottom -
      paginationHeight -
      this.offset
    }px`
  }
}
</script>
