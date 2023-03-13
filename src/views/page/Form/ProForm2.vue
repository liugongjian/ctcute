<!--
 * @Author: 秦瑞斌
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 胡一苗
 * @LastEditTime: 2023-02-03 13:27:48
 * @Description: 复杂表单2
-->
<template>
  <div class="pro-form2">
    <el-card>
      <el-form ref="proForm2" :model="form" :rules="rules" label-width="130px" label-position="top">
        <cute-titled-block title="基本信息">
          <template #content>
            <div class="form-items">
              <el-form-item label="所属环境">
                <el-select v-model="form.environment" placeholder="请选择">
                  <el-option
                    v-for="item in environmentOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="所属集群">
                <el-select v-model="form.colony" placeholder="请选择">
                  <el-option
                    v-for="item in colonyOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="策略名称">
                <el-input v-model="form.policyName" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="告警对象">
                <el-select v-model="form.alertTarget" placeholder="请选择">
                  <el-option v-for="item in alertTargetOptions" :key="item" :label="item" :value="item" />
                </el-select>
              </el-form-item>
              <el-form-item label="沉默周期">
                <el-select v-model="form.duration" placeholder="请选择">
                  <el-option
                    v-for="item in durationOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="告警名称">
                <el-input v-model="form.alarmName" placeholder="请输入" />
              </el-form-item>
              <el-form-item label="监控对象">
                <el-select v-model="form.monitorTarget" placeholder="请选择">
                  <el-option
                    v-for="item in monitorsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="监控集群">
                <el-select v-model="form.monitorColony" placeholder="请选择">
                  <el-option
                    v-for="item in monitorColonyOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="监控名称">
                <el-input v-model="form.monitorName" placeholder="请输入" />
              </el-form-item>
            </div>
          </template>
        </cute-titled-block>
        <el-divider></el-divider>
        <cute-titled-block title="告警规则">
          <template #content>
            <el-form-item label="模板类型" prop="templateType" style="margin: 0 20px 0 40px">
              <el-table border style="width: 100%" :data="form.tableData">
                <el-table-column min-width="153" label="监控指标">
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
                <el-table-column min-width="153" label="时间区间">
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
                <el-table-column min-width="291" label="计算方法">
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
                <el-table-column prop="templateType" label="出现次数" min-width="153">
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
                  <div class="el-table__append-row" style="margin-bottom: 24px">
                    <el-button style="width: 100%; height: 42px" type="text" @click="addCondit">
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
            <div class="form-items">
              <el-form-item label="标签">
                <div class="sub-tags">
                  <cute-tag tag-name="+ 新标签" :dynamic-tags="form.dynamicTags"></cute-tag>
                </div>
              </el-form-item>
              <el-form-item label="六字标题测试">
                <el-input v-model="form.longTitle" placeholder="请输入六字标题测试" />
              </el-form-item>
              <el-form-item label="选择对象">
                <el-select v-model="form.chooseObjs" placeholder="请选择对象">
                  <el-option
                    v-for="item in choObjsOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </div>
          </template>
        </cute-titled-block>
      </el-form>
    </el-card>
    <div class="pro-form-bottom">
      <el-button type="primary" :loading="submitting" style="margin-right: 16px" @click="submit"
        >提 交</el-button
      >
      <el-button style="margin-right: 40px" @click="back">取 消</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { CuteTitledBlock } from '@cutedesign/ui'
import * as ProForm2 from '@/types/ProForm2'
import { getAlertTarget } from '@/api/simpleForm'
import { createProForm2 } from '@/api/proForm2'

@Component({
  name: 'ProForm2',
  components: {
    CuteTitledBlock,
  },
})
export default class extends Vue {
  // 表单Ref对象
  @Ref('proForm2')
  private proForm2Ref

  // 表单对象
  private form: ProForm2.Form = {
    policyName: null,
    environment: null,
    colony: null,
    alarmName: null,
    monitorTarget: null,
    monitorColony: null,
    monitorName: null,
    alertTarget: null,
    duration: null,
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
    dynamicTags: ['标签'],
  }

  // 告警对象下拉框选项
  private alertTargetOptions: string[] = []
  // 所属环境下拉框选项
  private environmentOptions = [
    {
      label: '紧急环境',
      value: 1,
    },
    {
      label: '一般环境',
      value: 2,
    },
  ]

  // 所属集群下拉框选项
  private colonyOptions = [
    {
      label: 'Offline',
      value: 1,
    },
    {
      label: 'Online',
      value: 2,
    },
  ]

  // 监控对象下拉框选项
  private monitorsOptions = [
    {
      label: '用户监控',
      value: 1,
    },
    {
      label: '应用监控',
      value: 2,
    },
  ]

  // 监控集群下拉框选项
  private monitorColonyOptions = [
    {
      label: '用户集群',
      value: 1,
    },
    {
      label: '应用集群',
      value: 2,
    },
  ]

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
    this.proForm2Ref.validate(valid => {
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
      const res = await createProForm2(this.form)
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
