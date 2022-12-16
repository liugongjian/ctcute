<!--
 * @Author: 王亚振
 * @Date: 2022-07-10 13:13:36
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2022-12-16 17:25:04
 * @Description: 卡片1
-->
<template>
  <el-card class="card1-page">
    <div class="card-tools">
      <div class="card-tools__left">
        <el-button type="primary">+ 新增质检方案</el-button>
      </div>
      <div class="card-tools__right">
        <el-form ref="conditionsForm" inline @submit.native.prevent>
          <el-form-item>
            <el-input v-model="name" placeholder="请输入名称" />
          </el-form-item>
          <el-form-item class="card-tolls__btn">
            <el-button type="primary" @click="search">查 询</el-button>
            <el-button @click="resetConditions">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-tabs value="third" type="card" size="small">
      <el-tab-pane label="默认项" name="second"></el-tab-pane>
      <el-tab-pane label="选中项" name="third"></el-tab-pane>
      <el-tab-pane label="不可用" name="fourth" disabled></el-tab-pane>
    </el-tabs>
    <div>
      <el-row :gutter="20">
        <el-col v-for="(card, index) in cardData" :key="index" :span="8">
          <el-card shadow="hover">
            <div :class="index === 0 ? 'card-box active' : 'card-box'">
              <div class="card-box--title">
                <svg-icon name="question-circle-fill" width="24px" height="24px" /> {{ card.title }}
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
                <span v-if="index === 0">{{ card.remark }}</span>
                <span v-else-if="card.editType === false && index !== 0">{{ card.remark }}</span>
                <div v-else class="card-box--input">
                  <cute-edit
                    :value="card.remark"
                    class="input-box"
                    @edit-input-save="editInputSave(index)"
                    @edit-input-close="editInputClose(index)"
                  />
                </div>
              </div>
              <div class="card-box--btns" :class="{ 'card-disabled': index === 0 }">
                <div>
                  <svg-icon name="setting" />
                </div>
                <div>
                  <svg-icon name="eye" />
                </div>
                <div>
                  <svg-icon name="edit" @click="handleEdit(index)" />
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
import { CuteEdit } from '@cutedesign/base'
import { Component, Ref, Vue } from 'vue-property-decorator'
import { getCardList } from '@/api/card1'
import type { CardListItem } from '@/types/Card1'
import type { ElForm } from 'element-ui/types/form'

@Component({
  name: 'Card1',
  components: {
    CuteEdit,
  },
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
      this.cardData = data.map(item => {
        item.editType = false
        return item
      })
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
    this.conditionsForm.resetFields()
  }
}
</script>
<style scoped>
.card1-page .card-box .card-box--info {
  line-height: 34px;
  margin-top: 3px;
  display: flex;
}
</style>
