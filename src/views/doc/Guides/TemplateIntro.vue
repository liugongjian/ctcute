<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 王月功
 * @LastEditTime: 2023-04-28 12:18:50
 * @Description: 快速开始
-->
<template>
  <cute-md-preview :content="content" />
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMdPreview from '../components/CuteMdPreview.vue'
import { ILLUSTRATE } from './constant'

@Component({
  name: 'TemplateIntro',
  components: {
    CuteMdPreview,
  },
})
export default class extends Vue {
  private content = ILLUSTRATE
}
</script>
