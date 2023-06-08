<!--
 * @Author: 黄靖
 * @Date: 2023-04-25 14:32:49
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-06-06 19:15:50
 * @Description:
-->

<template>
  <div
    class="cute-fixed-component"
    :style="{
      left: offsetLeft,
      width: footerWidth,
      top: type === 'header' ? offsetTop : 'auto',
      bottom: type === 'footer' ? '0px' : 'auto',
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'CuteFixedComponent',
})
export default class extends Vue {
  @Prop({ type: String, default: 'footer' }) type!: string
  private footerNode: Element | null
  private sizeObserver: ResizeObserver
  private offsetLeft = '0'
  private offsetTop = '0'
  private footerWidth = '100%'
  private layoutOffset: string

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

  // private handleScroll() {
  //   const layout = document.querySelector('#layout-container')
  //   this.setOffset(layout)
  // }

  private setOffset(ele: Element) {
    const offsetX = ele.getBoundingClientRect().x + 'px'
    const offsetY = ele.getBoundingClientRect().y + 'px'
    if (offsetX !== this.offsetLeft) {
      this.offsetLeft = offsetX
      this.offsetTop = offsetY
    }
  }

  private mounted() {
    this.footerNode = this.$el
    const parent = document.querySelector('.cute-layout')
    const target = document.querySelector('#layout-container')
    // 需在使用了CuteLayout的情况下使用
    if (parent && target) {
      parent.appendChild(this.footerNode)
      this.initObserver(target)
      this.setOffset(target)
      this.footerWidth = target.clientWidth + 'px'
      // window.addEventListener('scroll', this.handleScroll, true)

      this.$nextTick(() => {
        switch (this.type) {
          case 'footer':
            this.layoutOffset = (target as any).style.paddingBottom
            ;(target as any).style.paddingBottom = this.footerNode.clientHeight + 'px'
            break
          case 'header':
            this.layoutOffset = (target as any).style.paddingTop
            ;(target as any).style.paddingTop = this.footerNode.clientHeight + 'px'
            break
          default:
            break
        }
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
      switch (this.type) {
        case 'footer':
          ;(layout as any).style.paddingBottom = this.layoutOffset
          break
        case 'header':
          ;(layout as any).style.paddingTop = this.layoutOffset
          break
        default:
          break
      }
    }
  }
}
</script>
