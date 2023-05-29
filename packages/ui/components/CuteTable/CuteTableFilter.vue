<template>
  <div class="cute-table-filter">
    <slot>
      <el-tag
        v-for="(item, index) in filters"
        :key="item.key || index"
        type="info"
        size="medium"
        closable
        @close="removeFilter(item)"
      >
        {{ item.value }}
      </el-tag>
    </slot>
    <el-popover
      trigger="manual"
      v-model="visible"
      placement="bottom-start"
      popper-class="cute-table-filter__popover"
    >
      <template #reference>
        <el-button
          type="primary"
          size="small"
          plain
          :icon="btnIcon"
          @click="visible = true"
        >{{ btnText || t('cute.tableFilter.new') }}
        </el-button>
      </template>
      <div class="popover__content">
        <slot name="popover-content"></slot>
      </div>
      <div class="popover__footer">
        <el-button @click="cancel">{{ t('cute.button.cancel') }}</el-button>
        <el-button type="primary" @click="submit">{{ t('cute.button.submit') }}</el-button>
      </div>
    </el-popover>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator'
import Locale from '@cutedesign/ui/mixins/locale'
import { CuteTableFilterItem } from '@cutedesign/ui/types/CuteTableFilter'

@Component({
  name: 'CuteTableFilter',
})
export default class extends Mixins(Locale) {
  @Prop({ default: 'plus' }) private readonly btnIcon: string
  @Prop({ default: '' }) private readonly btnText: string
  @Prop({ type: Array, default: [] }) private readonly filters: CuteTableFilterItem[]

  private visible = false

  private cancel() {
    this.$emit('cancel')
    this.visible = false
  }

  private submit() {
    this.$emit('submit')
    this.visible = false
  }

  private removeFilter(filter: CuteTableFilterItem) {
    this.$emit('remove-filter', filter)
  }
}
</script>
