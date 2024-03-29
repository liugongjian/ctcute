<template>
  <button
    class="el-button"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      type === 'text' && textType ? 'el-button--text--' + textType : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-square': square,
        'no-border': !border,
      },
    ]"
    @click="handleClick"
  >
    <span v-if="loading || icon" class="el-button__icon">
      <i v-if="loading" class="el-icon-loading"></i>
      <i v-if="icon && !loading && !isCutedIcon" :class="icon"></i>
      <svg-icon v-if="icon && !loading && isCutedIcon" :name="icon" />
    </span>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable vue/require-default-prop */
export default {
  name: 'ElButton',

  inject: {
    elForm: {
      default: '',
    },
    elFormItem: {
      default: '',
    },
  },

  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: String,
    icon: {
      type: String,
      default: '',
    },
    border: {
      type: Boolean,
      default: true,
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    textType: {
      type: String,
      default: 'default',
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    square: Boolean,
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
    },
    buttonDisabled() {
      return this.$options.propsData.hasOwnProperty('disabled') ? this.disabled : (this.elForm || {}).disabled
    },
    isCutedIcon() {
      return !this.icon.startsWith('el-')
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
  },
}
</script>
