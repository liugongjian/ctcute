<template>
  <el-card class="pro-detail3">
    <cute-titled-block title="模块标题">
      <template #content>
        <el-descriptions :column="2" :colon="false">
          <el-descriptions-item>
            <template slot="label"> 发票性质 </template>
            电子发票
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 发票状态 </template>
            <span class="content--alert">已邮寄</span>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">发票类型</template>
            增值税普通发票
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">发票抬头</template>
            北京慧辰资道资讯股份有限公司
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 时间 </template>
            2020-07-21 13:53:02
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 发票编号</template>
            61117421
          </el-descriptions-item>
        </el-descriptions>
      </template>
    </cute-titled-block>
    <cute-titled-block title="模块标题">
      <template #content>
        <el-descriptions :column="2" :colon="false">
          <el-descriptions-item>
            <template slot="label"> 发票性质 </template>
            电子发票
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 发票状态 </template>
            <span class="content--alert">已邮寄</span>
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">发票类型</template>
            增值税普通发票
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label">发票抬头</template>
            北京慧辰资道资讯股份有限公司
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 时间 </template>
            2020-07-21 13:53:02
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 发票编号</template>
            61117421
          </el-descriptions-item>
        </el-descriptions>
      </template>
    </cute-titled-block>
    <cute-titled-block title="模块标题">
      <template #content>
        <el-table :data="proDetail3Info && proDetail3Info.returnGoodsProgress">
          <el-table-column prop="time" label="订单号">
            <template slot-scope="{ row }">
              <router-link to="/">{{ row.time }}</router-link>
            </template>
          </el-table-column>
          <el-table-column prop="progress" label="当前进度">
            <template slot-scope="{ row }">
              {{ PROGRESS[row.progress] }}
            </template>
          </el-table-column>
          <el-table-column prop="status" label="状态">
            <template slot-scope="{ row }">
              <span class="status">
                <span class="status-dot" :class="`status-dot--${row.status}`" />{{ STATUS[row.status] }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="operatorId" label="操作员id"></el-table-column>
          <el-table-column prop="duration" label="耗时"> </el-table-column>
        </el-table>
        <el-pagination
          :current-page="pager.page"
          :page-size="pager.limit"
          :total="pager.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </template>
    </cute-titled-block>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as ProDetail3 from '@/types/ProDetail3'
import { getProDetail3 } from '@/api/proDetail3'
import { STATUS, PROGRESS } from '@/dics/proDetail3'

@Component({
  name: 'ProDetail3',
})
export default class extends Vue {
  //跳转携带的name
  private detail = '服务管理'
  // 退货进度状态字典
  private STATUS = STATUS

  // 退货进度字典
  private PROGRESS = PROGRESS

  // 加载状态
  private loading = false

  // 详情数据
  private proDetail3Info: ProDetail3.ProDetail3Info = null

  // 分页信息
  private pager = {
    page: 1,
    limit: 20,
    total: 40,
  }

  /**
   * 页面Mounted
   */
  private mounted() {
    this.getData()
  }

  /**
   * 获取详情数据
   */
  private async getData() {
    try {
      this.loading = true
      // 一般是从路由里拿id
      const params = {
        id: this.$route.params.id,
      }
      const res = await getProDetail3(params)
      this.proDetail3Info = res.data
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }
}
</script>
<style lang="scss" scoped>
.status-dot {
  &--1 {
    background: $color-master;
  }

  &--2 {
    background: $color-success;
  }
}
</style>
