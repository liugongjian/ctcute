<!--
 * @Author: 朱玉豆
 * @Date: 2022-12-03 11:18:32
 * @LastEditors: 朱玉豆
 * @LastEditTime: 2023-05-30 16:56:42
 * @Description:
-->
<template>
  <div class="cell-edit">
    <!-- <div style="margin-bottom: 20px">{{ cellConfig }}</div> -->
    <div class="cell-edit--tools">
      <span
        v-for="item in iconConfig"
        :key="item.icon"
        class="cell-edit--tools__box"
        @click="handleChooseTool(item.type)"
      >
        <el-tooltip effect="dark" :content="item.text" placement="top">
          <i v-if="item.type !== 'fontColor'" :class="item.icon"></i>
          <div v-else class="font-picker">
            <div :class="item.icon" class="font-icon" :style="{ 'border-bottom-color': color }"></div>
          </div>
        </el-tooltip>
      </span>
    </div>
    <div v-show="showPalette" class="cell-edit--palette">
      <span v-for="item in palettes" :key="item">
        <span
          class="cell-edit--palette__box"
          :style="{ background: item }"
          @click="handleChoosePalette(item)"
        ></span>
      </span>
    </div>
    <div v-show="showRemarks" class="cell-edit--remarks">
      <cell-remarks @updateremarks="handleUpdateRemarks">
        <template v-if="cellConfig.config && cellConfig.config.remarks">
          <!-- {{ cellConfig.config.remarks[0] || 'slot' }} -->
        </template>
      </cell-remarks>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import Variables from '@cutedesign/ui/style/themes/default/index.scss'
import { CellConfig } from '../types'
import CellRemarks from './CellRemarks.vue'
@Component({
  name: 'CellTools',
  components: { CellRemarks },
})
export default class extends Vue {
  /**
   * iconConfig: 工具栏
   * cellConfig: 每个工具当前状态
   * palettes: 字体色和背景色 色盘
   */
  @Prop({
    default: () => ['#DF0428', '#FF4545', '#3D73F5', '#1AC45D', '#64DE8D', '#91BAFF', '#FF736E', '#FF8F34'],
  })
  public palettes!: Array<string>
  @Prop({
    default: () => [
      {
        icon: 'cute-icon-fill',
        text: '填充',
        type: 'fillColor',
      },
      {
        icon: 'cute-icon-bold',
        text: '加粗',
        type: 'bold',
      },
      {
        icon: 'cute-icon-italic',
        text: '斜体',
        type: 'italic',
      },
      {
        icon: 'cute-icon-remarks',
        text: '备注',
        type: 'remarks',
      },
      {
        icon: 'cute-icon-clear',
        text: '清除',
        type: 'clear',
      },
      {
        icon: 'cute-icon-font-colors',
        text: '字体色',
        type: 'fontColor',
      },
    ],
  })
  public iconConfig!: Array<string>
  @Prop({ type: Object, default: () => ({}) }) cellConfig?: CellConfig

  @Watch('cellConfig', {
    immediate: true,
    deep: true,
  })
  valueChanged() {
    this.showPalette = false
    this.showRemarks = false
    this.color = this.cellConfig?.config?.fontColor || Variables.colorNeutral10
  }

  private showPalette = false
  private showRemarks = false
  private remarks = ''
  private color = this.cellConfig?.config?.fontColor || Variables.colorNeutral10
  // 当前操作
  private currentOperate = ''

  /**
   * 页面created
   */
  private created() {
    this.showPalette = false
    this.showRemarks = false
  }

  handleChooseTool(type: string) {
    this.currentOperate = type
    switch (type) {
      case 'remarks':
        this.showPalette = false
        this.showRemarks = true
        break
      case 'fillColor':
        this.showPalette = true
        this.showRemarks = false
        break
      case 'fontColor':
        this.showPalette = true
        this.showRemarks = false
        break
      case 'clear':
        this.showPalette = false
        this.showRemarks = false
        this.cellConfig['config'] = {
          remarks: this.cellConfig['config']?.remarks || [],
          fillColor: '',
          bold: 'normal',
          italic: 'normal',
          fontColor: Variables.colorNeutral10,
        }
        this.$emit('update', this.cellConfig)
        break
      case 'bold':
        this.showPalette = false
        this.showRemarks = false
        this.cellConfig['config'] = {
          ...this.cellConfig['config'],
          bold: this.cellConfig['config']?.bold === 'bold' ? 'normal' : 'bold',
        }
        this.$emit('update', this.cellConfig)
        break
      case 'italic':
        this.showPalette = false
        this.showRemarks = false
        this.cellConfig['config'] = {
          ...this.cellConfig['config'],
          italic: this.cellConfig['config']?.italic === 'italic' ? 'normal' : 'italic',
        }
        this.$emit('update', this.cellConfig)
        break
      default:
        this.showPalette = false
        this.showRemarks = false
        break
    }
  }
  handleChoosePalette(color) {
    // 根据操作 看是改变bg-color 还是color
    if (this.currentOperate === 'fillColor') {
      this.cellConfig['config'] = {
        ...this.cellConfig['config'],
        fillColor: color,
      }
    } else {
      this.cellConfig['config'] = {
        ...this.cellConfig['config'],
        fontColor: color,
      }
      this.color = color
    }
    this.$emit('update', this.cellConfig)
  }

  handleUpdateRemarks(remarks) {
    this.cellConfig['config'] = {
      ...this.cellConfig['config'],
      remarks: this.cellConfig['config']?.remarks
        ? [...this.cellConfig['config']?.remarks, remarks]
        : [remarks],
    }
    this.$emit('update', this.cellConfig)
  }
}
</script>
<style lang="scss" scoped>
$cell-edit-palette-width: 20px !default;
$cell-edit-palette-height: 20px !default;
$cell-edit-remarks-width: 244px !default;
$font-icon-transform: scale(0.9, 0.9) !default;
$cell-edit-max-width: 238px;
$cell-edit-max-height: 238px;
$cell-edit-font-picker-width: 14px;
.cell-edit {
  background: $color-bg-1;
  box-shadow: $shadow-2;
  max-height: $cell-edit-max-height;
  max-width: $cell-edit-max-width;
  overflow-y: scroll;
  &--tools {
    padding: $padding;
    border-radius: $border-radius;
    &__box {
      cursor: pointer;
      padding: 1px $padding-6;
      margin-right: 1px;
      &:hover {
        background: $blue-1;
      }
      .font-picker {
        width: $cell-edit-font-picker-width;
        display: inline-block;
        .font-icon {
          transform: $font-icon-transform;
          padding-top: 1px;
          color: $neutral-9;
          border-bottom: 2px solid;
        }
      }
    }

    i {
      font-size: $text-size-md;
      color: $neutral-9;
    }
  }
  &--palette {
    padding: $padding-2x 0px $padding-2x $padding-2x;
    &__box {
      width: $cell-edit-palette-width;
      height: $cell-edit-palette-height;
      border-radius: $border-radius;
      // border: 1px solid $border-color;
      cursor: pointer;
      display: inline-block;
      background: $neutral-9;
      margin-right: $margin-2x;
    }
  }
  &--remarks {
    padding: $padding-2x;
  }
}
</style>
