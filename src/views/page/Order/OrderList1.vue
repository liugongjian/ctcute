<template>
  <div class="real-order">
    <cute-fixed-footer class="real-order-header" @click="openPreview">
      <svg-icon class="real-order-header__icon" name="left" />
      <span class="real-order-header__content">创建弹性云主机</span>
    </cute-fixed-footer>

    <el-form
      ref="orderForm"
      label-position="left"
      :model="form"
      label-width="90px"
      class="simple-form"
    >
    <el-card >
       <el-form-item label="计费模式" prop="payment">
            <cute-special-radio v-model="form.payment" :options="buutonDatas" @change="changeFuns" />
            <div class="form-item__tip">{{ paymentToolTip }}</div>
        </el-form-item>
        <el-form-item  prop="nodeCode">
          <span slot="label">区域 <svg-icon name="question-circle" :color="colorVariables.colorGrey3" :width="15" :height="15" ></svg-icon></span>
          <cute-area
            v-model="form.nodeCode"
            placeholder="请选择"
            :data="areas"
            :column="4"
            popper-max-height="100px"
            @change="selectCityClick"
          />
          <div class="form-item__tip">{{ areaToolTip }}</div>
        </el-form-item>
         <el-form-item label="可用分区" prop="usableArea">
            <cute-special-radio v-model="form.usableArea" :options="usableAreaDatas" @change="changeUsableArea" />
        </el-form-item>
    </el-card>
    <el-card>
      <el-form-item class="real-order-specification" label="可用分区">
        <el-form-item label="筛选">
          <el-row>
            <el-col :span="3">
              <el-form-item  label-width="0" label="" prop="series">
                <el-select class="el-select-small" v-model="form.series" placeholder="请选择" >
                  <el-option v-for="item in series" :key="item" :value="item"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item  label-width="0" label="" prop="cpu">
                <el-select class="el-select-small" v-model="form.cpu" placeholder="请选择">
                  <el-option v-for="item in cpus" :key="item" :value="item"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="3">
                <el-form-item  label-width="0" label="" prop="memory">
                  <el-select class="el-select-small" v-model="form.memory" placeholder="请选择">
                    <el-option v-for="item in memorys" :key="item" :value="item"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <cute-special-radio v-model="form.type" :options="typeDatas" @change="changeTypes" />
        </el-form-item>
        <el-table v-loading="loading" :data="orderTableData" fit border>
          <el-table-column prop="orderId" label="订单号" width="200px">
            <template slot-scope="scope">
              <!-- <el-form-item  label-width="0" label="" prop="orderId"> -->
                <el-radio v-model="form.orderId" :label="scope.row.orderId">{{ scope.row.orderId }}</el-radio>
              <!-- </el-form-item> -->
            </template>
          </el-table-column>
          <el-table-column  prop="product" label="产品" width="160px"></el-table-column>
          <el-table-column  prop="project" label="项目" width="160px"></el-table-column>
          <el-table-column  prop="orderType" label="类型" width="160px"  
          :filters="[
            { text: '完成', value: '1' },
            { text: '续订', value: '2' },
            { text: '取消', value: '3' }
          ]"
            :filter-multiple="false">
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
      <el-form-item label="可用分区">
        <el-form-item label="" label-width="0px" prop="mirror">
          <cute-special-radio v-model="form.mirror" :options="mirrorDatas" @change="changeMirrors" />
        </el-form-item>
      </el-form-item>
      <el-form-item label="" label-width="90px">
        <el-row>
          <el-col :span="3">
            <el-form-item label="" label-width="0px" prop="series1">
              <el-select class="el-select-small" v-model="form.series1" placeholder="请选择" >
                <el-option v-for="item in series" :key="item" :value="item"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item  label-width="0" label="" prop="cpu1">
              <el-select class="el-select-small" v-model="form.cpu1" placeholder="请选择">
                <el-option v-for="item in cpus" :key="item" :value="item"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
    </el-card>
    </el-form>

    <cute-fixed-footer class="real-order-footer">
      <div>
        <span class="config-cost">购买量:</span>
        <el-input-number v-model="form.buyNumber" :min="0"></el-input-number>
        <span class="config-cost">购买时长:</span>
        <el-select class="el-select-small" v-model="form.buyDuration" placeholder="请选择" >
          <el-option v-for="item in marks" :key="item" :value="item"> </el-option>
        </el-select>
        <div class="config-cost-container">
          <div>
            <span class="config-cost">配置费用：</span>
            <span class="cost-count">￥{{ form.totalPrice }}</span>
          </div>
          <div>参考价格，具体扣费请以账单为准。
            <a
                href="https://www.ctyun.cn/document/10026753/10027021"
                target="_blank"
                style="color: #3D73F5; cursor: pointer; text-decoration: none"
              >
                了解计费详情
              </a>
              <svg-icon name="question-circle" :color="colorVariables.colorGrey3" :width="15" :height="15" />
            </div>
        </div>
      </div>
      <div>
        <el-button @click="handleCancel"> 取消 </el-button>
        <el-button type="primary" @click="handleSure"> 下一步:网络配置 </el-button>
      </div>
    </cute-fixed-footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import variables from '@cutedesign/ui/style/themes/default/index.scss'
import { CuteSpecialRadio } from '@cutedesign/ui'
import { getOrderTableList } from '@/api/orderList1'
import CuteFixedFooter from '@cutedesign/ui/components/CuteFixedFooter/index.vue'
import * as OrderTable from '@/types/OrderTable1'
import { formatDatetime } from '@/utils/date'

@Component({
  name: 'OrderList1',
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
      label:'通用型'
    },
    {
      label:'通过计算型'
    },
    {
      label:'内存优化型'
    }, {
      label:'CPU加速型'
    }
  ]
  private usableAreaDatas = [
    {
      label: '可用区A',
    },
    {
      label: '可用区B',
    },
  ]
  private mirrorDatas = [
    { label: '公共镜像' },
    { label: '私有镜像' },
    { label: '共享镜像' }]
  private rules = {
    nodeCode: [{ required: true, message: '请选择区域', trigger: 'change' }],
    payment: [{ required: true, message: '请选择计费模式', trigger: 'change' }],
  }
  private paymentToolTip = '包年包月弹性云主机创建后不能删除，如果停止使用，请到用户中心执行退订操作'
  private areaToolTip = '不同区域的云服务产品之间内网不相通，请就近选择靠近您业务的区域，可减少网络延迟，提高访问速度'
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
    usableArea: '可用区A',//可用分区
    series: '全新系列',
    series1:'全新系列',
    cpu: '全部CPU',
    cpu1: '全部CPU',
    memory: '全部内存',
    orderId:'',
    type: '通用型',
    mirror: "公共镜像",
    buyNumber: 0,
    buyDuration: '1个月',
    totalPrice: 2892.56,
  }
  private loading = false
  private mouthValue = 1
  private options = ['workSpace', 'teamSpace', 'default']
  private series = ['全新系列', '最新系列']
  private cpus = ['全部CPU', '1vCPUs', '2vCPUs', '4vCPUs', '8vCPUs', '12vCPUs', '16vCPUs', '24vCPUs', '32vCPUs', '36vCPUs', '48vCPUs', '72vCPUs', '96vCPUs']
  private memorys = ['全部内存', '1GB', '2GB', '4GB', '8GB', '16GB', '24GB', '32GB', '48GB', '64GB', '96GB', '128GB', '192GB', '252GB', '256GB', '288GB', '384GB', '504GB', '512GB', '768GB', '960GB', '1920GB']
  private marks = ['1个月', '2个月', '3个月', '4个月', '5个月', '6个月', '7个月', '8个月', '9个月', '10个月', '11个月', '12个月', '1年', '2年', '3年', '4年', '5年']
 
  private conditions: OrderTable.Conditions = {
    orderType: '',
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
      ...this.conditions
     }
    const res = await getOrderTableList(params)
    // 小三角旋转开关
    const tableData = res.data.list.map(item => {
      ; (item as any).flag = false
      return item
    })
    this.pager.total = res.data.total
    this.pager.page = res.data.page
    this.orderTableData =  tableData 
    this.loading = false
  }

  /**
   * 切换付费方式
   */
  private changeFuns(key) {
    this.form.payment = key
    this.paymentToolTip = `${key}弹性云主机创建后不能删除，如果停止使用，请到用户中心执行退订操作`

  }

  /**
   * 切换区域
   */
  private changeUsableArea(key) {
    this.form.usableArea = key
  }

  /**
   * 切换区域
   */
  private changeTypes(key) {
    this.form.type = key
  }

  private changeMirrors(key) {
    this.form.mirror = key
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
