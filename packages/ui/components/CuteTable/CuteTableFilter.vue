<template>
  <div class="cute-table-filter">
    <slot></slot>
    <el-popover
      trigger="manual"
      v-model="visible"
      placement="bottom-start"
      popper-class="cute-table-filter__popover"
    >
      <template #reference>
        <el-tag type="newtag" size="large" @click="visible = true">+ {{ t('cute.tableFilter.new') }}</el-tag>
      </template>
      <div class="popover__content">
        <slot name="filter-form"></slot>
      </div>
      <div class="popover__footer">
        <el-button @click="cancel">{{ t('cute.button.cancel') }}</el-button>
        <el-button type="primary" @click="submit">{{ t('cute.button.submit') }}</el-button>
      </div>
    </el-popover>
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Locale from '@cutedesign/ui/mixins/locale'

@Component({
  name: 'CuteTableFilter',
})
export default class extends Mixins(Locale) {
  private visible = false

  private cancel() {
    this.$emit('cancel')
    this.visible = false
  }

  private submit() {
    this.$emit('submit')
    this.visible = false
  }
}
</script>
