<template>
  <el-card>
    <div class="step-form">
      <el-steps :active="active" class="steps" finish-status="success" space="30%">
        <el-step
          v-for="(s, index) in steps"
          :key="index"
          :title="gettitle(s, index)"
          :status="s.status"
          :class="{ stepErr: s.disabled }"
        ></el-step>
      </el-steps>

      <div class="form-content">
        <!-- 第一步表单 -->
        <el-form v-show="active === 0" ref="firstForm" :model="firstForm" :rules="rules" label-width="130px">
          <el-form-item label="输入查询" prop="name">
            <el-input v-model="firstForm.name" placeholder="请输入策略名称" />
            <div class="form-item__tip">策略格式为XXXXXXXXXXXXXXXXX</div>
          </el-form-item>
          <el-form-item label="备注/描述" prop="remark">
            <el-input
              v-model="firstForm.remark"
              placeholder="请输入备注/描述信息"
              type="textarea"
              :rows="3"
              maxlength="128"
              show-word-limit
            />
          </el-form-item>
          <el-form-item label="置灰输入" prop="disabledInput">
            <el-input v-model="firstForm.disabledInput" :disabled="true" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="置灰下拉" prop="disabledSelect">
            <el-select v-model="firstForm.disabledSelect" :disabled="true" placeholder="请选择">
              <el-option v-for="item in disabledSelectOptions" :key="item" :label="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item label="超长标题测试" prop="longText">
            <el-select v-model="firstForm.longText" placeholder="请选择">
              <el-option v-for="item in disabledSelectOptions" :key="item" :label="item" :value="item" />
            </el-select>
            <cute-form-info title="标题测试" content="对标题测试的详细说明" />
          </el-form-item>
          <el-form-item label="单选" prop="radio">
            <el-radio v-model="firstForm.radio" label="1">未选中项</el-radio>
            <el-radio v-model="firstForm.radio" label="2">已选中项</el-radio>
            <el-radio v-model="firstForm.radio" label="3">未选中项</el-radio>
          </el-form-item>
          <el-form-item label="多选" prop="checkbox">
            <el-checkbox-group v-model="firstForm.checkbox">
              <el-checkbox label="未选中项"></el-checkbox>
              <el-checkbox label="已选中项"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="短数字端" prop="shortNumber">
            <el-input-number
              v-model="firstForm.shortNumber"
              controls-position="right"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>
          <el-form-item label="标签" prop="price">
            <el-tag
              v-for="tag in firstForm.tag"
              :key="tag"
              type="info"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-input
              v-if="inputVisible"
              ref="saveTagInput"
              v-model="inputValue"
              size="small"
              class="input-new-tag"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-tag v-else type="newtag" :disable-transitions="true" @click="showInput">+ 标签</el-tag>
          </el-form-item>
        </el-form>
        <!-- 第二步表单 -->
        <el-form
          v-show="active === 1"
          ref="secondForm"
          :model="secondForm"
          :rules="rules"
          label-width="130px"
        >
          <el-form-item label="输入查询" prop="name">
            <el-input v-model="secondForm.name" placeholder="请输入策略名称" />
            <div class="form-item__tip">策略格式为XXXXXXXXXXXXXXXXX</div>
          </el-form-item>
          <el-form-item label="备注/描述" prop="remark">
            <el-input
              v-model="secondForm.remark"
              placeholder="请输入备注/描述信息"
              type="textarea"
              :rows="3"
              maxlength="128"
              show-word-limit
            />
          </el-form-item>
          <el-form-item label="置灰输入" prop="disabledInput">
            <el-input v-model="secondForm.disabledInput" :disabled="true" placeholder="请输入" />
          </el-form-item>
          <el-form-item label="置灰下拉" prop="disabledSelect">
            <el-select v-model="secondForm.disabledSelect" :disabled="true" placeholder="请选择">
              <el-option v-for="item in disabledSelectOptions" :key="item" :label="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item label="超长标题测试" prop="longText">
            <el-select v-model="secondForm.longText" placeholder="请选择">
              <el-option v-for="item in disabledSelectOptions" :key="item" :label="item" :value="item" />
            </el-select>
            <cute-form-info title="标题测试" content="对标题测试的详细说明" />
          </el-form-item>
          <el-form-item label="单选" prop="radio">
            <el-radio v-model="secondForm.radio" label="1">未选中项</el-radio>
            <el-radio v-model="secondForm.radio" label="2">已选中项</el-radio>
            <el-radio v-model="secondForm.radio" label="3">未选中项</el-radio>
          </el-form-item>
          <el-form-item label="多选" prop="checkbox">
            <el-checkbox-group v-model="secondForm.checkbox">
              <el-checkbox label="未选中项"></el-checkbox>
              <el-checkbox label="已选中项"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="短数字端" prop="shortNumber">
            <el-input-number
              v-model="secondForm.shortNumber"
              controls-position="right"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>
        </el-form>
        <!-- 第三步表单 -->
        <el-descriptions v-show="active === 2" class="descriptions" :column="1" size="small" border>
          <el-descriptions-item>
            <template slot="label"> 数据库类型 </template>
            Spark
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 配置时间 </template>
            2018-04-24 18:00:00
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 所属业务 </template>
            金融科技-Tech UI
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 存储量(GB) </template>
            50
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 生命周期(天) </template>
            30
          </el-descriptions-item>
        </el-descriptions>
        <el-result v-show="active > 2" icon="success" sub-title="恭喜你提交成功"> </el-result>
      </div>

      <div class="footer">
        <div v-if="active === steps.length - 1">
          <el-button class="btn-style" type="primary" :loading="submitting" @click="create">
            提交信息
          </el-button>
          <el-button
            :loading="submitting"
            @click="
              () => {
                active--
              }
            "
          >
            上一步
          </el-button>
        </div>

        <div v-else-if="active >= steps.length">
          <el-button class="btn-style" type="primary" @click="resetForm"> 再来一次 </el-button>
          <el-button @click="handleClick">查看结构表</el-button>
        </div>

        <div v-else>
          <el-button
            class="btn-style"
            type="primary"
            @click="
              () => {
                nextStep()
              }
            "
          >
            下一步
          </el-button>
          <el-button
            v-if="active > 0"
            @click="
              () => {
                active--
              }
            "
          >
            上一步
          </el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import * as StepForm from '@/types/StepForm'
import { createStepForm } from '@/api/stepForm'

@Component({
  name: 'StepForm',
})
export default class extends Vue {
  // 表单Ref对象
  @Ref('firstForm')
  private first

  // 表单Ref对象
  @Ref('secondForm')
  private second

  private steps = [{ title: '步骤1' }, { title: '步骤2' }, { title: '步骤3' }]

  // 步骤标识
  private active = 0

  private submitting = false

  private inputVisible = false
  private inputValue = ''

  // 表单对象
  private firstForm: StepForm.Form = {
    name: null,
    remark: null,
    disabledInput: 'test',
    disabledSelect: 'test',
    longTitle: null,
    radio: '2',
    checkbox: ['已选中项'],
    shortNumber: 1,
    price: 2,
    tag: [],
  }

  private secondForm: StepForm.Form = {
    name: null,
    remark: null,
    disabledInput: 'test',
    disabledSelect: 'test',
    longTitle: null,
    radio: '2',
    checkbox: ['已选中项'],
    shortNumber: 1,
    price: 2,
    tag: [],
  }

  // 表单校验规则
  private rules = {
    name: [{ required: true, message: '请输入策略名称', trigger: 'blur' }],
    disabledInput: [{ required: true, message: '请输入置灰输入', trigger: 'change' }],
    disabledSelect: [{ required: true, message: '请选择置灰下拉', trigger: 'change' }],
    longTitle: [{ required: true, message: '请输入超长标题测试', trigger: 'change' }],
    radio: [{ required: true, message: '请选择单选', trigger: 'change' }],
  }

  // 置灰下拉框选项
  private disabledSelectOptions: string[] = []

  private gettitle(s: any, index: number) {
    if (index === this.active) {
      return '正在处理'
    } else if (index > this.active) {
      return '等待处理'
    } else if (index < this.active) {
      return '处理完成'
    }
  }

  private showInput() {
    this.inputVisible = true
    this.$nextTick(() => {
      const saveTagInput: any = this.$refs.saveTagInput
      const saveTagInputRefs: any = saveTagInput.$refs
      saveTagInputRefs.input.focus()
    })
  }

  private handleInputConfirm() {
    const inputValue = this.inputValue
    if (inputValue) {
      this.firstForm.tag.push(inputValue)
    }
    this.inputVisible = false
    this.inputValue = ''
  }

  private handleClose(tag) {
    this.firstForm.tag.splice(this.firstForm.tag.indexOf(tag), 1)
  }

  private async nextStep() {
    let valid = true
    if (this.active === 0) {
      valid = await this.first.validate()
    } else if (this.active === 1) {
      valid = await this.second.validate()
    }

    if (valid) {
      this.active++
    }
  }

  private async create() {
    try {
      this.submitting = true
      const params = {
        first: this.firstForm,
        second: this.secondForm,
      }
      const res = await createStepForm(params)
      const data = res.data
      this.$message.success(`创建成功！ID: ${data.id}`)
      this.active++
    } catch (e) {
      this.$message.error('创建失败！')
    } finally {
      this.submitting = false
    }
  }

  private resetForm() {
    this.first.resetFields()
    this.second.resetFields()
    this.active = 0
  }

  private handleClick() {
    this.$message.success('点击了查看表结构按钮')
  }
}
</script>
