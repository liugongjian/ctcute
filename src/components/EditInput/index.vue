<template>
  <span>
    <el-button v-if="!editing" type="text">描述 <svg-icon name="edit" @click="editing = true" /></el-button>
    <span v-else class="wrap">
      <el-input placeholder="请输入" value="描述"></el-input>
      <svg-icon name="check" class="edit-input-icon" color="#52C41A" />
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
  private editing = false
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 384px;
  display: inline-block;
  .el-input {
    width: calc(100% - 84px);
    margin-right: 20px;
  }
  svg {
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
  }
}

</style>
