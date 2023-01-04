<!--
 * @Author: 秦瑞斌
 * @Date: 2022-11-02 13:32:32
 * @LastEditors: 秦瑞斌
 * @LastEditTime: 2022-11-04 09:02:01
 * @Description: 
-->
<template>
  <div>
    <cute-slider
      v-model="values"
      :min="0"
      :max="100"
      :disabled="false"
      :range="true"
      @inputChange="changes"
      @moveChange="inputChange"
    />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Demo10',
})
export default class extends Vue {
  private values = [20, 50]
  private changes(e) {
    //改变v-model绑定值
    this.values = e
  }
  private inputChange(e) {
    //改变v-model绑定值
    this.values = e
  }
}
</script>
<style lang="scss" scoped></style>
