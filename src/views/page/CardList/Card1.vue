<template>
  <el-card class="card1">
    <div class="card-tools">
      <div class="card-tools__left">
        <el-button type="primary">+ 新增质检方案</el-button>
      </div>
      <div class="card-tools__right">
        <el-form ref="conditions" inline @submit.native.prevent>
          <el-form-item>
            <el-input v-model="name" placeholder="请输入名称" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button @click="resetConditions">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col v-for="(card, index) in cardData" :key="index" :span="8">
          <el-card shadow="hover">
            <div class="card-box">
              <div class="card-box--title">
                <svg-icon name="detail-fill" width="24px" height="24px" /> {{ card.title }}
              </div>
              <div class="card-box--bar">
                <div class="card-box--bar--text">
                  总表数 <span>{{ card.size }}</span>
                </div>
                <div class="card-box--bar--text">
                  已配置 <span>{{ card.deploy }}</span>
                </div>
              </div>
              <div class="card-box--info">描述：{{ card.remark }}</div>
              <div class="card-box--btns">
                <div>
                  <svg-icon name="setting" />
                </div>
                <div>
                  <svg-icon name="eye" />
                </div>
                <div>
                  <svg-icon name="edit" />
                </div>
                <div>
                  <svg-icon name="ellipsis" />
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getCardList } from '@/api/card'
import type { CardListItem } from '@/types/Card'

@Component({
  name: 'Card1',
})
export default class extends Vue {
  /**
   * 页面Mounted
   */
  private mounted() {
    this.getData()
  }

  // 加载状态
  private loading = false

  private name = ''

  // 数据
  private cardData: CardListItem[] = []

  private async getData() {
    try {
      this.loading = true
      const { data } = await getCardList()
      this.cardData = data
    } finally {
      this.loading = false
    }
  }

  /**
   * 搜索表单
   */
  private search() {
    console.log('search from')
  }

  /**
   * 重置搜索表单
   */
  private resetConditions() {
    const conditionsForm: any = this.$refs.conditions
    conditionsForm.resetFields()
  }
}
</script>
