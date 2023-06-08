<!--
 * @Author: 黄靖
 * @Date: 2023-04-25 14:32:49
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-06-06 19:15:43
 * @Description:
-->

<template>
  <cute-fixed-component type="header">
    <slot></slot>
  </cute-fixed-component>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteFixedComponent from './FixedComponent.vue'

@Component({
  // 组件名称，可以获得更有语义信息的组件树。用于在Vue DevTool Components中显示组件名称。
  name: 'CuteFixedHeader',
  components: { CuteFixedComponent },
})
export default class extends Vue {}
</script>
