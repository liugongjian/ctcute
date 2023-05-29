<!--
 * @Author: 黄靖
 * @Date: 2022-07-10 13:13:36
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-04-06 18:20:19
 * @Description: 卡片1
-->
<template>
  <el-card class="page-card-list card1-page">
    <el-tabs value="third" type="card" size="small">
      <el-tab-pane label="默认项" name="second"></el-tab-pane>
      <el-tab-pane label="选中项" name="third"></el-tab-pane>
      <el-tab-pane label="不可用" name="fourth" disabled></el-tab-pane>
    </el-tabs>
    <div class="card-tools">
      <div class="card-tools__right">
        <el-form ref="conditionsForm" inline @submit.native.prevent>
          <el-form-item>
            <el-input v-model="name" class="card1-input" placeholder="请输入名称">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div>
      <el-row :gutter="20">
        <el-col v-for="(card, index) in cardData" :key="index" :span="8">
          <el-card shadow="hover">
            <div :class="index === 0 ? 'card-box active' : 'card-box'">
              <div class="card-box--title">
                <svg-icon class="card-box--title--icon" name="question-circle-fill" /> {{ card.title }}
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
                {{ card.remark }}
              </div>
              <div class="card-box--btns" :class="{ 'card-disabled': index === 0 }">
                <div>
                  <svg-icon name="setting" />
                </div>
                <div>
                  <svg-icon name="eye" />
                </div>
                <div>
                  <svg-icon name="edit" />
                </div>

                <div v-if="index === 0">
                  <svg-icon name="ellipsis" />
                </div>
                <div v-else>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      <svg-icon name="ellipsis" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <!-- <el-dropdown-item>编辑</el-dropdown-item> -->
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
import { Component, Ref, Vue } from 'vue-property-decorator'
import { getCardList } from '@/api/card1'
import type { CardListItem } from '@/types/Card1'
import type { ElForm } from 'element-ui/types/form'

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

  @Ref() readonly conditionsForm!: ElForm

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
    this.conditionsForm.resetFields()
  }
}
</script>
