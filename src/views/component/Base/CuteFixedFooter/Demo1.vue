<!--
 * @Author: 黄靖
 * @Date: 2023-04-25 17:49:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-05-08 15:03:06
 * @Description:
-->
<template>
  <div>
    需要使用在CuteLayout中，见页面下方。
    <cute-fixed-footer>
      <div class="footer-content">
        <el-button type="primary" :loading="loading" @click="submit">提 交</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </cute-fixed-footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private desc = '描述文本'
  private size = ''
  private loading = false

  private submit() {
    this.$message('提交中...')
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }

  private cancel() {
    this.$message('取消')
  }
}
</script>
<style lang="scss" scoped>
.footer-content {
  display: flex;
  justify-content: end;
}
</style>
