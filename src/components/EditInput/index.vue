<template>
  <span>
    <template v-if="!editing">{{ value }} <svg-icon class="edit-input-icon" name="edit" @click="editing = true" /></template>
    <span v-else class="wrap">
      <el-input v-model="value" :type="textarea ? 'textarea' : 'text'" placeholder="请输入"></el-input>
      <svg-icon name="check" color="#52C41A" @click="onOk" />
      <svg-icon name="close" color="#F5212D" @click="editing = false" />
    </span>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'EditInput'
})
export default class extends Vue {
  @Prop({ default: '' }) private value!: string
  @Prop({ default: false }) private textarea!: boolean
  private editing = false
  private onOk() {
    this.editing = false
    this.$emit('edit-input-save')
  }
}
</script>

<style lang="scss" scoped>
.edit-input-icon {
  font-size: $text-size-medium;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: $primary;
  }
}
.wrap {
  width: 384px;
  display: inline-block;
  .el-input {
    width: calc(100% - 84px);
  }
  .el-input,
  .el-textarea {
    margin-right: 10px;
  }
  .el-textarea ~ svg {
    margin-bottom: 8px;
  }
  svg {
    cursor: pointer;
    font-size: $text-size-large;
    margin-right: 8px;
  }
}
</style>
