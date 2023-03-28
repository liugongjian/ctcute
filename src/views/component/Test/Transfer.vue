<!--
 * @Author: 黄靖
 * @Date: 2023-03-23 17:28:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-03-23 17:28:09
 * @Description: Transfer
-->
<template>
  <div>
    <h1>Transfer</h1>
    <h3>基础用法、可搜索</h3>
    <TransferDemo />
    <h3>可自定义</h3>
    <div>
      <el-transfer
        v-model="value"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        :data="data"
      >
        <el-button slot="left-footer" class="transfer-footer" size="small">操作</el-button>
        <el-button slot="right-footer" class="transfer-footer" size="small">操作</el-button>
      </el-transfer>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TransferDemo from '@/views/ui/components/Transfer.vue'

@Component({
  name: 'Transfer',
  components: {
    TransferDemo,
  },
})
export default class extends Vue {
  private data = this.generateData()
  private value = [1]
  private value4 = [1]
  private renderFunc = (h, option) => {
    return h('span', `${option.key} - ${option.label}`)
  }
  private generateData() {
    const data = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${i}`,
        disabled: i % 4 === 0,
      })
    }
    return data
  }
}
</script>
<style lang="scss" scoped>
.transfer-footer {
  margin-left: $margin-2x;
}
</style>
