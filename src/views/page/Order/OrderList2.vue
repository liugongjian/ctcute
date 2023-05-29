<!--
 * @Author: 魏勋
 * @Date: 2023-05-23 16:17:28
 * @LastEditors: 魏勋
 * @LastEditTime: 2023-05-29 09:52:28
 * @Description: 订购页
-->
<template>
  <div class="real-order-row">
    <cute-fixed-footer class="real-order-header" @click="openPreview">
      <svg-icon class="real-order-header__icon" name="left" />
      <span class="real-order-header__content">物理机服务</span>
    </cute-fixed-footer>

    <el-form ref="orderForm" label-position="left" :model="form" label-width="90px" class="simple-form">
      <el-card>
        <el-form-item label="计费模式" prop="payment">
          <el-radio-group v-model="form.payment" @input="changeFuns">
            <el-radio-button
              v-for="(item, key) in buutonDatas"
              :key="key"
              :label="item.label"
            ></el-radio-button>
          </el-radio-group>
          <div class="form-item__tip">{{ paymentToolTip }}</div>
        </el-form-item>
        <el-form-item prop="nodeCode">
          <span slot="label"
            >区域
            <svg-icon
              name="question-circle"
              :color="colorVariables.colorGrey3"
              :width="15"
              :height="15"
            ></svg-icon
          ></span>
          <cute-area
            v-model="form.nodeCode"
            placeholder="请选择"
            :data="areas"
            popper-max-height="100px"
            :column="4"
            @change="selectCityClick"
          />
          <div class="form-item__tip">{{ areaToolTip }}</div>
        </el-form-item>
        <el-form-item label="可用分区" prop="usableArea">
          <el-radio-group v-model="form.usableArea">
            <el-radio-button
              v-for="(item, key) in usableAreaDatas"
              :key="key"
              :label="item.label"
            ></el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-card>
      <el-card>
        <el-form-item class="real-order-specification" label="规格">
          <el-form-item label="筛选">
            <el-row>
              <el-col :span="4">
                <el-select v-model="form.series" class="el-select-small" placeholder="请选择">
                  <el-option v-for="item in series" :key="item" :value="item"> </el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-select v-model="form.cpu" class="el-select-small" placeholder="请选择">
                  <el-option v-for="item in cpus" :key="item" :value="item"> </el-option>
                </el-select>
              </el-col>
              <el-col :span="4">
                <el-select v-model="form.memory" class="el-select-small" placeholder="请选择">
                  <el-option v-for="item in memorys" :key="item" :value="item"> </el-option>
                </el-select>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-radio-group v-model="form.type">
              <el-radio-button
                v-for="(item, key) in typeDatas"
                :key="key"
                :label="item.label"
              ></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-table v-loading="loading" :data="orderTableData" fit border>
            <el-table-column prop="orderId" label="订单号" width="200px">
              <template slot-scope="scope">
                <el-radio v-model="form.orderId" :label="scope.row.orderId">{{ scope.row.orderId }}</el-radio>
              </template>
            </el-table-column>
            <el-table-column prop="product" label="产品" width="160px"></el-table-column>
            <el-table-column prop="project" label="项目" width="160px"></el-table-column>
            <el-table-column
              prop="orderType"
              label="类型"
              width="160px"
              :filters="[
                { text: '完成', value: '1' },
                { text: '续订', value: '2' },
                { text: '取消', value: '3' },
              ]"
              :filter-multiple="false"
            >
            </el-table-column>
            <el-table-column sortable prop="createTime" label="创建时间" width="160px">
              <template slot-scope="{ row }">
                {{ formatDatetime(row.createTime) }}
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="pagination"
            :current-page="pager.page"
            :page-size="pager.limit"
            :total="pager.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </el-form-item>
      </el-card>
      <el-card>
        <el-form-item label="镜像">
          <el-radio-group v-model="form.mirror">
            <el-radio-button
              v-for="(item, key) in mirrorDatas"
              :key="key"
              :label="item.label"
            ></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="" label-width="90px">
          <el-row>
            <el-col :span="4">
              <el-select v-model="form.series1" class="el-select-small" placeholder="请选择">
                <el-option v-for="item in series" :key="item" :value="item"> </el-option>
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="form.cpu1" class="el-select-small" placeholder="请选择">
                <el-option v-for="item in cpus" :key="item" :value="item"> </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-form-item>
      </el-card>
      <el-card>
        <el-form-item label="购买时长" prop="buyDuration">
          <cute-slider
            ref="Sliders"
            v-model="form.buyDuration"
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
      </el-card>
    </el-form>
    <el-card class="real-order-right">
      <div class="real-order-right-title">当前配置</div>
      <div class="real-order-right-content">
        <el-form label-position="left" label-width="80px">
          <el-form-item label="计费方式" prop="payment">
            <span>{{ form.payment || '-' }}</span>
          </el-form-item>
          <el-form-item label="区域" prop="nodeCode">
            <span>{{ getAreaLabel(form.nodeCode) || '-' }}</span>
          </el-form-item>
          <el-form-item label="可用区" prop="usableArea">
            <span>{{ form.usableArea || '-' }}</span>
          </el-form-item>
          <el-form-item label="物理机名称" prop="physicalName">
            <span>{{ form.physicalName || '-' }}</span>
          </el-form-item>
          <el-form-item label="规格" prop="specification">
            <span>{{ form.specification || '-' }}</span>
          </el-form-item>
          <el-form-item label="镜像" prop="mirror">
            <span>{{ form.mirror || '-' }}</span>
          </el-form-item>
          <el-form-item label="虚拟私有云" prop="virtualPrivateCloud">
            <span>{{ form.virtualPrivateCloud || '-' }}</span>
          </el-form-item>
          <el-form-item label="安全组" prop="securityGroup">
            <span>{{ form.securityGroup || '-' }}</span>
          </el-form-item>
          <el-form-item label="网卡" prop="networkCard">
            <span>{{ form.networkCard || '-' }}</span>
          </el-form-item>
          <el-form-item label="弹性IP" prop="elasticityIp">
            <span>{{ form.elasticityIp || '-' }}</span>
          </el-form-item>
          <el-form-item label="钥匙对" prop="keys">
            <span>{{ form.keys || '-' }}</span>
          </el-form-item>
          <el-form-item label="购买时长" prop="buyDuration">
            <span>{{ form.buyDuration + '个月' || '-' }}</span>
          </el-form-item>
          <el-form-item label="创建数量" prop="createNumber">
            <span>{{ form.createNumber || '-' }}</span>
          </el-form-item>
        </el-form>
      </div>
      <div class="real-order-right-footer">
        <div>
          <span class="config-cost">配置费用：</span>
          <span class="cost-count">￥{{ form.totalPrice }}</span>
          <svg-icon name="question-circle" :color="colorVariables.colorGrey3" :width="15" :height="15" />
        </div>
        <div>参考价格，具体扣费请以账单为准。</div>
        <div>
          <a
            href="https://www.ctyun.cn/document/10026753/10027021"
            target="_blank"
            style="color: #3d73f5; cursor: pointer; text-decoration: none"
          >
            了解计费详情
          </a>
        </div>
        <div>
          <el-button type="ct">立即订购</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'
import { CuteSpecialRadio } from '@cutedesign/ui'
import { getOrderTableList } from '@/api/orderList2'
import CuteFixedFooter from '@cutedesign/ui/components/CuteFixedFooter/index.vue'
import * as OrderTable from '@/types/OrderTable2'
import { formatDatetime } from '@/utils/date'

@Component({
  name: 'OrderList2',
  components: { CuteSpecialRadio, CuteFixedFooter },
})
export default class extends Vue {
  @Ref('orderForm')
  private ruleFormRef
  @Ref('Sliders')
  private RefSlider
  formatDatetime = formatDatetime
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
  private buutonDatas = [
    {
      label: '包年包月',
    },
    {
      label: '按量计费',
    },
  ]
  private typeDatas = [
    {
      label: '通用型',
    },
    {
      label: '通过计算型',
    },
    {
      label: '内存优化型',
    },
    {
      label: 'CPU加速型',
    },
  ]
  private usableAreaDatas = [
    {
      label: '可用区A',
    },
    {
      label: '可用区B',
    },
  ]
  private mirrorDatas = [{ label: '公共镜像' }, { label: '私有镜像' }, { label: '共享镜像' }]
  private rules = {
    nodeCode: [{ required: true, message: '请选择区域', trigger: 'change' }],
    payment: [{ required: true, message: '请选择计费模式', trigger: 'change' }],
  }
  private paymentToolTip = '包年包月弹性云主机创建后不能删除，如果停止使用，请到用户中心执行退订操作'
  private areaToolTip =
    '不同区域的云服务产品之间内网不相通，请就近选择靠近您业务的区域，可减少网络延迟，提高访问速度'
  // 分页信息
  private pager = {
    page: 1,
    limit: 5,
    total: 40,
  }
  private orderTableData = []
  private form = {
    nodeCode: null,
    AdConfiguration: false,
    number: 0,
    payment: '包年包月',
    usableArea: '可用区A', //可用分区
    series: '全新系列',
    series1: '全新系列',
    cpu: '全部CPU',
    cpu1: '全部CPU',
    memory: '全部内存',
    orderId: '',
    type: '通用型',
    mirror: '公共镜像',
    buyNumber: 0,
    buyDuration: 1,
    totalPrice: 2892.56,
    physicalName: 'bms-e873',
    specification: 'physical.large',
    virtualPrivateCloud: 'dafault-vpc',
    securityGroup: 'Syc-dafault(入方向：| 出方向：-)',
    networkCard: 'test',
    elasticityIp: '主网卡未绑定弹性IP',
    keys: '',
    createNumber: 1,
  }
  private loading = false
  private mouthValue = 1
  private options = ['workSpace', 'teamSpace', 'default']
  private series = ['全新系列', '最新系列']
  private cpus = [
    '全部CPU',
    '1vCPUs',
    '2vCPUs',
    '4vCPUs',
    '8vCPUs',
    '12vCPUs',
    '16vCPUs',
    '24vCPUs',
    '32vCPUs',
    '36vCPUs',
    '48vCPUs',
    '72vCPUs',
    '96vCPUs',
  ]
  private memorys = [
    '全部内存',
    '1GB',
    '2GB',
    '4GB',
    '8GB',
    '16GB',
    '24GB',
    '32GB',
    '48GB',
    '64GB',
    '96GB',
    '128GB',
    '192GB',
    '252GB',
    '256GB',
    '288GB',
    '384GB',
    '504GB',
    '512GB',
    '768GB',
    '960GB',
    '1920GB',
  ]
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

  private conditions: OrderTable.Conditions = {
    orderType: '',
  }

  private getAreaLabel(areaValue) {
    let areaLabel = ''
    this.areas.forEach(item => {
      item.city.forEach(city => {
        if (city.value === areaValue) {
          areaLabel = city.label
        }
      })
    })
    return areaLabel
  }

  /**
   * 切换分页数量
   * @param limit {number} 分页数
   */
  private handleSizeChange(limit: number) {
    this.pager.limit = limit
    this.getOrderTableData()
  }
  /**
   * 切换分页页码
   * @param page {number} 分页码
   */
  private handleCurrentChange(page: number) {
    this.pager.page = page
    this.getOrderTableData()
  }

  private mounted() {
    this.getOrderTableData()
  }

  private async getOrderTableData() {
    this.loading = true
    // 接口
    const params: OrderTable.TableParams = {
      limit: this.pager.limit,
      page: this.pager.page,
      ...this.conditions,
    }
    const res = await getOrderTableList(params)
    // 小三角旋转开关
    const tableData = res.data.list.map(item => {
      ;(item as any).flag = false
      return item
    })
    this.pager.total = res.data.total
    this.pager.page = res.data.page
    this.orderTableData = tableData
    this.loading = false
  }

  /**
   * 切换付费方式
   */
  private changeFuns(key) {
    this.form.payment = key
    this.paymentToolTip = `${key}弹性云主机创建后不能删除，如果停止使用，请到用户中心执行退订操作`
  }

  private changes(val) {
    console.log(val, 'slider值')
    switch (val) {
      case 13:
        this.form.buyDuration = 12
        break
      case 14:
        this.form.buyDuration = 24
        break
      case 15:
        this.form.buyDuration = 36
        break
      case 16:
        this.form.buyDuration = 48
        break
      case 17:
        this.form.buyDuration = 60
        break
      default:
        this.RefSlider.values = val
        break
    }
  }
  private inputChanges(val) {
    if (val == 0) {
      this.form.buyDuration = null
    } else {
      this.form.buyDuration = val
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
            this.form.buyDuration = 1
            this.RefSlider.values = 1
            break
        }
      } else {
        this.RefSlider.values = val
      }
    }
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
