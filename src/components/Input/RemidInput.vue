<template>
  <el-autocomplete
    v-model="state1"
    class="inline-input"
    placeholder="请输入内容"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    @input="prompt"
  >
    <span v-show="flag" slot="suffix" class="prompt-title">{{ placeholder }}</span>
  </el-autocomplete>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'RemindInput',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) restaurants?: []
  @Prop({ type: String, default: '' }) placeholder?: ''

  private state1 = ''
  private flag = false

  private querySearch(queryString, cb) {
    const restaurants = this.restaurants
    const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
    // 调用 callback 返回建议列表的数据
    cb(results)
  }

  private createFilter(queryString) {
    return restaurant => {
      return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
  }

  private prompt(e: any) {
    if (e) {
      this.flag = true
    } else {
      this.flag = false
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep.el-autocomplete.inline-input {
  width: 300px;
  height: 32px;

  .prompt-title {
    line-height: 36px;
    margin-right: 12px;
  }
}
</style>
