<template>
  <div class="real-order">
    <div class="order-header">
      <svg-icon
        class="left-icon"
        name="left"
        :color="colorVariables.colorWhite"
        :width="15"
        :height="15"
        @click="openPreview"
      />
      <p class="order-compute">云硬盘</p>
    </div>
    <div class="order-content">
      <el-card style="height: 100%; overflow: auto">
        <el-form ref="orderForm" :model="form" :rules="rules" label-width="139px" class="order-form">
          <el-form-item label="地域" prop="nodeCode">
            <cute-area
              v-model="form.nodeCode"
              placeholder="请选择"
              :data="areas"
              :column="4"
              @change="selectCityClick"
            >
            </cute-area>
          </el-form-item>
          <el-form-item label="磁盘名称" prop="diskName">
            <el-select v-model="form.diskName" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :value="item.value"
                >{{ item.label }}
              </el-option>
            </el-select>
            <cute-form-info title="标题测试" content="对标题测试的详细说明" />
          </el-form-item>
          <el-form-item label="容量（GB）" prop="capacity" style="margin-bottom: 48px">
            <el-input-number v-model="form.capacity" :min="0" :max="32768"></el-input-number>
            <div class="form-item__tip">你还可以使用32768GB硬盘。</div>
          </el-form-item>
          <el-form-item label="磁盘类型" prop="diskType">
            <cute-special-radio v-model="form.diskType" :options="buutonData" @change="changeFun" />
          </el-form-item>
          <el-form-item label="高级配置" prop="AdConfiguration">
            <el-checkbox v-model="form.AdConfiguration" @change="handleCheckChange"> 共享盘 </el-checkbox>
          </el-form-item>
          <el-form-item label="付费方式" prop="payment">
            <cute-special-radio v-model="form.payment" :options="buutonDatas" @change="changeFuns" />
          </el-form-item>
          <el-form-item label="数量" prop="number" style="margin-bottom: 48px">
            <el-input-number v-model="form.number" :min="0" :max="200"></el-input-number>
            <div class="form-item__tip">您还可以创建200个云硬盘。</div>
          </el-form-item>
          <el-form-item label="企业项目" prop="Enterproject">
            <el-select v-model="form.Enterproject" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :value="item.value"
                >{{ item.label }}
              </el-option>
            </el-select>
            <svg-icon
              class="refresh-icon"
              name="reload"
              :color="colorVariables.colorGrey3"
              :width="14"
              :height="14"
              @click="openPreview"
            />
            <cute-form-info title="标题测试" content="对标题测试的详细说明" />
          </el-form-item>
          <el-form-item label="创建时长" prop="createTime" style="padding-bottom: 24px"> </el-form-item>
        </el-form>
      </el-card>
    </div>
    <div class="order-footer">
      <div>
        <span class="config-cost">配置费用：</span>
        <span class="cost-count">￥{{ form.totalPrice }}</span>
        <el-tooltip effect="dark" placement="top">
          <div slot="content">
            参考价格，具体扣费请以账单为准。<a
              href="https://www.ctyun.cn/document/10026753/10027021"
              target="_blank"
              style="color: #fa8334; cursor: pointer; text-decoration: none"
              >了解计费详情</a
            >
          </div>
          <svg-icon
            name="question-circle"
            :color="colorVariables.colorGrey3"
            :width="15"
            :height="15"
          ></svg-icon>
        </el-tooltip>
      </div>
      <div>
        <el-button @click="handleCancel"> 取消 </el-button>
        <el-button type="primary" @click="handleSure"> 下一步 </el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import variables from '@cutedesign/theme/css/_variables.scss'
import { CuteSpecialRadio } from '@cutedesign/base'
import { getOptions } from '@/api/orderList'
@Component({
  name: 'OrderList',
  components: { CuteSpecialRadio },
})
export default class extends Vue {
  @Ref('orderForm')
  private ruleFormRef
  private colorVariables = variables
  private areas = [
    {
      label: '华南地区',
      city: [
        { label: '深圳', value: 'shenzhen', count: 2 },
        { label: '广州', value: 'guangzhou', count: 20 },
      ],
    },
    {
      label: '华东地区',
      city: [
        { label: '上海', value: 'shanghai', count: 3 },
        { label: '南京', value: 'nanjing', count: 4 },
        { label: '苏州', value: 'suzhou', count: 5 },
      ],
    },
    {
      label: '华北地区',
      city: [
        { label: '北京', value: 'beijing', count: 21 },
        { label: '天津', value: 'tianjin', count: 22 },
      ],
    },
    {
      label: '西南地区',
      city: [
        { label: '成都', value: 'chengdu', count: 23 },
        { label: '重庆', value: 'chongqing', count: 24 },
      ],
    },
    {
      label: '华中地区',
      city: [
        { label: '武汉', value: 'wuhan', count: 25 },
        { label: '长沙', value: 'changsha', count: 26 },
      ],
    },
    {
      label: '西北地区',
      city: [
        { label: '西安', value: 'xian', count: 27 },
        { label: '兰州', value: 'lanzhou', count: 28 },
      ],
    },
  ]
  private buutonData = [
    {
      label: '高IO',
    },
    {
      label: '普通IO',
    },
  ]
  private buutonDatas = [
    {
      label: '包年包月',
    },
    {
      label: '按量计费',
    },
  ]
  private rules = {
    nodeCode: [{ required: true, message: '请选择地域', trigger: 'change' }],
    diskName: [{ required: true, message: '请选择磁盘', trigger: 'change' }],
    capacity: [{ required: true, message: '请选择容量', trigger: 'change' }],
    diskType: [{ required: true, message: '请选择磁盘类型', trigger: 'change' }],
    payment: [{ required: true, message: '请选择付费方式', trigger: 'change' }],
    number: [{ required: true, message: '请选择数量', trigger: 'change' }],
    Enterproject: [{ required: true, message: '请选择企业项目', trigger: 'change' }],
    createTime: [{ required: true, message: '请输入月份', trigger: 'change' }],
  }
  private form = {
    nodeCode: null,
    Enterproject: '',
    AdConfiguration: false,
    number: 0,
    diskType: '高IO',
    payment: '包年包月',
    capacity: 0,
    type: 1,
    payType: 1,
    totalPrice: 54.0,
  }
  private mouthValue = 1
  private options = []

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
    } catch (e) {
      this.$message.error(e)
    }
  }
  private handleCheckChange(val) {
    console.log(val, 'vvvv')
    this.form.AdConfiguration = val
  }
  private changeFun(key) {
    this.form.diskType = key
  }
  private changeFuns(key) {
    this.form.payment = key
  }

  private selectCityClick(data) {
    console.log(data, '选中数据')
    this.form.nodeCode = data
    console.log(this.form, 'ffff')
  }

  private openPreview() {
    console.log('跳转')
  }
  private handleCancel() {
    this.ruleFormRef.resetFields()
  }
  private handleSure() {
    this.ruleFormRef.validate(valid => {
      if (valid) {
        this.$message.success('前往下一页')
      } else {
        return false
      }
    })
  }
}
</script>
