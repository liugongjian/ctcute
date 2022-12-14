<!--
 * @Author: 孙善鹏
 * @Date: 2022-07-11 16:23:57
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2022-12-14 17:38:35
 * @Description: 卡片2
-->
<template>
  <el-card class="card-small">
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
            <el-button type="primary" @click="search">查 询</el-button>
            <el-button @click="resetConditions">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col v-for="(card, index) in cardData" :key="index" :span="8">
          <el-card shadow="hover" :class="index === 0 ? 'card-box active' : 'card-box'" class="card-box-less">
            <div class="card-box">
              <div class="card-cont">
                <div class="card-box--title">
                  <div class="card-box--title-icon">
                    <svg-icon name="detail-fill" width="14px" height="14px" />
                  </div>
                  <div class="card-box--title-text">
                    {{ card.title }}
                  </div>
                </div>
                <div class="card-box--bar">
                  <div class="card-box--bar--text">
                    总表数 <span>{{ card.size }}</span>
                  </div>
                  <div class="card-box--bar--text">
                    已配置 <span>{{ card.deploy }}</span>
                  </div>
                </div>
                <div class="card-box--info">
                  描述：
                  <div class="card-box--input">
                    <cute-edit-input :value="card.remark" class="input-box" />
                  </div>
                </div>
              </div>
              <div class="card-box--btns-less" :class="{ 'card-disabled': index === 0 }">
                <div>
                  <svg-icon name="setting" />
                </div>
                <div>
                  <svg-icon name="eye" />
                </div>
                <div v-if="index === 0">
                  <svg-icon name="edit" />
                </div>
                <div v-else>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      <svg-icon name="ellipsis" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>编辑</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
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
import { CuteEditInput } from '@cutedesign/base'
import { Component, Vue } from 'vue-property-decorator'
import { getCardList } from '@/api/card2'
import type { CardListItem } from '@/types/Card2'

@Component({
  name: 'Card1',
  components: {
    CuteEditInput,
  },
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
