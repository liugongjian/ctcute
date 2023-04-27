<!--
 * @Author: 胡佳婷
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 胡佳婷
 * @LastEditTime: 2023-04-27 14:46:12
 * @Description: 快速开始
-->
<template>
  <cute-mavon-editor :content="content"></cute-mavon-editor>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CuteMavonEditor from '../components/CuteMavonEditor.vue'
import { ILLUSTRATE } from './constant'

@Component({
  name: 'QuickStart',
  components: {
    CuteMavonEditor,
  },
})
export default class extends Vue {
  private content = ILLUSTRATE
}
</script>
