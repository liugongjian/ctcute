<!--
 * @Author: 王亚振
 * @Date: 2022-07-21 10:53:32
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-07 14:52:27
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
  private desc = this.$t('demo.editInput.demo1.defaultText')
  private size = ''
}
</script>
