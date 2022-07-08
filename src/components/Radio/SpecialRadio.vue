<template>
  <div class="special-radio">
    <el-radio-group v-model="radio1" :size="size">
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
  name: 'specialRadio',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) data?: []
  @Prop({ type: String, default: '' }) size?: ''

  private radio1 = 'Active'
}
</script>

<style lang="scss" scoped>
.special-radio {
  ::v-deep.el-radio-group .el-radio-button--medium .el-radio-button__inner {
    padding: 8px 20px;
  }

  ::v-deep.el-radio-group .el-radio-button--small .el-radio-button__inner {
    padding: 6px 9px;
  }

  .el-radio-group .el-radio-button {
    margin-left: 2px;

    ::v-deep.el-radio-button__inner {
      border: none;
    }
  }

  ::v-deep.el-radio-group .el-radio-button:not(.is-active):not(.is-disabled) .el-radio-button__inner {
    background: #ffefe3;
    color: $color-grey-1;

    &:hover {
      background: #ffe6d2;
      color: $color-grey-1;
    }
  }

  ::v-deep.el-radio-group .el-radio-button.is-active .el-radio-button__inner,
  .el-radio-group .el-radio-button.is-active .el-radio-button__inner :hover {
    background: $color-master-1;
    border-radius: 2px 0 0 2px;
    color: $color-white !important;
  }
}
</style>
