<!--
 * @Author: 王亚振
 * @Date: 2023-03-21 14:03:10
 * @LastEditors: liugongjian
 * @LastEditTime: 2023-04-13 15:13:18
 * @Description:
-->
<template>
  <div class="combination-button">
    <el-button v-for="(v, i) in newData" :key="i" @click="() => btnClicked(v)">{{ v.label }} </el-button>
    <el-dropdown v-if="data.length > max" @command="handleCommand">
      <el-button>...</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(v, i) in data" :key="i" :command="v">{{ v.label }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button v-if="main" type="primary" @click="() => btnClicked(main)">{{ main.label }}</el-button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'CuteButtonGroup',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) data?: []
  @Prop({ type: Number, default: 0 }) max?: number
  private main = null
  private newData = []
  private created() {
    this.newData = this.data.length > this.max ? this.data.slice(0, this.max) : this.data
    this.main = this.data.pop()
  }
  private btnClicked(v) {
    this.$emit('change', v.name)
  }
  private handleCommand(command) {
    this.btnClicked(command)
  }
}
</script>
