<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-17 14:09:19
 * @Description: Table
-->
<template>
  <el-card>
    <h1>Table</h1>
    <Table />
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Table from '@/views/ui/components/Table.vue'

@Component({
  name: 'Table',
  components: {
    Table,
  },
})
export default class extends Vue {}
</script>
