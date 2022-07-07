<template>
  <el-autocomplete
    v-model="model"
    class="inline-input"
    :placeholder="placeholder"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
  >
    <span slot="suffix" class="prompt-title"><div>{{ model ? title : '' }}</div>
    </span>
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
  @Prop({ type: String, default: '' }) title?: ''
  @Prop({ type: String, default: '' }) model?: ''

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
}
</script>

<style lang="scss" scoped>
::v-deep.el-autocomplete.inline-input {
  width: 300px;
  height: 32px;

  .el-input--suffix .el-input__inner {
    padding-right: 70px;
  }

  .prompt-title {
    line-height: 32px;
    margin-right: 12px;
  }
}
</style>
