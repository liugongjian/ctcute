<template>
  <el-card shadow="hover">
    <div v-for="o in 4" :key="o" class="item">
      {{ '列表内容 ' + o }}
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {}
</script>
<style lang="scss" scoped>
.item {
  margin: $margin-2x;
}
</style>
