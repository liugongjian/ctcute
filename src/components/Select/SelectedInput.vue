<template>
  <div class="selected-input">
    <el-select ref="select" v-model="sele" popper-class="select-field" @change="change">
      <el-option v-for="(v, i) in optionData" :key="i" :label="v.label" :value="v.value" class="field-option">
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'SelectedInput',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) data?: []
  @Prop({ type: Array, default: [] }) optionData?: []
  private sele = ''
  private created() {
    this.data.length > 0 ? (this.sele = `操作已选项(${this.data.length})`) : (this.sele = '操作已选项')
  }

  private change() {
    this.sele = `操作已选项(${this.data.length})`
    this.$emit('request', this.data)
  }
}
</script>

<style lang="scss" scoped>
.selected-input {
  ::v-deep .el-input.el-input--medium.el-input--suffix {
    width: auto;
    padding-right: 0;
    font-size: 12px;
  }
  ::v-deep.el-input__inner {
    padding-right: 0;
    color: $primary;
  }
}
</style>
