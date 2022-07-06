<template>
  <el-card class="card1">
    <div class="card-tools">
      <div class="card-tools__left">
        <el-button type="primary">+ 新增按钮</el-button>
        <el-button>次按钮</el-button>
      </div>
      <div class="card-tools__right">
        <el-form ref="conditions" inline @submit.native.prevent>
          <el-form-item prop="name">
            <el-input
              v-model="name"
              placeholder="请输入名称"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search">查询</el-button>
            <el-button @click="resetConditions">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div>hi 我是小卡片</div>
  </el-card>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Card1',
})
export default class extends Vue {
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
