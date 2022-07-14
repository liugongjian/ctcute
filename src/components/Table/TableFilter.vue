<template>
  <div class="table-filter">
    <el-tag v-for="(v, i) in data" :key="i" type="info" size="large" closable @close="handleClose(v, i)">{{
      v.content
    }}</el-tag>

    <div class="table-filter-dropdown">
      <el-tag type="newtag" size="large" @click="visible = true"> + 新增过滤 </el-tag>
      <div v-if="visible" class="table-filter_content">
        <div class="table-filter_top">
          <el-form>
            <el-form-item v-for="(v, i) in formData" :key="i" :label="v.label">
              <el-select v-model="formSelect[i]" placeholder="请选择">
                <el-option
                  v-for="(item, ind) in v.options"
                  :key="ind"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>

              <el-input v-model="formInput[i]" placeholder="请输入" />
              <span>{{ v.unit }}</span>
            </el-form-item>
          </el-form>
        </div>

        <div class="table-filter_foot">
          <el-button @click="visible = false">取 消</el-button>
          <el-button type="primary" @click="openDropdown">确 定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  name: 'tableFilter',
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) formData: [] // 表单数据
  private formInput = {}
  private formSelect = {}
  private data = []
  private visible = false
  //添加条件标签
  private openDropdown() {
    const data = []
    this.formData.forEach((item: any, i) => {
      if (this.formInput[i] && this.formSelect[i]) {
        data.push({
          content: item.label + this.formSelect[i] + this.formInput[i] + item.unit,
        })
      }
    })
    this.data = data
    this.visible = false
  }

  //删除标签
  private handleClose(value, i) {
    this.data.splice(this.data.indexOf(value), 1)
    //清空删除标签input值
    Object.keys(this.formInput).forEach((item, index) => {
      if (i === index) {
        delete this.formInput[item]
      }
    })
    //清空删除标签select值
    Object.keys(this.formSelect).forEach((item, index) => {
      if (i === index) {
        delete this.formSelect[item]
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.el-popper {
  padding: 0 $text-size-large $text-size-large $text-size-large;
}

.table-filter {
  display: flex;
  align-items: center;

  .el-tag {
    margin-right: 12px;
  }

  .table-filter-dropdown {
    position: relative;

    .table-filter_content {
      position: absolute;
      top: 32px;
      left: 0;
      box-shadow: 0 2px 8px 0 rgba(200, 201, 204, 50%);
      z-index: 999;
      background: $color-white;

      .table-filter_top {
        padding: 0 16px 16px;
        min-width: 332px;

        .el-form-item {
          margin: 0;
          margin-top: $text-size-large;
          display: flex;

          ::v-deep.el-form-item__label {
            padding-right: 12px;
            color: $color-grey-1;
            min-width: 84px;
          }

          .el-select,
          .el-input {
            width: 90px;
            margin-right: 8px;
          }

          span {
            font-size: 12px;
            color: rgba(0, 0, 0, 65%);
          }
        }
      }

      .table-filter_foot {
        height: 50px;
        background: $color-grey-9;
        display: flex;
        justify-content: center;
        align-items: center;

        .el-button + .el-button {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
