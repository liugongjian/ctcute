<!--
 * @Author: 朱凌浩
 * @Date: 2022-07-12 14:03:28
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-04-07 14:46:39
 * @Description: 基础表单
-->
<template>
  <el-card class="simple-form">
    <!-- <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group> -->
    <el-form
      ref="simpleForm"
      :label-position="labelPosition"
      :model="form"
      :rules="rules"
      label-width="90px"
      class="simple-form"
    >
      <el-form-item label="输入查询" prop="name">
        <el-input v-model="form.name" placeholder="请输入策略名称" />
        <div class="form-item__tip">策略格式为XXXXXXXXXXXXXXXXX</div>
      </el-form-item>
      <el-form-item label="备注/描述" prop="remark">
        <el-input
          v-model="form.remark"
          placeholder="请输入/描述备注信息"
          type="textarea"
          :rows="3"
          maxlength="128"
          show-word-limit
        />
      </el-form-item>
      <el-form-item label="置灰输入" prop="disabledInput">
        <el-input v-model="form.disabledInput" :disabled="true" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="置灰下拉" prop="disabledSelect">
        <el-select v-model="form.disabledSelect" :disabled="true" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="标题测试" prop="longText">
        <el-select v-model="form.longText" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <cute-form-info title="标题测试" content="对标题测试的详细说明" />
      </el-form-item>
      <el-form-item label="单选" prop="radio">
        <el-radio-group v-model="form.radio">
          <el-radio v-for="item in options" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="多选" prop="checkbox">
        <el-checkbox-group v-model="form.checkbox">
          <el-checkbox v-for="item in options" :key="item.value" :label="item.value">{{
            item.label
          }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="短数字端" prop="shortNumber" class="form-item--short">
        <el-input-number
          v-model="form.shortNumber"
          controls-position="right"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="短数字端" prop="shortNumber" class="form-item--short">
        <el-input v-model.number="form.shortNumberInput" type="number">
          <span slot="suffix" class="icon-money">元</span>
        </el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" :loading="submitting" @click="submit">确 定</el-button>
        <el-button @click="back">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import * as SimpleForm from '@/types/SimpleForm'
import { createSimpleForm, getOptions } from '@/api/simpleForm'

@Component({
  name: 'SimpleForm',
})
export default class extends Vue {
  // 表单Ref对象
  @Ref('simpleForm')
  private simpleFormRef
  private labelPosition = 'right'
  // 表单对象
  private form: SimpleForm.Form = {
    name: null,
    remark: null,
    disabledInput: '输入值',
    disabledSelect: null,
    longTitle: null,
    radio: null,
    checkbox: [],
    shortNumber: 0,
    shortNumberInput: 2,
  }

  // 多选项
  private options = []

  // 表单校验规则
  private rules = {
    name: [{ required: true, message: '请输入策略名称', trigger: 'blur' }],
    disabledInput: [{ required: true, message: '请输入', trigger: 'blur' }],
    disabledSelect: [{ required: true, message: '请选择', trigger: 'change' }],
    radio: [{ required: true, message: '请选择', trigger: 'change' }],
  }

  // 表单提交状态
  private submitting = false

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getOptions()
  }

  /**
   * 获取获取告警对象
   */
  private async getOptions() {
    try {
      const res = await getOptions()
      this.options = res.data
      this.form.disabledSelect = this.options[0].value
    } catch (e) {
      this.$message.error(e)
    }
  }

  /**
   * 提交表单
   */
  private submit() {
    this.simpleFormRef.validate(valid => {
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
