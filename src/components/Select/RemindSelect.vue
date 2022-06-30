<template>
  <el-select v-model="value" filterable :placeholder="placeholder" clearable>
    <span slot="prefix" class="prefix-placeholder">{{ value ? placeholder : '' }}</span>
    <el-option v-for="item in data" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'remindSelect',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) data?: []
  @Prop({ type: String, default: '' }) placeholder?: ''
  private value = ''
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100%;

  ::v-deep.el-input__inner {
    padding-left: 12px;
  }

  ::v-deep.el-input__prefix {
    position: absolute;
    right: 33px;

    span {
      color: #999;
      position: absolute;
      right: 0;
    }
  }
}
</style>
