<template>
  <div class="combination-button">
    <el-button v-for="(v, i) in newData" :key="i">{{ v }} </el-button>
    <el-dropdown v-if="data.length > max">
      <el-button>...</el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(v, i) in data" :key="i">{{ v }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button type="primary">主操作</el-button>
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
  private newData = []
  private created() {
    this.newData = this.data.length > this.max ? this.data.slice(0, this.max) : this.data
  }
}
</script>
