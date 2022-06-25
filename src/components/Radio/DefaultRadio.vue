<template>
  <div class="default-radio">
    <el-radio-group v-model="radio1">
      <el-radio-button
        v-for="(item, i) in data"
        :key="i"
        :label="item.label"
        :disabled="item.disabled"
      ></el-radio-button>
    </el-radio-group>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'defaultRadio',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) data?: []
  private radio1 = '选中选项'
}
</script>

<style lang="scss" scoped>
.default-radio {
  ::v-deep.el-radio-group .el-radio-button {
    margin-left: 0;
  }

  ::v-deep.el-radio-group .el-radio-button:not(.is-active) .el-radio-button__inner {
    background-color: #ffff;
    border: 1px solid #ddd;

    &:not(.el-radio-group .el-radio-button.is-disabled .el-radio-button__inner):hover {
      color: $color-master-1;
    }
  }

  ::v-deep.el-radio-group .el-radio-button:last-child .el-radio-button__inner {
    background-color: #f8f8f8;
    color: rgba(0, 0, 0, 30%);
    font-weight: 400;
    border-radius: 0 2px 2px 0;
  }

  ::v-deep.el-radio-group .el-radio-button.is-active .el-radio-button__inner {
    // border: none;
    background: rgba(250, 131, 52, 8%);
    border: 1px solid #fa8334;
    color: #fa8334;
    border-right: 1px solid #fa8334;
  }

  ::v-deep.el-radio-group .el-radio-button.is-active + .el-radio-button .el-radio-button__inner {
    border-left: none;
  }

  ::v-deep.el-radio-group .el-radio-button:not(:last-child):not(.is-active) .el-radio-button__inner {
    border-right: none;
  }

  ::v-deep.el-radio-button__orig-radio:checked + .el-radio-button__inner {
    box-shadow: none;
  }
}
</style>
