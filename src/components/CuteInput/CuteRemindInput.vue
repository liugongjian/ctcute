<template>
  <el-autocomplete
    class="inline-input"
    :placeholder="placeholder"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="false"
    :value="value"
    @input="myChange($event)"
  >
    <span slot="suffix" class="prompt-title"
      ><div>{{ value ? placeholder : '' }}</div>
    </span>
  </el-autocomplete>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Emit } from 'vue-property-decorator'

@Component({
  name: 'CuteRemindInput',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) restaurants?: []
  @Prop({ type: String, default: '' }) placeholder?: ''
  @Model('change', { type: String }) value: string
  @Emit('change')
  myChange(key) {
    return key
  }

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
    padding-right: 86px;
  }

  .prompt-title {
    line-height: 32px;
    margin-right: 12px;
  }
}
</style>
