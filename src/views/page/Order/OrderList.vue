<!--
 * @Author: 魏勋
 * @Date: 2023-05-22 16:34:26
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-06-06 19:16:30
 * @Description: 订购页
-->
<template>
  <el-card class="real-order">
    <cute-fixed-footer class="real-order-header" @click="openPreview">
      <svg-icon class="real-order-header__icon" name="left" />
      <span class="real-order-header__content">云硬盘</span>
    </cute-fixed-footer>

    <el-form
      ref="orderForm"
      label-position="left"
      :model="form"
      :rules="rules"
      label-width="90px"
      class="simple-form"
    >
      <el-form-item label="地域" prop="nodeCode">
        <cute-area
          v-model="form.nodeCode"
          placeholder="请选择"
          :data="areas"
          :column="4"
          @change="selectCityClick"
        />
      </el-form-item>
      <el-form-item label="磁盘名称" prop="diskName">
        <el-select v-model="form.diskName" placeholder="请选择">
          <el-option v-for="item in options" :key="item" :value="item"> </el-option>
        </el-select>
        <cute-form-info title="标题测试" content="对标题测试的详细说明" />
      </el-form-item>
      <el-form-item label="容量（GB）" prop="capacity">
        <el-input-number v-model="form.capacity" :min="0" :max="32768"></el-input-number>
        <div class="form-item__tip">你还可以使用32768GB硬盘。</div>
      </el-form-item>
      <el-form-item label="磁盘类型" prop="diskType">
        <el-radio-group v-model="form.diskType">
          <el-radio-button
            v-for="button in diskTypeData"
            :key="button.label"
            :label="button.label"
          ></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="高级配置" prop="AdConfiguration">
        <el-checkbox v-model="form.AdConfiguration" @change="handleCheckChange"> 共享盘 </el-checkbox>
      </el-form-item>
      <el-form-item label="付费方式" prop="payment">
        <el-radio-group v-model="form.payment">
          <el-radio-button
            v-for="button in paymentData"
            :key="button.label"
            :label="button.label"
          ></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="数量" prop="number">
        <el-input-number v-model="form.number" :min="0" :max="200"></el-input-number>
        <div class="form-item__tip">您还可以创建200个云硬盘。</div>
      </el-form-item>
      <el-form-item label="企业项目" prop="Enterproject">
        <el-select v-model="form.Enterproject" placeholder="请选择">
          <el-option v-for="item in options" :key="item" :value="item"> </el-option>
        </el-select>
        <el-button type="text" plain>
          <svg-icon class="refresh-icon" height="14" width="14" name="reload" @click="openPreview" />
        </el-button>
        <cute-form-info title="标题测试" content="对标题测试的详细说明" />
      </el-form-item>
      <el-form-item label="创建时长" prop="createTime">
        <cute-slider
          ref="Sliders"
          v-model="form.createTime"
          :min="1"
          :max="17"
          :disabled="false"
          :marks="marks"
          :range="false"
          unit="个月"
          @moveChange="changes"
          @inputChange="inputChanges"
        />
      </el-form-item>
    </el-form>

    <cute-fixed-footer class="real-order-footer">
      <div>
        <span class="config-cost">购买量:</span>
        <el-input-number v-model="form.buyNumber" :min="0"></el-input-number>
        <span class="config-cost">购买时长:</span>
        <el-select v-model="form.buyDuration" class="el-select-small" placeholder="请选择">
          <el-option v-for="item in marks" :key="item" :value="item"> </el-option>
        </el-select>
        <span class="config-cost">配置费用：</span>
        <span class="cost-count">￥{{ form.totalPrice }}</span>
        <el-tooltip effect="dark" placement="top">
          <div slot="content">
            参考价格，具体扣费请以账单为准。<a
              href="https://www.ctyun.cn/document/10026753/10027021"
              target="_blank"
              style="color: #fa8334; cursor: pointer; text-decoration: none"
            >
              了解计费详情
            </a>
          </div>
          <svg-icon name="question-circle" :color="colorVariables.colorGrey3" :width="15" :height="15" />
        </el-tooltip>
      </div>
      <div>
        <el-button @click="handleCancel"> 取消 </el-button>
        <el-button type="primary" @click="handleSure"> 下一步:网络配置 </el-button>
      </div>
    </cute-fixed-footer>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'
// import { getOptions } from '@/api/orderList'

@Component({
  name: 'OrderList',
})
export default class extends Vue {
  @Ref('orderForm')
  private ruleFormRef
  @Ref('Sliders')
  private RefSlider

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
  private diskTypeData = [
    {
      label: '高IO',
    },
    {
      label: '普通IO',
    },
  ]
  private paymentData = [
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
    createTime: [{ required: true, message: '请输入月份', trigger: 'blur' }],
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
    createTime: 1,
    buyNumber: 0,
    buyDuration: '1个月',
  }
  private mouthValue = 1
  private options = ['workSpace', 'teamSpace', 'default']
  private marks = {
    1: '1个月',
    2: '2个月',
    3: '3个月',
    4: '4个月',
    5: '5个月',
    6: '6个月',
    7: '7个月',
    8: '8个月',
    9: '9个月',
    10: '10个月',
    11: '11个月',
    12: '12个月',
    13: '1年',
    14: '2年',
    15: '3年',
    16: '4年',
    17: '5年',
  }

  private changes(val) {
    console.log(val, 'slider值')
    switch (val) {
      case 13:
        this.form.createTime = 12
        break
      case 14:
        this.form.createTime = 24
        break
      case 15:
        this.form.createTime = 36
        break
      case 16:
        this.form.createTime = 48
        break
      case 17:
        this.form.createTime = 60
        break
      default:
        this.RefSlider.values = val
        break
    }
  }
  private inputChanges(val) {
    if (val == 0) {
      this.form.createTime = null
    } else {
      this.form.createTime = val
      if (val > 12) {
        switch (val) {
          case 24:
            this.RefSlider.values = 14
            break
          case 36:
            this.RefSlider.values = 15
            break
          case 48:
            this.RefSlider.values = 16
            break
          case 60:
            this.RefSlider.values = 17
            break
          default:
            this.$message({
              // showClose: true,
              customClass: 'toast-warning',
              message: '不得超过12个月 超过12个月以年为单位',
              type: 'warning',
            })
            this.form.createTime = 1
            this.RefSlider.values = 1
            break
        }
      } else {
        this.RefSlider.values = val
      }
    }
  }

  /**
   * 获取获取告警对象
   */
  // private async getOptions() {
  //   try {
  //     const res = await getOptions()
  //     this.options = res.data
  //   } catch (e) {
  //     this.$message.error(e)
  //   }
  // }

  /**
   * 选中配置
   */
  private handleCheckChange(val) {
    this.form.AdConfiguration = val
  }

  /**
   * 切换类型
   */
  private changeFun(key) {
    this.form.diskType = key
  }

  /**
   * 选择地域
   */
  private selectCityClick(data) {
    this.form.nodeCode = data.value
  }

  /**
   * 跳转页面
   */
  private openPreview() {
    console.log('跳转')
  }

  /**
   * 重置表单
   */
  private handleCancel() {
    this.ruleFormRef.resetFields()
  }

  /**
   * 确认表单
   */
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
