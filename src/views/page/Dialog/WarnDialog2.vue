<!--
 * @Author: 朱凌浩
 * @Date: 2022-07-08 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-24 14:50:27
 * @Description: 告警弹窗-有2次输入确认
-->
<template>
  <el-card>
    <h2>警告弹窗</h2>
    <p>警告提示-有2次输入确认</p>
    <el-button type="primary" @click="open">警告弹窗</el-button>
    <el-dialog width="480px" :title="title" :visible="visible" :close-on-click-modal="false" @close="close">
      <el-alert
        title="删除该project数据后，数据将无法恢复，确定要删除吗？"
        type="warning"
        show-icon
        :closable="false"
        class="warn-tip"
      />
      <el-form ref="warnDialog2" :rules="rules" :model="form" label-width="84px">
        <el-form-item label="项目名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入项目名称" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">{{ cancelButtonText }}</el-button>
        <el-button type="primary" :loading="submitting" @click="confirm">{{ confirmButtonText }}</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import WarnDialog2 from '@/types/WarnDialog2'
import { createWarnDialog2 } from '@/api/warnDialog2'

@Component({
  name: 'WarnDialog2',
})
export default class extends Vue {
  @Prop({ default: '取消' }) readonly cancelButtonText: string
  @Prop({ default: '确定' }) readonly confirmButtonText: string
  // 表单Ref对象
  @Ref('warnDialog2')
  private warnDialog2Ref

  // 表单提交状态
  private submitting = false

  private form: WarnDialog2.Form = {
    name: '',
  }
  // 表单校验规则
  private rules = {
    name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
  }
  private visible = false
  private title = '警告提示'
  private open() {
    this.visible = true
  }
  private close() {
    this.visible = false
  }

  //弹窗确认事件
  private async confirm() {
    this.warnDialog2Ref.validate(valid => {
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
      const res = await createWarnDialog2(this.form)
      const data = res.data
      this.$message.success(`创建成功！ID: ${data.id}`)
      this.visible = false
    } catch (e) {
      this.$message.error('创建失败！')
    } finally {
      this.submitting = false
    }
  }
}
</script>
<style lang="scss" scoped>
.warn-tip {
  display: block !important;
  margin-bottom: $margin-6x;
}
</style>
