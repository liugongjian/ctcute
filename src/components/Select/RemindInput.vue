<template>
  <div class="remind-input">
    <!-- <el-select
      v-model="value"
      :value="[]"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="请选择数据资源事权单位"
    >
      <option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">1</option>
    </el-select> -->
    <el-select v-model="value" filterable placeholder="">
      <span slot="prefix" class="prefix-placeholder">{{ placeholder }}</span>
      <el-option v-for="item in data" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'remindInput',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) data?: []
  @Prop({ type: String, default: '' }) placeholder?: ''
  private value = ''
}
</script>

<style lang="scss" scoped>
.el-select {
  ::v-deep.el-input__inner {
    padding-left: 12px;
  }
  ::v-deep.el-input__prefix {
    position: absolute;
    right: 33px;
    span {
      color: #999999;
      position: absolute;
      right: 0;
    }
  }
}
</style>
