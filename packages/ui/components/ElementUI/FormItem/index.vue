<template>
  <div
    class="el-form-item"
    :class="[
      {
        'el-form-item--feedback': elForm && elForm.statusIcon,
        'is-error': validateState === 'error',
        'is-validating': validateState === 'validating',
        'is-success': validateState === 'success',
        'is-required': isRequired || required,
        'is-no-asterisk': elForm && elForm.hideRequiredAsterisk,
      },
      sizeClass ? 'el-form-item--' + sizeClass : '',
    ]"
  >
    <LabelWrap
      :is-auto-width="labelStyle && labelStyle.width === 'auto'"
      :update-all="form.labelWidth === 'auto'"
    >
      <label v-if="label || $slots.label" :for="labelFor" class="el-form-item__label" :style="labelStyle">
        <slot name="label">{{ label + form.labelSuffix }}</slot>
      </label>
    </LabelWrap>
    <div class="el-form-item__content" :style="contentStyle">
      <div v-if="errorShowType === 'tooltip'">
        <el-tooltip
          v-model="errorTooltipVisible"
          :placement="placement"
          :manual="true"
          transition="''"
          popper-class="el-form-item__custom__error"
        >
          <template slot="content">
            <div class="el-form-item__custom__error__content">
              <i class="el-icon-warning"></i>
              <span>{{ validateMessage }}</span>
            </div>
          </template>
          <slot></slot>
        </el-tooltip>
      </div>

      <slot v-else></slot>
      <transition v-if="errorShowType === 'inline'" name="el-zoom-in-top">
        <slot
          v-if="validateState === 'error' && showMessage && form.showMessage"
          name="error"
          :error="validateMessage"
        >
          <div
            class="el-form-item__error"
            :class="{
              'el-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : (elForm && elForm.inlineMessage) || false,
            }"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
      <transition v-if="errorShowType === 'inline'" name="el-zoom-in-top"> </transition>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
import emitter from 'element-ui/src/mixins/emitter'
import objectAssign from 'element-ui/src/utils/merge'
import { noop, getPropByPath } from 'element-ui/src/utils/util'
import LabelWrap from './LabelWrap'
export default {
  name: 'ElFormItem',

  componentName: 'ElFormItem',
  components: {
    // use this component to calculate auto width
    LabelWrap,
  },

  mixins: [emitter],

  provide() {
    return {
      elFormItem: this,
    }
  },

  inject: ['elForm'],

  props: {
    errorShowType: {
      type: String,
      default: 'inline',
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: '',
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
  },
  data() {
    return {
      timeoutId: null,
      errorTooltipVisible: false,
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isNested: false,
      computedLabelWidth: '',
    }
  },
  computed: {
    labelFor() {
      return this.for || this.prop
    },
    labelStyle() {
      const ret = {}
      if (this.form.labelPosition === 'top') return ret
      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth) {
        ret.width = labelWidth
      }
      return ret
    },
    contentStyle() {
      const ret = {}
      const label = this.label
      if (this.form.labelPosition === 'top' || this.form.inline) return ret
      if (!label && !this.labelWidth && this.isNested) return ret
      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth === 'auto') {
        if (this.labelWidth === 'auto') {
          ret.marginLeft = this.computedLabelWidth
        } else if (this.form.labelWidth === 'auto') {
          ret.marginLeft = this.elForm.autoLabelWidth
        }
      } else {
        ret.marginLeft = labelWidth
      }
      return ret
    },
    form() {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName !== 'ElForm') {
        if (parentName === 'ElFormItem') {
          this.isNested = true
        }
        parent = parent.$parent
        parentName = parent.$options.componentName
      }
      return parent
    },
    fieldValue() {
      const model = this.form.model
      if (!model || !this.prop) {
        return
      }

      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      return getPropByPath(model, path, true).v
    },
    isRequired() {
      let rules = this.getRules()
      let isRequired = false

      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            isRequired = true
            return false
          }
          return true
        })
      }
      return isRequired
    },
    _formSize() {
      return this.elForm.size
    },
    elFormItemSize() {
      return this.size || this._formSize
    },
    sizeClass() {
      return this.elFormItemSize || (this.$ELEMENT || {}).size
    },
  },
  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value
        this.validateState = value ? 'error' : ''
      },
    },
    validateStatus(value) {
      this.validateState = value
    },
    validateMessage() {
      this.setErrorTooltipVisible()
    },
    rules(value) {
      if ((!value || value.length === 0) && this.required === undefined) {
        this.clearValidate()
      }
    },
  },
  mounted() {
    if (this.prop) {
      this.dispatch('ElForm', 'el.form.addField', [this])

      let initialValue = this.fieldValue
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue)
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue,
      })

      this.addValidateEvents()
    }
    window.addEventListener('resize', this.debounceHandleResize())
  },
  beforeDestroy() {
    this.dispatch('ElForm', 'el.form.removeField', [this])
    window.removeEventListener('resize', this.debounceHandleResize())
    clearTimeout(this.timeoutId)
  },
  methods: {
    setErrorTooltipVisible() {
      this.errorTooltipVisible = false
      this.timeoutId = setTimeout(() => {
        this.errorTooltipVisible =
          !!this.validateMessage &&
          this.validateState === 'error' &&
          this.showMessage &&
          this.form.showMessage
      }, 50)
    },

    debounce(func, delay) {
      let timer = null
      return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },

    debounceHandleResize() {
      return this.debounce(this.setErrorTooltipVisible.bind(this), 200)
    },

    validate(trigger, callback = noop) {
      this.validateDisabled = false
      const rules = this.getFilteredRule(trigger)
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback()
        return true
      }

      this.validateState = 'validating'

      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger
        })
      }
      descriptor[this.prop] = rules

      const validator = new AsyncValidator(descriptor)
      const model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage, invalidFields)
        this.elForm && this.elForm.$emit('validate', this.prop, !errors, this.validateMessage || null)
      })
    },
    clearValidate() {
      this.validateState = ''
      this.validateMessage = ''
      this.validateDisabled = false
    },
    resetField() {
      this.validateState = ''
      this.validateMessage = ''

      let model = this.form.model
      let value = this.fieldValue
      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      let prop = getPropByPath(model, path, true)

      this.validateDisabled = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue)
      } else {
        prop.o[prop.k] = this.initialValue
      }

      // reset validateDisabled after onFieldChange triggered
      this.$nextTick(() => {
        this.validateDisabled = false
      })

      this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue)
    },
    getRules() {
      let formRules = this.form.rules
      const selfRules = this.rules
      const requiredRule = this.required !== undefined ? { required: !!this.required } : []

      const prop = getPropByPath(formRules, this.prop || '')
      formRules = formRules ? prop.o[this.prop || ''] || prop.v : []

      return [].concat(selfRules || formRules || []).concat(requiredRule)
    },
    getFilteredRule(trigger) {
      const rules = this.getRules()

      return rules
        .filter(rule => {
          if (!rule.trigger || trigger === '') return true
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1
          } else {
            return rule.trigger === trigger
          }
        })
        .map(rule => objectAssign({}, rule))
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false
        return
      }

      this.validate('change')
    },
    updateComputedLabelWidth(width) {
      this.computedLabelWidth = width ? `${width}px` : ''
    },
    addValidateEvents() {
      const rules = this.getRules()

      if (rules.length || this.required !== undefined) {
        this.$on('el.form.blur', this.onFieldBlur)
        this.$on('el.form.change', this.onFieldChange)
      }
    },
    removeValidateEvents() {
      this.$off()
    },
  },
}
</script>
