<!--
 * @Author: 黄靖
 * @Date: 2023-04-25 14:32:49
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-04-25 14:32:49
 * @Description:
-->
<template>
  <div style="display: none;"></div>
</template>
<script lang="ts">
import { CreateElement } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  // 组件名称，可以获得更有语义信息的组件树。用于在Vue DevTool Components中显示组件名称。
  name: 'CuteFixedFooter',
})
export default class extends Vue {
  private footerNode: Element | null
  private mounted() {
    this.footerNode = new Vue({
      render: (h: CreateElement) => {
        return h(
          'div',
          {
            class: 'cute-fixed-footer',
          },
          this.$slots.default
        )
      },
    }).$mount().$el
    const target = document.querySelector('#layout-container')
    // 需在使用了CuteLayout的情况下使用
    if (target) {
      target.appendChild(this.footerNode)
      this.$nextTick(() => {
        ;(target as any).style.paddingBottom = this.footerNode.clientHeight + 'px'
      })
    }
  }

  private destroyed() {
    this.footerNode && this.footerNode.remove()
    const target = document.querySelector('#layout-container')
    if (target) {
      ;(target as any).style.paddingBottom = 0
    }
  }
}
</script>
