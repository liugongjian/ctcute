<!--
 * @Author: 朱玉豆
 * @Date: 2023-05-31 10:00:30
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-31 10:28:17
 * @Description:
-->
<template>
  <div>
    <vxe-table-demo />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VxeTableDemo from '@/views/component/Base/VxeTable/index.vue'

@Component({
  name: 'VxeTable',
  components: { VxeTableDemo },
})
export default class extends Vue {
  public static title = {
    zh: '复杂表格',
    en: 'Vxetable',
  }
  public static description = {
    maintainer: '朱玉豆',
    version: 'v2.0',
    updateTime: '2023.05.29',
  }
}
</script>

<style lang="scss" scoped></style>
