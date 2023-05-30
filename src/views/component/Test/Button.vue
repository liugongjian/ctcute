<!--
 * @Author: 朱凌浩
 * @Date: 2023-03-17 13:45:09
 * @LastEditors: 孙善鹏
 * @LastEditTime: 2023-05-09 10:10:24
 * @Description: Button
-->
<template>
  <div class="button-test">
    <h1>Button</h1>
    <el-card>
      <h3>{{ $t('componentTest.button.defaultButton') }}</h3>
      <el-form inline>
        <el-form-item>
          <el-select v-model="size" :placeholder="$t('componentTest.button.placeohlder')">
            <el-option v-for="size in sizeList" :key="size" :label="size" :value="size"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="isPlain" :label="$t('componentTest.button.plain')"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="isDisabed" :label="$t('componentTest.button.disable')"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="isLoading" :label="$t('componentTest.button.loading')"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="hasIcon" :label="$t('componentTest.button.icon')"></el-checkbox>
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
        >{{ button.label }}</el-button
      >
    </el-card>

    <el-card>
      <h3>{{ $t('componentTest.button.iconButton') }}</h3>
      <el-form inline>
        <el-form-item :label="$t('componentTest.button.size')">
          <el-select v-model="size" :placeholder="$t('componentTest.button.placeholder')">
            <el-option v-for="size in sizeList" :key="size" :label="size" :value="size"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('componentTest.button.plain')">
          <el-checkbox v-model="isPlain"></el-checkbox>
        </el-form-item>
        <el-form-item :label="$t('componentTest.button.disable')">
          <el-checkbox v-model="isDisabed"></el-checkbox>
        </el-form-item>
        <el-form-item :label="$t('componentTest.button.circle')">
          <el-checkbox v-model="isCircle"></el-checkbox>
        </el-form-item>
        <el-form-item :label="$t('componentTest.button.square')">
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
      <h3>{{ $t('componentTest.button.textButton') }}</h3>
      <el-form inline>
        <el-form-item :label="$t('componentTest.button.size')">
          <el-select v-model="size" :placeholder="$t('componentTest.button.placeholder')">
            <el-option v-for="size in sizeList" :key="size" :label="size" :value="size"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('componentTest.button.disable')">
          <el-checkbox v-model="isDisabed"></el-checkbox>
        </el-form-item>
        <el-form-item :label="$t('componentTest.button.loading')">
          <el-checkbox v-model="isLoading"></el-checkbox>
        </el-form-item>
        <el-form-item :label="$t('componentTest.button.icon')">
          <el-checkbox v-model="hasIcon"></el-checkbox>
        </el-form-item>
      </el-form>
      <el-button
        v-for="textButton in textButtonList"
        :key="textButton.type"
        type="text"
        :size="size"
        :disabled="isDisabed"
        :loading="isLoading"
        :icon="getIcon()"
        :text-type="textButton.type"
      >
        {{ $t('componentTest.button.textButton') }}
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
      label: this.$t('componentTest.button.defaultButton'),
    },
    {
      type: 'primary',
      label: this.$t('componentTest.button.primaryButton'),
    },
    {
      type: 'ct',
      label: this.$t('componentTest.button.ctyunButton'),
    },
    {
      type: 'success',
      label: this.$t('componentTest.button.successButton'),
    },
    {
      type: 'warning',
      label: this.$t('componentTest.button.warnButton'),
    },
    {
      type: 'danger',
      label: this.$t('componentTest.button.dangerButton'),
    },
  ]
  private textButtonList = [
    {
      type: '',
      label: this.$t('componentTest.button.textButton'),
    },
    {
      type: 'primary',
      label: this.$t('componentTest.button.textButton'),
    },
    {
      type: 'ct',
      label: this.$t('componentTest.button.textButton'),
    },
    {
      type: 'success',
      label: this.$t('componentTest.button.textButton'),
    },
    {
      type: 'warning',
      label: this.$t('componentTest.button.textButton'),
    },
    {
      type: 'danger',
      label: this.$t('componentTest.button.textButton'),
    },
    {
      type: 'weak',
      label: this.$t('componentTest.button.textButton'),
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
