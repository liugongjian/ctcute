<template>
  <el-input
    class="inline-input"
    :placeholder="placeholder"
    :trigger-on-focus="false"
    :value="value"
    @input="myChange($event)"
  >
    <span slot="suffix" class="prompt-title"
      ><div>{{ value ? label : '' }}</div>
    </span>
  </el-input>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator'

@Component({
  name: 'CuteRemindInput',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) restaurants?: []
  @Prop({ type: String, default: '' }) placeholder?: '' //placeholder
  @Prop({ type: String, default: '' }) label?: '' //label

  @Model('change', { type: String }) value: string
  @Emit('change')
  myChange(key) {
    return key
  }
}
</script>

<style lang="scss" scoped>
::v-deep.el-autocomplete.inline-input {
  width: 300px;
  height: 32px;

  .el-input--suffix .el-input__inner {
    padding-right: 86px;
  }

  .prompt-title {
    line-height: 32px;
    margin-right: 12px;
  }
}
</style>
