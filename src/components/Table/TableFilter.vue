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
            <el-form-item v-for="(v, i) in fromData" :key="i" :label="v.label">
              <el-select v-model="fromSelect[i]" placeholder="请选择">
                <el-option
                  v-for="(item, ind) in v.options"
                  :key="ind"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>

              <el-input v-model="fromInput[i]" placeholder="请输入" />
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
  @Prop({ type: Array, default: [] }) fromData: [] // 表单数据
  private fromInput = {}
  private fromSelect = {}
  private data = []
  private flag = true
  private openDropdown(value: boolean) {
    if (!value) {
      const data = []
      this.fromData.forEach((item: any, i) => {
        if (this.fromInput[i] && this.fromSelect[i]) {
          data.push({
            content: item.label + this.fromSelect[i] + this.fromInput[i],
          })
        }
      })
      this.data = data
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
