<template>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="el-color-dropdown cute-color-dropdown"
      :class="{ 'el-color-dropdown-simple': isSimpleLayout }"
    >
      <div v-if="!isSimpleLayout" class="el-color-dropdown__main-wrapper">
        <HueSlider ref="hue" :color="color" vertical class="hue-slider"></HueSlider>
        <SvPanel ref="sl" :color="color"></SvPanel>
      </div>
      <AlphaSlider v-if="showAlpha && !isSimpleLayout" ref="alpha" :color="color"></AlphaSlider>
      <Predefine
        v-if="predefine"
        :class="{ 'predefine-simple': isSimpleLayout }"
        :color="color"
        :colors="predefine"
        :type="type"
        @confirmValue="confirmValue"
      ></Predefine>
      <div v-if="!isSimpleLayout" class="el-color-dropdown__btns">
        <span class="el-color-dropdown__value">
          <ElInput
            v-model="customInput"
            :validate-event="false"
            size="mini"
            @keyup.native.enter="handleConfirm"
            @blur="handleConfirm"
          >
          </ElInput>
        </span>
        <ElButton size="mini" type="text" class="el-color-dropdown__link-btn" @click="$emit('clear')">
          {{ t('el.colorpicker.clear') }}
        </ElButton>
        <ElButton size="mini" class="el-color-dropdown__btn" @click="confirmValue">
          {{ t('el.colorpicker.confirm') }}
        </ElButton>
      </div>
    </div>
  </transition>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import SvPanel from './SvPanel'
import HueSlider from './HueSlider'
import AlphaSlider from './AlphaSlider'
import Predefine from './PredefinePanel'
import Popper from 'element-ui/src/utils/vue-popper'
import Locale from 'element-ui/lib/mixins/locale'
import ElInput from 'element-ui/packages/input'
import ElButton from 'element-ui/packages/button'

export default {
  name: 'ElColorPickerDropdown',

  components: {
    SvPanel,
    HueSlider,
    AlphaSlider,
    ElInput,
    ElButton,
    Predefine,
  },

  mixins: [Popper, Locale],

  props: {
    color: {
      required: true,
      type: Object,
    },
    showAlpha: Boolean,
    predefine: { type: Array, default: undefined },
    type: { type: String, default: 'default' },
    placement: { type: String, default: 'bottom-start' },
  },

  data() {
    return {
      customInput: '',
    }
  },

  computed: {
    currentColor() {
      const parent = this.$parent
      return !parent.value && !parent.showPanelColor ? '' : parent.color.value
    },
    isSimpleLayout() {
      return this.type === 'predefine'
    },
  },

  watch: {
    showPopper(val) {
      if (val === true) {
        this.$nextTick(() => {
          const { sl, hue, alpha } = this.$refs
          sl && sl.update()
          hue && hue.update()
          alpha && alpha.update()
        })
      }
    },

    currentColor: {
      immediate: true,
      handler(val) {
        this.customInput = val
      },
    },
  },

  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el
    this.referenceElm = this.$parent.$el
  },

  methods: {
    confirmValue() {
      this.$emit('pick')
    },

    handleConfirm() {
      this.color.fromString(this.customInput)
    },
  },
}
</script>
