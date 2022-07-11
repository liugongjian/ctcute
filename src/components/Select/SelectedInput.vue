<template>
  <div class="selected-input">
    <el-select ref="select" v-model="sele" :class="flag ? 'select-field' : 'el-select'" @change="change">
      <el-option
        v-for="(v, i) in optionData"
        :key="i"
        :label="v.label"
        :value="v.value"
        class="field-option"
        :disabled="v.disabled"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'SelectedInput',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) data?: []
  @Prop({ type: Array, default: [] }) optionData?: []
  private sele = ''
  private flag = false
  private created() {
    if (this.data.length > 0) {
      this.flag = true
      this.sele = `操作已选项(${this.data.length})`
    } else {
      this.flag = false
      this.sele = '操作已选项'
    }
  }

  @Watch('data')
  private change() {
    if (this.data.length > 0) {
      this.flag = true
      this.sele = `操作已选项(${this.data.length})`
    } else {
      this.flag = false
      this.sele = '操作已选项'
    }
    this.$emit('request', this.data)
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  ::v-deep .el-input.el-input--medium.el-input--suffix {
    width: 130px;
    padding-right: 0;
  }

  ::v-deep.el-input__inner {
    padding-right: 0px;
    color: $color-grey-1;
  }
}

.select-field {
  ::v-deep.el-input__inner {
    padding-right: 0;
    color: $color-master-1;
    padding-left: 11px;
  }
}
</style>
