<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 朱凌浩
 * @LastEditTime: 2023-03-17 14:09:19
 * @Description: Button
-->
<template>
  <div class="button-test">
    <h1>Button</h1>
    <el-card>
      <h3>默认按钮</h3>
      <el-form inline>
        <el-form-item label="按钮尺寸">
          <el-select v-model="size" placeholder="请选择按钮尺寸">
            <el-option v-for="size in sizeList" :key="size" :label="size" :value="size"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否为朴素按钮">
          <el-checkbox v-model="isPlain"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否禁用">
          <el-checkbox v-model="isDisabed"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否加载中">
          <el-checkbox v-model="isLoading"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否显示图标">
          <el-checkbox v-model="hasIcon"></el-checkbox>
        </el-form-item>
      </el-form>
      <el-button
        v-for="button in buttonList"
        :key="button.type"
        :type="button.type"
        :size="size"
        :disabled="isDisabed"
        :loading="isLoading"
        :plain="isPlain"
        :icon="getIcon()"
      >
        {{ button.label }}
      </el-button>
    </el-card>

    <el-card>
      <h3>图标按钮</h3>
      <el-form inline>
        <el-form-item label="按钮尺寸">
          <el-select v-model="size" placeholder="请选择按钮尺寸">
            <el-option v-for="size in sizeList" :key="size" :label="size" :value="size"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否为朴素按钮">
          <el-checkbox v-model="isPlain"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否禁用">
          <el-checkbox v-model="isDisabed"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否圆形">
          <el-checkbox v-model="isCircle"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否方形">
          <el-checkbox v-model="isSquare"></el-checkbox>
        </el-form-item>
      </el-form>
      <el-button
        v-for="button in buttonList"
        :key="button.type"
        :type="button.type"
        :size="size"
        :disabled="isDisabed"
        :plain="isPlain"
        :round="isRound"
        :circle="isCircle"
        :square="isSquare"
        :icon="getIcon(true)"
      ></el-button>
    </el-card>

    <el-card v-if="false">
      <h3>按钮组</h3>
      <el-form inline>
        <el-form-item label="按钮尺寸">
          <el-select v-model="size" placeholder="请选择按钮尺寸">
            <el-option v-for="size in sizeList" :key="size" :label="size" :value="size"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否为朴素按钮">
          <el-checkbox v-model="isPlain"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否禁用">
          <el-checkbox v-model="isDisabed"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否圆角">
          <el-checkbox v-model="isRound"></el-checkbox>
        </el-form-item>
      </el-form>
      <p v-for="button in buttonList" :key="button.type">
        <el-button-group>
          <el-button
            :type="button.type"
            :plain="isPlain"
            :round="isRound"
            :size="size"
            :disabled="isDisabed"
            icon="el-icon-arrow-left"
          >
            上一页
          </el-button>
          <el-button :type="button.type" :plain="isPlain" :round="isRound" :size="size" :disabled="isDisabed">
            下一页
            <i class="el-icon-arrow-right el-icon--right"></i>
          </el-button>
        </el-button-group>
      </p>
    </el-card>
    <el-card>
      <h3>文本按钮</h3>
      <el-form inline>
        <el-form-item label="按钮尺寸">
          <el-select v-model="size" placeholder="请选择按钮尺寸">
            <el-option v-for="size in sizeList" :key="size" :label="size" :value="size"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否禁用">
          <el-checkbox v-model="isDisabed"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否加载中">
          <el-checkbox v-model="isLoading"></el-checkbox>
        </el-form-item>
        <el-form-item label="是否显示图标">
          <el-checkbox v-model="hasIcon"></el-checkbox>
        </el-form-item>
      </el-form>
      <el-button
        type="text"
        :size="size"
        :disabled="isDisabed"
        :loading="isLoading"
        :plain="isPlain"
        :round="isRound"
        :icon="getIcon()"
      >
        文本按钮
      </el-button>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Button',
})
export default class extends Vue {
  private buttonList = [
    {
      type: '',
      label: '默认按钮',
    },
    {
      type: 'primary',
      label: '主要按钮',
    },
    {
      type: 'ct',
      label: '天翼云按钮',
    },
    {
      type: 'success',
      label: '成功按钮',
    },
    {
      type: 'warning',
      label: '警告按钮',
    },
    {
      type: 'danger',
      label: '危险按钮',
    },
  ]
  private sizeList = ['large', 'medium', 'small', 'mini']
  private size = 'medium'
  private isDisabed = false
  private isLoading = false
  private isPlain = false
  private isRound = false
  private isSquare = false
  private isCircle = false
  private hasIcon = false

  /**
   * 随机生成一个图标
   */
  private getIcon(hasIcon) {
    const list = [
      'el-icon-search',
      'plus-circle',
      'el-icon-share',
      'el-icon-edit',
      'area-chart',
      'bell-fill',
      'check-circle-fill',
      'dashboard',
    ]
    if (!hasIcon && !this.hasIcon) {
      return
    }
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
  }
}
</script>
<style lang="scss" scoped>
.button-test {
  .el-card {
    margin-bottom: $margin-4x;

    h3 {
      margin-top: 0;
    }
  }
}
</style>
