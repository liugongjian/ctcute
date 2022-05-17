<template>
  <el-card class="simple-form">
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
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="沉默周期" prop="duration">
        <el-select
          v-model="form.duration"
          placeholder="请选择沉默周期"
        >
          <el-option
            v-for="item in durationOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="告警级别" prop="alertLevel">
        <el-select
          v-model="form.alertLevel"
          placeholder="请选择告警级别"
        >
          <el-option
            v-for="item in alertLevelOptions"
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
import { createSimpleForm, getAlertTarget } from '@/api/form'
import { SimpleForm } from './SimpleForm'

@Component({
  name: 'SimpleForm'
})
export default class extends Vue {
  // 表单对象
  private form: SimpleForm = {
    name: null,
    remark: null,
    alertTarget: null,
    duration: null,
    notifyTarget: 1,
    longTitle: null
  }

  // 告警对象下拉框选项
  private alertTargetOptions = []

  // 沉默周期选项
  private durationOptions = [
    {
      label: '1分钟',
      value: 3600
    },
    {
      label: '3分钟',
      value: 3 * 3600
    },
    {
      label: '5分钟',
      value: 5 * 3600
    }
  ]

  // 告警级别选项
  private alertLevelOptions = [
    {
      label: '紧急',
      value: 1
    },
    {
      label: '一般',
      value: 2
    }
  ]

  // 通知对象单选控件选项
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

  // 表单校验规则
  private rules = {
    name: [
      { required: true, message: '请输入策略名称', trigger: 'blur' }
    ],
    alertTarget: [
      { required: true, message: '请选择告警对象', trigger: 'change' }
    ],
    duration: [
      { required: true, message: '请选择沉默周期', trigger: 'change' }
    ],
    alertLevel: [
      { required: true, message: '请选择告警级别', trigger: 'change' }
    ]
  }

  // 表单提交状态
  private submitting = false

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getAlertTarget()
  }

  /**
   * 获取获取告警对象
   */
  private async getAlertTarget() {
    try {
      const res = await getAlertTarget()
      this.alertTargetOptions = res.data
    } catch (e) {
      this.$message.error(e)
    }
  }

  /**
   * 提交表单
   */
  private submit() {
    const simpleForm: any = this.$refs.simpleForm
    simpleForm.validate(valid => {
      if (valid) {
        this.create()
      } else {
        return false
      }
    })
  }

  /**
   * 创建表单
   * 调用后端创建接口
   */
  private async create() {
    try {
      this.submitting = true
      const res = await createSimpleForm(this.form)
      const data = res.data
      this.$message.success(`创建成功！ID: ${data.id}`)
    } catch (e) {
      this.$message.error('创建失败！')
    } finally {
      this.submitting = false
    }
  }

  /**
   * 返回
   */
  private back() {
    console.log('返回')
  }
}
</script>
