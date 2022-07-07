<template>
  <el-card class="simple-detail">
    <div class="block">
      <div class="block__title">基础信息</div>
      <div class="block__content">
        <el-descriptions :column="2" border>
          <el-descriptions-item>
            <template slot="label"> 内部标识符 </template>
            {{ simpleDetailInfo.basic.innerIdentity }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 标识符 </template>
            {{ simpleDetailInfo.basic.showIdentity }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 中文名称 </template>
            {{ simpleDetailInfo.basic.chineseName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 英文名称 </template>
            {{ simpleDetailInfo.basic.englishName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 语境</template>
            {{ simpleDetailInfo.basic.context }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 版本 </template>
            {{ simpleDetailInfo.basic.version }}
          </el-descriptions-item>
          <el-descriptions-item :span="2">
            <template slot="label"> 同义名称 </template>
            {{ simpleDetailInfo.basic.synonyms }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
    <div class="block">
      <div class="block__title">融合</div>
      <div class="block__content">
        <el-descriptions :column="2" border>
          <el-descriptions-item>
            <template slot="label"> 融合单位类型 </template>
            {{ simpleDetailInfo.fusion.type }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"> 融合单位数据元编码 </template>
            {{ simpleDetailInfo.fusion.encode }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
    <div class="block">
      <div class="block__title">退货商品</div>
      <div class="block__content">
        <el-collapse v-model="activeNames1" seperate>
          <el-collapse-item
            v-for="(item, index) in simpleDetailInfo.returnGoods"
            :key="item.type"
            :title="item.type"
            :name="index"
          >
            <el-table :data="item.detail">
              <el-table-column prop="goodsId" label="商品编码">
                <template slot-scope="scope">
                  <span class="table-key">{{ scope.row.goodsId }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="goddsCode" label="商品条码"></el-table-column>
              <el-table-column prop="price" label="单价"></el-table-column>
              <el-table-column prop="count" label="数量"></el-table-column>
              <el-table-column prop="totalPrice" label="总价"></el-table-column>
            </el-table>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div class="block">
      <div class="block__title">退货进度</div>
      <div class="block__content">
        <el-table :data="simpleDetailInfo.returnGoodsProgress">
          <el-table-column prop="time" label="时间"></el-table-column>
          <el-table-column prop="progress" label="当前进度">
            <template slot-scope="{ row }">
              {{ PROGRESS[row.progress] }}
            </template>
          </el-table-column>
          <el-table-column prop="status" label="状态">
            <template slot-scope="{ row }">
              <span class="status-dot" :class="`status-dot--${row.status}`" />{{ STATUS[row.status] }}
            </template>
          </el-table-column>
          <el-table-column prop="operatorId" label="操作员id"></el-table-column>
          <el-table-column prop="duration" label="耗时">
          </el-table-column>
        </el-table>
      </div>
    </div>
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
   * 计算退货进度的耗时，根据时间长短格式化为不同的单位
   * @param duration {number} 退货耗时字段
   */
  // private timestampeFormatter(duration: number) {
  //   if (number / )
  // }

  /**
   * 使用字典格式化退货进度的状态
   * @param data {SimpleTable.Host} 表格行对象
   */
  // private statusFormatter(data: SimpleTable.Host) {
  //   return STATUS[data.status]
  // }
}
</script>
<style lang="scss" scoped>
.simple-detail {
  .block {
    &__title {
      color: $text-color-primary;
      font-weight: 500;
      line-height: 20px;
      display: flex;
      align-items: center;

      &:before {
        width: 4px;
        height: 14px;
        background-color: $color-master-1;
        margin-right: 12px;
        content: ' ';
        display: inline-block;
      }
    }

    &__content {
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
}

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 100%;

  &--1 {
    background: $color-status-success;
  }

  &--2 {
    background: $color-status-warning;
  }

  &--3 {
    background: $color-status-danger;
  }

  &--4 {
    background: $color-status-info;
  }

  &--5 {
    background: $disabled-color;
  }
}
</style>
