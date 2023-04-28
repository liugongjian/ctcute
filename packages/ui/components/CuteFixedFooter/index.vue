<!--
 * @Author: 黄靖
 * @Date: 2023-04-25 14:32:49
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-04-25 14:32:49
 * @Description:
-->

<template>
  <div class="cute-fixed-footer" :style="{ left: offsetLeft, width: footerWidth }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  // 组件名称，可以获得更有语义信息的组件树。用于在Vue DevTool Components中显示组件名称。
  name: 'CuteFixedFooter',
})
export default class extends Vue {
  private footerNode: Element | null
  private sizeObserver: ResizeObserver
  private offsetLeft = '0'
  private footerWidth = '0'
  private layoutOffsetBottom: string

  private initObserver(target: Element) {
    if (ResizeObserver) {
      this.sizeObserver = new ResizeObserver((attrs: Array<ResizeObserverEntry>) => {
        const container = attrs[0].target as any
        this.setOffset(container)
        this.footerWidth = container.clientWidth + 'px'
      })
      this.sizeObserver.observe(target)
    }
  }

  private handleScroll() {
    const layout = document.querySelector('#layout-container')
    this.setOffset(layout)
  }

  private setOffset(ele: Element) {
    const offsetX = ele.getBoundingClientRect().x + 'px'
    if (offsetX !== this.offsetLeft) {
      this.offsetLeft = offsetX
    }
  }

  private mounted() {
    this.footerNode = this.$el
    const target = document.querySelector('#layout-container')
    // 需在使用了CuteLayout的情况下使用
    if (target) {
      target.appendChild(this.footerNode)
      this.initObserver(target)
      this.setOffset(target)
      this.footerWidth = target.clientWidth + 'px'
      window.addEventListener('scroll', this.handleScroll)

      this.$nextTick(() => {
        this.layoutOffsetBottom = (target as any).style.paddingBottom
        ;(target as any).style.paddingBottom = this.footerNode.clientHeight + 'px'
      })
    }
  }

  private destroyed() {
    this.footerNode && this.footerNode.remove()
    const layout = document.querySelector('#layout-container')
    if (layout) {
      if (this.sizeObserver) {
        this.sizeObserver.unobserve(layout)
      }
      ;(layout as any).style.paddingBottom = this.layoutOffsetBottom
    }
  }
}
</script>
