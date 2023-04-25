<!--
 * @Author: 赵丹
 * @Date: 2022-07-08 14:18:41
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2022-12-16 19:50:09
 * @Description: 卡片3
-->
<template>
  <div class="page-card-list card-big">
    <el-card shadow="always">
      <div class="card-btn">
        <el-button type="primary">+ 新增组件类型</el-button>
      </div>
      <el-row :gutter="20" class="card-box">
        <el-col v-for="(item, index) in cardData" :key="index" :span="12">
          <el-card shadow="hover" :class="index === 0 ? 'card-box active' : 'card-box'">
            <div class="card-box__info">
              <div class="card-box__info__header">
                <div class="card-box__info__title">
                  <span class="card-box__info__avatar">
                    <svg-icon class="card-box--title--icon" name="question-circle-fill" />
                  </span>
                  <span class="card-box__info__name">{{ item.name }}</span>
                  <span class="card-box__info__version">
                    支持版本号:
                    <span class="card-box__info__version__num">{{ item.version }}</span>
                  </span>
                </div>
                <div class="card-box__info__handle" :class="{ 'card-disabled': index === 0 }">
                  <svg-icon name="edit" />
                  <svg-icon name="delete" />
                </div>
              </div>
              <div class="card-box__info__con">
                <span class="card-box__info__text">角色</span>
                <span ref="cardInfoTag" class="card-box__info__tag">
                  <el-tooltip
                    v-for="(val, idx) in item.tags"
                    :key="idx"
                    class="item"
                    effect="dark"
                    :content="val.tips"
                    placement="top-start"
                  >
                    <el-tag type="info">{{ val.name }}</el-tag>
                    <!-- <span></span> -->
                  </el-tooltip>
                </span>
              </div>
              <div class="card-box__info__con card-box__info__desc">
                <span class="card-box__info__text">描述</span>
                <span ref="cardInfoDescribe" class="card-box__info__describe">
                  <span class="card-box__info__describe__text">
                    {{ item.describe }}
                  </span>
                </span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as CardList from '@/types/Card3'
import { getCardData } from '@/api/card3'

@Component({
  name: 'Card3',
})
export default class extends Vue {
  private cardData: CardList.CardListItem[] = []

  private async mounted() {
    await this.getData()
    this.calcHeight()
  }

  private async getData() {
    try {
      const res = await getCardData()
      this.cardData = res.data.list || []
    } catch (err) {
      this.$message(err.message)
    }
  }

  private calcHeight() {
    this.$nextTick(() => {
      const temp: any = this.$refs['cardInfoTag']
      temp.forEach((item: any, idx: number) => {
        this.$refs['cardInfoDescribe'][idx].style.height = `${98 - item.offsetHeight}px`
      })
    })
  }
}
</script>
