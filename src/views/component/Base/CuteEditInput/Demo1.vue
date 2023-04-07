<!--
 * @Author: 王亚振
 * @Date: 2022-07-21 10:53:32
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-07 10:49:59
 * @Description:
-->
<template>
  <cute-edit-input v-model="desc" :size="size" />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private desc = '描述文本'
  private size = 'large'
}
</script>
