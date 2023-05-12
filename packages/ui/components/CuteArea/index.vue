<template>
  <div
    v-clickoutside="handleClose"
    class="el-select"
    :class="[selectSize ? 'el-select--' + selectSize : '']"
    @click.stop="toggleMenu"
  >
    <el-input
      :id="id"
      ref="reference"
      v-model="selectedLabel"
      type="text"
      :placeholder="currentPlaceholder"
      :name="name"
      :autocomplete="autoComplete || autocomplete"
      :size="selectSize"
      :disabled="selectDisabled"
      :readonly="readonly"
      :validate-event="false"
      :class="{ 'is-focus': visible }"
      :tabindex="null"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown.native.down.stop.prevent="handleNavigate('next')"
      @keydown.native.up.stop.prevent="handleNavigate('prev')"
      @keydown.native.enter.prevent="selectOption"
      @keydown.native.esc.stop.prevent="visible = false"
      @keydown.native.tab="visible = false"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false"
    >
      <template v-if="$slots.prefix" slot="prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <slot v-if="$slots.other && value" name="other"></slot>
        <i v-show="!showClose" :class="['el-select__caret', 'el-input__icon', 'el-icon-' + iconClass]"></i>
        <i
          v-if="showClose"
          class="el-select__caret el-input__icon el-icon-circle-close"
          @click="handleClearClick"
        ></i>
      </template>
    </el-input>
    <transition name="el-zoom-in-top" @before-enter="handleMenuEnter" @after-leave="doDestroy">
      <CuteAreaDropdown
        v-show="visible && emptyText !== false"
        ref="popper"
        :append-to-body="popperAppendToBody"
        :style="popperStyle"
      >
        <div
          v-if="data && data.length"
          class="el-scrollbar__wrap"
          :class="{ 'is-empty': data.length === 0 }"
          :style="popperHeightStyle"
        >
          <div class="el-scrollbar__view" style="margin: 12px">
            <CuteAreaRecent
              v-if="showRecent && recentData && recentData.length"
              :data="recentData"
              :format="format"
              :column-width="columnWidth"
              @change="selectCityClick"
            ></CuteAreaRecent>
            <CuteAreaOption
              v-for="item in columnData"
              :key="item.id"
              :width="columnWidth"
              :data="item.data"
              :value-key="valueKey"
              :format="format"
              @change="selectCityClick"
            ></CuteAreaOption>
          </div>
        </div>
        <template v-if="emptyText && data.length === 0">
          <slot v-if="$slots.empty" name="empty"></slot>
          <p v-else class="el-select-dropdown__empty">
            {{ emptyText }}
          </p>
        </template>
      </CuteAreaDropdown>
    </transition>
  </div>
</template>

<script type="text/babel">
import Emitter from 'element-ui/src/mixins/emitter'
import Focus from 'element-ui/src/mixins/focus'
import Locale from 'element-ui/src/mixins/locale'
import Clickoutside from 'element-ui/src/utils/clickoutside'
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'
import scrollIntoView from 'element-ui/src/utils/scroll-into-view'
import { valueEquals, isIE, isEdge } from 'element-ui/src/utils/util'
import NavigationMixin from 'element-ui/packages/select/src/navigation-mixin'
import { isKorean } from 'element-ui/src/utils/shared'
import CuteAreaOption from './option.vue'
import CuteAreaRecent from './recent.vue'
import CuteAreaDropdown from './dropdown.vue'

export default {
  mixins: [Emitter, Locale, Focus('reference'), NavigationMixin],

  name: 'CuteArea',

  componentName: 'CuteArea',

  inject: {
    elForm: {
      default: '',
    },

    elFormItem: {
      default: '',
    },
  },

  provide() {
    return {
      area: this,
    }
  },

  props: {
    name: String,
    id: String,
    value: {
      required: true,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
    /** @Deprecated in next major version */
    autoComplete: {
      type: String,
      validator(val) {
        process.env.NODE_ENV !== 'production' &&
          console.warn(
            "[Element Warn][Select]'auto-complete' property will be deprecated in next major version. please use 'autocomplete' instead."
          )
        return true
      },
    },
    automaticDropdown: Boolean,
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    popperClass: String,
    noDataText: String,
    placeholder: {
      type: String,
      required: false,
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    popperAppendToBody: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: () => [],
    },
    popperWidth: String,
    popperMaxHeight: String,
    column: {
      type: Number,
      default: 4,
    },
    format: Function,
    showRecent: {
      type: Boolean,
      default: false,
    },
    recentData: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      options: [],
      cachedOptions: [],
      selected: {},
      inputLength: 20,
      inputWidth: 0,
      initialInputHeight: 0,
      cachedPlaceHolder: '',
      visible: false,
      softFocus: false,
      selectedLabel: '',
      inputHovering: false,
      currentPlaceholder: '',
      menuVisibleOnFocus: false,
      isOnComposition: false,
      isSilentBlur: false,
    }
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize
    },

    readonly() {
      return !isIE() && !isEdge()
    },

    showClose() {
      let hasValue = this.value !== undefined && this.value !== null && this.value !== ''
      let criteria = this.clearable && !this.selectDisabled && this.inputHovering && hasValue
      return criteria
    },

    iconClass() {
      return this.visible ? 'arrow-up is-reverse' : 'arrow-up'
    },

    emptyText() {
      if (this.options.length === 0) {
        return this.noDataText || this.t('el.select.noData')
      }
      return null
    },

    selectSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    },

    selectDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    },

    propPlaceholder() {
      return typeof this.placeholder !== 'undefined' ? this.placeholder : this.t('el.select.placeholder')
    },

    popperStyle() {
      let style = {}
      if (this.popperWidth) {
        style.width = this.popperWidth
      }
      return style
    },

    popperHeightStyle() {
      let style = {}
      if (this.popperMaxHeight) {
        style.maxHeight = this.popperMaxHeight
      }
      return style
    },

    columnWidth() {
      let column = this.column > 2 ? this.column : 2 // 最小两列
      return 100 / column + '%'
    },

    columnData() {
      if (this.data && this.data.length) {
        let wrapData = []
        let column = this.column > 2 ? this.column : 2 // 最小两列
        for (let i = 0; i < column; i++) {
          wrapData.push({
            id: `cute-area-option-${i}`,
            data: this.data.filter((item, index) => index % column === i),
          })
        }
        return wrapData
      }
      return []
    },
  },

  components: {
    CuteAreaDropdown,
    CuteAreaOption,
    CuteAreaRecent,
  },

  directives: { Clickoutside },

  watch: {
    selectDisabled() {
      this.$nextTick(() => {
        this.resetInputHeight()
      })
    },

    propPlaceholder(val) {
      this.cachedPlaceHolder = this.currentPlaceholder = val
    },

    value(val, oldVal) {
      this.setSelected()
      this.inputLength = 20
      if (!valueEquals(val, oldVal)) {
        this.dispatch('ElFormItem', 'el.form.change', val)
      }
    },

    visible(val) {
      if (!val) {
        this.broadcast('ElSelectDropdown', 'destroyPopper')
        if (this.$refs.input) {
          this.$refs.input.blur()
        }
        this.selectedLabel = ''
        this.inputLength = 20
        this.menuVisibleOnFocus = false
        if (this.selected && this.selected.label) {
          this.selectedLabel = this.format ? this.format(this.selected) : this.selected.label
        }
      } else {
        this.broadcast('ElSelectDropdown', 'updatePopper')
      }
      this.$emit('visible-change', val)
    },

    options() {
      if (this.$isServer) return
      this.$nextTick(() => {
        this.broadcast('ElSelectDropdown', 'updatePopper')
      })
      let inputs = this.$el.querySelectorAll('input')
      if ([].indexOf.call(inputs, document.activeElement) === -1) {
        this.setSelected()
      }
    },
  },

  created() {
    this.cachedPlaceHolder = this.currentPlaceholder = this.propPlaceholder
    if (Array.isArray(this.value)) {
      this.$emit('input', '')
    }

    this.$on('handleOptionClick', this.handleOptionSelect)
    this.$on('setSelected', this.setSelected)
  },

  mounted() {
    addResizeListener(this.$el, this.handleResize)

    const reference = this.$refs.reference
    if (reference && reference.$el) {
      const sizeMap = {
        medium: 36,
        small: 32,
        mini: 28,
      }
      const input = reference.$el.querySelector('input')
      this.initialInputHeight = input.getBoundingClientRect().height || sizeMap[this.selectSize]
    }
    this.$nextTick(() => {
      if (reference && reference.$el) {
        this.inputWidth = reference.$el.getBoundingClientRect().width
      }
    })
    this.setSelected()
  },

  beforeDestroy() {
    if (this.$el && this.handleResize) removeResizeListener(this.$el, this.handleResize)
  },

  methods: {
    selectCityClick(city) {
      this.setSelected(city[this.valueKey])
      this.$emit('change', city)
      this.visible = false
    },
    handleNavigate(direction) {
      if (this.isOnComposition) return

      this.navigateOptions(direction)
    },
    handleComposition(event) {
      const text = event.target.value
      if (event.type === 'compositionend') {
        this.isOnComposition = false
      } else {
        const lastCharacter = text[text.length - 1] || ''
        this.isOnComposition = !isKorean(lastCharacter)
      }
    },

    scrollToOption(option) {
      const target = Array.isArray(option) && option[0] ? option[0].$el : option.$el
      if (this.$refs.popper && target) {
        const menu = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap')
        scrollIntoView(menu, target)
      }
    },

    handleMenuEnter() {
      this.$nextTick(() => this.scrollToOption(this.selected))
    },

    emitChange(val) {
      if (!valueEquals(this.value, val)) {
        this.$emit('change', val)
      }
    },

    getOption(value) {
      let option
      for (let i = this.cachedOptions.length - 1; i >= 0; i--) {
        const cachedOption = this.cachedOptions[i]
        const isEqual = cachedOption[this.valueKey] === value
        if (isEqual) {
          option = cachedOption
          break
        }
      }
      return option
    },

    setSelected(value) {
      let option = this.getOption(value || this.value)
      if (option) {
        this.selectedLabel = option.label
        this.selected = option
      } else {
        this.selectedLabel = ''
        this.selected = {}
      }
    },

    handleFocus(event) {
      if (!this.softFocus) {
        if (this.automaticDropdown) {
          if (!this.visible) {
            this.menuVisibleOnFocus = true
          }
          this.visible = true
        }
        this.$emit('focus', event)
      } else {
        this.softFocus = false
      }
    },

    blur() {
      this.visible = false
      this.$refs.reference.blur()
    },

    handleBlur(event) {
      setTimeout(() => {
        if (this.isSilentBlur) {
          this.isSilentBlur = false
        } else {
          this.$emit('blur', event)
        }
      }, 50)
      this.softFocus = false
    },

    handleClearClick(event) {
      this.deleteSelected(event)
    },

    doDestroy() {
      this.$refs.popper && this.$refs.popper.doDestroy()
    },

    handleClose() {
      this.visible = false
    },

    resetInputHeight() {
      this.$nextTick(() => {
        if (!this.$refs.reference) return
        let inputChildNodes = this.$refs.reference.$el.childNodes
        let input = [].filter.call(inputChildNodes, item => item.tagName === 'INPUT')[0]
        const sizeInMap = this.initialInputHeight || 40
        input.style.height = sizeInMap + 'px'
        if (this.visible && this.emptyText !== false) {
          this.broadcast('ElSelectDropdown', 'updatePopper')
        }
      })
    },

    handleOptionSelect(option, byClick) {
      this.$emit('input', option.value)
      this.emitChange(option.value)
      this.visible = false
      this.isSilentBlur = byClick
      this.setSoftFocus()
      if (this.visible) return
      this.$nextTick(() => {
        this.scrollToOption(option)
      })
    },

    setSoftFocus() {
      this.softFocus = true
      const input = this.$refs.input || this.$refs.reference
      if (input) {
        input.focus()
      }
    },

    toggleMenu() {
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false
        } else {
          this.visible = !this.visible
        }
        if (this.visible) {
          ;(this.$refs.input || this.$refs.reference).focus()
        }
      }
    },

    selectOption() {
      if (!this.visible) {
        this.toggleMenu()
      }
    },

    deleteSelected(event) {
      event.stopPropagation()
      const value = ''
      this.$emit('input', value)
      this.emitChange(value)
      this.visible = false
      this.$emit('clear')
    },

    resetInputWidth() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width
    },

    handleResize() {
      this.resetInputWidth()
    },
  },
}
</script>
