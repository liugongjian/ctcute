<!--
 * @Author: 黄靖
 * @Date: 2023-04-25 17:49:09
 * @LastEditors: 黄靖
 * @LastEditTime: 2023-06-06 19:01:10
 * @Description:
-->
<template>
  <div>
    需要使用在CuteLayout中，见页面上方。
    <cute-fixed-header>
      <div class="header-content">示例Header</div>
    </cute-fixed-header>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo1',
})
export default class extends Vue {
  private desc = '描述文本'
}
</script>
<style lang="scss" scoped>
.header-content {
  font-size: $text-size-md;
  font-weight: $text-title-weight;
}
</style>
