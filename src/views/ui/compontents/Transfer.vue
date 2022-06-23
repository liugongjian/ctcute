<template>
  <div class="sub-transfer">
    <el-row>
      <el-col :span="12">
        <el-transfer v-model="value" :data="data" :titles="['源列表', '目标列表']"></el-transfer>
      </el-col>
      <el-col :span="12">
        <el-transfer
          v-model="value1"
          style="text-align: left; display: inline-block"
          filterable
          :left-default-checked="[5]"
          :right-default-checked="[]"
          :titles="['源列表', '目标列表']"
          :format="{
            noChecked: '${total}',
            hasChecked: '${checked}/${total}',
          }"
          :data="data"
        >
        </el-transfer>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'UiTransfer',
})
export default class extends Vue {
  public static title = {
    zh: '穿梭框',
    en: 'Transfer',
  }

  private generateData = () => {
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

  private data = this.generateData()
  private value = [1, 4]
  private value1 = [1, 4]
}
</script>
