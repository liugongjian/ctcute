<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-17 14:09:19
 * @Description: Table
-->
<template>
  <div>
    <h1>Table</h1>
    <TableDemo />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TableDemo from '@/views/ui/components/Table.vue'

@Component({
  name: 'Table',
  components: {
    TableDemo,
  },
})
export default class extends Vue {}
</script>
