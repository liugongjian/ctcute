<!--
 * @Author: 王亚振
 * @Date: 2022-07-21 10:53:32
 * @LastEditors: 王亚振
 * @LastEditTime: 2022-07-21 10:53:32
 * @Description: 
-->
<template>
  <cute-edit-input v-model="desc" />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private desc = '描述文本'
}
</script>
