<template>
  <el-card>
    <el-form ref="simpleForm" :model="form" :rules="rules" label-width="130px" class="simple-form">
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
      <el-form-item label="告警对象" prop="alertTarget">
        <el-select
          v-model="form.alertTarget"
          placeholder="请选择告警对象"
        >
          <el-option
            v-for="item in alertTargetOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="通知对象" prop="notifyTarget">
        <el-radio-group
          v-model="form.notifyTarget"
          placeholder="请选择通知对象"
        >
          <el-radio-button
            v-for="item in notifyTargetOptions"
            :key="item.value"
            :label="item.value"
          >
            {{ item.label }}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="六字标题测试" prop="longTitle">
        <el-input
          v-model="form.longTitle"
          placeholder="请输入六字标题测试"
        />
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" :loading="submitting" @click="submit">确 定</el-button>
        <el-button @click="back">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'SimpleForm'
})
export default class extends Vue {
  /* 表单对象 */
  private form = {
    name: null,
    remark: null,
    alertTarget: null,
    notifyTarget: 1,
    longTitle: null
  }

  /* 告警对象下拉框选项 */
  private alertTargetOptions = [
    {
      label: 'MySql',
      value: 'mysql'
    },
    {
      label: 'MongoDB',
      value: 'mongodb'
    }
  ]

  /* 通知对象单选控件选项 */
  private notifyTargetOptions = [
    {
      label: '联系人',
      value: 1
    },
    {
      label: '发件人',
      value: 2
    }
  ]

  /* 表单校验规则 */
  private rules = {
    name: [
      { required: true, message: '请输入策略名称', trigger: 'blur' }
    ],
    remark: [
      { required: true, message: '请输入备注信息', trigger: 'blur' }
    ]
  }

  /* 表单提交状态 */
  private submitting = false

  /* 提交表单 */
  private submit() {
    const simpleForm: any = this.$refs.simpleForm
    simpleForm.validate(valid => {
      if (valid) {
        this.$message.success('提交成功！')
      } else {
        return false
      }
    })
  }

  /* 取消返回 */
  private back() {
    console.log('返回')
  }
}
</script>
<style lang="scss" scoped>
  .simple-form {
    margin-top: 15px;
  }

  .el-input,
  .el-select,
  .el-textarea {
    width: 400px;
  }
</style>
