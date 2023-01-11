<template>
  <transition name="el-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="el-color-dropdown"
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
        <ElButton plain size="mini" class="el-color-dropdown__btn" @click="confirmValue">
          {{ t('el.colorpicker.confirm') }}
        </ElButton>
      </div>
    </div>
  </transition>
</template>

<script>
import SvPanel from './sv-panel'
import HueSlider from './hue-slider'
import AlphaSlider from './alpha-slider'
import Predefine from './predefine'
import Popper from 'element-ui/src/utils/vue-popper'
import Locale from 'element-ui/src/mixins/locale'
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
    },
    showAlpha: Boolean,
    predefine: Array,
    type: String,
    placement: {
      type: String,
      default: 'bottom-start',
    },
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
<style lang="scss" scoped>
.el-color-dropdown ::v-deep {
  .hue-slider {
    float: right;
  }

  .el-color-predefine.predefine-simple {
    width: 232px;
    margin: 0;

    .el-color-predefine__color-selector {
      margin: 4px 0 4px 8px;
    }
  }
}
</style>
<style lang="scss">
.el-color-picker__panel.el-color-dropdown-simple {
  padding: 4px 0;
  width: auto;
}
</style>
