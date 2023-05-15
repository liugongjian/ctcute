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

<style lang="scss" scoped>
.combination-button {
  .el-button + .el-button {
    margin-left: -1px;
    z-index: 1;
  }

  .el-button + .el-dropdown {
    margin: 0;
  }

  .el-dropdown + .el-button {
    margin: 0;
  }

  .el-button--medium {
    border-radius: 0;

    &:hover,
    &:focus {
      position: relative;
      z-index: $zindex-table-fixed;
    }
  }

  .el-button--medium:first-child {
    border-radius: 2px 0 0 2px;
  }

  .el-button--medium:last-child {
    border-radius: 0 2px 2px 0;
  }

  .el-button + .el-dropdown {
    margin-left: -1px;
    .el-button--medium {
      border-radius: 0;
      border-right: 0;
      &:hover {
        position: relative;
        border-color: $color-master-1 !important;
      }
    }
  }
}
</style>
