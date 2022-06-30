<template>
  <el-pagination
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :total="total"
    layout=" slot, prev, pager, next"
    :pager-count="5"
    :background="true"
  >
    <el-select v-model="optionSize" placeholder="请选择" popper-class="custom-select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <span class="pageination-total">总条数 : {{ total }}</span>
  </el-pagination>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'UiPagination',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) options?: [] // 下拉数据
  @Prop({ type: String, default: '' }) optionSize?: '' // 下拉回显值
  @Prop({ type: Number, default: 10 }) total?: number // 总条数
  @Prop({ type: Array, default: [] }) pageSizes?: []
  @Prop({ type: Number, default: 20 }) pageSize?: number
}
</script>

<style lang="scss" scoped>
.el-pagination {
  margin-top: 8px;
  padding-top: 8px;

  ::v-deep.el-select .el-input.el-input--suffix {
    width: 60px;
  }

  .pageination-total {
    color: $text-color-primary;
    font-size: $text-size-primary !important;
    font-weight: normal;
    margin: 0 19px 0 20px;
  }

  ::v-deep.el-input__inner {
    width: 60px;
    height: 24px;
    font-size: $text-size-primary;
  }

  ::v-deep.el-select .el-input {
    width: 60px;
  }

  ::v-deep .el-input--medium .el-input__icon {
    line-height: 24px;
    color: $icon-color;
  }

  ::v-deep.el-pager {
    ::v-deep li {
      font-size: $text-size-primary;
      height: 24px;
      line-height: 24px;
    }

    ::v-deep.el-icon-d-arrow-right:before,
    .el-icon-d-arrow-left:before {
      line-height: 0;
    }
  }
}

::v-deep.el-pagination.is-background .el-pager li {
  min-width: 20px;
}

::v-deep.el-pagination__total {
  margin-right: 14px;
}

::v-deep.el-pagination.is-background .btn-prev,
::v-deep.el-pagination.is-background .btn-next,
::v-deep.el-pagination.is-background .el-pager li {
  background-color: $pagination-fill;
  font-weight: 400;
}

::v-deep.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: $text-color-primary;
  background: $color-master-7;
}

::v-deep.el-pagination__jump {
  margin-left: 0;

  ::v-deep.el-pagination__editor.el-input {
    margin: 0 8px;
  }
}
</style>
