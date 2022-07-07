<template>
  <div style="display: flex;">
    <el-dropdown
      trigger="click" :hide-on-click="false" placement="bottom-start" @visible-change="openDropdown"
    >
      <el-tag type="newtag" size="large"> + 新增过滤 </el-tag>
      <el-dropdown-menu slot="dropdown" class="conventional-dropdown">
        <el-dropdown-item>
          <el-form>
            <el-form-item label="cpu使用量">
              <el-select placeholder="请选择" style="width: 90px; margin-right: 8px;">
                <el-option
                  v-for="item in operationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>

              <el-input placeholder="请输入" style="width: 90px; margin-right: 8px;" />
              <span>%</span>
            </el-form-item>

            <el-form-item label="RAM使用量">
              <el-select placeholder="请选择" style="width: 90px; margin-right: 8px;">
                <el-option
                  v-for="item in operationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>

              <el-input placeholder="请输入" style="width: 90px; margin-right: 8px;" />
              <span>%</span>
            </el-form-item>
            <el-form-item label="磁盘剩余量">
              <el-select placeholder="请选择" style="width: 90px; margin-right: 8px;">
                <el-option
                  v-for="item in operationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-input placeholder="请输入" style="width: 90px; margin-right: 8px;" />
              <span>%</span>
            </el-form-item>
            <el-form-item label="网络平均负数">
              <el-select placeholder="请选择" style="width: 90px; margin-right: 8px;">
                <el-option
                  v-for="item in operationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-input placeholder="请输入" style="width: 90px; margin-right: 8px;" />
              <span>%</span>
            </el-form-item>
            <el-form-item label="处理请求数">
              <el-select placeholder="请选择" style="width: 90px; margin-right: 8px;">
                <el-option
                  v-for="item in operationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-input placeholder="请输入" style="width: 90px; margin-right: 8px;" />
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
  @Prop({ type: Array, default: [] }) data?: [] // 下拉数据
}
</script>

<style lang="scss" scoped>
.el-popper {
  padding: 0 $text-size-large $text-size-large $text-size-large;
}

.el-form-item {
  margin: 0;
  margin-top: $text-size-large;
  display: flex;

  ::v-deep.el-form-item__label {
    padding-right: 12px;
    color: $color-grey-1;
  }
}

.el-dropdown-menu--medium .el-dropdown-menu__item {
  &:hover {
    background: $color-white;
    color: $color-grey-1;
  }
}

</style>
