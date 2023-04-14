<!--
 * @Author: 秦瑞斌
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-02-03 13:30:26
 * @Description: 复杂表单1
-->
<template>
  <div class="pro-form1">
    <el-card>
      <el-form ref="proForm1" :model="form" :rules="rules" label-width="130px">
        <cute-titled-block title="基本信息">
          <template #content>
            <el-form-item label="策略名称" prop="name">
              <el-input v-model="form.name" placeholder="请输入策略名称" />
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
          </template>
        </cute-titled-block>
        <el-divider></el-divider>
        <cute-titled-block title="告警信息">
          <template #content>
            <el-form-item label="告警对象" prop="alertTarget">
              <el-select v-model="form.alertTarget" placeholder="请选择告警对象">
                <el-option v-for="item in alertTargetOptions" :key="item" :label="item" :value="item" />
              </el-select>
            </el-form-item>
            <el-form-item label="沉默周期" prop="duration">
              <el-select v-model="form.duration" placeholder="请选择沉默周期">
                <el-option
                  v-for="item in durationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="告警级别" prop="alertLevel">
              <el-select v-model="form.alertLevel" placeholder="请选择告警级别">
                <el-option
                  v-for="item in alertLevelOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="模板类型" prop="templateType">
              <el-table border style="width: 97%" :data="form.tableData">
                <el-table-column min-width="180" label="监控指标">
                  <template slot-scope="scope">
                    <el-form-item
                      :prop="'tableData.' + scope.$index + '.monitorIndicators'"
                      :rules="rules.templateType.monitor"
                    >
                      <el-select
                        v-model="scope.row.monitorIndicators"
                        placeholder="请选择"
                        style="width: 160px"
                      >
                        <el-option
                          v-for="item in monitorOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column min-width="170" label="时间区间">
                  <template slot-scope="scope">
                    <el-form-item
                      :prop="'tableData.' + scope.$index + '.timeSection'"
                      :rules="rules.templateType.monitor"
                    >
                      <el-select v-model="scope.row.timeSection" placeholder="请选择" style="width: 160px">
                        <el-option
                          v-for="item in timeSectOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column min-width="345" label="计算方法">
                  <template slot-scope="scope">
                    <el-form-item
                      style="display: inline-block"
                      :prop="'tableData.' + scope.$index + '.computValue'"
                      :rules="rules.templateType.monitor"
                    >
                      <el-select
                        v-model="scope.row.computValue"
                        placeholder="请选择"
                        style="width: 90px; margin-right: 8px"
                      >
                        <el-option
                          v-for="item in computOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      style="display: inline-block"
                      :prop="'tableData.' + scope.$index + '.operation'"
                      :rules="rules.templateType.monitor"
                    >
                      <el-select
                        v-model="scope.row.operation"
                        placeholder="请选择"
                        style="width: 90px; margin-right: 8px"
                      >
                        <el-option
                          v-for="item in operationOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      style="display: inline-block"
                      :prop="'tableData.' + scope.$index + '.calculate'"
                      :rules="rules.templateType.percentage"
                    >
                      <el-input
                        v-model="scope.row.calculate"
                        placeholder="请输入"
                        style="width: 90px; margin-right: 8px"
                      />
                    </el-form-item>

                    %
                  </template>
                </el-table-column>
                <el-table-column prop="templateType" label="出现次数" min-width="170">
                  <template slot-scope="scope">
                    <el-form-item
                      :prop="'tableData.' + scope.$index + '.occurrences'"
                      :rules="rules.templateType.monitor"
                    >
                      <el-select v-model="scope.row.occurrences" placeholder="请选择" style="width: 160px">
                        <el-option
                          v-for="item in occurrencesOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-form-item>
                  </template>
                </el-table-column>
                <el-table-column prop="1" label="操作" min-width="100">
                  <template slot-scope="scope">
                    <el-button type="text" @click="handleDelete(scope.row.id)">删除</el-button>
                  </template>
                </el-table-column>
                <template #append>
                  <div class="el-table__append-row">
                    <el-button style="width: 97%; height: 42px" type="text" @click="addCondit">
                      +添加条件
                    </el-button>
                  </div>
                </template>
              </el-table>
            </el-form-item>
          </template>
        </cute-titled-block>
        <el-divider></el-divider>
        <cute-titled-block title="通知设置">
          <template #content>
            <el-form-item label="标题测试" prop="longTitle">
              <el-input v-model="form.longTitle" placeholder="请输入" />
            </el-form-item>
            <el-form-item label="选择对象" prop="chooseObjs">
              <el-select v-model="form.chooseObjs" placeholder="请选择对象">
                <el-option
                  v-for="item in choObjsOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </template>
        </cute-titled-block>
      </el-form>
    </el-card>
    <div class="pro-form-bottom">
      <el-button type="primary" :loading="submitting" style="margin: 0 16px 0 40px" @click="submit"
        >提 交</el-button
      >
      <el-button @click="back">取 消</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import * as ProForm1 from '@/types/ProForm1'
import { CuteTitledBlock } from '@cutedesign/ui'
import { createProForm1, getAlertTarget } from '@/api/proForm1'

@Component({
  name: 'ProForm1',
  components: {
    CuteTitledBlock,
  },
})
export default class extends Vue {
  // 表单Ref对象
  @Ref('proForm1')
  private proForm1Ref

  // 表单对象
  private form: ProForm1.Form = {
    name: null,
    remark: null,
    alertTarget: null,
    duration: null,
    alertLevel: null,
    longTitle: null,
    chooseObjs: 1,
    tableData: [
      {
        id: 1,
        monitorIndicators: 1,
        timeSection: 1,
        computValue: 1,
        operation: 1,
        occurrences: 1,
        calculate: 50,
      },
      {
        id: 2,
        monitorIndicators: 2,
        timeSection: 2,
        computValue: 2,
        operation: 2,
        occurrences: 2,
        calculate: 80,
      },
    ],
  }

  // 告警对象下拉框选项
  private alertTargetOptions: string[] = []

  // 沉默周期选项
  private durationOptions = [
    {
      label: '1分钟',
      value: 3600,
    },
    {
      label: '3分钟',
      value: 3 * 3600,
    },
    {
      label: '5分钟',
      value: 5 * 3600,
    },
  ]

  // 告警级别选项
  private alertLevelOptions = [
    {
      label: '紧急',
      value: 1,
    },
    {
      label: '一般',
      value: 2,
    },
  ]

  // 监控指标选项
  private monitorOptions = [
    {
      label: '主节点CPU使用率',
      value: 1,
    },
    {
      label: '副节点CPU使用率',
      value: 2,
    },
  ]

  // 时间区间选项
  private timeSectOptions = [
    {
      label: '5分钟',
      value: 1,
    },
    {
      label: '10分钟',
      value: 2,
    },
  ]

  // 计算方法选项
  private computOptions = [
    {
      label: '平均值',
      value: 1,
    },
    {
      label: '总值',
      value: 2,
    },
  ]

  private operationOptions = [
    {
      label: '> =',
      value: 1,
    },
    {
      label: '< =',
      value: 2,
    },
  ]

  private occurrencesOptions = [
    {
      label: '连续一个周期',
      value: 1,
    },
    {
      label: '连续两个周期',
      value: 2,
    },
  ]

  // 选择对象
  private choObjsOptions = [
    {
      label: '可不选',
      value: 1,
    },
    {
      label: '选中条件',
      value: 2,
    },
  ]

  // 通知对象单选控件选项
  private notifyTargetOptions = [
    {
      label: '联系人',
      value: 1,
    },
    {
      label: '发件人',
      value: 2,
    },
  ]

  private valValue = (rule, value, callback) => {
    return callback()
  }

  // 表单校验规则
  private rules = {
    name: [{ required: true, message: '请输入策略名称', trigger: 'blur' }],
    alertTarget: [{ required: true, message: '请选择告警对象', trigger: 'change' }],
    duration: [{ required: true, message: '请选择沉默周期', trigger: 'change' }],
    alertLevel: [{ required: true, message: '请选择告警级别', trigger: 'change' }],
    templateType: {
      required: true,
      validator: this.valValue,
      monitor: { required: true, message: '请选择', trigger: 'change' },
      percentage: {
        required: true,
        pattern: /^(\d|[1-9]\d|100)(\.\d{1,2})?$/,
        message: '请输入一百以内最多两位小数',
        trigger: 'blur',
      },
    },
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
    this.proForm1Ref.validate(valid => {
      if (valid) {
        this.create()
      } else {
        return false
      }
    })
  }

  /**
   * 添加条件
   */
  private addCondit() {
    this.form.tableData.push({
      id: Date.now(),
      monitorIndicators: 1,
      timeSection: 1,
      computValue: 1,
      operation: 1,
      occurrences: 1,
      calculate: 50,
    })
  }

  /**
   * 前端过滤删除当前项
   */
  private handleDelete(id: number) {
    if (this.form.tableData.length > 1) {
      this.form.tableData = this.form.tableData.filter(item => item.id !== id)
    } else {
      this.$message.error('至少添加一条数据！')
    }
  }

  /**
   * 创建表单
   * 调用后端创建接口
   */
  private async create() {
    try {
      this.submitting = true
      const res = await createProForm1(this.form)
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
