<template>
  <div>
    <el-form :model="form" ref="simpleForm" label-width="120px" class="simple-form">
      <el-form-item label="策略名称" prop="name">
        <el-input
          v-model="form.name"
          placeholder="请输入策略名称"
        />
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="form.remark"
          placeholder="请输入备注信息"
          type="textarea"
          :rows="3"
          maxlength="128"
          show-word-limit
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'PlayerDebug'
})
export default class extends Vue {
  private form = {
    name: null,
    remark: null
  }
}
</script>
<style lang="scss" scoped>
  .el-input,
  .el-select,
  .el-textarea,
  .el-cascader {
    width: 400px;
  }
</style>
