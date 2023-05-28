<!--
 * @Author: 刘功坚
 * @Date: 2022-07-14 19:41:25
 * @LastEditors: 刘功坚
 * @LastEditTime: 2023-04-28 17:30:06
 * @Description:简单表单页
-->
<template>
  <el-card class="simple-detail">
    <div class="detail-nav">
      <div @click="goBack">
        <svg-icon name="left" class="back" width="16" height="16"></svg-icon>
      </div>
      <div class="detail-title">{{ detail }}</div>
    </div>
    <cute-titled-block title="基础信息">
      <template #content>
        <el-descriptions :column="2" border>
          <el-descriptions-item>
            <template slot="label"> 内部标识符 </template>
            {{ simpleDetailInfo && simpleDetailInfo.basic && simpleDetailInfo.basic.innerIdentity }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 标识符 </template>
            {{ simpleDetailInfo && simpleDetailInfo.basic && simpleDetailInfo.basic.showIdentity }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 中文名称 </template>
            {{ simpleDetailInfo && simpleDetailInfo.basic && simpleDetailInfo.basic.chineseName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 英文名称 </template>
            {{ simpleDetailInfo && simpleDetailInfo.basic && simpleDetailInfo.basic.englishName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 语境</template>
            {{ simpleDetailInfo && simpleDetailInfo.basic && simpleDetailInfo.basic.context }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 版本 </template>
            {{ simpleDetailInfo && simpleDetailInfo.basic && simpleDetailInfo.basic.version }}
          </el-descriptions-item>
          <el-descriptions-item :span="2">
            <template slot="label"> 同义名称 </template>
            {{ simpleDetailInfo && simpleDetailInfo.basic && simpleDetailInfo.basic.synonyms }}
          </el-descriptions-item>
        </el-descriptions>
      </template>
    </cute-titled-block>
    <cute-titled-block title="融合">
      <template #content>
        <el-descriptions :column="2" border>
          <el-descriptions-item>
            <template slot="label"> 融合单位类型 </template>
            {{ simpleDetailInfo && simpleDetailInfo.fusion && simpleDetailInfo.fusion.type }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 融合单位数据元编码 </template>
            {{ simpleDetailInfo && simpleDetailInfo.fusion && simpleDetailInfo.fusion.encode }}
          </el-descriptions-item>
        </el-descriptions>
      </template>
    </cute-titled-block>
    <div class="detail-goods">
      <cute-titled-block title="退货商品">
        <template #content>
          <el-collapse seperate>
            <el-collapse-item
              v-for="(item, index) in simpleDetailInfo && simpleDetailInfo.returnGoods"
              :key="item.type"
              :title="item.type"
              :name="index"
            >
              <el-table :data="item.detail">
                <el-table-column prop="goodsId" label="商品编码">
                  <template slot-scope="scope">
                    <router-link to="/">{{ scope.row.goodsId }}</router-link>
                  </template>
                </el-table-column>
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="goodsCode" label="商品条码"></el-table-column>
                <el-table-column prop="price" label="单价"></el-table-column>
                <el-table-column prop="count" label="数量"></el-table-column>
                <el-table-column prop="totalPrice" label="总价"></el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </template>
      </cute-titled-block>
      <el-button class="operation" type="text">操作</el-button>
    </div>
    <cute-titled-block title="退货进度">
      <template #content>
        <el-table :data="simpleDetailInfo && simpleDetailInfo.returnGoodsProgress">
          <el-table-column prop="time" label="时间"></el-table-column>
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
      </template>
    </cute-titled-block>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as SimpleDetail from '@/types/SimpleDetail'
import { getSimpleDetail } from '@/api/simpleDetail'
import { STATUS, PROGRESS } from '@/dics/simpleDetail'

@Component({
  name: 'SimpleTable',
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
  private simpleDetailInfo: SimpleDetail.SimpleDetailInfo = null

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
      const res = await getSimpleDetail(params)
      this.simpleDetailInfo = res.data
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  }
  /**
   * 点击返回
   */
  private goBack() {
    this.$message.success('点击了返回！')
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
