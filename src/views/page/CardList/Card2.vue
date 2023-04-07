<!--
 * @Author: 孙善鹏
 * @Date: 2022-07-11 16:23:57
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-04-06 18:20:19
 * @Description: 卡片2
-->
<template>
  <el-card class="page-card-list card-small">
    <div class="card-tools">
      <div class="card-tools__left">
        <el-button type="primary">+ 新增质检方案</el-button>
      </div>
      <div class="table-tools__right table-tools__conditions">
        <el-form ref="conditions" inline @submit.native.prevent>
          <el-form-item>
            <el-input v-model="name" placeholder="请输入名称" />
          </el-form-item>
          <el-form-item class="table-tools__conditions__buttons">
            <el-button type="primary" @click="search">查 询</el-button>
            <el-button @click="resetConditions">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col v-for="(card, index) in cardData" :key="index" :span="8">
          <el-card
            shadow="hover"
            :class="[0, 1].includes(index) ? 'card-box active' : 'card-box'"
            class="card-box-less"
          >
            <div class="card-box">
              <div class="card-cont">
                <div class="card-box--title">
                  <svg-icon class="card-box--title--icon" name="question-circle-fill" />
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
                    <div v-if="index === 0" class="card-box--input-text">
                      <span>{{ card.remark }}</span>
                    </div>

                    <cute-edit-input
                      v-else
                      :value="card.remark"
                      class="input-box"
                      @edit-input-save="editInputSave(index)"
                      @edit-input-close="editInputClose(index)"
                    />
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
                  <svg-icon name="ellipsis" />
                </div>
                <div v-else>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      <svg-icon name="ellipsis" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
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
import { CuteEditInput } from '@cutedesign/ui'
import { Component, Vue } from 'vue-property-decorator'
import { getCardList } from '@/api/card2'
import type { CardListItem } from '@/types/Card2'
import variables from '@cutedesign/ui/style/themes/default/index.scss'

@Component({
  name: 'Card1',
  components: {
    CuteEditInput,
  },
})
export default class extends Vue {
  private variables = variables
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
      this.cardData = data.map(item => {
        item.editType = false
        return item
      })
      console.log(this.cardData, 'this.cardData')
      // 补充mockData数据
      this.cardData.unshift(
        ...[
          {
            deploy: 234,
            editType: false,
            remark: '内业资料上传合规性检验方法和字数很多很多内业资料上传合规性检验方法和字数很多很多',
            size: 14,
            title: '年计划审核',
          },
          {
            deploy: 234,
            editType: false,
            remark: '这是一个描述这是一个短的描述',
            size: 14,
            title: '巡检上传合规性检验方法',
          },
          {
            deploy: 234,
            editType: false,
            remark: '这是一个描述这是一个短的描述',
            size: 14,
            title: '封道管理上传',
          },
          {
            deploy: 234,
            editType: false,
            remark: '这是一个描述这是一个短的描述',
            size: 14,
            title: '内业资料上传合规性检验方法和字数很多很多内业资料上传合规性检验方法和字数很多很多',
          },
          {
            deploy: 234,
            editType: true,
            remark: '这是一个描述这是一个短的描述',
            size: 14,
            title: '年计划审核',
          },
          {
            deploy: 234,
            editType: false,
            remark: '这是一个描述这是一个短的描述',
            size: 14,
            title: '封道管理上传',
          },
        ]
      )
    } finally {
      this.loading = false
    }
  }

  private handleEdit(index) {
    this.cardData[index].editType = true
  }
  private editInputSave(index) {
    this.cardData[index].editType = false
  }
  private editInputClose(index) {
    this.cardData[index].editType = false
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
