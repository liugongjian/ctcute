<!--
 * @Description:
 * @Author: 甘雨涛
 * @Date: 2023/4/26 14:50
 * @LastEditors: 甘雨涛
-->
<template>
  <div class="button-demo-1">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="130px">
      <cute-titled-block title="校验样式">
        <template #content>
          <el-form-item label="显示类型">
            <el-select v-model="form.type" class="validate-select">
              <el-option
                v-for="(item, index) in validateTypeOptions"
                :key="index"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item v-if="form.type === 'tooltip'" label="显示位置">
            <el-select v-model="form.placement" class="validate-select">
              <el-option
                v-for="(item, index) in validatePlacementOptons"
                :key="index"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <div class="form-item__tip">位置参数未加监听，来回切换一下显示类型生效</div>
          </el-form-item>
        </template>
      </cute-titled-block>

      <cute-titled-block title="表单">
        <template #content>
          <el-form-item label="基础表单" prop="name" :error-show-type="form.type" :placement="form.placement">
            <el-input v-model="form.name" placeholder="请输入策略名称" class="validate-input" />
          </el-form-item>
          <el-form-item label="复杂表单" prop="templateType">
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
              <el-table-column min-width="180" label="时间区间">
                <template slot-scope="scope">
                  <el-form-item
                    :error-show-type="form.type"
                    :placement="form.placement"
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
              <el-table-column min-width="350" label="计算方法">
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
                    :error-show-type="form.type"
                    :placement="form.placement"
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
              <el-table-column prop="templateType" label="出现次数" min-width="180">
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
            </el-table>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" @click="submit">确 定</el-button>
          </el-form-item>
        </template>
      </cute-titled-block>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'vue-property-decorator'
@Component({
  name: 'Demo1',
})
export default class extends Vue {
  @Ref('formRef')
  private formRef

  rules = {
    name: [{ required: true, message: '请输入策略名称', trigger: 'blur' }],

    templateType: {
      required: true,
      trigger: 'blur',
      validator: this.validate,
      monitor: { required: true, message: '请选择', trigger: 'change' },
      percentage: {
        required: true,
        pattern: /^(\d|[1-9]\d|100)(\.\d{1,2})?$/,
        message: '这是一个错误提示这是一个错误提示这是长长的错误提示',
        trigger: 'blur',
      },
    },
  }

  form = {
    name: '',
    type: 'tooltip',
    placement: 'bottom',
    tableData: [
      {
        id: 1,
        monitorIndicators: 1,
        timeSection: 2,
        computValue: 1,
        operation: 1,
        occurrences: 1,
        calculate: '',
      },
      {
        id: 2,
        monitorIndicators: 2,
        timeSection: null,
        computValue: 2,
        operation: 2,
        occurrences: 2,
        calculate: 80,
      },
    ],
  }

  validateTypeOptions = [
    {
      label: '默认(inline)',
      value: 'inline',
    },
    {
      label: '自定义(tooltip)',
      value: 'tooltip',
    },
  ]
  validatePlacementOptons = [
    {
      label: '上左(top-start)',
      value: 'top-start',
    },
    {
      label: '上边(top)',
      value: 'top',
    },
    {
      label: '上右(top-end)',
      value: 'top-end',
    },
    {
      label: '左上(left-start)',
      value: 'left-start',
    },

    {
      label: '左边(left)',
      value: 'left',
    },
    {
      label: '左下(left-end)',
      value: 'left-end',
    },
    {
      label: '右上(right-start)',
      value: 'right-start',
    },
    {
      label: '右边(right)',
      value: 'right',
    },
    {
      label: '右下(right-end)',
      value: 'right-end',
    },
    {
      label: '下左(bottom-start)',
      value: 'bottom-start',
    },
    {
      label: '下边(bottom)',
      value: 'bottom',
    },
    {
      label: '下右(bottom-end)',
      value: 'bottom-end',
    },
  ]

  monitorOptions = [
    {
      label: '主节点CPU使用率',
      value: 1,
    },
    {
      label: '副节点CPU使用率',
      value: 2,
    },
  ]

  timeSectOptions = [
    {
      label: '5分钟',
      value: 1,
    },
    {
      label: '10分钟',
      value: 2,
    },
  ]

  computOptions = [
    {
      label: '平均值',
      value: 1,
    },
    {
      label: '总值',
      value: 2,
    },
  ]

  operationOptions = [
    {
      label: '> =',
      value: 1,
    },
    {
      label: '< =',
      value: 2,
    },
  ]
  occurrencesOptions = [
    {
      label: '连续一个周期',
      value: 1,
    },
    {
      label: '连续两个周期',
      value: 2,
    },
  ]

  choObjsOptions = [
    {
      label: '可不选',
      value: 1,
    },
    {
      label: '选中条件',
      value: 2,
    },
  ]

  validate(rule, value, callback) {
    return callback()
  }
  submit() {
    this.formRef.validate(valid => {
      if (valid) {
        this.$message.error('创建失败')
      } else {
        return false
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.validate-input,
.validate-select {
  width: 300px;
}

.form-item__tip {
  position: absolute;
  top: 100%;
  left: 0;
  color: $text-color-light;
  font-size: $text-size;
  line-height: $text-size;
  padding-top: 6px;

  &:before {
    font-family: cute-icons;
    content: '\eb5b';
    color: $icon-color;
    font-size: $text-size-md;
    vertical-align: top;
    margin-right: $margin;
  }
}
</style>
