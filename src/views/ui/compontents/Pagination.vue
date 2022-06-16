<template>
  <div class="ui-pagination">
    <p>自定义页数分页器/最多显示 5 页内容，当数量多时默认显示前 5 页以及最后 1 页。</p>
    <p>
      若选中的是中间的页数，则除了固定显示第 1 页和最后 1 页之外，显示以选中的页数为中间数，向前和向后各 2
      页。
    </p>
    <div class="pageination">
      <el-pagination
        :page-sizes="[10, 20, 30, 40]"
        :page-size="20"
        :total="153"
        layout=" slot, prev, pager, next"
        :pager-count="5"
        :background="true"
      >
        <el-select v-model="value" placeholder="请选择" popper-class="custom-select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <span class="pageination-total">总条数 : 153</span>
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'UiPagination',
})
export default class extends Vue {
  public static title = {
    zh: '分页器',
    en: 'Pagination',
  }

  private value = '10'
  private options = [
    {
      value: '选项1',
      label: '10',
    },
    {
      value: '选项2',
      label: '20',
    },
    {
      value: '选项3',
      label: '30',
    },
    {
      value: '选项4',
      label: '40',
    },
  ]
}
</script>
<style lang="scss" scoped>
.pageination-total {
  color: #333333;
  font-size: 12px !important;
  font-weight: normal;
  margin: 0 19px 0 20px;
}
</style>
