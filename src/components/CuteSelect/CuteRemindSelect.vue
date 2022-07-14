<template>
  <el-select v-model="model" filterable :placeholder="placeholder" clearable>
    <span slot="prefix" class="prefix-placeholder">{{ model ? title : '' }}</span>
    <el-option v-for="item in data" :key="item.value" :label="item.label" :value="item.value"> </el-option>
  </el-select>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'CuteRemindSelect',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) data?: [] // 下拉数据
  @Prop({ type: String, default: '' }) placeholder?: '' // placeholder
  @Prop({ type: String, default: '' }) title?: '' // 提示文案
  @Prop({ type: String, default: '' }) model?: '' // v-mdel 信息
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
