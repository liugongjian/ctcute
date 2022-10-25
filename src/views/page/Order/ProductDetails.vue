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
      <p class="order-compute">存储库</p>
    </div>
    <div class="order-detail">
      <el-card>
        <cute-titled-block title="S1详情">
          <template #content>
            <div class="order-message">
              <div class="message-img">
                <img src="./images/console.svg" alt="" />
              </div>
              <div class="message-info">
                <el-descriptions :column="3">
                  <el-descriptions-item label="工作空间名称">{{ form.workspace }}</el-descriptions-item>
                  <el-descriptions-item label="区域">{{ form.nodeCode }}</el-descriptions-item>
                  <el-descriptions-item label="计费模式">{{ '111' }}</el-descriptions-item>
                  <el-descriptions-item label="购买时长">{{ '111' }}</el-descriptions-item>
                  <el-descriptions-item label="计算资源配额">{{ '1111' }}</el-descriptions-item>
                </el-descriptions>

                <el-descriptions :column="3">
                  <el-descriptions-item label="专有网络">{{ '111' }}</el-descriptions-item>
                  <!-- <el-descriptions-item label="OSS存储">{{ form.ossName }}</el-descriptions-item> -->
                </el-descriptions>
              </div>
            </div>
          </template>
        </cute-titled-block>
      </el-card>
      <el-card>
        <el-tabs>
          <el-tab-pane label="备份策略">
            <div class="tab-header">
              <el-button>绑定备份策略</el-button>
              <div class="tab-search">
                <el-input v-model="searchValue" placeholder="请输入" prefix-icon="el-icon-search"> </el-input>
                <el-button class="button" plain>
                  <svg-icon name="reload" />
                </el-button>
              </div>
            </div>
            <!--表格-->
            <el-table v-loading="loading" :data="tableData" fit border>
              <el-table-column prop="name" label="主机别名">
                <template slot-scope="{ row }">
                  <router-link to="/">{{ row.name }}</router-link>
                </template>
              </el-table-column>
              <el-table-column prop="status" label="实例状态" :formatter="statusFormatter"> </el-table-column>
              <el-table-column prop="ip" label="IP地址" />
              <el-table-column prop="cpu" label="CPU利用率(%)" />
              <el-table-column prop="memory" label="内存利用率(%)" />
              <el-table-column prop="disk" label="磁盘利用率(%)" />
              <el-table-column prop="health" label="健康状态">
                <template slot-scope="{ row }">
                  <span class="health-dot" :class="`health-dot--${row.health}`" />{{ HEALTH[row.health] }}
                </template>
              </el-table-column>
              <el-table-column prop="actions" label="操作" width="150" fixed="right" class-name="actions">
                <template slot-scope="{ row }">
                  <el-button type="text" @click="gotoDetail(row)">详情</el-button>
                  <el-button type="text" @click="gotoDashboard(row)">监控指标</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!--分页-->
            <el-pagination
              :current-page="pager.page"
              :page-size="pager.limit"
              :total="pager.total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </el-tab-pane>
          <el-tab-pane label="备份副本"> </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import variables from '@cutedesign/theme/css/_variables.scss'
import { CuteSpecialRadio } from '@cutedesign/base'
import { getOptions } from '@/api/orderList'
import { CuteTitledBlock } from '@cutedesign/base'
import { STATUS, HEALTH } from '@/dics/simpleTable'
@Component({
  name: 'ProductDetails',
  components: { CuteSpecialRadio, CuteTitledBlock },
})
export default class extends Vue {
  @Ref('detailForm')
  private ruleFormRef
  private colorVariables = variables
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
  private searchValue = ''
  // 加载状态
  private loading = false

  // 表格数据
  private tableData = null
  // 健康状态字典
  private HEALTH = HEALTH
  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
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
   * 查看详情
   * @param data {SimpleTable.Host} 表格行对象
   */
  private gotoDetail(data) {
    this.$message.success(`前往${data.name}详情页面`)
  }
  /**
   * 查看监控指标
   * @param data {SimpleTable.Host} 表格行对象
   */
  private gotoDashboard(data) {
    this.$message.info(`前往${data.name}监控指标页面`)
  }
  /**
   * 使用字典格式化实例状态
   * @param data {SimpleTable.Host} 表格行对象
   */
  private statusFormatter(data) {
    return STATUS[data.status]
  }
  /**
   * 切换分页数量
   * @param limit {number} 分页数
   */
  private handleSizeChange(limit: number) {
    this.pager.limit = limit
    // this.getTable()
  }
  /**
   * 切换分页页码
   * @param page {number} 分页码
   */
  private handleCurrentChange(page: number) {
    this.pager.page = page
    // this.getTable()
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
    console.log(key, 'key3')
    this.form.diskType = key
  }
  private changeFuns(key) {
    console.log(key, 'key')
    this.form.payment = key
  }

  private selectCityClick(data) {
    console.log(data, '选中数据')
    this.form.nodeCode = data
    console.log(this.form, 'ffff')
  }

  // private async spaceNameValida(rule, value, callback) {
  //   console.log(rule, value, callback, '校验名字')
  //   try {
  //     console.log(value, 'vvvv')
  //     const params = {
  //       workspace: value,
  //     }
  //     const res = await getOrderWorkSpace(params)
  //     // console.log(res, 'resss')
  //     if (!res) {
  //       callback()
  //     } else {
  //       callback(new Error('该名称已存在，请重新设置'))
  //     }
  //   } catch (e) {
  //     this.$message.error(e)
  //   }
  // }
  // private async resourceValida(rule, value, callback) {
  //   console.log(rule, value, callback, '计算配额')
  //   if (value <= 0) {
  //     callback(new Error('最小粒度为1CU！'))
  //   }
  //   try {
  //     console.log(value, 'vvvv')
  //     const data = {
  //       nodeCode: this.form.nodeCode,
  //       cuNum: value,
  //     }
  //     const res = await getOrderStock(data)
  //     console.log(res, 'resss')
  //     if (res) {
  //       callback()
  //     } else {
  //       callback(new Error('您填写的CU资源已超过上限！'))
  //     }
  //   } catch (e) {
  //     this.$message.error(e)
  //   }
  // }
  private openPreview() {
    console.log('跳转')
  }
  private handleCancel() {
    this.ruleFormRef.resetFields()
  }
  private handleSure() {
    this.ruleFormRef.validate(valid => {
      if (valid) {
        // this.vpcOptions.forEach(item => {
        //   if (item.vpcId == this.form.vpcId) {
        //     this.form.vpcName = item.vpcName
        //   }
        // })
        // this.ossOptions.forEach(item => {
        //   if (item.ossId == this.form.ossId) {
        //     this.form.ossName = item.ossName
        //   }
        // })
        // this.getConfirmOrder()
      } else {
        return false
      }
    })
  }
  // private async getConfirmOrder() {
  //   console.log(this.form, 'fffff')
  //   const data = { ...this.form }
  //   try {
  //     const res = await getOrderNewOrder(data)
  //     console.log(res, 'ressss')
  //     if (res) {
  //       window.localStorage.setItem('form', JSON.stringify(this.form as any))
  //       this.$router.push({
  //         path: '/real-confirmation',
  //       })
  //     } else {
  //       this.$message.error('下订单失败')
  //       return false
  //     }
  //   } catch (e) {
  //     this.$message.error(e)
  //   }
  // }
}
</script>
