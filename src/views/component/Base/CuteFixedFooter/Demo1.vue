<!--
 * @Author: 黄靖
 * @Date: 2023-04-25 17:49:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-04-25 17:49:09
 * @Description:
-->
<template>
  <div>
    需要使用在CuteLayout页面主体内容中，见页面下方
    <cute-fixed-footer slot="footer">
      <el-button type="primary" @click="operate('提交')">提 交</el-button>
      <el-button @click="operate('取消')">取 消</el-button>
    </cute-fixed-footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CuteFixedFooter from '@cutedesign/ui/components/CuteFixedFooter/index.vue'

@Component({
  name: 'Demo1',
  components: { CuteFixedFooter },
})
export default class extends Vue {
  private desc = '描述文本'
  private size = ''

  private operate(msg: string) {
    this.$message(msg)
  }
}
</script>
