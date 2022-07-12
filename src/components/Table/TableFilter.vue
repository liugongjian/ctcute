<template>
  <div>
    <el-tag
      v-for="(v, i) in data"
      v-show="flag"
      :key="i"
      type="info"
      size="large"
      closable
      @close="flag = false"
      >{{ v.content }}</el-tag
    >
    <el-dropdown
      trigger="click"
      :hide-on-click="false"
      placement="bottom-start"
      @visible-change="openDropdown"
    >
      <el-tag type="newtag" size="large"> + 新增过滤 </el-tag>
      <el-dropdown-menu slot="dropdown" class="conventional-dropdown">
        <el-dropdown-item>
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
              <span>%</span>
            </el-form-item>
          </el-form>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
  private flag = true
  private openDropdown(value: boolean) {
    if (!value) {
      const data = []
      this.formData.forEach((item: any, i) => {
        if (this.formInput[i] && this.formSelect[i]) {
          data.push({
            content: item.label + this.formSelect[i] + this.formInput[i],
          })
        }
      })
      this.data = data
      this.formInput = {}
      this.formSelect = {}
    }
  }
}
</script>

<style lang="scss" scoped>
.el-popper {
  padding: 0 $text-size-large $text-size-large $text-size-large;
}

.el-tag {
  margin-right: 12px;
}

.el-form-item {
  margin: 0;
  margin-top: $text-size-large;
  display: flex;

  ::v-deep.el-form-item__label {
    padding-right: 12px;
    color: $color-grey-1;
  }

  .el-select,
  .el-input {
    width: 90px;
    margin-right: 8px;
  }
}

.el-dropdown-menu--medium .el-dropdown-menu__item {
  &:hover {
    background: $color-white;
    color: $color-grey-1;
  }
}
</style>
